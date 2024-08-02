#!/bin/sh
FLAGS="$(grep -m 1 '^flags' /proc/cpuinfo)"
case "${FLAGS}" in
  *avx2*)
    exec /usr/local/bin/foldmason_avx2 "$@"
    ;;
  *)
    exec /usr/local/bin/foldmason_sse2 "$@"
    ;;
esac
