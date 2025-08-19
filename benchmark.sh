#/usr/bin/bash -e

export MAX_N_PID_4_TCOFFEE=99998

THREADS="${THREADS:=8}"

export COMP_BIAS="${COMP_BIAS:=0}"
export GOTOH_GE="${GE:=0}"
export GOTOH_GO="${GO:=21}"
export MATCH_RATIO="${MATCH_RATIO:=0.5}"
export NB_ANG_CUT="${NB_ANG_CUT:=15}"  # angstrom cutoff
export NB_ANG_SC1="${NB_ANG_SC1:=1.0}"
export NB_ANG_SC2="${NB_ANG_SC2:=0.6}"
export NB_ANG_SC3="${NB_ANG_SC3:=0.4}"
export NB_ANG_SC4="${NB_ANG_SC4:=0.2}"
export NB_ANG_THR1="${NB_ANG_THR1:=0.5}"
export NB_ANG_THR2="${NB_ANG_THR2:=1.0}"
export NB_ANG_THR3="${NB_ANG_THR3:=2.0}"
export NB_ANG_THR4="${NB_ANG_THR4:=4.0}"
export NB_IDX_SC1="${NB_IDX_SC1:=1.0}"
export NB_IDX_SC2="${NB_IDX_SC2:=0.6}"
export NB_IDX_SC3="${NB_IDX_SC3:=0.4}"
export NB_IDX_SC4="${NB_IDX_SC4:=0.2}"
export NB_IDX_THR1="${NB_IDX_THR1:=0.5}"
export NB_IDX_THR2="${NB_IDX_THR2:=1.0}"
export NB_IDX_THR3="${NB_IDX_THR3:=2.0}"
export NB_IDX_THR4="${NB_IDX_THR4:=4.0}"
export NB_LOW_CUT="${NB_LOW_CUT:=0.5}"  # discard neighbour scores under threshold
export NB_MULT="${NB_MULT:=6}"
export NB_TOTAL="${NB_TOTAL:=21}"
export SCORE_BIAS="${SCORE_BIAS:=0.0}"
export SW_GE="${GE:=1}"
export SW_GO="${GO:=10}"
export WG="${WG:=0}"

# echo COMP_BIAS = "${COMP_BIAS}"
# echo GOTOH_GE = "${GE}"
# echo GOTOH_GO = "${GO}"
# echo MATCH_RATIO = "${MATCH_RATIO}"
# echo NB_ANG_CUT = "${NB_ANG_CUT}"  # angstrom cutoff
# echo NB_ANG_SC1 = "${NB_ANG_SC1}"
# echo NB_ANG_SC2 = "${NB_ANG_SC2}"
# echo NB_ANG_SC3 = "${NB_ANG_SC3}"
# echo NB_ANG_SC4 = "${NB_ANG_SC4}"
# echo NB_ANG_THR1 = "${NB_ANG_THR1}"
# echo NB_ANG_THR2 = "${NB_ANG_THR2}"
# echo NB_ANG_THR3 = "${NB_ANG_THR3}"
# echo NB_ANG_THR4 = "${NB_ANG_THR4}"
# echo NB_IDX_SC1 = "${NB_IDX_SC1}"
# echo NB_IDX_SC2 = "${NB_IDX_SC2}"
# echo NB_IDX_SC3 = "${NB_IDX_SC3}"
# echo NB_IDX_SC4 = "${NB_IDX_SC4}"
# echo NB_IDX_THR1 = "${NB_IDX_THR1}"
# echo NB_IDX_THR2 = "${NB_IDX_THR2}"
# echo NB_IDX_THR3 = "${NB_IDX_THR3}"
# echo NB_IDX_THR4 = "${NB_IDX_THR4}"
# echo NB_LOW_CUT = "${NB_LOW_CUT}"  # discard neighbour scores under threshold
# echo NB_MULT = "${NB_MULT}"
# echo NB_TOTAL = "${NB_TOTAL}"
# echo SCORE_BIAS = "${SCORE_BIAS}"
# echo SW_GE = "${GE}"
# echo SW_GO = "${GO}"
# echo WG = "${WG}"

PATHS=(
	"homstrad/blmb"
	"homstrad/igV"
	"homstrad/Sm"
	"homstrad/DHOdehase"
	"homstrad/ghf18"
	"homstrad/hormone_rec"
	"homstrad/Phage_integrase"
	"homstrad/sdr"
	"homstrad/bv"
	"homstrad/HGTP_anticodon"
	"homstrad/rrm"
	"homstrad/lipocalin"
	"homstrad/FAD-oxidase_C"
	"homstrad/HATPase_c"
	"homstrad/porin"
	"homstrad/DEATH"
	"homstrad/CH"
	"homstrad/Epimerase"
	"homstrad/ghf33"
	"homstrad/Peptidase_M24"
	"homstrad/helicase_C"
	"homstrad/p450"
	"homstrad/FAD_binding_4"
	"homstrad/tRNA-synt_2b"
	"homstrad/Acetyltransf"
	"homstrad/alpha-amylase_NC"
	"homstrad/CPSase_L_chain"
	"homstrad/int"
	"homstrad/reductases"
	"homstrad/igI"
	"homstrad/kinase"
	"homstrad/HMG_box"
	"homstrad/Rhodanese"
	"homstrad/proteasome"
	"homstrad/sugbp"
	"homstrad/oat"
	"homstrad/PH"
	"homstrad/Asp_Glu_race_D"
	"homstrad/thiored"
	"homstrad/Ribosomal_L6_D"
	"homstrad/cat3"
	"homstrad/alpha-amylase"
	"homstrad/Haloperoxidase"
	"homstrad/fn3"
	"homstrad/ghf5"
	"homstrad/alpha-amylase_C"
	"homstrad/TPR"
	"homstrad/Sulfotransfer"
	"homstrad/FAD-oxidase_NC"
	"homstrad/histone"
	"homstrad/GEL"
	"homstrad/Glyco_hydro_18_D2"
	"homstrad/laminin_G"
	"homstrad/ABC_tran"
	"homstrad/pdc"
	"afdb_clusters/S7TGR0"
	"afdb_clusters/R9KI14"
	"afdb_clusters/M5RUD2"
	"afdb_clusters/L9WUI5"
	"afdb_clusters/K6ACG0"
	"afdb_clusters/K0EYU6"
	"afdb_clusters/I4F5N6"
	"afdb_clusters/E8N900"
	"afdb_clusters/D3TB77"
	"afdb_clusters/B4WMN9"
	"afdb_clusters/W1PFB2"
	"afdb_clusters/R7ETQ2"
	"afdb_clusters/R1FSM3"
	"afdb_clusters/L8LTQ4"
	"afdb_clusters/K2G3Q9"
	"afdb_clusters/F4NU11"
	"afdb_clusters/C3XV33"
	"afdb_clusters/B9LR42"
	"afdb_clusters/B5GRN6"
	"afdb_clusters/B2A5F0"
	"afdb_clusters/W7QDU7"
	"afdb_clusters/W0E3L2"
	"afdb_clusters/V2YI92"
	"afdb_clusters/U7L1T7"
	"afdb_clusters/T1FNF4"
	"afdb_clusters/R8GWM8"
	"afdb_clusters/R8APS3"
	"afdb_clusters/R6WAH6"
	"afdb_clusters/Q3SL35"
	"afdb_clusters/Q384X5"
	"afdb_clusters/A0A838SJH4"
	"afdb_clusters/A0A841HGH3"
	"afdb_clusters/A0A842R2G4"
	"afdb_clusters/A0A846H7L1"
	"afdb_clusters/A0A847S9B0"
	"afdb_clusters/A0A852XNB6"
	"afdb_clusters/B2IJL3"
	"afdb_clusters/C7LW54"
	"afdb_clusters/C9LSN8"
	"afdb_clusters/F6CXK8"
)

compute_score () {
	if [ ! -e "$1" ]; then return; fi
	SPF=$(t_coffee -other_pg aln_compare -al1 "$1" -al2 "$2" -compare_mode sp | awk 'NR==3 {print $4}')
	SPR=$(t_coffee -other_pg aln_compare -al2 "$1" -al1 "$2" -compare_mode sp | awk 'NR==3 {print $4}')
	printf "%f\t%f" "$SPF" "$SPR"
}

process_path() {
	/Users/gamcil/repos/foldmason/build_vscode/src/foldmason easy-msa \
		"${1}/pdbs" "${1}/fm_probs" "${1}/tmp" \
		--gap-open "${GOTOH_GO}" \
		--gap-extend "${GOTOH_GE}" \
		--comp-bias-corr "${COMP_BIAS}" \
		--match-ratio "${MATCH_RATIO}" \
		--threads 1 \
		-v 0 \
		--score-bias "${SCORE_BIAS}"
	FAM=$(basename "${1}")
	if [[ "${1}" =~ ^homstrad ]]; then
		SCORES=$(compute_score "${1}/${FAM}_msa.fasta" "${1}/fm_probs_aa.fa")
		printf "%s\t%s\n" "$FAM" "$SCORES" >> homstrad_scores.tsv
	elif [[ "${1}" =~ ^afdb_clusters ]]; then
		LDDT=$(/Users/gamcil/repos/foldmason/build_vscode/src/foldmason msa2lddt "${1}/tmp/latest/structures" "${1}/fm_probs_aa.fa" --threads 1 | awk '/Average MSA LDDT/ { print $4 }')
		LDDT_OSC=$(/Users/gamcil/repos/foldmason/build_vscode/src/foldmason msa2lddt "${1}/tmp/latest/structures" "${1}/fm_probs_aa.fa" --threads 1 --only-scoring-cols | awk '/Average MSA LDDT/ { print $4 }')
		printf "%s\t%f\t%f\n" "$FAM" "$LDDT" "$LDDT_OSC" >> afdb_scores.tsv
	fi
}

# need to export to be visible inside xargs subshells
export -f compute_score
export -f process_path

if [ -e "homstrad_scores.tsv" ]; then rm "homstrad_scores.tsv"; fi
if [ -e "afdb_scores.tsv" ]; then rm "afdb_scores.tsv"; fi

printf '%s\0' "${PATHS[@]}" |\
	xargs -0 -I{} -P"${THREADS}" bash -c 'process_path "$@"' - '{}'

compute_f1() {
	awk -v mult="$2" '{ sum_a+=$2; sum_b+=$3; total+=1; } END { a=sum_a/total; b=sum_b/total; print mult*a, mult*b, mult*(2*a*b)/(a+b); }' "$1"
}
HOMSTRAD_F1=$(compute_f1 "homstrad_scores.tsv" 1)
AFDB_F1=$(compute_f1 "afdb_scores.tsv" 100)
echo $HOMSTRAD_F1 $AFDB_F1 | awk '{ print $1, $2, $3, $4, $5, $6, (2*$3*$6)/($3+$6) }'