#include "DBReader.h"
#include "DBWriter.h"
#include "IndexReader.h"
#include "LocalParameters.h"
#include "Matcher.h"
#include "Parameters.h"
#include "StructureUtil.h"
#include "Util.h"
#include <cassert>

#define ZSTD_STATIC_LINKING_ONLY

#include <zstd.h>
#include "msa.html.zst.h"

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


Matcher::result_t makeMockAlignment(
    std::vector<Instruction2> &instructions1,
    std::vector<Instruction2> &instructions2,
    std::vector<int> &match_to_msa,
    int alnLength
) {
    Matcher::result_t result;
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

    Instruction2 ins1 = instructions1[index1];                
    Instruction2 ins2 = instructions2[index2];
    
    for (int i = 0; i < alnLength; i++) {
        ins1 = instructions1[index1];                
        ins2 = instructions2[index2];
        if (!ins1.isSeq() && !ins2.isSeq()) {
            count1++;
            count2++; 
        } else if (!ins1.isSeq()) {
            if (started) result.backtrace.push_back('D');
            tr++;
            count1++;
            index2++;
        } else if (!ins2.isSeq()) {
            if (started) result.backtrace.push_back('I');
            qr++;
            count2++;
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
    std::vector<std::vector<Instruction2> > &cigars,
    std::vector<size_t> &subset,
    int alnLength
) {
    std::vector<int> counts(alnLength, 0);
    for (int i = 0; i < subset.size(); i++) {
        std::vector<Instruction2> cigar = cigars[i];
        int j = 0;
        for (Instruction2 ins : cigar) {
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
    std::vector<std::vector<Instruction2> > &cigars,
    std::vector<size_t> &subset,
    std::vector<size_t> &indices,
    std::vector<int> &lengths,
    DBReader<unsigned int> * seqDbrCA,
    float pairThreshold
) {
    int alnLength = cigarLength(cigars[0], true); 
    
    // Track per-column scores and no. non-gaps to avg
    std::vector<float> perColumnScore(alnLength, 0.0);
    std::vector<int>   perColumnCount(alnLength, 0);

    float sum = 0.0;
    int numPairs = cigars.size() * (cigars.size() - 1) / 2;
    
#pragma omp parallel reduction(+:sum) reduction(vsum:perColumnScore,perColumnCount)
{
    LDDTCalculator *lddtcalculator = new LDDTCalculator(alnLength, alnLength);
    std::vector<Matcher::result_t> results(numPairs);
    
    for (size_t i = 0; i < subset.size(); i++) {
        size_t i_idx = subset[i]; 
        Coordinate16 qcoords;
        char *qcadata = seqDbrCA->getData(indices[i_idx], 0);
        size_t qCaLength = seqDbrCA->getEntryLen(indices[i_idx]);
        float *queryCaData = qcoords.read(qcadata, lengths[i_idx], qCaLength);
        
        lddtcalculator->initQuery(
            lengths[i_idx],
            queryCaData,
            &queryCaData[lengths[i_idx]],
            &queryCaData[lengths[i_idx] * 2]
        );

#pragma omp for schedule(dynamic, 1)
        for (size_t j = i + 1; j < subset.size(); j++) {
            size_t j_idx = subset[j];
            Coordinate16 tcoords;
            char *tcadata = seqDbrCA->getData(indices[j_idx], 0);
            size_t tCaLength = seqDbrCA->getEntryLen(indices[j_idx]);
            float *targetCaData = tcoords.read(tcadata, lengths[j_idx], tCaLength);

            // indices of matches in gappy msa
            std::vector<int> match_to_msa;
            
            assert(expand(cigars[i_idx]).length() == expand(cigars[j_idx]).length());

            // Generate a CIGAR string from qId-tId sub-alignment, ignoring -- columns
            // e.g. --X-XX-X---XX-
            //      Y---YYYY---YYY
            //          MMDM   MM
            Matcher::result_t result = makeMockAlignment(cigars[i_idx], cigars[j_idx], match_to_msa, alnLength);

            // If no alignment between the two sequences, skip
            if (result.backtrace.length() == 0)
                continue;

            // Remove D/I from backtrace after last M
            result.backtrace.shrink_to_fit();
            size_t k;
            for (k = result.backtrace.length() - 1; result.backtrace[k] != 'M'; k--);
            result.backtrace.erase(k + 1);

            LDDTCalculator::LDDTScoreResult lddtres = lddtcalculator->computeLDDTScore(
                lengths[j_idx],
                result.qStartPos,
                result.dbStartPos,
                result.backtrace,
                targetCaData,
                &targetCaData[lengths[j_idx]],
                &targetCaData[lengths[j_idx] * 2]
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
        }
    }
    delete lddtcalculator;
}

    std::vector<int> colCounts = countColumns(cigars, subset, alnLength);
    float scaledSum = 0.0;
    int numCols = 0;
    for (size_t i = 0; i < perColumnCount.size(); i++) {
        float pairSupport = perColumnCount[i] / static_cast<float>(numPairs);
        float residuesInColumn = colCounts[i];

        // TODO maybe change to bool flag to just count/not count single-residue columns in entire MSA score
        if ((residuesInColumn / cigars.size()) < pairThreshold) {
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
    float lddtScore = scaledSum / static_cast<float>(numCols);                                        
    return std::make_tuple(perColumnScore, perColumnCount, lddtScore);
}

void parseFasta(
    KSeqWrapper *kseq,
    DBReader<unsigned int> * seqDbrAA,
    DBReader<unsigned int> * seqDbr3Di,
    std::vector<std::string> &headers,
    std::vector<size_t>      &indices,
    std::vector<int>         &lengths,
    std::vector<std::vector<Instruction2> > &cigars_aa,
    std::vector<std::vector<Instruction2> > &cigars_ss,
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
        
        std::vector<Instruction2> cigar_aa = contract(entry.sequence.s);
        std::vector<Instruction2> cigar_ss;
        int index = 0;
        for (Instruction2 ins : cigar_aa) {
            if (ins.isSeq()) {
                cigar_ss.emplace_back(seq3Di[index]);
                index++;
            } else {
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
    std::vector<std::vector<Instruction2> > cigars_aa;
    std::vector<std::vector<Instruction2> > cigars_ss;
    parseFasta(kseq, &seqDbrAA, &seqDbr3Di, hdrs, inds, lens, cigars_aa, cigars_ss, alnLength);
    delete kseq;

    std::vector<float> perColumnScore;
    std::vector<int>   perColumnCount;
    float lddtScore;
    std::tie(perColumnScore, perColumnCount, lddtScore) = calculate_lddt(cigars_aa, inds, inds, lens, &seqDbrCA, pairThreshold);

    return lddtScore;
}

int msa2lddt(int argc, const char **argv, const Command& command) {
    LocalParameters &par = LocalParameters::getLocalInstance();

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
    std::vector<std::vector<Instruction2> > cigars_aa;
    std::vector<std::vector<Instruction2> > cigars_ss;
    parseFasta(kseq, &seqDbrAA, &seqDbr3Di, headers, indices, lengths, cigars_aa, cigars_ss, alnLength);
    
    // Calculate LDDT
    std::vector<float> perColumnScore;
    std::vector<int>   perColumnCount;
    float lddtScore;

    std::tie(perColumnScore, perColumnCount, lddtScore) = calculate_lddt(cigars_aa, indices, indices, lengths, &seqDbrCA, par.pairThreshold);
    
    std::cout << "Average MSA LDDT: " << lddtScore << std::endl;
    
    // Write clustal format MSA HTML
    // TODO: make optional
    if (par.lddtHtml != "") {
        std::string lddtHtmlIdx = par.lddtHtml + ".index";
        DBWriter resultWriter(par.lddtHtml.c_str(), lddtHtmlIdx.c_str(), static_cast<unsigned int>(par.threads), par.compressed, Parameters::DBTYPE_OMIT_FILE);
        resultWriter.open();
        
        // Read in template and write to .html
        size_t dstSize = ZSTD_findDecompressedSize(msa_html_zst, msa_html_zst_len);
        char* dst = (char*)malloc(sizeof(char) * dstSize);
        size_t realSize = ZSTD_decompress(dst, dstSize, msa_html_zst, msa_html_zst_len);
        resultWriter.writeData(dst, realSize, 0, 0, false, false);

        // Aligned sequences, as [[header, sequence], [header, sequence], ...]
        const char* scriptBlock = "<script>render([";
        resultWriter.writeData(scriptBlock, strlen(scriptBlock), 0, 0, false, false);

        for (size_t i = 0; i < cigars_aa.size(); i++) {
            std::string seq_aa = expand(cigars_aa[i]);
            std::string seq_ss = expand(cigars_ss[i]);
            std::string entry;
            entry.append("['");
            entry.append(headers[i]);
            entry.append("','");
            entry.append(seq_aa);
            entry.append("','");
            entry.append(seq_ss);
            entry.append("'],");
            resultWriter.writeData(entry.c_str(), entry.length(), 0, 0, false, false);
        } 

        std::string middle = "],[";
        resultWriter.writeData(middle.c_str(), middle.length(), 0, 0, false, false);

        // Per-column scores, as [[id, score], [id, score], ...]
        // TODO: optionally save this as .csv
        for (int i = 0; i < alnLength; i++) {
            if (perColumnCount[i] == 0)
                continue;
            std::string entry;
            entry.append("[");
            entry.append(std::to_string(i));
            entry.append(",");
            entry.append(std::to_string(perColumnScore[i]));   // / (double)perColumnCount[i]));
            entry.append("],");
            resultWriter.writeData(entry.c_str(), entry.length(), 0, 0, false, false);
        }
        
        std::string end = "],";
        end.append("{'db':'");
        end.append(par.db1);
        end.append("','msa':'");
        end.append(par.db2);
        end.append("','lddt':");
        end.append(std::to_string(lddtScore));
        end.append("});</script>");

        resultWriter.writeData(end.c_str(), end.length(), 0, 0, false, false);
        resultWriter.writeEnd(0, 0, false, 0);
        resultWriter.close(true);
        FileUtil::remove(lddtHtmlIdx.c_str());
    }

    return EXIT_SUCCESS;
}