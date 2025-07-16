#include <iostream>
#include <string>
#include <vector>
#include <unordered_map>
#include "IndexReader.h"

#ifndef NEWICK_H
#define NEWICK_H

struct __attribute__((__packed__)) AlnSimple {
    unsigned int queryId;
    unsigned int targetId;
    unsigned short score;
};

struct __attribute__((__packed__)) AlnEdge {
    unsigned int parentId;
    unsigned int childId;
    double length;
};

class NewickParser {
public:
    struct Node {
        size_t id;
        std::string name;
        std::vector<Node*> children;
        Node(const std::string& name = "") : name(name) {}
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