import os
import subprocess
import optuna


def objective(trial):
    comp_bias = trial.suggest_categorical("COMP_BIAS", [0, 1])
    gotoh_ge = trial.suggest_int("GOTOH_GE", 0, 20)
    gotoh_go = trial.suggest_int("GOTOH_GO", 1, 40)
    match_ratio = trial.suggest_float("MATCH_RATIO", 0.0, 1.0)
    nb_ang_cut = trial.suggest_int("NB_ANG_CUT", 1, 50)
    nb_low_cut = trial.suggest_float("NB_LOW_CUT", 0.0, 1.0)
    nb_mult = trial.suggest_int("NB_MULT", 1, 20)
    nb_total = trial.suggest_int("NB_TOTAL", 1, 50)

    # Thresholds in increasing order by number, thr1 < thr2 < thr3 < thr4
    # Scores in decreasing order by number, sc1 > sc2 > sc3 > sc4
    nb_ang_sc4 = trial.suggest_float("NB_ANG_SC4", 0.0, 1.0)
    nb_ang_sc3 = trial.suggest_float("NB_ANG_SC3", nb_ang_sc4, 1.0)
    nb_ang_sc2 = trial.suggest_float("NB_ANG_SC2", nb_ang_sc3, 1.0)
    nb_ang_sc1 = trial.suggest_float("NB_ANG_SC1", nb_ang_sc2, 1.0)
    nb_ang_thr1 = trial.suggest_float("NB_ANG_THR1", 0.0, 10.0)
    nb_ang_thr2 = trial.suggest_float("NB_ANG_THR2", nb_ang_thr1, 10.0)
    nb_ang_thr3 = trial.suggest_float("NB_ANG_THR3", nb_ang_thr2, 10.0)
    nb_ang_thr4 = trial.suggest_float("NB_ANG_THR4", nb_ang_thr3, 10.0)
    nb_idx_sc4 = trial.suggest_float("NB_IDX_SC4", 0.0, 1.0)
    nb_idx_sc3 = trial.suggest_float("NB_IDX_SC3", nb_idx_sc4, 1.0)
    nb_idx_sc2 = trial.suggest_float("NB_IDX_SC2", nb_idx_sc3, 1.0)
    nb_idx_sc1 = trial.suggest_float("NB_IDX_SC1", nb_idx_sc2, 1.0)
    nb_idx_thr1 = trial.suggest_float("NB_IDX_THR1", 0.0, 20.0)
    nb_idx_thr2 = trial.suggest_float("NB_IDX_THR2", nb_idx_thr1, 20.0)
    nb_idx_thr3 = trial.suggest_float("NB_IDX_THR3", nb_idx_thr2, 20.0)
    nb_idx_thr4 = trial.suggest_float("NB_IDX_THR4", nb_idx_thr3, 20.0)

    score_bias = trial.suggest_float("SCORE_BIAS", -5.0, 5.0)
    sw_ge = trial.suggest_int("SW_GE", 0, 10)
    sw_go = trial.suggest_int("SW_GO", 1, 30)
    wg = trial.suggest_categorical("WG", [0, 1])
    
    ang_thresholds = [nb_ang_thr1, nb_ang_thr2, nb_ang_thr3, nb_ang_thr4]
    idx_thresholds = [nb_idx_thr1, nb_idx_thr2, nb_idx_thr3, nb_idx_thr4]
    if not (ang_thresholds[0] < ang_thresholds[1] < ang_thresholds[2] < ang_thresholds[3] and
            idx_thresholds[0] < idx_thresholds[1] < idx_thresholds[2] < idx_thresholds[3]):
        raise optuna.exceptions.TrialPruned()
    
    env = os.environ.copy()
    env.update({
        "COMP_BIAS": str(comp_bias),
        "GOTOH_GE": str(gotoh_ge),
        "GOTOH_GO": str(gotoh_go),
        "MATCH_RATIO": str(match_ratio),
        "NB_ANG_CUT": str(nb_ang_cut),
        "NB_ANG_SC1": str(nb_ang_sc1),
        "NB_ANG_SC2": str(nb_ang_sc2),
        "NB_ANG_SC3": str(nb_ang_sc3),
        "NB_ANG_SC4": str(nb_ang_sc4),
        "NB_ANG_THR1": str(nb_ang_thr1),
        "NB_ANG_THR2": str(nb_ang_thr2),
        "NB_ANG_THR3": str(nb_ang_thr3),
        "NB_ANG_THR4": str(nb_ang_thr4),
        "NB_IDX_SC1": str(nb_idx_sc1),
        "NB_IDX_SC2": str(nb_idx_sc2),
        "NB_IDX_SC3": str(nb_idx_sc3),
        "NB_IDX_SC4": str(nb_idx_sc4),
        "NB_IDX_THR1": str(nb_idx_thr1),
        "NB_IDX_THR2": str(nb_idx_thr2),
        "NB_IDX_THR3": str(nb_idx_thr3),
        "NB_IDX_THR4": str(nb_idx_thr4),
        "NB_LOW_CUT": str(nb_low_cut),
        "NB_MULT": str(nb_mult),
        "NB_TOTAL": str(nb_total),
        "SCORE_BIAS": str(score_bias),
        "SW_GE": str(sw_ge),
        "SW_GO": str(sw_go),
        "WG": str(wg),
        "THREADS": "8"
    })
    
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
    
    metrics = [float(v) for v in output.strip().split(" ")]
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
        direction="maximize",
        storage="sqlite:///db.sqlite3"
    )
    n_calls = 500
    
    # Run with default params first as baseline
    defaults = {
        "COMP_BIAS": 0,
        "GOTOH_GE": 0,
        "GOTOH_GO": 21,
        "MATCH_RATIO": 0.5,
        "NB_ANG_CUT": 15,
        "NB_ANG_SC1": 1.0,
        "NB_ANG_SC2": 0.6,
        "NB_ANG_SC3": 0.4,
        "NB_ANG_SC4": 0.2,
        "NB_ANG_THR1": 0.5,
        "NB_ANG_THR2": 1.0,
        "NB_ANG_THR3": 2.0,
        "NB_ANG_THR4": 4.0,
        "NB_IDX_SC1": 1.0,
        "NB_IDX_SC2": 0.6,
        "NB_IDX_SC3": 0.4,
        "NB_IDX_SC4": 0.2,
        "NB_IDX_THR1": 2.0,
        "NB_IDX_THR2": 4.0,
        "NB_IDX_THR3": 8.0,
        "NB_IDX_THR4": 12.0,
        "NB_LOW_CUT": 0.5,
        "NB_MULT": 6,
        "NB_TOTAL": 21,
        "SCORE_BIAS": 0.6,
        "SW_GE": 1,
        "SW_GO": 10,
        "WG": 0,
        "THREADS": 8
    }
    study.enqueue_trial(defaults)
    study.optimize(objective, n_trials=n_calls)
    
    print("\n--- Optimization Complete ---")
    print(f"Best F1 Score Found: {study.best_value}")
    print("Best Parameters Found:")
    for key, value in study.best_params.items():
        print(f"  {key}: {value}")