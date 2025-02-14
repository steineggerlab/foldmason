#include "Alignment.h"
#include "BacktraceTranslator.h"
#include "DBReader.h"
#include "DBWriter.h"
#include "Debug.h"
#include "Fwbw.h"
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

#include "LoLAlign.h"
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


inline size_t upper_triangle_index(size_t i, size_t j, size_t n) {
    return (i * (2 * n - i - 1)) / 2 + (j - i - 1);
}

// Generates 2D distance matrix for LoLalign from profile
// For each pair of MSA columns, takes inter-residue distances within structures
// with residues (non-gap) in both columns, e.g. 4 structures, 5 columns:
//
// MSA           Structure residue pairs for D[i][j]
// 0 1 2 3 4     0-1 B-B or C-C
// A - - A -     0-2 B-B
// B B B B B     0-3 A-A or B-B, C-C, D-D
// C C - C -     0-4 B-B or D-D
// D - - D D     1-2 B-B
//               1-3 B-B or C-C
//               1-4 B-B
//               2-3 B-B
//               2-4 B-B
//               3-4 B-B or D-D
void fill_distance_matrix(
    DBReader<unsigned int> *seqDbrAA,
    DBReader<unsigned int> *seqDbrCA,
    float** matrix,
    const std::vector<std::vector<Instruction> >& cigars,
    const std::vector<size_t> members,
    const std::string& mask,
    size_t n
) {
    // profile index <--> mask index
    std::vector<size_t> mask_indices = map_mask_indices(mask, n);
    
    // zero out
    for (size_t i = 0; i < n; ++i) {
        memset(matrix[i], 0.0f, n * sizeof(float));
    }

    const float cutoff_distance = 15.0f;
    const float cutoff_sq = cutoff_distance * cutoff_distance;

    // counts of residue pairs contributing to cell scores, upper triangle
    std::vector<size_t> residue_count((n * (n + 1)) / 2, 0);
    for (size_t member : members) {
        const std::vector<Instruction>& cigar = cigars[member];
        std::vector<size_t> has_residue;
        has_residue.reserve(mask.length());

        // precompute structure residue indices
        // SIZE_T_MAX if no residue at position
        size_t res_index = 0 ;
        for (const Instruction& ins : cigar) {
            if (ins.isSeq()) {
                has_residue.push_back(res_index);
                res_index++;
            } else {
                has_residue.insert(has_residue.end(), ins.length(), SIZE_T_MAX);
            }
        }

        unsigned int dbKey = seqDbrAA->getDbKey(member);
        size_t aaId = seqDbrAA->getId(dbKey);
        size_t caId = seqDbrCA->getId(dbKey);
        int len = seqDbrAA->getSeqLen(aaId);

        Coordinate16 coords;
        char *qcadata = seqDbrCA->getData(caId, 0);
        size_t qCaLength = seqDbrCA->getEntryLen(caId);
        float *qCaData = coords.read(qcadata, len, qCaLength);

#pragma omp parallel for schedule(dynamic)
        for (size_t i = 0; i < n; ++i) {
            size_t i_m = mask_indices[i];
            size_t a = has_residue[i_m];
            if (a == SIZE_T_MAX) continue;
            float ax = qCaData[a];
            float ay = qCaData[a + len];
            float az = qCaData[a + len * 2];
            for (size_t j = i + 1; j < n; ++j) {
                size_t j_m = mask_indices[j];
                size_t b = has_residue[j_m];
                if (b == SIZE_T_MAX) continue;
                float dx = ax - qCaData[b];
                float dy = ay - qCaData[b + len];
                float dz = az - qCaData[b + len * 2];
                float dist_sq = dx * dx + dy * dy + dz * dz;
                matrix[i][j] += (dist_sq > cutoff_sq) ? 0.0f : std::sqrt(dist_sq);
                residue_count[upper_triangle_index(i, j, n)]++;
            }
        }
    }
    
#pragma omp parallel for schedule(dynamic)
    for (size_t i = 0; i < n; ++i) {
        for (size_t j = i + 1; j < n; ++j) {
            size_t idx = upper_triangle_index(i, j, n);
            if (residue_count[idx] > 0) {
                matrix[i][j] /= static_cast<float>(residue_count[idx]);
                matrix[j][i] = matrix[i][j];
            }
        }
    }
}

void fill_distance_matrix(
    DBReader<unsigned int> *seqDbrAA,
    DBReader<unsigned int> *seqDbrCA,
    float** matrix,
    size_t dbId,
    size_t n
) {
    for (size_t i = 0; i < n; ++i) {
        memset(matrix[i], 0.0f, n * sizeof(float));
    }
    for (size_t i = 0; i < n; ++i) {
        matrix[i][i] = 0.0f;
        // memset(matrix[i], 0.0f, n * sizeof(float));
        for (size_t j = i + 1; j < n; ++j) {
            float dist = compute_residue_distance(seqDbrAA, seqDbrCA, dbId, i, j);
            matrix[i][j] = dist;
            matrix[j][i] = dist;
        }
    }
}

void fill_score_matrix(
    float** G,
    Sequence *query_aa,
    Sequence *query_3di,
    Sequence *target_aa,
    Sequence *target_3di,
    SubstitutionMatrix *mat_aa,
    SubstitutionMatrix *mat_3di,
    int compBiasCorrection
) {
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

    float *composition_bias_aa  = new float[query_aa->L];
    float *composition_bias_ss  = new float[query_aa->L];
    float *tmp_composition_bias = new float[query_aa->L];
    if (compBiasCorrection) {
        SubstitutionMatrix::calcLocalAaBiasCorrection(mat_aa, query_aa->numSequence, query_aa->L, tmp_composition_bias, 1.0);
        for (int i =0; i < query_aa->L; i++) {
            composition_bias_aa[i] = (int8_t) (tmp_composition_bias[i] < 0.0) ? tmp_composition_bias[i] - 0.5 : tmp_composition_bias[i] + 0.5;
        }
        SubstitutionMatrix::calcLocalAaBiasCorrection(mat_3di, query_3di->numSequence, query_3di->L, tmp_composition_bias, 1.0);
        for (int i =0; i < query_aa->L; i++) {
            composition_bias_ss[i] = (int8_t) (tmp_composition_bias[i] < 0.0) ? tmp_composition_bias[i] - 0.5 : tmp_composition_bias[i] + 0.5;
        }
    } else {
        memset(composition_bias_aa, 0, query_aa->L * sizeof(int8_t));
        memset(composition_bias_ss, 0, query_aa->L * sizeof(int8_t));
    }

    short **query_profile_scores_aa = new short * [mat_aa->alphabetSize];
    short **query_profile_scores_3di = new short * [mat_aa->alphabetSize];
    for (int32_t j = 0; j < mat_aa->alphabetSize; j++) {
        query_profile_scores_aa[j] = new short [query_aa->L];
        query_profile_scores_3di[j] = new short [query_aa->L];
    }
    if (queryIsProfile) {
        for (unsigned int i = 0; i < static_cast<unsigned int>(query_aa->L); i++) {
            for (int32_t j = 0; j < mat_aa->alphabetSize; j++) {
                query_profile_scores_aa[j][i]  = query_aa->profile_for_alignment[j * query_aa->L + i];
                query_profile_scores_3di[j][i] = query_3di->profile_for_alignment[j * query_aa->L + i];
            }
        }
    } else {
        for (unsigned int i = 0; i < static_cast<unsigned int>(query_aa->L); i++) {
            for (int32_t j = 0; j < mat_aa->alphabetSize; j++) {
                query_profile_scores_aa[j][i]  = mat_aa->subMatrix[j][query_aa_seq[i]]   + composition_bias_aa[i];
                query_profile_scores_3di[j][i] = mat_3di->subMatrix[j][query_3di_seq[i]] + composition_bias_ss[i];
            }
        }
    }
   
    short **target_profile_scores_aa = new short * [mat_aa->alphabetSize];
    short **target_profile_scores_3di = new short * [mat_aa->alphabetSize];
    for (int32_t j = 0; j < mat_aa->alphabetSize; j++) {
        target_profile_scores_aa[j]  = new short [target_aa->L];
        target_profile_scores_3di[j] = new short [target_aa->L];
    }
    if (targetIsProfile) {
        for (int i = 0; i < target_aa->L; i++) {
            for (int32_t j = 0; j < mat_aa->alphabetSize; j++) {
                target_profile_scores_aa[j][i]  = target_aa->profile_for_alignment[j * target_aa->L + i];
                target_profile_scores_3di[j][i] = target_3di->profile_for_alignment[j * target_aa->L + i];
            }
        }
    } else {
        for (int i = 0; i < target_aa->L; i++) {
            for (int32_t j = 0; j < mat_aa->alphabetSize; j++) {
                target_profile_scores_aa[j][i]  = mat_aa->subMatrix[j][target_aa_seq[i]];
                target_profile_scores_3di[j][i] = mat_3di->subMatrix[j][target_3di_seq[i]];
            }
        }
    }

    delete[] composition_bias_aa;
    delete[] composition_bias_ss;
    delete[] tmp_composition_bias;
   
    for (int i = 0; i < target_aa->L; ++i) {
        for (int j = 0; j < query_aa->L; ++j) {
            G[j][i] = static_cast<float>(
                (query_profile_scores_aa[target_aa_seq[i]][j] + target_profile_scores_aa[query_aa_seq[j]][i]) / 2 * 1.4 +
                (query_profile_scores_3di[target_3di_seq[i]][j] + target_profile_scores_3di[query_3di_seq[j]][i]) / 2 * 2.1
            );
        }
    }
    
    for (int32_t i = 0; i < mat_aa->alphabetSize; i++) {
        delete[] query_profile_scores_aa[i];
        delete[] query_profile_scores_3di[i];
        delete[] target_profile_scores_aa[i];
        delete[] target_profile_scores_3di[i];
    }

    delete[] query_profile_scores_aa;
    delete[] query_profile_scores_3di;
    delete[] target_profile_scores_aa;
    delete[] target_profile_scores_3di;
 
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

    float *composition_bias_aa  = new float[query_aa->L];
    float *composition_bias_ss  = new float[query_aa->L];
    float *tmp_composition_bias = new float[query_aa->L];
    if (compBiasCorrection) {
        SubstitutionMatrix::calcLocalAaBiasCorrection(mat_aa, query_aa->numSequence, query_aa->L, tmp_composition_bias, 1.0);
        for (int i =0; i < query_aa->L; i++) {
            composition_bias_aa[i] = (int8_t) (tmp_composition_bias[i] < 0.0) ? tmp_composition_bias[i] - 0.5 : tmp_composition_bias[i] + 0.5;
        }
        SubstitutionMatrix::calcLocalAaBiasCorrection(mat_3di, query_3di->numSequence, query_3di->L, tmp_composition_bias, 1.0);
        for (int i =0; i < query_aa->L; i++) {
            composition_bias_ss[i] = (int8_t) (tmp_composition_bias[i] < 0.0) ? tmp_composition_bias[i] - 0.5 : tmp_composition_bias[i] + 0.5;
        }
    } else {
        memset(composition_bias_aa, 0, query_aa->L * sizeof(int8_t));
        memset(composition_bias_ss, 0, query_aa->L * sizeof(int8_t));
    }

    short **query_profile_scores_aa = new short * [aligner.get_profile()->alphabetSize];
    short **query_profile_scores_3di = new short * [aligner.get_profile()->alphabetSize];
    for (int32_t j = 0; j < aligner.get_profile()->alphabetSize; j++) {
        query_profile_scores_aa[j] = new short [querySeqLen];
        query_profile_scores_3di[j] = new short [querySeqLen];
    }
    if (queryIsProfile) {
        for (unsigned int i = 0; i < querySeqLen; i++) {
            for (int32_t j = 0; j < aligner.get_profile()->alphabetSize; j++) {
                query_profile_scores_aa[j][i]  = query_aa->profile_for_alignment[j * querySeqLen + i];
                query_profile_scores_3di[j][i] = query_3di->profile_for_alignment[j * querySeqLen + i];
            }
        }
    } else {
        for (unsigned int i = 0; i < querySeqLen; i++) {
            for (int32_t j = 0; j < aligner.get_profile()->alphabetSize; j++) {
                query_profile_scores_aa[j][i]  = mat_aa->subMatrix[j][query_aa_seq[i]]   + composition_bias_aa[i];
                query_profile_scores_3di[j][i] = mat_3di->subMatrix[j][query_3di_seq[i]] + composition_bias_ss[i];
            }
        }
    }
   
    short **target_profile_scores_aa = new short * [aligner.get_profile()->alphabetSize];
    short **target_profile_scores_3di = new short * [aligner.get_profile()->alphabetSize];
    for (int32_t j = 0; j < aligner.get_profile()->alphabetSize; j++) {
        target_profile_scores_aa[j]  = new short [target_aa->L];
        target_profile_scores_3di[j] = new short [target_aa->L];
    }
    if (targetIsProfile) {
        for (int i = 0; i < target_aa->L; i++) {
            for (int32_t j = 0; j < aligner.get_profile()->alphabetSize; j++) {
                target_profile_scores_aa[j][i]  = target_aa->profile_for_alignment[j * target_aa->L + i];
                target_profile_scores_3di[j][i] = target_3di->profile_for_alignment[j * target_aa->L + i];
            }
        }
    } else {
        for (int i = 0; i < target_aa->L; i++) {
            for (int32_t j = 0; j < aligner.get_profile()->alphabetSize; j++) {
                target_profile_scores_aa[j][i]  = mat_aa->subMatrix[j][target_aa_seq[i]];
                target_profile_scores_3di[j][i] = mat_3di->subMatrix[j][target_3di_seq[i]];
            }
        }
    }

    delete[] composition_bias_aa;
    delete[] composition_bias_ss;
    delete[] tmp_composition_bias;

    // Matcher::result_t gAlign = aligner.simpleGotoh(
    //     target_aa_seq,
    //     target_3di_seq,
    //     query_profile_scores_aa,
    //     query_profile_scores_3di,
    //     target_profile_scores_aa,
    //     target_profile_scores_3di,
    //     0,
    //     query_aa->L,
    //     0,
    //     target_aa->L,
    //     gapOpen,
    //     gapExtend
    // );
    
    Matcher::result_t gAlign;
    
    size_t length = 16;
    float go = -10;
    float ge = -1;
    float T = 3;
    int targetLen = target_aa->L;
    int queryLen = query_aa->L;
    size_t RowsCapacity = ((queryLen + length - 1) / length) * length;
    size_t ColsCapacity = ((targetLen + length - 1) / length) * length;
    float** G;
    G = malloc_matrix<float>(queryLen, targetLen);
    std::cout.precision(1);
    for (int i = 0; i < targetLen; ++i) {
        for (int j = 0; j < queryLen; ++j) {
            G[j][i] = static_cast<float>(
                (query_profile_scores_aa[target_aa_seq[i]][j] + target_profile_scores_aa[query_aa_seq[j]][i]) / 4 * 1.4 +
                (query_profile_scores_3di[target_3di_seq[i]][j] + target_profile_scores_3di[query_3di_seq[j]][i]) / 4 * 2.1
            );
            // std::cout << std::fixed << G[j][i] << '\t';
        }
        // std::cout << '\n';
    }
    FwBwAligner fwbwaln(length, go, ge, T, RowsCapacity, ColsCapacity);
    int* gaps = new int[4]{0, queryLen, 0, targetLen}; //gaps: [rowStart, rowEnd, colStart, colEnd]
    fwbwaln.initScoreMatrix(G, gaps);
    fwbwaln.runFwBw<0,1>();
    FwBwAligner::s_align aln = fwbwaln.getFwbwAlnResult();

    // Matcher::result_t result = Matcher::result_t();
    gAlign.qStartPos = aln.dbStartPos1 - 1;
    gAlign.qEndPos = aln.dbEndPos1;
    gAlign.qLen = queryLen;
    gAlign.dbStartPos = aln.qStartPos1 - 1;
    gAlign.dbEndPos = aln.qEndPos1;
    gAlign.dbLen = targetLen;
    gAlign.alnLength = aln.cigar.length();
    gAlign.backtrace = aln.cigar;
    // std::cout << "backtrace:" << aln.cigar << std::endl;
    free(G);
    // free(P);

   for (int32_t i = 0; i < aligner.get_profile()->alphabetSize; i++) {
        delete[] query_profile_scores_aa[i];
        delete[] query_profile_scores_3di[i];
        delete[] target_profile_scores_aa[i];
        delete[] target_profile_scores_3di[i];
    }

    delete[] query_profile_scores_aa;
    delete[] query_profile_scores_3di;
    delete[] target_profile_scores_aa;
    delete[] target_profile_scores_3di;
   
    return gAlign;
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
            aln.score = structureSmithWaterman.ungapped_alignment(seqTargetAa.numSequence, seqTargetSs.numSequence, seqTargetAa.L);
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

void mst(std::vector<AlnSimple>& hits, int n) {
    UnionFind uf(n);
    std::vector<AlnSimple> edges;
    edges.reserve(n - 1);
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
        0.6
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





Matcher::result_t pairwiseLoLalign(
    int mergedId,
    int targetId,
    DBReader<unsigned int> *seqDbrAA,
    DBReader<unsigned int> *seqDbr3Di,
    DBReader<unsigned int> *seqDbrCA,
    SubstitutionMatrix &subMatAA,
    SubstitutionMatrix &subMat3Di
) {
    lolAlign lolaln(seqDbrAA->getMaxSeqLen(), false);
    

    unsigned int qKey = seqDbrAA->getDbKey(mergedId);
    size_t qId = seqDbrAA->getId(qKey);
    int qLen = seqDbrAA->getSeqLen(qId);
    size_t qCaId = seqDbrCA->getId(qKey);

    unsigned int tKey = seqDbrAA->getDbKey(targetId);
    size_t tId = seqDbrAA->getId(tKey);
    int tLen = seqDbrAA->getSeqLen(tId);
    size_t tCaId = seqDbrCA->getId(tKey);
    
    Coordinate16 qcoords;
    char *qcadata = seqDbrCA->getData(qCaId, 0);
    size_t qCaLength = seqDbrCA->getEntryLen(qCaId);
    float *qCaData = qcoords.read(qcadata, qLen, qCaLength);
    char *querySeq = seqDbrAA->getData(mergedId, 0);
    char *querySeq3Di = seqDbr3Di->getData(qCaId, 0);
    
    Coordinate16 tcoords;
    char *tcadata = seqDbrCA->getData(tCaId, 0);
    size_t tCaLength = seqDbrCA->getEntryLen(tCaId);
    float *tCaData = tcoords.read(tcadata, tLen, tCaLength);
    char *targetSeq = seqDbrAA->getData(targetId, 0);
    char *targetSeq3Di = seqDbr3Di->getData(tCaId, 0);

    size_t length = 16;
    float go = -5;
    float ge = 0;
    float T = 3;

    size_t RowsCapacity = ((qLen + length - 1) / length) * length;
    size_t ColsCapacity = ((tLen + length - 1) / length) * length;

    FwBwAligner fwbwaln(length,go, ge, T, RowsCapacity, ColsCapacity);

    // fwbwaln.resizeMatrix(qLen, tLen);
    lolaln.initQuery(qCaData, &qCaData[qLen], &qCaData[qLen * 2], querySeq, querySeq3Di, qLen);
    Matcher::result_t result = lolaln.align(
        tKey,
        tCaData,
        &tCaData[tLen],
        &tCaData[tLen + tLen],
        targetSeq,
        targetSeq3Di,
        tLen,
        subMatAA,
        subMat3Di,
        &fwbwaln
    );

    return result;
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
    std::vector<size_t> merges;

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
        // assert(hits.size() == sequenceCnt - 1);  // should be n-1 edges

        Debug(Debug::INFO) << "Optimising merge order\n";
        balanceTree(hits, merges, sequenceCnt);

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
    MsaFilter filter_aa(maxSeqLength + 1, sequenceCnt + 1, &subMat_aa, par.gapOpen.values.aminoacid(), par.gapExtend.values.aminoacid());
    MsaFilter filter_3di(maxSeqLength + 1, sequenceCnt + 1, &subMat_3di, par.gapOpen.values.aminoacid(), par.gapExtend.values.aminoacid()); 
    PSSMCalculator calculator_aa(&subMat_aa, maxSeqLength + 1, sequenceCnt + 1, par.pcmode, par.pcaAa, par.pcbAa
#ifdef GAP_POS_SCORING
    , par.gapOpen.values.aminoacid(), par.gapPseudoCount
#endif
    );
    PSSMCalculator calculator_3di(&subMat_3di, maxSeqLength + 1, sequenceCnt + 1, par.pcmode, par.pca3di, par.pcb3di
#ifdef GAP_POS_SCORING
    , par.gapOpen.values.aminoacid(), par.gapPseudoCount
#endif
    );
    
    size_t length = 16;
    size_t RowsCapacity = ((seqDbrAA.getMaxSeqLen() + length - 1) / length) * length;
    size_t ColsCapacity = ((seqDbrAA.getMaxSeqLen() + length - 1) / length) * length;
    lolAlign lolaln(seqDbrAA.getMaxSeqLen(), false);
    FwBwAligner fwbwaln(length, -par.fwbw_gapopen, -par.fwbw_gapextend, par.temperature, RowsCapacity, ColsCapacity);

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

            // Since we will update the query subMSA, need to remove the target one 
            if (targetIsProfile) {
                toRemove.push_back(targetSubMSA);
            }

            // TODO
            // do this also for target if profile
            // how do we do profile vs sequence?
            //            
            // flow
            // Preallocate float** distance matrix
            // 1. for a msa profile, iterate all column index pairs (i, j)
            // 2. map (i, j) to real sequence indices using mask, (i_m, j_m)
            // 3. iterate msa sequences, find first with residues at (i_m, j_m)
            // 4. compute distance (angstrom) within structure of residue pair (i_m, j_m) and fill cell in distance matrix
            // 5. break
            
            lolaln.initQuery_foldmason(reinterpret_cast<char*>(seqMergedAa->numSequence), reinterpret_cast<char*>(seqMergedSs->numSequence), seqMergedAa->L);
            lolaln.reallocate_target(seqTargetAa->L);
            size_t newRow = ((seqMergedAa->L + 15) / 16) * 16;
            size_t newCol = ((seqTargetAa->L + 15) / 16) * 16;
            fwbwaln.resizeMatrix(newRow, newCol);
            if (queryIsProfile) {
                fill_distance_matrix(&seqDbrAA, seqDbrCA, lolaln.d_ij, msa.cigars_aa, qMembers, msa[querySubMSA].mask, seqMergedAa->L);
            } else {
                fill_distance_matrix(&seqDbrAA, seqDbrCA, lolaln.d_ij, mergedId, seqMergedAa->L);
            }
            if (targetIsProfile) {
                fill_distance_matrix(&seqDbrAA, seqDbrCA, lolaln.d_kl, msa.cigars_aa, tMembers, msa[targetSubMSA].mask, seqTargetAa->L);
            } else {
                fill_distance_matrix(&seqDbrAA, seqDbrCA, lolaln.d_kl, targetId, seqTargetAa->L);
            }
            fill_score_matrix(lolaln.G, seqMergedAa, seqMergedSs, seqTargetAa, seqTargetSs, &subMat_aa, &subMat_3di, par.compBiasCorrection);
            Matcher::result_t lolRes = lolaln.align_foldmason(seqMergedAa->L, seqTargetAa->L, lolaln.G, lolaln.d_ij, lolaln.d_kl, &fwbwaln);
            
            // std::cout.precision(2);
            // std::cout << "## START QUERY MATRIX\n";
            // for (size_t m : qMembers)
            //     std::cout << expand(msa.cigars_aa[m]) << '\n';
            // if (queryIsProfile)
            //     std::cout << msa[querySubMSA].mask << '\n';
            // print_matrix(lolaln.d_ij, seqMergedAa->L, seqMergedAa->L);
            // std::cout << "## END QUERY MATRIX\n\n";
            // std::cout << "## START TARGET MATRIX\n";
            // for (size_t m : tMembers)
            //     std::cout << expand(msa.cigars_aa[m]) << '\n';
            // if (targetIsProfile)
            //     std::cout << msa[targetSubMSA].mask << '\n';
            // print_matrix(lolaln.d_kl, seqTargetAa->L, seqTargetAa->L);
            // std::cout << "## END TARGET MATRIX\n";
            // std::cout << "## START SCORE MATRIX\n";
            // print_matrix(lolaln.G, seqTargetAa->L, seqMergedAa->L);
            // std::cout << "## END SCORE MATRIX\n";
            
            // Do alignment
            // structureSmithWaterman.ssw_init(seqMergedAa, seqMergedSs, tinySubMatAA, tinySubMat3Di, &subMat_aa);
            // Matcher::result_t res = pairwiseAlignment(
            //     structureSmithWaterman,
            //     seqMergedAa->L,
            //     seqMergedAa,
            //     seqMergedSs, 
            //     seqTargetAa,
            //     seqTargetSs,
            //     par.gapOpen.values.aminoacid(),
            //     par.gapExtend.values.aminoacid(),
            //     &subMat_aa,
            //     &subMat_3di,
            //     par.compBiasCorrection
            // );

            std::vector<Instruction> qBt;
            std::vector<Instruction> tBt;
            getMergeInstructions(lolRes, map1, map2, qBt, tBt);

            // If neither are profiles, do TM-align as well and take the best alignment
            // if (caExist) {
            //     // Matcher::result_t lolRes = pairwiseLoLalign(mergedId, targetId, &seqDbrAA, &seqDbr3Di, seqDbrCA, subMat_aa, subMat_3di);
            //     // Matcher::result_t tmRes = pairwiseTMAlign(mergedId, targetId, seqDbrAA, seqDbrCA);
            //     double lddtLoL = calculate_lddt_pair(msa.dbKeys[mergedId], msa.dbKeys[targetId], lolRes, seqDbrCA, thread_idx);
            //     // double lddtTM = calculate_lddt_pair(msa.dbKeys[mergedId], msa.dbKeys[targetId], tmRes, seqDbrCA, thread_idx);
            //     double lddt3Di = calculate_lddt_pair(msa.dbKeys[mergedId], msa.dbKeys[targetId], res, seqDbrCA, thread_idx);
            //     // Debug(Debug::INFO) << "LDDT scores\t" << lddt3Di << '\t' << lddtLoL << '\n';
            //     if (lddtLoL > lddt3Di) {
            //         // Debug(Debug::INFO) << "Using LoLalign " << lddtLoL << ' ' << lddt3Di << '\n';
            //         qBt.clear();
            //         tBt.clear();
            //         getMergeInstructions(lolRes, map1, map2, qBt, tBt);
            //         std::swap(res, lolRes);
            //     }
            // }

            updateCIGARs(lolRes, map1, map2, msa.cigars_aa, msa.cigars_ss, qMembers, tMembers, qBt, tBt);
            
            // for (auto member : qMembers) {
            //     std::cout << expand(msa.cigars_ss[member]) << '\n';
            // } 
            // // std::cout << res.backtrace << '\n';
            // for (auto member : tMembers) {
            //     std::cout << expand(msa.cigars_ss[member]) << '\n';
            // } 
            // std::cout << '\n';

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
            }

            progress.updateProgress();
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

    // Refine alignment -- MUSCLE5 style
    // 1. Partition into two sub-MSAs
    // 2. Remove all-gap columns
    // 3. Create sub-MSA profiles
    // 4. Save profiles -> Sequence objects
    // 5. Pairwise alignment
    // 6. Repeat x100
    // Only run with master thread
#pragma omp master
{
    if (par.refineIters > 0) {
        refineMany(
            tinySubMatAA, tinySubMat3Di, seqDbrCA, msa.cigars_aa, msa.cigars_ss, calculator_aa,
            filter_aa, subMat_aa, calculator_3di, filter_3di, subMat_3di, structureSmithWaterman,
            par.refineIters, par.compBiasCorrection, par.wg, par.filterMaxSeqId, par.qsc,
            par.Ndiff, par.covMSAThr, par.filterMinEnable, par.filterMsa, par.gapExtend.values.aminoacid(),
            par.gapOpen.values.aminoacid(), par.maxSeqLen, par.qid, par.pairThreshold, msa.dbKeys,
            par.refinementSeed
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
