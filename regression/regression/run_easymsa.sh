#!/bin/sh -ex
"$FOLDMASON" easy-msa --threads 1 $(find "$DATADIR" -type f) "${RESULTS}/easymsa.fasta" "${RESULTS}/tmp" > "${RESULTS}/easymsa.log"
TARGET="0.698404"
awk -v target="$TARGET" \
    '/Average MSA LDDT/ {print ($4 == target) ? "GOOD" : "BAD"; print "Expected: ", target; print "Actual: ", $4; }' \
    "${RESULTS}/easymsa.log" > "${RESULTS}.report"