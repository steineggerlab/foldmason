import os
import subprocess
import optuna
import math
from optuna.samplers import TPESampler


def objective(trial):
    # comp_bias = trial.suggest_categorical("COMP_BIAS", [0, 1])
    # gotoh_ge = trial.suggest_int("GOTOH_GE", 0, 20)
    # gotoh_go = trial.suggest_int("GOTOH_GO", 1, 40)
    # match_ratio = trial.suggest_float("MATCH_RATIO", 0.0, 1.0, step=0.1)
    # nb_ang_cut = trial.suggest_int("NB_ANG_CUT", 1, 50)
    # nb_low_cut = trial.suggest_float("NB_LOW_CUT", 0.0, 1.0, step=0.1)
    # nb_mult = trial.suggest_int("NB_MULT", 1, 20)
    # nb_total = trial.suggest_int("NB_TOTAL", 1, 50)
    
    # Thresholds in increasing order by number, thr1 < thr2 < thr3 < thr4
    # Scores in decreasing order by number, sc1 > sc2 > sc3 > sc4
    # nb_ang_sc1 = trial.suggest_float("NB_ANG_SC1", 0.0, 1.0, step=0.1)
    # nb_ang_sc2 = trial.suggest_float("NB_ANG_SC2", 0.0, 1.0, step=0.1)
    # nb_ang_sc3 = trial.suggest_float("NB_ANG_SC3", 0.0, 1.0, step=0.1)
    # nb_ang_sc4 = trial.suggest_float("NB_ANG_SC4", 0.0, 1.0, step=0.1)
    # nb_ang_thrs = sorted([
    #     trial.suggest_float("NB_ANG_THR1", 0.0, 10.0, step=0.1),
    #     trial.suggest_float("NB_ANG_THR2", 0.0, 10.0, step=0.1),
    #     trial.suggest_float("NB_ANG_THR3", 0.0, 10.0, step=0.1),
    #     trial.suggest_float("NB_ANG_THR4", 0.0, 10.0, step=0.1)
    # ])

    # nb_idx_sc1 = trial.suggest_float("NB_IDX_SC1", 0.0, 1.0)
    # nb_idx_sc2 = trial.suggest_float("NB_IDX_SC2", 0.0, 1.0)
    # nb_idx_sc3 = trial.suggest_float("NB_IDX_SC3", 0.0, 1.0)
    # nb_idx_sc4 = trial.suggest_float("NB_IDX_SC4", 0.0, 1.0)
    # nb_idx_thrs = sorted([ 
    #     trial.suggest_float("NB_IDX_THR1", 0.0, 20.0, step=0.1),
    #     trial.suggest_float("NB_IDX_THR2", 0.0, 20.0, step=0.1),
    #     trial.suggest_float("NB_IDX_THR3", 0.0, 20.0, step=0.1),
    #     trial.suggest_float("NB_IDX_THR4", 0.0, 20.0, step=0.1)
    # ])

    # score_bias = trial.suggest_float("SCORE_BIAS", -5.0, 5.0, step=0.1)
    # score_bias_pssm = trial.suggest_float("SCORE_BIAS_PSSM", -5.0, 5.0, step=0.1)
    # sw_ge = trial.suggest_int("SW_GE", 0, 10)
    # sw_go = trial.suggest_int("SW_GO", 1, 30)
    # wg = trial.suggest_categorical("WG", [0, 1])
    # filter_msa = trial.suggest_categorical("FILTER_MSA", [0, 1])
    # bitfactor_aa = trial.suggest_float("BITFACTOR_AA", 0.0, 5.0, step=0.1)
    # bitfactor_3di = trial.suggest_float("BITFACTOR_3DI", 0.0, 5.0, step=0.1)
   
    nb_sigma_r = trial.suggest_float("NB_SIGMA_R", 0.1, 12.0, log=True)
    nb_sigma_i = trial.suggest_float("NB_SIGMA_i", 0.1, 12.0, log=True)
    logit_nb_alpha = trial.suggest_float("PRE_NB_ALPHA", 0.0, 1.0)
    logit_nb_beta = trial.suggest_float("PRE_NB_BETA", 0.0, 1.0)
    nb_alpha = logit_nb_alpha / (logit_nb_alpha + logit_nb_beta)
    nb_beta = logit_nb_beta / (logit_nb_alpha + logit_nb_beta)
   
    env = os.environ.copy()
    env.update({
        "GOTOH_GE": "3",
        "GOTOH_GO": "32",
        "NB_MULT": "18",
        "NB_LOW_CUT": "0.1",
        "NB_TOTAL": "50",
        "NB_ANG_CUT": "20",
        "COMP_BIAS": "1",
        "WG": "0",
        "FILTER_MSA": "0",
        "SCORE_BIAS": "1.0",
        "SCORE_BIAS_PSSM": "-1.6",
        "SW_GO": "24",
        "SW_GE": "8",
        "BITFACTOR_AA": "1.1",
        "BITFACTOR_3DI": "2.1",
        "MATCH_RATIO": "0.9",
        "THREADS": "128",
        "NB_SIGMA_R": str(nb_sigma_r),
        "NB_SIGMA_I": str(nb_sigma_i),
        "NB_ALPHA": str(nb_alpha),
        "NB_BETA": str(nb_beta)
    })
    trial.set_user_attr("NB_ALPHA", nb_alpha)
    trial.set_user_attr("NB_BETA", nb_beta)
    
    try:
        result = subprocess.run(
            ["bash", "benchmark.sh"],
            capture_output=True,
            text=True,
            env=env,
            check=True
        )
        output = result.stdout
    except subprocess.CalledProcessError as e:
        print(f"Error running benchmark script: {e}")
        print(f"Stderr: {e.stderr}")
        raise optuna.exceptions.TrialPruned()
    
    try:
        metrics = [float(v) for v in output.strip().split(" ")]
    except Exception as e:
        print(f"Failed to parse metrics: {e}")
        raise optuna.exceptions.TrialPruned()

    trial.set_user_attr("homstrad_sp_fwd", metrics[0])
    trial.set_user_attr("homstrad_sp_rev", metrics[1])
    trial.set_user_attr("homstrad_f1", metrics[2])
    trial.set_user_attr("afdb_lddt", metrics[3])
    trial.set_user_attr("afdb_lddt_osc", metrics[4])
    trial.set_user_attr("afdb_f1", metrics[5])
    
    # The last metric is the F1 score we want to maximize.
    f1_score = metrics[6]
    trial.set_user_attr("F1_score", f1_score)
    return f1_score


if __name__ == "__main__":
    study = optuna.create_study(
        storage="",
        study_name="foldmason_sweep2",
        direction="maximize",
        load_if_exists=True,
        sampler=TPESampler()
    )
    n_calls = 100000
    study.optimize(objective, n_trials=n_calls)
    
    print("\n--- Optimization Complete ---")
    print(f"Best F1 Score Found: {study.best_value}")
    print("Best Parameters Found:")
    for key, value in study.best_params.items():
        print(f"  {key}: {value}")