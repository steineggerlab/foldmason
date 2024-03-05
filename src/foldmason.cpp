#include "DownloadDatabase.h"
#include "Prefiltering.h"
#include "CommandDeclarations.h"
#include "LocalCommandDeclarations.h"
#include "FoldmasonParameters.h"

const char* binary_name = "foldmason";
const char* tool_name = "foldmason";
const char* tool_introduction = "<< TODO >> .\n\nPlease cite:\n << TODO >>";
const char* main_author = "Cameron L.M. Gilchrist, Milot Mirdita, Johannes Söding, Martin Steinegger";
const char* show_extended_help = "1";
const char* show_bash_info = NULL;
const char* index_version_compatible = "fs1";
bool hide_base_commands = true;
bool hide_base_downloads = true;
FoldmasonParameters& foldmasonPar = FoldmasonParameters::getFoldmasonInstance();
/*
void updateValdiation(){
    DbValidator::allDb.push_back(LocalParameters::DBTYPE_CA_ALPHA);
    DbValidator::allDb.push_back(LocalParameters::DBTYPE_TMSCORE);
    DbValidator::allDbAndFlat.push_back(LocalParameters::DBTYPE_CA_ALPHA);
    DbValidator::allDbAndFlat.push_back(LocalParameters::DBTYPE_TMSCORE);
}
void (*validatorUpdate)(void) = updateValdiation;
*/

std::vector<struct Command> foldmasonCommands = {
        {"easy-msa",          easymsa,           &foldmasonPar.easymsaworkflow,   COMMAND_EASY,
                "Sensitive homology search and build MSAs",
                "# Align a set of PDB files and create a MSA\n"
                "foldseek easy-msa example/d1asha_ result.m8 tmp\n",
                "Cameron Gilchrist <gamcil@snu.ac.kr> & Martin Steinegger <martin.steinegger@snu.ac.kr>",
                "<i:PDB|mmCIF[.gz]> ... <i:PDB|mmCIF[.gz]>|<i:stdin> <o:alignmentFile> <tmpDir>",
                CITATION_FOLDMASON, {{"PDB|mmCIF[.gz]|stdin", DbType::ACCESS_MODE_INPUT, DbType::NEED_DATA | DbType::VARIADIC, &DbValidator::flatfileStdinAndGeneric },
                                           {"alignmentFile", DbType::ACCESS_MODE_OUTPUT, DbType::NEED_DATA, &DbValidator::flatfile },
                                           {"tmpDir", DbType::ACCESS_MODE_OUTPUT, DbType::NEED_DATA, &DbValidator::directory }}},
        {"structuremsa",      structuremsa,      &foldmasonPar.structuremsa,      COMMAND_ALIGNMENT,
                "Compute guide tree based on Foldseek scores",
                NULL,
                "Cameron Gilchrist <gamcil@snu.ac.kr> & Martin Steinegger <martin.steinegger@snu.ac.kr>",
                "<i:queryDB> <o:alignmentFile>",
                CITATION_FOLDMASON, {{"queryDB", DbType::ACCESS_MODE_INPUT, DbType::NEED_DATA, &DbValidator::sequenceDb },
                                           {"alignmentFile", DbType::ACCESS_MODE_OUTPUT, DbType::NEED_DATA, &DbValidator::flatfile }}},
        {"structuremsacluster",      structuremsacluster,      &foldmasonPar.structuremsa,      COMMAND_ALIGNMENT,
                "Compute guide tree based on Foldseek scores",
                NULL,
                "Cameron Gilchrist <gamcil@snu.ac.kr> & Martin Steinegger <martin.steinegger@snu.ac.kr>",
                "<i:queryDB> <i:clusterDB> <o:alignmentFile>",
                CITATION_FOLDMASON, {{"queryDB", DbType::ACCESS_MODE_INPUT, DbType::NEED_DATA, &DbValidator::sequenceDb },
                                           {"clustDB", DbType::ACCESS_MODE_INPUT, DbType::NEED_DATA | DbType::VARIADIC, NULL },
                                           {"alignmentFile", DbType::ACCESS_MODE_OUTPUT, DbType::NEED_DATA, &DbValidator::flatfile }}},
        {"msa2lddt",      msa2lddt,      &foldmasonPar.msa2lddt,      COMMAND_ALIGNMENT,
                "Calculate LDDT of a MSA",
                NULL,
                "Cameron Gilchrist <gamcil@snu.ac.kr> & Martin Steinegger <martin.steinegger@snu.ac.kr>",
                "<i:queryDB> <i:msaFile>",
                CITATION_FOLDMASON, {{"queryDB", DbType::ACCESS_MODE_INPUT, DbType::NEED_DATA, &DbValidator::sequenceDb },
                                    {"msaFile", DbType::ACCESS_MODE_INPUT, DbType::NEED_DATA, &DbValidator::flatfileAndStdin },}},
        {"msa2lddtreport",      msa2lddtreport,      &foldmasonPar.msa2lddt,      COMMAND_ALIGNMENT,
                "Calculate LDDT of a MSA and generate HTML report",
                NULL,
                "Cameron Gilchrist <gamcil@snu.ac.kr> & Martin Steinegger <martin.steinegger@snu.ac.kr>",
                "<i:queryDB> <i:msaFile> <o:htmlFile>",
                CITATION_FOLDMASON, {{"queryDB", DbType::ACCESS_MODE_INPUT, DbType::NEED_DATA, &DbValidator::sequenceDb },
                                    {"msaFile", DbType::ACCESS_MODE_INPUT, DbType::NEED_DATA, &DbValidator::flatfileAndStdin },
                                    {"htmlFile", DbType::ACCESS_MODE_OUTPUT, DbType::NEED_DATA, &DbValidator::flatfile }}},
        {"refinemsa",     refinemsa,      &foldmasonPar.refinemsa,      COMMAND_ALIGNMENT,
                "Iteratively refine a MSA using structural information",
                NULL,
                "Cameron Gilchrist <gamcil@snu.ac.kr> & Martin Steinegger <martin.steinegger@snu.ac.kr>",
                "<i:queryDB> <i:msaFile> <o:msaFile>",
                CITATION_FOLDMASON, {{"queryDB", DbType::ACCESS_MODE_INPUT, DbType::NEED_DATA, &DbValidator::sequenceDb },
                                    {"msaFileIn", DbType::ACCESS_MODE_INPUT, DbType::NEED_DATA, &DbValidator::flatfileAndStdin },
                                    {"msaFileOut", DbType::ACCESS_MODE_OUTPUT, DbType::NEED_DATA, &DbValidator::flatfile },}},
        {"convertalis",          structureconvertalis,    &foldmasonPar.convertalignments,    COMMAND_FORMAT_CONVERSION,
                "Convert alignment DB to BLAST-tab, SAM or custom format",
                "# Create output in BLAST M8 format (12 columns):\n"
                "#  (1,2) identifiers for query and target sequences/profiles,\n"
                "#  (3) sequence identity, (4) alignment length, (5) number of mismatches,\n"
                "#  (6) number of gap openings, (7-8, 9-10) alignment start and end-position in query and in target,\n"
                "#  (11) E-value, and (12) bit score\n"
                "foldseek convertalis queryDB targetDB result.m8\n\n"
                "# Create a TSV containing pairwise alignments\n"
                "foldseek convertalis queryDB targetDB result.tsv --format-output query,target,qaln,taln\n\n"
                "# Annotate a alignment result with taxonomy information from targetDB\n"
                "foldseek convertalis queryDB targetDB result.tsv --format-output query,target,taxid,taxname,taxlineage\n\n"
                " Create SAM output\n"
                "foldseek convertalis queryDB targetDB result.sam --format-mode 1\n\n"
                "# Create a TSV containing which query file a result comes from\n"
                "foldseek createdb euk_queries.fasta bac_queries.fasta queryDB\n"
                "foldseek convertalis queryDB targetDB result.tsv --format-output qset,query,target\n",
                "Martin Steinegger <martin.steinegger@snu.ac.kr>",
                "<i:queryDb> <i:targetDb> <i:alignmentDB> <o:alignmentFile>",
                CITATION_MMSEQS2, {{"queryDB", DbType::ACCESS_MODE_INPUT, DbType::NEED_DATA|DbType::NEED_HEADER, &DbValidator::sequenceDb },
                                           {"targetDB", DbType::ACCESS_MODE_INPUT, DbType::NEED_DATA|DbType::NEED_HEADER, &DbValidator::sequenceDb },
                                           {"alignmentDB", DbType::ACCESS_MODE_INPUT, DbType::NEED_DATA, &DbValidator::alignmentDb },
                                           {"alignmentFile", DbType::ACCESS_MODE_OUTPUT, DbType::NEED_DATA, &DbValidator::flatfile}}},
        {"version",              versionstring,        &foldmasonPar.empty,                COMMAND_HIDDEN,
                "",
                NULL,
                "",
                "",
                CITATION_FOLDMASON, {{"",DbType::ACCESS_MODE_INPUT, DbType::NEED_DATA, NULL}}}
};

extern std::vector<Command> baseCommands;
extern std::vector<Command> foldseekCommands;
void init() {
    registerCommands(&baseCommands);
    registerCommands(&foldseekCommands);
    registerCommands(&foldmasonCommands);
}
void (*initCommands)(void) = init;
void initParameterSingleton() { new FoldmasonParameters; }