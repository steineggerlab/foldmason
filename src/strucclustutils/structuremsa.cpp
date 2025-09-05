#include "Alignment.h"
#include "BacktraceTranslator.h"
#include "DBReader.h"
#include "DBWriter.h"
#include "Debug.h"
#include "IndexReader.h"
#include "FoldmasonParameters.h"
#include "Matcher.h"
#include "MathUtil.h"
#include "MsaFilter.h"
#include "MultipleAlignment.h"
#include "PSSMCalculator.h"
#include "Parameters.h"
#include "Sequence.h"
#include "StructureSmithWaterman.h"
// #include "affineneedlemanwunsch.h"
#include "StructureUtil.h"
#include "Util.h"
#include "structureto3diseqdist.h"
#include <cassert>
#include <cmath>
#include <tuple>
#include <set>
#include <fstream>
#include <iostream>
#include <regex>
#include <stack>

#include "kseq.h"
#include "KSeqBufferReader.h"
#include "KSeqWrapper.h"
#include "LDDT.h"
#include "TMaligner.h"
#include "Coordinate16.h"
#include "msa2lddt.h"

#include "refinemsa.h"
#include "structuremsa.h"
#include "newick.h"
#include "MSA.h"

#include "simd.h"

#ifdef OPENMP
#include <omp.h>
#endif

#ifndef SIZE_T_MAX
#define SIZE_T_MAX ((size_t) -1)
#endif

KSEQ_INIT(kseq_buffer_t*, kseq_buffer_reader)

#define	EXIT_FAILURE	1
#define	EXIT_SUCCESS	0
    

template<typename T>
void get_param_from_env(const char* param, T& value) {
    if (const char* s = std::getenv(param)) {
        value = std::stof(s);
        // try { value = std::stof(s); }
        // catch(...) { std::cerr << "Warning: invalid " << param << "='" << s << "', using default\n"; }
    }
}



GapData getGapData(const Matcher::result_t &res, const std::vector<size_t>& qMap, const std::vector<size_t>& tMap) {
    GapData data;
    data.preSequence = qMap[res.qStartPos];
    data.preGaps     = tMap[res.dbStartPos];
    data.endSequence = qMap.back() - qMap[res.qEndPos];
    data.endGaps     = tMap.back() - tMap[res.dbEndPos];
    return data;
}

std::vector<size_t> map_mask_indices(const std::string& mask, size_t n) {
    std::vector<size_t> indices(n);
    size_t count = 0;
    for (size_t i = 0; i < mask.length(); ++i) {
        if (mask[i] == '0') {
            indices[count] = i;
            count++;
        } 
    }
    return indices;
}

void print_matrix(float** matrix, size_t m, size_t n) {
    std::cout.precision(2);
    for (size_t i = 0; i < n; ++i) {
        for (size_t j = 0; j < m; ++j) {
            std::cout << std::fixed << matrix[i][j] << '\t';
        }
        std::cout << '\n';
    }
}

inline float prob_dot_product_inline(short **q, short **t, int i, int j) {
    float Z_q = 0.0f,
          Z_t = 0.0f;
    float q_probs[20],
        t_probs[20]; // temporary, small footprint
    for (int a = 0; a < 20; ++a) {
        q_probs[a] = std::pow(2.0f, static_cast<float>(q[a][j]));
        t_probs[a] = std::pow(2.0f, static_cast<float>(t[a][i]));
        Z_q += q_probs[a];
        Z_t += t_probs[a];
    }
    if (Z_q == 0.0f || Z_t == 0.0f)
        return 0.0f;
    float dot = 0.0f;
    for (int a = 0; a < 20; ++a) {
        dot += (q_probs[a] / Z_q) * (t_probs[a] / Z_t);
    }
    return dot;
}

inline float prob_cosine_similarity_inline(short **q, short **t, int i, int j) {
    float Z_q = 0.0f, Z_t = 0.0f;
    float q_probs[20], t_probs[20];

    for (int a = 0; a < 20; ++a) {
        q_probs[a] = std::pow(2.0f, static_cast<float>(q[a][j]));
        t_probs[a] = std::pow(2.0f, static_cast<float>(t[a][i]));
        Z_q += q_probs[a];
        Z_t += t_probs[a];
    }

    if (Z_q == 0.0f || Z_t == 0.0f)
        return 0.0f;

    // Normalize to probability vectors
    for (int a = 0; a < 20; ++a) {
        q_probs[a] /= Z_q;
        t_probs[a] /= Z_t;
    }

    float dot = 0.0f, norm_q = 0.0f, norm_t = 0.0f;

    for (int a = 0; a < 20; ++a) {
        dot    += q_probs[a] * t_probs[a];
        norm_q += q_probs[a] * q_probs[a];
        norm_t += t_probs[a] * t_probs[a];
    }

    float denom = std::sqrt(norm_q * norm_t);
    return (denom > 0.0f) ? (dot / denom) : 0.0f;
}

inline size_t upper_triangle_index(size_t i, size_t j, size_t n) {
    return (i * (2 * n - i - 1)) / 2 + (j - i - 1);
}
Matcher::result_t pairwiseAlignment(
    StructureSmithWaterman & aligner,
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
) {
    std::string backtrace;

    bool targetIsProfile = (Parameters::isEqualDbtype(target_aa->getSeqType(), Parameters::DBTYPE_HMM_PROFILE));
    bool queryIsProfile = (Parameters::isEqualDbtype(query_aa->getSeqType(), Parameters::DBTYPE_HMM_PROFILE));

    unsigned char * query_aa_seq = query_aa->numSequence;
    unsigned char * query_3di_seq = query_3di->numSequence;
    unsigned char * target_aa_seq = target_aa->numSequence;
    unsigned char * target_3di_seq = target_3di->numSequence;
    if (queryIsProfile) {
        query_aa_seq = query_aa->numConsensusSequence;
        query_3di_seq = query_3di->numConsensusSequence;
    }
    if (targetIsProfile) {
        target_aa_seq = target_aa->numConsensusSequence;
        target_3di_seq = target_3di->numConsensusSequence;
    }
    
    int32_t alphabetSize = mat_aa->alphabetSize;

    int8_t *composition_bias_aa = new int8_t[query_aa->L];
    int8_t *composition_bias_ss = new int8_t[query_aa->L];
    if (compBiasCorrection) {
        float *tmp_composition_bias = new float[query_aa->L];
        SubstitutionMatrix::calcLocalAaBiasCorrection(mat_aa, query_aa->numSequence, query_aa->L, tmp_composition_bias, 1.0);
        for (int i =0; i < query_aa->L; i++) {
            composition_bias_aa[i] = (int8_t) (tmp_composition_bias[i] < 0.0) ? tmp_composition_bias[i] - 0.5 : tmp_composition_bias[i] + 0.5;
        }
        SubstitutionMatrix::calcLocalAaBiasCorrection(mat_3di, query_3di->numSequence, query_3di->L, tmp_composition_bias, 1.0);
        for (int i =0; i < query_aa->L; i++) {
            composition_bias_ss[i] = (int8_t) (tmp_composition_bias[i] < 0.0) ? tmp_composition_bias[i] - 0.5 : tmp_composition_bias[i] + 0.5;
        }
        delete[] tmp_composition_bias;
    } else {
        memset(composition_bias_aa, 0, query_aa->L * sizeof(int8_t));
        memset(composition_bias_ss, 0, query_aa->L * sizeof(int8_t));
    }

    short **query_profile_scores_aa = new short * [alphabetSize];
    short **query_profile_scores_3di = new short * [alphabetSize];
    for (int32_t j = 0; j < alphabetSize; j++) {
        query_profile_scores_aa[j] = new short [querySeqLen];
        query_profile_scores_3di[j] = new short [querySeqLen];
    }
    if (queryIsProfile) {
        for (unsigned int i = 0; i < querySeqLen; i++) {
            for (int32_t j = 0; j < alphabetSize; j++) {
                query_profile_scores_aa[j][i]  = query_aa->profile_for_alignment[j * querySeqLen + i];
                query_profile_scores_3di[j][i] = query_3di->profile_for_alignment[j * querySeqLen + i];
                // query_profile_scores_aa[j][i]  = query_aa->profile_for_alignment[j * querySeqLen + i] / 2.0f * 1.1f;
                // query_profile_scores_3di[j][i] = query_3di->profile_for_alignment[j * querySeqLen + i] / 2.0f * 2.1f;
            }
        }
    } else {
        for (unsigned int i = 0; i < querySeqLen; i++) {
            for (int32_t j = 0; j < alphabetSize; j++) {
                query_profile_scores_aa[j][i]  = mat_aa->subMatrix[j][query_aa_seq[i]]   + composition_bias_aa[i];
                query_profile_scores_3di[j][i] = mat_3di->subMatrix[j][query_3di_seq[i]] + composition_bias_ss[i];
            }
        }
    }
   
    short **target_profile_scores_aa = new short * [alphabetSize];
    short **target_profile_scores_3di = new short * [alphabetSize];
    for (int32_t j = 0; j < alphabetSize; j++) {
        target_profile_scores_aa[j]  = new short [target_aa->L];
        target_profile_scores_3di[j] = new short [target_aa->L];
    }
    if (targetIsProfile) {
        for (int i = 0; i < target_aa->L; i++) {
            for (int32_t j = 0; j < alphabetSize; j++) {
                target_profile_scores_aa[j][i]  = target_aa->profile_for_alignment[j * target_aa->L + i];
                target_profile_scores_3di[j][i] = target_3di->profile_for_alignment[j * target_aa->L + i];
                // target_profile_scores_aa[j][i]  = target_aa->profile_for_alignment[j * target_aa->L + i] / 2.0f * 1.1f;
                // target_profile_scores_3di[j][i] = target_3di->profile_for_alignment[j * target_aa->L + i] / 2.0f * 2.1f;
            }
        }
    } else {
        for (int i = 0; i < target_aa->L; i++) {
            for (int32_t j = 0; j < alphabetSize; j++) {
                target_profile_scores_aa[j][i]  = mat_aa->subMatrix[j][target_aa_seq[i]];
                target_profile_scores_3di[j][i] = mat_3di->subMatrix[j][target_3di_seq[i]];
            }
        }
    }
    
    // float **similarity = new float * [querySeqLen];
    // float **softmax_row = new float * [querySeqLen];
    // float **softmax_col = new float * [querySeqLen];
    // float **sim_sm = new float * [querySeqLen];
    // for (int32_t j = 0; j < querySeqLen; j++) {
    //     similarity[j] = new float [target_aa->L];
    //     softmax_row[j] = new float [target_aa->L];
    //     softmax_col[j] = new float [target_aa->L];
    //     sim_sm[j] = new float [target_aa->L];
    // }
    
    
    // // Get cosine similarities of PSSM columns
    // float scale = 20.0f;
    // for (int32_t i = 0; i < querySeqLen; i++) {
    //     for (int32_t j = 0; j < target_aa->L; j++) {
    //         float score_aa  = prob_cosine_similarity_inline(query_profile_scores_aa, target_profile_scores_aa, j, i);
    //         float score_3di = prob_cosine_similarity_inline(query_profile_scores_3di, target_profile_scores_3di, j, i);
    //         // score_aa = std::pow(2.0f, static_cast<float>(query_profile_scores_aa[target_aa_seq[j]][j] + target_profile_scores_aa[query_aa_seq[i]][i]));
    //         // score_3di = std::pow(2.0f, static_cast<float>(query_profile_scores_3di[target_3di_seq[j]][j] + target_profile_scores_3di[query_3di_seq[i]][i]));
    //         similarity[i][j] = (score_aa + score_3di) / 2;
    //         // similarity[i][j] = scale * (score_aa + score_3di - 1.0f);
    //         // std::cout << std::fixed << std::setprecision(2) << similarity[i][j] << '\t';
    //     }
    //     // std::cout << '\n';
    // }
    // // std::cout << '\n';

    // // row softmax
    // for (size_t i = 0; i < querySeqLen; ++i) {
    //     float rowmax = -std::numeric_limits<float>::infinity();
    //     for (size_t j = 0; j < target_aa->L; ++j) {
    //         rowmax = std::max(rowmax, similarity[i][j]); 
    //     }
    //     float sum = 0;
    //     for (size_t j = 0; j < target_aa->L; ++j) {
    //         float e = std::expf(similarity[i][j] - rowmax);
    //         softmax_row[i][j] = e;
    //         sum += e;
    //     }
    //     for (size_t j = 0; j < target_aa->L; ++j) {
    //         softmax_row[i][j] /= sum;
    //     }
    // }

    // // column softmax
    // for (size_t j = 0; j < target_aa->L; ++j) {
    //     float colmax = -std::numeric_limits<float>::infinity();
    //     for (size_t i = 0; i < querySeqLen; ++i) {
    //         colmax = std::max(colmax, similarity[i][j]); 
    //     }
    //     float sum = 0;
    //     for (size_t i = 0; i < querySeqLen; ++i) {
    //         float e = std::expf(similarity[i][j] - colmax);
    //         softmax_col[i][j] = e;
    //         sum += e;
    //     }
    //     for (size_t i = 0; i < querySeqLen; ++i) {
    //         softmax_col[i][j] /= sum;
    //     }
    // }
    
    // /* Just store top 10 values then zero out cells < 10th */
    // using Entry = float;
    // std::priority_queue<Entry, std::vector<Entry>, std::greater<Entry>> minHeap;

    // for (size_t i = 0; i < querySeqLen; ++i) {
    //     for (size_t j = 0; j < target_aa->L; ++j) {
    //         sim_sm[i][j] = std::sqrt(softmax_row[i][j] * softmax_col[i][j]);
    //         if (minHeap.size() < static_cast<size_t>(10)) {
    //             minHeap.push(sim_sm[i][j]);
    //         } else if (sim_sm[i][j] > minHeap.top()) {
    //             minHeap.pop();
    //             minHeap.push(sim_sm[i][j]);
    //         }
    //         // float val = sim_sm[i][j];
    //         // std::cout << std::fixed << std::setprecision(4) << val << '\t';
    //         // std::cout << std::fixed << std::setprecision(0) << (val > 0.5f ? 1 : 0) << '\t';
    //     }
    //     // std::cout << '\n';
    // }
    // // std::cout << '\n';

    // for (size_t i = 0; i < querySeqLen; ++i) {
    //     for (size_t j = 0; j < target_aa->L; ++j) {
    //         if (sim_sm[i][j] < minHeap.top()) {
    //             sim_sm[i][j] = -10.0f;
    //         }
    //     }
    // }


    delete[] composition_bias_aa;
    delete[] composition_bias_ss;
    
    Matcher::result_t result = aligner.simpleGotoh(
        target_aa_seq,
        target_3di_seq,
        query_profile_scores_aa,
        query_profile_scores_3di,
        target_profile_scores_aa,
        target_profile_scores_3di,
        0,
        query_aa->L,
        0,
        target_aa->L,
        gapOpen,
        gapExtend,
        // sim_sm
        lddtScoreMap
    );
    
    // for (int32_t j = 0; j < querySeqLen; j++) {
    //     delete[] similarity[j];
    //     delete[] softmax_row[j];
    //     delete[] softmax_col[j];
    //     delete[] sim_sm[j];
    // }
    // delete[] similarity;
    // delete[] softmax_row;
    // delete[] softmax_col;
    // delete[] sim_sm;

    
    for (int32_t i = 0; i < alphabetSize; i++) {
        delete[] query_profile_scores_aa[i];
        delete[] query_profile_scores_3di[i];
        delete[] target_profile_scores_aa[i];
        delete[] target_profile_scores_3di[i];
    }

    delete[] query_profile_scores_aa;
    delete[] query_profile_scores_3di;
    delete[] target_profile_scores_aa;
    delete[] target_profile_scores_3di;
   
    return result;
}
Matcher::result_t pairwiseAlignment(
    StructureSmithWaterman & aligner,
    unsigned int querySeqLen,
    Sequence *query_aa,
    Sequence *query_3di,
    Sequence *target_aa,
    Sequence *target_3di,
    int gapOpen,
    int gapExtend,
    SubstitutionMatrix *mat_aa,
    SubstitutionMatrix *mat_3di,
    int compBiasCorrection
) {
    std::string backtrace;

    bool targetIsProfile = (Parameters::isEqualDbtype(target_aa->getSeqType(), Parameters::DBTYPE_HMM_PROFILE));
    bool queryIsProfile = (Parameters::isEqualDbtype(query_aa->getSeqType(), Parameters::DBTYPE_HMM_PROFILE));

    unsigned char * query_aa_seq = query_aa->numSequence;
    unsigned char * query_3di_seq = query_3di->numSequence;
    unsigned char * target_aa_seq = target_aa->numSequence;
    unsigned char * target_3di_seq = target_3di->numSequence;
    if (queryIsProfile) {
        query_aa_seq = query_aa->numConsensusSequence;
        query_3di_seq = query_3di->numConsensusSequence;
    }
    if (targetIsProfile) {
        target_aa_seq = target_aa->numConsensusSequence;
        target_3di_seq = target_3di->numConsensusSequence;
    }
    
    int32_t alphabetSize = mat_aa->alphabetSize;

    int8_t *composition_bias_aa = new int8_t[query_aa->L];
    int8_t *composition_bias_ss = new int8_t[query_aa->L];
    if (compBiasCorrection) {
        float *tmp_composition_bias = new float[query_aa->L];
        SubstitutionMatrix::calcLocalAaBiasCorrection(mat_aa, query_aa->numSequence, query_aa->L, tmp_composition_bias, 1.0);
        for (int i =0; i < query_aa->L; i++) {
            composition_bias_aa[i] = (int8_t) (tmp_composition_bias[i] < 0.0) ? tmp_composition_bias[i] - 0.5 : tmp_composition_bias[i] + 0.5;
        }
        SubstitutionMatrix::calcLocalAaBiasCorrection(mat_3di, query_3di->numSequence, query_3di->L, tmp_composition_bias, 1.0);
        for (int i =0; i < query_aa->L; i++) {
            composition_bias_ss[i] = (int8_t) (tmp_composition_bias[i] < 0.0) ? tmp_composition_bias[i] - 0.5 : tmp_composition_bias[i] + 0.5;
        }
        delete[] tmp_composition_bias;
    } else {
        memset(composition_bias_aa, 0, query_aa->L * sizeof(int8_t));
        memset(composition_bias_ss, 0, query_aa->L * sizeof(int8_t));
    }

    short **query_profile_scores_aa = new short * [alphabetSize];
    short **query_profile_scores_3di = new short * [alphabetSize];
    for (int32_t j = 0; j < alphabetSize; j++) {
        query_profile_scores_aa[j] = new short [querySeqLen];
        query_profile_scores_3di[j] = new short [querySeqLen];
    }
    if (queryIsProfile) {
        for (unsigned int i = 0; i < querySeqLen; i++) {
            for (int32_t j = 0; j < alphabetSize; j++) {
                query_profile_scores_aa[j][i]  = query_aa->profile_for_alignment[j * querySeqLen + i];
                query_profile_scores_3di[j][i] = query_3di->profile_for_alignment[j * querySeqLen + i];
            }
        }
    } else {
        for (unsigned int i = 0; i < querySeqLen; i++) {
            for (int32_t j = 0; j < alphabetSize; j++) {
                query_profile_scores_aa[j][i]  = mat_aa->subMatrix[j][query_aa_seq[i]]   + composition_bias_aa[i];
                query_profile_scores_3di[j][i] = mat_3di->subMatrix[j][query_3di_seq[i]] + composition_bias_ss[i];
            }
        }
    }
   
    short **target_profile_scores_aa = new short * [alphabetSize];
    short **target_profile_scores_3di = new short * [alphabetSize];
    for (int32_t j = 0; j < alphabetSize; j++) {
        target_profile_scores_aa[j]  = new short [target_aa->L];
        target_profile_scores_3di[j] = new short [target_aa->L];
    }
    if (targetIsProfile) {
        for (int i = 0; i < target_aa->L; i++) {
            for (int32_t j = 0; j < alphabetSize; j++) {
                target_profile_scores_aa[j][i]  = target_aa->profile_for_alignment[j * target_aa->L + i];
                target_profile_scores_3di[j][i] = target_3di->profile_for_alignment[j * target_aa->L + i];
            }
        }
    } else {
        for (int i = 0; i < target_aa->L; i++) {
            for (int32_t j = 0; j < alphabetSize; j++) {
                target_profile_scores_aa[j][i]  = mat_aa->subMatrix[j][target_aa_seq[i]];
                target_profile_scores_3di[j][i] = mat_3di->subMatrix[j][target_3di_seq[i]];
            }
        }
    }

    delete[] composition_bias_aa;
    delete[] composition_bias_ss;
    
    Matcher::result_t result = aligner.simpleGotoh(
        target_aa_seq,
        target_3di_seq,
        query_profile_scores_aa,
        query_profile_scores_3di,
        target_profile_scores_aa,
        target_profile_scores_3di,
        0,
        query_aa->L,
        0,
        target_aa->L,
        gapOpen,
        gapExtend
    );
    
   for (int32_t i = 0; i < alphabetSize; i++) {
        delete[] query_profile_scores_aa[i];
        delete[] query_profile_scores_3di[i];
        delete[] target_profile_scores_aa[i];
        delete[] target_profile_scores_3di[i];
    }

    delete[] query_profile_scores_aa;
    delete[] query_profile_scores_3di;
    delete[] target_profile_scores_aa;
    delete[] target_profile_scores_3di;
   
    return result;
}

void sortHitsByScore(std::vector<AlnSimple> &hits) {
    SORT_PARALLEL(hits.begin(), hits.end(), [](const AlnSimple & a, const AlnSimple & b) {
        // sort by score then qId then tId
        if (a.score == b.score) {
            if (a.queryId == b.queryId) {
                return a.targetId < b.targetId;
            }
            return a.queryId < b.queryId;
        }
        return a.score > b.score;
    });
}

std::vector<AlnSimple> removeMergedHits(std::vector<AlnSimple> & hits, size_t mergedId, size_t targetId) {
    std::vector<AlnSimple> newHits;
    for (size_t i = 0; i < hits.size(); i++) {
        if (hits[i].queryId != mergedId && hits[i].targetId != mergedId
            && hits[i].queryId != targetId && hits[i].targetId != targetId) {
            newHits.push_back(hits[i]);
        }
    }
    return newHits;
}


inline size_t get1dIndex(size_t i, size_t j, size_t N) {
    return j + i * (2 * N - i - 1) / 2 - i - 1;
}

void updateAllScores(
    std::vector<AlnSimple>& hits,
    DBReader<unsigned int> &seqDbrAA,
    DBReader<unsigned int> &seqDbr3Di,
    DBReader<unsigned int> *cluDbr,
    int8_t * tinySubMatAA,
    int8_t * tinySubMat3Di,
    SubstitutionMatrix * subMat_aa,
    SubstitutionMatrix * subMat_3di,
    int maxSeqLen,
    int alphabetSize,
    int compBiasCorrection,
    int compBiasCorrectionScale
) {
    size_t sequenceCnt = seqDbrAA.getSize();
    Debug::Progress progress;

    if (cluDbr != NULL) {
        size_t cluDbSize = cluDbr->getSize();
        size_t n = cluDbSize * (cluDbSize - 1) / 2;
        hits.reserve(n);
        progress.reset(n);
    } else {
        size_t n = sequenceCnt * (sequenceCnt - 1) / 2;
        hits.reserve(n);
        progress.reset(n);
    }
    
    int go = 10; int ge = 1;
    if (const char* s = std::getenv("SW_GO")) {
        go = std::stoi(s);
    }
    if (const char* s = std::getenv("SW_GE")) {
        ge = std::stoi(s);
    }

#pragma omp parallel
{

    unsigned int thread_idx = 0;
#ifdef OPENMP
    thread_idx = static_cast<unsigned int>(omp_get_thread_num());
#endif

    Sequence seqMergedAa(maxSeqLen, Parameters::DBTYPE_AMINO_ACIDS, (const BaseMatrix *) subMat_aa,  0, false, compBiasCorrection);
    Sequence seqMergedSs(maxSeqLen, Parameters::DBTYPE_AMINO_ACIDS, (const BaseMatrix *) subMat_3di, 0, false, compBiasCorrection);
    Sequence seqTargetAa(maxSeqLen, Parameters::DBTYPE_AMINO_ACIDS, (const BaseMatrix *) subMat_aa,  0, false, compBiasCorrection);
    Sequence seqTargetSs(maxSeqLen, Parameters::DBTYPE_AMINO_ACIDS, (const BaseMatrix *) subMat_3di, 0, false, compBiasCorrection);

    StructureSmithWaterman structureSmithWaterman(
        maxSeqLen,
        alphabetSize,
        compBiasCorrection,
        compBiasCorrectionScale,
        subMat_aa,
        subMat_3di
    );
    std::vector<AlnSimple> threadHits;
    
    // std::vector<short> selfScores(sequenceCnt);
    // for (unsigned int i = 0; i < sequenceCnt; i++) {
    //     unsigned int mergedKey = seqDbrAA.getDbKey(i);
    //     if (cluDbr != NULL && cluDbr->getId(mergedKey) == UINT_MAX) {
    //         // If we have a cluster db and this structure is NOT in it, skip
    //         // Should only align the representatives
    //         continue;
    //     }
    //     size_t mergedId  = seqDbrAA.getId(mergedKey);
    //     seqMergedAa.mapSequence(mergedId, mergedKey, seqDbrAA.getData(mergedId, thread_idx), seqDbrAA.getSeqLen(mergedId));
    //     mergedId = seqDbr3Di.getId(mergedKey);
    //     seqMergedSs.mapSequence(mergedId, mergedKey, seqDbr3Di.getData(mergedId, thread_idx), seqDbr3Di.getSeqLen(mergedId));
    //     structureSmithWaterman.ssw_init(
    //         &seqMergedAa,
    //         &seqMergedSs,
    //         tinySubMatAA,
    //         tinySubMat3Di,
    //         subMat_aa
    //     );
    //     StructureSmithWaterman::s_align self_aln = structureSmithWaterman.alignScoreEndPos<StructureSmithWaterman::PROFILE>(
    //         seqMergedAa.numSequence,
    //         seqMergedSs.numSequence,
    //         seqMergedAa.L,
    //         go, ge,
    //         seqMergedAa.L/2
    //     );
    //     selfScores[i] = self_aln.score1;
    // }

#pragma omp for schedule(dynamic, 10)
    for (unsigned int i = 0; i < sequenceCnt; i++) {
        unsigned int mergedKey = seqDbrAA.getDbKey(i);
        if (cluDbr != NULL && cluDbr->getId(mergedKey) == UINT_MAX) {
            // If we have a cluster db and this structure is NOT in it, skip
            // Should only align the representatives
            continue;
        }
        size_t mergedId  = seqDbrAA.getId(mergedKey);
        seqMergedAa.mapSequence(mergedId, mergedKey, seqDbrAA.getData(mergedId, thread_idx), seqDbrAA.getSeqLen(mergedId));
        mergedId = seqDbr3Di.getId(mergedKey);
        seqMergedSs.mapSequence(mergedId, mergedKey, seqDbr3Di.getData(mergedId, thread_idx), seqDbr3Di.getSeqLen(mergedId));

        structureSmithWaterman.ssw_init(
            &seqMergedAa,
            &seqMergedSs,
            tinySubMatAA,
            tinySubMat3Di,
            subMat_aa
        );
        
        for (size_t j = i + 1; j < sequenceCnt; j++) {
            size_t targetKey = seqDbrAA.getDbKey(j);
            if (cluDbr != NULL && cluDbr->getId(targetKey) == UINT_MAX) {
                continue;
            }
            size_t targetId  = seqDbrAA.getId(targetKey);
            seqTargetAa.mapSequence(targetId, targetKey, seqDbrAA.getData(targetId, i), seqDbrAA.getSeqLen(targetId));
            targetId = seqDbr3Di.getId(targetKey);
            seqTargetSs.mapSequence(targetId, targetKey, seqDbr3Di.getData(targetId, i), seqDbr3Di.getSeqLen(targetId));

            AlnSimple aln;
            aln.queryId = mergedId;
            aln.targetId = targetId;
            // aln.score = structureSmithWaterman.ungapped_alignment(seqTargetAa.numSequence, seqTargetSs.numSequence, seqTargetAa.L);
            
            StructureSmithWaterman::s_align saln = structureSmithWaterman.alignScoreEndPos<StructureSmithWaterman::PROFILE>(
                    seqTargetAa.numSequence,
                    seqTargetSs.numSequence,
                    seqTargetAa.L,
                    go, ge,
                    seqMergedAa.L/2
            );
            // float score = (1.0f - (2 * saln.score1) / static_cast<float>(selfScores[i] + selfScores[j])) * 1000.0f; 
            // aln.score = static_cast<short>(score);
            aln.score = saln.score1;
            // std::cout << "#print\t" << i << '\t' << j << '\t' <<
            //     saln.qStartPos1+1 << '-' << saln.qEndPos1 << " (" << seqMergedAa.L << ")\t" <<
            //     saln.dbStartPos1+1 << '-' << saln.dbEndPos1 << " (" << seqMergedAa.L << ")\t" <<
            //     saln.qCov << '\n';
            //     ;

            threadHits.push_back(aln);     
            // progress.updateProgress();
        }
    }

#pragma omp critical
    {
        hits.insert(hits.end(), threadHits.begin(), threadHits.end());
    }
}
}

int findRoot(int vertex, std::vector<int>& parent) {
    while (parent[vertex] != vertex) {
        parent[vertex] = parent[parent[vertex]];
        vertex = parent[vertex];
    }
    return vertex;
}

void mst(std::vector<AlnSimple>& hits, int n) {
    UnionFind uf(n);
    size_t mstEdges = 0;
    for (size_t i = 0; i < hits.size(); i++) {
        unsigned int root1 = uf.find(hits[i].queryId);
        unsigned int root2 = uf.find(hits[i].targetId);
        if (root1 != root2) {
            std::swap(hits[mstEdges], hits[i]);
            ++mstEdges;
            uf.unionSets(root1, root2);
        }
        if (mstEdges == static_cast<size_t>(n - 1)) {
            break;
        }
    }
    hits.resize(mstEdges);
}

void neighbour_joining(std::vector<AlnSimple>& hits, int n)
{
    const float INF = 1e30f;
    std::vector<std::vector<float>> score(n, std::vector<float>(n, -INF));
    float maxScore = -INF;
    for (const AlnSimple h : hits) maxScore = std::max(maxScore, static_cast<float>(h.score));
    std::vector<std::vector<float>> dist(n, std::vector<float>(n, INF));
    for (const auto& h : hits) {
        score[h.queryId][h.targetId] = score[h.targetId][h.queryId] = h.score;
        float d = maxScore - h.score;            // higher score → smaller dist
        dist [h.queryId][h.targetId] = dist [h.targetId][h.queryId] = d;
    }
    for (int i = 0; i < n; ++i) dist[i][i] = 0.0f;
    struct Info { int size; bool alive; };
    std::vector<Info> info(n, {1, true});
    std::vector<float> r(n);              // Σ distances, recalculated each step
    std::vector<AlnSimple> out; out.reserve(n - 1);
    int active = n;
    while (active > 1) {
        for (int i = 0; i < n; ++i) {
            if (!info[i].alive) continue;
            float sum = 0.0f;
            for (int j = 0; j < n; ++j)
                if (info[j].alive) sum += dist[std::min(i,j)][std::max(i,j)];
            r[i] = sum;
        }
        float bestQ = INF; int a = -1, b = -1;
        for (int i = 0; i < n; ++i)
            if (info[i].alive)
                for (int j = i + 1; j < n; ++j)
                    if (info[j].alive) {
                        float q = (active - 2) *
                                  dist[i][j] - r[i] - r[j];
                        if (q < bestQ) { bestQ = q; a = i; b = j; }
                    }
        int repA = std::min(a, b);
        int repB = std::max(a, b);
        out.push_back({static_cast<unsigned>(repA),
                       static_cast<unsigned>(repB),
                       static_cast<unsigned short>(score[repA][repB])});
        for (int k = 0; k < n; ++k)
            if (info[k].alive && k != repA && k != repB) {
                float dik = dist[std::min(repA,k)][std::max(repA,k)];
                float djk = dist[std::min(repB,k)][std::max(repB,k)];
                float dij = dist[repA][repB];
                float newD = 0.5f * (dik + djk - dij);
                dist[ std::min(repA,k) ][ std::max(repA,k) ] = newD;
                float bestS = std::max(score[std::min(repA,k)][std::max(repA,k)],
                                      score[std::min(repB,k)][std::max(repB,k)]);
                score[ std::min(repA,k) ][ std::max(repA,k) ] = bestS;
            }
        info[repA].size += info[repB].size;
        info[repB].alive = false;
        --active;
    }
    hits.swap(out);
}

void upgma(std::vector<AlnSimple>& hits, int n) {
    const float INF = 1e30f;
    std::vector<std::vector<float>> score(n, std::vector<float>(n, -INF));
    std::vector<float> weights(n, 0.0f);
    float maxScore = -INF;
    for (const auto& h : hits) {
        maxScore = std::max(maxScore, static_cast<float>(h.score));
    }
    std::vector<std::vector<float>> dist(n, std::vector<float>(n, INF));
    for (const auto& h : hits) {
        score[h.queryId][h.targetId] = score[h.targetId][h.queryId] = h.score;
        float d = h.score;
        dist[h.queryId][h.targetId] = dist[h.targetId][h.queryId] = d;
    }
    for (int i = 0; i < n; ++i) dist[i][i] = 0.0f;
    struct Info { int size; bool alive; };
    std::vector<Info> info(n, {1, true});
    std::vector<AlnSimple> out; out.reserve(n - 1);
    for (int step = 0; step < n - 1; ++step) {
        float bestD = INF;
        int   a = -1, b = -1;
        for (int i = 0; i < n; ++i)
            if (info[i].alive)
                for (int j = i + 1; j < n; ++j)
                    if (info[j].alive && dist[i][j] < bestD) {
                        bestD = dist[i][j]; 
                        a = i; 
                        b = j;
                    }
        int repA = std::min(a, b);
        int repB = std::max(a, b);
        out.push_back({static_cast<unsigned>(repA),
                       static_cast<unsigned>(repB),
                       static_cast<unsigned short>(dist[repA][repB])});
        int sizeA = info[repA].size;
        int sizeB = info[repB].size;
        for (int k = 0; k < n; ++k)
            if (info[k].alive && k != repA && k != repB) {
                float dkA = dist[std::min(k,repA)][std::max(k,repA)];
                float dkB = dist[std::min(k,repB)][std::max(k,repB)];
                float newD = (dkA * sizeA + dkB * sizeB) / float(sizeA + sizeB);
                dist[std::min(k,repA)][std::max(k,repA)] = newD;
            }
        info[repA].size += info[repB].size;
        info[repB].alive = false;
    }
    hits.swap(out);
}


std::vector<AlnEdge> makeEdges(const std::vector<AlnSimple>& hits, int n) {
    int m = hits.size();
    int total = n + m;
    int nextId = n;

    std::vector<double> height(total, 0.0f);

    std::vector<AlnEdge> edges;
    edges.reserve(2*m);

    std::vector<int> rep(total);
    std::iota(rep.begin(), rep.begin() + n, 0);

    for (const AlnSimple &aln : hits) {
        unsigned int p = nextId++;
        unsigned int rA = rep[aln.queryId];
        unsigned int rB = rep[aln.targetId];
        double hp = 0.5f * static_cast<double>(aln.score);
        double lenA = hp - height[rA];
        double lenB = hp - height[rB];
        edges.push_back({p, rA, lenA});
        edges.push_back({p, rB, lenB});
        height[p] = hp;
        rep[aln.queryId] = rep[aln.targetId] = p;
    }
    return edges;
}

std::vector<int> subtreeSize(int n, const std::vector<AlnEdge>& edges) {
    int total = n + edges.size() / 2;
    std::vector<std::vector<unsigned int> > child(total);
    for (const AlnEdge& e : edges) {
        child[e.parentId].push_back(e.childId);
    }
    std::vector<int> size(total, 0);
    for (int i = 0; i < n; ++i) {
        size[i] = 1;
    }
    for (int v = n; v < total; ++v) {
        for (auto c : child[v]) {
            size[v] += size[c];
        }
    }
    return size;
}

void balanceTree(std::vector<AlnSimple>& hits, std::vector<size_t>& merges, int n) {
    UnionFind uf(n);
    std::vector<int> counts(n, 0);
    std::vector<AlnSimple>::iterator partitionStart = hits.begin();
    while (partitionStart != hits.end()) {
        std::fill(counts.begin(), counts.end(), 0);
        std::vector<AlnSimple>::iterator partitionPoint = std::partition(partitionStart, hits.end(),
            [&](const AlnSimple& aln) {
                int u = uf.find(aln.queryId);
                int v = uf.find(aln.targetId);
                if (counts[u] == 0 && counts[v] == 0) {
                    uf.unionSets(u, v);
                    counts[u]++;            
                    counts[v]++;            
                    return true;
                }
                return false;
            });
        size_t mergeCount = std::distance(partitionStart, partitionPoint);
        if (mergeCount == 0) {
            break;
        }
        merges.push_back(mergeCount);
        partitionStart = partitionPoint;
    }
}

std::string getHeader(unsigned int& headerId, IndexReader* hdrDb) {
    // size_t headerId = hdrDb->sequenceReader->getId(key);
    return Util::parseFastaHeader(hdrDb->sequenceReader->getData(headerId, 0));
}

std::string makeNewick(const std::vector<AlnSimple>& edges, int n, IndexReader* headers) {
    UnionFind uf(n);
    std::vector<std::string> nodeNewick(n);
    for (const AlnSimple& aln : edges) {
        unsigned int u = aln.queryId;
        unsigned int v = aln.targetId;
        int rootU = uf.find(u);
        int rootV = uf.find(v);
        if (rootU != rootV) {
            std::string newickU = (nodeNewick[rootU].empty()) ? getHeader(u, headers) : nodeNewick[rootU];
            std::string newickV = (nodeNewick[rootV].empty()) ? getHeader(v, headers) : nodeNewick[rootV];
            uf.unionSets(rootU, rootV);
            int newRoot = uf.find(rootU);
            int oldRoot = (newRoot == rootU) ? rootV : rootU;
            nodeNewick[newRoot] = "(" + newickU + "," + newickV + ")";
            nodeNewick[oldRoot].clear();
        }
    }
    int root = uf.find(edges[0].queryId);
    return nodeNewick[root] + ";";
}

int cigarLength(const std::vector<Instruction>& cigar, bool withGaps) {
    int count = 0;
    for (const Instruction &ins : cigar) {
        count += (ins.isSeq()) ? 1 : (withGaps ? static_cast<int>(ins.bits.count) : 0);
    }
    return count;
}

/**
 * @brief Compute MSA mask based on sequence weights
 *
 * "Position-based Sequence Weights", Henikoff (1994)
 * 
 * @param indices indices of structures in this MSA
 * @param cigars all structure instruction vectors
 * @param lengths all structure lengths
 * @param lengthWithGaps gappy alignment length
 * @return std::vector<float> 
 */
std::string computeProfileMask(
    std::vector<size_t> &indices,
    std::vector<std::vector<Instruction> > &cigars,
    SubstitutionMatrix &subMat,
    float matchRatio
) {
    int lengthWithGaps = cigarLength(cigars[indices[0]], true);

    // initialise weights with tiny pseudo counts
    std::vector<float> seqWeights(indices.size(), 1e-6);
    
    // count residues at each position of the alignment
    // 0-19 residue types
    // 20   number of distinct residues
    std::vector<unsigned int> counts((Sequence::PROFILE_AA_SIZE + 1) * lengthWithGaps, 0);
    for (size_t i = 0; i < indices.size(); i++) {
        int cigIndex = indices[i];
        int seqIndex = 0;
        for (size_t j = 0; j < cigars[cigIndex].size(); j++) {
            Instruction ins = cigars[cigIndex][j];
            if (ins.isSeq()) {
                const unsigned int c  = subMat.aa2num[static_cast<int>(ins.getCharacter())];
                if (c < Sequence::PROFILE_AA_SIZE) {  // ignore X (20)
                    int ij = c * lengthWithGaps + seqIndex;
                    counts[ij] += 1;
                    if (counts[ij] == 1) {
                        counts[(Sequence::PROFILE_AA_SIZE) * lengthWithGaps + seqIndex]++;
                    }
                }
                seqIndex++;
            } else {
                seqIndex += ins.bits.count; 
            }
        }
    }
    
    // running sums of seq weights for matches/gaps per column of alignment per sequence
    // 0 matches
    // 1 gaps
    std::vector<float> colValues(2 * lengthWithGaps, 0.0);

    for (size_t i = 0; i < indices.size(); i++) {
        int cigIndex = indices[i];
        int seqIndex = 0;

        const std::vector<Instruction> &cigar = cigars[cigIndex];
        size_t length = cigarLength(cigar, false);

        // Compute sequence weights
        for (const Instruction &ins : cigar) {
            if (ins.isSeq()) {
                const unsigned int c = subMat.aa2num[static_cast<int>(ins.getCharacter())];
                int distinct = counts[(Sequence::PROFILE_AA_SIZE) * lengthWithGaps + seqIndex];
                int ij = c * lengthWithGaps + seqIndex;
                if (counts[ij] > 0 && distinct > 0) {
                    seqWeights[i] += 1.0f / (
                        static_cast<float>(counts[ij])
                        * static_cast<float>(distinct)
                        * (static_cast<float>(length) + 30.0f)
                    );
                }
                seqIndex++;
            } else {
                seqIndex += ins.bits.count; 
            }
        }

       // Add weights for this sequence to matches/gaps per column
        seqIndex = 0;
        for (size_t j = 0; j < cigars[cigIndex].size(); j++) {
            Instruction &ins = cigars[cigIndex][j];
            if (ins.isSeq()) {
                const unsigned int c = subMat.aa2num[static_cast<int>(ins.getCharacter())];
                if (c < Sequence::PROFILE_AA_SIZE) {
                    colValues[seqIndex] += seqWeights[i];
                } 
                seqIndex++;
            } else {
                // ignore end gaps
                if (j != 0 && (j != cigars[cigIndex].size() - 1)) {
                    for (int k = 0; k < ins.bits.count; k++) {
                        colValues[lengthWithGaps + seqIndex + k] = seqWeights[i];
                    }
                }
                seqIndex += ins.bits.count;
            }
        }
    }
    
    // Generate mask string
    std::string mask;
    for (int i = 0; i < lengthWithGaps; i++) {
        float matches = colValues[i];
        float gaps = colValues[lengthWithGaps + i];
        bool state = (gaps / (gaps + matches)) >= matchRatio;
        mask.push_back(state ? '1' : '0');
    }

    return mask;
}

std::string computeProfileMask(
    std::vector<size_t> &indices,
    std::vector<std::vector<Instruction> > &cigars_aa,
    std::vector<std::vector<Instruction> > &cigars_ss,
    SubstitutionMatrix &subMat_aa,
    SubstitutionMatrix &subMat_ss,
    float matchRatio
) {
    int lengthWithoutGaps = cigarLength(cigars_aa[indices[0]], false);
    int lengthWithGaps = cigarLength(cigars_aa[indices[0]], true);

    // initialise weights with tiny pseudo counts
    std::vector<float> seqWeights(indices.size(), 1e-6);
    
    // count residues at each position of the alignment
    // 0-19 residue types
    // 20   number of distinct residues
    std::vector<unsigned int> counts(Sequence::PROFILE_AA_SIZE * 2 * lengthWithGaps, 0);
    std::vector<unsigned int> distinct(lengthWithGaps * 2, 0);
    for (size_t i = 0; i < indices.size(); i++) {
        int cigIndex = indices[i];
        int seqIndex = 0;
        for (size_t j = 0; j < cigars_aa[cigIndex].size(); j++) {
            Instruction& ins_aa = cigars_aa[cigIndex][j];
            Instruction& ins_ss = cigars_ss[cigIndex][j];
            if (ins_aa.isSeq()) {
                const unsigned int c_aa = subMat_aa.aa2num[static_cast<int>(ins_aa.getCharacter())];
                const unsigned int c_ss = subMat_ss.aa2num[static_cast<int>(ins_ss.getCharacter())];
                if (c_aa < Sequence::PROFILE_AA_SIZE) {  // ignore X (20)
                    int ij = c_aa * lengthWithGaps + seqIndex;
                    counts[ij] += 1;
                    if (counts[ij] == 1) {
                        // counts[(Sequence::PROFILE_AA_SIZE) * lengthWithGaps + seqIndex]++;
                        distinct[seqIndex]++;
                    }
                }
                if (c_ss < Sequence::PROFILE_AA_SIZE) {  // ignore X (20)
                    int ij = c_ss * 2 * lengthWithGaps + seqIndex;
                    counts[ij] += 1;
                    if (counts[ij] == 1) {
                        // counts[(Sequence::PROFILE_AA_SIZE) * lengthWithGaps + seqIndex]++;
                        distinct[seqIndex * 2]++;
                    }
                }
                seqIndex++;
            } else {
                seqIndex += ins_aa.bits.count; 
            }
        }
    }

    // running sums of seq weights for matches/gaps per column of alignment per sequence
    // 0 matches
    // 1 gaps
    std::vector<float> colValues(2 * lengthWithGaps, 0.0);
    for (size_t i = 0; i < indices.size(); i++) {
        int cigIndex = indices[i];
        int seqIndex = 0;

        // Compute sequence weights
        for (size_t j = 0; j < cigars_aa[cigIndex].size(); j++) {
            Instruction& ins_aa = cigars_aa[cigIndex][j];
            Instruction& ins_ss = cigars_ss[cigIndex][j];
            if (ins_aa.isSeq()) {
                const unsigned int c_aa = subMat_aa.aa2num[static_cast<int>(ins_aa.getCharacter())];
                const unsigned int c_ss = subMat_ss.aa2num[static_cast<int>(ins_ss.getCharacter())];
                int ij_aa = c_aa * lengthWithGaps + seqIndex;
                int ij_ss = c_ss * 2 * lengthWithGaps + seqIndex;
                if (
                    counts[ij_aa] > 0 &&
                    counts[ij_ss] > 0 &&
                    distinct[seqIndex] > 0 && 
                    distinct[seqIndex * 2] > 0
                ) {
                    seqWeights[i] += 1.0f / (
                        (static_cast<float>(counts[ij_aa]) + static_cast<float>(counts[ij_ss]))/2.0f
                        * (static_cast<float>(distinct[seqIndex]) + static_cast<float>(distinct[seqIndex*2]))/2.0f
                        * (static_cast<float>(lengthWithoutGaps) + 30.0f)
                    );
                }
                seqIndex++;
            } else {
                seqIndex += ins_aa.bits.count; 
            }
        }
        
        // Add weights for this sequence to matches/gaps per column
        seqIndex = 0;
        for (size_t j = 0; j < cigars_aa[cigIndex].size(); j++) {
            Instruction& ins_aa = cigars_aa[cigIndex][j];
            Instruction& ins_ss = cigars_ss[cigIndex][j];
            if (ins_aa.isSeq()) {
                const unsigned int c_aa = subMat_aa.aa2num[static_cast<int>(ins_aa.getCharacter())];
                const unsigned int c_ss = subMat_ss.aa2num[static_cast<int>(ins_ss.getCharacter())];
                if (c_aa < Sequence::PROFILE_AA_SIZE && c_ss < Sequence::PROFILE_AA_SIZE) {
                    colValues[seqIndex] += seqWeights[i];
                } 
                seqIndex++;
            } else {
                // ignore end gaps
                if (j != 0 && (j != cigars_aa[cigIndex].size() - 1)) {
                    for (int k = 0; k < ins_aa.bits.count; k++) {
                        colValues[lengthWithGaps + seqIndex + k] += seqWeights[i];
                    }
                }
                seqIndex += ins_aa.bits.count;
            }
        }
    }
    
    // Generate mask string
    std::string mask;
    for (int i = 0; i < lengthWithGaps; i++) {
        float matches = colValues[i];;
        float gaps = colValues[lengthWithGaps + i];
        bool state = (gaps / (gaps + matches)) >= matchRatio;
        mask.push_back(state ? '1' : '0');
    }

    return mask;
}

std::vector<int> parseQidString(std::string qid) {
    std::vector<std::string> qid_str_vec = Util::split(qid, ",");
    std::vector<int> qid_vec;
    for (size_t qid_idx = 0; qid_idx < qid_str_vec.size(); qid_idx++) {
        float qid_float = strtod(qid_str_vec[qid_idx].c_str(), NULL);
        qid_vec.push_back(static_cast<int>(qid_float*100));
    }
    std::sort(qid_vec.begin(), qid_vec.end());
    return qid_vec;
}
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
    bool wg
) {
    // length of sequences after masking
    int lengthWithMask = 0;
    for (char c : mask) {
        if (c == '0') lengthWithMask++;
    }

    float *pNullBuffer = new float[lengthWithMask];

    // build reduced MSA
    char **msaSequences = MultipleAlignment::initX(lengthWithMask + 1, indices.size());
    for (size_t i = 0; i < indices.size(); i++) {
        msaSequences[i][lengthWithMask] = '\0';
        int seqIndex = 0;
        int msaIndex = 0;
        for (Instruction &ins : cigars[indices[i]]) {
            if (ins.isSeq()) {
                const unsigned int c = subMat.aa2num[static_cast<int>(ins.getCharacter())];
                if (mask[seqIndex] == '0') {
                    msaSequences[i][msaIndex] = c;
                    msaIndex++;
                }
                seqIndex++;
            } else {
                for (size_t j = 0; j < ins.bits.count; j++) {
                    if (mask[seqIndex] == '0') {
                        msaSequences[i][msaIndex] = (int)MultipleAlignment::GAP;
                        msaIndex++;
                    }
                    seqIndex++;
                }
            }
        }
        assert(msaIndex == lengthWithMask);
    }
    
    MultipleAlignment::MSAResult msaResult(lengthWithMask, lengthWithMask, indices.size(), msaSequences);

    size_t filteredSetSize = indices.size();
    if (filterMsa == 1) {
        std::vector<int> qid_vec = parseQidString(qid);
        filteredSetSize = filter.filter(
            indices.size(),
            lengthWithMask,
            static_cast<int>(covMSAThr * 100),
            qid_vec,
            qsc,
            static_cast<int>(filterMaxSeqId * 100),
            Ndiff,
            filterMinEnable,
            (const char **) msaSequences,
            true
        );
    }

    PSSMCalculator::Profile pssmRes = pssmCalculator.computePSSMFromMSA(
        filteredSetSize,
        msaResult.centerLength,
        (const char **) msaResult.msaSequence,
#ifdef GAP_POS_SCORING
        alnResults,
#endif
        wg,
        // FIXME
        0.0
    );
    
    if (compBiasCorrection) {
        SubstitutionMatrix::calcGlobalAaBiasCorrection(
            &subMat,
            pssmRes.pssm,
            pNullBuffer,
            Sequence::PROFILE_AA_SIZE,
            lengthWithMask
        );
    }
    unsigned char * consensus = new unsigned char[lengthWithMask];
    for (int i = 0; i < lengthWithMask; ++i)
        consensus[i] = subMat.aa2num[pssmRes.consensus[i]];
    std::string result;
    pssmRes.toBuffer(consensus, lengthWithMask, subMat, result);

    delete[] pNullBuffer;
    free(msaSequences[0]);
    delete[] msaSequences;
    delete[] consensus;
    
    return result;
}
// Generate PSSM from CIGARs and a MSA mask
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
    std::vector<double> branchWeights
) {
    // length of sequences after masking
    int lengthWithMask = 0;
    for (char c : mask) {
        if (c == '0') lengthWithMask++;
    }

    float *pNullBuffer = new float[lengthWithMask];

    // build reduced MSA
    char **msaSequences = MultipleAlignment::initX(lengthWithMask + 1, indices.size());
    for (size_t i = 0; i < indices.size(); i++) {
        msaSequences[i][lengthWithMask] = '\0';
        int seqIndex = 0;
        int msaIndex = 0;
        for (Instruction &ins : cigars[indices[i]]) {
            if (ins.isSeq()) {
                const unsigned int c = subMat.aa2num[static_cast<int>(ins.getCharacter())];
                if (mask[seqIndex] == '0') {
                    msaSequences[i][msaIndex] = c;
                    msaIndex++;
                }
                seqIndex++;
            } else {
                for (size_t j = 0; j < ins.bits.count; j++) {
                    if (mask[seqIndex] == '0') {
                        msaSequences[i][msaIndex] = (int)MultipleAlignment::GAP;
                        msaIndex++;
                    }
                    seqIndex++;
                }
            }
        }
        assert(msaIndex == lengthWithMask);
    }
    
    MultipleAlignment::MSAResult msaResult(lengthWithMask, lengthWithMask, indices.size(), msaSequences);

    size_t filteredSetSize = indices.size();
    if (filterMsa == 1) {
        std::vector<int> qid_vec = parseQidString(qid);
        filteredSetSize = filter.filter(
            indices.size(),
            lengthWithMask,
            static_cast<int>(covMSAThr * 100),
            qid_vec,
            qsc,
            static_cast<int>(filterMaxSeqId * 100),
            Ndiff,
            filterMinEnable,
            (const char **) msaSequences,
            true
        );
    }
    
    float scorebias = 0.0f;
    get_param_from_env("SCORE_BIAS_PSSM", scorebias);

    PSSMCalculator::Profile pssmRes = pssmCalculator.computePSSMFromMSA(
        filteredSetSize,
        msaResult.centerLength,
        (const char **) msaResult.msaSequence,
#ifdef GAP_POS_SCORING
        alnResults,
#endif
        wg,
        // FIXME
        scorebias,
        branchWeights,
        indices
    );
    
    if (compBiasCorrection) {
        SubstitutionMatrix::calcGlobalAaBiasCorrection(
            &subMat,
            pssmRes.pssm,
            pNullBuffer,
            Sequence::PROFILE_AA_SIZE,
            lengthWithMask
        );
    }
    unsigned char * consensus = new unsigned char[lengthWithMask];
    for (int i = 0; i < lengthWithMask; ++i)
        consensus[i] = subMat.aa2num[pssmRes.consensus[i]];
    std::string result;
    pssmRes.toBuffer(consensus, lengthWithMask, subMat, result);

    delete[] pNullBuffer;
    free(msaSequences[0]);
    delete[] msaSequences;
    delete[] consensus;
    
    return result;
}

// Map 0001100 to [ 0 1 2 5 6 ]
// needs to be ungapped->gapped direction
void maskToMapping(const std::string &mask, std::vector<size_t> &mapping) {
    size_t length = std::count_if(mask.begin(), mask.end(), [](const char& c) { return c == '0'; });
    mapping.reserve(length);
    for (size_t i = 0; i < mask.length(); ++i) {
        if (mask[i] == '0') {
            mapping.push_back(i);
        }
    }
}

void maskToMappingRev(const std::string &mask, std::vector<size_t> &mapping) {
    mapping.clear();
    mapping.reserve(mask.length());
    size_t nonmasked = 0;
    for (size_t i = 0; i < mask.length(); ++i) {
        if (mask[i] == '0') {
            mapping.push_back(nonmasked);
            nonmasked++;
        } else {
            mapping.push_back(SIZE_T_MAX);
        }
    }
}

std::vector<AlnSimple> parseAndScoreExternalHits(
    DBReader<unsigned int> &seqDbrAA,
    DBReader<unsigned int> &seqDbr3Di,
    DBReader<unsigned int> *cluDbr,
    int8_t * tinySubMatAA,
    int8_t * tinySubMat3Di,
    SubstitutionMatrix * subMat_aa,
    SubstitutionMatrix * subMat_3di,
    int maxSeqLen,
    int alphabetSize,
    int compBiasCorrection,
    int compBiasCorrectionScale
) {
    // open an alignment DBReader
    std::vector<AlnSimple> allAlnResults;

#pragma omp parallel
{
    unsigned int thread_idx = 0;
#ifdef OPENMP
    thread_idx = static_cast<unsigned int>(omp_get_thread_num());
#endif

    Sequence seqQueryAa(maxSeqLen, Parameters::DBTYPE_AMINO_ACIDS, (const BaseMatrix *) subMat_aa,  0, false, compBiasCorrection);
    Sequence seqQuerySs(maxSeqLen, Parameters::DBTYPE_AMINO_ACIDS, (const BaseMatrix *) subMat_3di, 0, false, compBiasCorrection);
    Sequence seqDbAa(maxSeqLen, Parameters::DBTYPE_AMINO_ACIDS, (const BaseMatrix *) subMat_aa,  0, false, compBiasCorrection);
    Sequence seqDbSs(maxSeqLen, Parameters::DBTYPE_AMINO_ACIDS, (const BaseMatrix *) subMat_3di, 0, false, compBiasCorrection);

    StructureSmithWaterman structureSmithWaterman(
        maxSeqLen,
        alphabetSize,
        compBiasCorrection,
        compBiasCorrectionScale,
        subMat_aa,
        subMat_3di
    );
    std::vector<AlnSimple> threadAlnResults;
    char buffer[255 + 1];

#pragma omp for schedule(dynamic, 10)
    for (size_t i = 0; i < cluDbr->getSize(); ++i) {
        char *data = cluDbr->getData(i, thread_idx);
       
        std::vector<unsigned int> memberDbKeys;
       
        while (*data != '\0') {
            Util::parseKey(data, buffer);
            unsigned int dbKey = (unsigned int) strtoul(buffer, NULL, 10);
            memberDbKeys.push_back(dbKey);
            data = Util::skipLine(data);
        }

        for (size_t j = 0; j < memberDbKeys.size(); j++) {
            unsigned int queryKey = memberDbKeys[j];
            size_t queryId = seqDbrAA.getId(queryKey);
            seqQueryAa.mapSequence(queryId, queryKey, seqDbrAA.getData(queryId, thread_idx), seqDbrAA.getSeqLen(queryId));
            queryId = seqDbr3Di.getId(queryKey);
            seqQuerySs.mapSequence(queryId, queryKey, seqDbr3Di.getData(queryId, thread_idx), seqDbr3Di.getSeqLen(queryId));
            structureSmithWaterman.ssw_init(&seqQueryAa, &seqQuerySs, tinySubMatAA, tinySubMat3Di, subMat_aa);
            for (size_t k = j + 1; k < memberDbKeys.size(); k++) {
                unsigned int dbKey = memberDbKeys[k];
                size_t dbId = seqDbrAA.getId(dbKey);
                seqDbAa.mapSequence(dbId, dbKey, seqDbrAA.getData(dbId, thread_idx), seqDbrAA.getSeqLen(dbId));
                dbId = seqDbr3Di.getId(dbKey);
                seqDbSs.mapSequence(dbId, dbKey, seqDbr3Di.getData(dbId, thread_idx), seqDbr3Di.getSeqLen(dbId));
                AlnSimple aln;
                aln.queryId = queryKey;
                aln.targetId = dbKey;
                aln.score = structureSmithWaterman.ungapped_alignment(seqDbAa.numSequence, seqDbSs.numSequence, seqDbAa.L);
                threadAlnResults.push_back(aln);
            }
        }
    }
#pragma omp critical
    {
        allAlnResults.insert(allAlnResults.end(), threadAlnResults.begin(), threadAlnResults.end());
    }
}
    return allAlnResults;
}

void addCigarStates(std::vector<Instruction> &cigar, int state, int count) {
    while (count > 0) {
        if (cigar.empty() || cigar.back().bits.state != state || cigar.back().isFull()) {
            cigar.emplace_back(state, 0); 
        }
        int spaceLeft = 127 - static_cast<int>(cigar.back().bits.count);
        if (count > spaceLeft) {
            cigar.back().bits.count = 127;
            count -= spaceLeft;
        } else {
            cigar.back().bits.count += count;
            count = 0;
        }
    }
}


/**
 * @brief Get merge instructions for two MSAs
 * 
 * @param res  - alignment result
 * @param map1 - ungapped->gapped mapping for msa1
 * @param map2 - ungapped->gapped mapping for msa2
 * @param qBt  - vector to store query merge instructions
 * @param tBt  - vector to store target merge instructions
 */
void getMergeInstructions(
    Matcher::result_t &res,
    std::vector<size_t> &map1,
    std::vector<size_t> &map2,
    std::vector<Instruction> &qBt,
    std::vector<Instruction> &tBt
) {
    qBt.emplace_back(SEQ, 1);  // first match
    tBt.emplace_back(SEQ, 1);
    int new_q, dq;
    int new_t, dt;
    int old_q = map1[res.qStartPos];
    int old_t = map2[res.dbStartPos];
    int q = res.qStartPos + 1;  // indices in non-gappy sequence
    int t = res.dbStartPos + 1;
 
    // Generate instructions for query/target sequences from backtrace
    for (size_t i = 1; i < res.backtrace.length(); ++i) {
        switch (res.backtrace[i]) {
            case 'M': {
                new_q = map1[q];
                new_t = map2[t];
                dq = new_q - old_q;
                dt = new_t - old_t; 
                if (dq == 0) {
                    // No matches in query
                    addCigarStates(qBt, GAP, dt);
                    addCigarStates(tBt, SEQ, dt);
                } else if (dq == 1) {
                    // One match in query
                    if ((dt - 1) > 0)
                        addCigarStates(qBt, GAP, dt - 1);
                    addCigarStates(qBt, SEQ, 1);
                    addCigarStates(tBt, SEQ, dt);
                } else if (dq >= dt) {
                    // More query matches than target
                    addCigarStates(qBt, SEQ, dq);
                    addCigarStates(tBt, GAP, dq - dt);
                    addCigarStates(tBt, SEQ, dt);
                } else if (dt > dq) {
                    // More target than query
                    addCigarStates(qBt, GAP, dt - dq);
                    addCigarStates(qBt, SEQ, dq);
                    addCigarStates(tBt, SEQ, dt);
                }
                old_q = new_q;
                old_t = new_t;
                ++q;
                ++t;
                break;
            }
            case 'I': {
                ++q;
                break;
            }
            case 'D': {
                ++t;
                break;
            }
        }
    }
}

inline bool needNewInstruction(std::vector<Instruction> &instructions) {
    return (
        instructions.empty()
        || instructions.back().isSeq()
        || instructions.back().isFull()
    );
}

/**
 * @brief Expands a sequence based on CIGAR
 * 
 * @param instructions Vector of Instructions
 * @return std::string Expanded alignment string
 */
std::string expand(const std::vector<Instruction> &instructions) {
    std::string result = "";
    for (const Instruction &ins : instructions) {
        if (ins.isSeq()) {
            result.append(1, ins.getCharacter());
        } else {
            result.append(static_cast<int>(ins.bits.count), '-');
        }
    }
    return result;
}

/**
 * @brief Convert sequence string to vector of Instructions
 * 
 * e.g. --AB-C
 *      state 1, count 2
 *      state 0, A
 *      state 0, B
 *      state 1, count 1
 *      state 0, C
 *
 * @param sequence 
 * @return std::vector<Instruction> 
 */
std::vector<Instruction> contract(const std::string& sequence) {
    std::vector<Instruction> instructions;
    for (const char& letter : sequence) {
        if (letter == '\0') {
            break;
        }
        if (letter == '-') {
            if (needNewInstruction(instructions)) {
                instructions.emplace_back(static_cast<int>(1));
            } else {
                instructions.back().bits.count++;
            }
        } else {
            instructions.emplace_back(letter);
        }
    };
    // std::string rex = expand(instructions);
    // assert(rex == sequence);
    return instructions;
}

void printInstructions(std::vector<Instruction> &instructions) {
    for (Instruction ins : instructions) {
        if (ins.bits.state == 0) { 
            std::cout << ins.getCharacter();
        } else {
            for (int i = 0; i < ins.bits.count; i++) {
                std::cout << '-';
            }
        }
    }
    std::cout << '\n';
}

/**
 * @brief Add gaps to a vector of instructions
 * 
 * @param toAdd number of gaps to add to end of instructions
 * @param instructions vector of instructions
 */
void addCigarGaps(
    int toAdd,
    std::vector<Instruction> &instructionsAA,
    std::vector<Instruction> &instructionsSS
) {
    while (toAdd > 0) {
        if (needNewInstruction(instructionsAA)) {
            instructionsAA.emplace_back(0);
            instructionsSS.emplace_back(0);
        }
        int spaceLeft = 127 - static_cast<int>(instructionsAA.back().bits.count);
        if (toAdd > spaceLeft) {
            instructionsAA.back().bits.count = 127;
            instructionsSS.back().bits.count = 127;
            toAdd -= spaceLeft;
        } else {
            instructionsAA.back().bits.count += toAdd;
            instructionsSS.back().bits.count += toAdd;
            toAdd = 0;
        }
    }
}

/**
 * @brief Generate new instructions for gaps/sequence before start of alignment
 * 
 * @param toAdd number of sequence positions to add
 * @param oldIndex index of current old instruction
 * @param newInstructionsAA 
 * @param newInstructionsSS 
 * @param oldInstructionsAA 
 * @param oldInstructionsSS 
 */
void addCigarIndices(
    int toAdd,
    int &oldIndex,
    std::vector<Instruction> &newInstructionsAA,
    std::vector<Instruction> &newInstructionsSS,
    std::vector<Instruction> &oldInstructionsAA,
    std::vector<Instruction> &oldInstructionsSS
) {
    while (toAdd > 0) {
        if (oldInstructionsAA[oldIndex].isSeq()) {
            newInstructionsAA.emplace_back(oldInstructionsAA[oldIndex].getCharacter());
            newInstructionsSS.emplace_back(oldInstructionsSS[oldIndex].getCharacter());
            oldIndex++;
            toAdd--;
        } else {
            if (needNewInstruction(newInstructionsAA)) {
                newInstructionsAA.emplace_back(0);
                newInstructionsSS.emplace_back(0);
            }
            int spaceLeft = 127 - newInstructionsAA.back().bits.count;
            if (toAdd > oldInstructionsAA[oldIndex].bits.count) {
                // use ALL of this instructions count
                // just have to check space in the new count

                if (oldInstructionsAA[oldIndex].bits.count > spaceLeft) {
                    // make new instruction/s until we exhaust the old instruction
                    newInstructionsAA.back().bits.count = 127;
                    newInstructionsSS.back().bits.count = 127;
                    oldInstructionsAA[oldIndex].bits.count -= spaceLeft;
                    oldInstructionsSS[oldIndex].bits.count -= spaceLeft;
                    toAdd -= spaceLeft;
                } else {
                    newInstructionsAA.back().bits.count += oldInstructionsAA[oldIndex].bits.count;
                    newInstructionsSS.back().bits.count += oldInstructionsSS[oldIndex].bits.count;
                    toAdd -= oldInstructionsAA[oldIndex].bits.count;
                    oldIndex++;
                }
            } else {
                if (toAdd > spaceLeft) {
                    newInstructionsAA.back().bits.count = 127;
                    newInstructionsSS.back().bits.count = 127;
                    oldInstructionsAA[oldIndex].bits.count -= spaceLeft;
                    oldInstructionsSS[oldIndex].bits.count -= spaceLeft;
                    toAdd -= spaceLeft;
                } else {
                    newInstructionsAA.back().bits.count += toAdd;
                    newInstructionsSS.back().bits.count += toAdd;
                    oldInstructionsAA[oldIndex].bits.count -= toAdd;
                    oldInstructionsSS[oldIndex].bits.count -= toAdd;
                    toAdd = 0;
                }
            }
        }
    }
}

void updateQueryCIGAR(
    std::vector<Instruction> &cigar_aa,
    std::vector<Instruction> &cigar_ss,
    std::vector<Instruction> &instructions,
    int preGap,
    int preSequence,
    int endGap,
    int endSequence
) {
    int cigarIndex = 0;
    std::vector<Instruction> aa;
    std::vector<Instruction> ss;
    addCigarGaps(preGap, aa, ss);
    addCigarIndices(preSequence, cigarIndex, aa, ss, cigar_aa, cigar_ss);
    for (Instruction ins : instructions) {
        if (ins.isSeq()) {
            addCigarIndices(ins.bits.count, cigarIndex, aa, ss, cigar_aa, cigar_ss);
        } else {
            addCigarGaps(ins.bits.count, aa, ss);
        }
    }
    addCigarIndices(endSequence, cigarIndex, aa, ss, cigar_aa, cigar_ss);
    addCigarGaps(endGap, aa, ss);
    cigar_aa.assign(aa.begin(), aa.end());
    cigar_ss.assign(ss.begin(), ss.end());
}

void updateTargetCIGAR(
    std::vector<Instruction> &cigar_aa,
    std::vector<Instruction> &cigar_ss,
    std::vector<Instruction> &instructions,
    int preGap,
    int preSequence,
    int endGap,
    int endSequence
) {
    int cigarIndex = 0;
    std::vector<Instruction> aa;
    std::vector<Instruction> ss;
    addCigarIndices(preSequence, cigarIndex, aa, ss, cigar_aa, cigar_ss);
    addCigarGaps(preGap, aa, ss);
    for (Instruction ins : instructions) {
        if (ins.isSeq()) {
            addCigarIndices(ins.bits.count, cigarIndex, aa, ss, cigar_aa, cigar_ss);
        } else {
            addCigarGaps(ins.bits.count, aa, ss);
        }
    }
    addCigarGaps(endGap, aa, ss);
    addCigarIndices(endSequence, cigarIndex, aa, ss, cigar_aa, cigar_ss);
    cigar_aa.assign(aa.begin(), aa.end());
    cigar_ss.assign(ss.begin(), ss.end());
}

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
) {
    GapData g = getGapData(result, map1, map2); 
    for (size_t m : q_members) {
        updateQueryCIGAR(cigars_aa[m], cigars_ss[m], q_ins, g.preGaps, g.preSequence, g.endGaps, g.endSequence);
    }
    for (size_t m : t_members) {
        updateTargetCIGAR(cigars_aa[m], cigars_ss[m], t_ins, g.preSequence, g.preGaps, g.endSequence, g.endGaps);
    }
}

void testSeqLens(std::vector<size_t> &MAYBE_UNUSED(indices), std::vector<std::vector<Instruction> > &MAYBE_UNUSED(cigars), std::vector<int> &MAYBE_UNUSED(lengths)) {
    for (int MAYBE_UNUSED(index) : indices) {
        assert(lengths[index] == cigarLength(cigars[index], false));
    }
}

Matcher::result_t pairwiseTMAlign(
    int mergedId,
    int targetId,
    DBReader<unsigned int> &seqDbrAA,
    DBReader<unsigned int> *seqDbrCA
) {
    int qLen = seqDbrAA.getSeqLen(mergedId);
    int tLen = seqDbrAA.getSeqLen(targetId);
    
    unsigned int qKey = seqDbrAA.getDbKey(mergedId);
    size_t qCaId = seqDbrCA->getId(qKey);

    unsigned int tKey = seqDbrAA.getDbKey(targetId);
    size_t tCaId = seqDbrCA->getId(tKey);
    
    Coordinate16 qcoords;
    char *qcadata = seqDbrCA->getData(qCaId, 0);
    size_t qCaLength = seqDbrCA->getEntryLen(qCaId);
    float *qCaData = qcoords.read(qcadata, qLen, qCaLength);
    char *merged_aa_seq = seqDbrAA.getData(qCaId, 0);
    
    Coordinate16 tcoords;
    char *tcadata = seqDbrCA->getData(tCaId, 0);
    size_t tCaLength = seqDbrCA->getEntryLen(tCaId);
    float *tCaData = tcoords.read(tcadata, tLen, tCaLength);
    char *target_aa_seq = seqDbrAA.getData(tCaId, 0);

    float TMscore = 0.0;
    TMaligner tmaln(std::max(qLen, tLen)+VECSIZE_FLOAT, 1, 0, false);
    tmaln.initQuery(qCaData, &qCaData[qLen], &qCaData[qLen * 2], merged_aa_seq, qLen);
    Matcher::result_t res = tmaln.align(targetId, tCaData, &tCaData[tLen], &tCaData[tLen * 2], target_aa_seq, tLen, TMscore);
    res.backtrace = Matcher::uncompressAlignment(res.backtrace);
    res.score /= 100;

    return res;
}

// copy from one to two
void copyInstructions(std::vector<Instruction> &one, std::vector<Instruction> &two) {
    for (Instruction ins : one) {
        two.emplace_back(static_cast<int>(ins.bits.state), static_cast<int>(ins.bits.count));
    }
}

// copy from one to two
void copyInstructionVectors(std::vector<std::vector<Instruction> > &one, std::vector<std::vector<Instruction> > &two) {
    two.clear();
    two.resize(one.size());
    // for (std::vector<Instruction> vec : one) {
    for (size_t i = 0; i < one.size(); i++) {
        // std::vector<Instruction> tmp;
        copyInstructions(one[i], two[i]);
        // two[i] = tmp;
    }
}


float score_continuous(float x, float k, float p, float min_score) {
    float decay = std::exp(-std::pow(x / k, p));
    return min_score + (1.0f - min_score) * decay;
}

inline bool root_diff(float sum_ab, float prod4, float T) {
    float s = sum_ab - T;
    return (s < 0.0f) || (prod4 > s * s);
}

inline float score_binned(float ang1, float ang2, float idx1, float idx2) {
    float sum = 0.0f;
    float sum_ab = ang1 + ang2;
    float prod4 = 4.0f * ang1 * ang2;
    if      (root_diff(sum_ab, prod4, 0.25f)) sum += 1.0f;
    else if (root_diff(sum_ab, prod4, 1.0f)) sum += 0.6f;
    else if (root_diff(sum_ab, prod4, 4.0f)) sum += 0.4f;
    else if (root_diff(sum_ab, prod4, 16.0f)) sum += 0.2f;
    float idx_diff = std::fabs(idx1 - idx2);
    if (idx_diff < 2.0f) sum += 1.0f;
    else if (idx_diff < 4.0f) sum += 0.6f;
    else if (idx_diff < 8.0f) sum += 0.4f;
    else if (idx_diff < 12.0f) sum += 0.2f;
    
    // float sum2 = 0.0f;
    // float sigma_d = 1.3f;
    // float sigma_i = 4.0f;
    // float r_d = std::fabsf(ang1 - ang2) / sigma_d;
    // float r_i = std::fabsf(idx1 - idx2) / sigma_i;
    // sum2 += 1.0f / (1.0f + r_d * r_d);
    // sum2 += 1.0f / (1.0f + r_i * r_i);
    // std::cout << std::fixed << std::setprecision(4) << sum << '\t' << sum2 << '\n';
    
    // float sum3 = 0.0f;
    // sum3 += std::max(0.2f, std::min(1.0f, 0.628f * std::powf(std::fabsf(ang1 - ang2), -0.387f)));
    // sum3 += std::max(0.2f, std::min(1.0f, 0.91f * std::powf(std::fabsf(idx1 - idx2), -0.61f)));
    // std::cout << std::fixed << std::setprecision(4) << sum << '\t' << sum2 << '\t' << sum3 << '\n';
    
    return sum;
}

inline float score_binned_manual(
    float ang1,
    float ang2,
    float idx1,
    float idx2,
    float ang_sc1,
    float ang_sc2,
    float ang_sc3,
    float ang_sc4,
    float ang_thr1,
    float ang_thr2,
    float ang_thr3,
    float ang_thr4,
    float idx_sc1,
    float idx_sc2,
    float idx_sc3,
    float idx_sc4,
    float idx_thr1,
    float idx_thr2,
    float idx_thr3,
    float idx_thr4
) {
    float sum = 0.0f;
    float sum_ab = ang1 + ang2;
    float prod4 = 4.0f * ang1 * ang2;
    if      (root_diff(sum_ab, prod4, ang_thr1)) sum += ang_sc1;
    else if (root_diff(sum_ab, prod4, ang_thr2)) sum += ang_sc2;
    else if (root_diff(sum_ab, prod4, ang_thr3)) sum += ang_sc3;
    else if (root_diff(sum_ab, prod4, ang_thr4)) sum += ang_sc4;
    float idx_diff = std::fabs(idx1 - idx2);
    if      (idx_diff < idx_thr1) sum += idx_sc1;
    else if (idx_diff < idx_thr2) sum += idx_sc2;
    else if (idx_diff < idx_thr3) sum += idx_sc3;
    else if (idx_diff < idx_thr4) sum += idx_sc4;
    return sum;
}

inline float delta2_norm(float a, float b) {
    float num = (a - b) * (a - b);
    float den = a + b + 1e-12f;
    return num / den;
}

inline float sim_gauss(float a, float b, float sigma) {
    return expf(-delta2_norm(a, b) * sigma);
}

inline float sim(float i1, float i2, float sigma) {
    float x = fabsf(i1 - i2) * sigma;
    return expf(-(x * x));
}

inline float score_continuous(
    float ang1_sq, float ang2_sq,
    float idx1, float idx2,
    float sigma_r,
    float sigma_i,
    float alpha, float beta
) {
    float Sr = sim_gauss(ang1_sq, ang2_sq, sigma_r);
    float Si = sim(idx1, idx2, sigma_i);
    return alpha * Sr + beta * Si;
}

struct Neighbour {
    Neighbour() : j(0), k(0), distance(0.0f) {}
    Neighbour(size_t j, size_t k, float distance) : j(j), k(k), distance(distance) {}
    bool empty() { return j == k; }
    size_t j;
    size_t k;
    float distance;
};

inline void insert_topk(
    size_t rowBase,
    uint8_t& count,
    size_t owner_j,
    size_t nb_k,
    float d2,
    std::vector<Neighbour>& out,
    size_t K
) {
    if (count < K) {
        out[rowBase + count] = Neighbour{ owner_j, nb_k, d2 };
        ++count;
        return;
    }
    // find worst (max d^2) among current K
    size_t worst = rowBase;
    float  wval  = out[worst].distance;
    for (size_t t = 1; t < K; ++t) {
        float v = out[rowBase + t].distance;
        if (v > wval) { wval = v; worst = rowBase + t; }
    }
    if (d2 < wval) {
        out[worst] = Neighbour{ owner_j, nb_k, d2 };
    }
}


int structuremsa(int argc, const char **argv, const Command& command, bool preCluster) {
    FoldmasonParameters &par = FoldmasonParameters::getFoldmasonInstance();

    // Databases
    const bool touch = (par.preloadMode != Parameters::PRELOAD_MODE_MMAP);
    par.parseParameters(argc, argv, command, true, 0, MMseqsParameter::COMMAND_ALIGN);

    DBReader<unsigned int> seqDbrAA(par.db1.c_str(), par.db1Index.c_str(), par.threads, DBReader<unsigned int>::USE_INDEX|DBReader<unsigned int>::USE_DATA|DBReader<unsigned int>::USE_LOOKUP_REV);
    seqDbrAA.open(DBReader<unsigned int>::NOSORT);
    DBReader<unsigned int> seqDbr3Di((par.db1+"_ss").c_str(), (par.db1+"_ss.index").c_str(), par.threads, DBReader<unsigned int>::USE_INDEX|DBReader<unsigned int>::USE_DATA);
    seqDbr3Di.open(DBReader<unsigned int>::NOSORT);
    
    // Check for CA database
    DBReader<unsigned int> *seqDbrCA = NULL;
    bool caExist = FileUtil::fileExists((par.db1 + "_ca.dbtype").c_str());
    if (caExist == false) {
        Debug(Debug::INFO) << "Did not find " << FileUtil::baseName(par.db1) << " C-alpha database, not using\n";
    } else {
        seqDbrCA = new DBReader<unsigned int>(
            (par.db1 + "_ca").c_str(),
            (par.db1 + "_ca.index").c_str(),
            par.threads,
            DBReader<unsigned int>::USE_INDEX|DBReader<unsigned int>::USE_DATA
        );
        seqDbrCA->open(DBReader<unsigned int>::NOSORT);
    }

    IndexReader qdbrH(par.db1, par.threads, IndexReader::HEADERS, touch ? IndexReader::PRELOAD_INDEX : 0);
    
    Debug(Debug::INFO) << "Got databases\n";
    
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

    Debug(Debug::INFO) << "Got substitution matrices\n";

    // Initialise MSAs, Sequence objects
    size_t sequenceCnt = seqDbrAA.getSize();
    int maxSeqLength = par.maxSeqLen;
    size_t totalResidues = 0;
    MSAContainer msa(sequenceCnt);
    for (size_t i = 0; i < sequenceCnt; i++) {
        unsigned int seqKeyAA = seqDbrAA.getDbKey(i);
        unsigned int seqKey3Di = seqDbr3Di.getDbKey(i);
        size_t seqIdAA = seqDbrAA.getId(seqKeyAA);
        size_t seqId3Di = seqDbr3Di.getId(seqKey3Di);
        size_t length = seqDbrAA.getSeqLen(seqIdAA);
        totalResidues += length;
        msa.addStructure(seqIdAA, seqKeyAA, length, seqDbrAA.getData(seqIdAA, 0), seqDbr3Di.getData(seqId3Di, 0));
        maxSeqLength = std::max(maxSeqLength, static_cast<int>(length));
    }
   
    // Map neighbours per residue per structure
    size_t neighbours = 21;
    float thresh = 15.0f;
    float nb_multiplier = 6.0f;
    float nb_low_cut = 0.5f;

    // float nb_ang_sc1 = 1.0f;
    // float nb_ang_sc2 = 0.6f;
    // float nb_ang_sc3 = 0.4f;
    // float nb_ang_sc4 = 0.2f;
    // float nb_ang_thr1 = 0.5f;  // these should be squared
    // float nb_ang_thr2 = 1.0f;
    // float nb_ang_thr3 = 2.0f;
    // float nb_ang_thr4 = 4.0f;
    // float nb_idx_sc1 = 1.0f;
    // float nb_idx_sc2 = 0.6f;
    // float nb_idx_sc3 = 0.4f;
    // float nb_idx_sc4 = 0.2f;
    // float nb_idx_thr1 = 2.0f;
    // float nb_idx_thr2 = 4.0f;
    // float nb_idx_thr3 = 8.0f;
    // float nb_idx_thr4 = 12.0f;
    
    // continuous scoring vars
    float nb_sigma_r = 9.0f;
    float nb_sigma_i = 5.0f;
    float nb_alpha = 1.0f;
    float nb_beta = 1.0f;
    get_param_from_env("NB_SIGMA_R", nb_sigma_r);
    get_param_from_env("NB_SIGMA_I", nb_sigma_i);
    get_param_from_env("NB_ALPHA", nb_alpha);
    get_param_from_env("NB_BETA", nb_beta);
    
    nb_sigma_r = 1.0f / nb_sigma_r;
    nb_sigma_i = 1.0f / nb_sigma_i;

    get_param_from_env("NB_TOTAL", neighbours);
    get_param_from_env("NB_ANG_CUT", thresh);
    get_param_from_env("NB_MULT", nb_multiplier);
    get_param_from_env("NB_LOW_CUT", nb_low_cut);
    // get_param_from_env("NB_ANG_SC1", nb_ang_sc1);
    // get_param_from_env("NB_ANG_SC2", nb_ang_sc2);
    // get_param_from_env("NB_ANG_SC3", nb_ang_sc3);
    // get_param_from_env("NB_ANG_SC4", nb_ang_sc4);
    // get_param_from_env("NB_ANG_THR1", nb_ang_thr1);
    // get_param_from_env("NB_ANG_THR2", nb_ang_thr2);
    // get_param_from_env("NB_ANG_THR3", nb_ang_thr3);
    // get_param_from_env("NB_ANG_THR4", nb_ang_thr4);
    // get_param_from_env("NB_IDX_SC1", nb_idx_sc1);
    // get_param_from_env("NB_IDX_SC2", nb_idx_sc2);
    // get_param_from_env("NB_IDX_SC3", nb_idx_sc3);
    // get_param_from_env("NB_IDX_SC4", nb_idx_sc4);
    // get_param_from_env("NB_IDX_THR1", nb_idx_thr1);
    // get_param_from_env("NB_IDX_THR2", nb_idx_thr2);
    // get_param_from_env("NB_IDX_THR3", nb_idx_thr3);
    // get_param_from_env("NB_IDX_THR4", nb_idx_thr4);
    
    // std::cout
    //     << "NB_TOTAL=" <<  neighbours << '\t'
    //     << "NB_ANG_CUT=" <<  thresh << '\t'
    //     << "NB_MULT=" <<  nb_multiplier << '\t'
    //     << "NB_LOW_CUT=" <<  nb_low_cut << '\t'
    //     << "NB_ANG_SC1=" <<  nb_ang_sc1 << '\t'
    //     << "NB_ANG_SC2=" <<  nb_ang_sc2 << '\t'
    //     << "NB_ANG_SC3=" <<  nb_ang_sc3 << '\t'
    //     << "NB_ANG_SC4=" <<  nb_ang_sc4 << '\t'
    //     << "NB_ANG_THR1=" <<  nb_ang_thr1 << '\t'
    //     << "NB_ANG_THR2=" <<  nb_ang_thr2 << '\t'
    //     << "NB_ANG_THR3=" <<  nb_ang_thr3 << '\t'
    //     << "NB_ANG_THR4=" <<  nb_ang_thr4 << '\t'
    //     << "NB_IDX_SC1=" <<  nb_idx_sc1 << '\t'
    //     << "NB_IDX_SC2=" <<  nb_idx_sc2 << '\t'
    //     << "NB_IDX_SC3=" <<  nb_idx_sc3 << '\t'
    //     << "NB_IDX_SC4=" <<  nb_idx_sc4 << '\t'
    //     << "NB_IDX_THR1=" <<  nb_idx_thr1 << '\t'
    //     << "NB_IDX_THR2=" <<  nb_idx_thr2 << '\t'
    //     << "NB_IDX_THR3=" <<  nb_idx_thr3 << '\t'
    //     << "NB_IDX_THR4=" <<  nb_idx_thr4 << '\n';
    
    // nb_ang_thr1 *= nb_ang_thr1;
    // nb_ang_thr2 *= nb_ang_thr2;
    // nb_ang_thr3 *= nb_ang_thr3;
    // nb_ang_thr4 *= nb_ang_thr4;

    const float thresh_sq = thresh * thresh;

    std::vector<Neighbour> neighbourData(totalResidues * neighbours);
    std::vector<size_t> proteinOffsets;
    proteinOffsets.push_back(0);

    size_t baseOut = 0;
    Coordinate16 tcoords;

    for (size_t i = 0; i < sequenceCnt; i++) {
        unsigned int seqKeyAA = seqDbrAA.getDbKey(i);
        size_t seqIdAA = seqDbrAA.getId(seqKeyAA);
        size_t length = seqDbrAA.getSeqLen(seqIdAA);
        
        char *tcadata = seqDbrCA->getData(seqIdAA, 0);
        size_t tCaLength = seqDbrCA->getEntryLen(seqIdAA);
        float *targetCaData = tcoords.read(tcadata, length, tCaLength);
        
        const float* x = targetCaData;
        const float* y = targetCaData + length;
        const float* z = targetCaData + length * 2;
        
        std::vector<uint8_t> count(length, 0);
        for (size_t j = 0; j < length; ++j) {
            const float xj = x[j], yj = y[j], zj = z[j];
            const size_t rowBaseJ = baseOut + j * neighbours;
            for (size_t k = j + 1; k < length; ++k) {
                float dx = xj - x[k];
                float dist = dx * dx;
                if (dist > thresh_sq) continue; 
                float dy = yj - y[k];
                dist += dy * dy;
                if (dist > thresh_sq) continue; 
                float dz = zj - z[k];
                dist += dz * dz;
                if (dist < thresh_sq) {
                    insert_topk(rowBaseJ, count[j], static_cast<int>(j), static_cast<int>(k), dist, neighbourData, neighbours); 
                    const size_t rowBaseK = baseOut + k * neighbours;
                    insert_topk(rowBaseK, count[k], static_cast<int>(k), static_cast<int>(j), dist, neighbourData, neighbours); 
                }
            }
        }
        for (size_t j = 0; j < length; ++j) {
            const size_t rowBase = baseOut + j * neighbours;
            const uint8_t c = count[j];
            std::sort(
                &neighbourData[rowBase],
                &neighbourData[rowBase + c],
                [](const Neighbour& a, const Neighbour& b) {
                    return a.distance < b.distance;
                }
            );
            for (size_t t = c; t < neighbours; ++t) {  // padding
                neighbourData[rowBase + t] = Neighbour{j, j, 0.0f};
            }
        }
        baseOut += length * neighbours;
        proteinOffsets.push_back(baseOut);
    }
    
    // FIXME precompute here, maybe unavoidable
    // for (Neighbour& n : neighbourData) {
    //     n.distance = std::sqrt(std::max(0.f, n.distance));
    // }
   
    Debug(Debug::INFO) << "Initialised MSAs, Sequence objects\n";

    // Substitution matrices needed for query profile
    int8_t *tinySubMatAA  = (int8_t*) mem_align(ALIGN_INT, subMat_aa.alphabetSize * 32);
    int8_t *tinySubMat3Di = (int8_t*) mem_align(ALIGN_INT, subMat_3di.alphabetSize * 32);

    for (int i = 0; i < subMat_3di.alphabetSize; i++)
        for (int j = 0; j < subMat_3di.alphabetSize; j++)
            tinySubMat3Di[i * subMat_3di.alphabetSize + j] = subMat_3di.subMatrix[i][j]; // for farrar profile
    for (int i = 0; i < subMat_aa.alphabetSize; i++)
        for (int j = 0; j < subMat_aa.alphabetSize; j++)
            tinySubMatAA[i * subMat_aa.alphabetSize + j] = subMat_aa.subMatrix[i][j];

    Debug(Debug::INFO) << "Set up tiny substitution matrices\n";

    DBReader<unsigned int> * cluDbr = NULL;

    if (preCluster) {
        Debug(Debug::INFO) << "Reading cluster database\n";
        cluDbr = new DBReader<unsigned int>(
            par.db2.c_str(),
            par.db2Index.c_str(),
            par.threads,
            DBReader<unsigned int>::USE_INDEX | DBReader<unsigned int>::USE_DATA
        );
        cluDbr->open(DBReader<unsigned int>::LINEAR_ACCCESS);
    }
    
    // Check if guide tree argument given
    // Try parse --> read if non-empty, otherwise generate one and write
    std::string tree;
    std::vector<AlnSimple> hits;
    std::vector<size_t> merges;
    std::vector<double> weights;

    if (par.guideTree != "") {
        std::string line;
        std::ifstream newick(par.guideTree);
        if (newick.is_open()) {
            while (std::getline(newick, line))
                tree += line;
            newick.close();
        }
    }

    if (tree != "") {
        Debug(Debug::INFO) << "Parsing tree: " << tree << '\n';
        NewickParser::Node* root = NewickParser::parse(tree);
        // std::string nw = NewickParser::toNewick(root);
        // assert(nw == tree);
        
        std::vector<std::string> linkage;
        NewickParser::postOrder(root, &linkage);
        delete root;

        for (size_t i = 0; i < linkage.size(); i += 2) {
            AlnSimple hit;
            
            size_t queryLookupId = seqDbrAA.getLookupIdByAccession(linkage[i]);
            if (queryLookupId == SIZE_MAX) {
                Debug(Debug::ERROR) << "Could not find name " << linkage[i] << " in lookup\n";
                exit(1);
            }
            unsigned int queryKey = seqDbrAA.getLookupKey(queryLookupId);
            size_t queryId = seqDbrAA.getId(queryKey);
            hit.queryId = queryId;
            
            size_t targetLookupId = seqDbrAA.getLookupIdByAccession(linkage[i + 1]);
            if (targetLookupId == SIZE_MAX) {
                Debug(Debug::ERROR) << "Could not find name " << linkage[i + 1] << " in lookup\n";
                exit(1);
            }
            
            unsigned int targetKey = seqDbrAA.getLookupKey(targetLookupId);
            size_t targetId = seqDbrAA.getId(targetKey);
            hit.targetId = targetId;
            
            if (queryId == targetId) {
                continue;
            }

            hit.score = 0;
            hits.push_back(hit);
        }
        
        Debug(Debug::INFO) << "Optimising merge order\n";
        balanceTree(hits, merges, sequenceCnt);
    } else {
        Debug(Debug::INFO) << "Performing initial all vs all alignments\n";
        updateAllScores(
            hits,
            seqDbrAA,
            seqDbr3Di,
            cluDbr,
            tinySubMatAA,
            tinySubMat3Di,
            &subMat_aa,
            &subMat_3di,
            par.maxSeqLen,
            subMat_3di.alphabetSize,
            par.compBiasCorrection,
            par.compBiasCorrectionScale
        );
        if (cluDbr != NULL) {
            // add external hits to the list
            std::vector<AlnSimple> externalHits = parseAndScoreExternalHits(
                seqDbrAA,
                seqDbr3Di,
                cluDbr,
                tinySubMatAA,
                tinySubMat3Di,
                &subMat_aa,
                &subMat_3di,
                par.maxSeqLen,
                subMat_3di.alphabetSize,
                par.compBiasCorrection,
                par.compBiasCorrectionScale
            );
            hits.insert(hits.end(), externalHits.begin(), externalHits.end());
            // maybe a bit dangerous because memory of hits might be doubled
        }
        sortHitsByScore(hits);

        Debug(Debug::INFO) << "Generating guide tree\n";
        mst(hits, sequenceCnt);
        // upgma(hits, sequenceCnt);
        // neighbour_joining(hits, sequenceCnt);
        // assert(hits.size() == sequenceCnt - 1);  // should be n-1 edges

        Debug(Debug::INFO) << "Optimising merge order\n";
        balanceTree(hits, merges, sequenceCnt);
        // merges.assign(sequenceCnt - 1, 1);

        std::string nw = makeNewick(hits, sequenceCnt, &qdbrH);
        std::string treeFile = par.filenames[par.filenames.size()-1] + ".nw";
        Debug(Debug::INFO) << "Writing guide tree to: " << treeFile << '\n';
        std::ofstream guideTree(treeFile, std::ofstream::out);
        guideTree << nw;
        guideTree.close();
    }
   
    if (par.verbosity > Debug::INFO) {
        int idx = 0;
        size_t qHeaderId, tHeaderId;
        unsigned int qKey, tKey;
        std::string qHeader, tHeader;
        for (size_t i = 0; i < merges.size(); i++) {
            Debug(Debug::INFO) << "Merging " << merges[i] << " sequences\n";
            for (size_t j = 0; j < merges[i]; j++) {
                qKey = seqDbrAA.getDbKey(hits[idx + j].queryId);
                qHeaderId = qdbrH.sequenceReader->getId(qKey);
                qHeader = Util::parseFastaHeader(qdbrH.sequenceReader->getData(qHeaderId, 0));
                tKey = seqDbrAA.getDbKey(hits[idx + j].targetId);
                tHeaderId = qdbrH.sequenceReader->getId(tKey);
                tHeader = Util::parseFastaHeader(qdbrH.sequenceReader->getData(tHeaderId, 0));
                Debug(Debug::INFO) << "  " << qHeader << "\t" << tHeader << '\t' << static_cast<int>(hits[idx + j].score) << '\n';
            }
            idx += merges[i];
        }
    }

    Debug(Debug::INFO) << "Begin progressive alignment\n";
    
    // global reduction vectors
    std::vector<SubMSA> globalSubMSAs;
    std::vector<size_t> globalToRemove;
    int index = 0; // in hit list
    size_t maxMerges = *std::max_element(merges.begin(), merges.end());
    int maxThreads = std::min(par.threads, static_cast<int>(maxMerges));

    EvalueNeuralNet evaluer(seqDbrAA.getAminoAcidDBSize(), &subMat_3di);
    
    Debug::Progress progress;
    progress.reset(sequenceCnt - 1);

#pragma omp parallel num_threads(maxThreads)
{
    unsigned int thread_idx = 0;
#ifdef OPENMP
    thread_idx = static_cast<unsigned int>(omp_get_thread_num());
#endif

    // Initialise alignment objects per thread
    StructureSmithWaterman structureSmithWaterman(par.maxSeqLen, subMat_3di.alphabetSize, par.compBiasCorrection, par.compBiasCorrectionScale, &subMat_aa, &subMat_3di);
    StructureSmithWaterman revStructureSmithWaterman(par.maxSeqLen, subMat_3di.alphabetSize, par.compBiasCorrection, par.compBiasCorrectionScale, &subMat_aa, &subMat_3di);

    MsaFilter filter_aa(maxSeqLength + 1, sequenceCnt + 1, &subMat_aa, par.gapOpen.values.aminoacid(), par.gapExtend.values.aminoacid());
    MsaFilter filter_3di(maxSeqLength + 1, sequenceCnt + 1, &subMat_3di, par.gapOpen.values.aminoacid(), par.gapExtend.values.aminoacid()); 
    PSSMCalculator calculator_aa(&subMat_aa, maxSeqLength + 1, sequenceCnt + 1, par.pcmode, par.pca, par.pcb
#ifdef GAP_POS_SCORING
    , par.gapOpen.values.aminoacid(), par.gapPseudoCount
#endif
    );
    PSSMCalculator calculator_3di(&subMat_3di, maxSeqLength + 1, sequenceCnt + 1, par.pcmode, par.pca, par.pcb
#ifdef GAP_POS_SCORING
    , par.gapOpen.values.aminoacid(), par.gapPseudoCount
#endif
    );

    // Add four seq objects per alignee per thread
    // Amino acid profile/sequence, 3Di profile/sequence
    Sequence seqMergedAaAa(par.maxSeqLen, Parameters::DBTYPE_AMINO_ACIDS, (const BaseMatrix *) &subMat_aa,  0, false, par.compBiasCorrection);
    Sequence seqMergedAaPr(par.maxSeqLen, Parameters::DBTYPE_HMM_PROFILE, (const BaseMatrix *) &subMat_aa,  0, false, par.compBiasCorrection);
    Sequence seqMergedSsAa(par.maxSeqLen, Parameters::DBTYPE_AMINO_ACIDS, (const BaseMatrix *) &subMat_3di, 0, false, par.compBiasCorrection);
    Sequence seqMergedSsPr(par.maxSeqLen, Parameters::DBTYPE_HMM_PROFILE, (const BaseMatrix *) &subMat_3di, 0, false, par.compBiasCorrection);
    Sequence seqTargetAaAa(par.maxSeqLen, Parameters::DBTYPE_AMINO_ACIDS, (const BaseMatrix *) &subMat_aa,  0, false, par.compBiasCorrection);
    Sequence seqTargetAaPr(par.maxSeqLen, Parameters::DBTYPE_HMM_PROFILE, (const BaseMatrix *) &subMat_aa,  0, false, par.compBiasCorrection);
    Sequence seqTargetSsAa(par.maxSeqLen, Parameters::DBTYPE_AMINO_ACIDS, (const BaseMatrix *) &subMat_3di, 0, false, par.compBiasCorrection);
    Sequence seqTargetSsPr(par.maxSeqLen, Parameters::DBTYPE_HMM_PROFILE, (const BaseMatrix *) &subMat_3di, 0, false, par.compBiasCorrection);
    
    // Pointers to whichever Sequence we need to use per-alignment
    Sequence *seqMergedAa;
    Sequence *seqMergedSs;
    Sequence *seqTargetAa;
    Sequence *seqTargetSs;

    // thread-local vectors
    std::vector<SubMSA> subMSAs;
    std::vector<size_t> toRemove;

    for (size_t i = 0; i < merges.size(); i++) {
        subMSAs.reserve(merges[i]);

#pragma omp for schedule(static, 1)
        for (size_t j = 0; j < merges[i]; j++) {

            size_t mergedId = hits[index + j].queryId;
            size_t targetId = hits[index + j].targetId;
            if (mergedId == targetId) {
                continue;
            }

            size_t querySubMSA = msa.dbIdToSubMSAVec[mergedId];
            bool queryIsProfile = msa.isProfile(mergedId);
            size_t targetSubMSA = msa.dbIdToSubMSAVec[targetId];
            bool targetIsProfile = msa.isProfile(targetId);

            // mask e.g. 010101 <=> [ 0, 2, 4 ] index
            std::vector<size_t> map1;
            std::vector<size_t> map2;
            std::vector<size_t> map1Rev;
            std::vector<size_t> map2Rev;

            // ids of members for each group
            std::vector<size_t> qMembers;
            std::vector<size_t> tMembers;

            if (queryIsProfile) {
                SubMSA& q = msa[querySubMSA];
                qMembers.assign(q.members.begin(), q.members.end());
                seqMergedAaPr.mapSequence(mergedId, mergedId, q.profile_aa.c_str(), q.profile_aa.length() / Sequence::PROFILE_READIN_SIZE);
                seqMergedSsPr.mapSequence(mergedId, mergedId, q.profile_ss.c_str(), q.profile_ss.length() / Sequence::PROFILE_READIN_SIZE);
                seqMergedAa = &seqMergedAaPr;
                seqMergedSs = &seqMergedSsPr;
                maskToMapping(q.mask, map1);
                maskToMappingRev(q.mask, map1Rev);
            } else {
                size_t length = seqDbrAA.getSeqLen(mergedId);
                qMembers = { mergedId };
                seqMergedAaAa.mapSequence(mergedId, mergedId, seqDbrAA.getData(mergedId, thread_idx), length);
                seqMergedSsAa.mapSequence(mergedId, mergedId, seqDbr3Di.getData(mergedId, thread_idx), length);
                seqMergedAa = &seqMergedAaAa;
                seqMergedSs = &seqMergedSsAa;
                map1.resize(length);
                std::iota(map1.begin(), map1.end(), 0);
                map1Rev.resize(length);
                std::iota(map1Rev.begin(), map1Rev.end(), 0);
            }

            if (targetIsProfile) {
                SubMSA& t = msa[targetSubMSA];
                tMembers.assign(t.members.begin(), t.members.end());
                seqTargetAaPr.mapSequence(targetId, targetId, t.profile_aa.c_str(), t.profile_aa.length() / Sequence::PROFILE_READIN_SIZE);
                seqTargetSsPr.mapSequence(targetId, targetId, t.profile_ss.c_str(), t.profile_ss.length() / Sequence::PROFILE_READIN_SIZE);
                seqTargetAa = &seqTargetAaPr;
                seqTargetSs = &seqTargetSsPr;
                maskToMapping(t.mask, map2);
                maskToMappingRev(t.mask, map2Rev);
            } else {
                size_t length = seqDbrAA.getSeqLen(targetId);
                tMembers = { targetId };
                seqTargetAaAa.mapSequence(targetId, targetId, seqDbrAA.getData(targetId, thread_idx), length);
                seqTargetSsAa.mapSequence(targetId, targetId, seqDbr3Di.getData(targetId, thread_idx), length);
                seqTargetAa = &seqTargetAaAa;
                seqTargetSs = &seqTargetSsAa;
                map2.resize(length);
                std::iota(map2.begin(), map2.end(), 0);
                map2Rev.resize(length);
                std::iota(map2Rev.begin(), map2Rev.end(), 0);
            }

            // Use most informative profile as query
            if (queryIsProfile && targetIsProfile) {
                float q_neff_sum = 0.0;
                float t_neff_sum = 0.0;
                for (int i = 0; i < seqMergedSs->L; i++) {
                    q_neff_sum += seqMergedSs->neffM[i];
                }
                for (int i = 0; i < seqTargetSs->L; i++) {
                    t_neff_sum += seqTargetSs->neffM[i];
                }
                if (q_neff_sum <= t_neff_sum) {
                    std::swap(mergedId, targetId);
                    std::swap(seqMergedAa, seqTargetAa);
                    std::swap(seqMergedSs, seqTargetSs);
                    std::swap(queryIsProfile, targetIsProfile);
                    std::swap(querySubMSA, targetSubMSA);
                    std::swap(qMembers, tMembers);
                    std::swap(map1, map2);
                    std::swap(map1Rev, map2Rev);
                }
            } else if (targetIsProfile && !queryIsProfile) {
                std::swap(mergedId, targetId);
                std::swap(seqMergedAa, seqTargetAa);
                std::swap(seqMergedSs, seqTargetSs);
                std::swap(queryIsProfile, targetIsProfile);
                std::swap(querySubMSA, targetSubMSA);
                std::swap(qMembers, tMembers);
                std::swap(map1, map2);
                std::swap(map1Rev, map2Rev);
            }

            // Since we will update the query subMSA, need to remove the target one 
            if (targetIsProfile) {
                toRemove.push_back(targetSubMSA);
            }

            structureSmithWaterman.ssw_init(seqMergedAa, seqMergedSs, tinySubMatAA, tinySubMat3Di, &subMat_aa);
            // seqMergedAa->reverse();
            // seqMergedSs->reverse();
            // revStructureSmithWaterman.ssw_init(seqMergedAa, seqMergedSs, tinySubMatAA, tinySubMat3Di, &subMat_aa);
            // seqMergedAa->reverse();
            // seqMergedSs->reverse();
            
            if (false && targetIsProfile && queryIsProfile) {
                SubMSA& q = msa[querySubMSA];
                SubMSA& t = msa[targetSubMSA];
                std::cout << " Query: ";
                for (float f : q.lddt) {
                    std::cout << std::fixed << std::setprecision(3) << f << ",";                    
                }
                std::cout << '\n';
                std::cout << "Target: ";
                for (float f : t.lddt) {
                    std::cout << std::fixed << std::setprecision(3) << f << ",";                    
                }
                std::cout << '\n';
            }

            // 1. sw, update relevant copied cigars --> MSA
            // 2. lddt on MSA --> per col count
            // 3. iterate cigar, map msa per col lddt -> (i, j)
            float **lddtScoreMap = new float *[seqMergedAa->L];
            for (int32_t z = 0; z < seqMergedAa->L; z++) {
                lddtScoreMap[z] = new float [seqTargetAa->L];
                memset(lddtScoreMap[z], 0, sizeof(float) * seqTargetAa->L);
                // std::fill(lddtScoreMap[z], lddtScoreMap[z] + seqTargetAa->L, 0.0f);
            }

            // Init n*m sum matrix, count matrix
            // For member in profile A
            //     For member in profile B
            //         For residue i in member of A
            //             For residue j in member of B
            //                 LDDT(i, j)
            //                 Map & add to sum matrix cell
            //                 Map & add to count matrix cell
            std::vector<std::vector<float>> lddtSums(seqMergedAa->L, std::vector<float>(seqTargetAa->L));
            std::vector<std::vector<size_t>> lddtCounts(seqMergedAa->L, std::vector<size_t>(seqTargetAa->L));
            for (size_t qMember : qMembers) {
                for (size_t tMember : tMembers) {
                    size_t qSeqId = 0;
                    size_t qResId = 0;
                    for (Instruction& qIns : msa.cigars_aa[qMember]) {
                        if (!qIns.isSeq()) {
                            qSeqId += qIns.length(); 
                            continue;
                        }
                        size_t qMSAId = map1Rev[qSeqId];
                        if (qMSAId == SIZE_T_MAX) {
                            qSeqId++;
                            qResId++;
                            continue;
                        }
                        size_t tSeqId = 0;
                        size_t tResId = 0;
                        for (Instruction& tIns : msa.cigars_aa[tMember]) {
                            if (!tIns.isSeq()) {
                                tSeqId += tIns.length(); 
                                continue;
                            }
                            
                            size_t tMSAId = map2Rev[tSeqId];
                            if (tMSAId == SIZE_T_MAX) {
                                tSeqId++;
                                tResId++;
                                continue;
                            }

                            size_t qOffset = proteinOffsets[qMember];
                            size_t tOffset = proteinOffsets[tMember];

                            size_t qIdx = qOffset + qResId * neighbours;
                            size_t tIdx = tOffset + tResId * neighbours;
                            // auto& qDists = neighbourData[qIdx];
                            // auto& tDists = neighbourData[tIdx];
                            float sum = 0.0f;
                            float norm = 0.0f;
                            for (size_t n = 0; n < neighbours; ++n) {
                                Neighbour& qDist = neighbourData[qIdx + n];
                                Neighbour& tDist = neighbourData[tIdx + n];
                                if (qDist.empty() || tDist.empty()) break;
                                sum += score_continuous(
                                    qDist.distance,
                                    tDist.distance,
                                    (static_cast<float>(qDist.j) - static_cast<float>(qDist.k)),
                                    (static_cast<float>(tDist.j) - static_cast<float>(tDist.k)),
                                    nb_sigma_r,
                                    nb_sigma_i,
                                    nb_alpha, nb_beta
                                );
                                norm += 2.0f;
                            }
                            float score = std::abs(sum / norm);
                            lddtSums[qMSAId][tMSAId] += score;
                            lddtCounts[qMSAId][tMSAId]++;
                            tSeqId++;
                            tResId++;
                        }
                        qSeqId++;
                        qResId++;
                    }
                }
            }
            std::vector<float> rowMax(seqMergedAa->L);
            std::vector<float> colMax(seqTargetAa->L);
            for (int y = 0; y < seqMergedAa->L; ++y) {
                for (int z = 0; z < seqTargetAa->L; ++z) {
                    lddtSums[y][z] /= static_cast<float>(lddtCounts[y][z]);
                    colMax[z] = std::max(colMax[z], lddtSums[y][z]);
                    rowMax[y] = std::max(rowMax[y], lddtSums[y][z]);
                }
            }
            for (int y = 0; y < seqMergedAa->L; ++y) {
                for (int z = 0; z < seqTargetAa->L; ++z) {
                    lddtSums[y][z] = (lddtSums[y][z] * lddtSums[y][z]) / (rowMax[y] * colMax[z]);
                    lddtSums[y][z] = (lddtSums[y][z] < nb_low_cut) ? 0.0f : lddtSums[y][z] * nb_multiplier;
                }
            }
            for (int y = 0; y < seqMergedAa->L; ++y) {
                for (int z = 0; z < seqTargetAa->L; ++z) {
                    lddtScoreMap[y][z] = lddtSums[y][z];
                }
            }
            
            Matcher::result_t res = pairwiseAlignment(
                structureSmithWaterman,
                seqMergedAa->L,
                seqMergedAa,
                seqMergedSs,
                seqTargetAa,
                seqTargetSs,
                par.gapOpen.values.aminoacid(),
                par.gapExtend.values.aminoacid(),
                &subMat_aa,
                &subMat_3di,
                par.compBiasCorrection,
                lddtScoreMap
            );

            for (int32_t z = 0; z < seqMergedAa->L; z++) {
                delete[] lddtScoreMap[z];
            }
            delete[] lddtScoreMap;
 

            std::vector<Instruction> qBt;
            std::vector<Instruction> tBt;
            getMergeInstructions(res, map1, map2, qBt, tBt);
            
            // NOTE this seems to degrade performance
            // If neither are profiles, do TM-align as well and take the best alignment
            if (!queryIsProfile && !targetIsProfile && caExist) {
                Matcher::result_t tmRes = pairwiseTMAlign(mergedId, targetId, seqDbrAA, seqDbrCA);
                double lddtTM = calculate_lddt_pair(msa.dbKeys[mergedId], msa.dbKeys[targetId], tmRes, seqDbrCA, thread_idx);
                double lddt3Di = calculate_lddt_pair(msa.dbKeys[mergedId], msa.dbKeys[targetId], res, seqDbrCA, thread_idx);
                if (lddtTM > lddt3Di) {
                    qBt.clear();
                    tBt.clear();
                    getMergeInstructions(tmRes, map1, map2, qBt, tBt);
                    std::swap(res, tmRes);
                }
            }

            updateCIGARs(res, map1, map2, msa.cigars_aa, msa.cigars_ss, qMembers, tMembers, qBt, tBt);

            SubMSA *newSubMSA;
            if (queryIsProfile) {
                size_t idx = msa.mergeInto(mergedId, targetId);
                newSubMSA = &msa[idx];
            } else {
                subMSAs.emplace_back();
                newSubMSA = &subMSAs.back();
                newSubMSA->id = mergedId;
                newSubMSA->concat(qMembers);
                newSubMSA->concat(tMembers);
            }
            // Don't need to make profiles on final alignment
            if (!(i == merges.size() - 1 && j == merges[i] - 1)) {
                // newSubMSA->mask = computeProfileMask(
                //     newSubMSA->members,
                //     msa.cigars_aa,
                //     subMat_aa,
                //     par.matchRatio
                // );
                newSubMSA->mask = computeProfileMask(
                    newSubMSA->members,
                    msa.cigars_aa,
                    msa.cigars_ss,
                    subMat_aa,
                    subMat_3di,
                    par.matchRatio
                );
                // newSubMSA->mask = std::string(cigarLength(msa.cigars_aa[newSubMSA->members[0]], true), '0');
                newSubMSA->profile_aa = msa2profile(
                    newSubMSA->members,
                    msa.cigars_aa,
                    newSubMSA->mask,
                    calculator_aa,
                    filter_aa,
                    subMat_aa,
                    par.filterMsa,
                    par.compBiasCorrection,
                    par.qid,
                    par.filterMaxSeqId,
                    par.Ndiff,
                    par.covMSAThr,
                    par.qsc,
                    par.filterMinEnable,
                    par.wg,
                    weights
                );
                newSubMSA->profile_ss = msa2profile(
                    newSubMSA->members,
                    msa.cigars_ss,
                    newSubMSA->mask,
                    calculator_3di,
                    filter_3di,
                    subMat_3di,
                    par.filterMsa,
                    par.compBiasCorrection,
                    par.qid,
                    par.filterMaxSeqId,
                    par.Ndiff,
                    par.covMSAThr,
                    par.qsc,
                    par.filterMinEnable,
                    par.wg,
                    weights
                );
            }

            // progress.updateProgress();
        }

#pragma omp critical
        {
            globalSubMSAs.insert(globalSubMSAs.end(), subMSAs.begin(), subMSAs.end());
            globalToRemove.insert(globalToRemove.end(), toRemove.begin(), toRemove.end());
            subMSAs.clear();
            toRemove.clear();
        }
#pragma omp barrier
#pragma omp master
        {
            msa.update(globalSubMSAs, globalToRemove);
            globalSubMSAs.clear();
            globalToRemove.clear();
            index += merges[i];
        }
#pragma omp barrier
    }

#pragma omp master
{
    if (par.refineIters > 0) {
        refineMany(
            tinySubMatAA, tinySubMat3Di, seqDbrCA, msa.cigars_aa, msa.cigars_ss, calculator_aa,
            filter_aa, subMat_aa, calculator_3di, filter_3di, subMat_3di, structureSmithWaterman,
            par.refineIters, par.compBiasCorrection, par.wg, par.filterMaxSeqId, par.qsc,
            par.Ndiff, par.covMSAThr, par.filterMinEnable, par.filterMsa, par.gapExtend.values.aminoacid(),
            par.gapOpen.values.aminoacid(), par.maxSeqLen, par.qid, par.pairThreshold, msa.dbKeys,
            par.refinementSeed, par.onlyScoringCols
        );
    }
}

}
    // Write final MSA to file with correct headers
    DBWriter resultWriterAa(
        (par.filenames[par.filenames.size()-1] + "_aa.fa").c_str(),
        (par.filenames[par.filenames.size()-1] + "_aa.index").c_str(),
        static_cast<unsigned int>(par.threads), par.compressed, Parameters::DBTYPE_OMIT_FILE
    );
    DBWriter resultWriter3Di(
        (par.filenames[par.filenames.size()-1] + "_3di.fa").c_str(),
        (par.filenames[par.filenames.size()-1] + "_3di.index").c_str(),
        static_cast<unsigned int>(par.threads), par.compressed, Parameters::DBTYPE_OMIT_FILE
    );
    resultWriterAa.open();
    resultWriterAa.writeStart(0);
    resultWriter3Di.open();
    resultWriter3Di.writeStart(0);
    std::string buffer;
    buffer.reserve(10 * 1024);


    assert(msa.size() == 1);
    SubMSA &finalMSA = msa[0];

    for (size_t member : finalMSA.members) {
        unsigned int key = seqDbrAA.getDbKey(member);
        size_t headerId = qdbrH.sequenceReader->getId(key);
        std::string header = Util::parseFastaHeader(qdbrH.sequenceReader->getData(headerId, 0));

        buffer.append(1, '>');
        buffer.append(header);
        buffer.append(1, '\n');
        buffer.append(expand(msa.cigars_aa[member]));
        buffer.append(1, '\n');
        resultWriterAa.writeAdd(buffer.c_str(), buffer.size(), 0);
        buffer.clear();
        
        buffer.append(1, '>');
        buffer.append(header);
        buffer.append(1, '\n');
        buffer.append(expand(msa.cigars_ss[member]));
        buffer.append(1, '\n');
        resultWriter3Di.writeAdd(buffer.c_str(), buffer.size(), 0);
        buffer.clear();
    }
    resultWriterAa.writeEnd(0, 0, false, 0);
    resultWriterAa.close(true);
    resultWriter3Di.writeEnd(0, 0, false, 0);
    resultWriter3Di.close(true);
    FileUtil::remove((par.filenames[par.filenames.size()-1] + "_aa.index").c_str());
    FileUtil::remove((par.filenames[par.filenames.size()-1] + "_3di.index").c_str());

    // Cleanup
    free(tinySubMatAA);
    free(tinySubMat3Di);
    seqDbrAA.close();
    seqDbr3Di.close();
    if (caExist) {
        seqDbrCA->close();
    }
    delete seqDbrCA;
  
    return EXIT_SUCCESS;
}

int structuremsa(int argc, const char **argv, const Command& command) {
    return structuremsa(argc, argv, command, false);
}

int structuremsacluster(int argc, const char **argv, const Command& command) {
    return structuremsa(argc, argv, command, true);
}
