#include <iostream>
#include "Matcher.h"
#include "PSSMCalculator.h"
#include "MsaFilter.h"
#include "SubstitutionMatrix.h"
#include "StructureSmithWaterman.h"
#include "Sequence.h"

#ifndef CIGAR_H
#define CIGAR_H

enum State {
    SEQ = 0,
    GAP = 1
};

// Bit field version
// First bit      = match or gap
// Remaining bits = ASCII character or (gap) count
union Instruction {
    struct BitFields {
        std::uint8_t state : 1;  // 0 = match, 1 = gap
        std::uint8_t count : 7;  // count < 127
    } bits;
    unsigned char data;
    Instruction() {
        data = 0;
    }
    Instruction(int state, int count) {
        data = 0;
        bits.state = static_cast<std::uint8_t>(state);
        bits.count = static_cast<std::uint8_t>(count);
    }
    Instruction(char c) {
        data = 0;
        bits.state = static_cast<std::uint8_t>(0);
        bits.count = static_cast<std::uint8_t>(c);
    }
    Instruction(int count) {
        data = 0;
        bits.state = static_cast<std::uint8_t>(1);
        bits.count = static_cast<std::uint8_t>(count);
    }
    char getCharacter() const {
        return (bits.state == 0) ? static_cast<char>(bits.count) : '-';
    }
    bool isSeq() const {
        return (bits.state == 0);
    }
    bool isFull() const {
        return (bits.count == 127);
    }
};

class FMCigar {
public:
    size_t id;
    std::vector<Instruction> aa;
    std::vector<Instruction> ss;

    FMCigar(size_t id);
    FMCigar(size_t id, const std::string &aa, const std::string &ss);
    FMCigar(const FMCigar &other);
    
    // Constructor from update()
    FMCigar(
        FMCigar &other,
        const std::vector<Instruction> &instructions,
        const int preGap,
        const int preSequence,
        const int endGap,
        const int endSequence,
        const bool isTarget       
    );

    // fill this cigar by applying alignment instructions to old cigar
    void update(
        FMCigar &other,
        const std::vector<Instruction> &instructions,
        const int preGap,
        const int preSequence,
        const int endGap,
        const int endSequence,
        const bool isTarget       
    );

    std::string expandAA();
    std::string expandSS();
     
    int length(bool withGaps);
    bool isCharacter(const int &index);
    void clear();
    
    // Get iterators for either AA or SS instruction vectors so we can loop over them by flag
    std::pair<std::vector<Instruction>::iterator, std::vector<Instruction>::iterator> getIterators(bool useAA);

private:
    static std::vector<Instruction> contract(const std::string &input);

    // Add N gaps
    void addGaps(int n);
    
    // Add N characters starting at index in other Cigar
    void addIndices(int n, int &index, FMCigar &other);

    // Space left in last Instruction count
    int spaceLeftBack();

    // Max out last Instruction count
    void fillBackCount();
    
    // Add N to last Instruction count
    void addToBackCount(int n);

    // Minus N from Instruction count at index
    void subtractFromCount(int index, int n);
    
    // Add empty Instructions to back
    void addEmpty();    
    
    // Add character from other Cigar at index
    void addCharacter(const FMCigar &other, const int index);
    
    // Indicate new Instruction necessary
    bool needNewInstruction();

    static std::string expand(const std::vector<Instruction> &instructions);
    static bool needNewInstruction(const std::vector<Instruction> &instructions);
};

#endif