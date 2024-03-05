#ifndef FOLDMASON_LOCALPARAMETERS_H
#define FOLDMASON_LOCALPARAMETERS_H

#include <LocalParameters.h>

const int CITATION_FOLDMASON = CITATION_FOLDSEEK << 1;

/* struct FoldSeekDbValidator : public DbValidator {
    static std::vector<int> tmscore;
    static std::vector<int> cadb;
    static std::vector<int> flatfileStdinAndFolder;
    static std::vector<int> flatfileAndFolder;

};
*/

class FoldmasonParameters : public LocalParameters {
public:
    FoldmasonParameters();
    ~FoldmasonParameters();
    static FoldmasonParameters& getFoldmasonInstance() {
        if (instance == NULL) {
            initParameterSingleton();
        }
        return static_cast<FoldmasonParameters&>(FoldmasonParameters::getInstance());
    }

    std::vector<MMseqsParameter *> structuremsa;
    std::vector<MMseqsParameter *> structuremsacluster;
    std::vector<MMseqsParameter *> msa2lddt;
    std::vector<MMseqsParameter *> refinemsa;
    std::vector<MMseqsParameter *> easymsaworkflow;

    PARAMETER(PARAM_PCA_AA)
    PARAMETER(PARAM_PCB_AA)
    PARAMETER(PARAM_PCA_3DI)
    PARAMETER(PARAM_PCB_3DI)
    PARAMETER(PARAM_SCORE_BIAS_AA)
    PARAMETER(PARAM_SCORE_BIAS_3DI)
    PARAMETER(PARAM_GUIDE_TREE)
    PARAMETER(PARAM_RECOMPUTE_SCORES)
    PARAMETER(PARAM_REGRESSIVE)
    PARAMETER(PARAM_PRECLUSTER)
    PARAMETER(PARAM_REFINE_ITERS)
    PARAMETER(PARAM_BITFACTOR_AA)
    PARAMETER(PARAM_BITFACTOR_3DI)
    PARAMETER(PARAM_LDDT_HTML)
    PARAMETER(PARAM_PAIR_THRESHOLD)
    PARAMETER(PARAM_REPORT_COMMAND)

    MultiParam<PseudoCounts> pcaAa;
    MultiParam<PseudoCounts> pcbAa;
    MultiParam<PseudoCounts> pca3di;
    MultiParam<PseudoCounts> pcb3di;
    float scoreBiasAa;
    float scoreBias3di;
    std::string guideTree;
    bool recomputeScores;
    bool regressive;
    bool precluster;
    int refineIters;
    float bitFactorAa;
    float bitFactor3Di;
    std::string lddtHtml;
    std::string reportCommand;
    float pairThreshold;
};
#endif
