#include <iostream>
#include "Matcher.h"
#include "PSSMCalculator.h"
#include "MsaFilter.h"
#include "SubstitutionMatrix.h"
#include "StructureSmithWaterman.h"
#include "Sequence.h"

#ifndef STRUCTUREMSA_H
#define STRUCTUREMSA_H

enum State {
    SEQ = 0,
    GAP = 1
};

struct Instruction {
    bool state;
    unsigned int count; // TODO encode as 1 byte [0/1][000000] state/count, union struct lookup
    Instruction(int i_state, int i_count) : state(i_state), count(i_count) {};
    void print() {
        char state_char = (state == SEQ) ? 'S' : 'G';
        std::cout << state_char << " " << static_cast<int>(count) << std::endl;
    }
    char stateChar() { return (state == SEQ) ? 'S' : 'G'; }
};

// Bit field version
// First bit      = match or gap
// Remaining bits = ASCII character or (gap) count
union Instruction2 {
    struct BitFields {
        std::uint8_t state : 1;  // 0 = match, 1 = gap
        std::uint8_t count : 7;  // count < 127
    } bits;
    unsigned char data;
    Instruction2() {
        data = 0;
    }
    Instruction2(int state, int count) {
        data = 0;
        bits.state = static_cast<std::uint8_t>(state);
        bits.count = static_cast<std::uint8_t>(count);
    }
    Instruction2(char c) {
        data = 0;
        bits.state = static_cast<std::uint8_t>(0);
        bits.count = static_cast<std::uint8_t>(c);
    }
    Instruction2(int count) {
        data = 0;
        bits.state = static_cast<std::uint8_t>(1);
        bits.count = static_cast<std::uint8_t>(count);
    }
    char getCharacter() const {
        return (bits.state == 0) ? static_cast<char>(bits.count) : '-';
    }
    bool isSeq() {
        return (bits.state == 0);
    }
    bool isFull() {
        return (bits.count == 127);
    }
};

std::string fastamsa2profile(
    std::string & msa,
    PSSMCalculator &pssmCalculator,
    MsaFilter &filter,
    SubstitutionMatrix &subMat,
    size_t maxSeqLength,
    size_t maxSetSize,
    float matchRatio,
    bool filterMsa,
    bool compBiasCorrection,
    std::string & qid,
    float filterMaxSeqId,
    float Ndiff,
    float covMSAThr,
    float qsc,
    int filterMinEnable,
    bool wg,
    bool *externalMaskedColumns,
    float scoreBias
);

void getMergeInstructions(
    Matcher::result_t &res,
    std::vector<int> &map1,
    std::vector<int> &map2,
    std::vector<Instruction2> &qBt,
    std::vector<Instruction2> &tBt
);

Matcher::result_t pairwiseAlignment(
    StructureSmithWaterman & aligner,
    unsigned int querySeqLen,
    Sequence *query_aa,
    Sequence *query_3di,
    Sequence *target_aa,
    Sequence *target_3di,
    int gapOpen, int gapExtend,
    SubstitutionMatrix *mat_aa,
    SubstitutionMatrix *mat_3di,
    std::vector<int> &qMap,
    std::vector<int> &tMap,
    int compBiasCorrection
);

std::vector<int> maskToMapping(std::string mask);
int cigarLength(std::vector<Instruction2> &cigar, bool withGaps);

std::string computeProfileMask(
    std::vector<size_t> &indices,
    std::vector<std::vector<Instruction2> > &cigars,
    std::vector<int> &lengths,
    SubstitutionMatrix &subMat,
    float matchRatio
);

std::string msa2profile(
    std::vector<size_t> &indices,
    std::vector<std::vector<Instruction2> > &cigars,
    std::string mask,
    PSSMCalculator &pssmCalculator,
    MsaFilter &filter,
    SubstitutionMatrix &subMat,
    bool filterMsa,
    bool compBiasCorrection,
    std::string & qid,
    float filterMaxSeqId,
    float Ndiff,
    float covMSAThr,
    float qsc,
    int filterMinEnable,
    bool wg,
    size_t maxSeqLength
);

void updateCIGARS(
    std::vector<size_t> &group1,
    std::vector<size_t> &group2,
    std::vector<std::vector<Instruction2> > &cigars_aa,
    std::vector<std::vector<Instruction2> > &cigars_ss,
    Matcher::result_t &res,
    std::vector<int> map1,
    std::vector<int> map2,
    std::vector<Instruction2> &qBt,
    std::vector<Instruction2> &tBt
);

std::vector<Instruction2> contract(std::string sequence);
std::string expand(std::vector<Instruction2> &instructions);

void copyInstructions(std::vector<Instruction2> &one, std::vector<Instruction2> &two);
void copyInstructionVectors(std::vector<std::vector<Instruction2> > &one, std::vector<std::vector<Instruction2> > &two);

#endif