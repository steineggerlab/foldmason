#include <fstream>
#include <iostream>
#include <random>
#include <algorithm>
#include <vector>
#include <set>
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
#include "StructureSmithWaterman.h"
#include "Neighbours.h"

/**
 * @brief Find and delete all-gap columns from a sub-collection of CIGAR vectors
 * 
 * @param indices 
 * @param cigars 
 */
void deleteGapCols(
    std::vector<size_t> &indices,
    std::vector<std::vector<Instruction> > &cigars_aa,
    std::vector<std::vector<Instruction> > &cigars_ss
) {
    int length = cigarLength(cigars_aa[indices[0]], true); 
    
    // mask of columns to delete
    std::vector<bool> isGap(length, true);
    for (size_t cigIndex : indices) {
        int seqIndex = 0;
        for (Instruction ins : cigars_aa[cigIndex]) {
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
            Instruction &ins_aa = cigars_aa[cigIndex][i];
            Instruction &ins_ss = cigars_ss[cigIndex][i];
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

/**
 * Generate two unsigned long longs representing split group bitmasks.
 */
std::pair<unsigned long long, unsigned long long> vectorBoolToULL(const std::vector<bool>& bitmask, size_t groupOneSize) {
    unsigned long long longOne = 0;
    unsigned long long longTwo = 0;
    for (size_t i = 0; i < groupOneSize; i++) {
        if (bitmask[i]) {
            longOne |= (1ULL << i);
        }
    }
    for (size_t i = groupOneSize; i < bitmask.size(); i++) {
        if (bitmask[i]) {
            longTwo |= (1ULL << i);
        }
    }
    return std::make_pair(longOne, longTwo);
}

template<typename RNG>
void refineOne(
    std::vector<std::vector<Instruction> > &cigars_aa,
    std::vector<std::vector<Instruction> > &cigars_ss,
    PSSMCalculator &calculator_aa,
    MsaFilter &filter_aa,
    SubstitutionMatrix &subMat_aa,
    PSSMCalculator &calculator_3di,
    MsaFilter &filter_3di,
    SubstitutionMatrix &subMat_3di,
    bool filterMsa,
    bool compBiasCorrection,
    std::string & qid,
    float filterMaxSeqId,
    float Ndiff,
    float covMSAThr,
    float qsc,
    float matchRatio,
    int filterMinEnable,
    bool wg,
    int gapExtend,
    int gapOpen,
    std::vector<Sequence*> &sequences_aa,
    std::vector<Sequence*> &sequences_ss,
    RNG &rng,
    float scoreBias,
    float nbSigma,
    float nbLowCut,
    float nbMultiplier,
    bool fastMode,
    Neighbours* neighbourData,
    std::vector<size_t>* proteinOffsets
) {
    int sequenceCnt = cigars_aa.size();

    // Choose random size of group 1 in distribution from 1 to (N-1)
    std::uniform_int_distribution<> dist(1, sequenceCnt - 1);
    size_t groupOneSize = dist(rng); 
    const size_t neighbours = 48;

    // Create bitmask of length N, set group 1 size elements to true, then random shuffle
    std::vector<bool> bitmask(sequenceCnt, false);
    std::fill(bitmask.begin(), bitmask.begin() + groupOneSize, true);
    std::shuffle(bitmask.begin(), bitmask.end(), rng);

    // Build groups of subMSA indices based on this combination
    std::vector<size_t> group1;
    std::vector<size_t> group2;
    group1.reserve(groupOneSize);
    group2.reserve(sequenceCnt - groupOneSize);
    for (std::size_t i = 0; i < bitmask.size(); i++) {
        if (bitmask[i]) {
            group1.push_back(i);
        } else {
            group2.push_back(i);
        }
    }

    // Basic version
    // std::vector<size_t> numbers(sequenceCnt);
    // std::iota(numbers.begin(), numbers.end(), 0);
    // std::shuffle(numbers.begin(), numbers.end(), rng);
    // std::vector<size_t> group1(numbers.begin(), numbers.begin() + groupOneSize);
    // std::vector<size_t> group2(numbers.begin() + groupOneSize, numbers.end());
    
    // delete all-gap columns, if any, from cigars
    // TODO probably not necessary, all-gap columns are ignored in profile anyway
    deleteGapCols(group1, cigars_aa, cigars_ss);
    deleteGapCols(group2, cigars_aa, cigars_ss);
    
    // generate masks for each sub MSA
    std::string mask1 = computeProfileMask(group1, cigars_aa, cigars_ss, subMat_aa, subMat_3di, matchRatio);
    std::string mask2 = computeProfileMask(group2, cigars_aa, cigars_ss, subMat_aa, subMat_3di, matchRatio);
    std::vector<size_t> map1;
    std::vector<size_t> map2;
    std::vector<size_t> map1Rev;
    std::vector<size_t> map2Rev;
    maskToMapping(mask1, map1);
    maskToMapping(mask2, map2);
    maskToMappingRev(mask1, map1Rev);
    maskToMappingRev(mask2, map2Rev);
    
    // 
    bool *kept_raw1 = new bool[group1.size()];
    for (size_t z = 0; z < group1.size(); ++z) {
        kept_raw1[z] = 1;
    }
    std::vector<bool> kept1(group1.size());

    // msa2profile
    std::string profile1_aa = msa2profile(
        group1, cigars_aa, mask1, calculator_aa, filter_aa,
        subMat_aa, filterMsa, compBiasCorrection, qid, filterMaxSeqId,
        Ndiff, covMSAThr, qsc, filterMinEnable, wg, scoreBias
    );
    std::string profile1_ss = msa2profile(
        group1, cigars_ss, mask1, calculator_3di, filter_3di,
        subMat_3di, filterMsa, compBiasCorrection, qid, filterMaxSeqId,
        Ndiff, covMSAThr, qsc, filterMinEnable, wg, scoreBias
    );
    filter_aa.getKept(kept_raw1, group1.size());
    for (size_t z = 0; z < group1.size(); ++z) kept1[z] = kept_raw1[z];
    delete[] kept_raw1;
    
    bool *kept_raw2 = new bool[group2.size()];
    for (size_t z = 0; z < group2.size(); ++z) {
        kept_raw2[z] = 1;
    }
    std::vector<bool> kept2(group2.size());
    std::string profile2_aa = msa2profile(
        group2, cigars_aa, mask2, calculator_aa, filter_aa,
        subMat_aa, filterMsa, compBiasCorrection, qid, filterMaxSeqId,
        Ndiff, covMSAThr, qsc, filterMinEnable, wg, scoreBias
    );
    std::string profile2_ss = msa2profile(
        group2, cigars_ss, mask2, calculator_3di, filter_3di,
        subMat_3di, filterMsa, compBiasCorrection, qid, filterMaxSeqId,
        Ndiff, covMSAThr, qsc, filterMinEnable, wg, scoreBias
    );
    filter_aa.getKept(kept_raw2, group2.size());
    for (size_t z = 0; z < group2.size(); ++z) kept2[z] = kept_raw2[z];
    delete[] kept_raw2;

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
        std::swap(map1, map2);
        std::swap(map1Rev, map2Rev);
        std::swap(group1, group2);
        std::swap(qId, tId);
    }
    
    Matcher::result_t res;
    if (!fastMode) {
        float **lddtScoreMap = new float *[sequences_aa[qId]->L];                
        unsigned int **lddtCounts = new unsigned int *[sequences_aa[qId]->L];
        for (int z = 0; z < sequences_aa[qId]->L; z++) {
            lddtScoreMap[z] = new float [sequences_aa[tId]->L];
            lddtCounts[z] = new unsigned int [sequences_aa[tId]->L];
            memset(lddtScoreMap[z], 0, sizeof(float) * sequences_aa[tId]->L);
            memset(lddtCounts[z], 0, sizeof(unsigned int) * sequences_aa[tId]->L);
        }
        neighbourData->fillNeighbourScoreMatrix(
            lddtScoreMap, lddtCounts, sequences_aa[qId]->L, sequences_aa[tId]->L,
            group1, group2, kept1, kept2, map1Rev, map2Rev, *proteinOffsets,
            cigars_aa, true, true, filterMsa, neighbours, nbSigma, nbLowCut, nbMultiplier
        );
        res = pairwiseAlignment(
            sequences_aa[qId]->L,
            sequences_aa[qId], sequences_ss[qId],
            sequences_aa[tId], sequences_ss[tId],
            gapOpen,
            gapExtend,
            &subMat_aa,
            &subMat_3di,
            compBiasCorrection,
            lddtScoreMap
        );
        for (int32_t z = 0; z < sequences_aa[qId]->L; z++) {
            delete[] lddtScoreMap[z];
            delete[] lddtCounts[z];
        }
        delete[] lddtScoreMap;
        delete[] lddtCounts;
    } else {
        res = pairwiseAlignment(
            sequences_aa[qId]->L,
            sequences_aa[qId], sequences_ss[qId],
            sequences_aa[tId], sequences_ss[tId],
            gapOpen,
            gapExtend,
            &subMat_aa,
            &subMat_3di,
            compBiasCorrection,
            NULL
        );
    }
    std::vector<Instruction> qBt;
    std::vector<Instruction> tBt;
    getMergeInstructions(res, map1, map2, qBt, tBt);
    updateCIGARs(res, map1, map2, cigars_aa, cigars_ss, group1, group2, qBt, tBt);
}

void refineMany(
    DBReader<unsigned int> *seqDbrCA,
    std::vector<std::vector<Instruction> > &cigars_aa,
    std::vector<std::vector<Instruction> > &cigars_ss,
    PSSMCalculator &calculator_aa,
    MsaFilter &filter_aa,
    SubstitutionMatrix &subMat_aa,
    PSSMCalculator &calculator_3di,
    MsaFilter &filter_3di,
    SubstitutionMatrix &subMat_3di,
    int iterations,
    bool compBiasCorrection,
    bool wg,
    float filterMaxSeqId,
    float qsc,
    float matchRatio,
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
    int seed,
    bool onlyScoringCols,
    float scoreBias,
    float nbSigma,
    float nbLowCut,
    float nbMultiplier,
    bool fastMode,
    Neighbours *neighbourData,
    std::vector<size_t> *proteinOffsets
) {
    std::cout << "Running " << iterations << " refinement iterations\n";

    std::vector<size_t> subset(cigars_aa.size());
    for (size_t i = 0; i < subset.size(); i++) {
        subset[i] = i;
    }

    float prevLDDT = std::get<2>(calculate_lddt(cigars_aa, subset, indices, seqDbrCA, pairThreshold, onlyScoringCols));
    float initLDDT = prevLDDT;
    std::cout << "Initial LDDT: " << prevLDDT << '\n';

    std::vector<std::vector<Instruction> > cigars_new_aa;
    std::vector<std::vector<Instruction> > cigars_new_ss;

    std::vector<Sequence*> sequences_aa(2);
    std::vector<Sequence*> sequences_ss(2);
    sequences_aa[0] = new Sequence(maxSeqLen, Parameters::DBTYPE_HMM_PROFILE, (const BaseMatrix *) &subMat_aa,  0, false, compBiasCorrection);
    sequences_ss[0] = new Sequence(maxSeqLen, Parameters::DBTYPE_HMM_PROFILE, (const BaseMatrix *) &subMat_3di, 0, false, compBiasCorrection);
    sequences_aa[1] = new Sequence(maxSeqLen, Parameters::DBTYPE_HMM_PROFILE, (const BaseMatrix *) &subMat_aa,  0, false, compBiasCorrection);
    sequences_ss[1] = new Sequence(maxSeqLen, Parameters::DBTYPE_HMM_PROFILE, (const BaseMatrix *) &subMat_3di, 0, false, compBiasCorrection);

    if (seed == -1) {
        std::random_device rd;
        seed = rd();
    }
    std::mt19937 rng(seed);
    std::cout << "Using seed: " << std::to_string(seed) << '\n';

    int i = 0;
    while (i < iterations) {
        copyInstructionVectors(cigars_aa, cigars_new_aa);
        copyInstructionVectors(cigars_ss, cigars_new_ss);
        refineOne(
            cigars_new_aa, cigars_new_ss,
            calculator_aa, filter_aa, subMat_aa,
            calculator_3di, filter_3di, subMat_3di,
            filterMsa, compBiasCorrection,
            qid, filterMaxSeqId, Ndiff, covMSAThr, qsc, matchRatio, filterMinEnable,
            wg, gapExtend, gapOpen, sequences_aa, sequences_ss,
            rng, scoreBias, nbSigma, nbLowCut, nbMultiplier,
            fastMode, neighbourData, proteinOffsets
        );
        float lddtScore = std::get<2>(calculate_lddt(cigars_new_aa, subset, indices, seqDbrCA, pairThreshold, onlyScoringCols));
        // std::cout << std::fixed << std::setprecision(4) << "New LDDT: " << lddtScore << '\t' << "(" << i + 1 << ")\n";
        // for (std::vector<Instruction> &ins : cigars_new_aa) {
        //     std::cout << expand(ins) << '\n';
        // }
        // std::cout << std::fixed << std::setprecision(4) << prevLDDT << " -> " << lddtScore << " (+" << (lddtScore - prevLDDT) << ") #" << i + 1 << '\n';
        if (lddtScore > prevLDDT) {
            std::cout << std::fixed << std::setprecision(4) << prevLDDT << " -> " << lddtScore << " (+" << (lddtScore - prevLDDT) << ") #" << i + 1 << '\n';
            prevLDDT = lddtScore;
            std::swap(cigars_aa, cigars_new_aa);
            std::swap(cigars_ss, cigars_new_ss);
        }
        i++;
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
    std::vector<std::vector<Instruction> > cigars_aa;
    std::vector<std::vector<Instruction> > cigars_ss;
    std::vector<size_t> indices;
    std::vector<std::string> headers;
    int alnLength = 0;

    KSeqWrapper* kseq = KSeqFactory(par.db2.c_str());
    parseFasta(kseq, &seqDbrAA, &seqDbr3Di, headers, indices, cigars_aa, cigars_ss, alnLength);
    std::cout << "Parsed FASTA\n";

    int sequenceCnt = cigars_aa.size();
    int maxThreads = std::min(par.threads, static_cast<int>(sequenceCnt));
    
    SubstitutionMatrix subMat_3di(par.scoringMatrixFile.values.aminoacid().c_str(), par.bitFactor3Di, par.scoreBias);
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
    SubstitutionMatrix subMat_aa(blosum.c_str(), par.bitFactorAa, par.scoreBias);
    MsaFilter filter_aa(par.maxSeqLen + 1, sequenceCnt + 1, &subMat_aa, par.gapOpen.values.aminoacid(), par.gapExtend.values.aminoacid());
    MsaFilter filter_3di(par.maxSeqLen + 1, sequenceCnt + 1, &subMat_3di, par.gapOpen.values.aminoacid(), par.gapExtend.values.aminoacid()); 
    PSSMCalculator calculator_aa(&subMat_aa, par.maxSeqLen + 1, sequenceCnt + 1, par.pcmode, par.pca, par.pcb
#ifdef GAP_POS_SCORING
            , par.gapOpen.values.aminoacid(), par.gapPseudoCount
#endif
            );
    PSSMCalculator calculator_3di(&subMat_3di, par.maxSeqLen + 1, sequenceCnt + 1, par.pcmode, par.pca, par.pcb
#ifdef GAP_POS_SCORING
            , par.gapOpen.values.aminoacid(), par.gapPseudoCount
#endif
            );
    
    Neighbours *neighbourData;
    if (!par.fastMode) {
        int totalResidues = 0;
        const size_t neighbours = 48;
        par.nbSigma = 1.0f / par.nbSigma;
        const float thresh_sq = par.nbAngCut * par.nbAngCut;
        std::vector<size_t> proteinOffsets;
        size_t baseOut = 0;
        proteinOffsets.reserve(sequenceCnt + 1);
        proteinOffsets.push_back(0);
        for (std::vector<Instruction>& cigar : cigars_aa) {
            size_t length = cigarLength(cigar, false);            
            totalResidues += length;
            baseOut += length * neighbours;
            proteinOffsets.push_back(baseOut);
        }
        neighbourData = new Neighbours(totalResidues * neighbours);
        neighbourData->collectNeighbours(sequenceCnt, seqDbrAA, &seqDbrCA, proteinOffsets, neighbours, thresh_sq, maxThreads);
        refineMany(
            &seqDbrCA, cigars_aa, cigars_ss,
            calculator_aa, filter_aa, subMat_aa, calculator_3di, filter_3di, subMat_3di,
            par.refineIters, par.compBiasCorrection, par.wg, par.filterMaxSeqId,
            par.qsc, par.matchRatio, par.Ndiff, par.covMSAThr,
            par.filterMinEnable, par.filterMsa, par.gapExtend.values.aminoacid(), par.gapOpen.values.aminoacid(),
            par.maxSeqLen, par.qid, par.pairThreshold, indices, par.refinementSeed, par.onlyScoringCols, par.scoreBiasPSSM,
            par.nbSigma, par.nbLowCut, par.nbMultiplier, par.fastMode, neighbourData, &proteinOffsets
        );
 
    } else {
        refineMany(
            &seqDbrCA, cigars_aa, cigars_ss,
            calculator_aa, filter_aa, subMat_aa, calculator_3di, filter_3di, subMat_3di,
            par.refineIters, par.compBiasCorrection, par.wg, par.filterMaxSeqId,
            par.qsc, par.matchRatio, par.Ndiff, par.covMSAThr,
            par.filterMinEnable, par.filterMsa, par.gapExtend.values.aminoacid(), par.gapOpen.values.aminoacid(),
            par.maxSeqLen, par.qid, par.pairThreshold, indices, par.refinementSeed, par.onlyScoringCols, par.scoreBiasPSSM,
            par.nbSigma, par.nbLowCut, par.nbMultiplier, par.fastMode, NULL, NULL
        );
    }
   
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

    return EXIT_SUCCESS;
}