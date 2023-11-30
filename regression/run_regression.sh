#!/bin/sh -e
abspath() {
    if [ -d "$1" ]; then
        (cd "$1"; pwd)
    elif [ -f "$1" ]; then
        if [ -z "${1##*/*}" ]; then
            echo "$(cd "${1%/*}"; pwd)/${1##*/}"
        else
            echo "$(pwd)/$1"
        fi
    elif [ -d "$(dirname "$1")" ]; then
        echo "$(cd "$(dirname "$1")"; pwd)/$(basename "$1")"
    fi
}

if [ "$#" -lt 2 ]; then
  echo "Need at least 2 parameters!"
  exit 1
fi
export FOLDMASON="$(abspath "$(command -v "$1")")"
SCRATCH="$(abspath "$2")"
RUN_ONLY="${3:-""}"

BASE="$(dirname "$(abspath "$0")")"
cd "${BASE}"

export DATADIR="${BASE}/data"
export SCRIPTS="${BASE}/regression"

TESTS=""
run_test() {
  if [ "$#" -lt 2 ]; then
    echo "Test needs at least 2 parameters!"
    exit 1
  fi
  NAME="$1"
  FILE="$2"
  shift
  shift
  if [ ! -z "$RUN_ONLY" ] && [ X"$RUN_ONLY" != X"$NAME" ]; then
    return
  fi
  TESTS="${TESTS} ${NAME}"
  export RESULTS="${SCRATCH}/${NAME}"
  mkdir -p "${RESULTS}"
  START="$(date +%s)"
  "${SCRIPTS}/${FILE}" "$@"
  STATUS="$?"
  END="$(date +%s)"
  if [ "${STATUS}" = "0" ]; then
     if [ -f "${RESULTS}.report" ] && [ "$(echo $(head -n 1 "${RESULTS}.report"))" = "GOOD" ]; then
        rm -rf "${RESULTS}"
     fi
  fi
  eval "${NAME}_TIME"="$((END-START))"
}

# continue on if one test fail
set +e
# export EVALUATE="${BASE}/bench.awk"
run_test run_easymsa "run_easymsa.sh"
run_test run_structuremsa "run_structuremsa.sh"
run_test run_msa2lddt "run_msa2lddt.sh"
# run_test run_refinemsa "run_refinemsa.sh"
set -e
printf "\n"

ERR=0
for i in ${TESTS} ; do
    VAL="${i}_TIME"
    eval TIME="\$$VAL"
    printf "\033[1m$i (Time: %ss)\033[0m\n" "${TIME}"
    if [ ! -f "${SCRATCH}/${i}.report" ]; then
        printf "\033[33mTEST FAILED (NO REPORT)\033[0m\n\n"
        ERR=$((ERR+1))
        continue
    fi

    if [ ! -s "${SCRATCH}/${i}.report" ]; then
        printf "\033[33mTEST FAILED (EMPTY REPORT)\033[0m\n\n"
        ERR=$((ERR+1))
        continue
    fi
    STATUS="$(head -n 1 "${SCRATCH}/${i}.report")"
    if [ "$STATUS" != "GOOD" ]; then
        printf "\033[31mTEST FAILED\033[0m\n"
        ERR=$((ERR+1))
    else
        printf "\033[32mTEST SUCCESS\033[0m\n"
    fi
    cat "${SCRATCH}/${i}.report"
    printf "\n"
done

exit "$ERR"