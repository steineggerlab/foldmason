#ifndef NEIGHBORS_H
#define NEIGHBORS_H

#include <algorithm>
#include <array>
#include <cfloat>
#include <cstddef>
#include <cstdint>
#include <cstring>
#include <vector>

#include "DBReader.h"
#include "Matcher.h"
#include "MSA.h"
#include "simd.h"

#ifndef SIZE_T_MAX
#define SIZE_T_MAX ((size_t) -1)
#endif

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

static constexpr std::array<size_t, 8> neighbourSampleIndices = {{ 2, 3, 5, 8, 13, 20, 31, 47 }};

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

class Neighbours {
public:
    static constexpr size_t FULL_NEIGHBOUR_COUNT = neighbourSampleIndices.back() + 1;
    static constexpr size_t CONTACT_CACHE_SIZE = neighbourSampleIndices.size();

    float* distance = NULL;
    float* contactDistance = NULL;
    uint32_t* contactResidues = NULL;
    size_t sz = 0;
    size_t cap = 0;
    size_t contactSz = 0;
    size_t contactCap = 0;
    static constexpr uint32_t INVALID_CONTACT = UINT32_MAX;
    
    explicit Neighbours(size_t residueCount);
    ~Neighbours();

    void resize(size_t residueCount);

    inline size_t rowBase(size_t residueIndex) const {
        return residueIndex * FULL_NEIGHBOUR_COUNT;
    }

    inline size_t contactBase(size_t residueIndex) const {
        return residueIndex * CONTACT_CACHE_SIZE;
    }

    inline size_t residueBase(size_t sequenceIndex) const {
        return residueOffsets[sequenceIndex];
    }

    inline void insert_topk(float *rowDistances, uint32_t *rowContacts, uint8_t& count, float angdist, uint32_t contactResid, size_t K) {
        if (count < K) {
            rowDistances[count] = angdist;
            rowContacts[count] = contactResid;
            ++count;
            return;
        }
        size_t worst = 0;
        float wval = rowDistances[worst];
        for (size_t t = 1; t < K; ++t) {
            float v = rowDistances[t];
            if (v > wval) {
                wval = v;
                worst = t;
            }
        }
        if (angdist < wval) {
            rowDistances[worst] = angdist;
            rowContacts[worst] = contactResid;
        }
    }

    inline void sortNeighbours(
        float *rowDistances,
        uint32_t *rowContacts,
        float *rowContactDistances,
        uint32_t *rowContactResidues,
        size_t c
    ) {
        float tmpD[FULL_NEIGHBOUR_COUNT];
        uint32_t tmpC[FULL_NEIGHBOUR_COUNT];
        for (size_t t = 0; t < c; ++t) {
            tmpD[t] = rowDistances[t];
            tmpC[t] = rowContacts[t];
        }
        for (size_t t = 1; t < c; ++t) {
            const float dist = tmpD[t];
            const uint32_t contact = tmpC[t];
            size_t s = t;
            while (s > 0 && tmpD[s - 1] > dist) {
                tmpD[s] = tmpD[s - 1];
                tmpC[s] = tmpC[s - 1];
                --s;
            }
            tmpD[s] = dist;
            tmpC[s] = contact;
        }
        const size_t compactCount = std::min(c, CONTACT_CACHE_SIZE);
        memcpy(rowDistances, tmpD, c * sizeof(float));
        for (size_t t = c; t < FULL_NEIGHBOUR_COUNT; ++t) {
            rowDistances[t] = FLT_MAX;
        }
        for (size_t t = 0; t < compactCount; ++t) {
            rowContactDistances[t] = tmpD[t];
            rowContactResidues[t] = tmpC[t];
        }
        for (size_t t = compactCount; t < CONTACT_CACHE_SIZE; ++t) {
            rowContactDistances[t] = FLT_MAX;
            rowContactResidues[t] = INVALID_CONTACT;
        }
        for (size_t i = 0; i < CONTACT_CACHE_SIZE; ++i) {
            const size_t idx = neighbourSampleIndices[i];
            rowDistances[i] = (idx < FULL_NEIGHBOUR_COUNT) ? rowDistances[idx] : FLT_MAX;
        }
    }

    inline float scoreNeighbours(size_t qIdx, size_t tIdx, float nb_sigma_r) {
        float sum = 0.0f;
        float norm = 0.0f;
        const size_t V = sizeof(simd_float) / sizeof(float);
        const float*   qd = distance + qIdx;
        const float*   td = distance + tIdx;
        const simd_float eps        = simdf32_set(1e-12f);
        const simd_float neg_sig_r  = simdf32_set(-nb_sigma_r);
        const simd_float two_v      = simdf32_set(2.0f);
        const simd_float zero_f   = simdf32_set(0.0f);
        const simd_float max_f   = simdf32_set(FLT_MAX);
        const simd_float one_v      = simdf32_set(1.0f);
        const simd_float true_mask = simdf32_eq(zero_f, zero_f);
        simd_float sum_v  = simdf32_set(0.0f);
        simd_float norm_v = simdf32_set(0.0f);
        for (size_t n = 0; n < 8; n += V) {
            simd_float a = simdf32_load(qd + n);
            simd_float b = simdf32_load(td + n);
            
            // mask invalid (>c)
            simd_float m1 = simdf32_eq(a, max_f);
            simd_float m2 = simdf32_eq(b, max_f);
            simd_float m  = simdf32_andnot(simdf32_or(m1, m2), true_mask);
            simd_float amb  = simdf32_sub(a, b);
            simd_float num  = simdf32_mul(amb, amb);
            simd_float den  = simdf32_add(simdf32_add(a, b), eps);
            simd_float y = simdf32_div(num, den); // num/den
            simd_float SrIn = simdf32_mul(y, neg_sig_r);
            simd_float Sr   = exp_approx(SrIn);

            // zero-out invalid lanes
            simd_float valid01 = simdf32_blendv_ps(zero_f, one_v, (simd_float)m);
            sum_v  = simdf32_add(sum_v, simdf32_mul(Sr, valid01));
            norm_v = simdf32_add(norm_v, simdf32_mul(two_v, valid01));
        }
        sum  += simdf32_hadd(sum_v);
        norm += simdf32_hadd(norm_v);
        return sum / norm;
    }
    
    void fillNeighbourScoreMatrix(
        float **scoreBiasMap,
        unsigned int **scoreSupportCounts,
        int queryLen,
        int targetLen,
        const std::vector<size_t> &qMembers,
        const std::vector<size_t> &tMembers,
        const std::vector<bool> &qMembersKept,
        const std::vector<bool> &tMembersKept,
        const std::vector<size_t> &map1Rev,
        const std::vector<size_t> &map2Rev,
        const std::vector<std::vector<Instruction>> &cigars_aa,
        bool queryIsProfile,
        bool targetIsProfile,
        int filterMsa,
        float nb_sigma_r,
        float nb_low_cut,
        float nb_multiplier
    );

    bool applyContactPreservationRefinement(
        const Matcher::result_t &res,
        float **scoreBiasMap,
        int queryLen,
        int targetLen,
        const std::vector<size_t> &qMembers,
        const std::vector<size_t> &tMembers,
        const std::vector<bool> &qMembersKept,
        const std::vector<bool> &tMembersKept,
        bool queryIsProfile,
        bool targetIsProfile,
        int filterMsa,
        size_t maxAnchors,
        size_t maxMembers,
        size_t maxNeighbours,
        size_t maxCells,
        size_t minSep,
        float weight,
        float lowCut,
        const std::vector<size_t> &map1Rev,
        const std::vector<size_t> &map2Rev,
        const std::vector<std::vector<Instruction>> &cigarsAa,
        DBReader<unsigned int> &seqDbrAA,
        float nbMultiplier
    );

    void collectNeighbours(
        size_t sequenceCnt,
        DBReader<unsigned int> &seqDbrAA,
        DBReader<unsigned int> *seqDbrCA,
        const std::vector<size_t> &residueOffsets,
        float thresh_sq,
        int maxThreads
    );

private:
    std::vector<size_t> residueOffsets;

    void reallocate(size_t new_cap, size_t new_contact_cap);
};

#endif
