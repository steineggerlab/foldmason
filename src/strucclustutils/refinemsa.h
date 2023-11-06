#ifndef REFINEMSA_H
#define REFINEMSA_H

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
);
void deleteGapCols(std::vector<std::string> &sequences);
void buildSubMSA(std::vector<std::string> &headers, std::vector<std::string> &sequences, std::string &subMSA);
void makeSubMSA(std::string msa, std::string &subMSA1, std::string &subMSA2, std::vector<bool> &group);

#endif