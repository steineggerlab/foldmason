#ifndef STRUCTUREMSA_H
#define STRUCTUREMSA_H

#include <iostream>
#include "MSA.h"
#include "Matcher.h"
#include "PSSMCalculator.h"
#include "MsaFilter.h"
#include "SubstitutionMatrix.h"
#include "StructureSmithWaterman.h"

enum State {
    SEQ = 0,
    GAP = 1
};

// Query-oriented, just swap gaps/sequences for target
struct GapData {
    size_t preSequence;
    size_t preGaps;
    size_t endSequence;
    size_t endGaps;
};

// FIXME currently this does not take into account db key/id, it is just using
// the queryId/targetId from ungapped aln, which is dbKey and may not map
// to vector indices
class UnionFind {
    public:
        UnionFind(int n) {
            parent.resize(n);
            rank.resize(n, 0);
            std::iota(parent.begin(), parent.end(), 0);
        }
        
        int find(unsigned int x) {
            if (parent[x] != x) {
                parent[x] = find(parent[x]);
            }
            return parent[x];
        }
        
        void unionSets(unsigned int x, unsigned int y) {
            int rootX = find(x);
            int rootY = find(y);
            if (rootX != rootY) {
                if (rank[rootX] > rank[rootY]) {
                    parent[rootY] = rootX;
                } else if (rank[rootX] < rank[rootY]) {
                    parent[rootX] = rootY;
                } else {
                    parent[rootY] = rootX;
                    rank[rootX]++;
                }
            }
        }

    private:
        std::vector<unsigned int> parent, rank;
};

GapData getGapData(const Matcher::result_t &res, const std::vector<size_t>& qMap, const std::vector<size_t>& tMap);

void updateCIGARs(
    Matcher::result_t& result,
    std::vector<size_t>& map1,
    std::vector<size_t>& map2,
    std::vector<std::vector<Instruction> >& cigars_aa,
    std::vector<std::vector<Instruction> >& cigars_ss,
    std::vector<size_t>& q_members,
    std::vector<size_t>& t_members,
    std::vector<Instruction>& q_ins,
    std::vector<Instruction>& t_ins
);

void getMergeInstructions(
    Matcher::result_t &res,
    std::vector<size_t> &map1,
    std::vector<size_t> &map2,
    std::vector<Instruction> &qBt,
    std::vector<Instruction> &tBt
);

Matcher::result_t pairwiseAlignment(
    unsigned int querySeqLen,
    Sequence *query_aa,
    Sequence *query_3di,
    Sequence *target_aa,
    Sequence *target_3di,
    int gapOpen,
    int gapExtend,
    SubstitutionMatrix *mat_aa,
    SubstitutionMatrix *mat_3di,
    int compBiasCorrection,
    float** lddtScoreMap
);

void maskToMapping(const std::string &mask, std::vector<size_t> &mapping);
int cigarLength(const std::vector<Instruction> &cigar, bool withGaps);

std::string computeProfileMask(
    std::vector<size_t> &indices,
    std::vector<std::vector<Instruction> > &cigars,
    SubstitutionMatrix &subMat,
    float matchRatio
);

std::string msa2profile(
    std::vector<size_t> &indices,
    std::vector<std::vector<Instruction> > &cigars,
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
    float scoreBias
);

std::vector<Instruction> contract(const std::string& sequence);
std::string expand(const std::vector<Instruction> &instructions);

void copyInstructions(std::vector<Instruction> &one, std::vector<Instruction> &two);
void copyInstructionVectors(std::vector<std::vector<Instruction> > &one, std::vector<std::vector<Instruction> > &two);
void testSeqLens(std::vector<size_t> &indices, std::vector<std::vector<Instruction> > &cigars, std::vector<int> &lengths);
std::string cigarsToMSA(
    std::vector<std::string> &headers,
    std::vector<std::vector<Instruction> > &cigars,
    std::vector<size_t> group1,
    std::vector<size_t> group2
);
#endif