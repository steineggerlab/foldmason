#include "cigar.h"

FMCigar::FMCigar(size_t id) : id(id), aa(), ss() {}
FMCigar::FMCigar(size_t id, const std::string &aa, const std::string &ss) : id(id), aa(contract(aa)), ss(contract(ss)) {}
FMCigar::FMCigar(const FMCigar &other) : id(other.id), aa(other.aa), ss(other.ss) {}
FMCigar::FMCigar(
    FMCigar &other,
    const std::vector<Instruction> &instructions,
    const int preGap,
    const int preSequence,
    const int endGap,
    const int endSequence,
    const bool isTarget       
) : id(other.id) {
    update(other, instructions, preGap, preSequence, endGap, endSequence, isTarget);
}

int FMCigar::spaceLeftBack() {
    return 127 - aa.back().bits.count;
}

bool FMCigar::isCharacter(const int &index) {
    return (aa[index].isSeq());
}

inline void FMCigar::addEmpty() {
    aa.emplace_back(0);
    ss.emplace_back(0);
}

inline void FMCigar::addCharacter(const FMCigar &other, int index) {
    aa.emplace_back(other.aa[index].getCharacter());
    ss.emplace_back(other.ss[index].getCharacter());
}

inline void FMCigar::fillBackCount() {
    aa.back().bits.count = 127;
    ss.back().bits.count = 127;
}

inline void FMCigar::addToBackCount(int n) {
    aa.back().bits.count += n;
    ss.back().bits.count += n;
}

inline void FMCigar::subtractFromCount(int index, int n) {
    aa[index].bits.count -= n;
    aa[index].bits.count -= n;
}

void FMCigar::addGaps(int n) {
    while (n > 0) {
        if (needNewInstruction()) {
            addEmpty();
        }
        int spaceLeft = 127 - static_cast<int>(aa.back().bits.count);
        if (n > spaceLeft) {
            fillBackCount();
            n -= spaceLeft;
        } else {
            addToBackCount(n);
            n = 0;
        }
    }
}

void FMCigar::addIndices(int n, int &index, FMCigar &other) {
    while (n > 0) {
        if (other.isCharacter(index)) {
            addCharacter(other, index++);
            n--;
        } else {
            if (needNewInstruction()) {
                addEmpty();
            }            
            int spaceLeft = spaceLeftBack();
            if (n > other.aa[index].bits.count) {
                // use ALL of this instructions count
                // just have to check space in the new count
                if (other.aa[index].bits.count > spaceLeft) {
                    fillBackCount();
                    other.subtractFromCount(index, spaceLeft);
                    n -= spaceLeft;
                } else {
                    addToBackCount(other.aa[index].bits.count);
                    n -= other.aa[index].bits.count;
                    index++;
                }
            } else {
                if (n > spaceLeft) {
                    fillBackCount();
                    other.subtractFromCount(index, spaceLeft);
                    n -= spaceLeft;                    
                } else {
                    addToBackCount(n);
                    other.subtractFromCount(index, n);
                }
            }
        }
    }
}

void FMCigar::update(
    FMCigar &other,
    const std::vector<Instruction> &instructions,
    const int preGap,
    const int preSequence,
    const int endGap,
    const int endSequence,
    const bool isTarget
) {
    int index = 0;
    if (isTarget) {
        addGaps(preGap);
        addIndices(preSequence, index, other);
    } else {
        addGaps(preGap);
        addIndices(preSequence, index, other);
    }
    for (Instruction ins : instructions) {
        if (ins.isSeq()) {
            addIndices(ins.bits.count, index, other);
        } else {
            addGaps(ins.bits.count);
        }
    }
    if (isTarget) {
        addGaps(endGap);
        addIndices(endSequence, index, other);
    } else {
        addIndices(endSequence, index, other);
        addGaps(endGap);
    }
}


std::string FMCigar::expand(const std::vector<Instruction> &instructions) {
    std::string result = "";
    for (Instruction ins : instructions) {
        if (ins.isSeq()) {
            result.append(1, ins.getCharacter());
        } else {
            result.append(static_cast<int>(ins.bits.count), '-');
        }
    }
    return result;
}
std::string FMCigar::expandAA() {
    return expand(aa);
}
std::string FMCigar::expandSS() {
    return expand(ss);
}

bool FMCigar::needNewInstruction() {
    return (aa.empty() || aa.back().isSeq() || aa.back().isFull());
}

bool FMCigar::needNewInstruction(const std::vector<Instruction> &instructions) {
    return (instructions.empty() || instructions.back().isSeq() || instructions.back().isFull());
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
 * @return std::vector<Instruction> 
 */
std::vector<Instruction> FMCigar::contract(const std::string &input) {
    std::vector<Instruction> instructions;
    for (char letter : input) {
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
    return instructions;
}


int FMCigar::length(const bool withGaps) {
    int count = 0;
    for (Instruction ins : aa) {
        count += (ins.isSeq()) ? 1 : (withGaps ? static_cast<int>(ins.bits.count) : 0);
    }
    return count;
}

void FMCigar::clear() {
    aa.clear();
    ss.clear();
}

std::pair<std::vector<Instruction>::iterator, std::vector<Instruction>::iterator> FMCigar::getIterators(bool useAA) {
    if (useAA) {
        return {aa.begin(), aa.end()};
    } else {
        return {ss.begin(), ss.end()};
    }
}