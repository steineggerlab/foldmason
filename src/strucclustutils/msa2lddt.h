#include <vector>
#include <iostream>
#include "DBReader.h"
#include "KSeqWrapper.h"
#include "structuremsa.h"

#ifndef MSA2LDDT_H
#define MSA2LDDT_H

void parseFasta(
    KSeqWrapper *kseq,
    DBReader<unsigned int> * seqDbrAA,
    DBReader<unsigned int> * seqDbr3Di,
    std::vector<std::string> &headers,
    std::vector<size_t>      &indices,
    std::vector<int>         &lengths,
    std::vector<std::vector<Instruction2> > &cigars_aa,
    std::vector<std::vector<Instruction2> > &cigars_ss,
    int &alnLength
);

std::tuple<std::vector<float>, std::vector<int>, float> calculate_lddt(
    std::vector<std::vector<Instruction2> > &cigars,
    std::vector<size_t> &subset,
    std::vector<size_t> &indices,
    std::vector<int> &lengths,
    DBReader<unsigned int> * seqDbrCA,
    float pairThreshold
);

float getLDDTScore(
    DBReader<unsigned int> &seqDbrAA,
    DBReader<unsigned int> &seqDbr3Di,
    DBReader<unsigned int> &seqDbrCA,
    std::string msa,
    float pairThreshold
);

#endif