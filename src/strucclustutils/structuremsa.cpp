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
#include "SimpleGotoh.h"
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
    delete[] composition_bias_aa;
    delete[] composition_bias_ss;
    
    Matcher::result_t result = simpleGotoh(
        query_aa_seq,
        query_3di_seq,
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
        lddtScoreMap
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
                StructureSmithWaterman::s_align saln = structureSmithWaterman.alignScoreEndPos<StructureSmithWaterman::PROFILE>(
                        seqDbAa.numSequence,
                        seqDbSs.numSequence,
                        seqDbAa.L,
                        go, ge,
                        seqQueryAa.L/2
                );
                aln.score = saln.score1;
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

class Neighbours {
public:
    int32_t* idx_dist = NULL;
    float* distance = NULL;
    size_t sz = 0;
    size_t cap = 0;

    explicit Neighbours(size_t n) {
        resize(n);
    }

    ~Neighbours() {
        if (idx_dist) {
            free(idx_dist);
            idx_dist = nullptr;
        }
        if (distance) {
            free(distance);
            distance = nullptr;
        }
        sz = cap = 0;
    }

    // size_t size() const {
    //     return sz;
    // }
    // size_t capacity() const {
    //     return cap;
    // }
    // bool empty() const {
    //     return sz == 0;
    // }
    // void clear() {
    //     sz = 0;
    // }
    // void reserve(size_t n) {
    //     if (n <= cap) {
    //         return;
    //     }
    //     reallocate(n);
    // }
    void resize(size_t n) {
        if (n > cap) {
            reallocate(n);
        }
        if (n > sz) {
            memset(idx_dist + sz, 0, (n - sz) * sizeof(int32_t));
            memset(distance + sz, 0, (n - sz) * sizeof(float));
        }
        sz = n;
    }
    // void push_back(int32_t idx, float dist) {
    //     if (sz == cap) {
    //         reserve(cap ? (cap * 2) : 1);
    //     }
    //     idx_dist[sz] = idx;
    //     distance[sz] = dist;
    //     ++sz;
    // }
    // bool empty_at(size_t i) const {
    //     return idx_dist[i] == 0;
    // }
    // int32_t* idx_ptr(size_t i = 0) {
    //     return idx_dist + i;
    // }
    // const int32_t* idx_ptr(size_t i = 0) const {
    //     return idx_dist + i;
    // }
    // float* dist_ptr(size_t i = 0) {
    //     return distance + i;
    // }
    // const float* dist_ptr(size_t i = 0) const {
    //     return distance + i;
    // }

private:
    void reallocate(size_t new_cap) {
        const size_t bytes_i = new_cap * sizeof(int32_t);
        const size_t bytes_f = new_cap * sizeof(float);

        int32_t* new_idx = NULL;
        float*   new_dst = NULL;

        new_idx = reinterpret_cast<int32_t*>(malloc_simd_int(bytes_i));
        new_dst = reinterpret_cast<float*>(malloc_simd_float(bytes_f));

        if (idx_dist) {
            memcpy(new_idx, idx_dist, sz * sizeof(int32_t));
        }
        if (distance) {
            memcpy(new_dst, distance, sz * sizeof(float));
        }

        if (new_cap > sz) {
            memset(new_idx + sz, 0, (new_cap - sz) * sizeof(int32_t));
            memset(new_dst + sz, 0, (new_cap - sz) * sizeof(float));
        }

        if (idx_dist) {
            free(idx_dist);
        }
        if (distance) {
            free(distance);
        }
        idx_dist = new_idx;
        distance = new_dst;
        cap = new_cap;
    }
};

inline void insert_topk(
    size_t rowBase,
    uint8_t& count,
    int32_t idx_dist,
    float ang_dist,
    Neighbours& out,
    size_t K
) {
    if (count < K) {
        out.idx_dist[rowBase + count] = idx_dist;
        out.distance[rowBase + count] = ang_dist;
        ++count;
        return;
    }
    // find worst (max d^2) among current K
    size_t worst = rowBase;
    float  wval  = out.distance[worst];
    for (size_t t = 1; t < K; ++t) {
        float v = out.distance[rowBase + t];
        if (v > wval) {
            wval = v; worst = rowBase + t;
        }
    }
    if (ang_dist < wval) {
        out.idx_dist[worst] = idx_dist;
        out.distance[worst] = ang_dist;
    }
}

inline void sortNeighbours(
    Neighbours& out,
    size_t rowBase,
    size_t c,
    size_t neighbours
) {
    std::vector<size_t> ord(c);
    std::iota(ord.begin(), ord.end(), 0);
    SORT_SERIAL(ord.begin(), ord.end(), [&](size_t a, size_t b){
        return out.distance[rowBase + a] < out.distance[rowBase + b];
    });

    std::vector<float> tmpD(c);
    std::vector<int32_t> tmpI(c);
    for (size_t t = 0; t < c; ++t) {
        size_t s = ord[t];
        tmpD[t] = out.distance[rowBase + s];
        tmpI[t] = out.idx_dist[rowBase + s];
    }
    memcpy(out.distance + rowBase, tmpD.data(), c * sizeof(float));
    memcpy(out.idx_dist + rowBase, tmpI.data(), c * sizeof(int32_t));
    for (size_t t = c; t < neighbours; ++t) {
        out.idx_dist[rowBase + t] = 0;
        out.distance[rowBase + t] = FLT_MAX;
    }

    // const size_t idx[8] = { 0, 1, 4, 7, 12, 19, 30, 47 };
    const size_t idx[8] = { 2, 3, 5, 8, 13, 20, 31, 47 };
    // const size_t idx[8] = { 0, 1, 3, 8, 15, 28, 47 };
    for (size_t i = 0; i < 8; ++i) {
        out.distance[rowBase + i] = out.distance[rowBase + idx[i]];
        out.idx_dist[rowBase + i] = out.idx_dist[rowBase + idx[i]];
    }
}

#include <simde/x86/fma.h>
#if defined(AVX512)
#define simdf32_f2it(x)     _mm512_cvttps_epi32(x)
#define simdf32_fmadd_real(x,y,z) _mm512_fmadd_ps(x,y,z)
#elif defined(AVX2)
#define simdf32_f2it(x)     _mm256_cvttps_epi32(x)
#define simdf32_fmadd_real(x,y,z) _mm256_fmadd_ps(x,y,z)
#else
#define simdf32_f2it(x)     _mm_cvttps_epi32(x)
#define simdf32_fmadd_real(x,y,z) _mm_fmadd_ps(x,y,z)
#endif

// Based on https://gist.github.com/jrade/293a73f89dfef51da6522428c857802d
// Copyright 2021 Johan Rade (johan.rade@gmail.com)
// Distributed under the MIT license (https://opensource.org/licenses/MIT)
// ported to SIMD
static inline simd_float exp_approx(simd_float x) {
    const simd_float neg20 = simdf32_set(-20.0f);
    // 2^23 / ln2
    const simd_float A = simdf32_set(8388608.0f / 0.69314718f);
    // 2^23 * (127 - c)
    const simd_float B = simdf32_set(8388608.0f * (127.0f - 0.043677448f));

    // mask for lanes we must return 0.0f
    simd_float mask_lt = simdf32_lt(x, neg20);

    // clamp to keep intermediates normal (avoids denorm slowdowns)
    // x = simdf32_max(x, neg20);

    // y = A*x + B;  trunc to int;  reinterpret as float
    // simd_float  y  = simdf32_add(simdf32_mul(A, x), B);
    simd_float y = simdf32_fmadd_real(x, A, B);
    simd_float r;
#if defined(__aarch64__)
    float32x4_t y_neon;
    memcpy(&y_neon, &y, sizeof(y_neon));
    int32x4_t   i32 = vcvtq_s32_f32(y_neon);
    float32x4_t bits = vreinterpretq_f32_s32(i32);
    memcpy(&r, &bits, sizeof(r));
#else
    r  = simdi_i2fcast(simdf32_f2it(y));
#endif

    // zero lanes where x < -20
    return simdf32_andnot(mask_lt, r);
}

inline float scoreNeighbours(
    const Neighbours& neighbourData,
    size_t neighbours,
    size_t qIdx,
    size_t tIdx,
    float nb_sigma_r,
    float nb_sigma_i,
    float nb_alpha,
    float nb_beta
) {
    float sum = 0.0f;
    float norm = 0.0f;

    const size_t V = sizeof(simd_float) / sizeof(float);
    const float*   qd = neighbourData.distance + qIdx;
    const float*   td = neighbourData.distance + tIdx;
    // const int32_t* qi = neighbourData.idx_dist + qIdx;
    // const int32_t* ti = neighbourData.idx_dist + tIdx;

    const simd_float eps        = simdf32_set(1e-12f);
    const simd_float neg_sig_r  = simdf32_set(-nb_sigma_r);
    // const simd_float neg_sig_i2 = simdf32_set(-(nb_sigma_i * nb_sigma_i));
    // const simd_float pos_sig_r  = simdf32_set(nb_sigma_r);
    // const simd_float pos_sig_i2 = simdf32_set(nb_sigma_i * nb_sigma_i);
    const simd_float alpha_v    = simdf32_set(nb_alpha);
    // const simd_float beta_v     = simdf32_set(nb_beta);
    const simd_float two_v      = simdf32_set(2.0f);
    // const simd_int   zero_i     = simdi32_set(0);
    const simd_float zero_f   = simdf32_set(0.0f);
    const simd_float max_f   = simdf32_set(FLT_MAX);
    const simd_float one_v      = simdf32_set(1.0f);

    simd_float sum_v  = simdf32_set(0.0f);
    simd_float norm_v = simdf32_set(0.0f);
    for (size_t n = 0; n < 8; n += V) {
        simd_float a = simdf32_load(qd + n);
        simd_float b = simdf32_load(td + n);
        
        // mask invalid (>c)
        simd_float m1 = simdf32_eq(a, max_f);
        simd_float m2 = simdf32_eq(b, max_f);
        simd_float m  = simdf32_andnot(simdf32_or(m1, m2), simdf32_eq(zero_f, zero_f));

        // simd_int i1 = simdi_load((simd_int*)(qi + n));
        // simd_int i2 = simdi_load((simd_int*)(ti + n));
        // // validity mask: (i1 != 0) & (i2 != 0)
        // simd_int m1 = simdi32_eq(i1, zero_i);
        // simd_int m2 = simdi32_eq(i2, zero_i);
        // simd_int m  = simdi_andnot(simdi_or(m1, m2), simdi32_eq(zero_i, zero_i));
        // // Si = exp( -( (i1 - i2)^2 * sigma_i^2 ) )
        // simd_int d    = simdi32_sub(i1, i2);
        // simd_float df   = simdi32_i2f(d);
        // simd_float SiIn = simdf32_mul(simdf32_mul(df, df), neg_sig_i2);
        // simd_float Si   = exp_approx(SiIn);

        // Sr = exp( -sigma_r * ((a-b)^2 / (a+b+eps)) )
        simd_float amb  = simdf32_sub(a, b);
        simd_float num  = simdf32_mul(amb, amb);
        simd_float den  = simdf32_add(simdf32_add(a, b), eps);
        simd_float inv = simdf32_rcp(den);
        // simd_float neg_den = simdf32_sub(zero_f, den);
        // simd_float corr = simdf32_fmadd(neg_den, inv, two_v);
        // inv = simdf32_mul(inv, corr);
        simd_float y = simdf32_mul(num, inv); // num/den
        simd_float SrIn = simdf32_mul(y, neg_sig_r);
        simd_float Sr   = exp_approx(SrIn);

        // simd_float s    = simdf32_add(simdf32_mul(alpha_v, Sr), simdf32_mul(beta_v,  Si));
        simd_float s    = simdf32_mul(alpha_v, Sr);

        // zero-out invalid lanes
        simd_float valid01 = simdf32_blendv_ps(zero_f, one_v, (simd_float)m);
        sum_v  = simdf32_add(sum_v, simdf32_mul(s, valid01));
        norm_v = simdf32_add(norm_v, simdf32_mul(two_v, valid01));

        // sum_v  = simdf32_add(sum_v,  s);
        // norm_v = simdf32_add(norm_v, two_v);
    }
    sum  += simdf32_hadd(sum_v);
    norm += simdf32_hadd(norm_v);
    return sum / norm;
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
    
    // Map neighbours per residue per structure
    const size_t neighbours = 48;
    float thresh = 15.0f;
    float nb_multiplier = 6.0f;
    float nb_low_cut = 0.5f;

    // continuous scoring vars
    float nb_sigma_r = 9.0f;
    float nb_sigma_i = 5.0f;
    float nb_alpha = 1.0f;
    float nb_beta = 1.0f;
    get_param_from_env("NB_SIGMA_R", nb_sigma_r);
    get_param_from_env("NB_SIGMA_I", nb_sigma_i);
    get_param_from_env("NB_ALPHA", nb_alpha);
    get_param_from_env("NB_BETA", nb_beta);
    get_param_from_env("NB_ANG_CUT", thresh);
    get_param_from_env("NB_MULT", nb_multiplier);
    get_param_from_env("NB_LOW_CUT", nb_low_cut);
    nb_sigma_r = 1.0f / nb_sigma_r;
    nb_sigma_i = 1.0f / nb_sigma_i;

    const float thresh_sq = thresh * thresh;

    // Initialise MSAs, Sequence objects
    size_t sequenceCnt = seqDbrAA.getSize();
    int maxSeqLength = par.maxSeqLen;
    size_t totalResidues = 0;
    MSAContainer msa(sequenceCnt);
    std::vector<size_t> proteinOffsets;
    proteinOffsets.reserve(sequenceCnt + 1);
    proteinOffsets.push_back(0);
    size_t baseOut = 0;
    for (size_t i = 0; i < sequenceCnt; i++) {
        unsigned int seqKeyAA = seqDbrAA.getDbKey(i);
        unsigned int seqKey3Di = seqDbr3Di.getDbKey(i);
        size_t seqIdAA = seqDbrAA.getId(seqKeyAA);
        size_t seqId3Di = seqDbr3Di.getId(seqKey3Di);
        size_t length = seqDbrAA.getSeqLen(seqIdAA);
        totalResidues += length;
        msa.addStructure(seqIdAA, seqKeyAA, length, seqDbrAA.getData(seqIdAA, 0), seqDbr3Di.getData(seqId3Di, 0));
        maxSeqLength = std::max(maxSeqLength, static_cast<int>(length));
        baseOut += length * neighbours;
        proteinOffsets.push_back(baseOut);
    }
    int maxThreads = std::min(par.threads, static_cast<int>(sequenceCnt));

    Neighbours neighbourData(totalResidues * neighbours);
    #pragma omp parallel for num_threads(maxThreads) default(none) \
        shared(neighbourData, proteinOffsets, sequenceCnt, neighbours, seqDbrAA, seqDbrCA, thresh_sq)
    for (size_t i = 0; i < sequenceCnt; i++) {
        unsigned int seqKeyAA = seqDbrAA.getDbKey(i);
        size_t seqIdAA = seqDbrAA.getId(seqKeyAA);
        size_t length = seqDbrAA.getSeqLen(seqIdAA);

        Coordinate16 tcoords;
        char *tcadata = seqDbrCA->getData(seqIdAA, 0);
        size_t tCaLength = seqDbrCA->getEntryLen(seqIdAA);
        float *targetCaData = tcoords.read(tcadata, length, tCaLength);

        const float* x = targetCaData;
        const float* y = targetCaData + length;
        const float* z = targetCaData + length * 2;
        std::vector<uint8_t> count(length, 0);
        size_t thread_baseOut = proteinOffsets[i];

        for (size_t j = 0; j < length; ++j) {
            const float xj = x[j], yj = y[j], zj = z[j];
            const size_t rowBaseJ = thread_baseOut + j * neighbours;
            for (size_t k = j + 1; k < length; ++k) {
                // if (std::abs(static_cast<int>(j) - static_cast<int>(k)) < 5) continue;
                float dx = xj - x[k];
                float dist = dx * dx;
                if (dist > thresh_sq) continue; 
                float dy = yj - y[k];
                dist += dy * dy;
                if (dist > thresh_sq) continue; 
                float dz = zj - z[k];
                dist += dz * dz;
                int idxdist = static_cast<int>(j) - static_cast<int>(k);
                if (dist < thresh_sq) {
                    insert_topk(rowBaseJ, count[j], idxdist, dist, neighbourData, neighbours); 
                    const size_t rowBaseK = thread_baseOut + k * neighbours;
                    insert_topk(rowBaseK, count[k], -idxdist, dist, neighbourData, neighbours); 
                }
            }
        }
        for (size_t j = 0; j < length; ++j) {
            const size_t rowBase = thread_baseOut + j * neighbours;
            const uint8_t c = count[j];
            sortNeighbours(neighbourData, rowBase, c, neighbours);
        }
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
    maxThreads = std::min(par.threads, static_cast<int>(maxMerges));

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
            
            std::vector<bool> qMembersKept;
            std::vector<bool> tMembersKept;

            if (queryIsProfile) {
                SubMSA& q = msa[querySubMSA];
                qMembers.assign(q.members.begin(), q.members.end());
                if (par.filterMsa) {
                    qMembersKept.assign(q.diff.begin(), q.diff.end());
                }
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
                if (par.filterMsa) {
                    tMembersKept.assign(t.diff.begin(), t.diff.end());
                }
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
                if (par.filterMsa) {
                    std::swap(qMembersKept, tMembersKept);
                }
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
            for (size_t qi = 0; qi < qMembers.size(); ++qi) {
                if (par.filterMsa && qMembersKept[qi] == false) {
                    continue;
                }
                size_t qMember = qMembers[qi];
                for (size_t ti = 0; ti < tMembers.size(); ++ti) {
                    if (par.filterMsa && tMembersKept[ti] == false) {
                        continue;
                    }
                    size_t tMember = tMembers[ti];
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
                            lddtSums[qMSAId][tMSAId] += scoreNeighbours(neighbourData, neighbours, qIdx, tIdx, nb_sigma_r, nb_sigma_i, nb_alpha, nb_beta);
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
                    lddtScoreMap[y][z] = lddtSums[y][z];
                }
            }
            
            Matcher::result_t res = pairwiseAlignment(
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
                bool *kept = new bool[newSubMSA->members.size()];
                for (size_t z = 0; z < newSubMSA->members.size(); ++z) {
                    kept[z] = 1;
                }
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
                filter_aa.getKept(kept, newSubMSA->members.size());
                newSubMSA->diff.clear();
                newSubMSA->diff.resize(newSubMSA->members.size());
                for (size_t z = 0; z < newSubMSA->members.size(); ++z) {
                    newSubMSA->diff[z] = kept[z];
                }
                delete[] kept;
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
