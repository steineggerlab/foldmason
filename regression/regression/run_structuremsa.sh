#!/bin/sh -ex
"$FOLDMASON" createdb --threads 1 $(find "$DATADIR" -type f -name "d*") "${RESULTS}/structures"
"$FOLDMASON" structuremsa --threads 1 "${RESULTS}/structures" "${RESULTS}/msa.fasta" > "${RESULTS}/structuremsa.log"
if cmp -s "${RESULTS}/msa.fasta" "${DATADIR}/msa.fasta"; then
    echo "GOOD" > "${RESULTS}.report"
else
    echo "BAD" > "${RESULTS}.report"
fi