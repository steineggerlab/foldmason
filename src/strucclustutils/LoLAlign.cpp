#ifndef LoLAlign
#define LoLAlign
#include <iostream>
#include <algorithm>
#include <limits>
#include <cfloat>
#include <numeric>
#include <cmath>
#include <vector>
#include <fstream>
#include "LoLAlign.h"
#include "Fwbw.h"
#include "Debug.h"
#include "DBReader.h"
#include "DBWriter.h"
#include "IndexReader.h"
#include "SubstitutionMatrix.h"
#include "Matcher.h"
#include "Util.h"
#include "Coordinate16.h"



bool compareHitsBylolScore(const Matcher::result_t &first, const Matcher::result_t &second) {
    return first.eval > second.eval;
}



lolAlign::lolAlign(unsigned int maxSeqLen, bool computeExactScore)
        : xtm(maxSeqLen), ytm(maxSeqLen), xt(maxSeqLen),
          r1(maxSeqLen), r2(maxSeqLen), computeExactScore(computeExactScore)
{
    query_x = (float *)mem_align(ALIGN_FLOAT, maxSeqLen * sizeof(float));
    query_y = (float *)mem_align(ALIGN_FLOAT, maxSeqLen * sizeof(float));
    query_z = (float *)mem_align(ALIGN_FLOAT, maxSeqLen * sizeof(float));
    target_x = (float *)mem_align(ALIGN_FLOAT, maxSeqLen * sizeof(float));
    target_y = (float *)mem_align(ALIGN_FLOAT, maxSeqLen * sizeof(float));
    target_z = (float *)mem_align(ALIGN_FLOAT, maxSeqLen * sizeof(float));
    d_ij = malloc_matrix<float>(maxSeqLen, maxSeqLen);
    d_kl = malloc_matrix<float>(maxSeqLen, maxSeqLen);
    //P = malloc_matrix<float>(maxSeqLen, maxSeqLen);
}



lolAlign::~lolAlign()
{
    free(query_x);
    free(query_y);
    free(query_z);
    free(target_x);
    free(target_y);
    free(target_z);
    free(d_ij);
    free(d_kl);
    free(P);
    free(G);
    free(anchor_query);
    free(anchor_target);
    free(hidden_layer);
    free(sa_index);
    free(sa_scores);
    free(anchor_length);
    free(new_anchor_length);
    free(gaps);
    free(lol_dist);
    free(lol_seq_dist);
    free(lol_score_vec);
    free(final_anchor_query);
    free(final_anchor_target);


}


void lolAlign::reallocate_target(size_t targetL){
    free(d_kl);
    d_kl = malloc_matrix<float>(targetL, targetL);
    free(G);
    G = malloc_matrix<float>(queryLen, targetL);
    free(P);
    P = malloc_matrix<float>(queryLen, targetL);
    free(hidden_layer);
    hidden_layer = malloc_matrix<float>(targetL, 3);
    free(anchor_target);
    anchor_target = malloc_matrix<int>(num_sa, targetL);
    free(lol_dist);
    lol_dist = new float[targetL];
    free(lol_seq_dist);
    lol_seq_dist = new float[targetL];
    free(lol_score_vec);
    lol_score_vec = new float[targetL];  
    free(final_anchor_target);
    final_anchor_target = new int[targetL];
    free(final_anchor_query);
    final_anchor_query = new int[queryLen];




}

void lolAlign::calc_gap(int* anchor_query, int* anchor_target, int * gaps,  int queryLen, int targetLen)
{
    gaps[0] = -1;
    int index_q = gaps[1];
    int index_t = gaps[3];
    while(anchor_query[index_q] != 0 || anchor_target[index_t] != 0)
    {
        if (anchor_query[index_q] != 0 && anchor_target[index_t] != 0)
        {
            index_q++;
            index_t++;
        }
        else if (anchor_query[index_q] == 0)
        {
            index_q++;
        }
        else if (anchor_target[index_t] == 0)
        {
            index_t++;
        }
        if (index_q == queryLen || index_t == targetLen)
        {
            gaps[0] = -1;
            return;
        }
    }
    gaps[0] = index_q;
    gaps[2] = index_t;
    while(anchor_query[index_q] == 0 || anchor_target[index_t] == 0){

        if(anchor_query[index_q] == 0 && anchor_target[index_t] == 0){
            index_q++;
            index_t++;
        }
        else if(anchor_query[index_q] == 0){
            index_q++;
        }
        else if(anchor_target[index_t] == 0){
            index_t++;
        }
        if (index_q == queryLen || index_t == targetLen){
            index_q = queryLen;
            index_t = targetLen;
            break;
        }
    }
    gaps[1] = index_q;
    gaps[3] = index_t;
    return;

}
float lolAlign::maxSubArray(float* nums, int numsSize) {

    float currentMax = nums[0];
    float globalMax = nums[0];

    for (int i = 1; i < numsSize; ++i) {
        currentMax = std::max(nums[i], currentMax + nums[i]);
        globalMax = std::max(globalMax, currentMax);
    }

    return globalMax;
}

void lolAlign::index_sort(float* nums, int* index, int numsSize) {
    //std::iota(index, index + numsSize, 0);
    std::sort(index, index + numsSize, [&nums](int i1, int i2) { return nums[i1] < nums[i2]; });
}




Matcher::result_t lolAlign::align(unsigned int dbKey, float *target_x, float *target_y, float *target_z,
                                  char * targetSeq, char* target3diSeq, unsigned int targetLen, SubstitutionMatrix &subMatAA, SubstitutionMatrix &subMat3Di, FwBwAligner* fwbwaln)
{
    lolAlign::computeForwardScoreMatrix(
            querySeq,
            query3diSeq,
            targetSeq,
            target3diSeq,
            queryLen,
            targetLen,
            subMatAA,
            subMat3Di,
            start_anchor_T,
            G);



    int maxIndexX = 0;
    int maxIndexY = 0;
    
    for(int i = 0; i < num_sa; i++){
        sa_index[i] = i;
        sa_scores[i] = 0;
    }

    calc_dist_matrix(target_x, target_y, target_z, targetLen, d_kl, false);


    
    

    for(int sa = 0; sa < 10; sa++){
        anchor_length[sa] = 0;
        new_anchor_length[sa] = 0;
        for (unsigned int i = 0; i < queryLen; i++) {
            anchor_query[sa][i] = 0;
        }
        for (unsigned int i = 0; i < targetLen; i++) {
            anchor_target[sa][i] = 0;
        }
    }

    gaps[0] = 0;
    gaps[1] = queryLen;
    gaps[2] = 0;
    gaps[3] = targetLen;

    fwbwaln->setParams(start_anchor_go, start_anchor_ge, start_anchor_T, 16);



    for(int sa = 0; sa < 10; sa++){

        if(sa % 5 == 0){
            fwbwaln->initScoreMatrix(G, targetLen, queryLen, gaps);
            fwbwaln->computeProbabilityMatrix(false);
            //float** fwbwaln_zm = fwbwaln.getZm();
            for (size_t i = 0; i < queryLen; ++i)
            {
                for (size_t j = 0; j < targetLen; ++j)
                {
                    P[i][j] = fwbwaln->zm[i][j];
                }
            }
            //lolAlign::lol_fwbw(G, P, queryLen, targetLen, assignTargetLen, start_anchor_go, start_anchor_ge, start_anchor_T, length, blocks, gaps_start);
        }
        
        


        maxIndexX = 0;
        maxIndexY = 0;

        float maxScore = 0;

        for (int i = this->start_anchor_length; i < static_cast<int>(queryLen) - this->start_anchor_length ; ++i) {
            for (int j = this->start_anchor_length; j < static_cast<int>(targetLen) - this->start_anchor_length ; ++j) {
                if (P[i][j] >= maxScore) {
                    maxScore = P[i][j];
                    maxIndexX = i;
                    maxIndexY = j;
                }
            }
        }



        int start_row = maxIndexX - std::min(maxIndexX, maxIndexY);
        int start_col = maxIndexY - std::min(maxIndexX, maxIndexY);
        int diag_length = std::min(queryLen - start_row, targetLen - start_col);
        for(int i = 0; i < diag_length; i++){
            lol_score_vec[i] = G[start_row + i][start_col + i] *start_anchor_T;
        }
        




        for(int i = -start_anchor_length; i < start_anchor_length; i++){
            for(int j=0; j<diag_length; j++){

                if(d_ij[maxIndexX+i][start_row + j] > 0){

                    lol_dist[j] = std::abs(d_ij[maxIndexX+i][start_row + j] - d_kl[maxIndexY+i][start_col+j]);
                   
                    lol_seq_dist[j] =  std::copysign(1.0f, (maxIndexX+i - start_row + j)) * std::log(1 + std::abs((float)(maxIndexX+i - start_row + j)));

                    //std::cout << "diag_row_dist[" << j<< "]: " << diag_row_dist[j] - diag_col_dist[j] << std::endl;
                }
                else{
                    lol_dist[j] = -1;
                    //diag_col_dist[j] = 0;
                    lol_seq_dist[j] = 0;
                }
            }

            lolscore(lol_dist, lol_seq_dist, lol_score_vec, diag_length, hidden_layer);
        }
        sa_scores[sa] = maxSubArray(lol_score_vec, diag_length);
        align_startAnchors(anchor_query[sa], anchor_target[sa], maxIndexX, maxIndexY, &new_anchor_length[sa], P, G);
        anchor_length[sa] = new_anchor_length[sa];


    }
    for (size_t i = 0; i < queryLen; ++i)
    {
        for (size_t j = 0; j < targetLen; ++j)
        {
            G[i][j] = 0;
            P[i][j] = 0;
        }
    }

    index_sort(sa_scores, sa_index, 10);



    int* gaps = new int[4]{0, 0, 0, 0};
    fwbwaln->setParams(lol_go, lol_ge, 1, 16);
    int sa;

    for (int sa_it = 0; sa_it < 3; sa_it++){
        sa = sa_index[9 - sa_it];
        //std::cout << "sa: " << sa << std::endl;
        for(int iteration = 0; iteration < 1000; iteration++){
            //std::cout << "iteration: " << iteration << std::endl;

            gaps[0] = 0;
            gaps[1] = 0;
            gaps[2] = 0;
            gaps[3] = 0;
            while((gaps[1] < queryLen && gaps[3] < targetLen)){

                calc_gap(anchor_query[sa], anchor_target[sa], gaps, queryLen, targetLen);

                if (gaps[0] != -1){
                    lolmatrix(anchor_query[sa], anchor_target[sa], new_anchor_length[sa], gaps, d_ij, d_kl, G, queryLen, targetLen, hidden_layer, lol_dist, lol_score_vec);

                }

                else{
                    break;
                }
                //std::cout << "gaps[0]: " << gaps[0] << " gaps[1]: " << gaps[1] << " gaps[2]: " << gaps[2] << " gaps[3]: " << gaps[3] << std::endl;
                //std::cout << "queryLen: " << queryLen << " targetLen: " << targetLen << std::endl;

            }
            for(unsigned int i = 0; i <queryLen; i++){
                if(anchor_query[sa][i] == 2){
                    anchor_query[sa][i] = 1;
                }
            }
            for(unsigned int i = 0; i <targetLen; i++){
                if(anchor_target[sa][i] == 2){
                    anchor_target[sa][i] = 1;
                }
            }
            new_anchor_length[0] = 0;

            gaps[0] = 0;
            gaps[1] = 0;
            gaps[2] = 0;
            gaps[3] = 0;
            float maxP = 0.5;

            while((gaps[1] < queryLen && gaps[3] < targetLen)){
                calc_gap(anchor_query[sa], anchor_target[sa], gaps, queryLen, targetLen);
                if(gaps[0] != -1){
                    fwbwaln->initScoreMatrix(G, gaps[3]-gaps[2], gaps[1]-gaps[0], gaps);
                    fwbwaln->computeProbabilityMatrix(false);
                    //float** fwbwaln_zm = fwbwaln.getZm();
                    for (size_t i = gaps[0]; i < gaps[1]; ++i)
                    {
                        for (size_t j = gaps[2]; j < gaps[3]; ++j)
                        {
                            P[i][j] = fwbwaln->zm[i - gaps[0]][j - gaps[2]];
                        }
                    }
                    //lolAlign::lol_fwbw(G, P, queryLen, targetLen, assignTargetLen, start_anchor_go, start_anchor_ge, 2, length, blocks, gaps);

                }
                //std::cout << "gaps[0]: " << gaps[0] << " gaps[1]: " << gaps[1] << " gaps[2]: " << gaps[2] << " gaps[3]: " << gaps[3] << std::endl;


                if (gaps[0] != -1){
                    for (int i = gaps[0]; i < gaps[1]; i++){
                        for (int j = gaps[2]; j < gaps[3]; j++){
                            if (P[i][j] > maxP){
                                maxIndexX = i;
                                maxIndexY = j;
                                maxP = P[i][j];
                                //std::cout << "maxP: " << maxP <<   std::endl;
                                //std::cout << "maxIndexX: " << maxIndexX << " maxIndexY: " << maxIndexY << std::endl;
                            }
                        }
                    }
                }
                else{
                    break;
                }

            }

            new_anchor_length[sa] = 0;

            for(unsigned int i = 0; i < queryLen; i++){
                for(unsigned int j = 0; j < targetLen; j++){
                    if(P[i][j] > maxP -0.1){
                        if(anchor_query[sa][i] == 0 && anchor_target[sa][j] == 0){
                            anchor_query[sa][i] = 2;
                            anchor_target[sa][j] = 2;
                            anchor_length[sa] +=1;
                            new_anchor_length[sa] += 1;
                            //std::cout << "anchor_query[" << i << "]" << "anchor_target[" << j << "] " << P[i][j] << " " << maxP << std::endl;
                        }
                    }
                }
            }
            if (new_anchor_length[sa] == 0){
                break;

            }
        }

        /*if(true){
        
            std::ofstream outfile("/home/lasse/Desktop/Projects/FB_martin/zmForward.txt");
            if (outfile.is_open())
            {
                for (size_t i = 0; i < queryLen; ++i)
                {
                    for (size_t j = 0; j < targetLen; ++j)
                    {
                        outfile << (G[i][j]) << " ";
                    }
                    outfile << "\n";
                }
                outfile.close();
            }
            else
            {
                std::cerr << "Unable to open file for writing P matrix." << std::endl;
            }

            std::ofstream outfile2("/home/lasse/Desktop/Projects/FB_martin/P_mat.txt");
            if (outfile2.is_open())
            {
                for (size_t i = 0; i < queryLen; ++i)
                {

                    for (size_t j = 0; j < targetLen; ++j){
                        outfile2 <<  P[i][j] << " ";
                        //if(i==j && anchor_query[i] != 0 && anchor_target[j] != 0){
                        //    outfile2 << 1  << " ";
                       // }
                        //else
                        //{
                        //    outfile2 << 0 << " ";
                       // }
                   }
                    outfile2 << "\n";
                }

                outfile2.close();
            }
            else
            {
                std::cerr << "Unable to open file for writing P matrix." << std::endl;
            }
        }*/
    for (size_t i = 0; i < queryLen; ++i)
        {
            for (size_t j = 0; j < targetLen ; ++j)
            {
                G[i][j] = 0;
                P[i][j] = 0;
            }
        }

    }

    float max_lol_score = 0.0;
    int max_lol_idx = 0;
    for (int sa_it = 0; sa_it < 3; sa_it++){
        sa = sa_index[9 - sa_it];

        for (int i = 0; i < anchor_length[sa]; i++) {
            lol_score_vec[i] = 0.0;
        }


        
        int sa_idx = 0;
        for(unsigned int i = 0; i < queryLen; i++){
            if(anchor_query[sa][i] != 0){
                final_anchor_query[sa_idx] = i;
                sa_idx++;
            }
        }
        sa_idx = 0;
        for(unsigned int i = 0; i < targetLen; i++){
            if(anchor_target[sa][i] != 0){
                final_anchor_target[sa_idx] = i;
                sa_idx++;
            }
        }

        



        for (int i = 0; i < anchor_length[sa]; i++) {
            for (int j = 0;j < anchor_length[sa]; j++) {
                if(d_ij[final_anchor_query[i]][final_anchor_query[j]] > 0.0){
                    lol_dist[j] = std::abs(d_ij[final_anchor_query[i]][final_anchor_query[j]] - d_kl[final_anchor_target[i]][final_anchor_target[j]]);
                    //anchor_dist_target[j] = d_kl[final_anchor_target[i]][final_anchor_target[j]];
                    lol_seq_dist[j] = std::copysign(1.0f, (final_anchor_query[i]-final_anchor_query[j])) * std::log(1 + std::abs((float)(final_anchor_query[i]-final_anchor_query[j])));
                }
                else{
                    lol_dist[j] = -1;
                    //anchor_dist_target[j] = 0;
                    lol_seq_dist[j] = 0;
                }
            }
            lolscore(lol_dist, lol_seq_dist, lol_score_vec, anchor_length[sa], hidden_layer);
            //lol_score[i] += scoreForward[final_anchor_query[i]][final_anchor_target[i]];

        }

        float total_lol_score = 0.0;
        for (int i = 0; i < anchor_length[sa]; i++) {
            total_lol_score += lol_score_vec[i];

        }
        //TODO add normalization to improve performance
        //total_lol_score = total_lol_score; // std::sqrt((float)queryLen * (float)targetLen);
        if (total_lol_score > max_lol_score){
            max_lol_score = total_lol_score;
            max_lol_idx = sa;
        }
    }
    std::string backtrace = "";
    int matches = 0;
    int q_count = 0;
    int t_count = 0;


    while(matches < anchor_length[max_lol_idx]){
        if(anchor_query[max_lol_idx][q_count] != 0 && anchor_target[max_lol_idx][t_count] != 0){
            backtrace.append(1, 'M');
            matches++;
            q_count++;
            t_count++;
        }
        else if(anchor_query[max_lol_idx][q_count] != 0 && anchor_target[max_lol_idx][t_count] == 0){
            backtrace.append(1, 'D');
            t_count++;
        }
        else if(anchor_query[max_lol_idx][q_count] == 0 && anchor_target[max_lol_idx][t_count] != 0){
            backtrace.append(1, 'I');
            q_count++;
        }
        else if(anchor_query[max_lol_idx][q_count] == 0 && anchor_target[max_lol_idx][t_count] == 0){
            backtrace.append(1, 'D');
            backtrace.append(1, 'I');
            q_count++;
            t_count++;
        }
    }

    //free(G);
    //free(P);
    Matcher::result_t result = Matcher::result_t();
    result.score = max_lol_score / std::sqrt((float)queryLen * (float)targetLen);
    result.eval = max_lol_score / std::sqrt((float)queryLen * (float)targetLen);
    result.dbKey = dbKey;
    result.qStartPos = 0;
    result.dbStartPos = 0;
    result.qEndPos = queryLen - 1;
    result.dbEndPos = targetLen - 1;
    result.qLen = queryLen;
    result.dbLen = targetLen;
    result.alnLength = backtrace.length();
    result.backtrace = backtrace;

    // trim backtrace find the first 'M'
    size_t firstM = targetLen;
    int qLeftSkip = 0;
    int tLeftSkip = 0;
    for (size_t i = 0; i < backtrace.size(); i++) {
        if (backtrace[i] == 'M') {
            firstM = i;
            break;
        }
        if (backtrace[i] == 'I') {
            qLeftSkip++;
        } else if (backtrace[i] == 'D') {
            tLeftSkip++;
        }
    }
    /*if(firstM == targetLen){
        Debug(Debug::ERROR) << "No 'M' in backtrace.\n";
        std::cout << backtrace << std::endl;
        EXIT(EXIT_FAILURE);
    }*/

    result.qStartPos  += qLeftSkip;
    result.dbStartPos += tLeftSkip;
    result.qEndPos = result.qStartPos;
    result.dbEndPos = result.dbStartPos;
    for (size_t i = firstM; i < backtrace.size(); i++) {
        switch (backtrace[i]) {
            case 'M': // match consumes 1 base in query + 1 base in target
                result.qEndPos++;
                result.dbEndPos++;
                break;
            case 'I': // insertion consumes 1 base in query
                result.qEndPos++;
                break;
            case 'D': // deletion consumes 1 base in target
                result.dbEndPos++;
                break;
            default:
                // handle unexpected cigar chars if needed
                break;
        }
    }

    result.qEndPos--;
    result.dbEndPos--;
    result.backtrace = backtrace.substr(firstM);
    result.alnLength = (int)result.backtrace.size();


    //std::cout << fwbw_time.count() << " " << lol_score_time.count() << std::endl;
    return result;

}
void lolAlign::align_startAnchors(int *anchor_query, int *anchor_target, int max_query, int max_target, int *anchor_length, float** P, float** G){

    for (int i = max_query - this->start_anchor_length; i <= max_query + this->start_anchor_length; ++i)
    {
        int max_ind = max_target + i - max_query;

        anchor_query[i] = 2;
        anchor_target[max_ind] = 2;
        P[i][max_ind] = 0;
        G[i][max_ind] = 0;
        *anchor_length = *anchor_length + 1;

    }
}


/*float * lolAlign::calc_discore(int * anchor_query, int * anchor_target, int anchor_length){
    float di_score = 0.0;
    for(int i = 0; i < anchor_length; i++){
            
        
    }
    unsigned char *queryNumAA = seq2num(querySeqAA, subMatAA.aa2num);
    unsigned char *queryNum3Di = seq2num(querySeq3Di, subMat3Di.aa2num);
    unsigned char *targetNumAA = seq2num(targetSeqAA, subMatAA.aa2num);
    unsigned char *targetNum3Di = seq2num(targetSeq3Di, subMat3Di.aa2num);

    for (int i = 0; i < queryLen; ++i)
    {
        for (int j = 0; j < targetLen; ++j)
        {
            scoreForward[i][j] = static_cast<float>((subMatAA.subMatrix[queryNumAA[i]][targetNumAA[j]] *1.4) + (subMat3Di.subMatrix[queryNum3Di[i]][targetNum3Di[j]] *2.1));
            //scoreForward[i][j] = exp(scoreForward[i][j] / T);
        }
    }



}*/

void lolAlign::calc_dist_matrix(float *x, float *y, float *z, size_t len, float **d, bool cutoff)
{
    for (size_t i = 0; i < len; i++)
    {
        for (size_t j = 0; j < len; j++)
        {
            d[i][j] = sqrt(pow(x[i] - x[j], 2) + pow(y[i] - y[j], 2) + pow(z[i] - z[j], 2));
            if (d[i][j] > 15.0 && cutoff)
            {
                d[i][j] = 0;
            }

        }
    }
}






void lolAlign::initQuery(float *x, float *y, float *z, char *querySeq, char *query3diSeq, unsigned int queryLen)
{
    memcpy(query_x, x, sizeof(float) * queryLen);
    memcpy(query_y, y, sizeof(float) * queryLen);
    memcpy(query_z, z, sizeof(float) * queryLen);
    this->queryLen = queryLen;
    this->querySeq = querySeq;
    this->query3diSeq = query3diSeq;
    Coordinates queryCaCords;
    queryCaCords.x = query_x;
    queryCaCords.y = query_y;
    queryCaCords.z = query_z;
    anchor_query = malloc_matrix<int>(num_sa, queryLen);
    G = malloc_matrix<float>(queryLen*2, queryLen*2);
    P = malloc_matrix<float>(queryLen*2, queryLen*2);
    hidden_layer = malloc_matrix<float>(queryLen*2, 3);
    anchor_query = malloc_matrix<int>(num_sa, queryLen);
    anchor_target = malloc_matrix<int>(num_sa, queryLen*2);
    lol_dist = new float[queryLen*2];
    lol_seq_dist = new float[queryLen*2];
    lol_score_vec = new float[queryLen*2];
    final_anchor_query = new int[queryLen*2];
    final_anchor_target = new int[queryLen*2];
    calc_dist_matrix(query_x, query_y, query_z, queryLen, d_ij, true);

    return;


}



void lolAlign::lolmatrix(int *anchor_query, int *anchor_target, int anchor_length, int *gaps, float **d_ij, float **d_kl, float **G, int queryLen, int targetLen, float ** hidden_layer, float * d_dist, float * log_score)
{
    int gap0_start = gaps[0];
    int gap0_end = gaps[1];
    int gap1_start = gaps[2];
    int gap1_end = gaps[3];
    //float *seq_dist = new float[gap1_end - gap1_start];
    float seq_dist = 0.0;
    int anchor_q = 0;
    int anchor_t = 0;




    for (int i = 0; i < anchor_length; i++){
        for(int aq = anchor_q+1; aq < queryLen; aq++){
            if(anchor_query[aq] == 2){
                //anchor_query[aq] = 1;
                anchor_q = aq;
                //std::cout << "anchor_q: " << anchor_q << std::endl;
                break;
            }
        }
        for(int at = anchor_t+1; at < targetLen; at++){
            if(anchor_target[at] == 2){
                //anchor_target[at] = 1;
                anchor_t = at;
                //std::cout << "anchor_t: " << anchor_t << std::endl;
                break;
            }
        }


        for (int j = gap0_start; j < gap0_end; j++)
        {
            //memset(d_dist, 0, sizeof(float) * (gap1_end - gap1_start));
            //memset(seq_dist, 0, sizeof(float) * (gap1_end - gap1_start));
            if (d_ij[anchor_q][j] > 0)
            {

                seq_dist = std::copysign(1.0f, (anchor_q-j)) * std::log(1 + std::abs((float)(anchor_q-j)));
                for(int l = gap1_start; l < gap1_end; l++)
                {
                    d_dist[l - gap1_start] = std::abs(d_ij[anchor_q][j] - d_kl[anchor_t][l]);

                    //seq_dist[l - gap1_start] = std::copysign(1.0f, (anchor_q-j)) * std::log(1 + std::abs((float)(anchor_q-j)));
                }
                lolscore(d_dist, seq_dist, G[j], gap1_end - gap1_start, gap1_start, hidden_layer);
            }
        }
    }
    return;


}


void lolAlign::lolscore(float* d_dist, float d_seq, float* score, int length, int start, float** hidden_layer)
{
    for (int i = 0; i < length; ++i) {
        for (int k = 0; k < 3; ++k) {
            hidden_layer[i][k] = 0.0;
            hidden_layer[i][k] += d_seq * w1[0][k];
            hidden_layer[i][k] += d_dist[i] * w1[1][k];
            hidden_layer[i][k] += b1[k];
            hidden_layer[i][k] = std::max(0.0f, hidden_layer[i][k]); // ReLU activation
            score[i+start] += hidden_layer[i][k] * w2[k] + b2;
        }
    }

}



void lolAlign::lolscore(float* dist, float* d_seq, float* score, int length, float** hidden_layer)
{
    //auto start_t = std::chrono::high_resolution_clock::now();


    for (int i = 0; i < length; ++i) {
        if(d_seq[i] > 0){
            for (int k = 0; k < 3; ++k) {
                hidden_layer[i][k] = 0.0;
                hidden_layer[i][k] += d_seq[i] * w1[0][k];
                hidden_layer[i][k] += dist[i] * w1[1][k];
                hidden_layer[i][k] += b1[k];
                hidden_layer[i][k] = std::max(0.0f, hidden_layer[i][k]); // ReLU activation
                score[i] += hidden_layer[i][k] * w2[k];
            }
            score[i] += b2;
        }
    }
    //auto end = std::chrono::high_resolution_clock::now();
    //lol_score_time += end - start_t;
}


void lolAlign::computeForwardScoreMatrix(
        char *querySeqAA,
        char *querySeq3Di,
        char *targetSeqAA,
        char *targetSeq3Di,
        int queryLen,
        int targetLen,
        SubstitutionMatrix &subMatAA,
        SubstitutionMatrix &subMat3Di,
        float T,
        float **scoreForward)
{
    unsigned char *queryNumAA = seq2num(querySeqAA, subMatAA.aa2num);
    unsigned char *queryNum3Di = seq2num(querySeq3Di, subMat3Di.aa2num);
    unsigned char *targetNumAA = seq2num(targetSeqAA, subMatAA.aa2num);
    unsigned char *targetNum3Di = seq2num(targetSeq3Di, subMat3Di.aa2num);

    for (int i = 0; i < queryLen; ++i)
    {
        for (int j = 0; j < targetLen; ++j)
        {
            scoreForward[i][j] = static_cast<float>((subMatAA.subMatrix[queryNumAA[i]][targetNumAA[j]] *1.4 ) + (subMat3Di.subMatrix[queryNum3Di[i]][targetNum3Di[j]] * 2.1));
            //scoreForward[i][j] = exp(scoreForward[i][j] / T);
        }
    }
}

/*void lolAlign::lol_fwbw(float **scoreForward_s, float **P, size_t queryLen_s, size_t targetLen_s, size_t assignTargetLen, float go, float ge, float T, int length, int blocks, int* gaps)
{
    //auto fwbw_time_start = std::chrono::high_resolution_clock::now();

    int queryLen = gaps[1] - gaps[0];
    int targetLen = gaps[3] - gaps[2];
    assignTargetLen = targetLen + (length - targetLen % length) % length;
    blocks = (int)((assignTargetLen / length));
    float **scoreForward = allocateMemory(queryLen, assignTargetLen);
    float **scoreBackward = allocateMemory(queryLen, assignTargetLen);
    float **zmForward = allocateMemory(queryLen, assignTargetLen);
    float **zmBackward = allocateMemory(queryLen, assignTargetLen);
    float **zmBlock = allocateMemory(queryLen + 1, length + 1);
    float **zmaxForward = allocateMemory(blocks, queryLen);
    float **zmaxBackward = allocateMemory(blocks, queryLen);
    float *zeBlock = new float[length + 1];
    float *zfBlock = new float[length + 1];

    for (int i = 0; i < queryLen; ++i)
    {
        for (int j = 0; j < targetLen; ++j)
        {
            scoreForward[i][j] = scoreForward_s[i+gaps[0]][j+gaps[2]];
            scoreBackward[i][j] = scoreForward_s[(queryLen - 1 - i)+gaps[0]][targetLen - 1 - j+gaps[2]];
        }
    }


    float *zInit[3];
    zInit[0] = new float[queryLen];
    zInit[1] = new float[queryLen];
    zInit[2] = new float[queryLen];

    for (int i = 0; i < queryLen; ++i)
    {
        zInit[0][i] = -DBL_MAX;
        zInit[1][i] = -DBL_MAX;
        zInit[2][i] = -DBL_MAX;
    }

    for (int b = 0; b < blocks; ++b)
    {

        size_t start = b * length;
        size_t end = (b + 1) * length;
        size_t memcpy_cols = std::min(end, static_cast<size_t>(targetLen)) - start;

        forwardBackwardSaveBlockMaxLocal(scoreForward, zInit, T, go, ge, queryLen, start, end, memcpy_cols, targetLen,
                                         zmForward, zmaxForward[b], zmBlock, zeBlock, zfBlock, gaps);
    }


    ///////////////////////////////////Backward////////////////////////////////////////

    for (int i = 0; i < queryLen; ++i)
    {
        zInit[0][i] = -DBL_MAX;
        zInit[1][i] = -DBL_MAX;
        zInit[2][i] = -DBL_MAX;
    }

    for (int b = 0; b < blocks; ++b)
    {
        size_t start = b * length;
        size_t end = (b + 1) * length;
        size_t memcpy_cols = std::min(end, static_cast<size_t>(targetLen)) - start;

        forwardBackwardSaveBlockMaxLocal(scoreBackward, zInit, T, go, ge, queryLen, start, end, memcpy_cols, targetLen,
                                         zmBackward, zmaxBackward[b], zmBlock, zeBlock, zfBlock, gaps);
    }

    ///////////////////////////////////Rescale////////////////////////////////////////
    // Rescale the values by the maximum in the log space for each block
    // This turns the matrix into log space


    rescaleBlocks(zmForward, zmaxForward, queryLen, length, blocks, targetLen);
    rescaleBlocks(zmBackward, zmaxBackward, queryLen, length, blocks, targetLen);


    
    float max_zm = -std::numeric_limits<float>::max();
    for (int i = 0; i < queryLen; ++i)
    {
        for (int j = 0; j < targetLen; ++j)
        {
            max_zm = std::max(max_zm, zmForward[i][j]);
        }
    }

    float sum_exp = 0.0;
    for (int i = 0; i < queryLen; ++i)
    {
        for (int j = 0; j < targetLen; ++j)
        {
            sum_exp += exp(zmForward[i][j] - max_zm);
        }
    }
    float logsumexp_zm = max_zm + log(sum_exp);

    for (int i = 0; i < queryLen; ++i)
    {
        for (int j = 0; j < targetLen; ++j)
        {
            P[i+gaps[0]][j+gaps[2]] = exp(
                    zmForward[i][j] + zmBackward[queryLen - 1 - i][targetLen - 1 - j] - log(scoreForward_s[i+gaps[0]][j+gaps[2]]) - logsumexp_zm);
        }
    }
    free(scoreForward);
    free(scoreBackward);
    free(zmForward);
    free(zmBackward);
    free(zmBlock);
    free(zmaxForward);
    free(zmaxBackward);
    free(zeBlock);
    free(zfBlock);
    free(zInit[0]);
    free(zInit[1]);
    free(zInit[2]);
    //fwbw_time += std::chrono::high_resolution_clock::now() - fwbw_time_start;

    return;
}

void lolAlign::forwardBackwardSaveBlockMaxLocal(float** S, float** z_init,
                                                float T, float go, float ge,
                                                size_t rows, size_t start, size_t end, size_t memcpy_cols, size_t targetlen,
                                                float **zm, float *zmax, float **zmBlock, float *zeBlock, float *zfBlock, int* gaps)
{
    float exp_go = exp(go / T);
    float exp_ge = exp(ge / T);

    memset(zeBlock, 0, (end - start + 1) * sizeof(float));
    memset(zfBlock, 0, (end - start + 1) * sizeof(float));

    std::vector<float> ze_first(rows + 1, 0);
    std::vector<float> zf_first(rows + 1, 0);

    // Init blocks
    memset(zmBlock[0], 0, (end - start + 1) * sizeof(float));

    for (size_t i = 0; i < rows; ++i)
    {
        zmBlock[i + 1][0] = z_init[0][i];
        ze_first[i + 1] = z_init[1][i];
        zf_first[i + 1] = z_init[2][i];
    }

    size_t cols = memcpy_cols;

    float current_max = 0;

    for (size_t i = 1; i <= rows; ++i)
    {
        if (i != 1)
        {
            zmBlock[i - 1][0] = exp(zmBlock[i - 1][0]);
            ze_first[i - 1] = exp(ze_first[i - 1]);
            zf_first[i - 1] = exp(zf_first[i - 1]);
            // Debug(Debug::INFO) << zmBlock[i - 1][0] << '\t';
        }
        const float expMax = exp(-current_max);
        // #pragma omp simd
        for (size_t j = 1; j <= cols; ++j)
        {
            // std::cout << rows << " " << cols << "\n" << std::endl;
            if (j == 1)
            {
                float tmp = (zmBlock[i - 1][j - 1] + ze_first[i - 1] + zf_first[i - 1] + expMax);
                zmBlock[i][j] = tmp * S[(i - 1)][start + j - 1];
            }
            else
            {
                float tmp = (zmBlock[i - 1][j - 1] + zeBlock[j - 1] + zfBlock[j - 1] + expMax);
                zmBlock[i][j] = tmp * S[i - 1][start + j - 1];
            }
        }

#pragma omp simd
        for (size_t j = 1; j <= cols; ++j)
        {
            if (j == 1)
            {
                zeBlock[j] = exp(zmBlock[i][j - 1]) * exp_go + exp(ze_first[i]) * exp_ge;
            }
            else
            {
                zeBlock[j] = zmBlock[i][j - 1] * exp_go + zeBlock[j - 1] * exp_ge;
            }
        }
#pragma omp simd
        for (size_t j = 1; j <= cols; ++j)
        {
            zfBlock[j] = zmBlock[i - 1][j] * exp_go + zfBlock[j] * exp_ge;
        }

        float z_temp_m = *std::max_element(zmBlock[i] + 1, zmBlock[i] + cols + 1);
        float z_temp_e = *std::max_element(zeBlock, zeBlock + cols + 1);
        float z_temp_f = *std::max_element(zfBlock + 1, zfBlock + cols + 1);
        float z_temp = std::max(z_temp_m, std::max(z_temp_e, z_temp_f));
        zmax[i - 1] = log(z_temp);
        current_max += zmax[i - 1];
#pragma omp simd
        for (size_t j = 1; j <= cols; ++j)
        {
            zmBlock[i][j] /= z_temp;
            zeBlock[j] /= z_temp;
            zfBlock[j] /= z_temp;
        }

        zmBlock[i][0] -= zmax[i - 1];
        ze_first[i] -= zmax[i - 1];
        zf_first[i] -= current_max;
        if (i < rows)
        {
            zmBlock[i + 1][0] -= current_max;
            ze_first[i + 1] -= current_max;
            z_init[0][i - 1] = log(zmBlock[i][cols]) + current_max;
            z_init[1][i - 1] = log(zeBlock[cols]) + current_max;
            z_init[2][i - 1] = log(zfBlock[cols]) + current_max;
        }
    }

    std::vector<float> rescale(rows);
    std::partial_sum(zmax, zmax + rows, rescale.begin());

    for (size_t i = 0; i < rows; ++i)
    {
        memcpy(zm[i] + start, zmBlock[i + 1] + 1, memcpy_cols * sizeof(float));
    }
}

void lolAlign::rescaleBlocks(float **matrix, float **scale, size_t rows, size_t length, size_t blocks, size_t targetLen)
{
    for (size_t b = 0; b < blocks; ++b)
    {
        size_t start = b * length;
        size_t end = std::min((b + 1) * length, targetLen);
        std::vector<float> cumsum(rows);
        std::partial_sum(scale[b], scale[b] + rows, cumsum.begin());

        for (size_t i = 0; i < rows; ++i)
        {
            for (size_t j = start; j < end; ++j)
            {
                //matrix[i][j] = log(matrix[i][j] + std::numeric_limits<float>::min()) + cumsum[i];
                matrix[i][j] = log(matrix[i][j]) + cumsum[i];
            }
        }
    }
}*/

float **lolAlign::allocateMemory(size_t rows, size_t cols)
{
    // Allocate memory for an array of pointers to rows
    float **array = (float **)malloc(rows * sizeof(float *));
    if (array == NULL)
    {
        fprintf(stderr, "Memory allocation failed\n");
        exit(1);
    }

    // Allocate memory for each row
    for (size_t i = 0; i < rows; i++)
    {
        array[i] = (float *)malloc(cols * sizeof(float));
        if (array[i] == NULL)
        {
            fprintf(stderr, "Memory allocation failed\n");
            exit(1);
        }
    }

    return array;
}

#endif
