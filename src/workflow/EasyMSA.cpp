#include <cassert>
#include <FoldmasonParameters.h>
#include "LinsearchIndexReader.h"
#include "PrefilteringIndexReader.h"
#include "CommandCaller.h"
#include "Util.h"
#include "Debug.h"
#include "Parameters.h"
#include "easymsa.sh.h"

void setEasyMSADefaults(Parameters *p) {
    p->sensitivity = 9.5;
    p->removeTmpFiles = true;
    p->alignmentMode = Parameters::ALIGNMENT_MODE_SCORE_COV_SEQID;
}

int easymsa(int argc, const char **argv, const Command &command) {
    FoldmasonParameters &par = FoldmasonParameters::getFoldmasonInstance();

    par.PARAM_ADD_BACKTRACE.addCategory(MMseqsParameter::COMMAND_EXPERT);
    par.PARAM_MAX_REJECTED.addCategory(MMseqsParameter::COMMAND_EXPERT);
    par.PARAM_ZDROP.addCategory(MMseqsParameter::COMMAND_EXPERT);
    par.PARAM_DB_OUTPUT.addCategory(MMseqsParameter::COMMAND_EXPERT);
    par.PARAM_OVERLAP.addCategory(MMseqsParameter::COMMAND_EXPERT);
    par.PARAM_DB_OUTPUT.addCategory(MMseqsParameter::COMMAND_EXPERT);
    par.PARAM_RESCORE_MODE.addCategory(MMseqsParameter::COMMAND_EXPERT);
    for (size_t i = 0; i < par.createdb.size(); i++){
        par.createdb[i]->addCategory(MMseqsParameter::COMMAND_EXPERT);
    }

    par.PARAM_COMPRESSED.removeCategory(MMseqsParameter::COMMAND_EXPERT);
    par.PARAM_THREADS.removeCategory(MMseqsParameter::COMMAND_EXPERT);
    par.PARAM_V.removeCategory(MMseqsParameter::COMMAND_EXPERT);

    setEasyMSADefaults(&par);
    
    par.parseParameters(argc, argv, command, false, Parameters::PARSE_VARIADIC, 0);
    
    // Different default params when not using neighborhood scoring
    if (par.fastMode) {
        for (size_t i = 0; i < par.structuremsa.size(); ++i) {
            if (par.structuremsa[i]->wasSet) continue;
            if (par.structuremsa[i]->uniqid == par.PARAM_NO_COMP_BIAS_CORR.uniqid) par.compBiasCorrection = 0;
            else if (par.structuremsa[i]->uniqid == par.PARAM_SCORE_BIAS.uniqid) par.scoreBias = 1.6f;
            else if (par.structuremsa[i]->uniqid == par.PARAM_SCORE_BIAS_PSSM.uniqid) par.scoreBiasPSSM = 0.5f;
            else if (par.structuremsa[i]->uniqid == par.PARAM_GAP_OPEN.uniqid) par.gapOpen = MultiParam<NuclAA<int>>(23);
            else if (par.structuremsa[i]->uniqid == par.PARAM_GAP_EXTEND.uniqid) par.gapExtend = MultiParam<NuclAA<int>>(2);
            else if (par.structuremsa[i]->uniqid == par.PARAM_SW_GAP_OPEN.uniqid) par.swGapOpen = 8;
            else if (par.structuremsa[i]->uniqid == par.PARAM_SW_GAP_EXTEND.uniqid) par.swGapExtend = 5;
        }
    }
    
    par.printParameters(command.cmd, argc, argv, *command.params);

    bool needBacktrace = false;
    bool needTaxonomy = false;
    bool needTaxonomyMapping = false;
    bool needLookup = false;
    {
        bool needSequenceDB = false;
        bool needFullHeaders = false;
        bool needSource = false;
        Parameters::getOutputFormat(par.formatAlignmentMode, par.outfmt, needSequenceDB, needBacktrace, needFullHeaders,
                                    needLookup, needSource, needTaxonomyMapping, needTaxonomy);
    }

    if (par.formatAlignmentMode == Parameters::FORMAT_ALIGNMENT_SAM || par.greedyBestHits) {
        needBacktrace = true;
    }
    if (needBacktrace) {
        Debug(Debug::INFO) << "Alignment backtraces will be computed, since they were requested by output format.\n";
        par.addBacktrace = true;
        par.PARAM_ADD_BACKTRACE.wasSet = true;
    }
    if(needLookup){
        par.writeLookup = true;
    }

    std::string tmpDir = par.filenames.back();
    std::string hash = SSTR(par.hashParameter(command.databases, par.filenames, *command.params));
    if (par.reuseLatest) {
        hash = FileUtil::getHashFromSymLink(tmpDir + "/latest");
    }
    tmpDir = FileUtil::createTemporaryDirectory(tmpDir, hash);
    par.filenames.pop_back();

    CommandCaller cmd;
    cmd.addVariable("STRUCTUREMSA_PAR", par.createParameterString(par.structuremsa).c_str());
    cmd.addVariable("TMP_PATH", tmpDir.c_str());
    cmd.addVariable("RESULTS", par.filenames.back().c_str());
    par.filenames.pop_back();
    cmd.addVariable("LEAVE_INPUT", par.dbOut ? "TRUE" : NULL);

    par.spacedKmer = true;
    par.covThr = 0.9;
    par.evalThr = 0.01;
    par.sortByStructureBits = 0;
    par.kmersPerSequence = 300;
    par.maskMode = 0;
    par.compBiasCorrection = 0;
    cmd.addVariable("KMERMATCHER_PAR", par.createParameterString(par.kmermatcher).c_str());
    cmd.addVariable("ALIGN_PAR", par.createParameterString(par.structurealign).c_str());
    cmd.addVariable("CLUST_PAR", par.createParameterString(par.clust).c_str());
    cmd.addVariable("REMOVE_TMP", par.removeTmpFiles ? "TRUE" : NULL);

    cmd.addVariable("RUNNER", par.runner.c_str());
    cmd.addVariable("THREADS_PAR", par.createParameterString(par.onlythreads).c_str());
    cmd.addVariable("VERBOSITY", par.createParameterString(par.onlyverbosity).c_str());
    cmd.addVariable("PRECLUSTER", par.precluster ? "TRUE" : NULL); 
    cmd.addVariable("MAKE_REPORT", std::to_string(par.reportMode).c_str());
    cmd.addVariable("CREATEDB_PAR", par.createParameterString(par.structurecreatedb).c_str());

    // needs to be last
    std::vector<MMseqsParameter *> msa2lddtWithoutTree;
    par.PARAM_GAP_OPEN.wasSet = true;
    par.PARAM_GAP_EXTEND.wasSet = true;
    par.PARAM_MATCH_RATIO.wasSet = true;
    par.PARAM_FILTER_MSA.wasSet = true;
    par.reportCommand = par.createParameterString(par.easymsaworkflow, true);
    for (size_t i = 0; i < par.msa2lddt.size(); i++) {
        if (par.msa2lddt[i]->uniqid != par.PARAM_GUIDE_TREE.uniqid) {
            msa2lddtWithoutTree.push_back(par.msa2lddt[i]);
        }
    }
    cmd.addVariable("MSA2LDDT_PAR", par.createParameterString(msa2lddtWithoutTree).c_str());

    std::string program = tmpDir + "/easymsa.sh";
    FileUtil::writeFile(program, easymsa_sh, easymsa_sh_len);
    cmd.execProgram(program.c_str(), par.filenames);

    // Should never get here
    assert(false);
    return EXIT_FAILURE;
}
