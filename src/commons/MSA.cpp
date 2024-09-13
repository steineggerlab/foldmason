#include "MSA.h"

SubMSA::SubMSA() {}
SubMSA::SubMSA(size_t a) : id(a), members({ a }) {}
SubMSA::SubMSA(size_t a, size_t b) : members({ a, b }) {}

void SubMSA::pushMember(size_t other) {
    members.insert(members.end(), other);
}
void SubMSA::update(const SubMSA &other) {
    members.clear();
    members.assign(other.members.begin(), other.members.end());
    profile_aa = other.profile_aa;
    profile_ss = other.profile_ss;
    mask = other.mask;
}
void SubMSA::concat(const SubMSA &other) {
    members.insert(members.end(), other.members.begin(), other.members.end());
}
void SubMSA::concat(const std::vector<size_t> &other) {
    members.insert(members.end(), other.begin(), other.end());
}

MSAContainer::MSAContainer() {}
MSAContainer::MSAContainer(size_t n) : dbKeys(n), dbIdToSubMSAVec(n, n), cigars_aa(n), cigars_ss(n) {}

std::vector<SubMSA>::iterator MSAContainer::begin() {
    return data.begin();
}
std::vector<SubMSA>::iterator MSAContainer::end() {
    return data.end();
}
std::vector<SubMSA>::const_iterator MSAContainer::begin() const {
    return data.begin();
}
std::vector<SubMSA>::const_iterator MSAContainer::end() const {
    return data.end();
} 

SubMSA& MSAContainer::operator[](size_t index) {
    return data[index];
}

SubMSA& MSAContainer::operator[](const std::vector<SubMSA>::iterator& it) {
    return *it;
}

SubMSA& MSAContainer::back() {
    return data.back();
}

size_t MSAContainer::size() const {
    return data.size();
}

void MSAContainer::add(size_t index) {
    data.emplace_back(index);
    dbIdToSubMSAVec[index] = data.size() - 1;
} 

void MSAContainer::add(const SubMSA &msa) {
    data.push_back(msa);
    for (size_t i = 0; i < msa.members.size(); i++) {
        dbIdToSubMSAVec[msa.members[i]] = data.size() - 1;
    }
}

void MSAContainer::remove(std::vector<size_t> &toRemove) {
    std::sort(toRemove.begin(), toRemove.end(), std::greater<int>());
    for (size_t index : toRemove) {
        data.erase(data.begin() + index);
    }
    for (size_t i = 0; i < data.size(); i++) {
        const SubMSA &msa = data[i];
        for (size_t member : msa.members) {
            dbIdToSubMSAVec[member] = i;
        }
    }
}

void MSAContainer::addStructure(size_t id, unsigned int key, size_t length, const char* aa, const char* ss) {
    cigars_aa[id].reserve(length);
    cigars_ss[id].reserve(length);
    for (size_t j = 0; j < length; j++) {
        cigars_aa[id].emplace_back(aa[j]);
        cigars_ss[id].emplace_back(ss[j]);
    }
    dbKeys[id] = key;
}


// Merge SubMSA of db id b into SubMSA of db id a
// Returns index of updated SubMSA of db id a
size_t MSAContainer::mergeInto(size_t a, size_t b) {
    size_t aIdx = dbIdToSubMSAVec[a];
    size_t bIdx = dbIdToSubMSAVec[b];
    if (bIdx == cigars_aa.size()) {
        // b isn't a profile
        data[aIdx].pushMember(b);
        dbIdToSubMSAVec[b] = aIdx;
    } else {
        data[aIdx].concat(data[bIdx]);
        for (size_t i = 0; i < data[bIdx].members.size(); i++) {
            size_t member = data[bIdx].members[i];
            dbIdToSubMSAVec[member] = aIdx;
        }
    }
    return aIdx;
}

// Update the container with newly created SubMSAs, remove stale ones
// 1: new submsa --> add to msa
// 2: one profile, one structure -> add to profile
// 3: both profile -> merge into query
// cases 2 and 3 always identical since profile always made query
void MSAContainer::update(const std::vector<SubMSA> &newMSAs, std::vector<size_t> &toRemove) {
    for (const SubMSA &sub : newMSAs) {
        add(sub);
    }
    if (toRemove.size() > 0) {
        remove(toRemove);
    }
}


bool MSAContainer::isProfile(size_t index) {
    return (dbIdToSubMSAVec[index] != cigars_aa.size());
}