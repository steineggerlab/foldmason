#include "Fwbw.h"
#include "Debug.h"
#include "DBReader.h"
#include "DBWriter.h"
#include "IndexReader.h"
#include "SubstitutionMatrix.h"
#include "Matcher.h"
#include "Util.h"
#include "Parameters.h"

#include <iostream>
#include <algorithm>
#include <limits>
#include <cfloat>
#include <numeric>
#include <cmath>
#include <vector>


#ifdef OPENMP
#include <omp.h>
#endif

struct States {
    const static uint8_t STOP=0;
    const static uint8_t M=1;
    const static uint8_t I=2;
    const static uint8_t D=3;
};

inline void calculate_max4(float& max, float& term1, float& term2, float& term3, float& term4, uint8_t& state) {
    if (term1 > term2) { max = term1; state = States::STOP; }
    else { max = term2; state = States::M; };
    if (term3 > max) { max = term3; state = States::D; };
    if (term4 > max) { max = term4; state = States::I; };
}

FwBwAligner::FwBwAligner(size_t queryLen, size_t targetLen, size_t length, size_t blocks){

    zmForward = malloc_matrix<float>(queryLen, targetLen);
    zeForward = malloc_matrix<float>(queryLen, targetLen);
    zfForward = malloc_matrix<float>(queryLen, targetLen);
    zmBackward = malloc_matrix<float>(queryLen, targetLen);
    zeBackward = malloc_matrix<float>(queryLen, targetLen);
    zfBackward = malloc_matrix<float>(queryLen, targetLen);
    scoreForward = malloc_matrix<float>(queryLen, targetLen);
    scoreBackward = malloc_matrix<float>(queryLen, targetLen);
    P = malloc_matrix<float>(queryLen, targetLen);
    btMatrix = static_cast<uint8_t*>(mem_align(16, queryLen * targetLen * sizeof(uint8_t)));

    // Define block matrices
    // int length = targetLen / 4;
    vj = static_cast<float*>(mem_align(16, length * sizeof(float)));
    wj = static_cast<float*>(mem_align(16, length * sizeof(float)));

    // Matrices used outside forwardBackwardSaveBlockMaxLocal, so shape is blocks, queryLen
    zmaxBlocksMaxForward = malloc_matrix<float>(blocks, queryLen);
    zmaxBlocksMaxBackward = malloc_matrix<float>(blocks, queryLen);

    // Matrices used inside forwardBackwardSaveBlockMaxLocal, so shape is queryLen + 1
    zmaxForward = static_cast<float*>(malloc((queryLen + 1) * sizeof(float)));
    memset(zmaxForward, 0, (queryLen + 1) * sizeof(float)); 
    zmaxBackward = static_cast<float*>(malloc((queryLen + 1) * sizeof(float)));
    memset(zmaxBackward, 0, (queryLen + 1) * sizeof(float)); 

    //Debug: print blosum
    // std::cout << "blosum" << std::endl;
    // for (int i = 0; i < 21; ++i) {
    //     for (int j = 0; j < 21; ++j) {
    //         std::cout << blosum[i][j] << " ";
    //     }
    //     std::cout << std::endl;
    // }
}


void FwBwAligner::computeForwardScoreMatrix(
    unsigned char* query_aa_seq,
    unsigned char* query_3di_seq,
    unsigned char* target_aa_seq,
    unsigned char* target_3di_seq,
    unsigned int queryLen,
    unsigned int targetLen,
    short** query_profile_scores_aa,
    short** query_profile_scores_3di,
    short** target_profile_scores_aa,
    short** target_profile_scores_3di,
    float T,
    float ** scoreForward
) {
    short* query_profile_aa;
    short* query_profile_3di;
    short* target_profile_aa;
    short* target_profile_3di;
    for (size_t i = 0; i < queryLen; ++i) {
        target_profile_aa = target_profile_scores_aa[query_aa_seq[i]];
        target_profile_3di = target_profile_scores_3di[query_3di_seq[i]]; 
        for (size_t j = 0; j < targetLen; ++j) {
            query_profile_aa  = query_profile_scores_aa[target_aa_seq[j]];
            query_profile_3di = query_profile_scores_3di[target_3di_seq[j]];
            scoreForward[i][j] = static_cast<float>(
                (static_cast<float>(query_profile_aa[i]) + static_cast<float>(target_profile_aa[j])) / 2.0
                + (static_cast<float>(query_profile_3di[i]) + static_cast<float>(target_profile_3di[j])) / 2.0
            ) / 2.0;
            scoreForward[i][j] = exp(scoreForward[i][j] / T);
        }
    }
}


FwBwAligner::~FwBwAligner(){
    free(scoreForward);
    free(scoreBackward);
    free(zmForward);
    free(zeForward);
    free(zfForward);
    free(zmBackward);
    free(zeBackward);
    free(zfBackward);
    free(P);
    free(btMatrix);
    free(zmaxBlocksMaxForward);
    free(zmaxBlocksMaxBackward);
    free(zmaxForward);
    free(zmaxBackward);
    free(vj);
    free(wj);
    // free(blosum);
}

FwBwAligner::s_align FwBwAligner::align(
    unsigned char * query_aa_seq,
    unsigned char * query_3di_seq,
    unsigned char * target_aa_seq,
    unsigned char * target_3di_seq,
    size_t queryLen,
    size_t targetLen,
    size_t length,
    size_t blocks,
    short** query_profile_scores_aa,
    short** query_profile_scores_3di,
    short** target_profile_scores_aa,
    short** target_profile_scores_3di,
    const float mact,
    const float T,
    const float go,
    const float ge
){
    computeForwardScoreMatrix(
        query_aa_seq,
        query_3di_seq,
        target_aa_seq,
        target_3di_seq,
        queryLen,
        targetLen,
        query_profile_scores_aa,
        query_profile_scores_3di,
        target_profile_scores_aa,
        target_profile_scores_3di,
        T,
        scoreForward
    );
    for (size_t i = 0; i < queryLen; ++i) {
        for (size_t j = 0; j < targetLen; ++j) {
            scoreBackward[i][j] = scoreForward[queryLen - 1 - i][targetLen - 1 - j];
        }
    }
    // Debug: print scoreforward
    // std::cout << "scoreForward: " << std::endl;
    // for (size_t i = 0; i < queryLen; ++i) {
    //     for (size_t j = 0; j < targetLen; ++j) {
    //         std::cout << std::fixed << std::setprecision(4) << scoreForward[i][j] << "\t";
    //     }
    //     std::cout << '\n';
    // }
    // std::cout << '\n';
    // Debug: print scorebackward
    // std::cout << "scoreBackward" << std::endl;
    // for (size_t i = 0; i < queryLen; ++i) {
    //     for (size_t j = 0; j < targetLen; ++j) {
    //         std::cout << scoreBackward[i][j] << " ";
    //     }
    // }
    //     std::cout << std::endl;


    // size_t length = targetLen / 4;
    // std::cout << " queryLen: " << queryLen << " targetLen: " << targetLen << " length: " << length << " blocks: " << blocks << std::endl;
    for (size_t i = 0; i < length; ++i) {
        vj[i] = exp(((length - 1) * ge + go - i * ge) / T);
        wj[i] = exp(((length - 1) * ge - i * ge) / T);
    }
    
    float fltmax = std::numeric_limits<float>::max();
    for (size_t i = 0; i < queryLen; ++i) {
        for (size_t j = 0; j < targetLen; ++j) {
            zmForward[i][j]  = -fltmax;
            zeForward[i][j]  = -fltmax;
            zfForward[i][j]  = -fltmax;
            zmBackward[i][j] = -fltmax;
            zeBackward[i][j] = -fltmax;
            zfBackward[i][j] = -fltmax;
        }
    }
    // zmForward[0][0] = 0.0;
    // zeForward[0][0] = 0.0;
    // zfForward[0][0] = 0.0;

    //initialize zInit
    float* zInitForward[3];
    zInitForward[0] = new float[queryLen];
    zInitForward[1] = new float[queryLen];
    zInitForward[2] = new float[queryLen];

    for (unsigned int i=0; i < queryLen; ++i){
        zInitForward[0][i] = zmForward[i][0];
        zInitForward[1][i] = zeForward[i][0];
        zInitForward[2][i] = zfForward[i][0];
    }
    // float** zmaxBlocksMaxForward = malloc_matrix<float>(blocks + 1, queryLen + 1);
    // std::cout << "Forward start" << std::endl;
    for (size_t b = 0; b < blocks; ++b) {
        size_t start = b * length;
        size_t end = (b + 1) * length;
        // std::cout << "Block: " << b << " start " << start << " end " << end << std::endl;
        // number of cols to memcpy in forwardBackwardSaveBlockMaxLocal
        size_t memcpy_cols = std::min(end, targetLen) - start;
        forwardBackwardSaveBlockMaxLocal(scoreForward, zInitForward, vj, wj, T, go, ge, queryLen, start, end, memcpy_cols,
                                         zmForward, zeForward, zfForward,
                                         zmaxForward);
        
        memcpy(zmaxBlocksMaxForward[b], zmaxForward, queryLen * sizeof(float));
    }

    ///////////////////////////////////Backward////////////////////////////////////////

    float* zInitBackward[3];
    zInitBackward[0] = new float[queryLen];
    zInitBackward[1] = new float[queryLen];
    zInitBackward[2] = new float[queryLen];

    for (unsigned int i=0; i < queryLen; ++i){
        zInitBackward[0][i] = zmBackward[i][0];
        zInitBackward[1][i] = zeBackward[i][0];
        zInitBackward[2][i] = zfBackward[i][0];
    }

    // float** zmaxBlocksMaxBackward = malloc_matrix<float>(blocks+1, queryLen + 1);
    // memcpy(zmaxBlocksMaxBackward[0], zmaxBackward, (queryLen + 1) * sizeof(float));
    // std::cout << "Backward start" << std::endl;
    for (size_t b = 0; b < blocks; ++b) {
        // std::cout << "Block " << b << std::endl;
        size_t start = b * length;
        size_t end = (b + 1) * length;
        size_t memcpy_cols = std::min(end, targetLen) - start;
        
        forwardBackwardSaveBlockMaxLocal(scoreBackward, zInitBackward, vj, wj, T, go, ge, queryLen, start, end, memcpy_cols,
                                         zmBackward, zeBackward, zfBackward,
                                         zmaxBackward);
        memcpy(zmaxBlocksMaxBackward[b], zmaxBackward, queryLen * sizeof(float));
    }

    ///////////////////////////////////Rescale////////////////////////////////////////
    // Rescale the values by the maximum in the log space for each block
    // This turns the matrix into log space
    // Debug:: print zmForward before rescaling
    // std::cout << "zmForward before rescaling: " << std::endl;
    // for (size_t i = 0; i < queryLen; ++i) {
    //     for (size_t j = 0; j < targetLen; ++j) {
    //         std::cout << zmForward[i][j] << " ";
    //     }
    //     std::cout << std::endl;
    // }
    // // Debug: print zmaxBlocksMaxForward
    // std::cout << "zmaxBlocksMaxForward: " << std::endl;
    // // print number of rows and columns of zmaxBlocksMaxForward
    // std::cout << "rows: " << blocks << " columns: " << queryLen << std::endl;

    // for (size_t i = 0; i < blocks; ++i) {
    //     for (size_t j = 0; j < queryLen; ++j) {
    //         std::cout << zmaxBlocksMaxForward[i][j] << " ";
    //     }
    //     std::cout << std::endl;
    // }
    rescaleBlocks(zmForward, zmaxBlocksMaxForward, queryLen, length, blocks, targetLen);
    rescaleBlocks(zmBackward, zmaxBlocksMaxBackward, queryLen, length, blocks, targetLen);
    // Debug:: print zmForward
    // std::cout << "zmForward after rescaling: " << std::endl;
    // for (size_t i = 0; i < queryLen; ++i) {
    //     for (size_t j = 0; j < targetLen; ++j) {
    //         std::cout << zmForward[i][j] << " ";
    //     }
    //     std::cout << std::endl;
    // }

   // compute zm max
    float max_zm = -std::numeric_limits<float>::max();
    for (size_t i = 0; i < queryLen; ++i) {
        for (size_t j = 0; j < targetLen; ++j) {
            max_zm = std::max(max_zm, zmForward[i][j]);
        }
    }
    // std::cout << "max zm\t" << max_zm << "\n";
    // Debug logsumexp_zm
    // float ze_11 = zeForward[queryLen - 1][targetLen - 1] + max_zm;
    // float zf_11 = zfForward[queryLen - 1][targetLen - 1] + max_zm;
    // float max_val = std::max({max_zm, ze_11, zf_11});
    // float logsumexp_zm_mine = max_val + log(exp(max_zm - max_val) + exp(ze_11 - max_val) + exp(zf_11 - max_val));

    // compute sum_exp
    float sum_exp= 0.0;
    for (size_t i = 0; i < queryLen; ++i) {
        for (size_t j = 0; j < targetLen; ++j) {
            sum_exp += exp(zmForward[i][j] - max_zm);
        }
    }
    float logsumexp_zm = max_zm + log(sum_exp);

    // compute posterior probabilities
    float maxP = -std::numeric_limits<float>::max();
    for (size_t i = 0; i < queryLen; ++i) {
        for (size_t j = 0; j < targetLen; ++j) {
            // Debug(Debug::INFO) << zmForward[i][j] << '\t' << zmBackward[queryLen - 1 - i][targetLen - 1 - j] << '\n';
            P[i][j] = exp(
                zmForward[i][j]
                + zmBackward[queryLen - 1 - i][targetLen - 1 - j]
                - log(scoreForward[i][j]) // FIXME scoreForward is already exp(S/T)
                - logsumexp_zm
            );
            maxP = std::max(maxP, P[i][j]);
            // Debug(Debug::INFO) << P[i][j] << '\t';
        }
        // Debug(Debug::INFO) << '\n';
    }
    
    // MAC algorithm from HH-suite
    uint8_t val;
    size_t max_i = 0;
    size_t max_j = 0;
    float S_prev[targetLen + 1];
    float S_curr[targetLen + 1];
    float term1, term2, term3, term4 = 0.0f;
    float score_MAC = -std::numeric_limits<float>::max();
    S_prev[0] = 0.0f;
    for (size_t j = 1; j <= targetLen; ++j) {
        // S_prev[j] = S_prev[j - 1] - 0.5f * mact;
        S_prev[j] = 0.0f;
        // S_prev[j] = -fltmax;
    }
    for (size_t i = 0; i < queryLen; ++i) {
        // S_curr[0] = 0.0f;
        S_curr[0] = -fltmax;
        // if (i == 0) {
        //     S_curr[0] = -0.5f * mact;
        // } else {
        //     S_curr[0] = S_prev[0] - 0.5f * mact;
        // }
        for (size_t j = 0; j < targetLen; ++j) {
            term1 = P[i][j] - mact;
            // term1 = 0.0;
            term2 = S_prev[j] + P[i][j] - mact;
            term3 = S_prev[j + 1] - 0.5 * mact;
            term4 = S_curr[j] - 0.5 * mact;
            calculate_max4(S_curr[j + 1], term1, term2, term3, term4, val);

            // char state;
            // if (val == States::M) state = 'M';
            // else if (val == States::I) state = 'I';
            // else if (val == States::D) state = 'D';
            // else state = 'S';
            // Debug(Debug::INFO) << state << '\t';
            // if (state == 'S')
            //     Debug(Debug::INFO) << term1 << '\t' << term2 << '\t' << term3 << '\t' << term4 << '\t' << state << '\n';

            btMatrix[i * targetLen + j] = val;
            // Debug(Debug::INFO) << (int)val << '\t';
            // global (i == queryLen - 1 || j ==targetLen - 1) && 
            // Debug(Debug::INFO) << i << '\t' << j << '\t' << P[i][j] << '\t' << term1 << '\t' << term2 << '\t' << term3 << '\t' << term4 << '\t' << S_curr[j + 1] << '\n';
            // Debug(Debug::INFO) << i << '\t' << j << '\t' << S_curr[j + 1] << '\t' << score_MAC << '\n';
            if (i == queryLen -1 && S_curr[j + 1] > score_MAC) {
                max_i = i;
                max_j = j;
                score_MAC = S_curr[j + 1];
            }
        }
        // if (S_curr[targetLen - 1] > score_MAC) {
        //     max_i = i;
        //     max_j = targetLen - 1;
        //     score_MAC = S_curr[targetLen - 1];
        // }
        // Debug(Debug::INFO) << '\n';
        for (size_t j = 0; j <= targetLen; ++j) {
            S_prev[j] = S_curr[j];
        }
    }
    // Debug(Debug::INFO) << '\n';
    // max_i = queryLen - 1;
    // max_j = targetLen - 1;

    // traceback 
    s_align result;
    result.cigar = "";
    result.cigar.reserve(queryLen + targetLen);
    result.qEndPos1 = max_i;
    result.dbEndPos1 = max_j;
    result.score1 = maxP;
    result.score2 = score_MAC;
    // while (max_i > 0 && max_j > 0) {
    while (true) {
        uint8_t state = btMatrix[max_i * targetLen + max_j];
        if (state == States::M) {
            result.cigar.push_back('M');
            if (max_i == 0 || max_j == 0) break;
            --max_i;
            --max_j;
        } else if (state == States::I) {
            result.cigar.push_back('I');
            if (max_j == 0) break;
            --max_j;
        } else if (state == States::D) {
            result.cigar.push_back('D');
            if (max_i == 0) break;
            --max_i;               
        } else {
            break;
        }
    }
    result.qStartPos1 = max_i;
    result.dbStartPos1 = max_j;
    result.cigarLen = result.cigar.length();
    std::reverse(result.cigar.begin(), result.cigar.end());

    delete[] zInitForward[0];
    delete[] zInitForward[1];
    delete[] zInitForward[2];
    delete[] zInitBackward[0];
    delete[] zInitBackward[1];
    delete[] zInitBackward[2];

    return result;
}

void FwBwAligner::forwardBackwardSaveBlockMaxLocal(float** S, float** z_init,
                                                   float* vj, float* wj,
                                                   float T, float go, float ge,
                                                   size_t rows, size_t start, size_t end, size_t memcpy_cols,
                                                   float** zm, float** ze, float** zf, float* zmax) {
    float exp_go = exp(go / T);
    float exp_ge = exp(ge / T);
    
    float** zmBlock = malloc_matrix<float>(rows + 1, end - start + 1);
    float** zeBlock = malloc_matrix<float>(rows + 1, end - start + 1);
    float** zfBlock = malloc_matrix<float>(rows + 1, end - start + 1);
    
    //Init blocks
    memset(zmBlock[0], 0, (end - start + 1) * sizeof(float));
    memset(zeBlock[0], 0, (end - start + 1) * sizeof(float));
    memset(zfBlock[0], 0, (end - start + 1) * sizeof(float));

    // Initialize the first column of the segment starting from the second row
    for (size_t i = 0; i < rows; ++i) {
        zmBlock[i+1][0] = z_init[0][i];
        zeBlock[i+1][0] = z_init[1][i];
        zfBlock[i+1][0] = z_init[2][i];
    }

    size_t cols = memcpy_cols;
    float* exp_ge_arr = static_cast<float*>(mem_align(16, cols * sizeof(float)));
    for (size_t i = 0; i < cols; ++i) {
        exp_ge_arr[i] = exp((i * ge + ge) / T);
    }

    float current_max = 0;
    for (size_t i = 1; i <= rows; ++i) {
        if (i != 1) {
            zmBlock[i - 1][0] = exp(zmBlock[i - 1][0]);
            zeBlock[i - 1][0] = exp(zeBlock[i - 1][0]);
            zfBlock[i - 1][0] = exp(zfBlock[i - 1][0]);
            // Debug(Debug::INFO) << zmBlock[i - 1][0] << '\t';
        }
        const float expMax = exp(-current_max);
        #pragma omp simd
        for (size_t j = 1; j <= cols; ++j) {
            float tmp = (zmBlock[i - 1][j - 1] + zeBlock[i - 1][j - 1] + zfBlock[i - 1][j - 1] + expMax);
            zmBlock[i][j] = tmp * S[i - 1][start + j - 1];
        }
        
        float* zm_exp = static_cast<float*>(mem_align(16, cols * sizeof(float)));
        memcpy(zm_exp, zmBlock[i], cols * sizeof(float));
        zm_exp[0] = exp(zm_exp[0]);

        // Correct translation of the cumulative sum
        float cumulative_sum = 0;
        float ze_i0 = expf(zeBlock[i][0]);
        #pragma omp simd
        for (size_t j = 1; j <= cols; ++j) {
            cumulative_sum += zm_exp[j - 1] * vj[j - 1];
            zeBlock[i][j] = (cumulative_sum / wj[j - 1]) + ze_i0 * exp_ge_arr[j - 1];
        }
        #pragma omp simd
        for (size_t j = 1; j <= cols; ++j) {
            zfBlock[i][j] = (zmBlock[i - 1][j] * exp_go + zfBlock[i - 1][j] * exp_ge);
        }

        float z_temp = *std::max_element(zmBlock[i] + 1, zmBlock[i] + cols + 1);
        zmax[i-1] = log(z_temp);
        //zmax[i-1] = z_temp;
        current_max += zmax[i-1];
        #pragma omp simd
        for (size_t j = 1; j <= cols; ++j) {
            zmBlock[i][j] /= z_temp;
            zeBlock[i][j] /= z_temp;
            zfBlock[i][j] /= z_temp;
        }
        
        
        zmBlock[i][0] -= zmax[i-1];
        zeBlock[i][0] -= zmax[i-1];
        zfBlock[i][0] -= current_max;
        // zfBlock[i][0] -= zmax[i-1];
        if (i < rows) {
            zmBlock[i+1][0] -= current_max;
            zeBlock[i+1][0] -= current_max;
            // zfBlock[i+1][0] -= current_max;
        }
        
        // for (size_t j = i; j <= rows; ++j) {
        //     zmBlock[j][0] -= zmax[i-1];
        //     zeBlock[j][0] -= zmax[i-1];
        //     zfBlock[j][0] -= zmax[i-1];
        // }

        free(zm_exp);
    }
    // Debug(Debug::INFO) << '\n';

    //Calculate the cumulative sum of zmax[1:]
    std::vector<float> rescale(rows);
    // std::partial_sum(zmax + 1, zmax + rows + 1, rescale.begin());
    std::partial_sum(zmax, zmax + rows, rescale.begin());

    //Fixme
    // 
    for (size_t i = 0; i < rows; ++i) {
        z_init[0][i] = log(zmBlock[i + 1][memcpy_cols]) + rescale[i];
        z_init[1][i] = log(zeBlock[i + 1][memcpy_cols]) + rescale[i];
        z_init[2][i] = log(zfBlock[i + 1][memcpy_cols]) + rescale[i];
    }

    for (size_t i = 0; i < rows; ++i) {
        memcpy(zm[i] + start, zmBlock[i+1]+1, memcpy_cols * sizeof(float));
        memcpy(ze[i] + start, zeBlock[i+1]+1, memcpy_cols * sizeof(float));
        memcpy(zf[i] + start, zfBlock[i+1]+1, memcpy_cols * sizeof(float));
    }

    free(zmBlock);
    free(zeBlock);
    free(zfBlock);
    free(exp_ge_arr);
}

void FwBwAligner::rescaleBlocks(float **matrix, float **scale, size_t rows, size_t length, size_t blocks, size_t targetLen){
    // Function to rescale the values by the maximum in the log space for each block
    for (size_t b = 0; b < blocks; ++b) {
        size_t start = b * length;
        size_t end = std::min((b + 1) * length, targetLen);
        // size_t end = (b + 1) * length;
        std::vector<float> cumsum(rows);
        std::partial_sum(scale[b], scale[b] + rows, cumsum.begin());
        // DEBUG:: print cumsum vector for each block
        // std::cout << "block " << b << " cumsum: ";
        // for (size_t i = 0; i < rows; ++i) {
        //     std::cout << cumsum[i] << " ";
        // }
        // std::cout << std::endl;

        for (size_t i = 0; i < rows; ++i) {
            for (size_t j = start; j < end; ++j) {
                // matrix[i][j] = log(matrix[i][j]) ;// + cumsum[i-1];
                matrix[i][j] = log(matrix[i][j]) + cumsum[i];
            }
        }
    }
}