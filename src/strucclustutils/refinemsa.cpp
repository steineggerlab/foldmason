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
#include "LocalParameters.h"
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
    std::vector<bool> isGap(length, false);
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
        for (size_t i = 0; i < cigars_aa[cigIndex].size(); i++) {
            Instruction2 ins_aa = cigars_aa[cigIndex][i];
            Instruction2 ins_ss = cigars_ss[cigIndex][i];
            if (ins_aa.isSeq()) {
                seqIndex++;
            } else {
                int toDelete = 0;
                for (int i = 0; i < ins_aa.bits.count; i++) {
                    if (isGap[seqIndex])
                        toDelete++;
                    seqIndex++;
                }
                ins_aa.bits.count -= toDelete;
                ins_ss.bits.count -= toDelete;
            }
        }
    }
}

void refineOne(
    int8_t * tinySubMatAA,
    int8_t * tinySubMat3Di,
    std::vector<std::vector<Instruction2> > cigars_aa,
    std::vector<std::vector<Instruction2> > cigars_ss,
    PSSMCalculator &calculator_aa,
    MsaFilter &filter_aa,
    SubstitutionMatrix &subMat_aa,
    PSSMCalculator &calculator_3di,
    MsaFilter &filter_3di,
    SubstitutionMatrix &subMat_3di,
    StructureSmithWaterman &structureSmithWaterman,
    float matchRatio,
    std::vector<int> seqLens,
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
    size_t maxSeqLength
) {
    int sequenceCnt = cigars_aa.size();

    // split into two groups
    std::vector<size_t> group1;
    std::vector<size_t> group2;
    for (int j = 0; j < sequenceCnt; j++) {
        if (std::rand() % 2 == 0) {
            group1.push_back(j);
        } else {
            group2.push_back(j);
        }
    }
    
    // delete all-gap columns, if any, from cigars
    // deleteGapCols(group1, cigars_aa, cigars_ss);
    // deleteGapCols(group2, cigars_aa, cigars_ss);
    // std::cout << "Deleted gap columns\n";
    
    // generate masks for each sub MSA
    std::string mask1 = computeProfileMask(group1, cigars_aa, seqLens, subMat_aa, matchRatio);
    std::string mask2 = computeProfileMask(group2, cigars_aa, seqLens, subMat_aa, matchRatio);
    std::cout << "Computed mask1: " << mask1 << "\n";
    std::cout << "Computed mask2: " << mask2 << "\n";

    // msa2profile
    std::string profile1_aa = msa2profile(
        group1, cigars_aa, mask1, calculator_aa, filter_aa,
        subMat_aa, filterMsa, compBiasCorrection, qid, filterMaxSeqId,
        Ndiff, covMSAThr, qsc, filterMinEnable, wg, maxSeqLength
    );
    std::string profile1_ss = msa2profile(
        group1, cigars_ss, mask1, calculator_3di, filter_3di,
        subMat_3di, filterMsa, compBiasCorrection, qid, filterMaxSeqId,
        Ndiff, covMSAThr, qsc, filterMinEnable, wg, maxSeqLength
    );
    std::string profile2_aa = msa2profile(
        group1, cigars_aa, mask1, calculator_aa, filter_aa,
        subMat_aa, filterMsa, compBiasCorrection, qid, filterMaxSeqId,
        Ndiff, covMSAThr, qsc, filterMinEnable, wg, maxSeqLength
    );
    std::string profile2_ss = msa2profile(
        group1, cigars_ss, mask1, calculator_3di, filter_3di,
        subMat_3di, filterMsa, compBiasCorrection, qid, filterMaxSeqId,
        Ndiff, covMSAThr, qsc, filterMinEnable, wg, maxSeqLength
    );
    assert(profile1_aa.length() == profile2_aa.length());
    assert(profile1_ss.length() == profile2_ss.length());
    std::cout << "Computed profiles\n";

    // new Sequences
    Sequence sequence1_aa(maxSeqLength, Parameters::DBTYPE_HMM_PROFILE, (const BaseMatrix *) &subMat_aa,  0, false, compBiasCorrection);
    Sequence sequence1_ss(maxSeqLength, Parameters::DBTYPE_HMM_PROFILE, (const BaseMatrix *) &subMat_aa,  0, false, compBiasCorrection);
    Sequence sequence2_aa(maxSeqLength, Parameters::DBTYPE_HMM_PROFILE, (const BaseMatrix *) &subMat_3di, 0, false, compBiasCorrection);
    Sequence sequence2_ss(maxSeqLength, Parameters::DBTYPE_HMM_PROFILE, (const BaseMatrix *) &subMat_3di, 0, false, compBiasCorrection);
    sequence1_aa.mapSequence(0, 0, profile1_aa.c_str(), profile1_aa.length() / Sequence::PROFILE_READIN_SIZE);
    sequence1_ss.mapSequence(1, 1, profile1_ss.c_str(), profile1_ss.length() / Sequence::PROFILE_READIN_SIZE);
    sequence2_aa.mapSequence(0, 0, profile2_aa.c_str(), profile2_aa.length() / Sequence::PROFILE_READIN_SIZE);
    sequence2_ss.mapSequence(1, 1, profile2_ss.c_str(), profile2_ss.length() / Sequence::PROFILE_READIN_SIZE);
    std::cout << "Made new Sequences\n";

    // determine query vs target
    float q_neff_sum = 0.0;
    float t_neff_sum = 0.0;
    for (int i = 0; i < sequence1_aa.L; i++)
        q_neff_sum += sequence1_aa.neffM[i];
    for (int i = 0; i < sequence2_aa.L; i++)
        t_neff_sum += sequence2_aa.neffM[i];
    if (q_neff_sum <= t_neff_sum) {
        std::swap(mask1, mask2);
        std::swap(group1, group2);
        std::swap(sequence1_aa, sequence2_aa);
        std::swap(sequence1_ss, sequence2_ss);
    }
    std::cout << "Chose query vs target\n";

    // alignment
    structureSmithWaterman.ssw_init(&sequence1_aa, &sequence1_ss, tinySubMatAA, tinySubMat3Di, &subMat_aa);
    std::vector<int> map1 = maskToMapping(mask1);
    std::vector<int> map2 = maskToMapping(mask2);
    std::cout << "Made maps\n";
    Matcher::result_t result = pairwiseAlignment(
        structureSmithWaterman,
        sequence1_aa.L,
        &sequence1_aa, &sequence1_ss,
        &sequence2_aa, &sequence2_ss,
        gapOpen,
        gapExtend,
        &subMat_aa,
        &subMat_3di,
        map1,
        map2
    );
    std::cout << "Did alignment: " << result.backtrace << "\n";
    std::vector<Instruction2> qBt;
    std::vector<Instruction2> tBt;
    getMergeInstructions(result, map1, map2, qBt, tBt);
    updateCIGARS(group1, group2, cigars_aa, cigars_ss, result, map1, map2, qBt, tBt);
}

// copy from one to two
void copyInstructions(std::vector<Instruction2> &one, std::vector<Instruction2> &two) {
    for (Instruction2 ins : one) {
        two.emplace_back(static_cast<int>(ins.bits.state), static_cast<int>(ins.bits.count));
    }
}

// copy from one to two
void copyInstructionVectors(std::vector<std::vector<Instruction2> > &one, std::vector<std::vector<Instruction2> > &two) {
    for (std::vector<Instruction2> vec : one) {
        std::vector<Instruction2> tmp;
        copyInstructions(vec, tmp);
        two.push_back(tmp);
    }
}

void refineMany(
    int8_t * tinySubMatAA,
    int8_t * tinySubMat3Di,
    DBReader<unsigned int> *seqDbrCA,
    std::vector<std::vector<Instruction2> > cigars_aa,
    std::vector<std::vector<Instruction2> > cigars_ss,
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
    float matchRatio,
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
        subset.push_back(i);
    }

    float prevLDDT = std::get<2>(calculate_lddt(cigars_aa, subset, indices, lengths, seqDbrCA, pairThreshold));
    std::cout << "Initial LDDT: " << prevLDDT << '\n';

    std::vector<std::vector<Instruction2> > cigars_new_aa;
    std::vector<std::vector<Instruction2> > cigars_new_ss;

    for (int i = 0; i < iterations; i++) {
        copyInstructionVectors(cigars_aa, cigars_new_aa);
        copyInstructionVectors(cigars_ss, cigars_new_ss);
        std::cout << "Copied vectors\n";
        refineOne(
            tinySubMatAA, tinySubMat3Di, cigars_aa, cigars_ss, calculator_aa,
            filter_aa, subMat_aa, calculator_3di, filter_3di, subMat_3di,
            structureSmithWaterman, matchRatio, lengths, filterMsa, compBiasCorrection,
            qid, filterMaxSeqId, Ndiff, covMSAThr, qsc, filterMinEnable,
            wg, gapExtend, gapOpen, maxSeqLen
        );
        std::cout << "Refinement " << i << '\n';
        float lddtScore = std::get<2>(calculate_lddt(cigars_aa, subset, indices, lengths, seqDbrCA, pairThreshold));
        if (lddtScore > prevLDDT) {
            std::cout << std::fixed << std::setprecision(4) << prevLDDT << " -> " << lddtScore << " (+" << (lddtScore - prevLDDT) << ") #" << i << '\n';
            prevLDDT = lddtScore;
            std::swap(cigars_aa, cigars_new_aa);
            std::swap(cigars_ss, cigars_new_ss);
            cigars_new_aa.clear();
            cigars_new_ss.clear();
        }
    }
}

int refinemsa(int argc, const char **argv, const Command& command) {
    LocalParameters &par = LocalParameters::getLocalInstance();
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
        par.matchRatio, par.qsc, par.Ndiff, par.covMSAThr,
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