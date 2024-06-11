#ifndef REFINEMSA_H
#define REFINEMSA_H

#include <unordered_map>

void refineMany(
    int8_t * tinySubMatAA,
    int8_t * tinySubMat3Di,
    DBReader<unsigned int> *seqDbrAA,
    DBReader<unsigned int> *seqDbrCA,
    std::unordered_map<size_t, std::vector<Instruction> > &cigars_aa,
    std::unordered_map<size_t, std::vector<Instruction> > &cigars_ss,
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
    // float matchRatio,
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
);
void deleteGapCols(
    std::vector<size_t> &indices,
    std::unordered_map<size_t, std::vector<Instruction> > &cigars_aa,
    std::unordered_map<size_t, std::vector<Instruction> > &cigars_ss
);
void buildSubMSA(std::vector<std::string> &headers, std::vector<std::string> &sequences, std::string &subMSA);
void makeSubMSA(std::string msa, std::string &subMSA1, std::string &subMSA2, std::vector<bool> &group);

#endif