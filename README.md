# FoldMason
FoldMason is a software tool for constructing accurate multiple alignments from large sets of protein structures.

<p align="center"><img src="https://github.com/steineggerlab/foldmason/blob/main/.github/foldmason_logo.png" height="250" /></p>

## Publications
[Gilchrist CLM, Mirdita M, and Steinegger M. Multiple Protein Structure Alignment at Scale with FoldMason. Science, doi: 10.1126/science.ads6733 (2026)](https://www.science.org/doi/10.1126/science.ads6733)

[![build workflow](https://github.com/steineggerlab/foldmason/actions/workflows/build.yml/badge.svg)](https://github.com/steineggerlab/foldmason/actions/workflows/build.yml)

# Table of Contents

- [FoldMason](#foldmason)
- [Webserver](#webserver)
- [Installation](#installation)
- [Documentation](#documentation)
- [Quick Start](#quick-start)
  - [Multiple alignment](#multiple-alignment)
    - [Output](#output)
    - [Important Parameters](#important-parameters)
  - [Databases](#databases)
    - [Create Custom Databases and Indexes](#create-custom-databases-and-indexes)
- [Main Modules](#main-modules)
- [Examples](#examples)

## Webserver 
Align your protein structures quickly using our [FoldMason webserver](https://search.foldseek.com/foldmason).

## Installation
```
# Linux AVX2 build (check using: cat /proc/cpuinfo | grep avx2)
wget https://mmseqs.com/foldmason/foldmason-linux-avx2.tar.gz; tar xvzf foldmason-linux-avx2.tar.gz; export PATH=$(pwd)/foldmason/bin/:$PATH

# Linux SSE2 build (check using: cat /proc/cpuinfo | grep sse2)
wget https://mmseqs.com/foldmason/foldmason-linux-sse2.tar.gz; tar xvzf foldmason-linux-sse2.tar.gz; export PATH=$(pwd)/foldmason/bin/:$PATH

# Linux ARM64 build
wget https://mmseqs.com/foldmason/foldmason-linux-arm64.tar.gz; tar xvzf foldmason-linux-arm64.tar.gz; export PATH=$(pwd)/foldmason/bin/:$PATH

# MacOS
wget https://mmseqs.com/foldmason/foldmason-osx-universal.tar.gz; tar xvzf foldmason-osx-universal.tar.gz; export PATH=$(pwd)/foldmason/bin/:$PATH

# Conda installer (Linux and macOS)
conda install -c conda-forge -c bioconda foldmason
```
Other precompiled binaries for ARM64 amd SSE2 are available at [https://mmseqs.com/foldmason](https://mmseqs.com/foldmason).

<!-- ## Documentation
Many of Foldseek's modules (subprograms) rely on MMseqs2. For more information about these modules, refer to the [MMseqs2 wiki](https://github.com/soedinglab/MMseqs2/wiki). For documentation specific to Foldseek, checkout the Foldseek wiki [here](https://github.com/steineggerlab/foldseek/wiki).
 -->

## Quick start

### Multiple alignment
The `easy-msa` module allows you to align multiple query structures formatted in PDB/mmCIF format (flat or gzipped). By default it outputs the alignment as a [FASTA-format file](#fasta-alignment) as well as an interactive [HTML](#interactive-html) output.

```
foldmason easy-msa <PDB/mmCIF files> result.fasta tmpFolder --report-mode 1
```

To generate the example output on the webserver:
```
foldmason easy-msa ./lib/foldseek/example/d* example.fasta tmpFolder --report-mode 1
```
 
#### Output
##### FASTA alignment
FoldMason generates alignments in FASTA-format, with both amino acid and 3Di alphabets (`_aa.fa` and `_3di.fa` suffixes, respectively).

##### Interactive HTML
FoldMason generates a HTML MSA visualisation when using `easy-msa` with `--report-mode 1`. The following will produce `result.fasta` and `result.html`.

```
foldmason easy-msa <PDB/mmCIF files> result tmpFolder --report-mode 1
```

Internally, this happens using the `msa2lddtreport` module.

```
foldmason msa2lddtreport myDb result.fa result.html
```

Additionally, you can generate a JSON data file which can be loaded into the webserver (`--report-mode 2` for `easy-msa`).

```
foldmason msa2lddtjson myDb result.fa result.json
```

<p align="center"><img src="./.github/html.gif" height="400"/></p>

#### Important parameters

| Option             | Category  | Description                                                                                               |
|--------------------|-----------|-----------------------------------------------------------------------------------------------------------|
| `--gap-open`       | Alignment | Gap opening penalty (default: 10)
| `--gap-extend`     | Alignment | Gap extension penalty (default: 1)
| `--refine-iters`   | Alignment | Number of refinement iterations to run after initial alignment (default: 0)
| `--output-mode`    | Alignment | 0: Amino acids, 1: 3Di alphabet (default: 0)
| `--pair-threshold` | Scoring   | Maximum proportion of gaps in column threshold for LDDT calculation (default: 0.0)

#### Create custom databases and indexes
The structure database can be pre-processed by `createdb`. Doing this make sense if they inputs should be aligned multiple times. 
 
```
foldmason createdb example/ structureDB
```

## Main Modules
- `easy-msa`          multiple alignment workflow from structure files
- `structuremsa`      multiple alignment from structure database
- `msa2lddt`          calculate structure-based score (LDDT) of a MSA 
- `refinemsa`         iterative MSA refinement

## Examples
### Basic MSA workflow
The easiest way to use FoldMason is to use the `easy-msa` workflow like so:

```
foldmason easy-msa <PDB/mmCIF files> result tmpFolder
```

By default, `easy-msa` produces multiple alignments in FASTA format (`result_aa.fa` and `result_3di.fa` for amino acid and 3Di alphabets, respectively),
as well as a Newick format tree (`result.nw`). This is equivalent to the following sequence of commands:

```
foldmason createdb <PDB/mmCIF files> myDb
foldmason structuremsa myDb result
```

`easy-msa` can also compute the average LDDT score of the alignment and generate the interactive HTML visualisation by specifying
`--report-mode 1`, like so:

```
foldmason easy-msa <PDB/mmCIF files> result tmpFolder --report-mode 1
```

This is the equivalent of the following sequence of commands:

```
foldmason createdb <PDB/mmCIF files> myDb
foldmason structuremsa myDb result
foldmason msa2lddtreport myDb result_aa.fa result.html --guide-tree result.nw
```

Note: the generated guide tree is passed to `msa2lddtreport` to display it inside the HTML report.

### Aligning large data sets
FoldMason can use the clustering capabilities of Foldseek to pre-cluster input structures before alignment by specifying `--precluster`,
allowing for alignments of large sets of proteins.

```
foldmason easy-msa <PDB/mmCIF files> result tmpFolder --precluster
```

### Computing LDDT of an externally created MSA
The `msa2lddt` module computes an average [Local Distance Difference Test (LDDT) score](https://doi.org/10.1093/bioinformatics/btt473)
over the length of an MSA. This can be done automatically in the `easy-msa` workflow by specifying `--report-mode 1`, but
`msa2lddt` can be called separately to compute the LDDT of any given alignment, so long as the structures in the MSA are present in the given structure database:

```
foldmason msa2lddt myDb result.fa
foldmason msa2lddtreport myDb result.fa result.html
```

Average MSA LDDT is calculated by computing per-column LDDT scores of every pair of sequences in the MSA, and then averaging them over the length of the MSA.
Sequence comparison order is determined by database keys, thus scores for MSAs produced by different tools are comparable if specifying the same structure database
in `msa2lddt`.

### MSA Refinement
The `refinemsa` module refines an MSA by iteratively splitting and re-aligning it, saving a resulting MSA when an increase in average LDDT is detected.

```
foldmason refinemsa myDb result.fasta refined.fasta --refine-iters 1000
```

Refinement can be run automatically in the `easy-msa` workflow by specifying the `--refine-iters` argument.
