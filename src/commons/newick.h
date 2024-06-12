#include <iostream>
#include <string>
#include <vector>
#include <unordered_map>
#include "IndexReader.h"

#ifndef NEWICK_H
#define NEWICK_H

struct AlnSimple {
    size_t queryId;
    size_t targetId;
    int score;
};

class NewickParser {
public:
    struct Node {
        size_t id;
        size_t dbId;
        size_t rank;
        size_t descendants;
        std::string name;
        std::vector<Node*> children;
        Node(const std::string& name = "") : name(name) {}
        Node(size_t id, size_t dbId, const std::string& name, size_t rank) : id(id), dbId(dbId), rank(rank), name(name) {}
        Node(size_t id) : id(id) {}
        ~Node() {
            for (auto *child : children) {
                delete child;
            }
        }
    };
    static Node* parse(const std::string& newick);
    static Node* buildTree(std::vector<AlnSimple> &merges); 
    static void updateDescendants(Node* node, Node* newParent, std::unordered_map<size_t, Node*>& nodeMap); 
    static void addNames(Node* root, IndexReader* headers);
    static void postOrder(Node* node, std::vector<std::string> *linkage);
    static std::string toNewick(const Node* node);
private:

};

#endif