#!/bin/sh -ex
"$FOLDMASON" createdb --threads 1 $(find "$DATADIR" -type f -name "d*") "${RESULTS}/structures"
"$FOLDMASON" structuremsa --threads 1 "${RESULTS}/structures" "${RESULTS}/msa" > "${RESULTS}/structuremsa.log"
if cmp -s "${RESULTS}/msa_aa.fa" "${DATADIR}/msa.fasta"; then
    echo "GOOD" > "${RESULTS}.report"
else
    echo "BAD" > "${RESULTS}.report"
fi