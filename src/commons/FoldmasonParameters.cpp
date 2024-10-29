#include "FoldmasonParameters.h"
#include "Command.h"
#include "Debug.h"

FoldmasonParameters::FoldmasonParameters() :
        LocalParameters(),
        PARAM_PCA_AA(PARAM_PCA_AA_ID, "--pca-aa", "AA alignment PCA", "", typeid(float), (void *) &pcaAa, "^([0-9]*\\.[0-9]*)$"),
        PARAM_PCB_AA(PARAM_PCB_AA_ID, "--pcb-aa", "AA alignment PCB", "", typeid(float), (void *) &pcbAa, "^([0-9]*\\.[0-9]*)$"),
        PARAM_PCA_3DI(PARAM_PCA_3DI_ID, "--pca-3di", "3Di alignment PCA", "", typeid(float), (void *) &pca3di, "^([0-9]*\\.[0-9]*)$"),
        PARAM_PCB_3DI(PARAM_PCB_3DI_ID, "--pcb-3di", "3Di alignment PCB", "", typeid(float), (void *) &pcb3di, "^([0-9]*\\.[0-9]*)$"),
        PARAM_SCORE_BIAS_AA(PARAM_SCORE_BIAS_AA_ID, "--score-bias-aa", "AA alignment score bias", "", typeid(float), (void *) &scoreBiasAa, "^([0-9]*\\.[0-9]*)$"),
        PARAM_SCORE_BIAS_3DI(PARAM_SCORE_BIAS_3DI_ID, "--score-bias-3di", "3Di alignment score bias", "", typeid(float), (void *) &scoreBias3di, "^([0-9]*\\.[0-9]*)$"),
        PARAM_GUIDE_TREE(PARAM_GUIDE_TREE_ID, "--guide-tree", "Input Newick guide tree", "Guide tree in Newick format", typeid(std::string), (void *) &guideTree, ".*\\.nw"),
        PARAM_RECOMPUTE_SCORES(PARAM_RECOMPUTE_SCORES_ID, "--recompute-scores", "Recompute scores", "Recompute all-vs-all alignment scores every iteration", typeid(bool), (void *) &recomputeScores, ""),
        PARAM_REGRESSIVE(PARAM_REGRESSIVE_ID, "--regressive", "Regressive alignment", "Align sequences root-to-leaf", typeid(bool), (void *) &regressive, ""),
        PARAM_PRECLUSTER(PARAM_PRECLUSTER_ID, "--precluster", "Pre-cluster structures", "Pre-cluster structures before constructing MSA", typeid(bool), (void *) &precluster, ""),
        PARAM_REFINE_ITERS(PARAM_REFINE_ITERS_ID, "--refine-iters", "Total refinement iterations", "Number of alignment refinement iterations", typeid(int), (void *) &refineIters, "[0-9]{1}[0-9]*$"),
        PARAM_BITFACTOR_AA(PARAM_BITFACTOR_AA_ID, "--bitfactor-aa", "AA matrix bit factor", "AA matrix bit factor", typeid(float), (void *) &bitFactorAa, "^([0-9]*\\.[0-9]*)$"),
        PARAM_BITFACTOR_3DI(PARAM_BITFACTOR_3DI_ID, "--bitfactor-3di", "3Di matrix bit factor", "3Di matrix bit factor", typeid(float), (void *) &bitFactor3Di, "^([0-9]*\\.[0-9]*)$"),
        PARAM_PAIR_THRESHOLD(PARAM_PAIR_THRESHOLD_ID, "--pair-threshold", "LDDT pair threshold", "% of pair subalignments with LDDT information [0.0,1.0]",typeid(float), (void *) &pairThreshold, "^0(\\.[0-9]+)?|1(\\.0+)?$"),
        PARAM_REPORT_COMMAND(PARAM_REPORT_COMMAND_ID, "--report-command", "", "", typeid(std::string), (void *) &reportCommand, ""),
        PARAM_REPORT_PATHS(PARAM_REPORT_PATHS_ID, "--report-paths", "", "", typeid(bool), (void *) &reportPaths, ""),
        PARAM_REFINE_SEED(PARAM_REFINE_SEED_ID, "--refine-seed", "Random number generator seed", "Random number generator seed", typeid(int), (void *) &refinementSeed, "^([-]?[0-9]*)$"),
        PARAM_FWBW_T(PARAM_FWBW_T_ID, "--fwbw-t", "FWBW temperature", "FWBW temperature", typeid(float), (void *) &fwbwT, "^([0-9]*\\.[0-9]*)$"),
        PARAM_FWBW_GO(PARAM_FWBW_GO_ID, "--fwbw-go", "FWBW gap open penalty", "FWBW gap open penalty", typeid(float), (void *) &fwbwGO, "^([0-9]*\\.[0-9]*)$"),
        PARAM_FWBW_GE(PARAM_FWBW_GE_ID, "--fwbw-ge", "FWBW gap extend penalty", "FWBW gap extend penalty", typeid(float), (void *) &fwbwGE, "^([0-9]*\\.[0-9]*)$"),
        PARAM_FWBW_MACT(PARAM_FWBW_MACT_ID, "--fwbw-mact", "MAC temperature", "MAC temperature", typeid(float), (void *) &fwbwMACT, "^0(\\.[0-9]+)?|1(\\.0+)?$")
{
    
    // structuremsa
    structuremsa.push_back(&PARAM_WG);
    structuremsa.push_back(&PARAM_MATCH_RATIO);
    structuremsa.push_back(&PARAM_FILTER_MSA);
    structuremsa.push_back(&PARAM_FILTER_NDIFF);
    structuremsa.push_back(&PARAM_FILTER_QSC);
    structuremsa.push_back(&PARAM_GAP_OPEN);
    structuremsa.push_back(&PARAM_GAP_EXTEND);
    structuremsa.push_back(&PARAM_MASK_PROFILE);
    structuremsa.push_back(&PARAM_PC_MODE);
    structuremsa.push_back(&PARAM_PCA_AA);
    structuremsa.push_back(&PARAM_PCB_AA);
    structuremsa.push_back(&PARAM_PCA_3DI);
    structuremsa.push_back(&PARAM_PCB_3DI);
    structuremsa.push_back(&PARAM_SCORE_BIAS_AA);
    structuremsa.push_back(&PARAM_SCORE_BIAS_3DI);
    structuremsa.push_back(&PARAM_GUIDE_TREE);
    structuremsa.push_back(&PARAM_RECOMPUTE_SCORES);
    structuremsa.push_back(&PARAM_REGRESSIVE);
    structuremsa.push_back(&PARAM_SUB_MAT);
    structuremsa.push_back(&PARAM_THREADS);
    structuremsa.push_back(&PARAM_MAX_SEQ_LEN);
    structuremsa.push_back(&PARAM_REFINE_ITERS);
    structuremsa.push_back(&PARAM_BITFACTOR_AA);
    structuremsa.push_back(&PARAM_BITFACTOR_3DI);
    structuremsa.push_back(&PARAM_PAIR_THRESHOLD);
    structuremsa.push_back(&PARAM_NO_COMP_BIAS_CORR);
    structuremsa.push_back(&PARAM_V);
    structuremsa.push_back(&PARAM_REFINE_SEED);
    structuremsa.push_back(&PARAM_FWBW_T);
    structuremsa.push_back(&PARAM_FWBW_MACT);
    structuremsa.push_back(&PARAM_FWBW_GE);
    structuremsa.push_back(&PARAM_FWBW_GO);

    structuremsacluster = combineList(structuremsacluster, structuremsa);

    // msa2lddt
    msa2lddt.push_back(&PARAM_PAIR_THRESHOLD);
    msa2lddt.push_back(&PARAM_THREADS);
    msa2lddt.push_back(&PARAM_GUIDE_TREE);
    msa2lddt.push_back(&PARAM_V);
    msa2lddt.push_back(&PARAM_REPORT_COMMAND);
    msa2lddt.push_back(&PARAM_REPORT_PATHS);

    // refinemsa
    refinemsa = combineList(refinemsa, structuremsa);
    
    // easymsa
    PARAM_REPORT_MODE.description = "MSA report mode 0: AA/3Di FASTA files only, 1: Compute LDDT and generate HTML report, 2: Compute LDDT and generate JSON";
    PARAM_REPORT_MODE.regex = "^[0-2]{1}$";
    easymsaworkflow = combineList(easymsaworkflow, structurecreatedb);
    easymsaworkflow = combineList(easymsaworkflow, structuremsa);
    easymsaworkflow = combineList(easymsaworkflow, msa2lddt);
    easymsaworkflow.push_back(&PARAM_PRECLUSTER);
    easymsaworkflow.push_back(&PARAM_REPORT_MODE);

    pcaAa = 1.1;
    pcbAa = 4.1;
    pca3di = 1.4;
    pcb3di = 1.5;
    scoreBiasAa = 0.6;
    scoreBias3di = 0.6;
    matchRatio = 0.51;
    guideTree = "";
    reportCommand = "";
    reportPaths = true;
    recomputeScores = false;
    regressive = false;
    precluster = false;
    refineIters = 0;
    bitFactorAa = 1.1;
    bitFactor3Di = 2.1;
    pairThreshold = 0.0;
    wg = true;
    refinementSeed = -1;
    
    fwbwT = 10.0;
    fwbwMACT = 0.001;
    fwbwGO = 3.5;
    fwbwGE = 0.3;

    citations.emplace(CITATION_FOLDMASON, " << TODO >> ");
}