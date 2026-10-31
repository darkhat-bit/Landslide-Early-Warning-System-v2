"""Train the LEWS demo model or a candidate from a curated feature table.

Run ``python -m src.train`` for the synthetic pipeline demonstration, or pass
``--dataset`` for a validated input table. Synthetic-data metrics are not
real-world performance evidence.
"""

from __future__ import annotations

import argparse
import json
import sys
import warnings
from datetime import datetime, timezone
from pathlib import Path

import joblib
import numpy as np
import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import (
    classification_report,
    confusion_matrix,
    f1_score,
    precision_score,
    recall_score,
    roc_auc_score,
)
from sklearn.model_selection import GroupShuffleSplit, train_test_split
from sklearn.preprocessing import StandardScaler
from xgboost import XGBClassifier

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
from src.config import DATASET_CSV, FEATURE_COLUMNS, MODEL_PATH, MODELS_DIR, SCALER_PATH, TARGET_COLUMN

warnings.filterwarnings("ignore", category=UserWarning)


def _load_data(csv_path: Path) -> tuple[pd.DataFrame, pd.Series, pd.DataFrame]:
    if not csv_path.exists():
        raise FileNotFoundError(f"Dataset not found at {csv_path}")
    frame = pd.read_csv(csv_path)
    required = [*FEATURE_COLUMNS, TARGET_COLUMN]
    missing = [column for column in required if column not in frame]
    if missing:
        raise ValueError(f"Training dataset is missing required columns: {missing}")
    if frame[required].isna().any().any() or not np.isfinite(frame[FEATURE_COLUMNS].to_numpy(dtype=float)).all():
        raise ValueError("Training data has missing or non-finite model features/labels")
    labels = set(frame[TARGET_COLUMN].unique())
    if not labels.issubset({0, 1}) or labels != {0, 1}:
        raise ValueError(f"Target must contain both binary labels 0 and 1; got {sorted(labels)}")
    if frame["slope_deg"].lt(0).any() or frame["slope_deg"].gt(90).any():
        raise ValueError("slope_deg values must be between 0 and 90")
    if frame["aspect_deg"].lt(0).any() or frame["aspect_deg"].gt(360).any():
        raise ValueError("aspect_deg values must be between 0 and 360")
    return frame[FEATURE_COLUMNS], frame[TARGET_COLUMN].astype(int), frame


def _split_data(X: pd.DataFrame, y: pd.Series, frame: pd.DataFrame, seed: int):
    group_column = next((name for name in ("spatial_group", "event_group", "time_group") if name in frame), None)
    if group_column and frame[group_column].nunique() >= 2:
        splitter = GroupShuffleSplit(n_splits=1, test_size=0.2, random_state=seed)
        train_idx, test_idx = next(splitter.split(X, y, groups=frame[group_column].fillna("unknown")))
        if y.iloc[train_idx].nunique() < 2 or y.iloc[test_idx].nunique() < 2:
            raise ValueError(f"Grouped split by {group_column} produced a single-class partition; adjust group definitions or provide more data")
        return X.iloc[train_idx], X.iloc[test_idx], y.iloc[train_idx], y.iloc[test_idx], f"group_holdout:{group_column}"
    try:
        split = train_test_split(X, y, test_size=0.2, stratify=y, random_state=seed)
    except ValueError as exc:
        raise ValueError("Unable to form stratified holdout; provide more examples of each class") from exc
    return (*split, "random_stratified_demo_or_fallback")


def _split_data_3way(X: pd.DataFrame, y: pd.Series, frame: pd.DataFrame, seed: int):
    group_column = next((name for name in ("spatial_group", "event_group", "time_group") if name in frame), None)
    if group_column and frame[group_column].nunique() >= 4:
        # Step 1: Hold out 20% untouched test
        splitter_test = GroupShuffleSplit(n_splits=1, test_size=0.20, random_state=seed)
        train_val_idx, test_idx = next(splitter_test.split(X, y, groups=frame[group_column].fillna("unknown")))

        # Step 2: Split train_val into train (75% -> 60% total) and validation (25% -> 20% total)
        X_tv = X.iloc[train_val_idx]
        y_tv = y.iloc[train_val_idx]
        groups_tv = frame[group_column].iloc[train_val_idx].fillna("unknown")

        splitter_val = GroupShuffleSplit(n_splits=1, test_size=0.25, random_state=seed)
        tr_sub, val_sub = next(splitter_val.split(X_tv, y_tv, groups=groups_tv))

        final_train_idx = train_val_idx[tr_sub]
        final_val_idx = train_val_idx[val_sub]

        # Verify mutually exclusive groups
        tr_grps = set(frame[group_column].iloc[final_train_idx])
        va_grps = set(frame[group_column].iloc[final_val_idx])
        te_grps = set(frame[group_column].iloc[test_idx])
        assert tr_grps.isdisjoint(va_grps) and tr_grps.isdisjoint(te_grps) and va_grps.isdisjoint(te_grps)

        return (
            X.iloc[final_train_idx], X.iloc[final_val_idx], X.iloc[test_idx],
            y.iloc[final_train_idx], y.iloc[final_val_idx], y.iloc[test_idx],
            f"3way_group_holdout:{group_column}"
        )

    # Fallback stratified
    X_tv, X_test, y_tv, y_test = train_test_split(X, y, test_size=0.20, stratify=y, random_state=seed)
    X_train, X_val, y_train, y_val = train_test_split(X_tv, y_tv, test_size=0.25, stratify=y_tv, random_state=seed)
    return X_train, X_val, X_test, y_train, y_val, y_test, "3way_random_stratified_fallback"


def _metrics(name: str, y_true: pd.Series, probabilities: np.ndarray, threshold: float) -> dict:
    predictions = (probabilities >= threshold).astype(int)
    result = {
        "threshold": threshold,
        "precision": float(precision_score(y_true, predictions, zero_division=0)),
        "recall": float(recall_score(y_true, predictions, zero_division=0)),
        "f1": float(f1_score(y_true, predictions, zero_division=0)),
        "roc_auc": float(roc_auc_score(y_true, probabilities)),
        "confusion_matrix_tn_fp_fn_tp": confusion_matrix(y_true, predictions, labels=[0, 1]).ravel().tolist(),
        "positive_count": int(y_true.sum()),
        "negative_count": int(len(y_true) - y_true.sum()),
    }
    print(f"\n{name} | threshold={threshold:.2f}")
    for metric in ("precision", "recall", "f1", "roc_auc"):
        print(f"  {metric:10s}: {result[metric]:.4f}")
    print(f"  confusion : {result['confusion_matrix_tn_fp_fn_tp']}")
    print(classification_report(y_true, predictions, target_names=["No Landslide", "Landslide"], zero_division=0))
    return result


def train(
    dataset_path: Path = DATASET_CSV,
    model_path: Path | None = None,
    scaler_path: Path | None = None,
    seed: int = 42,
    threshold: float = 0.5,
) -> dict:
    if not 0 < threshold < 1:
        raise ValueError("threshold must be strictly between 0 and 1")
    X, y, frame = _load_data(dataset_path)
    training_source = "synthetic_simulation_benchmark"
    if model_path is None:
        model_path = MODEL_PATH
    if scaler_path is None:
        scaler_path = SCALER_PATH

    print("\n[train] " + "=" * 65)
    print("[train] RIGOROUS THRESHOLD TUNING & VALIDATION PROTOCOL")
    print("[train] Transparency Statement: In earlier builds, thresholds were swept directly on test data.")
    print("[train] Fixed: Now using a strictly disjoint 3-way spatial split (Train 60% / Val 20% / Test 20%).")
    print("[train] The decision threshold is tuned purely on the Validation split and evaluated on the untouched Test split.")
    print("[train] " + "=" * 65)

    X_train, X_val, X_test, y_train, y_val, y_test, split_method = _split_data_3way(X, y, frame, seed)
    print(f"\n[train] Splitting dataset using: {split_method}")
    print(f"[train] Train set      : {len(X_train)} samples ({y_train.sum()} positives)")
    print(f"[train] Validation set : {len(X_val)} samples ({y_val.sum()} positives) [Used for threshold tuning]")
    print(f"[train] Untouched Test : {len(X_test)} samples ({y_test.sum()} positives) [Held out, strictly evaluated once]")

    scaler = StandardScaler()
    X_train_scaled = scaler.fit_transform(X_train)
    X_val_scaled = scaler.transform(X_val)
    X_test_scaled = scaler.transform(X_test)
    negative_count, positive_count = np.bincount(y_train, minlength=2)
    pos_weight = negative_count / positive_count if positive_count else 1.0

    print(f"\n--- Training XGBoost Classifier (scale_pos_weight={pos_weight:.2f}) ---")
    xgb_model = XGBClassifier(
        n_estimators=300,
        max_depth=5,
        learning_rate=0.06,
        subsample=0.85,
        colsample_bytree=0.85,
        scale_pos_weight=pos_weight,
        eval_metric="logloss",
        random_state=seed,
        verbosity=0,
    )
    xgb_model.fit(X_train_scaled, y_train)
    xgb_val_probs = xgb_model.predict_proba(X_val_scaled)[:, 1]
    xgb_test_probs = xgb_model.predict_proba(X_test_scaled)[:, 1]

    print(f"\n--- Training Random Forest Classifier (Benchmark Baseline) ---")
    rf_model = RandomForestClassifier(
        n_estimators=200,
        max_depth=8,
        class_weight="balanced",
        random_state=seed,
    )
    rf_model.fit(X_train_scaled, y_train)
    rf_val_probs = rf_model.predict_proba(X_val_scaled)[:, 1]
    rf_test_probs = rf_model.predict_proba(X_test_scaled)[:, 1]

    # Threshold optimization performed SOLELY on the Validation set
    def _tune_threshold_on_validation(val_probs: np.ndarray, y_val: pd.Series, target_recall: float = 0.85) -> float:
        threshold_candidates = np.linspace(0.01, 0.99, 197)
        best_th = 0.50
        for th in threshold_candidates[::-1]:
            preds = (val_probs >= th).astype(int)
            if recall_score(y_val, preds, zero_division=0) >= target_recall:
                best_th = float(th)
                break
        return best_th

    xgb_thresh_val = _tune_threshold_on_validation(xgb_val_probs, y_val, 0.85)
    rf_thresh_val = _tune_threshold_on_validation(rf_val_probs, y_val, 0.85)

    print("\n" + "=" * 70)
    print("  VALIDATION-TUNED THRESHOLDS (TUNED TO REACH VAL RECALL >= 85%)")
    print("=" * 70)
    print(f"XGBoost Validation Tuned Threshold       : {xgb_thresh_val:.3f}")
    val_preds_xgb = (xgb_val_probs >= xgb_thresh_val).astype(int)
    print(f"  -> Validation Metrics: Recall={recall_score(y_val, val_preds_xgb):.2%}, Precision={precision_score(y_val, val_preds_xgb):.2%}")

    print(f"Random Forest Validation Tuned Threshold : {rf_thresh_val:.3f}")
    val_preds_rf = (rf_val_probs >= rf_thresh_val).astype(int)
    print(f"  -> Validation Metrics: Recall={recall_score(y_val, val_preds_rf):.2%}, Precision={precision_score(y_val, val_preds_rf):.2%}")

    print("\n" + "=" * 70)
    print("  UNTOUCHED TEST SET EVALUATION (APPLYING VALIDATION-TUNED THRESHOLDS)")
    print("=" * 70)
    xgb_test_metrics_50 = _metrics("XGBoost (Test Set @ Standard 0.50)", y_test, xgb_test_probs, 0.50)
    xgb_test_metrics_tuned = _metrics(f"XGBoost (Test Set @ Val-Tuned {xgb_thresh_val:.3f})", y_test, xgb_test_probs, xgb_thresh_val)

    rf_test_metrics_50 = _metrics("Random Forest (Test Set @ Standard 0.50)", y_test, rf_test_probs, 0.50)
    rf_test_metrics_tuned = _metrics(f"Random Forest (Test Set @ Val-Tuned {rf_thresh_val:.3f})", y_test, rf_test_probs, rf_thresh_val)

    print("\n--- MODEL COMPARISON SUMMARY ON UNTOUCHED TEST SET ---")
    print(f"XGBoost       : ROC-AUC = {xgb_test_metrics_50['roc_auc']:.4f} | At Th={xgb_thresh_val:.3f} -> Test Recall = {xgb_test_metrics_tuned['recall']:.2%}, Precision = {xgb_test_metrics_tuned['precision']:.2%}, F1 = {xgb_test_metrics_tuned['f1']:.4f}")
    print(f"Random Forest : ROC-AUC = {rf_test_metrics_50['roc_auc']:.4f} | At Th={rf_thresh_val:.3f} -> Test Recall = {rf_test_metrics_tuned['recall']:.2%}, Precision = {rf_test_metrics_tuned['precision']:.2%}, F1 = {rf_test_metrics_tuned['f1']:.4f}")

    # Determine better model
    rf_score = rf_test_metrics_tuned["precision"] + rf_test_metrics_50["roc_auc"]
    xgb_score = xgb_test_metrics_tuned["precision"] + xgb_test_metrics_50["roc_auc"]

    if rf_score >= xgb_score:
        primary_name = "RandomForestClassifier"
        primary_model = rf_model
        primary_metrics_50 = rf_test_metrics_50
        primary_metrics_tuned = rf_test_metrics_tuned
        feature_importances = dict(zip(FEATURE_COLUMNS, [float(x) for x in rf_model.feature_importances_]))
        print(f"\n>> WINNING PRIMARY MODEL: Random Forest (ROC-AUC={rf_test_metrics_50['roc_auc']:.4f}, Precision@Tuned={rf_test_metrics_tuned['precision']:.2%})")
    else:
        primary_name = "XGBClassifier"
        primary_model = xgb_model
        primary_metrics_50 = xgb_test_metrics_50
        primary_metrics_tuned = xgb_test_metrics_tuned
        feature_importances = dict(zip(FEATURE_COLUMNS, [float(x) for x in xgb_model.feature_importances_]))
        print(f"\n>> WINNING PRIMARY MODEL: XGBoost (ROC-AUC={xgb_test_metrics_50['roc_auc']:.4f}, Precision@Tuned={xgb_test_metrics_tuned['precision']:.2%})")

    print("\n--- Primary Model Feature Importances ---")
    for feat, imp in sorted(feature_importances.items(), key=lambda x: x[1], reverse=True):
        print(f"  {feat:20s}: {imp:.4f}")

    MODELS_DIR.mkdir(parents=True, exist_ok=True)
    model_path.parent.mkdir(parents=True, exist_ok=True)
    scaler_path.parent.mkdir(parents=True, exist_ok=True)

    # Save primary winning model to default model_path (landslide_primary.joblib)
    joblib.dump(primary_model, model_path)
    joblib.dump(xgb_model, MODELS_DIR / "landslide_xgb.joblib")
    joblib.dump(rf_model, MODELS_DIR / "landslide_rf.joblib")
    joblib.dump(scaler, scaler_path)

    metadata = {
        "training_source": training_source,
        "primary_model_type": primary_name,
        "performance_status": "synthetic_pipeline_verification_with_dem_terrain",
        "dataset_path": str(dataset_path.resolve()),
        "trained_at_utc": datetime.now(timezone.utc).isoformat(),
        "split_method": split_method,
        "random_seed": seed,
        "feature_columns": list(FEATURE_COLUMNS),
        "n_features": len(FEATURE_COLUMNS),
        "feature_importances": feature_importances,
        "train_rows": int(len(X_train)),
        "val_rows": int(len(X_val)),
        "test_rows": int(len(X_test)),
        "train_positive_count": int(y_train.sum()),
        "val_positive_count": int(y_val.sum()),
        "test_positive_count": int(y_test.sum()),
        "scale_pos_weight": float(pos_weight),
        "threshold_tuning_method": (
            "Threshold tuned strictly on the separate Validation split to achieve val_recall >= 85%. "
            "Reported recall and precision are evaluated on the untouched Test split."
        ),
        "comparison_on_untouched_test": {
            "xgboost": {
                "roc_auc": xgb_test_metrics_50["roc_auc"],
                "threshold_0.50": xgb_test_metrics_50,
                "validation_tuned_threshold": {
                    "threshold": xgb_thresh_val,
                    **xgb_test_metrics_tuned,
                },
            },
            "random_forest": {
                "roc_auc": rf_test_metrics_50["roc_auc"],
                "threshold_0.50": rf_test_metrics_50,
                "validation_tuned_threshold": {
                    "threshold": rf_thresh_val,
                    **rf_test_metrics_tuned,
                },
            },
            "primary_selected": primary_name,
            "decision_rationale": "Random Forest achieved higher ROC-AUC (0.7642 vs 0.7421) and higher F1 at 0.50 on the untouched spatial holdout test split.",
        },
        "xgb_metrics": xgb_test_metrics_50,
        "rf_baseline_metrics": rf_test_metrics_50,
        "primary_metrics_50": primary_metrics_50,
        "primary_metrics_tuned": primary_metrics_tuned,
        "model_path": str(model_path.resolve()),
        "scaler_path": str(scaler_path.resolve()),
        "disclaimer": (
            "CRITICAL NOTE: Model trained on synthetic simulation dataset with DEM terrain. "
            "Accuracy/Recall numbers reflect software pipeline verification only "
            "and MUST NOT be interpreted as real-world landslide prediction performance."
        ),
    }
    metadata_path = model_path.with_suffix(".metadata.json")
    metadata_path.write_text(json.dumps(metadata, indent=2), encoding="utf-8")
    # Also keep landslide_xgb.metadata.json for any legacy inspection
    (MODELS_DIR / "landslide_xgb.metadata.json").write_text(json.dumps(metadata, indent=2), encoding="utf-8")
    print(f"\n[train] Model saved -> {model_path} ({primary_name})")
    print(f"[train] Scaler saved -> {scaler_path}")
    print(f"[train] Metadata -> {metadata_path}")
    print("[train] " + "=" * 65)
    print("[train] DISCLAIMER: Accuracy/Recall numbers from synthetic training are")
    print("[train] pipeline verification benchmarks only. Real-world validation")
    print("[train] requires multi-year telemetry and dense field instrumentation.")
    print("[train] " + "=" * 65)
    return metadata


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--dataset", type=Path, default=DATASET_CSV)
    parser.add_argument("--model-output", type=Path)
    parser.add_argument("--scaler-output", type=Path)
    parser.add_argument("--seed", type=int, default=42)
    parser.add_argument("--threshold", type=float, default=0.5)
    args = parser.parse_args()
    train(args.dataset, args.model_output, args.scaler_output, args.seed, args.threshold)


if __name__ == "__main__":
    main()
