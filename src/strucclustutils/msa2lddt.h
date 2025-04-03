#ifndef MSA2LDDT_H
#define MSA2LDDT_H

#include <vector>
#include <iostream>
#include "DBReader.h"
#include "KSeqWrapper.h"
#include "MSA.h"
// #include "structuremsa.h"

void parseFasta(
    KSeqWrapper *kseq,
    DBReader<unsigned int> * seqDbrAA,
    DBReader<unsigned int> * seqDbr3Di,
    std::vector<std::string> &headers,
    std::vector<size_t>      &indices,
    std::vector<std::vector<Instruction> > &cigars_aa,
    std::vector<std::vector<Instruction> > &cigars_ss,
    int &alnLength
);

std::tuple<std::vector<float>, std::vector<int>, float, int> calculate_lddt(
    std::vector<std::vector<Instruction> > &cigars,
    std::vector<size_t> &subset,
    std::vector<size_t> &keys,
    DBReader<unsigned int> * seqDbrCA,
    float pairThreshold,
    bool scoringColsOnly
);

double calculate_lddt_pair(
    std::vector<Instruction> &q_cigar,
    std::vector<Instruction> &t_cigar,
    size_t q_key,
    size_t t_key,
    DBReader<unsigned int> * seqDbrCA,
    int thread_idx
);

double calculate_lddt_pair(
    size_t q_key,
    size_t t_key,
    Matcher::result_t& result,
    DBReader<unsigned int> * seqDbrCA,
    int thread_idx
);

float getLDDTScore(
    DBReader<unsigned int> &seqDbrAA,
    DBReader<unsigned int> &seqDbr3Di,
    DBReader<unsigned int> &seqDbrCA,
    std::string msa,
    float pairThreshold,
    bool scoringColsOnly
);

#endif