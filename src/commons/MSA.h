#ifndef MSA_H
#define MSA_H

#include <vector>
#include <string>
#include <map>
#include <numeric>
#include <cstdint>
#include <algorithm>

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
    size_t length() const {
        return (bits.state == 0) ? 1 : static_cast<size_t>(bits.count);
    }
};

struct SubMSA {
    size_t id;                    // Database ID of 'merged' representative
    std::vector<size_t> members;  // Database IDs of member structures
    std::string profile_aa;       // Amino acid profile
    std::string profile_ss;       // 3Di profile        
    std::string mask;             // Profile mask string
    SubMSA();
    SubMSA(size_t a);
    SubMSA(size_t a, size_t b);
    void pushMember(size_t other);
    void update(const SubMSA &other);
    void concat(const SubMSA &other);
    void concat(const std::vector<size_t> &other);
};


class MSAContainer {
    private:
        std::vector<SubMSA> data;

    public:
        std::vector<size_t> dbKeys;
        std::vector<size_t> dbIdToSubMSAVec;
        std::vector<std::vector<Instruction> > cigars_aa;
        std::vector<std::vector<Instruction> > cigars_ss;

        MSAContainer();
        MSAContainer(size_t n);

        std::vector<SubMSA>::iterator begin();
        std::vector<SubMSA>::iterator end();
        std::vector<SubMSA>::const_iterator begin() const;
        std::vector<SubMSA>::const_iterator end() const;

        SubMSA& operator[](size_t index);
        SubMSA& operator[](const std::vector<SubMSA>::iterator& it);
        SubMSA& back();
        size_t size() const;
        void add(size_t index);
        void add(const SubMSA &msa);
        void remove(std::vector<size_t> &toRemove);
        void addStructure(size_t id, unsigned int key, size_t length, const char* aa, const char* ss);
        size_t mergeInto(size_t a, size_t b);
        void update(const std::vector<SubMSA> &newMSAs, std::vector<size_t> &toRemove);
        bool isProfile(size_t index);
};

#endif