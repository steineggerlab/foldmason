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
#include <deque>
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

extern int alignStructure(
    StructureSmithWaterman &structureSmithWaterman,
    StructureSmithWaterman &reverseStructureSmithWaterman,
    Sequence &tSeqAA, Sequence &tSeq3Di,
    unsigned int querySeqLen, unsigned int targetSeqLen,
    EvalueNeuralNet &evaluer, std::pair<double, double> muLambda,
    Matcher::result_t &res, std::string &backtrace,
    Parameters &par
);

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
    float** lddtScoreMap,
    std::vector<std::tuple<size_t, size_t, size_t, size_t> > anchors
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

void updateAllScoresRealign(
    MSAContainer& msa,
    Sequence& seqMergedAaAa,
    Sequence& seqMergedAaPr,
    Sequence& seqMergedSsAa,
    Sequence& seqMergedSsPr,
    Sequence& seqTargetAaAa,
    Sequence& seqTargetAaPr,
    Sequence& seqTargetSsAa,
    Sequence& seqTargetSsPr,
    std::vector<AlnSimple>& hits,
    DBReader<unsigned int> &seqDbrAA,
    DBReader<unsigned int> &seqDbr3Di,
    int8_t * tinySubMatAA,
    int8_t * tinySubMat3Di,
    SubstitutionMatrix * subMat_aa,
    SubstitutionMatrix * subMat_3di,
    int maxSeqLen,
    int alphabetSize,
    int compBiasCorrection,
    int compBiasCorrectionScale
) {
    // for qsubmsa in msa
    //     init aa/3di sequences for qsubmsa 
    //     init ssw on qsubmsa
    //         for tsubmsa in msa != qsubmsa
    //             align qsubmsa tsubmsa
    //             save hit

    unsigned int thread_idx = 0;
    
    Sequence* seqMergedAa;
    Sequence* seqMergedSs;
    Sequence* seqTargetAa;
    Sequence* seqTargetSs;
    
    StructureSmithWaterman structureSmithWaterman(
        maxSeqLen,
        alphabetSize,
        compBiasCorrection,
        compBiasCorrectionScale,
        subMat_aa,
        subMat_3di
    );
    
    const size_t n_submsas = msa.size();
    const size_t n_sequences = msa.cigars_aa.size();

    int go = 10;
    int ge = 1;
    for (size_t i = 0; i < n_submsas; ++i) {
        SubMSA& q = msa[i];
        size_t mergedId = q.id;
        seqMergedAaPr.mapSequence(i, i, q.profile_aa.c_str(), q.profile_aa.length() / Sequence::PROFILE_READIN_SIZE);
        seqMergedSsPr.mapSequence(i, i, q.profile_ss.c_str(), q.profile_ss.length() / Sequence::PROFILE_READIN_SIZE);
        seqMergedAa = &seqMergedAaPr;
        seqMergedSs = &seqMergedSsPr;
        structureSmithWaterman.ssw_init(
            seqMergedAa,
            seqMergedSs,
            tinySubMatAA,
            tinySubMat3Di,
            subMat_aa
        );
        // std::cout << "Aligning profile " << q.id << '\n';
        
        // Profile-profile alignments
        for (size_t j = i + 1; j < n_submsas; ++j) {
            // if (msa.isProfile(j) || msa.dbIdToSubMSAVec[j] == i) continue;
            SubMSA& t = msa[j];
            size_t targetId = t.id;
            seqTargetAaPr.mapSequence(j, j, t.profile_aa.c_str(), t.profile_aa.length() / Sequence::PROFILE_READIN_SIZE);
            seqTargetSsPr.mapSequence(j, j, t.profile_ss.c_str(), t.profile_ss.length() / Sequence::PROFILE_READIN_SIZE);
            seqTargetAa = &seqTargetAaPr;
            seqTargetSs = &seqTargetSsPr;
            StructureSmithWaterman::s_align saln = structureSmithWaterman.alignScoreEndPos<StructureSmithWaterman::PROFILE>(
                    seqTargetAa->numConsensusSequence,
                    seqTargetSs->numConsensusSequence,
                    seqTargetAa->L,
                    go,
                    ge,
                    seqMergedAa->L/2
            );
            AlnSimple aln;
            aln.queryId = mergedId;
            aln.targetId = targetId;
            aln.score = saln.score1;
            // std::cout << "  " << "profile" << '\t' << aln.queryId << '\t' << aln.targetId << '\t' << aln.score << '\n';
            hits.push_back(aln);
        }
        
        // Profile-sequence alignments
        for (size_t j = 0; j < n_sequences; ++j) {
            if (msa.isProfile(j)) continue;
            size_t targetId;
            unsigned int dbKey = msa.dbKeys[j];
            size_t dbId = seqDbrAA.getId(dbKey);
            size_t length = seqDbrAA.getSeqLen(dbId);
            seqTargetAaAa.mapSequence(dbId, dbId, seqDbrAA.getData(dbId, thread_idx), length);
            dbId = seqDbr3Di.getId(dbKey);
            seqTargetSsAa.mapSequence(dbId, dbId, seqDbr3Di.getData(dbId, thread_idx), length);
            seqTargetAa = &seqTargetAaAa;
            seqTargetSs = &seqTargetSsAa;
            targetId = dbId;
            AlnSimple aln;
            aln.queryId = mergedId;
            aln.targetId = targetId;
            StructureSmithWaterman::s_align saln = structureSmithWaterman.alignScoreEndPos<StructureSmithWaterman::PROFILE>(
                    seqTargetAa->numSequence,
                    seqTargetSs->numSequence,
                    seqTargetAa->L,
                    go,
                    ge,
                    seqMergedAa->L/2
            );
            aln.score = saln.score1;
            // std::cout << "  " << "sequence" << '\t' << aln.queryId << '\t' << aln.targetId << '\t' << aln.score << '\n';
            hits.push_back(aln);
        }
    }
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
    if (const char* s = std::getenv("PCA")) {
        try { go = std::stoi(s); }
        catch(...) { std::cerr << "Warning: invalid PCA='" << s << "', using default\n"; }
    }
    if (const char* s = std::getenv("PCB")) {
        try { ge = std::stoi(s); }
        catch(...) { std::cerr << "Warning: invalid PCB='" << s << "', using default\n"; }
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
            aln.score = saln.score1;
            // float score = (1.0f - (2 * saln.score1) / static_cast<float>(selfScores[i] + selfScores[j])) * 1000.0f; 
            // aln.score = static_cast<short>(score);
            // aln.score = structureSmithWaterman.ungapped_alignment(seqTargetAa.numSequence, seqTargetSs.numSequence, seqTargetAa.L);

            threadHits.push_back(aln);     
            progress.updateProgress();
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

void mst2(std::vector<AlnSimple>& hits, int n) {
    size_t k = static_cast<size_t>(std::sqrt(static_cast<float>(n)));
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

void mst(const std::vector<AlnSimple>& hits, std::vector<AlnSimple>& tree, int n) {
    UnionFind uf(n);
    tree.clear();
    tree.reserve(n - 1);
    // size_t mstEdges = 0;
    for (size_t i = 0; i < hits.size(); i++) {
        unsigned int root1 = uf.find(hits[i].queryId);
        unsigned int root2 = uf.find(hits[i].targetId);
        if (root1 != root2) {
            tree.push_back(hits[i]);
            // std::swap(hits[mstEdges], hits[i]);
            uf.unionSets(root1, root2);
            // ++mstEdges;
        }
        if (tree.size() == static_cast<size_t>(n - 1)) {
            break;
        }
    }
    // hits.resize(mstEdges);
}

std::vector<std::vector<int>> buildAdjList(const std::vector<AlnSimple>& edges, int n) {
    std::vector<std::vector<int>> adj(n);
    for (const auto& e : edges) {
        adj[e.queryId].push_back(e.targetId);
        adj[e.targetId].push_back(e.queryId);
    }
    return adj;
}

std::vector<int> findLongestPath(const std::vector<std::vector<int>>& adj, int start) {
    std::vector<int> parent(adj.size(), -1);
    std::queue<int> q;
    q.push(start);

    int last = start;
    while (!q.empty()) {
        int u = q.front(); q.pop();
        last = u;
        for (int v : adj[u]) {
            if (parent[v] == -1 && v != start) {
                parent[v] = u;
                q.push(v);
            }
        }
    }

    std::vector<int> path;
    while (last != -1) {
        path.push_back(last);
        last = parent[last];
    }
    std::reverse(path.begin(), path.end());
    return path;
}

int findMidpointRoot(const std::vector<AlnSimple>& edges, int n) {
    auto adj = buildAdjList(edges, n);
    auto path1 = findLongestPath(adj, 0);
    auto path2 = findLongestPath(adj, path1.back());
    return path2[path2.size() / 2];  // midpoint
}

void dfsBuildLinkage(
    int node,
    int parent,
    const std::vector<std::vector<int>>& adj,
    std::vector<AlnSimple>& merges,
    std::vector<int>& nodeToCluster,
    int& nextClusterId
) {
    std::vector<int> childClusters;

    for (int neighbor : adj[node]) {
        if (neighbor == parent) continue;

        dfsBuildLinkage(neighbor, node, adj, merges, nodeToCluster, nextClusterId);
        childClusters.push_back(nodeToCluster[neighbor]);
    }

    if (childClusters.empty()) {
        nodeToCluster[node] = node;  // Leaf node
        AlnSimple newhit;
        newhit.queryId = node;
        newhit.targetId = parent;
        merges.push_back(newhit);
        return;
    }

    // Binarize if more than 2 children
    while (childClusters.size() > 1) {
        int a = childClusters.back(); childClusters.pop_back();
        int b = childClusters.back(); childClusters.pop_back();

        AlnSimple newhit;
        newhit.queryId = a;
        newhit.targetId = b;
        merges.push_back(newhit);
        childClusters.push_back(a);
    }

    nodeToCluster[node] = childClusters.front();
}


// FIXME: potentially broken
void neighbour_joining(std::vector<AlnSimple>& hits, std::vector<AlnSimple>& out, int n)
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
    // std::vector<AlnSimple> out;
    out.clear();
    out.reserve(n - 1);
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

// FIXME: potentially broken
void upgma(const std::vector<AlnSimple>& hits, std::vector<AlnSimple>& out, int n) {
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
    out.clear();
    out.reserve(n - 1);
    // std::vector<AlnSimple> out; out.reserve(n - 1);
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
    // out.swap(out);
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

std::vector<double> treeWeights(int n, const std::vector<AlnEdge>& edges, const std::vector<int>& size) {
    int m     = edges.size()/2;
    int total = n + m;
    std::vector<std::vector<std::pair<int,double>>> tree(total);
    for (auto& e : edges) {
      tree[e.parentId].push_back({e.childId, e.length});
    }
    std::vector<double> w(total, 0.0);
    std::function<void(int,double)> dfs = [&](int v, double acc) {
      if (v < n) {
        w[v] = acc;
        return;
      }
      for (auto& [c, len] : tree[v]) {
        double contrib = len / size[c];
        dfs(c, acc + contrib);
      }
    };

    int root = total - 1;
    dfs(root, 0.0);

    // normalize to mean = 1
    double mean = 0;
    for (int i = 0; i < n; ++i) mean += w[i];
    mean /= n;
    for (int i = 0; i < n; ++i) w[i] /= mean;
    return w;
}


// TODO: if we recompute trees every merge round, this should only return the first merge count
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
    // TODO: this is likely unimportant
    for (size_t i = 0, offset = 0; i < merges.size(); ++i) {
        std::sort(hits.begin() + offset,
                  hits.begin() + offset + merges[i],
                  [](const AlnSimple& a, const AlnSimple& b) {
                      return std::tie(a.queryId, a.targetId) < std::tie(b.queryId, b.targetId);
                  });
        offset += merges[i];
    }
}

// Removes edges containing previously aligned sequences.
// Assume tree from mst + balanceTree, mergeCount == merges[0]
void removeStaleEdges(const std::vector<AlnSimple>& tree, const int mergeCount, std::vector<AlnSimple>& hits) {
    std::set<size_t> seen;
    for (size_t i = 0; i < mergeCount; ++i) {
        seen.insert(tree[i].queryId);
        seen.insert(tree[i].targetId);
    }
    hits.erase(
        std::remove_if(hits.begin(), hits.end(), [&](const AlnSimple& aln){
            return seen.count(aln.queryId) || seen.count(aln.targetId);
        }),
        hits.end()
    );
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

std::string joinStr(const std::vector<std::string>& vec, const std::string& sep) {
    std::ostringstream oss;
    for (size_t i = 0; i < vec.size(); ++i) {
        if (i > 0) oss << sep;
        oss << vec[i];
    }
    return oss.str();

}


std::string makeNewickFromParentTree(
    const std::vector<int>& parent, // This parent array comes from the BFS on the rooted tree
    int root,
    int sequenceCnt, // Original number of sequences (0 to sequenceCnt-1 are leaves)
    IndexReader* headers
) {
    int totalNodes = parent.size(); // Should be sequenceCnt + 1 (including virtual root)
    std::vector<std::vector<int>> children(totalNodes);
    for (int i = 0; i < totalNodes; ++i) {
        if (parent[i] != -1) { // If it has a parent (i.e., not the root of this tree)
            children[parent[i]].push_back(i);
        }
    }
    std::function<std::string(int)> dfsNewick = [&](int node) -> std::string {
        if (node < sequenceCnt) {
            return Util::parseFastaHeader(headers->sequenceReader->getData(node, 0));
        }
        std::vector<std::string> subtrees;
        for (int c : children[node]) {
            std::string childNewick = dfsNewick(c);
            if (!childNewick.empty()) { // Only add if the child's subtree is not empty
                subtrees.push_back(childNewick);
            }
        }
        if (subtrees.empty()) {
            return ""; // For internal nodes with no children, or the virtual root if it has no children (error case)
        }
        return "(" + joinStr(subtrees, ",") + ")";
    };
    return dfsNewick(root) + ";";
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


void mergeAndExtendAnchors(
    std::vector<std::tuple<size_t, size_t, size_t, size_t>>& anchors,
    size_t qlen,
    size_t tlen,
    size_t threshold = 5
) {
    if (anchors.empty()) return;
    std::vector<std::tuple<size_t, size_t, size_t, size_t>> merged;
    auto [qs, ts, qe, te] = anchors[0];
    for (size_t i = 1; i < anchors.size(); ++i) {
        auto [next_qs, next_ts, next_qe, next_te] = anchors[i];
        if ((next_qs <= qe + threshold) && (next_ts <= te + threshold)) {
            qe = std::max(qe, next_qe);
            te = std::max(te, next_te);
        } else {
            merged.emplace_back(qs, ts, qe, te);
            std::tie(qs, ts, qe, te) = anchors[i];
        }
    }
    merged.emplace_back(qs, ts, qe, te);
    for (auto& a : merged) {
        auto& [qs, ts, qe, te] = a;
        if (qs <= threshold && ts <= threshold) {
            qs = 0;
            ts = 0;
        }
        if (qe + threshold >= qlen && te + threshold >= tlen) {
            qe = qlen - 1;
            te = tlen - 1;
        }
    }
    anchors = std::move(merged);
}


std::vector<std::vector<std::pair<int, float>>> buildAdjacencyList(const std::vector<AlnSimple>& edges, int numNodes) {
    std::vector<std::vector<std::pair<int, float>>> adj(numNodes);
    for (const AlnSimple& edge : edges) {
        adj[edge.queryId].emplace_back(edge.targetId, edge.score);
        adj[edge.targetId].emplace_back(edge.queryId, edge.score);
    }
    return adj;
}

void convertToDistance(std::vector<AlnSimple>& edges) {
    unsigned short maxScore = 0;
    for (AlnSimple& edge : edges) {
        maxScore = std::max(edge.score, maxScore);
    }
    for (AlnSimple& edge : edges) {
        edge.score = maxScore - edge.score;
    }
}

void dfs(
    int node,
    int parent,
    float currDist,
    const std::vector<std::vector<std::pair<int, float>>>& adj,
    std::vector<std::pair<int, float>>& info,
    int& farthest,
    float& maxDist
) {
    info[node].first = parent;
    info[node].second = currDist;
    if (currDist > maxDist) {
        maxDist = currDist;
        farthest = node;
    }
    for (const std::pair<int, float>& neighbour : adj[node]) {
        if (neighbour.first != parent) {
            dfs(neighbour.first, node, currDist + neighbour.second, adj, info, farthest, maxDist);
        }
    }
}

void dfsRootedTree(
    int node,
    int parent,
    std::vector<std::vector<std::pair<int, float>>>& adj,
    std::vector<AlnSimple>& rootedEdges
) {
    std::vector<std::pair<int, float>> children;
    for (const auto& [child, weight] : adj.at(node)) {
        if (child == parent) continue;
        children.emplace_back(child, weight);
    }
    std::sort(children.begin(), children.end(), [](auto& a, auto& b) {
        return a.second > b.second;
    });
    for (const auto& [child, weight] : children) {
        dfsRootedTree(child, node, adj, rootedEdges);
        AlnSimple aln;
        aln.queryId = node;
        aln.targetId = child;
        aln.score = weight;
        rootedEdges.push_back(aln);  // directional edge
    }
}

int pot(
    int node,
    int parent,
    std::vector<std::vector<std::pair<int, float>>>& adj,
    std::set<int>& visited,
    std::vector<AlnSimple>& merges,
    int& mergeCounter,
    std::unordered_map<int, std::pair<int, int>>& internal
) {
    visited.insert(node);
    std::vector<int> children;
    for (size_t i = 0; i < adj[node].size(); ++i) {
        if (adj[node][i].first != parent && !visited.count(adj[node][i].first)) {
            int childrep = pot(adj[node][i].first, node, adj, visited, merges, mergeCounter, internal);
            children.push_back(childrep);
        }
    }
    if (children.empty()) return node;
    if (children.size() == 1) return children[0];
    int cur = children[0];
    for (size_t i = 1; i < children.size(); ++i) {
        int nex = children[i];
        AlnSimple aln;
        aln.queryId = cur;
        aln.targetId = nex;
        merges.push_back(aln);
        int internalid = mergeCounter++;
        internal.emplace(internalid, std::make_pair(cur, nex));
        // cur = internalid;
    }
    return cur;
}

std::vector<AlnSimple> getEdges(int root, std::vector<std::vector<std::pair<int, float>>>& adj) {
    std::vector<AlnSimple> merges;
    std::set<int> visited;
    std::unordered_map<int, std::pair<int, int>> internal;
    int mergeCounter = root + 1;
    int finalrep = pot(root, -1, adj, visited, merges, mergeCounter, internal);
    return merges;
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
    MSAContainer msa(sequenceCnt);
    for (size_t i = 0; i < sequenceCnt; i++) {
        unsigned int seqKeyAA = seqDbrAA.getDbKey(i);
        unsigned int seqKey3Di = seqDbr3Di.getDbKey(i);
        size_t seqIdAA = seqDbrAA.getId(seqKeyAA);
        size_t seqId3Di = seqDbr3Di.getId(seqKey3Di);
        size_t length = seqDbrAA.getSeqLen(seqIdAA);
        msa.addStructure(seqIdAA, seqKeyAA, length, seqDbrAA.getData(seqIdAA, 0), seqDbr3Di.getData(seqId3Di, 0));
        maxSeqLength = std::max(maxSeqLength, static_cast<int>(length));
    }
   
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
    std::vector<AlnSimple> treeEdges;
    std::vector<size_t> merges;
    std::vector<double> weights(sequenceCnt, 1.0f);

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
        // neighbour_joining(hits, treeEdges, sequenceCnt);
        // upgma(hits, treeEdges, sequenceCnt);
        mst(hits, treeEdges, sequenceCnt);
        // convertToDistance(hits);
        // std::vector<std::vector<std::pair<int, float>>> adj = buildAdjacencyList(hits, sequenceCnt);
        // // for (int i = 0; i < adj.size(); ++i) {
        // //     for (auto& [a, b] : adj[i]) {
        // //         std::cout << i << '\t' << a << '\t' << b << '\n';
        // //     }
        // // }

        // std::vector<std::pair<int, float>> infoA(sequenceCnt);
        // int A = 0;
        // float dummy = 0.0f;
        // dfs(0, -1, 0.0f, adj, infoA, A, dummy);

        // std::vector<std::pair<int, float>> infoB(sequenceCnt);
        // int B = 0;
        // float longestDist = 0.0f;
        // dfs(A, -1, 0.0f, adj, infoB, B, longestDist);
        
        // std::vector<int> path;
        // for (int cur = B; cur != -1; cur = infoB[cur].first) {
        //     path.push_back(cur);
        // }
        // std::reverse(path.begin(), path.end());
        
        // float total = 0.0f;
        // std::vector<float> edgeWeights;

        // for (size_t i = 1; i < path.size(); ++i) {
        //     int u = path[i - 1];
        //     int v = path[i];
        //     // Find weight in adj[u]
        //     float w = -1;
        //     for (const auto& neighbor : adj[u]) {
        //         if (neighbor.first == v) {
        //             w = neighbor.second;
        //             break;
        //         }
        //     }
        //     if (w < 0) {
        //         std::cerr << "❌ Edge weight missing between " << u << " and " << v << "\n";
        //         exit(1);
        //     }
        //     edgeWeights.push_back(w);
        //     total += w;
        // } 
        // float half = total / 2.0f;
        // float acc = 0.0f;
        // int midU = -1;
        // int midV = -1;

        // for (size_t i = 0; i < edgeWeights.size(); ++i) {
        //     acc += edgeWeights[i];
        //     if (acc >= half) {
        //         midU = path[i];
        //         midV = path[i + 1];
        //         break;
        //     }
        // }

        // int virtualRoot = sequenceCnt;
        // int totalNodes = sequenceCnt + 1;
        
        
        // std::vector<std::vector<std::pair<int, float>>> newAdj(totalNodes);
        // for (size_t i = 0; i < adj.size(); ++i) {
        //     for (size_t j = 0; j < adj[i].size(); ++j) {
        //         if ((i == midU && adj[i][j].first == midV) ||
        //             (i == midV && adj[i][j].first == midU)) {
        //                 continue;
        //         }
        //         newAdj[i].emplace_back(adj[i][j].first, adj[i][j].second);
        //     }
        // }
        // newAdj.emplace_back();
        // newAdj[virtualRoot].emplace_back(midU, 1.0f);
        // newAdj[virtualRoot].emplace_back(midV, 1.0f);
        // newAdj[midU].emplace_back(virtualRoot, 1.0f);
        // newAdj[midV].emplace_back(virtualRoot, 1.0f);

        // std::vector<std::vector<std::pair<int, float>>> rootedAdj(totalNodes);
        // std::set<int> visited;
        // visited.insert(virtualRoot);
        // std::deque<int> q;
        // q.push_front(midU);
        // q.push_back(midV);
        // while (q.size() > 0) {
        //     int cur = q.front();
        //     q.pop_front();
        //     if (visited.count(cur)) {
        //         continue;
        //     }
        //     visited.insert(cur);
        //     for (auto nei : newAdj[cur]) {
        //         if (!visited.count(nei.first)) {
        //             rootedAdj[cur].push_back(nei);
        //             q.push_back(nei.first);
        //         }
        //     }
        // }
        // rootedAdj[virtualRoot].emplace_back(midU, 1.0f);
        // rootedAdj[virtualRoot].emplace_back(midV, 1.0f);
 
        // std::vector<AlnSimple> blah = getEdges(virtualRoot, rootedAdj);
        // std::vector<AlnSimple> rootedEdges;
        // std::map<int, int> mapping;
        // for (size_t i = 0; i < totalNodes; ++i) {
        //     mapping[i] = i;
        // }
        // int mergeCounter = sequenceCnt;
        // visited.clear();

        // dfsRootedTree(midU, virtualRoot, rootedAdj, rootedEdges);
        // dfsRootedTree(midV, virtualRoot, rootedAdj, rootedEdges);


        // for (int i = 0; i < rootedAdj.size(); ++i) {
        //     for (auto& [a, b] : rootedAdj[i]) {
        //         AlnSimple aln;
        //         aln.queryId = i;
        //         aln.targetId = a;
        //         aln.score = b;
        //         rootedEdges.push_back(aln);
        //     }
        // }
        // AlnSimple rootaln;
        // rootaln.queryId = midU;
        // rootaln.targetId = midV;
        // rootedEdges.push_back(rootaln);
        // std::reverse(rootedEdges.begin(), rootedEdges.end());
        // std::swap(hits, rootedEdges);
       
        // std::vector<std::pair<int, float>>& vecA = adj[midU];
        // vecA.erase(std::remove_if(vecA.begin(), vecA.end(),
        //     [&](const std::pair<int, float>& p) { return p.first == midV; }), vecA.end());       

        // std::vector<std::pair<int, float>>& vecB = adj[midV];
        // vecB.erase(std::remove_if(vecB.begin(), vecB.end(),
        //     [&](const std::pair<int, float>& p) { return p.first == midU; }), vecB.end());       

        // adj.emplace_back();
        // adj[virtualRoot].emplace_back(midU, 1.0f);
        // adj[virtualRoot].emplace_back(midV, 1.0f);
        // adj[midU].emplace_back(virtualRoot, 1.0f);
        // adj[midV].emplace_back(virtualRoot, 1.0f);

        // int midpoint = path[path.size() / 2];
        
        

        // std::vector<AlnSimple> rootedEdges;
        // int mergeCounter = sequenceCnt;
        // std::set<int> visited;
        
        // int left = postorderBalanced(midU, midV, adj, rootedEdges, mergeCounter);
        // int right = postorderBalanced(midV, midU, adj, rootedEdges, mergeCounter);
        // AlnSimple finalEdge;
        // finalEdge.queryId = left;
        // finalEdge.targetId = right;
        // rootedEdges.push_back(finalEdge);
        // rootedEdges.erase(std::remove_if(rootedEdges.begin(), rootedEdges.end(),
        //     [&](const AlnSimple& aln){ return aln.queryId == virtualRoot || aln.targetId == virtualRoot; }),
        //     rootedEdges.end());

        
        // std::vector<AlnSimple> rootedEdges;
        // dfsRootedTree(midU, virtualRoot, adj, rootedEdges);
        // dfsRootedTree(midV, virtualRoot, adj, rootedEdges);
        // AlnSimple finalEdge;
        // finalEdge.queryId = midU;
        // finalEdge.targetId = midV;
        // rootedEdges.push_back(finalEdge);
        
        // for (int i = 0; i < rootedEdges.size(); ++i) {
        //     AlnSimple& aln = rootedEdges[i];
        //     std::cout << aln.queryId << '\t' << aln.targetId << '\n';
        // }
        
        // std::swap(hits, rootedEdges);


        // NewickParser::Node* nwtree = NewickParser::buildTree(hits);
        // std::pair<NewickParser::Node*, int> blah = NewickParser::findFarthest(nwtree);
        // std::pair<NewickParser::Node*, int> blah2 = NewickParser::findFarthest(blah.first);
        // std::vector<NewickParser::Node*> path = NewickParser::findPath(blah.first, blah2.first);
        // int pathLen = path.size();
        // NewickParser::Node* newRoot = new NewickParser::Node(999);
        // NewickParser::Node* prev = new NewickParser::Node();
        // if (pathLen % 2 == 0) {
        //     NewickParser::Node* mid1 = path[pathLen / 2 - 1];
        //     NewickParser::Node* mid2 = path[pathLen / 2];
        //     auto& ch1 = mid1->children;
        //     ch1.erase(std::remove(ch1.begin(), ch1.end(), mid2), ch1.end());
        //     NewickParser::orientTree(mid1, nullptr);
        //     auto& ch2 = mid2->children;
        //     ch2.erase(std::remove(ch2.begin(), ch2.end(), mid1), ch2.end());
        //     NewickParser::orientTree(mid2, nullptr);
        //     newRoot->children.push_back(mid1);
        //     newRoot->children.push_back(mid2);
        //     NewickParser::orientTree(newRoot, nullptr);
        // } else {
        //     newRoot = path[pathLen/2];
        //     NewickParser::orientTree(newRoot, nullptr);
        // }
        // std::set<size_t> seen;
        // NewickParser::enforceBinary(newRoot);
        // NewickParser::printTree(newRoot, "", false);
        
        // std::vector<AlnSimple> post;
        // NewickParser::postOrder2(newRoot, post);
        // std::swap(hits, post);

        
        // auto adjList = buildAdjList(hits, sequenceCnt);
        // int root = findMidpointRoot(hits, sequenceCnt);
        
        // std::vector<std::pair<int, int>> merges2;
        // std::vector<int> nodeToCluster(sequenceCnt);  // maps node id to current cluster id
        // int nextClusterId = sequenceCnt; // cluster ids start after leaf nodes

        // std::vector<AlnSimple> midhits;
        // dfsBuildLinkage(root, -1, adjList, midhits, nodeToCluster, nextClusterId);

        // assert(hits.size() == sequenceCnt - 1);  // should be n-1 edges

        Debug(Debug::INFO) << "Optimising merge order\n";
        // merges.assign(sequenceCnt - 1, 1);
        balanceTree(treeEdges, merges, sequenceCnt);
        removeStaleEdges(treeEdges, merges[0], hits);

        // std::vector<AlnEdge> edges = makeEdges(hits, sequenceCnt);
        // std::vector<int> sizes = subtreeSize(sequenceCnt, edges);
        // weights = treeWeights(sequenceCnt, edges, sizes);

        std::string nw = makeNewick(treeEdges, sequenceCnt, &qdbrH);
        // std::string nw2 = makeNewickFromParentTree(parent, virtualRoot, sequenceCnt, &qdbrH);
        std::cout << nw << '\n';
        // std::cout << nw2 << '\n';
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
    int mergeCount = sequenceCnt - 1;

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
    int submsacount = 0;

    // for (size_t i = 0; i < merges.size(); i++) {
    bool firstRound = true;
    while (mergeCount > 1) {
        if (!firstRound && merges.size() > 1) {
            updateAllScoresRealign(
                msa,
                seqMergedAaAa,
                seqMergedAaPr,
                seqMergedSsAa,
                seqMergedSsPr,
                seqTargetAaAa,
                seqTargetAaPr,
                seqTargetSsAa,
                seqTargetSsPr,
                hits,
                seqDbrAA, seqDbr3Di, tinySubMatAA, tinySubMat3Di,
                &subMat_aa,
                &subMat_3di,
                par.maxSeqLen, 
                subMat_3di.alphabetSize,
                par.compBiasCorrection,
                par.compBiasCorrectionScale
            );
            sortHitsByScore(hits);
            // upgma(hits, treeEdges, sequenceCnt);
            mst(hits, treeEdges, sequenceCnt);
            std::vector<size_t> merges_realign;
            balanceTree(treeEdges, merges_realign, sequenceCnt);
            removeStaleEdges(treeEdges, merges_realign[0], hits);
            std::swap(merges, merges_realign);
            mergeCount = 0;
            for (size_t cnt : merges) mergeCount += cnt;
        }
        firstRound = false;

        subMSAs.reserve(merges[0]);
        submsacount = 0;

#pragma omp for schedule(static, 1)
        for (size_t j = 0; j < merges[0]; j++) {

            size_t mergedId = treeEdges[index + j].queryId;
            size_t targetId = treeEdges[index + j].targetId;
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
            } else {
                size_t length = seqDbrAA.getSeqLen(mergedId);
                qMembers = { mergedId };
                seqMergedAaAa.mapSequence(mergedId, mergedId, seqDbrAA.getData(mergedId, thread_idx), length);
                seqMergedSsAa.mapSequence(mergedId, mergedId, seqDbr3Di.getData(mergedId, thread_idx), length);
                seqMergedAa = &seqMergedAaAa;
                seqMergedSs = &seqMergedSsAa;
                map1.resize(length);
                std::iota(map1.begin(), map1.end(), 0);
            }

            if (targetIsProfile) {
                SubMSA& t = msa[targetSubMSA];
                tMembers.assign(t.members.begin(), t.members.end());
                seqTargetAaPr.mapSequence(targetId, targetId, t.profile_aa.c_str(), t.profile_aa.length() / Sequence::PROFILE_READIN_SIZE);
                seqTargetSsPr.mapSequence(targetId, targetId, t.profile_ss.c_str(), t.profile_ss.length() / Sequence::PROFILE_READIN_SIZE);
                seqTargetAa = &seqTargetAaPr;
                seqTargetSs = &seqTargetSsPr;
                maskToMapping(t.mask, map2);
            } else {
                size_t length = seqDbrAA.getSeqLen(targetId);
                tMembers = { targetId };
                seqTargetAaAa.mapSequence(targetId, targetId, seqDbrAA.getData(targetId, thread_idx), length);
                seqTargetSsAa.mapSequence(targetId, targetId, seqDbr3Di.getData(targetId, thread_idx), length);
                seqTargetAa = &seqTargetAaAa;
                seqTargetSs = &seqTargetSsAa;
                map2.resize(length);
                std::iota(map2.begin(), map2.end(), 0);
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
                }
            } else if (targetIsProfile && !queryIsProfile) {
                std::swap(mergedId, targetId);
                std::swap(seqMergedAa, seqTargetAa);
                std::swap(seqMergedSs, seqTargetSs);
                std::swap(queryIsProfile, targetIsProfile);
                std::swap(querySubMSA, targetSubMSA);
                std::swap(qMembers, tMembers);
                std::swap(map1, map2);
            }
            
            // std::cout << "#Prog aligning " << mergedId << '\t' << targetId << '\n';

            // Since we will update the query subMSA, need to remove the target one 
            if (targetIsProfile) {
                toRemove.push_back(targetSubMSA);
            }

            structureSmithWaterman.ssw_init(seqMergedAa, seqMergedSs, tinySubMatAA, tinySubMat3Di, &subMat_aa);

            int go = 10; int ge = 1;
            if (const char* s = std::getenv("PCA")) {
                try { go = std::stoi(s); }
                catch(...) { std::cerr << "Warning: invalid PCA='" << s << "', using default\n"; }
            }
            if (const char* s = std::getenv("PCB")) {
                try { ge = std::stoi(s); }
                catch(...) { std::cerr << "Warning: invalid PCB='" << s << "', using default\n"; }
            }

            std::vector<std::vector<Instruction>> copyAa;
            std::vector<std::vector<Instruction>> copySs;
            copyInstructionVectors(msa.cigars_aa, copyAa);
            copyInstructionVectors(msa.cigars_ss, copySs);
            std::string sw_backtrace = "";
            StructureSmithWaterman::s_align align = structureSmithWaterman.alignScoreEndPos<StructureSmithWaterman::PROFILE>(
                targetIsProfile ? seqTargetAa->numConsensusSequence : seqTargetAa->numSequence,
                targetIsProfile ? seqTargetSs->numConsensusSequence : seqTargetSs->numSequence,
                seqTargetAa->L,
                go,
                ge,
                seqMergedAa->L / 2
            );
            align = structureSmithWaterman.alignStartPosBacktrace<StructureSmithWaterman::PROFILE>(
                targetIsProfile ? seqTargetAa->numConsensusSequence : seqTargetAa->numSequence,
                targetIsProfile ? seqTargetSs->numConsensusSequence : seqTargetSs->numSequence,
                seqTargetAa->L,
                go, ge,
                3,
                sw_backtrace,
                align,
                0,
                0.0,
                seqMergedAa->L
            );
            unsigned int alnLength = Matcher::computeAlnLength(align.qStartPos1, align.qEndPos1, align.dbStartPos1, align.dbEndPos1);
            alnLength = sw_backtrace.size();
            float seqId = Util::computeSeqId(Parameters::SEQ_ID_ALN_LEN, align.identicalAACnt, seqMergedAa->L, seqTargetAa->L, alnLength); 
            // std::cout << "s_align: " << align.qStartPos1 << '-' << align.qEndPos1 << '\t' << align.dbStartPos1 << '-' << align.dbEndPos1 << '\n';
            Matcher::result_t sw_align(
                seqTargetAa->getDbKey(),
                align.score1,
                align.qCov,
                align.tCov,
                seqId,
                align.evalue,
                alnLength,
                align.qStartPos1,
                align.qEndPos1,
                seqMergedAa->L,
                align.dbStartPos1,
                align.dbEndPos1,
                seqTargetAa->L,
                sw_backtrace
            );

            std::vector<Instruction> swqBt;
            std::vector<Instruction> swtBt;
            getMergeInstructions(sw_align, map1, map2, swqBt, swtBt);
            // std::cout << std::setprecision(2) << mergedId << '\t' << targetId
            //     << '\t' << sw_align.alnLength << '\t' << sw_align.seqId
            //     << '\t' << sw_align.qStartPos << '-' << sw_align.qEndPos << " (" << sw_align.qLen << ')'
            //     << '\t' << sw_align.dbStartPos << '-' << sw_align.dbEndPos << " (" << sw_align.dbLen << ')'
            //     << '\t' << sw_align.backtrace << '\n';
            updateCIGARs(sw_align, map1, map2, copyAa, copySs, qMembers, tMembers, swqBt, swtBt);

            std::vector<size_t> members;
            members.insert(members.end(), qMembers.begin(), qMembers.end());
            members.insert(members.end(), tMembers.begin(), tMembers.end());
            
            std::vector<float> lddtScores = std::get<0>(calculate_lddt(copyAa, members, msa.dbKeys, seqDbrCA, par.pairThreshold, par.onlyScoringCols));
            // std::cout << "LDDT: " << lddtScores[0] << '\n';

            // 1. sw, update relevant copied cigars --> MSA
            // 2. lddt on MSA --> per col count
            // 3. iterate cigar, map msa per col lddt -> (i, j)
            float **lddtScoreMap = new float *[seqMergedAa->L];
            for (int32_t z = 0; z < seqMergedAa->L; z++) {
                lddtScoreMap[z] = new float [seqTargetAa->L];
                memset(lddtScoreMap[z], 0, sizeof(float) * seqTargetAa->L);
                // std::fill(lddtScoreMap[z], lddtScoreMap[z] + seqTargetAa->L, 0.0f);
            }

            unsigned int qi = 0;
            unsigned int tj = 0;
            size_t bt = 0;
            
            std::vector<std::tuple<size_t, size_t, size_t, size_t> > anchors;
            int blockStart = -1;
            int blockEnd = -1;
            int blockCount = 0;
            int blockThreshold = 5;
            int underCount = 0;
            int underThreshold = 3;
            
            for (size_t z = 0; z < lddtScores.size(); z++) {

                if (lddtScores[z] > 0.7) {
                    if (blockStart == -1 && blockEnd == -1) {
                        blockStart = qi;
                        blockEnd = tj;
                    }
                    blockCount++;
                    if (z == lddtScores.size() - 1 && blockStart != -1 && blockEnd != -1) {
                        anchors.push_back(std::make_tuple(blockStart, blockEnd, qi, tj));
                    }
                } else {
                    if (blockStart != -1 && blockEnd != -1) {
                        if (underCount == underThreshold) {
                            if (blockCount >= blockThreshold) {
                                anchors.push_back(std::make_tuple(blockStart, blockEnd, qi, tj));
                            }
                            blockStart = -1;
                            blockEnd = -1;
                            blockCount = 0;
                            underCount = 0;
                        } 
                        underCount++;
                    }
                }

                if (qi < sw_align.qStartPos) {
                    lddtScoreMap[qi][0] = lddtScores[z];
                    qi++;
                    continue;
                }
                if (tj < sw_align.dbStartPos) {
                    lddtScoreMap[0][tj] = lddtScores[z];
                    tj++;
                    continue;
                }
                if (bt < sw_align.backtrace.size()) {
                    if (sw_align.backtrace[bt] == 'M') {
                        lddtScoreMap[qi][tj] = lddtScores[z];
                        qi++;
                        tj++;
                        bt++;
                    } else if (sw_align.backtrace[bt] == 'I') {
                        lddtScoreMap[qi][tj] = lddtScores[z];
                        qi++;
                        bt++;
                    } else {
                        lddtScoreMap[qi][tj] = lddtScores[z];
                        tj++;
                        bt++;
                    }
                    continue;
                }
                if (tj < sw_align.dbLen) {
                    lddtScoreMap[0][tj] = lddtScores[z];
                    tj++;
                    continue;
                }
                if (qi < sw_align.qLen) {
                    lddtScoreMap[qi][0] = lddtScores[z];
                    qi++;
                    continue;
                }
            }
            
            // Identify anchors
            // >0.8 LDDT, >10 residues?
            // TODO these currently are not used
            mergeAndExtendAnchors(anchors, seqMergedAa->L, seqTargetAa->L, 5);


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
                lddtScoreMap,
                anchors
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
            // if (!(i == merges.size() - 1 && j == merges[i] - 1)) {
                newSubMSA->mask = computeProfileMask(
                    newSubMSA->members,
                    msa.cigars_aa,
                    subMat_aa,
                    par.matchRatio
                );
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
                    par.wg
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
                    par.wg
                );
            // }

            // progress.updateProgress();
        }
        submsacount += subMSAs.size();

#pragma omp critical
        {
            mergeCount -= submsacount;
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
            // index += merges[0];
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
