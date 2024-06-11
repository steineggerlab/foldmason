#ifndef STRUCTUREMSA_H
#define STRUCTUREMSA_H

#include <iostream>
#include "Matcher.h"
#include "PSSMCalculator.h"
#include "MsaFilter.h"
#include "SubstitutionMatrix.h"
#include "StructureSmithWaterman.h"
#include "Sequence.h"
#include <unordered_map>

enum State {
    SEQ = 0,
    GAP = 1
};

// Bit field version
// First bit      = match or gap
// Remaining bits = ASCII character or (gap) count
union Instruction {
    struct BitFields {
        std::uint8_t state : 1;  // 0 = match, 1 = gap
        std::uint8_t count : 7;  // count < 127
    } bits;
    unsigned char data;
    Instruction() {
        data = 0;
    }
    Instruction(int state, int count) {
        data = 0;
        bits.state = static_cast<std::uint8_t>(state);
        bits.count = static_cast<std::uint8_t>(count);
    }
    Instruction(char c) {
        data = 0;
        bits.state = static_cast<std::uint8_t>(0);
        bits.count = static_cast<std::uint8_t>(c);
    }
    Instruction(int count) {
        data = 0;
        bits.state = static_cast<std::uint8_t>(1);
        bits.count = static_cast<std::uint8_t>(count);
    }
    char getCharacter() const {
        return (bits.state == 0) ? static_cast<char>(bits.count) : '-';
    }
    bool isSeq() const {
        return (bits.state == 0);
    }
    bool isFull() const {
        return (bits.count == 127);
    }
};

void getMergeInstructions(
    Matcher::result_t &res,
    std::vector<int> &map1,
    std::vector<int> &map2,
    std::vector<Instruction> &qBt,
    std::vector<Instruction> &tBt
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
    int compBiasCorrection
);

std::vector<int> maskToMapping(std::string mask);
int cigarLength(std::vector<Instruction> &cigar, bool withGaps);

std::string computeProfileMask(
    std::vector<size_t> &indices,
    std::unordered_map<size_t, std::vector<Instruction> > &cigars,
    std::vector<int> &lengths,
    SubstitutionMatrix &subMat,
    float matchRatio
);

std::string msa2profile(
    std::vector<size_t> &indices,
    std::unordered_map<size_t, std::vector<Instruction> > &cigars,
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
    bool wg
);

void updateCIGARS(
    std::vector<size_t> &group1,
    std::vector<size_t> &group2,
    std::unordered_map<size_t, std::vector<Instruction> > &cigars_aa,
    std::unordered_map<size_t, std::vector<Instruction> > &cigars_ss,
    Matcher::result_t &res,
    std::vector<int> map1,
    std::vector<int> map2,
    std::vector<Instruction> &qBt,
    std::vector<Instruction> &tBt
);

std::vector<Instruction> contract(std::string sequence);
std::string expand(std::vector<Instruction> &instructions);

void copyInstructions(std::vector<Instruction> &one, std::vector<Instruction> &two);
void copyInstructionVectors(std::unordered_map<size_t, std::vector<Instruction> > &one, std::unordered_map<size_t, std::vector<Instruction> > &two);
void testSeqLens(std::vector<size_t> &indices, std::vector<std::vector<Instruction> > &cigars, std::vector<int> &lengths);
std::string cigarsToMSA(
    std::vector<std::string> &headers,
    std::vector<std::vector<Instruction> > &cigars,
    std::vector<size_t> group1,
    std::vector<size_t> group2
);
#endif