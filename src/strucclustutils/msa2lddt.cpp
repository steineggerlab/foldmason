#include "DBReader.h"
#include "DBWriter.h"
#include "IndexReader.h"
#include "FoldmasonParameters.h"
#include "Matcher.h"
#include "Parameters.h"
#include "StructureUtil.h"
#include "Util.h"
#include <fstream>
#include <cassert>

#define ZSTD_STATIC_LINKING_ONLY

#include <zstd.h>
//#include "msa.html.zst.h"
#include "main_foldmason.js.h"
#include "vendor_foldmason.js.zst.h"

#include "kseq.h"
#include "KSeqBufferReader.h"
#include "KSeqWrapper.h"
#include "LDDT.h"
#include "Coordinate16.h"
#include "structuremsa.h"

#ifdef OPENMP
#include <omp.h>
#endif

#pragma omp declare reduction(vsum : std::vector<float> : \
    std::transform(omp_in.begin(), omp_in.end(), \
                   omp_out.begin(), omp_out.begin(), std::plus<float>())) \
    initializer(omp_priv(omp_orig))

#pragma omp declare reduction(vsum : std::vector<int> : \
    std::transform(omp_in.begin(), omp_in.end(), \
                   omp_out.begin(), omp_out.begin(), std::plus<int>())) \
    initializer(omp_priv(omp_orig))


// Return the CA coordinates of a given db index as a string
std::string getXYZstring(size_t index, int length, DBReader<unsigned int> *db) {
    Coordinate16 coords;
    char *cadata = db->getData(index, 0);
    size_t caLength = db->getEntryLen(index);
    float *caData = coords.read(cadata, length, caLength);
    std::string xyz;
    std::stringstream xyzz;
    for (int i = 0; i < length; i++) {
        xyzz << std::fixed << std::setprecision(3)
            << caData[i] << ','
            << caData[length + i] << ','
            << caData[length * 2 + i];
        if (i != length - 1)
            xyzz << ',';
    }
    return xyzz.str();
}

Matcher::result_t makeMockAlignment(
    Matcher::result_t &result,
    std::vector<Instruction> &instructions1,
    std::vector<Instruction> &instructions2,
    std::vector<int> &match_to_msa,
    int alnLength
) {
    result.backtrace = "";

    // current instruction index
    int index1 = 0;
    int index2 = 0;

    // how exhausted current instruction count is
    int count1 = 0;
    int count2 = 0;
    
    // query/target sequence indices
    int qr = 0;
    int tr = 0;
    
    bool started = false;  // flag for first Match column

    for (int i = 0; i < alnLength; i++) {
        const Instruction& ins1 = instructions1[index1];                
        const Instruction& ins2 = instructions2[index2];
        if (!ins1.isSeq() && !ins2.isSeq()) {
            count1++;
            count2++; 
        } else if (!ins1.isSeq()) {
            if (started) result.backtrace.push_back('D');
            tr++;
            count1++;
            count2 = 0;
            index2++;
        } else if (!ins2.isSeq()) {
            if (started) result.backtrace.push_back('I');
            qr++;
            count2++;
            count1 = 0;
            index1++;
        } else {
            if (!started) {
                started = true;
                result.qStartPos = qr;
                result.dbStartPos = tr;
            }
            match_to_msa.push_back(i);
            result.backtrace.push_back('M');
            result.qEndPos = qr;
            result.dbEndPos = tr;
            qr++;
            tr++;
            index1++;
            index2++;
            count1 = 0;
            count2 = 0;
        }
        if (!ins1.isSeq() && count1 == ins1.bits.count) {
            index1++;
            count1 = 0;
        }
        if (!ins2.isSeq() && count2 == ins2.bits.count) {
            index2++;
            count2 = 0;
        }
    }
    
    return result;
}

std::vector<int> countColumns(
    std::vector<std::vector<Instruction> > &cigars,
    std::vector<size_t> &subset,
    int alnLength
) {
    std::vector<int> counts(alnLength, 0);
    for (size_t i = 0; i < subset.size(); i++) {
        std::vector<Instruction> cigar = cigars[subset[i]];
        int j = 0;
        for (Instruction ins : cigar) {
            if (ins.isSeq()) {
                counts[j]++;
                j++;
            } else {
                j += ins.bits.count;
            }
        }
    }
    return counts;
}

std::tuple<std::vector<float>, std::vector<int>, float> calculate_lddt(
    std::vector<std::vector<Instruction> > &cigars,
    std::vector<size_t> subset,
    DBReader<unsigned int> * seqDbrAA,
    DBReader<unsigned int> * seqDbrCA,
    float pairThreshold
) {
    int alnLength = cigarLength(cigars[subset[0]], true);

    // Track per-column scores and no. non-gaps to avg
    std::vector<float> perColumnScore(alnLength, 0.0);
    std::vector<int>   perColumnCount(alnLength, 0);

    float sum = 0.0;
    int numPairs = cigars.size() * (cigars.size() - 1) / 2;

    // Sort subset vector by indices so we can initQuery in outer loop
    // AND ensure it is only ever done in one direction
    // std::sort(subset.begin(), subset.end(), [&indices](int a, int b){ return indices[a] < indices[b]; });

#pragma omp parallel reduction(+:sum) reduction(vsum:perColumnScore,perColumnCount)
{
    unsigned int thread_idx = 0;
#ifdef OPENMP
    thread_idx = static_cast<unsigned int>(omp_get_thread_num());
#endif
    LDDTCalculator *lddtcalculator = new LDDTCalculator(alnLength, alnLength);
    std::vector<Matcher::result_t> results(numPairs);
    Coordinate16 qcoords;
    Coordinate16 tcoords;

#pragma omp for schedule(dynamic, 1)
    for (size_t i = 0; i < subset.size(); i++) {
        unsigned int i_key = seqDbrCA->getDbKey(subset[i]);
        size_t i_idx = seqDbrCA->getId(i_key); 

        char *qcadata = seqDbrCA->getData(i_idx, thread_idx);
        size_t qAALength = seqDbrAA->getEntryLen(i_idx);
        size_t qCaLength = seqDbrCA->getEntryLen(i_idx);
        float *queryCaData = qcoords.read(qcadata, qAALength, qCaLength);
        Matcher::result_t result;

        lddtcalculator->initQuery(
            qAALength,
            queryCaData,
            &queryCaData[qAALength],
            &queryCaData[qAALength * 2]
        );

        // indices of matches in gappy msa
        std::vector<int> match_to_msa;
        match_to_msa.reserve(10000);

        for (size_t j = i + 1; j < subset.size(); j++) {
            unsigned int j_key = seqDbrCA->getDbKey(subset[j]);
            size_t j_idx = seqDbrCA->getId(j_key); 

            char *tcadata = seqDbrCA->getData(j_idx, thread_idx);
            size_t tAALength = seqDbrAA->getEntryLen(j_idx);
            size_t tCaLength = seqDbrCA->getEntryLen(j_idx);
            float *targetCaData = tcoords.read(tcadata, tAALength, tCaLength);

            assert(expand(cigars[subset[i]]).length() == expand(cigars[subset[j]]).length());

            // Generate a CIGAR string from qId-tId sub-alignment, ignoring -- columns
            // e.g. --X-XX-X---XX-
            //      Y---YYYY---YYY
            //          MMDM   MM
            makeMockAlignment(result, cigars[i_idx], cigars[j_idx], match_to_msa, alnLength);

            // If no alignment between the two sequences, skip
            if (result.backtrace.length() == 0)
                continue;

            // Remove D/I from backtrace after last M
            result.backtrace.shrink_to_fit();
            size_t k;
            for (k = result.backtrace.length() - 1; result.backtrace[k] != 'M'; k--);
            result.backtrace.erase(k + 1);

            LDDTCalculator::LDDTScoreResult lddtres = lddtcalculator->computeLDDTScore(
                tAALength,
                result.qStartPos,
                result.dbStartPos,
                result.backtrace,
                targetCaData,
                &targetCaData[tAALength],
                &targetCaData[tAALength * 2]
            );
            
            if (std::isnan(lddtres.avgLddtScore)) {
                std::cout << "Found nan\n";
            }
            
            for (int k = 0; k < lddtres.scoreLength; k++) {
                if (lddtres.perCaLddtScore[k] == 0.0)
                    continue;
                int idx = match_to_msa[k];
                perColumnCount[idx] += 1;
                perColumnScore[idx] += lddtres.perCaLddtScore[k];
            }
            sum += lddtres.avgLddtScore;
            
            match_to_msa.clear();
        }
    }
    delete lddtcalculator;
}

    std::vector<int> colCounts = countColumns(cigars, subset, alnLength);
    float scaledSum = 0.0;
    int numCols = 0;
    for (size_t i = 0; i < perColumnCount.size(); i++) {
        // float pairSupport = perColumnCount[i] / static_cast<float>(numPairs);
        float residuesInColumn = colCounts[i];

        // TODO maybe change to bool flag to just count/not count single-residue columns in entire MSA score
        if ((residuesInColumn / subset.size()) < pairThreshold) {
            perColumnScore[i] = 0.0;
            perColumnCount[i] = 0;
            continue;
        }
        if (perColumnCount[i] > 0) {
            perColumnScore[i] /= perColumnCount[i];  // get mean LDDT for this column
            // perColumnScore[i] *= pairSupport;  // scale by % of pairs with LDDT >0
        } else {
            perColumnScore[i] = 0.0;
        }
        // scaledSum += perColumnScore[i];
        // if (perColumnCount[i] / static_cast<float>(numPairs) >= pairThreshold) {
        scaledSum += perColumnScore[i];
        numCols++;
        // }
    }
    // float lddtScore = sum / static_cast<double>(numPairs);
    // float lddtScore = (scaledSum / perColumnCount.size());  // get mean over all columns
    float lddtScore = (numCols > 0) ? scaledSum / static_cast<float>(numCols) : 0.0;
    return std::make_tuple(perColumnScore, perColumnCount, lddtScore);
}

void parseFasta(
    KSeqWrapper *kseq,
    DBReader<unsigned int> * seqDbrAA,
    DBReader<unsigned int> * seqDbr3Di,
    std::vector<std::string> &headers,
    std::vector<size_t>      &indices,
    std::vector<int>         &lengths,
    std::vector<std::vector<Instruction> > &cigars_aa,
    std::vector<std::vector<Instruction> > &cigars_ss,
    int &alnLength
) {
    while (kseq->ReadEntry()) {
        const KSeqWrapper::KSeqEntry &entry = kseq->entry;
        size_t idx = seqDbrAA->getLookupIdByAccession(entry.name.s);
        unsigned int key = seqDbrAA->getLookupKey(idx);
        size_t seqIdAA = seqDbrAA->getId(key);
        if (seqIdAA == UINT_MAX)
            Debug(Debug::WARNING) << "Key not found in seqDbrAA: " << key << "\n";
        size_t seqId3Di = seqDbr3Di->getId(key);
        if (seqId3Di == UINT_MAX)
            Debug(Debug::WARNING) << "Key not found in seqDbr3di: " << key << "\n";
        headers.push_back(entry.name.s);
        indices.push_back(seqIdAA);
        std::string seqAA = seqDbrAA->getData(seqIdAA, 0);
        seqAA.pop_back();
        std::string seq3Di = seqDbr3Di->getData(seqId3Di, 0);
        seq3Di.pop_back();
        lengths.push_back(seqAA.length());

        std::vector<Instruction> base = contract(entry.sequence.s);
        std::vector<Instruction> cigar_aa;
        std::vector<Instruction> cigar_ss;
        int index = 0;
        for (Instruction ins : base) {
            if (ins.isSeq()) {
                cigar_aa.emplace_back(seqAA[index]);
                cigar_ss.emplace_back(seq3Di[index]);
                index++;
            } else {
                cigar_aa.emplace_back(static_cast<int>(ins.bits.count));
                cigar_ss.emplace_back(static_cast<int>(ins.bits.count));
            }
        }
        cigars_aa.push_back(cigar_aa); 
        cigars_ss.push_back(cigar_ss); 
        if (alnLength == 0)
            alnLength = (int)entry.sequence.l;
    }
}

float getLDDTScore(
    DBReader<unsigned int> &seqDbrAA,
    DBReader<unsigned int> &seqDbr3Di,
    DBReader<unsigned int> &seqDbrCA,
    std::string msa,
    float pairThreshold
) {
    KSeqWrapper* kseq = new KSeqBuffer(msa.c_str(), msa.length());
    int alnLength = 0;
    std::vector<std::string> hdrs;
    std::vector<size_t>      inds;
    std::vector<int>         lens;
    std::vector<std::vector<Instruction> > cigars_aa;
    std::vector<std::vector<Instruction> > cigars_ss;
    parseFasta(kseq, &seqDbrAA, &seqDbr3Di, hdrs, inds, lens, cigars_aa, cigars_ss, alnLength);
    delete kseq;

    std::vector<float> perColumnScore;
    std::vector<int>   perColumnCount;
    float lddtScore;
    std::tie(perColumnScore, perColumnCount, lddtScore) = calculate_lddt(cigars_aa, inds, &seqDbrAA, &seqDbrCA, pairThreshold);

    return lddtScore;
}

int msa2lddt(int argc, const char **argv, const Command& command, bool makeReport) {
    FoldmasonParameters &par = FoldmasonParameters::getFoldmasonInstance();

    const bool touch = (par.preloadMode != Parameters::PRELOAD_MODE_MMAP);
    par.parseParameters(argc, argv, command, true, 0, MMseqsParameter::COMMAND_ALIGN);
    DBReader<unsigned int> seqDbrAA(par.db1.c_str(), par.db1Index.c_str(), par.threads, DBReader<unsigned int>::USE_INDEX|DBReader<unsigned int>::USE_DATA|DBReader<unsigned int>::USE_LOOKUP_REV);
    seqDbrAA.open(DBReader<unsigned int>::NOSORT);
    DBReader<unsigned int> seqDbr3Di((par.db1+"_ss").c_str(), (par.db1+"_ss.index").c_str(), par.threads, DBReader<unsigned int>::USE_INDEX|DBReader<unsigned int>::USE_DATA);
    seqDbr3Di.open(DBReader<unsigned int>::NOSORT);
    DBReader<unsigned int> seqDbrCA((par.db1+"_ca").c_str(), (par.db1+"_ca.index").c_str(), par.threads, DBReader<unsigned int>::USE_INDEX|DBReader<unsigned int>::USE_DATA);
    seqDbrCA.open(DBReader<unsigned int>::NOSORT);
    IndexReader headerDB(par.db1, par.threads, IndexReader::HEADERS, touch ? IndexReader::PRELOAD_INDEX : 0);
    
    // Read in MSA, mapping headers to database indices
    KSeqWrapper* kseq = KSeqFactory(par.db2.c_str());
    int alnLength = 0;
    std::vector<std::string> headers;
    std::vector<size_t> indices;
    std::vector<int> lengths;
    std::vector<std::vector<Instruction> > cigars_aa;
    std::vector<std::vector<Instruction> > cigars_ss;
    parseFasta(kseq, &seqDbrAA, &seqDbr3Di, headers, indices, lengths, cigars_aa, cigars_ss, alnLength);
    delete kseq;
    
    // Calculate LDDT
    std::vector<float> perColumnScore;
    std::vector<int>   perColumnCount;
    float lddtScore;
    
    std::vector<size_t> subset(headers.size());
    for (size_t i = 0; i < subset.size(); i++)
        subset[i] = i;
    
    std::tie(perColumnScore, perColumnCount, lddtScore) = calculate_lddt(cigars_aa, subset, &seqDbrAA, &seqDbrCA, par.pairThreshold);
    
    // TODO common core = columns w/ no gaps, no distances >4 angstrom to reference (structure w/ longest non-gap alignment)
    
    std::cout << "Average MSA LDDT: " << lddtScore << std::endl;
    
    // Write clustal format MSA HTML
    if (makeReport) {
        DBWriter resultWriter(par.db3.c_str(), (par.db3 + ".index").c_str(), static_cast<unsigned int>(par.threads), par.compressed, Parameters::DBTYPE_OMIT_FILE);
        resultWriter.open();

/* 
        // Read in template and write to .html
        size_t dstSize = ZSTD_findDecompressedSize(msa_html_zst, msa_html_zst_len);
        char* dst = (char*)malloc(sizeof(char) * dstSize);
        size_t realSize = ZSTD_decompress(dst, dstSize, msa_html_zst, msa_html_zst_len);
        resultWriter.writeData(dst, realSize, 0, 0, false, false);
*/
        
        size_t dstSize = ZSTD_findDecompressedSize(vendor_foldmason_js_zst, vendor_foldmason_js_zst_len);
        char* dst = (char*)malloc(sizeof(char) * dstSize);
        size_t realSize = ZSTD_decompress(dst, dstSize, vendor_foldmason_js_zst, vendor_foldmason_js_zst_len);
        
        std::string mainJS(const_cast<char *>(reinterpret_cast<const char *>(main_foldmason_js)), main_foldmason_js_len);
        std::string htmlTemplate(
R"html(<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="x-ua-compatible" content="ie=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title><%= STRINGS.APP_NAME %> Search Server</title>
</head>
<div id="app"></div>
)html");
        
        resultWriter.writeData(htmlTemplate.c_str(), htmlTemplate.size(), 0, 0, false, false);

        std::string scriptStart = "<script>";
        std::string scriptEnd   = "</script>";

        // vendor.js
        resultWriter.writeData(scriptStart.c_str(), scriptStart.size(), 0, 0, false, false);
        resultWriter.writeData(dst, realSize, 0, 0, false, false);
        resultWriter.writeData(scriptEnd.c_str(), scriptEnd.size(), 0, 0, false, false);
        
        // main.js
        resultWriter.writeData(scriptStart.c_str(), scriptStart.size(), 0, 0, false, false);
        resultWriter.writeData(mainJS.c_str(), mainJS.size(), 0, 0, false, false);
        resultWriter.writeData(scriptEnd.c_str(), scriptEnd.size(), 0, 0, false, false);
        
        // Data <div>
        const char* dataStart = "<div id=\"data\" style=\"display: none;\">\n{\"entries\": [";
        resultWriter.writeData(dataStart, strlen(dataStart), 0, 0, false, false);

        free(dst);
        
        // tree: string (optional, from --guide-tree)
        // entries: [ { name, aa, ss, ca }, ... ]
        // scores: [ float ]
        // statistics: { db, msaFile, msaLDDT }

        for (size_t i = 0; i < cigars_aa.size(); i++) {
            std::string seq_aa = expand(cigars_aa[i]);
            std::string seq_ss = expand(cigars_ss[i]);
            std::string seq_ca = getXYZstring(indices[i], lengths[i], &seqDbrCA);
            std::string entry;
            entry.append("{\"name\":\"");
            entry.append(headers[i]);
            entry.append("\",\"aa\": \"");
            entry.append(seq_aa);
            entry.append("\",\"ss\": \"");
            entry.append(seq_ss);
            entry.append("\",\"ca\": \"");
            entry.append(seq_ca);
            entry.append("\"}");
            if (i != cigars_aa.size() - 1)
                entry.append(",");
            resultWriter.writeData(entry.c_str(), entry.length(), 0, 0, false, false);
        } 

        std::string middle = "],\"scores\": [";
        resultWriter.writeData(middle.c_str(), middle.length(), 0, 0, false, false);

        // Per-column scores, as [score, score, ...]
        // TODO: optionally save this as .csv
        for (int i = 0; i < alnLength; i++) {
            std::string entry = (perColumnCount[i] == 0) ? "-1" : std::to_string(perColumnScore[i]);
            if (i != alnLength - 1)
                entry.append(",");
            resultWriter.writeData(entry.c_str(), entry.length(), 0, 0, false, false);
        }
        std::string end = "],";

        if (par.guideTree != "") {
            std::string tree;
            std::string line;
            std::ifstream newick(par.guideTree);
            if (newick.is_open()) {
                while (std::getline(newick, line))
                    tree += line;
                newick.close();
            }
            end.append("\"tree\": \"");
            end.append(tree);            
            end.append("\",");
        }
        end.append("\"statistics\": {\"db\":\"");
        end.append(par.db1);
        end.append("\",\"msaFile\":\"");
        end.append(par.db2);
        end.append("\",\"msaLDDT\":");
        end.append(std::to_string(lddtScore));
        
        if (par.reportCommand != "") {
            end.append(",\"cmdString\":\"");
            end.append(par.reportCommand);
            end.append("\"");
        }
        end.append("}}</script>");

        resultWriter.writeData(end.c_str(), end.length(), 0, 0, false, false);
        resultWriter.writeEnd(0, 0, false, 0);
        resultWriter.close(true);
        FileUtil::remove((par.db3 + ".index").c_str());
    }
    
    if (par.reportCommand != "") {
        std::cout << "Report command: " << par.reportCommand << '\n';
    }
    
    seqDbrAA.close();
    seqDbrCA.close();
    seqDbr3Di.close();

    return EXIT_SUCCESS;
}


int msa2lddt(int argc, const char **argv, const Command& command) {
    return msa2lddt(argc, argv, command, false);
}
int msa2lddtreport(int argc, const char **argv, const Command& command) {
    return msa2lddt(argc, argv, command, true);
}