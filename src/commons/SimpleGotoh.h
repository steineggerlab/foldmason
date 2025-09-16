#include "Matcher.h"

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
);