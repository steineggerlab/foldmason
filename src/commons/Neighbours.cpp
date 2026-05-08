#include "Neighbours.h"

#include <algorithm>
#include <array>
#include <cstdlib>
#include <vector>

#include "Coordinate16.h"

#ifdef OPENMP
#include <omp.h>
#endif

namespace {

struct ContactCellScore {
    uint64_t key;
    float score;
    uint16_t support;
};

struct ContactSketchEntry {
    uint32_t otherCol;
    uint8_t distanceBin;
    uint8_t support;
};

struct RawContact {
    uint64_t key;
    float distanceSq;
};

struct MappedResidue {
    uint32_t profileCol;
    uint32_t residue;
};

constexpr uint8_t contactDistanceBinCount = 32;

bool contactCellKeyLess(const ContactCellScore &lhs, const ContactCellScore &rhs) {
    return lhs.key < rhs.key;
}

bool rawContactKeyLess(const RawContact &lhs, const RawContact &rhs) {
    return lhs.key < rhs.key;
}

bool contactSketchEntryBetter(const ContactSketchEntry &lhs, const ContactSketchEntry &rhs) {
    if (lhs.support != rhs.support) {
        return lhs.support > rhs.support;
    }
    return lhs.distanceBin < rhs.distanceBin;
}

std::array<float, contactDistanceBinCount> makeContactDistanceThresholds() {
    std::array<float, contactDistanceBinCount> thresholds = {};
    for (size_t i = 0; i < thresholds.size(); ++i) {
        const float edge = 32.0f * static_cast<float>(i + 1) / static_cast<float>(thresholds.size());
        thresholds[i] = edge * edge;
    }
    return thresholds;
}

void mapCigarResidues(
    size_t sequenceLength,
    const std::vector<size_t> &mapRev,
    const std::vector<Instruction> &cigar,
    std::vector<MappedResidue> *mappedResidues,
    std::vector<uint32_t> *residueToProfile
) {
    if (residueToProfile != nullptr) {
        residueToProfile->assign(sequenceLength, UINT32_MAX);
    }

    size_t gappedPos = 0;
    uint32_t residuePos = 0;
    for (const Instruction &ins : cigar) {
        if (!ins.isSeq()) {
            gappedPos += ins.length();
            continue;
        }
        if (gappedPos < mapRev.size() && residuePos < sequenceLength) {
            const size_t profileCol = mapRev[gappedPos];
            if (profileCol != SIZE_T_MAX) {
                const uint32_t mappedCol = static_cast<uint32_t>(profileCol);
                if (mappedResidues != nullptr) {
                    mappedResidues->push_back({ mappedCol, residuePos });
                }
                if (residueToProfile != nullptr) {
                    (*residueToProfile)[residuePos] = mappedCol;
                }
            }
        }
        ++gappedPos;
        ++residuePos;
    }
}

void appendMappedResidues(
    const std::vector<size_t> &mapRev,
    const std::vector<Instruction> &cigar,
    std::vector<MappedResidue> &mappedResidues
) {
    mapCigarResidues(SIZE_T_MAX, mapRev, cigar, &mappedResidues, nullptr);
}

void buildNeighbourProjection(
    std::vector<uint32_t> &offsets,
    std::vector<size_t> &residueBases,
    std::vector<MappedResidue> &projection,
    const std::vector<size_t> &members,
    const std::vector<bool> &membersKept,
    bool isProfile,
    int filterMsa,
    const std::vector<size_t> &mapRev,
    const Neighbours *neighbourData,
    const std::vector<std::vector<Instruction>> &cigarsAa
) {
    offsets.clear();
    residueBases.clear();
    projection.clear();
    offsets.push_back(0);
    residueBases.reserve(members.size());
    projection.reserve(members.size() * mapRev.size());

    for (size_t i = 0; i < members.size(); ++i) {
        if ((!isProfile && i > 0) || (filterMsa && isProfile && !membersKept.empty() && !membersKept[i])) {
            continue;
        }
        const size_t member = members[i];
        residueBases.push_back(neighbourData->residueBase(member));
        appendMappedResidues(mapRev, cigarsAa[member], projection);
        offsets.push_back(static_cast<uint32_t>(projection.size()));
    }
}

void collectAlignedAnchors(
    const Matcher::result_t &res,
    size_t maxAnchors,
    std::vector<std::pair<int, int>> &anchors
) {
    anchors.clear();
    anchors.reserve(res.backtrace.size());
    int q = res.qStartPos;
    int t = res.dbStartPos;
    for (char op : res.backtrace) {
        switch (op) {
            case 'M':
                anchors.emplace_back(q, t);
                ++q;
                ++t;
                break;
            case 'I':
                ++q;
                break;
            case 'D':
                ++t;
                break;
        }
    }

    if (maxAnchors == 0 || anchors.size() <= maxAnchors) {
        return;
    }

    const std::pair<int, int> lastAnchor = anchors.back();
    const size_t stride = (anchors.size() + maxAnchors - 1) / maxAnchors;
    size_t out = 0;
    for (size_t idx = 0; idx < anchors.size() && out < maxAnchors; idx += stride) {
        anchors[out++] = anchors[idx];
    }
    anchors.resize(out);
    if (!anchors.empty()) {
        anchors.back() = lastAnchor;
    }
}

void compactContactCellsByKey(std::vector<ContactCellScore> &cells) {
    if (cells.size() < 2) {
        return;
    }
    std::sort(cells.begin(), cells.end(), contactCellKeyLess);

    size_t out = 0;
    for (size_t i = 0; i < cells.size(); ++i) {
        if (out > 0 && cells[out - 1].key == cells[i].key) {
            cells[out - 1].score += cells[i].score;
            cells[out - 1].support += cells[i].support;
        } else {
            cells[out++] = cells[i];
        }
    }
    cells.resize(out);
}

void selectContactMemberIndices(
    const std::vector<size_t> &members,
    const std::vector<bool> &membersKept,
    bool isProfile,
    int filterMsa,
    size_t maxMembers,
    std::vector<size_t> &selected
) {
    selected.clear();
    selected.reserve(std::min(maxMembers, members.size()));
    if (members.empty()) return;
    if (!isProfile) {
        selected.push_back(0);
        return;
    }
    const bool useKept = filterMsa && !membersKept.empty();
    if (useKept) {
        for (size_t i = 0; i < members.size() && selected.size() < maxMembers; ++i)
            if (membersKept[i]) selected.push_back(i);
    }
    for (size_t i = 0; i < members.size() && selected.size() < maxMembers; ++i) {
        if (useKept && membersKept[i]) continue;
        selected.push_back(i);
    }
}

inline uint8_t contactDistanceBin(float distanceSq) {
    static const std::array<float, contactDistanceBinCount> thresholds = makeContactDistanceThresholds();
    const std::array<float, contactDistanceBinCount>::const_iterator it =
        std::lower_bound(thresholds.begin(), thresholds.end(), distanceSq);
    if (it == thresholds.end()) {
        return contactDistanceBinCount - 1;
    }
    return static_cast<uint8_t>(std::distance(thresholds.begin(), it));
}

inline float contactCompatibility(uint8_t queryBin, uint8_t targetBin) {
    const uint8_t diff = std::max(queryBin, targetBin) - std::min(queryBin, targetBin);
    if (diff == 0) return 1.0f;
    if (diff == 1) return 0.5f;
    return 0.0f;
}

inline float contactSupportWeight(unsigned int support) {
    if (support <= 1) return 1.0f;
    if (support == 2) return 1.5f;
    if (support <= 4) return 2.0f;
    if (support <= 8) return 2.5f;
    return 3.0f;
}

inline float contactCellStrength(const ContactCellScore &vote) {
    return (vote.score / static_cast<float>(vote.support)) * contactSupportWeight(vote.support);
}

bool contactCellStrengthGreater(const ContactCellScore &lhs, const ContactCellScore &rhs) {
    return contactCellStrength(lhs) > contactCellStrength(rhs);
}

void appendProfileRawContactsForMember(
    std::vector<RawContact> &rawContacts,
    const std::vector<uint32_t> &residueToProfile,
    const Neighbours *neighbourData,
    size_t residueBase,
    size_t maxContacts,
    size_t minContactSeparation
) {
    for (size_t anchorResid = 0; anchorResid < residueToProfile.size(); ++anchorResid) {
        const uint32_t anchorCol = residueToProfile[anchorResid];
        if (anchorCol == UINT32_MAX) continue;
        const size_t contactRowBase = neighbourData->contactBase(residueBase + anchorResid);
        for (size_t n = 0; n < maxContacts; ++n) {
            const uint32_t otherResidGlobal = neighbourData->contactResidues[contactRowBase + n];
            if (otherResidGlobal == Neighbours::INVALID_CONTACT) break;
            const size_t otherResid = static_cast<size_t>(otherResidGlobal) - residueBase;
            const size_t separation = (otherResid > anchorResid) ? (otherResid - anchorResid) : (anchorResid - otherResid);
            if (otherResid >= residueToProfile.size() || separation < minContactSeparation) continue;
            const uint32_t otherCol = residueToProfile[otherResid];
            if (otherCol == UINT32_MAX) continue;
            rawContacts.push_back({
                (static_cast<uint64_t>(anchorCol) << 32) | static_cast<uint64_t>(otherCol),
                neighbourData->contactDistance[contactRowBase + n]
            });
        }
    }
}

void reduceProfileContactSketches(
    std::vector<uint32_t> &sketchOffsets,
    std::vector<ContactSketchEntry> &sketch,
    std::vector<RawContact> &rawContacts,
    size_t profileLength,
    size_t maxContactsPerAnchor
) {
    std::sort(rawContacts.begin(), rawContacts.end(), rawContactKeyLess);

    size_t begin = 0;
    while (begin < rawContacts.size()) {
        size_t end = begin + 1;
        float sumDistanceSq = rawContacts[begin].distanceSq;
        while (end < rawContacts.size() && rawContacts[end].key == rawContacts[begin].key) {
            sumDistanceSq += rawContacts[end].distanceSq;
            ++end;
        }
        const uint64_t key = rawContacts[begin].key;
        const uint32_t anchorCol = static_cast<uint32_t>(key >> 32);
        sketch.push_back({
            static_cast<uint32_t>(key & 0xffffffffu),
            contactDistanceBin(sumDistanceSq / static_cast<float>(end - begin)),
            static_cast<uint8_t>(end - begin)
        });
        sketchOffsets[static_cast<size_t>(anchorCol) + 1]++;
        begin = end;
    }
    for (size_t i = 1; i < sketchOffsets.size(); ++i) sketchOffsets[i] += sketchOffsets[i - 1];

    uint32_t writeOffset = 0;
    for (size_t anchorCol = 0; anchorCol < profileLength; ++anchorCol) {
        const uint32_t beginOffset = sketchOffsets[anchorCol];
        const uint32_t endOffset = sketchOffsets[anchorCol + 1];
        size_t sketchSize = endOffset - beginOffset;
        if (sketchSize > maxContactsPerAnchor) {
            std::nth_element(
                sketch.begin() + static_cast<std::ptrdiff_t>(beginOffset),
                sketch.begin() + static_cast<std::ptrdiff_t>(beginOffset + maxContactsPerAnchor),
                sketch.begin() + static_cast<std::ptrdiff_t>(endOffset),
                contactSketchEntryBetter
            );
            sketchSize = maxContactsPerAnchor;
        }
        sketchOffsets[anchorCol] = writeOffset;
        for (size_t i = 0; i < sketchSize; ++i) sketch[writeOffset + i] = sketch[beginOffset + i];
        writeOffset += static_cast<uint32_t>(sketchSize);
    }
    sketchOffsets[profileLength] = writeOffset;
    sketch.resize(writeOffset);
}

void buildProfileContactSketches(
    std::vector<uint32_t> &sketchOffsets,
    std::vector<ContactSketchEntry> &sketch,
    size_t profileLength,
    const std::vector<size_t> &memberIndices,
    const std::vector<size_t> &members,
    DBReader<unsigned int> &seqDbrAA,
    const std::vector<size_t> &mapRev,
    const std::vector<std::vector<Instruction>> &cigarsAa,
    Neighbours *neighbourData,
    size_t maxContactsPerAnchor,
    size_t minContactSeparation
) {
    const size_t perMemberContactLimit = std::min(Neighbours::CONTACT_CACHE_SIZE, maxContactsPerAnchor);
    sketchOffsets.assign(profileLength + 1, 0);
    sketch.clear();
    if (profileLength == 0 || memberIndices.empty() || perMemberContactLimit == 0) return;
    std::vector<RawContact> rawContacts;
    std::vector<uint32_t> residueToProfile;
    rawContacts.reserve(memberIndices.size() * perMemberContactLimit * 32);
    for (size_t memberIdx : memberIndices) {
        const size_t member = members[memberIdx];
        const size_t residueBase = neighbourData->residueBase(member);
        mapCigarResidues(seqDbrAA.getSeqLen(member), mapRev, cigarsAa[member], nullptr, &residueToProfile);
        appendProfileRawContactsForMember(rawContacts, residueToProfile, neighbourData, residueBase, perMemberContactLimit, minContactSeparation);
    }
    if (rawContacts.empty()) return;
    reduceProfileContactSketches(sketchOffsets, sketch, rawContacts, profileLength, maxContactsPerAnchor);
}

void fillContactPreservationScoreMatrix(
    std::vector<ContactCellScore> &contactCells,
    std::vector<ContactCellScore> &anchorCells,
    const std::vector<std::pair<int, int>> &anchors,
    const std::vector<uint32_t> &qOff,
    const std::vector<ContactSketchEntry> &qSketch,
    const std::vector<uint32_t> &tOff,
    const std::vector<ContactSketchEntry> &tSketch,
    size_t maxCellsPerAnchor
) {
    contactCells.clear();
    contactCells.reserve(anchors.size() * maxCellsPerAnchor);
    anchorCells.clear();
    anchorCells.reserve(maxCellsPerAnchor * 4);
    for (const std::pair<int, int> &anchor : anchors) {
        const size_t qAnchorCol = static_cast<size_t>(anchor.first);
        const size_t tAnchorCol = static_cast<size_t>(anchor.second);
        anchorCells.clear();
        if (qAnchorCol + 1 >= qOff.size() || tAnchorCol + 1 >= tOff.size()) continue;
        const uint32_t qBegin = qOff[qAnchorCol];
        const uint32_t qEnd = qOff[qAnchorCol + 1];
        const uint32_t tBegin = tOff[tAnchorCol];
        const uint32_t tEnd = tOff[tAnchorCol + 1];
        if (qBegin == qEnd || tBegin == tEnd) continue;
        for (uint32_t qIdx = qBegin; qIdx < qEnd; ++qIdx) {
            const ContactSketchEntry &qContact = qSketch[qIdx];
            for (uint32_t tIdx = tBegin; tIdx < tEnd; ++tIdx) {
                const ContactSketchEntry &tContact = tSketch[tIdx];
                const float compat = contactCompatibility(qContact.distanceBin, tContact.distanceBin);
                if (compat == 0.0f) continue;
                const uint16_t support = static_cast<uint16_t>(qContact.support * tContact.support);
                const uint64_t key = (static_cast<uint64_t>(qContact.otherCol) << 32) | static_cast<uint64_t>(tContact.otherCol);
                anchorCells.push_back({ key, compat * static_cast<float>(support), support });
            }
        }
        if (anchorCells.empty()) continue;
        compactContactCellsByKey(anchorCells);
        if (anchorCells.size() > maxCellsPerAnchor) {
            std::nth_element(
                anchorCells.begin(),
                anchorCells.begin() + static_cast<std::ptrdiff_t>(maxCellsPerAnchor),
                anchorCells.end(),
                contactCellStrengthGreater
            );
            anchorCells.resize(maxCellsPerAnchor);
        }
        contactCells.insert(contactCells.end(), anchorCells.begin(), anchorCells.end());
    }
    if (contactCells.empty()) return;
    compactContactCellsByKey(contactCells);
}

void normalizeContactPreservationScoreMatrix(
    std::vector<ContactCellScore> &contactCells,
    std::vector<float> &maxes,
    int queryLen,
    int targetLen,
    float lowCut,
    float multiplier
) {
    maxes.assign(queryLen + targetLen, 0.0f);
    for (ContactCellScore &cell : contactCells) {
        const size_t qCol = static_cast<size_t>(cell.key >> 32);
        const size_t tCol = static_cast<size_t>(cell.key & 0xffffffffu);
        cell.score /= static_cast<float>(cell.support);
        cell.score *= contactSupportWeight(cell.support);
        maxes[qCol] = std::max(maxes[qCol], cell.score);
        maxes[queryLen + tCol] = std::max(maxes[queryLen + tCol], cell.score);
    }

    size_t out = 0;
    for (size_t i = 0; i < contactCells.size(); ++i) {
        const size_t qCol = static_cast<size_t>(contactCells[i].key >> 32);
        const size_t tCol = static_cast<size_t>(contactCells[i].key & 0xffffffffu);
        if (maxes[qCol] == 0.0f || maxes[queryLen + tCol] == 0.0f) continue;
        float score = (contactCells[i].score * contactCells[i].score) / (maxes[qCol] * maxes[queryLen + tCol]);
        if (score < lowCut) continue;
        contactCells[i].score = score * multiplier;
        contactCells[out++] = contactCells[i];
    }
    contactCells.resize(out);
}

} // namespace

Neighbours::Neighbours(size_t residueCount) {
    resize(residueCount);
}

Neighbours::~Neighbours() {
    if (distance) {
        free(distance);
        distance = nullptr;
    }
    if (contactDistance) {
        free(contactDistance);
        contactDistance = nullptr;
    }
    if (contactResidues) {
        free(contactResidues);
        contactResidues = nullptr;
    }
    sz = cap = contactSz = contactCap = 0;
    residueOffsets.clear();
}

void Neighbours::resize(size_t residueCount) {
    const size_t fullSize = residueCount * FULL_NEIGHBOUR_COUNT;
    const size_t compactSize = residueCount * CONTACT_CACHE_SIZE;
    if (fullSize > cap || compactSize > contactCap) {
        reallocate(std::max(fullSize, cap), std::max(compactSize, contactCap));
    }
    if (fullSize > sz) {
        memset(distance + sz, 0, (fullSize - sz) * sizeof(float));
    }
    if (compactSize > contactSz) {
        std::fill(contactDistance + contactSz, contactDistance + compactSize, FLT_MAX);
        std::fill(contactResidues + contactSz, contactResidues + compactSize, INVALID_CONTACT);
    }
    sz = fullSize;
    contactSz = compactSize;
}

void Neighbours::fillNeighbourScoreMatrix(
    float **scoreBiasMap,
    unsigned int **scoreSupportCounts,
    int queryLen,
    int targetLen,
    const std::vector<size_t> &qMembers,
    const std::vector<size_t> &tMembers,
    const std::vector<bool> &qMembersKept,
    const std::vector<bool> &tMembersKept,
    const std::vector<size_t> &map1Rev,
    const std::vector<size_t> &map2Rev,
    const std::vector<std::vector<Instruction>> &cigars_aa,
    bool queryIsProfile,
    bool targetIsProfile,
    int filterMsa,
    float nb_sigma_r,
    float nb_low_cut,
    float nb_multiplier
) {
    std::vector<uint32_t> qOffsets;
    std::vector<uint32_t> tOffsets;
    std::vector<size_t> qBases;
    std::vector<size_t> tBases;
    std::vector<MappedResidue> qMapped;
    std::vector<MappedResidue> tMapped;
    std::vector<float> maxes;
    buildNeighbourProjection(qOffsets, qBases, qMapped, qMembers, qMembersKept, queryIsProfile, filterMsa, map1Rev, this, cigars_aa);
    buildNeighbourProjection(tOffsets, tBases, tMapped, tMembers, tMembersKept, targetIsProfile, filterMsa, map2Rev, this, cigars_aa);

    for (size_t qi = 0; qi < qBases.size(); ++qi) {
        const uint32_t qBegin = qOffsets[qi];
        const uint32_t qEnd = qOffsets[qi + 1];
        const size_t qResidueBase = qBases[qi];
        for (size_t ti = 0; ti < tBases.size(); ++ti) {
            const uint32_t tBegin = tOffsets[ti];
            const uint32_t tEnd = tOffsets[ti + 1];
            const size_t tResidueBase = tBases[ti];
            for (uint32_t qIdx = qBegin; qIdx < qEnd; ++qIdx) {
                const MappedResidue &qResidue = qMapped[qIdx];
                float *qScoreSums = scoreBiasMap[qResidue.profileCol];
                unsigned int *qScoreCounts = scoreSupportCounts[qResidue.profileCol];
                const size_t qRowIdx = rowBase(qResidueBase + static_cast<size_t>(qResidue.residue));
                for (uint32_t tIdx = tBegin; tIdx < tEnd; ++tIdx) {
                    const MappedResidue &tResidue = tMapped[tIdx];
                    const size_t tRowIdx = rowBase(tResidueBase + static_cast<size_t>(tResidue.residue));
                    qScoreSums[tResidue.profileCol] += scoreNeighbours(qRowIdx, tRowIdx, nb_sigma_r);
                    qScoreCounts[tResidue.profileCol]++;
                }
            }
        }
    }

    maxes.assign(queryLen + targetLen, 0.0f);
    for (int y = 0; y < queryLen; ++y) {
        for (int z = 0; z < targetLen; ++z) {
            if (scoreSupportCounts[y][z] == 0) continue;
            scoreBiasMap[y][z] /= static_cast<float>(scoreSupportCounts[y][z]);
            maxes[queryLen + z] = std::max(maxes[queryLen + z], scoreBiasMap[y][z]);
            maxes[y] = std::max(maxes[y], scoreBiasMap[y][z]);
        }
    }
    for (int y = 0; y < queryLen; ++y) {
        for (int z = 0; z < targetLen; ++z) {
            if (maxes[y] == 0.0f || maxes[queryLen + z] == 0.0f) continue;
            scoreBiasMap[y][z] = (scoreBiasMap[y][z] * scoreBiasMap[y][z]) / (maxes[y] * maxes[queryLen + z]);
            scoreBiasMap[y][z] = (scoreBiasMap[y][z] < nb_low_cut) ? 0.0f : scoreBiasMap[y][z] * nb_multiplier;
        }
    }
}

bool Neighbours::applyContactPreservationRefinement(
    const Matcher::result_t &res,
    float **scoreBiasMap,
    int queryLen,
    int targetLen,
    const std::vector<size_t> &qMembers,
    const std::vector<size_t> &tMembers,
    const std::vector<bool> &qMembersKept,
    const std::vector<bool> &tMembersKept,
    bool queryIsProfile,
    bool targetIsProfile,
    int filterMsa,
    size_t maxAnchors,
    size_t maxMembers,
    size_t maxNeighbours,
    size_t maxCells,
    size_t minSep,
    float weight,
    float lowCut,
    const std::vector<size_t> &map1Rev,
    const std::vector<size_t> &map2Rev,
    const std::vector<std::vector<Instruction>> &cigarsAa,
    DBReader<unsigned int> &seqDbrAA,
    float nbMultiplier
) {
    if (weight <= 0.0f) return false;
    std::vector<std::pair<int, int>> anchors;
    std::vector<size_t> qMemberIdx;
    std::vector<size_t> tMemberIdx;
    std::vector<uint32_t> qOff;
    std::vector<uint32_t> tOff;
    std::vector<ContactSketchEntry> qSketch;
    std::vector<ContactSketchEntry> tSketch;
    std::vector<ContactCellScore> anchorCells;
    std::vector<ContactCellScore> contactCells;
    std::vector<float> maxes;
    collectAlignedAnchors(res, maxAnchors, anchors);
    if (anchors.empty()) return false;
    selectContactMemberIndices(qMembers, qMembersKept, queryIsProfile, filterMsa, maxMembers, qMemberIdx);
    selectContactMemberIndices(tMembers, tMembersKept, targetIsProfile, filterMsa, maxMembers, tMemberIdx);
    buildProfileContactSketches(qOff, qSketch, queryLen, qMemberIdx, qMembers, seqDbrAA, map1Rev, cigarsAa, this, maxNeighbours, minSep);
    buildProfileContactSketches(tOff, tSketch, targetLen, tMemberIdx, tMembers, seqDbrAA, map2Rev, cigarsAa, this, maxNeighbours, minSep);
    fillContactPreservationScoreMatrix(contactCells, anchorCells, anchors, qOff, qSketch, tOff, tSketch, maxCells);
    if (contactCells.empty()) return false;
    normalizeContactPreservationScoreMatrix(contactCells, maxes, queryLen, targetLen, lowCut, nbMultiplier);
    if (contactCells.empty()) return false;
    for (const ContactCellScore &cell : contactCells) {
        const size_t qCol = static_cast<size_t>(cell.key >> 32);
        const size_t tCol = static_cast<size_t>(cell.key & 0xffffffffu);
        scoreBiasMap[qCol][tCol] += weight * cell.score;
    }
    return true;
}

void Neighbours::collectNeighbours(
    size_t sequenceCnt,
    DBReader<unsigned int> &seqDbrAA,
    DBReader<unsigned int> *seqDbrCA,
    const std::vector<size_t> &sequenceResidueOffsets,
    float thresh_sq,
    int maxThreads
) {
    residueOffsets = sequenceResidueOffsets;

#ifndef OPENMP
    (void) maxThreads;
#endif
    #pragma omp parallel for num_threads(maxThreads)
    for (size_t i = 0; i < sequenceCnt; i++) {
        unsigned int seqKeyAA = seqDbrAA.getDbKey(i);
        size_t seqIdAA = seqDbrAA.getId(seqKeyAA);
        size_t length = seqDbrAA.getSeqLen(seqIdAA);

        Coordinate16 tcoords;
        char *tcadata = seqDbrCA->getData(seqIdAA, 0);
        size_t tCaLength = seqDbrCA->getEntryLen(seqIdAA);
        float *targetCaData = tcoords.read(tcadata, length, tCaLength);

        const float* x = targetCaData;
        const float* y = targetCaData + length;
        const float* z = targetCaData + length * 2;
        std::vector<uint8_t> count(length, 0);
        std::vector<uint32_t> contacts(length * FULL_NEIGHBOUR_COUNT, INVALID_CONTACT);
        const size_t residueBase = residueOffsets[i];
        const size_t rowBaseOffset = rowBase(residueBase);

        for (size_t j = 0; j < length; ++j) {
            const float xj = x[j];
            const float yj = y[j];
            const float zj = z[j];
            const size_t rowBaseJ = rowBaseOffset + rowBase(j);
            const size_t localRowBaseJ = j * FULL_NEIGHBOUR_COUNT;
            for (size_t k = j + 1; k < length; ++k) {
                float dx = xj - x[k];
                float dist = dx * dx;
                if (dist > thresh_sq) {
                    continue;
                }
                float dy = yj - y[k];
                dist += dy * dy;
                if (dist > thresh_sq) {
                    continue;
                }
                float dz = zj - z[k];
                dist += dz * dz;
                if (dist < thresh_sq) {
                    insert_topk(distance + rowBaseJ, contacts.data() + localRowBaseJ, count[j], dist, static_cast<uint32_t>(residueBase + k), FULL_NEIGHBOUR_COUNT);
                    const size_t rowBaseK = rowBaseOffset + rowBase(k);
                    const size_t localRowBaseK = k * FULL_NEIGHBOUR_COUNT;
                    insert_topk(distance + rowBaseK, contacts.data() + localRowBaseK, count[k], dist, static_cast<uint32_t>(residueBase + j), FULL_NEIGHBOUR_COUNT);
                }
            }
        }
        for (size_t j = 0; j < length; ++j) {
            sortNeighbours(
                distance + rowBaseOffset + rowBase(j),
                contacts.data() + j * FULL_NEIGHBOUR_COUNT,
                contactDistance + contactBase(residueBase + j),
                contactResidues + contactBase(residueBase + j),
                count[j]
            );
        }
    }
}

void Neighbours::reallocate(size_t new_cap, size_t new_contact_cap) {
    const size_t bytes_f = new_cap * sizeof(float);
    const size_t bytes_cf = new_contact_cap * sizeof(float);
    const size_t bytes_cr = new_contact_cap * sizeof(uint32_t);
    float* new_dst = reinterpret_cast<float*>(malloc_simd_float(bytes_f));
    float* new_contact_distance = reinterpret_cast<float*>(malloc(bytes_cf));
    uint32_t* new_contact_residues = reinterpret_cast<uint32_t*>(malloc(bytes_cr));
    if (distance) {
        memcpy(new_dst, distance, sz * sizeof(float));
    }
    if (new_cap > sz) {
        memset(new_dst + sz, 0, (new_cap - sz) * sizeof(float));
    }
    if (contactDistance) {
        memcpy(new_contact_distance, contactDistance, contactSz * sizeof(float));
    }
    if (new_contact_cap > contactSz) {
        std::fill(new_contact_distance + contactSz, new_contact_distance + new_contact_cap, FLT_MAX);
    }
    if (contactResidues) {
        memcpy(new_contact_residues, contactResidues, contactSz * sizeof(uint32_t));
    }
    if (new_contact_cap > contactSz) {
        std::fill(new_contact_residues + contactSz, new_contact_residues + new_contact_cap, INVALID_CONTACT);
    }
    if (distance) {
        free(distance);
    }
    if (contactDistance) {
        free(contactDistance);
    }
    if (contactResidues) {
        free(contactResidues);
    }
    distance = new_dst;
    contactDistance = new_contact_distance;
    contactResidues = new_contact_residues;
    cap = new_cap;
    contactCap = new_contact_cap;
}
