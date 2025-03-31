#!/bin/sh -ex
"$FOLDMASON" easy-msa --report-mode 1 --threads 1 $(find "$DATADIR" -type f -name 'd*') "${RESULTS}/easymsa" "${RESULTS}/tmp" > "${RESULTS}/easymsa.log"
TARGET="0.791274"
awk -v target="$TARGET" \
    '/Average MSA LDDT/ {print ($4 == target) ? "GOOD" : "BAD"; print "Expected: ", target; print "Actual: ", $4; }' \
    "${RESULTS}/easymsa.log" > "${RESULTS}.report"