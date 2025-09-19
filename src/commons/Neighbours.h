#include <cstddef>
#include <cstdint>

#include "FastSort.h"
#include "simd.h"
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

    
    inline void insert_topk(const size_t rowBase, uint8_t& count, int32_t idxdist, float angdist, size_t K) {
        if (count < K) {
            idx_dist[rowBase + count] = idxdist;
            distance[rowBase + count] = angdist;
            ++count;
            return;
        }
        // find worst (max d^2) among current K
        size_t worst = rowBase;
        float  wval  = distance[worst];
        for (size_t t = 1; t < K; ++t) {
            float v = distance[rowBase + t];
            if (v > wval) {
                wval = v; worst = rowBase + t;
            }
        }
        if (angdist < wval) {
            idx_dist[worst] = idxdist;
            distance[worst] = angdist;
        }
    }

    inline void sortNeighbours(size_t rowBase, size_t c, size_t neighbours) {
        std::vector<size_t> ord(c);
        std::iota(ord.begin(), ord.end(), 0);
        SORT_SERIAL(ord.begin(), ord.end(), [&](size_t a, size_t b){
            return distance[rowBase + a] < distance[rowBase + b];
        });
        std::vector<float> tmpD(c);
        std::vector<int32_t> tmpI(c);
        for (size_t t = 0; t < c; ++t) {
            size_t s = ord[t];
            tmpD[t] = distance[rowBase + s];
            tmpI[t] = idx_dist[rowBase + s];
        }
        memcpy(distance + rowBase, tmpD.data(), c * sizeof(float));
        memcpy(idx_dist + rowBase, tmpI.data(), c * sizeof(int32_t));
        for (size_t t = c; t < neighbours; ++t) {
            idx_dist[rowBase + t] = 0;
            distance[rowBase + t] = FLT_MAX;
        }
        const size_t idx[8] = { 2, 3, 5, 8, 13, 20, 31, 47 };
        for (size_t i = 0; i < 8; ++i) {
            distance[rowBase + i] = distance[rowBase + idx[i]];
            idx_dist[rowBase + i] = idx_dist[rowBase + idx[i]];
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