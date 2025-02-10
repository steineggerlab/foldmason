#ifndef FWBW_H
#define FWBW_H

#include "SubstitutionMatrix.h"
#include "IndexReader.h"
#include "DBReader.h"

#include <cstdint>
#include <cstdlib>
#include <cstdio>
#include <string>

// template<bool profile, bool backtrace>
class FwBwAligner {
public:
    typedef struct {
        float score1;
        float score2;
        int32_t dbStartPos1;
        int32_t dbEndPos1;
        int32_t	qStartPos1;
        int32_t qEndPos1;
        int32_t ref_end2;
        float qCov;
        float tCov;
        std::string cigar;
        double evalue;
        int identicalAACnt;
        int32_t cigarLen;
        int word;
    } s_align;


    FwBwAligner(size_t length, SubstitutionMatrix &subMat, float gapOpen, float gapExtend, float mact, float temperature, size_t rowsCapacity, size_t colsCapacity);
    FwBwAligner(size_t length,  float gapOpen, float gapExtend, float temperature, size_t rowsCapacity, size_t colsCapacity);

    ~FwBwAligner();

    s_align align();
    size_t getRowsCapacity() const { return rowsCapacity; }
    size_t getColsCapacity() const { return colsCapacity; }
    size_t getBlockLength() const { return length; }
    
    //Reallocation & Resizing
    void reallocateProfile(size_t newColsCapacity);
    void resizeMatrix(size_t newRowsCapacity, size_t newColsCapacity);
    void resetParams(float newGapOpen, float newGapExtend, float newTemperature);
    
    //Initilization
    void initProfile(unsigned char* colAANum, size_t colAALen);
    void initAlignment(unsigned char* targetNum, size_t targetLen);
    void initScoreMatrix(float** inputScoreMatrix, int * gaps);

    unsigned char* colSeqAANum = nullptr;
    unsigned char* rowSeqAANum = nullptr;

    template<bool profile, bool backtrace>
    void runFwBw();

    s_align getFwbwAlnResult();
    float** getProbabiltiyMatrix();
    float** P; //temporary pulbic
    float maxP; //temporary pulbic
    float temperature;



private:
    float** zm;

    float* zmFirst;
    float* zeFirst;
    float* zfFirst;

    float** zInit;
    // Score Matrix
    float** scoreForwardProfile = nullptr; // profile true
    float** scoreForwardProfile_exp = nullptr; // profile true
    float** scoreBackwardProfile_exp = nullptr; // profile true

    float** scoreForward = nullptr; // profile false

    //backtrace
    uint8_t** btMatrix = nullptr; // backtrace true

    float* zmBlockPrev;
    float* zmBlockCurr;
    float* zeBlock;
    float* zfBlock;

    float* vj;
    float* wj;
    float* exp_ge_arr;

    size_t length;
    // const SubstitutionMatrix & subMat;
    float gapOpen;
    float gapExtend;
    float mact; // backtrace true
    // float temperature;
    size_t rowsCapacity;
    size_t colsCapacity;

    size_t blockCapacity;
    size_t blocks;
    size_t colSeqLen;
    size_t rowSeqLen;

    float** blosum = nullptr; // Profile true
    float* S_prev = nullptr; // backtrace true
    float* S_curr = nullptr; // backtrace true
    simd_float exp_go;
    simd_float exp_ge;
    float max_zm;
    float sum_exp;
    // float maxP;
    
    simd_float vMax_zm;
    simd_float vSum_exp;
    size_t colSeqLen_padding;
    
    s_align alignResult;

    template<bool profile>
    void forward();

    template<bool profile>
    void backward();

    template<bool profile>
    void computeProbabilityMatrix();

    void computeBacktrace();
};

#endif
