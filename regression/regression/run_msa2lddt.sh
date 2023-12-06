#!/bin/sh -ex
"$FOLDMASON" createdb --threads 1 $(find "$DATADIR" -type f -name "d*") "${RESULTS}/structures"
"$FOLDMASON" msa2lddt --threads 1 "${RESULTS}/structures" "${DATADIR}/msa.fasta" > "${RESULTS}/msa2lddt.log"
TARGET="0.698404"
awk -v target="$TARGET" \
    '/Average MSA LDDT/ {print ($4 == target) ? "GOOD" : "BAD"; print "Expected: ", target; print "Actual: ", $4; }' \
    "${RESULTS}/msa2lddt.log" > "${RESULTS}.report"