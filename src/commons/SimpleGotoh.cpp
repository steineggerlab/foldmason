#include <string>
#include "SimpleGotoh.h"
#include "Util.h"


void trimCIGAR(std::string &cigar, int &qEnd, int &tEnd) {
    int i = 0;
    while (cigar[i] != 'M') {
        if (cigar[i] == 'D') {
            tEnd--;            
        } else {
            qEnd--;
        }
        i++; 
    }
    cigar.erase(cigar.begin(), cigar.begin() + i);
    std::reverse(cigar.begin(), cigar.end());
    i = 0;
    while (cigar[i] != 'M') {
        // if (cigar[i] == 'D') {
        //     qStart++;
        // } else {
        //     tStart++;            
        // }
        i++; 
    }   
    cigar.erase(cigar.begin(), cigar.begin() + i);
}

Matcher::result_t simpleGotoh(
        const unsigned char *query_sequence_aa,
        const unsigned char *query_sequence_3di,
        const unsigned char *db_sequence_aa,
        const unsigned char *db_sequence_3di,
        short **query_profile_word_aa,
        short **query_profile_word_3di,
        short **target_profile_word_aa,
        short **target_profile_word_3di,
        int32_t query_start, int32_t query_end,
        int32_t target_start, int32_t target_end,
        const short gap_open, const short gap_extend,
        float** lddtScoreMap
) {
    // defining constants for backtracing
    // const uint8_t B        = 0b00000001;
    const uint8_t H        = 0b00000010;
    const uint8_t F        = 0b00000100;
    const uint8_t E        = 0b00001000;
    const uint8_t F_F_FLAG = 0b00010000;
    const uint8_t F_M_FLAG = 0b00100000;
    const uint8_t E_E_FLAG = 0b01000000;
    const uint8_t E_M_FLAG = 0b10000000; 

    struct scores{
        short H, E, F;
    };

    typedef struct {
        short score;
        int32_t ref;	 //0-based position
        int32_t read;    //alignment ending position on read, 0-based
    } alignment_end_msa;

    alignment_end_msa result;
    result.ref = 0;
    result.read = 0;
    result.score = 0;

    // E gap in query (from left)
    // F gap in target (from top)

    int query_length = query_end - query_start;
    int target_length = target_end - target_start;

    // Define and initialize the backtrace matrix
    uint8_t * btMatrix = new uint8_t[query_length * target_length];

    scores *workspace = new scores[query_length * 2 + 2];
    scores *curr_sM_G_D_vec = &workspace[0];
    scores *prev_sM_G_D_vec = &workspace[query_length + 1];

    memset(prev_sM_G_D_vec, 0, sizeof(scores) * (query_length + 1));
    // short negInf = -std::numeric_limits<short>::infinity();
    // for (int i = 0; i <= query_end; i++) {
    //     prev_sM_G_D_vec[i].H = 0;
    //     prev_sM_G_D_vec[i].E = (i == 0) ? negInf : -gap_open - (i - 1) * -gap_extend;
    //     prev_sM_G_D_vec[i].F = negInf;
    // }
    for (int i = target_start; LIKELY(i < target_end); i++) {
        prev_sM_G_D_vec[query_start].H = 0;
        prev_sM_G_D_vec[query_start].E = 0;
        prev_sM_G_D_vec[query_start].F = 0;
        curr_sM_G_D_vec[query_start].H = 0;
        curr_sM_G_D_vec[query_start].E = 0;
        curr_sM_G_D_vec[query_start].F = 0;
        // prev_sM_G_D_vec[query_start].H = 0;
        // prev_sM_G_D_vec[query_start].E = -gap_open - (i - 1) * -gap_extend;
        // prev_sM_G_D_vec[query_start].F = negInf;
        // curr_sM_G_D_vec[query_start].H = 0;
        // curr_sM_G_D_vec[query_start].E = negInf;
        // curr_sM_G_D_vec[query_start].F = -gap_open - (i - 1) * -gap_extend;
        const short *query_profile_aa  = query_profile_word_aa[db_sequence_aa[i]];
        const short *query_profile_3di = query_profile_word_3di[db_sequence_3di[i]];

        for (int j = query_start + 1; LIKELY(j <= query_end); j++) {
            const short *target_profile_aa = target_profile_word_aa[query_sequence_aa[j-1]];
            const short *target_profile_3di = target_profile_word_3di[query_sequence_3di[j-1]]; 
            
            int agree3Di = 0;
            int agreeAA = 0;
            int strongAgree = 0; // |score| ≥  6 half‑bits
            for (int a = 0; a < 20; ++a){
                short q  = query_profile_word_3di[a][j-1];
                short t  = target_profile_word_3di[a][i];
                agree3Di += (q >= 0 && t >= 0);
                agreeAA += (query_profile_word_aa[a][j-1] >= 0 && target_profile_word_aa[a][i] >= 0);
                if ( (q >= 1 && t >= 1) || (q <= -1 && t <= -1) )
                    ++strongAgree;
            }
            short bias3DiTbl[21] = { -1, 0,0,0,0, 0, 0, 0, 1, 2, 3, 3, 4, 4, 4, 5, 5, 5, 5, 5, 5};
            short biasAATbl[21] = { 0, 0,0,0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
            short lddtBias = ceil(lddtScoreMap[j-1][i]);
            short diagPenalty = ceil(0.005f * std::abs(j-1 - i));
            short subScore = ceil((((query_profile_aa[j-1] + target_profile_aa[i]) / 2
                + (query_profile_3di[j-1] + target_profile_3di[i]) / 2)))
                + ceil(lddtScoreMap[j-1][i])
                // - diagPenalty
                + bias3DiTbl[agree3Di] + biasAATbl[agreeAA] + ((strongAgree >= 19) ? 2 : 0)
                ; 
            // short subScore = ceil(
            //     static_cast<float>(
            //         ((query_profile_aa[j-1] + target_profile_aa[i]) / 2 + (query_profile_3di[j-1] + target_profile_3di[i]) / 2)
            //         + bias3DiTbl[agree3Di] + biasAATbl[agreeAA] + ((strongAgree >= 19) ? 2 : 0)
            //     ) * lddtScoreMap[j-1][i])
            //     ; 
            
            // std::cout << query_profile_aa[j-1] << '\t' << target_profile_aa[i]
            //     << '\t' << query_profile_3di[j-1] << '\t' << target_profile_3di[i]
            //     << '\t' << lddtScoreMap[j-1][i]
            //     << '\t' << ceil(lddtScoreMap[j-1][i]) <<'\n';

            short tempE = curr_sM_G_D_vec[j-1].H - gap_open;
            short tempF = prev_sM_G_D_vec[j].H - gap_open;
            short tempEE = (curr_sM_G_D_vec[j - 1].E - gap_extend);
            short tempFF = (prev_sM_G_D_vec[j].F - gap_extend);
            short tempH = prev_sM_G_D_vec[j - 1].H + subScore;
            curr_sM_G_D_vec[j].E = std::max(tempE, static_cast<short>(tempEE));
            curr_sM_G_D_vec[j].F = std::max(tempF, static_cast<short>(tempFF));
            curr_sM_G_D_vec[j].H = std::max(tempH, curr_sM_G_D_vec[j].E);
            curr_sM_G_D_vec[j].H = std::max(curr_sM_G_D_vec[j].H, curr_sM_G_D_vec[j].F);
            curr_sM_G_D_vec[j].H = std::max(curr_sM_G_D_vec[j].H, static_cast<short>(0));

            // std::cout << curr_sM_G_D_vec[j].H << '\t';
            // std::cout << lddtBias << '\t';
            // std::cout << -diagPenalty << '\t';

            uint8_t mode = 0;
            mode |= (curr_sM_G_D_vec[j].E == tempE) ? E_M_FLAG : E_E_FLAG;
            mode |= (curr_sM_G_D_vec[j].F == tempF) ? F_M_FLAG : F_F_FLAG;
            mode |= (curr_sM_G_D_vec[j].H == tempH) ? H : (curr_sM_G_D_vec[j].H == curr_sM_G_D_vec[j].E) ? E : F;
            btMatrix[i * query_length + (j - 1)] = mode;

            // if (curr_sM_G_D_vec[j].H > result.score) {
            if (i == target_length - 1 && curr_sM_G_D_vec[j].H > result.score) {
                result.ref = static_cast<int32_t> (i);
                result.read = static_cast<int32_t> (j - 1);
                result.score = curr_sM_G_D_vec[j].H;
            }
        }
        
        // std::cout << '\n';

        if (curr_sM_G_D_vec[query_length].H > result.score) {
            result.ref = static_cast<int32_t> (i);
            result.read = static_cast<int32_t> (query_length - 1);
            result.score = curr_sM_G_D_vec[query_length].H;
        }

        // swap rows
        scores *tmpPtr = prev_sM_G_D_vec;
        prev_sM_G_D_vec = curr_sM_G_D_vec;
        curr_sM_G_D_vec = tmpPtr;
    }

    // Perform the backtrace
    std::string cigar;
    
    int i = result.ref;
    int j = result.read;

    int qStart = 0;
    int dbStart = 0;
    int dbEnd = result.ref;
    int qEnd = result.read;

    uint8_t mode = btMatrix[i  * query_length + j];
    while (i >= 0 && j >= 0) {
        if (mode & H) {
            cigar.push_back('M');
            mode = btMatrix[i  * query_length + j];
            qStart = j;
            dbStart = i;
            j--;
            i--;
        } else if (mode & E) {
            cigar.push_back('I');
            mode = (btMatrix[i  * query_length + j] & E_M_FLAG) ? H : E;
            j--;
        } else if (mode & F) {
            cigar.push_back('D');
            mode = (btMatrix[i  * query_length + j] & F_M_FLAG) ? H : F;
            i--;
        } else {
        // } else if (mode & B) {
            break;
        }
    }

    // Adjust CIGAR string to start/end on M
    // q/dbStart and q/dbEnd are already correct, no need to adjust here
    // q/dbStart set to last M j/i, q/dbEnd last M .ref/.read
    size_t alnLength = cigar.length();
    trimCIGAR(cigar, qEnd, dbEnd);

    delete[] workspace;
    delete[] btMatrix;

    return Matcher::result_t(
        0, // target_aa->getDbKey(),
        result.score,
        0,               // align.qCov,
        0,               // align.tCov,
        0,               // seqId
        0,               // align.evalue,
        alnLength,               // alnLength
        qStart,     
        qEnd,
        query_end,
        dbStart,
        dbEnd,
        target_end,
        cigar
    );
}