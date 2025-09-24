#include "FoldmasonParameters.h"
#include "Command.h"
#include "Debug.h"

FoldmasonParameters::FoldmasonParameters() :
        LocalParameters(),
        PARAM_GUIDE_TREE(PARAM_GUIDE_TREE_ID, "--guide-tree", "Input Newick guide tree", "Guide tree in Newick format", typeid(std::string), (void *) &guideTree, ".*\\.nw"),
        PARAM_RECOMPUTE_SCORES(PARAM_RECOMPUTE_SCORES_ID, "--recompute-scores", "Recompute scores", "Recompute all-vs-all alignment scores every iteration", typeid(bool), (void *) &recomputeScores, ""),
        PARAM_PRECLUSTER(PARAM_PRECLUSTER_ID, "--precluster", "Pre-cluster structures", "Pre-cluster structures before constructing MSA", typeid(bool), (void *) &precluster, ""),
        PARAM_REFINE_ITERS(PARAM_REFINE_ITERS_ID, "--refine-iters", "Total refinement iterations", "Number of alignment refinement iterations", typeid(int), (void *) &refineIters, "[0-9]{1}[0-9]*$"),
        PARAM_BITFACTOR_AA(PARAM_BITFACTOR_AA_ID, "--bitfactor-aa", "AA matrix bit factor", "AA matrix bit factor", typeid(float), (void *) &bitFactorAa, "^([0-9]*\\.[0-9]*)$"),
        PARAM_BITFACTOR_3DI(PARAM_BITFACTOR_3DI_ID, "--bitfactor-3di", "3Di matrix bit factor", "3Di matrix bit factor", typeid(float), (void *) &bitFactor3Di, "^([0-9]*\\.[0-9]*)$"),
        PARAM_PAIR_THRESHOLD(PARAM_PAIR_THRESHOLD_ID, "--pair-threshold", "LDDT pair threshold", "% of pair subalignments with LDDT information [0.0,1.0]",typeid(float), (void *) &pairThreshold, "^0(\\.[0-9]+)?|1(\\.0+)?$"),
        PARAM_REPORT_COMMAND(PARAM_REPORT_COMMAND_ID, "--report-command", "", "", typeid(std::string), (void *) &reportCommand, ""),
        PARAM_REPORT_PATHS(PARAM_REPORT_PATHS_ID, "--report-paths", "", "", typeid(bool), (void *) &reportPaths, ""),
        PARAM_REFINE_SEED(PARAM_REFINE_SEED_ID, "--refine-seed", "Random number generator seed", "Random number generator seed", typeid(int), (void *) &refinementSeed, "^([-]?[0-9]*)$"),
        PARAM_ONLY_SCORING_COLS(PARAM_ONLY_SCORING_COLS_ID, "--only-scoring-cols", "Normalise LDDT by no. scoring columns", "Normalise LDDT by no. scoring columns", typeid(bool), (void *) &onlyScoringCols, ""),
        PARAM_FOLDMASON_FAST(PARAM_FOLDMASON_FAST_ID, "--fast", "Fast mode, disable neighbor score", "Fast mode, disable residue neighbourhood similarity scoring", typeid(bool), (void *) &fastMode, ""),
        PARAM_SCORE_BIAS_PSSM(PARAM_SCORE_BIAS_PSSM_ID, "--score-bias-pssm", "PSSM score bias", "PSSM score bias", typeid(float), (void *) &scoreBiasPSSM, "^([-]?[0-9]*(\\.[0-9]*)?)$"),
        PARAM_NB_SIGMA(PARAM_NB_SIGMA_ID, "--nb-sigma", "Neighborhood score decay constant", "Neighborhood score decay constant", typeid(float), (void *) &nbSigma, "^([0-9]*(\\.[0-9]*)?)$"),
        PARAM_NB_MULTIPLIER(PARAM_NB_MULTIPLIER_ID, "--nb-multiplier", "Neighborhood score multiplier", "Neighborhood score multiplier", typeid(float), (void *) &nbMultiplier, "^([0-9]*(\\.[0-9]*)?)$"),
        PARAM_NB_ANG_CUT(PARAM_NB_ANG_CUT_ID, "--nb-ang-cut", "Neighborhood angstrom cutoff", "Maximum distance cutoff (angstrom) for neighboring residues", typeid(float), (void *) &nbAngCut, "^([0-9]*(\\.[0-9]*)?)$"),
        PARAM_NB_LOW_CUT(PARAM_NB_LOW_CUT_ID, "--nb-low-cut", "Neighborhood score low pass threshold", "Minimum neighborhood score threshold", typeid(float), (void *) &nbLowCut, "^([0-9]*(\\.[0-9]*)?)$"),
        PARAM_SW_GAP_OPEN(PARAM_SW_GAP_OPEN_ID, "--sw-gap-open", "All-vs-all SW gap open cost", "Gap open cost for all-vs-all Smith-Waterman alignment", typeid(int), (void *) &swGapOpen, "[0-9]{1}[0-9]*$"),
        PARAM_SW_GAP_EXTEND(PARAM_SW_GAP_EXTEND_ID, "--sw-gap-extend", "All-vs-all SW gap extension cost", "Gap extension cost for all-vs-all Smith-Waterman alignment", typeid(int), (void *) &swGapExtend, "[0-9]{1}[0-9]*$")
{
    // structuremsa
    structuremsa.push_back(&PARAM_WG);
    structuremsa.push_back(&PARAM_MATCH_RATIO);
    structuremsa.push_back(&PARAM_SCORE_BIAS);
    structuremsa.push_back(&PARAM_FILTER_MSA);
    structuremsa.push_back(&PARAM_FILTER_NDIFF);
    structuremsa.push_back(&PARAM_FILTER_QSC);
    structuremsa.push_back(&PARAM_GAP_OPEN);
    structuremsa.push_back(&PARAM_GAP_EXTEND);
    structuremsa.push_back(&PARAM_MASK_PROFILE);
    structuremsa.push_back(&PARAM_PC_MODE);
    structuremsa.push_back(&PARAM_PCA);
    structuremsa.push_back(&PARAM_PCB);
    structuremsa.push_back(&PARAM_GUIDE_TREE);
    structuremsa.push_back(&PARAM_RECOMPUTE_SCORES);
    structuremsa.push_back(&PARAM_SUB_MAT);
    structuremsa.push_back(&PARAM_THREADS);
    structuremsa.push_back(&PARAM_MAX_SEQ_LEN);
    structuremsa.push_back(&PARAM_REFINE_ITERS);
    structuremsa.push_back(&PARAM_BITFACTOR_AA);
    structuremsa.push_back(&PARAM_BITFACTOR_3DI);
    structuremsa.push_back(&PARAM_PAIR_THRESHOLD);
    structuremsa.push_back(&PARAM_FOLDMASON_FAST);
    structuremsa.push_back(&PARAM_NO_COMP_BIAS_CORR);
    structuremsa.push_back(&PARAM_V);
    structuremsa.push_back(&PARAM_REFINE_SEED);
    structuremsa.push_back(&PARAM_ONLY_SCORING_COLS);
    structuremsa.push_back(&PARAM_SCORE_BIAS_PSSM);
    structuremsa.push_back(&PARAM_NB_SIGMA);
    structuremsa.push_back(&PARAM_NB_MULTIPLIER);
    structuremsa.push_back(&PARAM_NB_ANG_CUT);
    structuremsa.push_back(&PARAM_NB_LOW_CUT);
    structuremsa.push_back(&PARAM_SW_GAP_OPEN);
    structuremsa.push_back(&PARAM_SW_GAP_EXTEND);

    structuremsacluster = combineList(structuremsacluster, structuremsa);

    // msa2lddt
    msa2lddt.push_back(&PARAM_PAIR_THRESHOLD);
    msa2lddt.push_back(&PARAM_THREADS);
    msa2lddt.push_back(&PARAM_GUIDE_TREE);
    msa2lddt.push_back(&PARAM_V);
    msa2lddt.push_back(&PARAM_REPORT_COMMAND);
    msa2lddt.push_back(&PARAM_REPORT_PATHS);
    msa2lddt.push_back(&PARAM_ONLY_SCORING_COLS);

    // refinemsa
    refinemsa = combineList(refinemsa, structuremsa);
    
    // easymsa
    PARAM_REPORT_MODE.description = "MSA report mode 0: AA/3Di FASTA files only, 1: Compute LDDT and generate HTML report, 2: Compute LDDT and generate JSON";
    PARAM_REPORT_MODE.regex = "^[0-2]{1}$";
    easymsaworkflow = combineList(easymsaworkflow, structurecreatedb);
    easymsaworkflow = combineList(easymsaworkflow, structuremsa);
    easymsaworkflow = combineList(easymsaworkflow, msa2lddt);
    easymsaworkflow.push_back(&PARAM_PRECLUSTER);
    easymsaworkflow.push_back(&PARAM_REPORT_MODE);
    
    bitFactorAa = 1.1f;
    bitFactor3Di = 2.1f;
    scoreBias = 4.6f;
    scoreBiasPSSM = -0.6f;
    fastMode = false;
    matchRatio = 0.9f;
    guideTree = "";
    reportCommand = "";
    reportPaths = true;
    recomputeScores = false;
    precluster = false;
    refineIters = 0;
    pairThreshold = 0.0;
    wg = true;
    filterMsa = 1;
    compBiasCorrection = 1;
    refinementSeed = -1;
    gapOpen = 25;
    gapExtend = 2;
    onlyScoringCols = false;
    nbMultiplier = 13.0f;
    nbAngCut = 45.0f;
    nbLowCut = 0.02f;
    nbSigma = 3.84098f;
    swGapOpen = 9;
    swGapExtend = 8;
    Ndiff = 5; 

    citations.emplace(CITATION_FOLDMASON, "Gilchrist, C. L. M., Mirdita, M. & Steinegger, M. Multiple Protein Structure Alignment at Scale with FoldMason. bioRxiv, doi.org/10.1101/2024.08.01.606130 (2024)");
}
