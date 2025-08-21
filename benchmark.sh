#/usr/bin/bash -e

export MAX_N_PID_4_TCOFFEE=99998

THREADS="${THREADS:=8}"
RUN_UID="${RUN_UID:=1}"
export HOMSTRAD_SCORES="homstrad_scores_${RUN_UID}.tsv"
export AFDB_SCORES="afdb_scores_${RUN_UID}.tsv"
export MSA_PREFIX="fm_probs_${RUN_UID}"
export MSA_NAME="${MSA_PREFIX}_aa.fa"

export COMP_BIAS="${COMP_BIAS:=0}"
export GOTOH_GE="${GOTOH_GE:=0}"
export GOTOH_GO="${GOTOH_GO:=21}"
export MATCH_RATIO="${MATCH_RATIO:=0.5}"
export NB_ANG_CUT="${NB_ANG_CUT:=15.0}"  # angstrom cutoff
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
export NB_IDX_THR1="${NB_IDX_THR1:=2.0}"
export NB_IDX_THR2="${NB_IDX_THR2:=4.0}"
export NB_IDX_THR3="${NB_IDX_THR3:=8.0}"
export NB_IDX_THR4="${NB_IDX_THR4:=12.0}"
export NB_LOW_CUT="${NB_LOW_CUT:=0.5}"  # discard neighbour scores under threshold
export NB_MULT="${NB_MULT:=6}"
export NB_TOTAL="${NB_TOTAL:=21}"
export SCORE_BIAS="${SCORE_BIAS:=0.6}"
export SCORE_BIAS_PSSM="${SCORE_BIAS_PSSM:=0.0}"
export SW_GE="${SW_GE:=1}"
export SW_GO="${SW_GO:=10}"
export WG="${WG:=1}"
export BITFACTOR_AA="${BITFACTOR_AA:=1.1}"
export BITFACTOR_3DI="${BITFACTOR_3DI:=2.1}"
export FILTER_MSA="${FILTER_MSA:=0}"

# echo COMP_BIAS = "${COMP_BIAS}"
# echo GOTOH_GE = "${GOTOH_GE}"
# echo GOTOH_GO = "${GOTOH_GO}"
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
# echo SW_GE = "${SW_GE}"
# echo SW_GO = "${SW_GO}"
# echo WG = "${WG}"
# echo BITFACTOR_AA = "${BITFACTOR_AA}"
# echo BITFACTOR_3DI = "${BITFACTOR_3DI}"
# echo FILTER_MSA = "${FILTER_MSA}"

PATHS=(
	"homstrad/ABC_tran"
	"homstrad/Acetyltransf"
	"homstrad/alpha-amylase"
	"homstrad/alpha-amylase_C"
	"homstrad/alpha-amylase_NC"
	"homstrad/Asp_Glu_race_D"
	"homstrad/blmb"
	"homstrad/bv"
	"homstrad/cat3"
	"homstrad/CH"
	"homstrad/CPSase_L_chain"
	"homstrad/DEATH"
	"homstrad/DHOdehase"
	"homstrad/Epimerase"
	"homstrad/FAD_binding_4"
	"homstrad/FAD-oxidase_C"
	"homstrad/FAD-oxidase_NC"
	"homstrad/fn3"
	"homstrad/GEL"
	"homstrad/ghf18"
	"homstrad/ghf33"
	"homstrad/ghf5"
	"homstrad/Glyco_hydro_18_D2"
	"homstrad/Haloperoxidase"
	"homstrad/HATPase_c"
	"homstrad/helicase_C"
	"homstrad/HGTP_anticodon"
	"homstrad/histone"
	"homstrad/HMG_box"
	"homstrad/hormone_rec"
	"homstrad/igI"
	"homstrad/igV"
	"homstrad/int"
	"homstrad/kinase"
	"homstrad/laminin_G"
	"homstrad/lipocalin"
	"homstrad/oat"
	"homstrad/p450"
	"homstrad/pdc"
	"homstrad/Peptidase_M24"
	"homstrad/PH"
	"homstrad/Phage_integrase"
	"homstrad/porin"
	"homstrad/proteasome"
	"homstrad/reductases"
	"homstrad/Rhodanese"
	"homstrad/Ribosomal_L6_D"
	"homstrad/rrm"
	"homstrad/sdr"
	"homstrad/Sm"
	"homstrad/sugbp"
	"homstrad/Sulfotransfer"
	"homstrad/thiored"
	"homstrad/TPR"
	"homstrad/tRNA-synt_2b"
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
	if [ -e "${1}/tmp/latest/structures" ]; then
		/Users/gamcil/repos/foldmason/build_vscode/src/foldmason structuremsa \
			"${1}/tmp/latest/structures" "${1}/${MSA_PREFIX}" \
			--gap-open "${GOTOH_GO}" \
			--gap-extend "${GOTOH_GE}" \
			--comp-bias-corr "${COMP_BIAS}" \
			--match-ratio "${MATCH_RATIO}" \
			--bitfactor-aa "${BITFACTOR_AA}" \
			--bitfactor-3di "${BITFACTOR_3DI}" \
			--filter-msa "${FILTER_MSA}" \
			--threads 1 \
			--wg "${WG}" \
			-v 0 \
			--score-bias "${SCORE_BIAS}"
	else
		/Users/gamcil/repos/foldmason/build_vscode/src/foldmason easy-msa \
			"${1}/pdbs" "${1}/${MSA_PREFIX}" "${1}/tmp" \
			--gap-open "${GOTOH_GO}" \
			--gap-extend "${GOTOH_GE}" \
			--comp-bias-corr "${COMP_BIAS}" \
			--match-ratio "${MATCH_RATIO}" \
			--bitfactor-aa "${BITFACTOR_AA}" \
			--bitfactor-3di "${BITFACTOR_3DI}" \
			--filter-msa "${FILTER_MSA}" \
			--threads 1 \
			--wg "${WG}" \
			-v 0 \
			--score-bias "${SCORE_BIAS}"
	fi
	FAM=$(basename "${1}")
	if [[ "${1}" =~ ^homstrad ]]; then
		SCORES=$(compute_score "${1}/${FAM}_msa.fasta" "${1}/${MSA_NAME}")
		printf "%s\t%s\n" "$FAM" "$SCORES" >> "$HOMSTRAD_SCORES"
	elif [[ "${1}" =~ ^afdb_clusters ]]; then
		LDDT=$(/Users/gamcil/repos/foldmason/build_vscode/src/foldmason msa2lddt "${1}/tmp/latest/structures" "${1}/${MSA_NAME}" --threads 1 | awk '/Average MSA LDDT/ { print $4 }')
		LDDT_OSC=$(/Users/gamcil/repos/foldmason/build_vscode/src/foldmason msa2lddt "${1}/tmp/latest/structures" "${1}/${MSA_NAME}" --threads 1 --only-scoring-cols | awk '/Average MSA LDDT/ { print $4 }')
		printf "%s\t%f\t%f\n" "$FAM" "$LDDT" "$LDDT_OSC" >> "$AFDB_SCORES"
	fi
}

# need to export to be visible inside xargs subshells
export -f compute_score
export -f process_path

if [ -e "$HOMSTRAD_SCORES" ]; then rm "$HOMSTRAD_SCORES"; fi
if [ -e "$AFDB_SCORES" ]; then rm "$AFDB_SCORES"; fi

printf '%s\0' "${PATHS[@]}" |\
	xargs -0 -I{} -P"${THREADS}" bash -c 'process_path "$@"' - '{}'

compute_f1() {
	awk -v mult="$2" '{ sum_a+=$2; sum_b+=$3; total+=1; } END { a=sum_a/total; b=sum_b/total; print mult*a, mult*b, mult*(2*a*b)/(a+b); }' "$1"
}
HOMSTRAD_F1=$(compute_f1 "$HOMSTRAD_SCORES" 1)
AFDB_F1=$(compute_f1 "$AFDB_SCORES" 100)
echo $HOMSTRAD_F1 $AFDB_F1 | awk '{ print $1, $2, $3, $4, $5, $6, (2*$3*$6)/($3+$6) }'