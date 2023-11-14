#include "Alignment.h"
#include "BacktraceTranslator.h"
#include "DBReader.h"
#include "DBWriter.h"
#include "Debug.h"
#include "IndexReader.h"
#include "LocalParameters.h"
#include "Matcher.h"
#include "MathUtil.h"
#include "MsaFilter.h"
#include "MultipleAlignment.h"
#include "Newick.h"
#include "PSSMCalculator.h"
#include "Parameters.h"
#include "Sequence.h"
#include "StructureSmithWaterman.h"
// #include "affineneedlemanwunsch.h"
#include "StructureUtil.h"
#include "Util.h"
#include "structureto3diseqdist.h"
#include <cassert>
#include <tuple>
#include <set>
#include <fstream>
#include <iostream>
#include <regex>
#include <stack>

#include "kseq.h"
#include "KSeqBufferReader.h"
#include "KSeqWrapper.h"
#include "LDDT.h"
#include "TMaligner.h"
#include "Coordinate16.h"
#include "msa2lddt.h"

#include "refinemsa.h"
#include "structuremsa.h"

#ifdef OPENMP
#include <omp.h>
#endif

KSEQ_INIT(kseq_buffer_t*, kseq_buffer_reader)

#define	EXIT_FAILURE	1
#define	EXIT_SUCCESS	0

struct AlnSimple {
    size_t queryId;
    size_t targetId;
    int score;
};

struct TNode {
    int id;
    int dbId;
    std::string name;
    float length;
    std::vector<TNode *> children;
    TNode *parent;
};

void printTree(TNode *node, int depth) {
    std::string gap(depth * 2, ' ');
    std::cout << gap << node->id;
    if (node->name != "") {
        std::cout << "=" << node->name;
        std::cout << " (parent " << node->parent->id << ", length " << node->length;
        if (node->dbId != -1) {
            std::cout << ", dbId " << node->dbId;
        }
        std::cout << ")";
    }
    std::cout << '\n';
    for (size_t i = 0; i < node->children.size(); i++) {
        TNode *child = node->children[i];
        printTree(child, depth + 1);
    }
}

/**
 * @brief Post-order traversal of a parsed Tree.
 * Generates the merging order for structuremsa
 * 
 * @param node Pointer to root TNode of the tree
 */
void postOrder(TNode *node, std::vector<int> *linkage) {
    for (TNode *child : node->children) {
        postOrder(child, linkage);
    }
    if (node->children.size() > 0) {
        for (TNode *child : node->children) {
            linkage->push_back(child->dbId);

            // Propagate child dbId from leaf to root, so we
            // always have a reference during alignment stage
            node->dbId = child->dbId;
        }
    }
}

// FIXME inconsistent with tree produced by orderToTree
std::vector<AlnSimple> parseNewick(std::string newick, std::map<std::string, int> &headers) {
    // Should know this from number of structures in database
    int total = std::count(newick.begin(), newick.end(), '(');

    // Tokenize tree on ; | ( ) , :
    // Use {-1, 0} on sregex_token_iterator to get matches AND inbetween (i.e. names)
    std::regex pattern("\\s*(;|\\(|\\)|,|:)\\s*");
    auto words_begin = std::sregex_token_iterator(newick.begin(), newick.end(), pattern, {-1, 0});
    auto words_end = std::sregex_token_iterator();
    
    // Initialise TNode array (2n+1 but a +1 for the root)
    // TNode nodes[total * 2 + 2];
    std::vector<TNode *> nodes(total * 2 + 2);
    std::vector<TNode *> parents;
    TNode *tree;
    TNode *subtree;
    
    // Initialise the root node (the +1)
    nodes[0] = new TNode();
    nodes[0]->id = 0;
    tree = nodes[0];
    
    int count = 1;
    std::string prevToken;
    
    for (std::sregex_token_iterator i = words_begin; i != words_end; ++i) {
        std::string match_str = *i;

        if (match_str == "(") {
            // add new node, set it as new subtree
            nodes[count] = new TNode();
            nodes[count]->id = count;
            nodes[count]->dbId = -1;
            nodes[count]->length = 1.0;
            subtree = nodes[count];
            count++;
            
            // add it as child to current tree
            tree->children.push_back(subtree);
            subtree->parent = tree;
            
            // add the tree as parent, set subtree as tree
            parents.push_back(tree);
            tree = subtree;
        } else if (match_str == ",") {
            nodes[count] = new TNode();
            nodes[count]->id = count;
            nodes[count]->dbId = -1;
            nodes[count]->length = 1.0;
            subtree = nodes[count];
            count++;
            parents.back()->children.push_back(subtree);
            subtree->parent = parents.back();
            tree = subtree;
        } else if (match_str == ")") {
            tree = parents[parents.size() - 1];
            parents.pop_back();
        } else if (match_str == ":") {
            // Don't do anything here, just catch it in case there are
            // branch lengths to set in else
        } else {
            if (match_str != "" && (prevToken == ")" || prevToken == "(" || prevToken == ",")) {
                tree->name = match_str;
                tree->dbId = headers[match_str];
            } else if (prevToken == ":") {
                tree->length = std::stof(match_str);
            }
        }
        prevToken = match_str;
    }
   
    // printTree(tree, 0);
    
    // Get (flat) linkage matrix, 2(2n+1)
    // node 1, node 2
    // NOTE: postOrder will trip up when no. children != 2
    //       will get duplicate rows which cause errors
    std::vector<int> linkage;
    std::vector<AlnSimple> hits;
    postOrder(tree, &linkage);
    for (size_t i = 0; i < linkage.size(); i += 2) {
        AlnSimple hit;
        hit.queryId = linkage[i + 0];
        hit.targetId = linkage[i + 1];
        hits.push_back(hit);
    }
    
    // Cleanup 
    for(size_t i = 0; i < nodes.size(); i++)
        delete nodes[i];

    return hits;
}

Matcher::result_t pairwiseAlignment(
    StructureSmithWaterman & aligner,
    unsigned int querySeqLen,
    Sequence *query_aa,
    Sequence *query_3di,
    Sequence *target_aa,
    Sequence *target_3di,
    int gapOpen,
    int gapExtend,
    SubstitutionMatrix *mat_aa,
    SubstitutionMatrix *mat_3di,
    int compBiasCorrection
) {
    std::string backtrace;

    bool targetIsProfile = (Parameters::isEqualDbtype(target_aa->getSeqType(), Parameters::DBTYPE_HMM_PROFILE));
    bool queryIsProfile = (Parameters::isEqualDbtype(query_aa->getSeqType(), Parameters::DBTYPE_HMM_PROFILE));

    unsigned char * query_aa_seq = query_aa->numSequence;
    unsigned char * query_3di_seq = query_3di->numSequence;
    unsigned char * target_aa_seq = target_aa->numSequence;
    unsigned char * target_3di_seq = target_3di->numSequence;
    if (queryIsProfile) {
        query_aa_seq = query_aa->numConsensusSequence;
        query_3di_seq = query_3di->numConsensusSequence;
    }
    if (targetIsProfile) {
        target_aa_seq = target_aa->numConsensusSequence;
        target_3di_seq = target_3di->numConsensusSequence;
    }

    float *composition_bias_aa  = new float[query_aa->L];
    float *composition_bias_ss  = new float[query_aa->L];
    float *tmp_composition_bias = new float[query_aa->L];
    if (compBiasCorrection) {
        SubstitutionMatrix::calcLocalAaBiasCorrection(mat_aa, query_aa->numSequence, query_aa->L, tmp_composition_bias, 1.0);
        for (int i =0; i < query_aa->L; i++) {
            composition_bias_aa[i] = (int8_t) (tmp_composition_bias[i] < 0.0) ? tmp_composition_bias[i] - 0.5 : tmp_composition_bias[i] + 0.5;
        }
        SubstitutionMatrix::calcLocalAaBiasCorrection(mat_3di, query_3di->numSequence, query_3di->L, tmp_composition_bias, 1.0);
        for (int i =0; i < query_aa->L; i++) {
            composition_bias_ss[i] = (int8_t) (tmp_composition_bias[i] < 0.0) ? tmp_composition_bias[i] - 0.5 : tmp_composition_bias[i] + 0.5;
        }
    } else {
        memset(composition_bias_aa, 0, query_aa->L * sizeof(int8_t));
        memset(composition_bias_ss, 0, query_aa->L * sizeof(int8_t));
    }

    short **query_profile_scores_aa = new short * [aligner.get_profile()->alphabetSize];
    short **query_profile_scores_3di = new short * [aligner.get_profile()->alphabetSize];
    for (int32_t j = 0; j < aligner.get_profile()->alphabetSize; j++) {
        query_profile_scores_aa[j] = new short [querySeqLen];
        query_profile_scores_3di[j] = new short [querySeqLen];
    }
    if (queryIsProfile) {
        for (unsigned int i = 0; i < querySeqLen; i++) {
            for (int32_t j = 0; j < aligner.get_profile()->alphabetSize; j++) {
                query_profile_scores_aa[j][i]  = query_aa->profile_for_alignment[j * querySeqLen + i];
                query_profile_scores_3di[j][i] = query_3di->profile_for_alignment[j * querySeqLen + i];
            }
        }
    } else {
        for (unsigned int i = 0; i < querySeqLen; i++) {
            for (int32_t j = 0; j < aligner.get_profile()->alphabetSize; j++) {
                query_profile_scores_aa[j][i]  = mat_aa->subMatrix[j][query_aa_seq[i]]   + composition_bias_aa[i];
                query_profile_scores_3di[j][i] = mat_3di->subMatrix[j][query_3di_seq[i]] + composition_bias_ss[i];
            }
        }
    }
   
    short **target_profile_scores_aa = new short * [aligner.get_profile()->alphabetSize];
    short **target_profile_scores_3di = new short * [aligner.get_profile()->alphabetSize];
    for (int32_t j = 0; j < aligner.get_profile()->alphabetSize; j++) {
        target_profile_scores_aa[j]  = new short [target_aa->L];
        target_profile_scores_3di[j] = new short [target_aa->L];
    }
    if (targetIsProfile) {
        for (int i = 0; i < target_aa->L; i++) {
            for (int32_t j = 0; j < aligner.get_profile()->alphabetSize; j++) {
                target_profile_scores_aa[j][i]  = target_aa->profile_for_alignment[j * target_aa->L + i];
                target_profile_scores_3di[j][i] = target_3di->profile_for_alignment[j * target_aa->L + i];
            }
        }
    } else {
        for (int i = 0; i < target_aa->L; i++) {
            for (int32_t j = 0; j < aligner.get_profile()->alphabetSize; j++) {
                target_profile_scores_aa[j][i]  = mat_aa->subMatrix[j][target_aa_seq[i]];
                target_profile_scores_3di[j][i] = mat_3di->subMatrix[j][target_3di_seq[i]];
            }
        }
    }

    delete[] composition_bias_aa;
    delete[] composition_bias_ss;
    delete[] tmp_composition_bias;
    
    Matcher::result_t gAlign = aligner.simpleGotoh(
        target_aa_seq,
        target_3di_seq,
        query_profile_scores_aa,
        query_profile_scores_3di,
        target_profile_scores_aa,
        target_profile_scores_3di,
        0,
        query_aa->L,
        0,
        target_aa->L,
        gapOpen,
        gapExtend,
        targetIsProfile,
        query_aa->getId(),
        target_aa->getId()
    );

    for (int32_t i = 0; i < aligner.get_profile()->alphabetSize; i++) {
        delete[] query_profile_scores_aa[i];
        delete[] query_profile_scores_3di[i];
        delete[] target_profile_scores_aa[i];
        delete[] target_profile_scores_3di[i];
    }
    
    delete[] query_profile_scores_aa;
    delete[] query_profile_scores_3di;
    delete[] target_profile_scores_aa;
    delete[] target_profile_scores_3di;
   
    return gAlign;
}

void sortHitsByScore(std::vector<AlnSimple> &hits) {
    SORT_PARALLEL(hits.begin(), hits.end(), [](const AlnSimple & a, const AlnSimple & b) {
        // sort by score then qId then tId
        if (a.score == b.score) {
            if (a.queryId == b.queryId) {
                return a.targetId < b.targetId;
            }
            return a.queryId < b.queryId;
        }
        return a.score > b.score;
    });
}

std::vector<AlnSimple> removeMergedHits(std::vector<AlnSimple> & hits, size_t mergedId, size_t targetId) {
    std::vector<AlnSimple> newHits;
    for (size_t i = 0; i < hits.size(); i++) {
        if (hits[i].queryId != mergedId && hits[i].targetId != mergedId
            && hits[i].queryId != targetId && hits[i].targetId != targetId) {
            newHits.push_back(hits[i]);
        }
    }
    return newHits;
}


inline size_t get1dIndex(size_t i, size_t j, size_t N) {
    return j + i * (2 * N - i - 1) / 2 - i - 1;
}

std::vector<AlnSimple> updateAllScores(
    int8_t * tinySubMatAA,
    int8_t * tinySubMat3Di,
    SubstitutionMatrix * subMat_aa,
    SubstitutionMatrix * subMat_3di,
    std::vector<Sequence*> & allSeqs_aa,
    std::vector<Sequence*> & allSeqs_3di,
    bool * alreadyMerged,
    int maxSeqLen,
    int alphabetSize,
    int compBiasCorrection,
    int compBiasCorrectionScale
) {
    std::vector<AlnSimple> newHits;
#pragma omp parallel
{
    StructureSmithWaterman structureSmithWaterman(
        maxSeqLen,
        alphabetSize,
        compBiasCorrection,
        compBiasCorrectionScale,
        subMat_aa,
        subMat_3di
    );
    std::vector<AlnSimple> threadHits;

#pragma omp for schedule(dynamic, 10)
    for (unsigned int i = 0; i < allSeqs_aa.size(); i++) {
        if (alreadyMerged[i])
            continue;
        structureSmithWaterman.ssw_init(
            allSeqs_aa[i],
            allSeqs_3di[i],
            tinySubMatAA,
            tinySubMat3Di,
            subMat_aa
        );
        for (size_t j = i + 1; j < allSeqs_aa.size(); j++) {
            if (alreadyMerged[j] || i == j)
                continue;
            bool targetIsProfile = (Parameters::isEqualDbtype(allSeqs_aa[j]->getSeqType(), Parameters::DBTYPE_HMM_PROFILE));
            unsigned char *target_aa_seq = allSeqs_aa[j]->numSequence;
            unsigned char *target_3di_seq = allSeqs_3di[j]->numSequence;
            if (targetIsProfile) {
                target_aa_seq = allSeqs_aa[j]->numConsensusSequence;
                target_3di_seq = allSeqs_3di[j]->numConsensusSequence;
            }
            AlnSimple aln;
            aln.queryId = allSeqs_aa[i]->getId();
            aln.targetId = allSeqs_aa[j]->getId();
            aln.score = structureSmithWaterman.ungapped_alignment(target_aa_seq, target_3di_seq, allSeqs_aa[j]->L);
            threadHits.push_back(aln); 
        }
    }

#pragma omp critical
    {
        newHits.insert(newHits.end(), threadHits.begin(), threadHits.end());
    }
}
    return newHits;
}

int findRoot(int vertex, std::vector<int>& parent) {
    while (parent[vertex] != vertex) {
        parent[vertex] = parent[parent[vertex]];
        vertex = parent[vertex];
    }
    return vertex;
}

TNode* findRoot(TNode *node) {
    TNode* root = node;
    while (root->id != root->parent->id)
        root = root->parent;
    return root;
}

std::string getNewick(TNode* node) {
    if (node->children.empty()) {
        return node->name;
    } else {
        std::string s = "(";
        for (size_t i = 0; i < node->children.size(); i++) {
            if (i > 0)
                s += ",";
            s += getNewick(node->children[i]);
        }
        s += ")";
        return s;
    }
}

/**
 * @brief Generates a Newick format string from a linkage matrix.
 * 
 * @param hits linkage matrix
 * @param headers structure headers
 * @param n number of structures
 * @return std::string 
 */
std::string orderToTree(std::vector<AlnSimple> hits, std::vector<std::string> &headers, int n) {
    std::string nwk = "";
    int totalNodes = n * 2 + 2;

    std::vector<TNode *> nodes(totalNodes);
    for (int i = 0; i < totalNodes; i++) {
        nodes[i] = new TNode();
        nodes[i]->id = i;
        nodes[i]->parent = nodes[i];
        if (i < n)
            nodes[i]->name = headers[i];
    }
    TNode *root = nodes[0];

    int newId = n + 1;
    for (AlnSimple aln : hits) {
        TNode *u = findRoot(nodes[aln.queryId]);
        TNode *v = findRoot(nodes[aln.targetId]);
        TNode *newNode = nodes[newId];
        newNode->id = newId;
        newNode->length = aln.score;
        newNode->children.push_back(u);            
        newNode->children.push_back(v);            
        u->parent = newNode;
        v->parent = newNode;
        newId++;
        root = newNode;
    }
    // printTree(root, 0);
    std::string newick = getNewick(root);
    
    // Cleanup 
    for(size_t i = 0; i < nodes.size(); i++)
        delete nodes[i];

    return newick;
}

/**
 * @brief Get minimum spanning tree as linkage matrix (Kruskal algorithm).
 * 
 * @param hits all hits from UpdateAllScores
 * @param n number of structures
 * @return std::vector<AlnSimple> 
 */
std::vector<AlnSimple> mst(std::vector<AlnSimple> hits, int n) {
    std::vector<AlnSimple> result;
    std::vector<int> parent(n);  // parent node IDs
    for (int i = 0; i < n; i++)
        parent[i] = i;
    for (AlnSimple aln : hits) {
        int u = findRoot(aln.queryId, parent);
        int v = findRoot(aln.targetId, parent);
        if (u != v) {
            result.push_back(aln);
            parent[u] = v;
        }
    }
    return result;
}

/**
 * @brief Reorder linkage matrix to maximize unique merges per iteration for multithreading.
 * 
 * @param linkage linkage matrix generated by `mst`
 * @param merges number of unique merges per iteration
 * @param n number of structures
 * @return std::vector<AlnSimple> 
 */
std::vector<AlnSimple> reorderLinkage(std::vector<AlnSimple> linkage, std::vector<size_t> &merges, int n) {
    std::vector<int> parent(n); 
    std::vector<int> counts(n);
    for (int i = 0; i < n; i++) {
        parent[i] = i;
        counts[i] = 0;
    }
    std::vector<AlnSimple> result(linkage.size());
    std::vector<bool> merged(linkage.size());
    int index = 0;
    int mergeCount = 0; // no. total merges
    int mergeTally = 0; // count per round
    while (mergeCount < (int)linkage.size()) {
        for (int i = 0; i < n; i++)
            counts[i] = 0;
        for (size_t i = 0; i < linkage.size(); i++) {
            if (merged[i])
                continue;
            AlnSimple aln = linkage[i];
            int u = findRoot(aln.queryId, parent);
            int v = findRoot(aln.targetId, parent);
            if (counts[u] > 0 || counts[v] > 0)
                continue;
            result[index++] = aln;
            parent[u] = v;
            merged[i] = true;
            counts[u]++;
            counts[v]++;
            mergeTally++;
        }
        merges.push_back(mergeTally);
        mergeCount += mergeTally;
        mergeTally = 0;
    }
    return result;
}

int cigarLength(std::vector<Instruction2> &cigar, bool withGaps) {
    int count = 0;
    for (Instruction2 ins : cigar) {
        count += (ins.isSeq()) ? 1 : (withGaps ? static_cast<int>(ins.bits.count) : 0);
    }
    return count;
}

/**
 * @brief Compute MSA mask based on sequence weights
 *
 * "Position-based Sequence Weights", Henikoff (1994)
 * 
 * @param indices indices of structures in this MSA
 * @param cigars all structure instruction vectors
 * @param lengths all structure lengths
 * @param lengthWithGaps gappy alignment length
 * @return std::vector<float> 
 */
std::string computeProfileMask(
    std::vector<size_t> &indices,
    std::vector<std::vector<Instruction2> > &cigars,
    std::vector<int> &lengths,
    SubstitutionMatrix &subMat,
    float matchRatio
) {
    int lengthWithGaps = cigarLength(cigars[indices[0]], true);

    // initialise weights with tiny pseudo counts
    std::vector<float> seqWeights(indices.size(), 1e-6);
    
    // count residues at each position of the alignment
    // 0-19 residue types
    // 20   number of distinct residues
    std::vector<unsigned int> counts((Sequence::PROFILE_AA_SIZE + 1) * lengthWithGaps, 0);
    for (size_t i = 0; i < indices.size(); i++) {
        int cigIndex = indices[i];
        int seqIndex = 0;
        for (size_t j = 0; j < cigars[cigIndex].size(); j++) {
            Instruction2 ins = cigars[cigIndex][j];
            if (ins.isSeq()) {
                const unsigned int c  = subMat.aa2num[static_cast<int>(ins.getCharacter())];
                if (c < Sequence::PROFILE_AA_SIZE) {  // ignore X (20)
                    int ij = c * lengthWithGaps + seqIndex;
                    counts[ij] += 1;
                    if (counts[ij] == 1) {
                        counts[(Sequence::PROFILE_AA_SIZE) * lengthWithGaps + seqIndex]++;
                    }
                }
                seqIndex++;
            } else {
                seqIndex += ins.bits.count; 
            }
        }
    }
    
    // running sums of seq weights for matches/gaps per column of alignment per sequence
    // 0 matches
    // 1 gaps
    std::vector<float> colValues(2 * lengthWithGaps, 0.0);
   
    for (size_t i = 0; i < indices.size(); i++) {
        int cigIndex = indices[i];
        int seqIndex = 0;

        // Compute sequence weights
        for (Instruction2 &ins : cigars[cigIndex]) {
            if (ins.isSeq()) {
                const unsigned int c = subMat.aa2num[static_cast<int>(ins.getCharacter())];
                int distinct = counts[(Sequence::PROFILE_AA_SIZE) * lengthWithGaps + seqIndex];
                int ij = c * lengthWithGaps + seqIndex;
                if (counts[ij] > 0 && distinct > 0) {
                    seqWeights[i] += 1.0f / (
                        static_cast<float>(counts[ij])
                        * static_cast<float>(distinct)
                        * (static_cast<float>(lengths[cigIndex]) + 30.0f)
                    );
                }
                seqIndex++;
            } else {
                seqIndex += ins.bits.count; 
            }
        }
        
        // Add weights for this sequence to matches/gaps per column
        seqIndex = 0;
        for (size_t j = 0; j < cigars[cigIndex].size(); j++) {
            Instruction2 &ins = cigars[cigIndex][j];
            if (ins.isSeq()) {
                const unsigned int c = subMat.aa2num[static_cast<int>(ins.getCharacter())];
                if (c < Sequence::PROFILE_AA_SIZE) {
                    colValues[seqIndex] += seqWeights[i];
                } 
                seqIndex++;
            } else {
                // ignore end gaps
                if (j != 0 && (j != cigars[cigIndex].size() - 1)) {
                    for (int k = 0; k < ins.bits.count; k++) {
                        colValues[lengthWithGaps + seqIndex + k] = seqWeights[i];
                    }
                }
                seqIndex += ins.bits.count;
            }
        }
    }
    
    // Generate mask string
    std::string mask;
    for (int i = 0; i < lengthWithGaps; i++) {
        float matches = colValues[i];
        float gaps = colValues[lengthWithGaps + i];
        bool state = (gaps / (gaps + matches)) > matchRatio;
        mask.push_back(state ? '1' : '0');
    }

    return mask;
}

std::vector<int> parseQidString(std::string qid) {
    std::vector<std::string> qid_str_vec = Util::split(qid, ",");
    std::vector<int> qid_vec;
    for (size_t qid_idx = 0; qid_idx < qid_str_vec.size(); qid_idx++) {
        float qid_float = strtod(qid_str_vec[qid_idx].c_str(), NULL);
        qid_vec.push_back(static_cast<int>(qid_float*100));
    }
    std::sort(qid_vec.begin(), qid_vec.end());
    return qid_vec;
}

// Generate PSSM from CIGARs and a MSA mask
std::string msa2profile(
    std::vector<size_t> &indices,
    std::vector<std::vector<Instruction2> > &cigars,
    std::string mask,
    PSSMCalculator &pssmCalculator,
    MsaFilter &filter,
    SubstitutionMatrix &subMat,
    bool filterMsa,
    bool compBiasCorrection,
    std::string & qid,
    float filterMaxSeqId,
    float Ndiff,
    float covMSAThr,
    float qsc,
    int filterMinEnable,
    bool wg,
    size_t maxSeqLength
) {
    // length of sequences after masking
    int lengthWithMask = 0;
    for (char c : mask) {
        if (c == '0') lengthWithMask++;
    }

    float *pNullBuffer = new float[lengthWithMask];
    
    // build reduced MSA
    char **msaSequences = (char**) mem_align(ALIGN_INT, sizeof(char*) * indices.size());
    char *msaContent = (char*) mem_align(ALIGN_INT, sizeof(char) * (lengthWithMask + 1) * indices.size());
    int msaPos = 0;
    for (size_t i = 0; i < indices.size(); i++) {
        msaSequences[i] = msaContent + msaPos;
        msaSequences[i][lengthWithMask] = '\0';
        int seqIndex = 0;
        int msaIndex = 0;
        for (Instruction2 &ins : cigars[indices[i]]) {
            if (ins.isSeq()) {
                const unsigned int c = subMat.aa2num[static_cast<int>(ins.getCharacter())];
                if (mask[seqIndex] == '0') {
                    msaSequences[i][msaIndex] = c;
                    msaIndex++;
                }
                seqIndex++;
            } else {
                for (size_t j = 0; j < ins.bits.count; j++) {
                    if (mask[seqIndex] == '0') {
                        msaSequences[i][msaIndex] = (int)MultipleAlignment::GAP;
                        msaIndex++;
                    }
                    seqIndex++;
                }
            }
        }
        assert(msaIndex == lengthWithMask);
        msaPos += lengthWithMask + 1;
    }

    MultipleAlignment::MSAResult msaResult(lengthWithMask, lengthWithMask, indices.size(), msaSequences);

    size_t filteredSetSize = indices.size();
    if (filterMsa == 1) {
        std::vector<int> qid_vec = parseQidString(qid);
        filteredSetSize = filter.filter(
            indices.size(),
            lengthWithMask,
            static_cast<int>(covMSAThr * 100),
            qid_vec,
            qsc,
            static_cast<int>(filterMaxSeqId * 100),
            Ndiff,
            filterMinEnable,
            (const char **) msaSequences,
            true
        );
    }

    PSSMCalculator::Profile pssmRes = pssmCalculator.computePSSMFromMSA(
        filteredSetSize,
        msaResult.centerLength,
        (const char **) msaResult.msaSequence,
#ifdef GAP_POS_SCORING
        alnResults,
#endif
        wg
    );
    
    if (compBiasCorrection) {
        SubstitutionMatrix::calcGlobalAaBiasCorrection(
            &subMat,
            pssmRes.pssm,
            pNullBuffer,
            Sequence::PROFILE_AA_SIZE,
            lengthWithMask
        );
    }
    unsigned char * consensus = new unsigned char[lengthWithMask];
    for (int i = 0; i < lengthWithMask; ++i)
        consensus[i] = subMat.aa2num[pssmRes.consensus[i]];
    std::string result;
    pssmRes.toBuffer(consensus, lengthWithMask, subMat, result);

    delete[] pNullBuffer;
    free(msaContent);
    free(msaSequences);
    
    return result;
}

// Map 0001100 to [ 0 1 2 5 6 ]
// needs to be ungapped->gapped direction
std::vector<int> maskToMapping(std::string mask) {
    std::vector<int> mapping;
    for (size_t i = 0; i < mask.length(); ++i) {
        if (mask[i] == '0')
            mapping.push_back(i);
    }
    return mapping;
}

std::vector<AlnSimple> parseAndScoreExternalHits(
    DBReader<unsigned int> * cluDbr,
    int8_t * tinySubMatAA,
    int8_t * tinySubMat3Di,
    SubstitutionMatrix * subMat_aa,
    SubstitutionMatrix * subMat_3di,
    std::vector<Sequence*> & allSeqs_aa,
    std::vector<Sequence*> & allSeqs_3di,
    int maxSeqLen,
    int alphabetSize,
    int compBiasCorrection,
    int compBiasCorrectionScale
) {
    // open an alignment DBReader
    std::vector<AlnSimple> allAlnResults;

#pragma omp parallel
    {
        StructureSmithWaterman structureSmithWaterman(
            maxSeqLen,
            alphabetSize,
            compBiasCorrection,
            compBiasCorrectionScale,
            subMat_aa,
            subMat_3di
        );
        std::vector<AlnSimple> threadAlnResults;
        char buffer[255 + 1];

#pragma omp for schedule(dynamic, 10)
        for (size_t i = 0; i < cluDbr->getSize(); ++i) {
            char *data = cluDbr->getData(i, 0);
            unsigned int queryKey = cluDbr->getDbKey(i);
            structureSmithWaterman.ssw_init(
                allSeqs_aa[queryKey],
                allSeqs_3di[queryKey],
                tinySubMatAA,
                tinySubMat3Di,
                subMat_aa
            );
            while (*data != '\0') {
                Util::parseKey(data, buffer);
                const unsigned int dbKey = (unsigned int) strtoul(buffer, NULL, 10);
                if (queryKey == dbKey) {
                    data = Util::skipLine(data);
                    continue;
                }
                AlnSimple aln;
                aln.queryId = queryKey;
                aln.targetId = dbKey;
                aln.score = structureSmithWaterman.ungapped_alignment(allSeqs_aa[dbKey]->numSequence,
                                                                      allSeqs_3di[dbKey]->numSequence,
                                                                      allSeqs_aa[dbKey]->L);
                threadAlnResults.push_back(aln);
                data = Util::skipLine(data);
            }
        }
#pragma omp critical
        {
            allAlnResults.insert(allAlnResults.end(), threadAlnResults.begin(), threadAlnResults.end());
        }
    }
    return allAlnResults;
}

void addCigarStates(std::vector<Instruction2> &cigar, int state, int count) {
    while (count > 0) {
        if (cigar.empty() || cigar.back().bits.state != state || cigar.back().isFull()) {
            cigar.emplace_back(state, 0); 
        }
        int spaceLeft = 127 - static_cast<int>(cigar.back().bits.count);
        if (count > spaceLeft) {
            cigar.back().bits.count = 127;
            count -= spaceLeft;
        } else {
            cigar.back().bits.count += count;
            count = 0;
        }
    }
}

/**
 * @brief Get merge instructions for two MSAs
 * 
 * @param res  - alignment result
 * @param map1 - ungapped->gapped mapping for msa1
 * @param map2 - ungapped->gapped mapping for msa2
 * @param qBt  - vector to store query merge instructions
 * @param tBt  - vector to store target merge instructions
 */
void getMergeInstructions(
    Matcher::result_t &res,
    std::vector<int> &map1,
    std::vector<int> &map2,
    std::vector<Instruction2> &qBt,
    std::vector<Instruction2> &tBt
) {
    qBt.emplace_back(SEQ, 1);  // first match
    tBt.emplace_back(SEQ, 1);
    int new_q, dq;
    int new_t, dt;
    int old_q = map1[res.qStartPos];
    int old_t = map2[res.dbStartPos];
    int q = res.qStartPos + 1;  // indices in non-gappy sequence
    int t = res.dbStartPos + 1;
 
    // Generate instructions for query/target sequences from backtrace
    for (size_t i = 1; i < res.backtrace.length(); ++i) {
        switch (res.backtrace[i]) {
            case 'M': {
                new_q = map1[q];
                new_t = map2[t];
                dq = new_q - old_q;
                dt = new_t - old_t; 
                if (dq == 0) {
                    // No matches in query
                    addCigarStates(qBt, GAP, dt);
                    addCigarStates(tBt, SEQ, dt);
                } else if (dq == 1) {
                    // One match in query
                    if ((dt - 1) > 0)
                        addCigarStates(qBt, GAP, dt - 1);
                    addCigarStates(qBt, SEQ, 1);
                    addCigarStates(tBt, SEQ, dt);
                } else if (dq >= dt) {
                    // More query matches than target
                    addCigarStates(qBt, SEQ, dq);
                    addCigarStates(tBt, GAP, dq - dt);
                    addCigarStates(tBt, SEQ, dt);
                } else if (dt > dq) {
                    // More target than query
                    addCigarStates(qBt, GAP, dt - dq);
                    addCigarStates(qBt, SEQ, dq);
                    addCigarStates(tBt, SEQ, dt);
                }
                old_q = new_q;
                old_t = new_t;
                ++q;
                ++t;
                break;
            }
            case 'I': {
                ++q;
                break;
            }
            case 'D': {
                ++t;
                break;
            }
        }
    }
}

/**
 * @brief Expands a sequence based on CIGAR
 * 
 * @param sequence Raw sequence string
 * @param instructions Vector of Instruction instances corresponding to CIGAR strings
 * @return std::string Expanded alignment string
 */
std::string expand(std::string sequence, std::vector<Instruction> &instructions) {
    size_t index = 0;
    std::string result = "";
    for (Instruction ins : instructions) {
        if (ins.state == SEQ) { 
            result.append(sequence, index, ins.count);
            index += ins.count;
        } else {
            result.append(ins.count, '-');
        }
    }
    return result;
}

inline bool needNewInstruction(std::vector<Instruction2> &instructions) {
    return (
        instructions.empty()
        || instructions.back().isSeq()
        || instructions.back().isFull()
    );
}

std::string expand(std::vector<Instruction2> &instructions) {
    std::string result = "";
    for (Instruction2 &ins : instructions) {
        if (ins.isSeq()) {
            result.append(1, ins.getCharacter());
        } else {
            result.append(static_cast<int>(ins.bits.count), '-');
        }
    }
    return result;
}

/**
 * @brief Convert sequence string to vector of Instructions
 * 
 * e.g. --AB-C
 *      state 1, count 2
 *      state 0, A
 *      state 0, B
 *      state 1, count 1
 *      state 0, C
 *
 * @param sequence 
 * @return std::vector<Instruction2> 
 */
std::vector<Instruction2> contract(std::string sequence) {
    std::vector<Instruction2> instructions;
    for (char &letter : sequence) {
        if (letter == '\0') {
            break;
        }
        if (letter == '-') {
            if (needNewInstruction(instructions)) {
                instructions.emplace_back(static_cast<int>(1));
            } else {
                instructions.back().bits.count++;
            }
        } else {
            instructions.emplace_back(letter);
        }
    };
    std::string rex = expand(instructions);
    assert(rex == sequence);
    return instructions;
}

void printInstructions(std::vector<Instruction2> &instructions) {
    for (Instruction2 ins : instructions) {
        if (ins.bits.state == 0) { 
            std::cout << ins.getCharacter();
        } else {
            for (int i = 0; i < ins.bits.count; i++) {
                std::cout << '-';
            }
        }
    }
    std::cout << '\n';
}

/**
 * @brief Add gaps to a vector of instructions
 * 
 * @param toAdd number of gaps to add to end of instructions
 * @param instructions vector of instructions
 */
void addCigarGaps(
    int toAdd,
    std::vector<Instruction2> &instructionsAA,
    std::vector<Instruction2> &instructionsSS
) {
    while (toAdd > 0) {
        if (needNewInstruction(instructionsAA)) {
            instructionsAA.emplace_back(0);
            instructionsSS.emplace_back(0);
        }
        int spaceLeft = 127 - static_cast<int>(instructionsAA.back().bits.count);
        if (toAdd > spaceLeft) {
            instructionsAA.back().bits.count = 127;
            instructionsSS.back().bits.count = 127;
            toAdd -= spaceLeft;
        } else {
            instructionsAA.back().bits.count += toAdd;
            instructionsSS.back().bits.count += toAdd;
            toAdd = 0;
        }
    }
}

/**
 * @brief Generate new instructions for gaps/sequence before start of alignment
 * 
 * @param toAdd number of sequence positions to add
 * @param oldIndex index of current old instruction
 * @param newInstructionsAA 
 * @param newInstructionsSS 
 * @param oldInstructionsAA 
 * @param oldInstructionsSS 
 */
void addCigarIndices(
    int toAdd,
    int &oldIndex,
    std::vector<Instruction2> &newInstructionsAA,
    std::vector<Instruction2> &newInstructionsSS,
    std::vector<Instruction2> &oldInstructionsAA,
    std::vector<Instruction2> &oldInstructionsSS
) {
    while (toAdd > 0) {
        if (oldInstructionsAA[oldIndex].isSeq()) {
            newInstructionsAA.emplace_back(oldInstructionsAA[oldIndex].getCharacter());
            newInstructionsSS.emplace_back(oldInstructionsSS[oldIndex].getCharacter());
            oldIndex++;
            toAdd--;
        } else {
            if (needNewInstruction(newInstructionsAA)) {
                newInstructionsAA.emplace_back(0);
                newInstructionsSS.emplace_back(0);
            }
            int spaceLeft = 127 - newInstructionsAA.back().bits.count;
            if (toAdd > oldInstructionsAA[oldIndex].bits.count) {
                // use ALL of this instructions count
                // just have to check space in the new count

                if (oldInstructionsAA[oldIndex].bits.count > spaceLeft) {
                    // make new instruction/s until we exhaust the old instruction
                    newInstructionsAA.back().bits.count = 127;
                    newInstructionsSS.back().bits.count = 127;
                    oldInstructionsAA[oldIndex].bits.count -= spaceLeft;
                    oldInstructionsSS[oldIndex].bits.count -= spaceLeft;
                    toAdd -= spaceLeft;
                } else {
                    newInstructionsAA.back().bits.count += oldInstructionsAA[oldIndex].bits.count;
                    newInstructionsSS.back().bits.count += oldInstructionsSS[oldIndex].bits.count;
                    toAdd -= oldInstructionsAA[oldIndex].bits.count;
                    oldIndex++;
                }
            } else {
                if (toAdd > spaceLeft) {
                    newInstructionsAA.back().bits.count = 127;
                    newInstructionsSS.back().bits.count = 127;
                    oldInstructionsAA[oldIndex].bits.count -= spaceLeft;
                    oldInstructionsSS[oldIndex].bits.count -= spaceLeft;
                    toAdd -= spaceLeft;
                } else {
                    newInstructionsAA.back().bits.count += toAdd;
                    newInstructionsSS.back().bits.count += toAdd;
                    oldInstructionsAA[oldIndex].bits.count -= toAdd;
                    oldInstructionsSS[oldIndex].bits.count -= toAdd;
                    toAdd = 0;
                }
            }
        }
    }
}

void updateQueryCIGAR(
    std::vector<Instruction2> &cigar_aa,
    std::vector<Instruction2> &cigar_ss,
    std::vector<Instruction2> &instructions,
    int preGap,
    int preSequence,
    int endGap,
    int endSequence
) {
    int cigarIndex = 0;
    std::vector<Instruction2> aa;
    std::vector<Instruction2> ss;
    addCigarGaps(preGap, aa, ss);
    addCigarIndices(preSequence, cigarIndex, aa, ss, cigar_aa, cigar_ss);
    for (Instruction2 ins : instructions) {
        if (ins.isSeq()) {
            addCigarIndices(ins.bits.count, cigarIndex, aa, ss, cigar_aa, cigar_ss);
        } else {
            addCigarGaps(ins.bits.count, aa, ss);
        }
    }
    addCigarIndices(endSequence, cigarIndex, aa, ss, cigar_aa, cigar_ss);
    addCigarGaps(endGap, aa, ss);
    std::swap(cigar_aa, aa);
    std::swap(cigar_ss, ss);
}

void updateTargetCIGAR(
    std::vector<Instruction2> &cigar_aa,
    std::vector<Instruction2> &cigar_ss,
    std::vector<Instruction2> &instructions,
    int preGap,
    int preSequence,
    int endGap,
    int endSequence
) {
    int cigarIndex = 0;
    std::vector<Instruction2> aa;
    std::vector<Instruction2> ss;
    addCigarIndices(preSequence, cigarIndex, aa, ss, cigar_aa, cigar_ss);
    addCigarGaps(preGap, aa, ss);
    for (Instruction2 ins : instructions) {
        if (ins.isSeq()) {
            addCigarIndices(ins.bits.count, cigarIndex, aa, ss, cigar_aa, cigar_ss);
        } else {
            addCigarGaps(ins.bits.count, aa, ss);
        }
    }
    addCigarGaps(endGap, aa, ss);
    addCigarIndices(endSequence, cigarIndex, aa, ss, cigar_aa, cigar_ss);
    std::swap(cigar_aa, aa);
    std::swap(cigar_ss, ss);
}

/**
 * @brief 
 * 
 * @param group1 structure indices in first cluster
 * @param group2 structure indices in second cluster
 * @param cigars_aa AA CIGAR instruction vectors
 * @param cigars_ss 3Di CIGAR instruction vectors
 * @param res Alignment result
 * @param map1 Mask map for query profile
 * @param map2 Mask map for target profile
 * @param qBt Merge instructions for query profile
 * @param tBt Merge instructions for target profile
 * @return std::pair<std::string, std::string> 
 */
void updateCIGARS(
    std::vector<size_t> &group1,
    std::vector<size_t> &group2,
    std::vector<std::vector<Instruction2> > &cigars_aa,
    std::vector<std::vector<Instruction2> > &cigars_ss,
    Matcher::result_t &res,
    std::vector<int> qMap,
    std::vector<int> tMap,
    std::vector<Instruction2> &qBt,
    std::vector<Instruction2> &tBt
) {
    int qPreSequence = qMap[res.qStartPos];
    int qPreGaps     = tMap[res.dbStartPos];
    int qEndSequence = qMap.back() - qMap[res.qEndPos];
    int qEndGaps     = tMap.back() - tMap[res.dbEndPos];
    int tPreSequence = qPreGaps;
    int tPreGaps     = qPreSequence;
    int tEndSequence = qEndGaps;
    int tEndGaps     = qEndSequence;
    for (size_t index : group1)
        updateQueryCIGAR(cigars_aa[index], cigars_ss[index], qBt, qPreGaps, qPreSequence, qEndGaps, qEndSequence);
    for (size_t index : group2)
        updateTargetCIGAR(cigars_aa[index], cigars_ss[index], tBt, tPreGaps, tPreSequence, tEndGaps, tEndSequence);
}

void testSeqLens(std::vector<size_t> &indices, std::vector<std::vector<Instruction2> > &cigars, std::vector<int> &lengths) {
    for (int index : indices) {
        int length = cigarLength(cigars[index], false);
        // std::cout << headers[index] << '\t' << lengths[index] << '\t' << length << '\n';
        assert(lengths[index] == length);
    }
}

Matcher::result_t pairwiseTMAlign(
    int mergedId,
    int targetId,
    DBReader<unsigned int> &seqDbrAA,
    DBReader<unsigned int> &seqDbrCA
) {
    int qLen = seqDbrAA.getSeqLen(mergedId);
    int tLen = seqDbrAA.getSeqLen(targetId);
    
    unsigned int qKey = seqDbrAA.getDbKey(mergedId);
    size_t qCaId = seqDbrCA.getId(qKey);

    unsigned int tKey = seqDbrAA.getDbKey(targetId);
    size_t tCaId = seqDbrCA.getId(tKey);
    
    Coordinate16 qcoords;
    char *qcadata = seqDbrCA.getData(qCaId, 0);
    size_t qCaLength = seqDbrCA.getEntryLen(qCaId);
    float *qCaData = qcoords.read(qcadata, qLen, qCaLength);
    char *merged_aa_seq = seqDbrAA.getData(qCaId, 0);
    
    Coordinate16 tcoords;
    char *tcadata = seqDbrCA.getData(tCaId, 0);
    size_t tCaLength = seqDbrCA.getEntryLen(tCaId);
    float *tCaData = tcoords.read(tcadata, tLen, tCaLength);
    char *target_aa_seq = seqDbrAA.getData(tCaId, 0);

    float TMscore = 0.0;
    TMaligner tmaln(std::max(qLen, tLen)+VECSIZE_FLOAT, 1, 0);
    tmaln.initQuery(qCaData, &qCaData[qLen], &qCaData[qLen * 2], merged_aa_seq, qLen);
    Matcher::result_t res = tmaln.align(targetId, tCaData, &tCaData[tLen], &tCaData[tLen * 2], target_aa_seq, tLen, TMscore);
    res.backtrace = Matcher::uncompressAlignment(res.backtrace);
    res.score /= 100;

    return res;
}

// copy from one to two
void copyInstructions(std::vector<Instruction2> &one, std::vector<Instruction2> &two) {
    for (Instruction2 ins : one) {
        two.emplace_back(static_cast<int>(ins.bits.state), static_cast<int>(ins.bits.count));
    }
}

// copy from one to two
void copyInstructionVectors(std::vector<std::vector<Instruction2> > &one, std::vector<std::vector<Instruction2> > &two) {
    two.clear();
    two.resize(one.size());
    // for (std::vector<Instruction2> vec : one) {
    for (size_t i = 0; i < one.size(); i++) {
        // std::vector<Instruction2> tmp;
        copyInstructions(one[i], two[i]);
        // two[i] = tmp;
    }
}

std::string cigarsToMSA(
    std::vector<std::string> &headers,
    std::vector<std::vector<Instruction2> > &cigars,
    std::vector<size_t> group1,
    std::vector<size_t> group2
) {
    std::string msa;
    for (size_t index : group1) {
        msa += '>' + headers[index] + '\n';
        msa += expand(cigars[index]) + '\n';
    }
    for (size_t index : group2) {
        msa += '>' + headers[index] + '\n';
        msa += expand(cigars[index]) + '\n';
    }
    return msa;
}

int structuremsa(int argc, const char **argv, const Command& command, bool preCluster) {
    LocalParameters &par = LocalParameters::getLocalInstance();

    // Databases
    const bool touch = (par.preloadMode != Parameters::PRELOAD_MODE_MMAP);
    par.parseParameters(argc, argv, command, true, 0, MMseqsParameter::COMMAND_ALIGN);

    DBReader<unsigned int> seqDbrAA(par.db1.c_str(), par.db1Index.c_str(), par.threads, DBReader<unsigned int>::USE_INDEX|DBReader<unsigned int>::USE_DATA|DBReader<unsigned int>::USE_LOOKUP_REV);
    seqDbrAA.open(DBReader<unsigned int>::NOSORT);
    DBReader<unsigned int> seqDbr3Di((par.db1+"_ss").c_str(), (par.db1+"_ss.index").c_str(), par.threads, DBReader<unsigned int>::USE_INDEX|DBReader<unsigned int>::USE_DATA);
    seqDbr3Di.open(DBReader<unsigned int>::NOSORT);
    DBReader<unsigned int> seqDbrCA((par.db1+"_ca").c_str(), (par.db1+"_ca.index").c_str(), par.threads, DBReader<unsigned int>::USE_INDEX|DBReader<unsigned int>::USE_DATA);
    seqDbrCA.open(DBReader<unsigned int>::NOSORT);
   
    IndexReader qdbrH(par.db1, par.threads, IndexReader::HEADERS, touch ? IndexReader::PRELOAD_INDEX : 0);
    
    std::cout << "Got databases" << std::endl;
   
    SubstitutionMatrix subMat_3di(par.scoringMatrixFile.values.aminoacid().c_str(), par.bitFactor3Di, par.scoreBias3di);
    std::string blosum;
    for (size_t i = 0; i < par.substitutionMatrices.size(); i++) {
        if (par.substitutionMatrices[i].name == "blosum62.out") {
            std::string matrixData((const char *)par.substitutionMatrices[i].subMatData, par.substitutionMatrices[i].subMatDataLen);
            std::string matrixName = par.substitutionMatrices[i].name;
            char * serializedMatrix = BaseMatrix::serialize(matrixName, matrixData);
            blosum.assign(serializedMatrix);
            free(serializedMatrix);
        }
    }
    SubstitutionMatrix subMat_aa(blosum.c_str(), par.bitFactorAa, par.scoreBiasAa);

    std::cout << "Got substitution matrices" << std::endl;

    // Initialise MSAs, Sequence objects
    size_t sequenceCnt = seqDbrAA.getSize();
    std::vector<Sequence*> allSeqs_aa(sequenceCnt);
    std::vector<Sequence*> allSeqs_3di(sequenceCnt);
    
    // Current representation of sequences
    std::vector<std::vector<Instruction2> > cigars_aa(sequenceCnt);
    std::vector<std::vector<Instruction2> > cigars_ss(sequenceCnt);
    
    // Current clusters of structures (indices)
    std::vector<std::vector<size_t> > groups(sequenceCnt);

    // map i <=> dbKey. used in LDDT calculation to retrieve CA
    std::vector<size_t> dbKeys(sequenceCnt);

    std::vector<std::string> headers(sequenceCnt);
    std::vector<std::string> mappings(sequenceCnt);
    std::vector<size_t> idMappings(sequenceCnt);
    std::map<std::string, int> headers_rev;
    
#ifdef GAP_POS_SCORING
    std::cout << "ENABLED GAP POS SCORING\n";
#endif

    // std::map<std::string, int> seqLens;
    std::vector<int> seqLens(sequenceCnt);

    int maxSeqLength = par.maxSeqLen;

    // TODO: could parallelise this, just need to have reduction for maxSeqLength
    for (size_t i = 0; i < sequenceCnt; i++) {
        size_t seqKeyAA = seqDbrAA.getDbKey(i);
        size_t seqKey3Di = seqDbr3Di.getDbKey(i);
        
        dbKeys[i] = seqKeyAA;

        // Grab headers, remove \0
        std::string header = qdbrH.sequenceReader->getData(seqKeyAA, 0);
        header = header.substr(0, std::min(header.length() - 1, header.find(' ', 0)));
        headers[i] = header;
        headers_rev[header] = i;
        
        std::string seq_aa = seqDbrAA.getData(i, 0);
        std::string seq_ss = seqDbr3Di.getData(i, 0);

        // Create Sequences
        allSeqs_aa[i] = new Sequence(par.maxSeqLen, seqDbrAA.getDbtype(), (const BaseMatrix *) &subMat_aa, 0, false, par.compBiasCorrection);
        allSeqs_aa[i]->mapSequence(i, seqKeyAA, seq_aa.c_str(), seq_aa.length());
        allSeqs_3di[i] = new Sequence(par.maxSeqLen, seqDbr3Di.getDbtype(), (const BaseMatrix *) &subMat_3di, 0, false, par.compBiasCorrection);
        allSeqs_3di[i]->mapSequence(i, seqKey3Di, seq_ss.c_str(), seq_ss.length());

        // Default state is SEQ (no gaps yet)
        groups[i].push_back(i);
        for (int j = 0; j < allSeqs_aa[i]->L; j++) {
            cigars_aa[i].emplace_back(seq_aa[j]);
            cigars_ss[i].emplace_back(seq_ss[j]);
        }

        maxSeqLength = std::max(maxSeqLength, allSeqs_aa[i]->L);
        mappings[i]  = std::string(allSeqs_aa[i]->L, '0');

        // Map each sequence id to itself for now
        idMappings[i] = i;

        seqLens[i] = allSeqs_aa[i]->L;
    }
   
    // TODO: dynamically calculate and re-init PSSMCalculator/MsaFilter each iteration
    std::cout << "Initialised MSAs, Sequence objects" << std::endl;

    // Substitution matrices needed for query profile
    int8_t *tinySubMatAA  = (int8_t*) mem_align(ALIGN_INT, subMat_aa.alphabetSize * 32);
    int8_t *tinySubMat3Di = (int8_t*) mem_align(ALIGN_INT, subMat_3di.alphabetSize * 32);

    for (int i = 0; i < subMat_3di.alphabetSize; i++)
        for (int j = 0; j < subMat_3di.alphabetSize; j++)
            tinySubMat3Di[i * subMat_3di.alphabetSize + j] = subMat_3di.subMatrix[i][j]; // for farrar profile
    for (int i = 0; i < subMat_aa.alphabetSize; i++)
        for (int j = 0; j < subMat_aa.alphabetSize; j++)
            tinySubMatAA[i * subMat_aa.alphabetSize + j] = subMat_aa.subMatrix[i][j];
    std::cout << "Set up tiny substitution matrices" << std::endl;

    bool * alreadyMerged = new bool[sequenceCnt];
   
    DBReader<unsigned int> * cluDbr = NULL;

    if (preCluster) {
        // consider everything merged and unmerge the ones that are not
        memset(alreadyMerged, 1, sizeof(bool) * sequenceCnt);
        cluDbr = new DBReader<unsigned int>(
            par.db2.c_str(),
            par.db2Index.c_str(),
            par.threads,
            DBReader<unsigned int>::USE_INDEX | DBReader<unsigned int>::USE_DATA
        );
        cluDbr->open(DBReader<unsigned int>::LINEAR_ACCCESS);
        // mark all sequences that are already clustered as merged
        for(size_t i = 0; i < cluDbr->getSize(); i++){
            unsigned int dbKey = cluDbr->getDbKey(i);
            alreadyMerged[dbKey] = 0;
        }
    } else {
        memset(alreadyMerged, 0, sizeof(bool) * sequenceCnt);
    }       

    std::vector<AlnSimple> hits;
    if (par.guideTree != "") {
        std::cout << "Loading guide tree: " << par.guideTree << "\n";
        std::string tree;
        std::string line;
        std::ifstream newick(par.guideTree);
        if (newick.is_open()) {
            while (std::getline(newick, line))
                tree += line;
            newick.close();
        }
        hits = parseNewick(tree, headers_rev);
        if (par.regressive)
            std::reverse(hits.begin(), hits.end());
    } else {
        hits = updateAllScores(
            tinySubMatAA,
            tinySubMat3Di,
            &subMat_aa,
            &subMat_3di,
            allSeqs_aa,
            allSeqs_3di,
            alreadyMerged,
            par.maxSeqLen,
            subMat_3di.alphabetSize,
            par.compBiasCorrection,
            par.compBiasCorrectionScale
        );
        if (cluDbr != NULL) {
            // add external hits to the list
            std::vector<AlnSimple> externalHits = parseAndScoreExternalHits(
                cluDbr,
                tinySubMatAA,
                tinySubMat3Di,
                &subMat_aa,
                &subMat_3di,
                allSeqs_aa,
                allSeqs_3di,
                par.maxSeqLen,
                subMat_3di.alphabetSize,
                par.compBiasCorrection,
                par.compBiasCorrectionScale
            );
            // maybe a bit dangerous because memory of hits might be doubled
            for (size_t i = 0; i < externalHits.size(); i++)
                hits.push_back(externalHits[i]);
        }
        sortHitsByScore(hits);
        std::cout << "Performed initial all vs all alignments\n";
        
        hits = mst(hits, sequenceCnt);
        std::cout << "Generated guide tree\n";
    }
    

    std::cout << "Optimising merge order\n";
    std::vector<size_t> merges;
    hits = reorderLinkage(hits, merges, sequenceCnt);

    int idx = 0;
    for (size_t i = 0; i < merges.size(); i++) {
        std::cout << "Merging " << merges[i] << " sequences\n";
        for (size_t j = 0; j < merges[i]; j++) {
            std::cout << "  " << headers[hits[idx + j].queryId] << "\t" << headers[hits[idx + j].targetId] << '\t' << hits[idx + j].score << '\n';
        }
        idx += merges[i];
    }

    std::string nw = orderToTree(hits, headers, sequenceCnt);
    std::cout << "Tree: " << nw << ";\n";

    std::cout << "Merging:\n";

    size_t mergedId;
    size_t targetId;

#pragma omp parallel
{
    // Initialise alignment objects per thread
    StructureSmithWaterman structureSmithWaterman(par.maxSeqLen, subMat_3di.alphabetSize, par.compBiasCorrection, par.compBiasCorrectionScale, &subMat_aa, &subMat_3di);
    MsaFilter filter_aa(maxSeqLength + 1, sequenceCnt + 1, &subMat_aa, par.gapOpen.values.aminoacid(), par.gapExtend.values.aminoacid());
    MsaFilter filter_3di(maxSeqLength + 1, sequenceCnt + 1, &subMat_3di, par.gapOpen.values.aminoacid(), par.gapExtend.values.aminoacid()); 
    PSSMCalculator calculator_aa(&subMat_aa, maxSeqLength + 1, sequenceCnt + 1, par.pcmode, par.pcaAa, par.pcbAa
#ifdef GAP_POS_SCORING
    , par.gapOpen.values.aminoacid(), par.gapPseudoCount
#endif
    );
    PSSMCalculator calculator_3di(&subMat_3di, maxSeqLength + 1, sequenceCnt + 1, par.pcmode, par.pca3di, par.pcb3di
#ifdef GAP_POS_SCORING
    , par.gapOpen.values.aminoacid(), par.gapPseudoCount
#endif
    );

    int index = 0; // in hit list
    for (size_t i = 0; i < merges.size(); i++) {

#pragma omp for schedule(dynamic, 1)
        for (size_t j = 0; j < merges[i]; j++) {
            mergedId = std::min(hits[index + j].queryId, hits[index + j].targetId);
            targetId = std::max(hits[index + j].queryId, hits[index + j].targetId);
            mergedId = idMappings[mergedId];
            targetId = idMappings[targetId];
            bool queryIsProfile = (Parameters::isEqualDbtype(allSeqs_aa[mergedId]->getSeqType(), Parameters::DBTYPE_HMM_PROFILE));
            bool targetIsProfile = (Parameters::isEqualDbtype(allSeqs_aa[targetId]->getSeqType(), Parameters::DBTYPE_HMM_PROFILE));

            // Always merge onto sequence with most information
            if (targetIsProfile && !queryIsProfile) {
                std::swap(mergedId, targetId);
            } else if (targetIsProfile && queryIsProfile) {
                float q_neff_sum = 0.0;
                float t_neff_sum = 0.0;
                for (int i = 0; i < allSeqs_3di[mergedId]->L; i++)
                    q_neff_sum += allSeqs_3di[mergedId]->neffM[i];
                for (int i = 0; i < allSeqs_3di[targetId]->L; i++)
                    t_neff_sum += allSeqs_3di[targetId]->neffM[i];
                if (q_neff_sum <= t_neff_sum)
                    std::swap(mergedId, targetId);
            }

            queryIsProfile = (Parameters::isEqualDbtype(allSeqs_aa[mergedId]->getSeqType(), Parameters::DBTYPE_HMM_PROFILE));
            targetIsProfile = (Parameters::isEqualDbtype(allSeqs_aa[targetId]->getSeqType(), Parameters::DBTYPE_HMM_PROFILE));

            assert(mergedId != targetId);

            // Make sure all relevant ids are updated
            for (size_t k = 0; k < sequenceCnt; k++) {
                if (idMappings[k] == targetId) {
                    idMappings[k] = mergedId;
                }
            }

            // Convert 010101 mask to [ 0, 2, 4 ] index mapping
            std::vector<int> map1 = maskToMapping(mappings[mergedId]);
            std::vector<int> map2 = maskToMapping(mappings[targetId]);
            structureSmithWaterman.ssw_init(
                allSeqs_aa[mergedId],
                allSeqs_3di[mergedId],
                tinySubMatAA,
                tinySubMat3Di,
                &subMat_aa
            );
            Matcher::result_t res = pairwiseAlignment(
                structureSmithWaterman,
                allSeqs_aa[mergedId]->L,
                allSeqs_aa[mergedId],
                allSeqs_3di[mergedId],
                allSeqs_aa[targetId],
                allSeqs_3di[targetId],
                par.gapOpen.values.aminoacid(),
                par.gapExtend.values.aminoacid(),
                &subMat_aa,
                &subMat_3di,
                par.compBiasCorrection
            );
            std::vector<Instruction2> qBt;
            std::vector<Instruction2> tBt;
            getMergeInstructions(res, map1, map2, qBt, tBt);
        
            // If neither are profiles, do TM-align as well and take the best alignment
            bool tmaligned = false;
            if (false && !queryIsProfile && !targetIsProfile) {
                Matcher::result_t tmRes = pairwiseTMAlign(mergedId, targetId, seqDbrAA, seqDbrCA);
                std::vector<Instruction2> qBtTM;
                std::vector<Instruction2> tBtTM;
                getMergeInstructions(tmRes, map1, map2, qBtTM, tBtTM);

                // TODO put this info in struct?
                int qPreSequence = map1[tmRes.qStartPos];
                int qPreGaps     = map2[tmRes.dbStartPos];
                int qEndSequence = map1[map1.size() - 1] - map1.at(tmRes.qEndPos);
                int qEndGaps     = map2[map2.size() - 1] - map2.at(tmRes.dbEndPos);
                int tPreSequence = qPreGaps;
                int tPreGaps     = qPreSequence;
                int tEndSequence = qEndGaps;
                int tEndGaps     = qEndSequence;
                std::vector<Instruction2> query_aa;
                std::vector<Instruction2> query_ss;
                std::vector<Instruction2> target_aa;
                std::vector<Instruction2> target_ss;
                copyInstructions(cigars_aa[mergedId], query_aa);
                copyInstructions(cigars_ss[mergedId], query_ss);
                copyInstructions(cigars_aa[targetId], target_aa);
                copyInstructions(cigars_ss[targetId], target_ss);
                updateQueryCIGAR(query_aa, query_ss, qBtTM, qPreGaps, qPreSequence, qEndGaps, qEndSequence);
                updateTargetCIGAR(target_aa, target_ss, tBtTM, tPreGaps, tPreSequence, tEndGaps, tEndSequence);
                
                // std::cout << "TM Alignment:\n";
                // std::cout << expand(query_aa) << '\n';
                // std::cout << expand(target_aa) << '\n';
               
                // mock vectors for lddt
                // TODO make alternative LDDT calculation fn so we don't have to do this
                std::vector<std::vector<Instruction2> > cigars_tm = { query_aa, target_aa };
                std::vector<size_t> subset_tm = { 0, 1 };
                std::vector<size_t> indices_tm = { dbKeys[mergedId], dbKeys[targetId] };
                std::vector<int>    lengths_tm = { seqLens[mergedId], seqLens[targetId] };

                float lddtTM = std::get<2>(calculate_lddt(cigars_tm, subset_tm, indices_tm, lengths_tm, &seqDbrCA, par.pairThreshold));
                // std::cout << "got TM lddt: " << lddtTM << '\n';
                
                // adjust cigars with 3Di alignment result
                qPreSequence = map1[res.qStartPos];
                qPreGaps     = map2[res.dbStartPos];
                qEndSequence = map1[map1.size() - 1] - map1.at(res.qEndPos);
                qEndGaps     = map2[map2.size() - 1] - map2.at(res.dbEndPos);
                tPreSequence = qPreGaps;
                tPreGaps     = qPreSequence;
                tEndSequence = qEndGaps;
                tEndGaps     = qEndSequence;
                query_aa.clear();
                query_ss.clear();
                target_aa.clear();
                target_ss.clear();
                copyInstructions(cigars_aa[mergedId], query_aa);
                copyInstructions(cigars_ss[mergedId], query_ss);
                copyInstructions(cigars_aa[targetId], target_aa);
                copyInstructions(cigars_ss[targetId], target_ss);
                updateQueryCIGAR(query_aa, query_ss, qBt, qPreGaps, qPreSequence, qEndGaps, qEndSequence);
                updateTargetCIGAR(target_aa, target_ss, tBt, tPreGaps, tPreSequence, tEndGaps, tEndSequence);
                cigars_tm[0] = query_aa;
                cigars_tm[1] = target_aa;
                
                // std::cout << "3Di Alignment:\n";
                // std::cout << expand(query_aa) << '\n';
                // std::cout << expand(target_aa) << '\n';

                float lddt3Di = std::get<2>(calculate_lddt(cigars_tm, subset_tm, indices_tm, lengths_tm, &seqDbrCA, par.pairThreshold));
                // std::cout << "got 3Di lddt: " << lddt3Di << '\n';

                if (lddtTM > lddt3Di) {
                    res = tmRes;
                    qBt = qBtTM;
                    tBt = tBtTM;
                    tmaligned = true;
                }
            }
            updateCIGARS(groups[mergedId], groups[targetId], cigars_aa, cigars_ss, res, map1, map2, qBt, tBt);           

            groups[mergedId].insert(groups[mergedId].end(), groups[targetId].begin(), groups[targetId].end());
            groups[targetId].clear();
            mappings[targetId].clear();

            testSeqLens(groups[mergedId], cigars_aa, seqLens);

if (true) {
            // calculate LDDT of merged alignment
            float lddtScore = std::get<2>(calculate_lddt(cigars_aa, groups[mergedId], dbKeys, seqLens, &seqDbrCA, par.pairThreshold));
            std::cout << std::fixed << std::setprecision(3)
                << queryIsProfile << "\t" << targetIsProfile << '\t' << headers[mergedId] << "\t" << headers[targetId]
                << "\tLDDT: " << lddtScore << '\t' << res.score;
            if (tmaligned){
                std::cout << "\t(TM-align)";
            }
            std::cout << '\n';
}
            
            mappings[mergedId] = computeProfileMask(
                groups[mergedId],
                cigars_aa,
                seqLens,
                subMat_aa,
                par.matchRatio
            );
            std::string profile_aa = msa2profile(
                groups[mergedId],
                cigars_aa,
                mappings[mergedId],
                calculator_aa,
                filter_aa,
                subMat_aa,
                par.filterMsa,
                par.compBiasCorrection,
                par.qid,
                par.filterMaxSeqId,
                par.Ndiff,
                par.covMSAThr,
                par.qsc,
                par.filterMinEnable,
                par.wg,
                1
            );
            std::string profile_3di = msa2profile(
                groups[mergedId],
                cigars_ss,
                mappings[mergedId],
                calculator_3di,
                filter_3di,
                subMat_3di,
                par.filterMsa,
                par.compBiasCorrection,
                par.qid,
                par.filterMaxSeqId,
                par.Ndiff,
                par.covMSAThr,
                par.qsc,
                par.filterMinEnable,
                par.wg,
                par.maxSeqLen
            );
            assert(profile_aa.length() == profile_3di.length());

            if (Parameters::isEqualDbtype(allSeqs_aa[mergedId]->getSeqType(), Parameters::DBTYPE_AMINO_ACIDS)) {
                delete allSeqs_aa[mergedId];
                delete allSeqs_3di[mergedId];
                allSeqs_aa[mergedId]  = new Sequence(par.maxSeqLen, Parameters::DBTYPE_HMM_PROFILE, (const BaseMatrix *) &subMat_aa, 0, false, par.compBiasCorrection);
                allSeqs_3di[mergedId] = new Sequence(par.maxSeqLen, Parameters::DBTYPE_HMM_PROFILE, (const BaseMatrix *) &subMat_3di, 0, false, par.compBiasCorrection);
            }

            allSeqs_aa[mergedId]->mapSequence(mergedId, mergedId, profile_aa.c_str(), profile_aa.length() / Sequence::PROFILE_READIN_SIZE);
            allSeqs_3di[mergedId]->mapSequence(mergedId, mergedId, profile_3di.c_str(), profile_3di.length() / Sequence::PROFILE_READIN_SIZE);
            alreadyMerged[targetId] = true;
        }
        index += merges[i];
        // merged += merges[i];
    }

    // Refine alignment -- MUSCLE5 style
    // 1. Partition into two sub-MSAs
    // 2. Remove all-gap columns
    // 3. Create sub-MSA profiles
    // 4. Save profiles -> Sequence objects
    // 5. Pairwise alignment
    // 6. Repeat x100
    // Only run with master thread
#pragma omp master
{
    if (par.refineIters > 0) {
        refineMany(
            tinySubMatAA, tinySubMat3Di, &seqDbrCA, cigars_aa, cigars_ss, calculator_aa,
            filter_aa, subMat_aa, calculator_3di, filter_3di, subMat_3di, structureSmithWaterman,
            par.refineIters, par.compBiasCorrection, par.wg, par.filterMaxSeqId, par.matchRatio, par.qsc,
            par.Ndiff, par.covMSAThr, par.filterMinEnable, par.filterMsa, par.gapExtend.values.aminoacid(),
            par.gapOpen.values.aminoacid(), par.maxSeqLen, par.qid, par.pairThreshold, dbKeys, seqLens
        );
    }
}

}
    // Cleanup
    delete[] alreadyMerged;
    delete [] tinySubMatAA;
    delete [] tinySubMat3Di;
    for (size_t i = 0; i < allSeqs_aa.size(); i++) {
        delete allSeqs_aa[i];
        delete allSeqs_3di[i];
    }
    seqDbrAA.close();
    seqDbr3Di.close();

    // Write final MSA to file with correct headers
    DBWriter resultWriter(
        par.filenames[par.filenames.size()-1].c_str(),
        (par.filenames[par.filenames.size()-1] + ".index").c_str(),
        static_cast<unsigned int>(par.threads), par.compressed, Parameters::DBTYPE_OMIT_FILE
    );
    resultWriter.open();
    resultWriter.writeStart(0);
    std::string buffer;
    buffer.reserve(10 * 1024);
    for (size_t i = 0; i < cigars_aa.size(); i++) {
        size_t idx = groups[mergedId][i];
        buffer.append(1, '>');
        buffer.append(headers[idx]);
        buffer.append(1, '\n');
        buffer.append((par.outputmode == 0) ? expand(cigars_aa[idx]) : expand(cigars_ss[idx]));
        buffer.append(1, '\n');
        resultWriter.writeAdd(buffer.c_str(), buffer.size(), 0);
        buffer.clear();
    } 
    resultWriter.writeEnd(0, 0, false, 0);
    resultWriter.close(true);
    FileUtil::remove((par.filenames[par.filenames.size()-1] + ".index").c_str());
   
    return EXIT_SUCCESS;
}

int structuremsa(int argc, const char **argv, const Command& command) {
    return structuremsa(argc, argv, command, false);
}

int structuremsacluster(int argc, const char **argv, const Command& command) {
    return structuremsa(argc, argv, command, true);
}
