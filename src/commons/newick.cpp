#include <iostream>
#include <string>
#include <vector>
#include <stack>
#include "Util.h"
#include "newick.h"

NewickParser::Node* NewickParser::parse(const std::string& newick) {
    Node* root = new Node();
    std::stack<Node*> stack;
    stack.push(root); // dummy root
    std::string token;
    
    std::string parsed = "";
    bool readingBranchLength = false;

    for (char ch : newick) {
        parsed += ch;
        if (readingBranchLength) {
            if (ch == ',' || ch == ')' || ch == ';') {
                readingBranchLength = false;
            } else {
                continue;
            }
        }
        switch (ch) {
            case '(':  // Start new node
                stack.push(new Node());
                break;
            case ')':  // End of a node
                if (!token.empty()) {
                    stack.top()->children.push_back(new Node(token));
                    token.clear();
                }
                if (!stack.empty()) {
                    Node* finishedNode = stack.top();
                    stack.pop();
                    if (!stack.empty()) {
                        stack.top()->children.push_back(finishedNode);
                    }
                }
                break;
            case ',':  // Another child of the current node
                if (!token.empty()) {
                    stack.top()->children.push_back(new Node(token));
                    token.clear();
                }
                break;
            case ':':  // Branch length portion starting; set flag to ignore
                readingBranchLength = true;
                break;
            case ';':  // End of tree
                break;
            default:   // Otherwise just add to the token if alphanumeric
                if (!isspace(ch)) {
                    token += ch;
                }
                break;
        }
    }
    Node* actualRoot = root->children.empty() ? nullptr : root->children.front();
    root->children.clear();
    delete root;
    return actualRoot;
}

std::string NewickParser::toNewick(const NewickParser::Node* node) {
    if (!node) return "";
    std::string buffer;
    if (!node->children.empty()) {
        // Intermediate node with children
        buffer += "(";
        for (size_t i = 0; i < node->children.size(); i++) {
            buffer += NewickParser::toNewick(node->children[i]);
            if (i < node->children.size() - 1) {
                buffer += ",";
            }
        }
        buffer += ")";
    }
    // Leaf node, just add name
    buffer += node->name;
    
    return buffer;
}

/**
 * @brief Post-order traversal of a parsed Tree.
 * Generates the merging order for structuremsa
 * 
 * @param node Pointer to root TNode of the tree
 */
void NewickParser::postOrder(NewickParser::Node *node, std::vector<std::string> *linkage) {
    for (NewickParser::Node *child : node->children) {
        postOrder(child, linkage);
    }
    if (node->children.size() > 0) {
        for (NewickParser::Node *child : node->children) {
            linkage->push_back(child->name);

            // Propagate child name from leaf to root, so we
            // always have a reference during alignment stage
            node->name = child->name;
        }
    }
}

/**
 * @brief Update nodeMap to point to newest root for ALL children of a Node
 * 
 * @param node 
 * @param newParent 
 * @param nodeMap 
 */
void NewickParser::updateDescendants( NewickParser::Node* node, NewickParser::Node* newParent, std::unordered_map<size_t, Node*>& nodeMap) {
    nodeMap[node->id] = newParent;
    for (NewickParser::Node* child : node->children) {
        nodeMap[child->id] = newParent;
        updateDescendants(child, newParent, nodeMap);
    }
}

/**
 * @brief Build a tree from a list of successive merges (i.e. with queryId/targetId)
 * 
 * @param merges 
 * @return NewickParser::Node* 
 */
NewickParser::Node* NewickParser::buildTree(std::vector<AlnSimple> &merges) {
    std::unordered_map<size_t, NewickParser::Node*> nodeMap;
    NewickParser::Node* root = nullptr;
    NewickParser::Node* nodeA = nullptr;
    NewickParser::Node* nodeB = nullptr;
    for (const AlnSimple& merge : merges) {
        root = new NewickParser::Node(merge.queryId);
        nodeA = (nodeMap.find(merge.queryId) == nodeMap.end()) ? new NewickParser::Node(merge.queryId) : nodeMap[merge.queryId];
        nodeB = (nodeMap.find(merge.targetId) == nodeMap.end()) ? new NewickParser::Node(merge.targetId) : nodeMap[merge.targetId];
        root->children.push_back(nodeA);
        root->children.push_back(nodeB);
        updateDescendants(nodeA, root, nodeMap);
        updateDescendants(nodeB, root, nodeMap);
    }
    return root;
}


void NewickParser::addNames(Node* root, IndexReader* headers, bool hasKeys) {
    for (auto &child : root->children) {
        NewickParser::addNames(child, headers, hasKeys);
    }
    if (root->children.size() == 0) {
        unsigned int headerId = hasKeys ? root->id : headers->sequenceReader->getId(root->id);
        root->name = Util::parseFastaHeader(headers->sequenceReader->getData(headerId, 0));
    }
}