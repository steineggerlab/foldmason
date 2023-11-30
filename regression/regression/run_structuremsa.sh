#!/bin/sh -ex
"$FOLDMASON" createdb $(find "$DATADIR" -type f -name "d*") "${RESULTS}/structures"
"$FOLDMASON" structuremsa "${RESULTS}/structures" "${RESULTS}/msa.fasta" > "${RESULTS}/structuremsa.log"
if cmp -s "${RESULTS}/msa.fasta" "${DATADIR}/msa.fasta"; then
    echo "GOOD" > "${RESULTS}.report"
else
    echo "BAD" > "${RESULTS}.report"
fi