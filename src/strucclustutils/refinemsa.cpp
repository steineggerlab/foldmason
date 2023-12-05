#include <fstream>
#include <iostream>
#include <vector>
#include "DBReader.h"
#include "Sequence.h"
#include "kseq.h"
#include "KSeqBufferReader.h"
#include "KSeqWrapper.h"
#include "Matcher.h"
#include "structuremsa.h"
#include "msa2lddt.h"
#include "FoldmasonParameters.h"
#include "IndexReader.h"
#include "DBWriter.h"
#include "assert.h"

/**
 * @brief Find and delete all-gap columns from a sub-collection of CIGAR vectors
 * 
 * @param indices 
 * @param cigars 
 */
void deleteGapCols(
    std::vector<size_t> &indices,
    std::vector<std::vector<Instruction2> > &cigars_aa,
    std::vector<std::vector<Instruction2> > &cigars_ss
) {
    int length = cigarLength(cigars_aa[indices[0]], true); 
    
    // mask of columns to delete
    std::vector<bool> isGap(length, true);
    for (size_t cigIndex : indices) {
        int seqIndex = 0;
        for (Instruction2 ins : cigars_aa[cigIndex]) {
            if (ins.isSeq()) {
                if (isGap[seqIndex])
                    isGap[seqIndex] = false;
                seqIndex++;
            } else {
                seqIndex += ins.bits.count;
            }
        }
    }
   
    // adjust gap counts for deleted columns
    for (size_t cigIndex : indices) {
        int seqIndex = 0;
        std::vector<int> toPop;  // instructions to remove if count = 0
        for (size_t i = 0; i < cigars_aa[cigIndex].size(); i++) {
            Instruction2 &ins_aa = cigars_aa[cigIndex][i];
            Instruction2 &ins_ss = cigars_ss[cigIndex][i];
            if (ins_aa.isSeq()) {
                seqIndex++;
            } else {
                int toDelete = 0;
                for (int i = 0; i < ins_aa.bits.count; i++) {
                    if (isGap[seqIndex])
                        toDelete++;
                    seqIndex++;
                }
                if (toDelete) {
                    ins_aa.bits.count -= toDelete;
                    ins_ss.bits.count -= toDelete;
                }
                if (ins_aa.bits.count == 0) {
                    toPop.insert(toPop.begin(), i);                    
                }
            }
        }
        for (int i : toPop) {
            cigars_aa[cigIndex].erase(cigars_aa[cigIndex].begin() + i);
            cigars_ss[cigIndex].erase(cigars_ss[cigIndex].begin() + i);
        }
    }
}

void refineOne(
    int8_t * tinySubMatAA,
    int8_t * tinySubMat3Di,
    std::vector<std::vector<Instruction2> > &cigars_aa,
    std::vector<std::vector<Instruction2> > &cigars_ss,
    PSSMCalculator &calculator_aa,
    MsaFilter &filter_aa,
    SubstitutionMatrix &subMat_aa,
    PSSMCalculator &calculator_3di,
    MsaFilter &filter_3di,
    SubstitutionMatrix &subMat_3di,
    StructureSmithWaterman &structureSmithWaterman,
    std::vector<int> &seqLens,
    bool filterMsa,
    bool compBiasCorrection,
    std::string & qid,
    float filterMaxSeqId,
    float Ndiff,
    float covMSAThr,
    float qsc,
    int filterMinEnable,
    bool wg,
    int gapExtend,
    int gapOpen,
    std::vector<Sequence*> &sequences_aa,
    std::vector<Sequence*> &sequences_ss
) {
    int sequenceCnt = cigars_aa.size();

    // split into two groups
    // TODO move this into refineMany
    //      potentially add non-random sweep of combinations before random
    std::vector<size_t> group1;
    std::vector<size_t> group2;
    for (int j = 0; j < sequenceCnt; j++) {
        if (std::rand() % 2 == 0) {
        // if (j >= (sequenceCnt / 2)) {
            group1.push_back(j);
        } else {
            group2.push_back(j);
        }
    }
   
    // delete all-gap columns, if any, from cigars
    // TODO probably not necessary, all-gap columns are ignored in profile anyway
    deleteGapCols(group1, cigars_aa, cigars_ss);
    deleteGapCols(group2, cigars_aa, cigars_ss);
    
    // generate masks for each sub MSA
    std::string mask1 = computeProfileMask(group1, cigars_aa, seqLens, subMat_aa, 1.0);
    std::string mask2 = computeProfileMask(group2, cigars_aa, seqLens, subMat_aa, 1.0);
    std::vector<int> map1 = maskToMapping(mask1);
    std::vector<int> map2 = maskToMapping(mask2);

    // msa2profile
    std::string profile1_aa = msa2profile(
        group1, cigars_aa, mask1, calculator_aa, filter_aa,
        subMat_aa, filterMsa, compBiasCorrection, qid, filterMaxSeqId,
        Ndiff, covMSAThr, qsc, filterMinEnable, wg
    );
    std::string profile1_ss = msa2profile(
        group1, cigars_ss, mask1, calculator_3di, filter_3di,
        subMat_3di, filterMsa, compBiasCorrection, qid, filterMaxSeqId,
        Ndiff, covMSAThr, qsc, filterMinEnable, wg
    );
    std::string profile2_aa = msa2profile(
        group2, cigars_aa, mask2, calculator_aa, filter_aa,
        subMat_aa, filterMsa, compBiasCorrection, qid, filterMaxSeqId,
        Ndiff, covMSAThr, qsc, filterMinEnable, wg
    );
    std::string profile2_ss = msa2profile(
        group2, cigars_ss, mask2, calculator_3di, filter_3di,
        subMat_3di, filterMsa, compBiasCorrection, qid, filterMaxSeqId,
        Ndiff, covMSAThr, qsc, filterMinEnable, wg
    );
    assert(profile1_aa.length() == profile1_ss.length());
    assert(profile2_aa.length() == profile2_ss.length());

    // new Sequences
    int qId = 0;
    int tId = 1;
    sequences_aa[0]->mapSequence(0, 0, profile1_aa.c_str(), profile1_aa.length() / Sequence::PROFILE_READIN_SIZE);
    sequences_ss[0]->mapSequence(0, 0, profile1_ss.c_str(), profile1_ss.length() / Sequence::PROFILE_READIN_SIZE);
    sequences_aa[1]->mapSequence(1, 1, profile2_aa.c_str(), profile2_aa.length() / Sequence::PROFILE_READIN_SIZE);
    sequences_ss[1]->mapSequence(1, 1, profile2_ss.c_str(), profile2_ss.length() / Sequence::PROFILE_READIN_SIZE);

    float q_neff_sum = 0.0;
    float t_neff_sum = 0.0;
    for (int i = 0; i < sequences_aa[qId]->L; i++)
        q_neff_sum += sequences_aa[qId]->neffM[i];
    for (int i = 0; i < sequences_aa[tId]->L; i++)
        q_neff_sum += sequences_aa[tId]->neffM[i];
    if (q_neff_sum <= t_neff_sum) {
        std::swap(mask1, mask2);
        std::swap(group1, group2);
        std::swap(qId, tId);
    }
    structureSmithWaterman.ssw_init(
        sequences_aa[qId],
        sequences_ss[qId],
        tinySubMatAA, tinySubMat3Di, &subMat_aa
    );
    Matcher::result_t result = pairwiseAlignment(
        structureSmithWaterman,
        sequences_aa[qId]->L,
        sequences_aa[qId], sequences_ss[qId],
        sequences_aa[tId], sequences_ss[tId],
        gapOpen, gapExtend,
        &subMat_aa, &subMat_3di,
        compBiasCorrection
    );
    std::vector<Instruction2> qBt;
    std::vector<Instruction2> tBt;
    getMergeInstructions(result, map1, map2, qBt, tBt);
    updateCIGARS(group1, group2, cigars_aa, cigars_ss, result, map1, map2, qBt, tBt);
    
    // testSeqLens(group1, cigars_aa, seqLens);
    // testSeqLens(group2, cigars_aa, seqLens);
}

void refineMany(
    int8_t * tinySubMatAA,
    int8_t * tinySubMat3Di,
    DBReader<unsigned int> *seqDbrCA,
    std::vector<std::vector<Instruction2> > &cigars_aa,
    std::vector<std::vector<Instruction2> > &cigars_ss,
    PSSMCalculator &calculator_aa,
    MsaFilter &filter_aa,
    SubstitutionMatrix &subMat_aa,
    PSSMCalculator &calculator_3di,
    MsaFilter &filter_3di,
    SubstitutionMatrix &subMat_3di,
    StructureSmithWaterman & structureSmithWaterman,
    int iterations,
    bool compBiasCorrection,
    bool wg,
    float filterMaxSeqId,
    float qsc,
    int Ndiff,
    float covMSAThr,
    int filterMinEnable,
    int filterMsa,
    int gapExtend,
    int gapOpen,
    int maxSeqLen,
    std::string qid,
    float pairThreshold,
    std::vector<size_t> indices,
    std::vector<int> lengths
) {
    std::cout << "Running " << iterations << " refinement iterations\n";

    std::vector<size_t> subset(cigars_aa.size());
    for (size_t i = 0; i < subset.size(); i++) {
        subset[i] = i;
    }

    float prevLDDT = std::get<2>(calculate_lddt(cigars_aa, subset, indices, lengths, seqDbrCA, pairThreshold));
    float initLDDT = prevLDDT;
    std::cout << "Initial LDDT: " << prevLDDT << '\n';

    std::vector<std::vector<Instruction2> > cigars_new_aa;
    std::vector<std::vector<Instruction2> > cigars_new_ss;

    std::vector<Sequence*> sequences_aa(2);
    std::vector<Sequence*> sequences_ss(2);
    sequences_aa[0] = new Sequence(maxSeqLen, Parameters::DBTYPE_HMM_PROFILE, (const BaseMatrix *) &subMat_aa,  0, false, compBiasCorrection);
    sequences_ss[0] = new Sequence(maxSeqLen, Parameters::DBTYPE_HMM_PROFILE, (const BaseMatrix *) &subMat_3di, 0, false, compBiasCorrection);
    sequences_aa[1] = new Sequence(maxSeqLen, Parameters::DBTYPE_HMM_PROFILE, (const BaseMatrix *) &subMat_aa,  0, false, compBiasCorrection);
    sequences_ss[1] = new Sequence(maxSeqLen, Parameters::DBTYPE_HMM_PROFILE, (const BaseMatrix *) &subMat_3di, 0, false, compBiasCorrection);

    for (int i = 0; i < iterations; i++) {
        copyInstructionVectors(cigars_aa, cigars_new_aa);
        copyInstructionVectors(cigars_ss, cigars_new_ss);
        refineOne(
            tinySubMatAA, tinySubMat3Di,
            cigars_new_aa, cigars_new_ss,
            calculator_aa, filter_aa, subMat_aa,
            calculator_3di, filter_3di, subMat_3di,
            structureSmithWaterman, lengths, filterMsa, compBiasCorrection,
            qid, filterMaxSeqId, Ndiff, covMSAThr, qsc, filterMinEnable,
            wg, gapExtend, gapOpen,
            sequences_aa, sequences_ss
        );
        float lddtScore = std::get<2>(calculate_lddt(cigars_new_aa, subset, indices, lengths, seqDbrCA, pairThreshold));
        // std::cout << std::fixed << std::setprecision(4) << "New LDDT: " << lddtScore << '\t' << "(" << i + 1 << ")\n";
        // for (std::vector<Instruction2> &ins : cigars_new_aa) {
        //     std::cout << expand(ins) << '\n';
        // }
        if (lddtScore > prevLDDT) {
            std::cout << std::fixed << std::setprecision(4) << prevLDDT << " -> " << lddtScore << " (+" << (lddtScore - prevLDDT) << ") #" << i + 1 << '\n';
            prevLDDT = lddtScore;
            std::swap(cigars_aa, cigars_new_aa);
            std::swap(cigars_ss, cigars_new_ss);
        }
    }
    float delta = prevLDDT - initLDDT;
    if (delta > 0.0) {
        std::cout << std::fixed << std::setprecision(4) << "Final LDDT: " << prevLDDT << " (+" << delta << ")\n";
    } else {
        std::cout << "Did not improve MSA\n";
    }
    for (size_t i = 0; i < sequences_aa.size(); i++) {
        delete sequences_aa[i];
        delete sequences_ss[i];
    }
}

int refinemsa(int argc, const char **argv, const Command& command) {
    FoldmasonParameters &par = FoldmasonParameters::getFoldmasonInstance();
    const bool touch = (par.preloadMode != Parameters::PRELOAD_MODE_MMAP);
    par.parseParameters(argc, argv, command, true, 0, MMseqsParameter::COMMAND_ALIGN);
    
    if (par.refineIters <= 0.0) {
        std::cerr << "Expected >0 refinement iterations\n";
        return EXIT_FAILURE;
    }

    DBReader<unsigned int> seqDbrAA(par.db1.c_str(), par.db1Index.c_str(), par.threads, DBReader<unsigned int>::USE_INDEX|DBReader<unsigned int>::USE_DATA|DBReader<unsigned int>::USE_LOOKUP_REV);
    seqDbrAA.open(DBReader<unsigned int>::NOSORT);
    DBReader<unsigned int> seqDbr3Di((par.db1+"_ss").c_str(), (par.db1+"_ss.index").c_str(), par.threads, DBReader<unsigned int>::USE_INDEX|DBReader<unsigned int>::USE_DATA);
    seqDbr3Di.open(DBReader<unsigned int>::NOSORT);
    DBReader<unsigned int> seqDbrCA((par.db1+"_ca").c_str(), (par.db1+"_ca.index").c_str(), par.threads, DBReader<unsigned int>::USE_INDEX|DBReader<unsigned int>::USE_DATA);
    seqDbrCA.open(DBReader<unsigned int>::NOSORT);

    IndexReader qdbrH(par.db1, par.threads, IndexReader::HEADERS, touch ? IndexReader::PRELOAD_INDEX : 0);

    // Read in FASTA alignment
    std::vector<std::vector<Instruction2> > cigars_aa;
    std::vector<std::vector<Instruction2> > cigars_ss;
    std::vector<size_t> indices;
    std::vector<int> lengths;
    std::vector<std::string> headers;
    int alnLength = 0;

    KSeqWrapper* kseq = KSeqFactory(par.db2.c_str());
    parseFasta(kseq, &seqDbrAA, &seqDbr3Di, headers, indices, lengths, cigars_aa, cigars_ss, alnLength);
    std::cout << "Parsed FASTA\n";

    int sequenceCnt = cigars_aa.size();
    
    SubstitutionMatrix subMat_3di(par.scoringMatrixFile.values.aminoacid().c_str(), par.bitFactor3Di, par.scoreBias3di);
    std::string blosum;
    for (size_t i = 0; i < par.substitutionMatrices.size(); i++) {
        if (par.substitutionMatrices[i].name == "blosum62.out") {
            std::string matrixData((const char *)par.substitutionMatrices[i].subMatData, par.substitutionMatrices[i].subMatDataLen);
            std::string matrixName = par.substitutionMatrices[i].name;
            char * serializedMatrix = BaseMatrix::serialize(matrixName, matrixData);
            blosum.assign(serializedMatrix);
            free(serializedMatrix);
        }
    }
    SubstitutionMatrix subMat_aa(blosum.c_str(), par.bitFactorAa, par.scoreBiasAa);

    // Substitution matrices needed for query profile
    int8_t *tinySubMatAA  = (int8_t*) mem_align(ALIGN_INT, subMat_aa.alphabetSize * 32);
    int8_t *tinySubMat3Di = (int8_t*) mem_align(ALIGN_INT, subMat_3di.alphabetSize * 32);

    for (int i = 0; i < subMat_aa.alphabetSize; i++)
        for (int j = 0; j < subMat_aa.alphabetSize; j++)
            tinySubMatAA[i * subMat_aa.alphabetSize + j] = subMat_aa.subMatrix[i][j];
    for (int i = 0; i < subMat_3di.alphabetSize; i++)
        for (int j = 0; j < subMat_3di.alphabetSize; j++)
            tinySubMat3Di[i * subMat_3di.alphabetSize + j] = subMat_3di.subMatrix[i][j]; // for farrar profile

    StructureSmithWaterman structureSmithWaterman(par.maxSeqLen, subMat_3di.alphabetSize, par.compBiasCorrection, par.compBiasCorrectionScale, &subMat_aa, &subMat_3di);
    MsaFilter filter_aa(par.maxSeqLen + 1, sequenceCnt + 1, &subMat_aa, par.gapOpen.values.aminoacid(), par.gapExtend.values.aminoacid());
    MsaFilter filter_3di(par.maxSeqLen + 1, sequenceCnt + 1, &subMat_3di, par.gapOpen.values.aminoacid(), par.gapExtend.values.aminoacid()); 
    PSSMCalculator calculator_aa(&subMat_aa, par.maxSeqLen + 1, sequenceCnt + 1, par.pcmode, par.pcaAa, par.pcbAa
#ifdef GAP_POS_SCORING
            , par.gapOpen.values.aminoacid(), par.gapPseudoCount
#endif
            );
    PSSMCalculator calculator_3di(&subMat_3di, par.maxSeqLen + 1, sequenceCnt + 1, par.pcmode, par.pca3di, par.pcb3di
#ifdef GAP_POS_SCORING
            , par.gapOpen.values.aminoacid(), par.gapPseudoCount
#endif
            );
    
    // Refine for N iterations
    refineMany(
        tinySubMatAA, tinySubMat3Di, &seqDbrCA, cigars_aa, cigars_ss,
        calculator_aa, filter_aa, subMat_aa, calculator_3di, filter_3di, subMat_3di,
        structureSmithWaterman, par.refineIters, par.compBiasCorrection, par.wg, par.filterMaxSeqId,
        par.qsc, par.Ndiff, par.covMSAThr,
        par.filterMinEnable, par.filterMsa, par.gapExtend.values.aminoacid(), par.gapOpen.values.aminoacid(),
        par.maxSeqLen, par.qid, par.pairThreshold, indices, lengths
    );
    
    // Write final MSA to file
    DBWriter resultWriter(
        par.db3.c_str(),
        (par.db3 + ".index").c_str(),
        static_cast<unsigned int>(par.threads),
        par.compressed,
        Parameters::DBTYPE_OMIT_FILE
    );
    resultWriter.open();
    std::string buffer;
    for (int i = 0; i < sequenceCnt; i++) {
        buffer.append(1, '>');
        buffer.append(headers[i]);
        buffer.append(1, '\n');
        // TODO format mode for 3di alignments ?
        buffer.append(expand(cigars_aa[i]));
        buffer.append(1, '\n');
        resultWriter.writeAdd(buffer.c_str(), buffer.size(), 0);
        buffer.clear();
    } 
    resultWriter.writeEnd(0, 0, false, 0);
    resultWriter.close(true);
    FileUtil::remove((par.db3 + ".index").c_str());

    // Cleanup
    seqDbrAA.close();
    seqDbr3Di.close();
    delete [] tinySubMatAA;
    delete [] tinySubMat3Di;

    return EXIT_SUCCESS;
}