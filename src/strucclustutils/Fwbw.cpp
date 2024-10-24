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

FwBwAligner::FwBwAligner(size_t queryLen, size_t targetLen, size_t length, size_t blocks,
                         SubstitutionMatrix &subMat){

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

    // mat3di = malloc_matrix<float>(21, 21);
    blosum = malloc_matrix<float>(21, 21);
    for (int i = 0; i < subMat.alphabetSize; ++i) {
        for (int j = 0; j < subMat.alphabetSize; ++j) {
            blosum[i][j] = static_cast<float>(subMat.subMatrix[i][j]);
        }
    }
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
    unsigned char * query_aa_seq,
    unsigned char * query_3di_seq,
    unsigned char * target_aa_seq,
    unsigned char * target_3di_seq,
    unsigned int queryLen,
    unsigned int targetLen,
    short** query_profile_scores_aa,
    short** query_profile_scores_3di,
    short** target_profile_scores_aa,
    short** target_profile_scores_3di,
    float T,
    float ** scoreForward
) {
    for (size_t i = 0; i < queryLen; ++i) {
        const short *query_profile_aa  = query_profile_scores_aa[target_aa_seq[i]];
        const short *query_profile_3di = query_profile_scores_3di[target_3di_seq[i]];
        for (size_t j = 0; j < targetLen; ++j) {
            const short *target_profile_aa = target_profile_scores_aa[query_aa_seq[j-1]];
            const short *target_profile_3di = target_profile_scores_3di[query_3di_seq[j-1]]; 
            scoreForward[i][j] = static_cast<float>(
                (static_cast<float>(query_profile_aa[j-1]) + static_cast<float>(target_profile_aa[i])) / 2.0
                + (static_cast<float>(query_profile_3di[j-1]) + static_cast<float>(target_profile_3di[i])) / 2.0
            );
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
    free(blosum);
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
    float mact
){
    const float T = 10;
    const float go = -3.5;
    const float ge = -0.3;
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
    //         std::cout << scoreForward[i][j] << " ";
    //     }

    //     std::cout << std::endl;
    // }
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

    for (size_t i = 0; i < queryLen; ++i) {
        for (size_t j = 0; j < targetLen; ++j) {
            zmForward[i][j] = -DBL_MAX;
            zeForward[i][j] = -DBL_MAX;
            zfForward[i][j] = -DBL_MAX;
            zmBackward[i][j] = -DBL_MAX;
            zeBackward[i][j] = -DBL_MAX;
            zfBackward[i][j] = -DBL_MAX;
        }
    }

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
    for (size_t j = 0; j <= targetLen; ++j) {
        S_prev[j] = 0.0; 
        S_curr[j] = 0.0;
    }
    btMatrix[0] = States::STOP;
    for (size_t i = 0; i < queryLen; ++i) {
        for (size_t j = 0; j < targetLen; ++j) {
            term1 = P[i][j] - mact;
            term2 = S_prev[j] + P[i][j] - mact;
            term3 = S_prev[j + 1] - 0.5 * mact;
            term4 = S_curr[j] - 0.5 * mact;
            calculate_max4(S_curr[j + 1], term1, term2, term3, term4, val);
            btMatrix[i * targetLen + j] = val;
            // global (i == queryLen - 1 || j ==targetLen - 1) && 
            // Debug(Debug::INFO) << i << '\t' << j << '\t' << P[i][j] << '\t' << term1 << '\t' << term2 << '\t' << term3 << '\t' << term4 << '\t' << S_curr[j + 1] << '\n';
            // Debug(Debug::INFO) << i << '\t' << j << '\t' << S_curr[j + 1] << '\t' << score_MAC << '\n';
            if (S_curr[j + 1] > score_MAC) {
                max_i = i;
                max_j = j;
                score_MAC = S_curr[j + 1];
            }
        }
        for (size_t j = 0; j <= targetLen; ++j) {
            S_prev[j] = S_curr[j];
        }
    }

    // traceback 
    s_align result;
    result.cigar = "";
    result.cigar.reserve(queryLen + targetLen);
    result.qEndPos1 = max_i;
    result.dbEndPos1 = max_j;
    result.score1 = maxP;
    result.score2 = score_MAC;
    while (max_i > 0 && max_j > 0) {
        uint8_t state = btMatrix[max_i * targetLen + max_j];
        if (state == States::M) {
            --max_i;
            --max_j;
            result.cigar.push_back('M');
        } else if (state == States::I) {
            --max_j;
            result.cigar.push_back('I');
        } else if (state == States::D) {
            --max_i;
            result.cigar.push_back('D');
        } else {
            break;
        }
    }
    result.qStartPos1 = max_i;
    result.dbStartPos1 = max_j;
    result.cigarLen = result.cigar.length();
    std::reverse(result.cigar.begin(), result.cigar.end());
    
    // Debug(Debug::INFO) << result.qStartPos1 << '\t' << result.qEndPos1 << '\t' << result.score1 << '\t' << result.score2 << '\n';

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

int fwbw(int argc, const char **argv, const Command &command) {
    //Prepare the parameters & DB
    Parameters &par = Parameters::getInstance();
    par.parseParameters(argc, argv, command, true, 0, MMseqsParameter::COMMAND_ALIGN);
    DBReader<unsigned int> qdbr(par.db1.c_str(), par.db1Index.c_str(), par.threads, DBReader<unsigned int>::USE_DATA | DBReader<unsigned int>::USE_INDEX);
    qdbr.open(DBReader<unsigned int>::NOSORT);
    DBReader<unsigned int> tdbr(par.db2.c_str(), par.db2Index.c_str(), par.threads, DBReader<unsigned int>::USE_DATA | DBReader<unsigned int>::USE_INDEX);
    tdbr.open(DBReader<unsigned int>::NOSORT);
    DBReader<unsigned int> alnRes (par.db3.c_str(), par.db3Index.c_str(), par.threads, DBReader<unsigned int>::USE_DATA | DBReader<unsigned int>::USE_INDEX);
    alnRes.open(DBReader<unsigned int>::LINEAR_ACCCESS);

    DBWriter fwbwAlnWriter(par.db4.c_str(), par.db4Index.c_str(), par.threads, par.compressed, Parameters::DBTYPE_ALIGNMENT_RES);
    fwbwAlnWriter.open();

    // const size_t targetColumn = (par.targetTsvColumn == 0) ? SIZE_T_MAX :  par.targetTsvColumn - 1;

    // Initialize the alignment mode
    // float gapOpen, gapExtend, Temperature;
    const int querySeqType = qdbr.getDbtype();
    if (Parameters::isEqualDbtype(querySeqType, Parameters::DBTYPE_NUCLEOTIDES)) {
        // m = new NucleotideMatrix(par.scoringMatrixFile.values.nucleotide().c_str(), 1.0, par.scoreBias);
        // gapOpen = par.gapOpen.values.nucleotide();
        // gapExtend = par.gapExtend.values.nucleotide();
        Debug(Debug::ERROR) << "Invalid datatype. Nucleotide.\n";
        EXIT(EXIT_FAILURE);
    } 
    SubstitutionMatrix subMat = SubstitutionMatrix(par.scoringMatrixFile.values.aminoacid().c_str(), 8.0, par.scoreBias); // Check : par.scoreBias = 0.0
        // gapOpen = -3.5;
        // gapExtend = -0.3;
        // Temperature = 10;

    const size_t flushSize = 100000000;
    size_t iterations = static_cast<int>(ceil(static_cast<double>(alnRes.getSize()) / static_cast<double>(flushSize)));
    Debug(Debug::INFO) << "Processing " << iterations << " iterations\n";
    for (size_t i = 0; i < iterations; i++) {
        size_t start = (i * flushSize);
        size_t bucketSize = std::min(alnRes.getSize() - (i * flushSize), flushSize);
        Debug::Progress progress(bucketSize);

#pragma omp parallel
        {
            unsigned int thread_idx = 0;

#ifdef OPENMP
            thread_idx = (unsigned int) omp_get_thread_num();
#endif
            const char *entry[255];
            // std::string alnResultsOutString;
            // alnResultsOutString.reserve(1024*1024);
            std::string alnResultsOutString;
            char buffer[1024 + 32768*4];
            std::vector<Matcher::result_t> alnResults;
            alnResults.reserve(300);
            std::vector<Matcher::result_t> localFwbwResults;
#pragma omp for schedule(dynamic,1)
            for (size_t id = start; id < (start + bucketSize); id++) {
                progress.updateProgress();
                unsigned int key = alnRes.getDbKey(id);
                //Debug(Debug::INFO) << "start " << id << "\n";
                const unsigned int queryId = qdbr.getId(key);
                const unsigned int queryKey = qdbr.getDbKey(queryId);
                char *alnData = alnRes.getData(id, thread_idx);
                alnResults.clear();
                localFwbwResults.clear();
                while (*alnData!='\0'){
                    const size_t columns = Util::getWordsOfLine(alnData, entry, 255);
                    if (columns >= Matcher::ALN_RES_WITHOUT_BT_COL_CNT) {
                        alnResults.emplace_back(Matcher::parseAlignmentRecord(alnData, true));                        
                    } else {
                        Debug(Debug::ERROR) << "Invalid input result format ("<<columns<<" columns).\n";
                        EXIT(EXIT_FAILURE);
                    }
                    alnData = Util::skipLine(alnData);
                }
                if (alnResults.size() == 0){
                    continue;
                }

                // FIXME:: Temporary way to fix the issue of the last newline character in the sequence
                const char* originalQuerySeq = qdbr.getData(queryKey, thread_idx);
                size_t qlen = strlen(originalQuerySeq); 
                char* querySeq = new char[qlen];
                if (qlen > 0 && originalQuerySeq[qlen - 1] == '\n') {
                    strncpy(querySeq, originalQuerySeq, qlen - 1);  // Copy all but the last character
                    querySeq[qlen - 1] = '\0';  // Null-terminate the new string
                } else {
                    strcpy(querySeq, originalQuerySeq);  // Copy the entire string if no newline
                }
                size_t queryLen = strlen(querySeq);


                fwbwAlnWriter.writeStart(thread_idx);
                // char * tmpBuff = Itoa::u32toa_sse2((uint32_t) queryKey, buffer);
                // *(tmpBuff-1) = '\t';
                // const unsigned int queryIdLen = tmpBuff - buffer;
                for (size_t i=0; i < alnResults.size(); i++){
                    unsigned int targetKey = alnResults[i].dbKey;

                    // FIXME:: Temporary way to fix the issue of the last newline character in the sequence
                    const char* originalTargetSeq = tdbr.getData(targetKey, thread_idx);
                    size_t len = strlen(originalTargetSeq); 
                    char* targetSeq = new char[len];
                    if (len > 0 && originalTargetSeq[len - 1] == '\n') {
                        strncpy(targetSeq, originalTargetSeq, len - 1);  // Copy all but the last character
                        targetSeq[len - 1] = '\0';  // Null-terminate the new string
                    } else {
                        strcpy(targetSeq, originalTargetSeq);  // Copy the entire string if no newline
                    }
                    size_t targetLen = strlen(targetSeq);


                    size_t length = 16;
                    size_t blocks = (targetLen / length) + (targetLen % length != 0);
                    FwBwAligner fwbwAligner(queryLen, targetLen, length, blocks, subMat);
                    FwBwAligner::s_align fwbwAlignment = fwbwAligner.align(querySeq, targetSeq, queryLen, targetLen, length, blocks, subMat, par.mact);
                    // initialize values of result_t
                    float qcov = 0.0;
                    float dbcov = 0.0;
                    float seqId = 0.0;
                    // float evalue = -fwbwAlignment.score2;
                    float evalue = 1.0f - fwbwAlignment.score1;

                    const unsigned int alnLength = fwbwAlignment.cigarLen;
                    const int score = 0;
                    const unsigned int qStartPos = fwbwAlignment.qStartPos1;
                    const unsigned int dbStartPos = fwbwAlignment.dbStartPos1;
                    const unsigned int qEndPos = fwbwAlignment.qEndPos1;
                    const unsigned int dbEndPos = fwbwAlignment.dbEndPos1;
                    std::string backtrace = fwbwAlignment.cigar;

                    // Debug(Debug::INFO) << fwbwAlignment.score1 << '\t' << fwbwAlignment.score2 << '\t' << backtrace << '\n';

                    // Map s_align values to result_t
                    localFwbwResults.emplace_back(targetKey, score, qcov, dbcov, seqId, evalue, alnLength, qStartPos, qEndPos, queryLen, dbEndPos, dbStartPos, targetLen, backtrace);
                    // FIXME: will not be needed after the newline character issue is fixed
                    delete[] targetSeq;
                }

                // sort local results. They will currently be sorted by first fwbwscore, then targetlen, then by targetkey.
                SORT_SERIAL(localFwbwResults.begin(), localFwbwResults.end(), Matcher::compareHits);
                for (size_t result = 0; result < localFwbwResults.size(); result++) {
                    size_t len = Matcher::resultToBuffer(buffer, localFwbwResults[result], true, true);
                    alnResultsOutString.append(buffer, len);
                }
                // Debug(Debug::INFO) << "debug " << alnResultsOutString.c_str() << " ";
                fwbwAlnWriter.writeData(alnResultsOutString.c_str(), alnResultsOutString.length(), queryKey, thread_idx);
                alnResultsOutString.clear();
                // for (size_t i=0; i < localFwbwResults.size(); i++){
                //     char* basePos = tmpBuff;
                //     tmpBuff = Util::fastSeqIdToBuffer(localFwbwResults[i].first, tmpBuff);
                //     *(tmpBuff-1) = '\t';
                //     const unsigned int probLen = tmpBuff - basePos;
                //     size_t alnLen = Matcher::resultToBuffer(tmpBuff, localFwbwResults[i].second, par.addBacktrace);
                //     fwbwAlnWriter.writeAdd(buffer, queryIdLen+probLen+alnLen, thread_idx);
                // }
                // fwbwAlnWriter.writeEnd(queryKey, thread_idx);
                alnResults.clear();
                localFwbwResults.clear();
                //Debug(Debug::INFO) << "end " << id << "\n";
                
                // FIXME: will not be needed after the newline character issue is fixed
                delete[] querySeq;
            }
        }
        alnRes.remapData();
    }
    Debug(Debug::INFO) << "All Done\n";
    fwbwAlnWriter.close();
    alnRes.close();
    qdbr.close();
    tdbr.close();
    return EXIT_SUCCESS;

}