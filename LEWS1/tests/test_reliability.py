import unittest
from app.schemas import PointRiskRequest
from src.reliability import (
    TRAINING_FEATURE_RANGES,
    FEATURE_PROVENANCE_TAGS,
    check_feature_range,
    evaluate_point_reliability,
    is_borderline_score,
)

class ReliabilityLogicTests(unittest.TestCase):
    def test_training_ranges_match_dataset_schema(self):
        """Ensure all 11 model features are represented in training bounds."""
        expected_features = {
            "elevation_m", "slope_deg", "aspect_deg", "curvature",
            "dist_to_road_m", "dist_to_river_m",
            "rain_24h_mm", "rain_3d_mm", "rain_7d_mm",
            "soil_moisture_pct", "ndvi"
        }
        self.assertEqual(set(TRAINING_FEATURE_RANGES.keys()), expected_features)

    def test_within_range_passes(self):
        """Test that representative mid-range values are marked within range."""
        sample_point = {
            "elevation_m": 1200.0,
            "slope_deg": 28.5,
            "aspect_deg": 180.0,
            "curvature": -0.5,
            "dist_to_road_m": 45.0,
            "dist_to_river_m": 350.0,
            "rain_24h_mm": 55.0,
            "rain_3d_mm": 120.0,
            "rain_7d_mm": 210.0,
            "soil_moisture_pct": 75.0,
            "ndvi": 0.65,
        }
        eval_result = evaluate_point_reliability(sample_point)
        self.assertTrue(eval_result["is_within_training_range"])
        self.assertEqual(eval_result["out_of_range_count"], 0)
        self.assertEqual(eval_result["reliability_label"], "Within training range")

    def test_out_of_range_flags_detected(self):
        """Test that rainfall or geotechnical values beyond dataset extrema are flagged."""
        high_rain_point = {
            "elevation_m": 1200.0,
            "slope_deg": 28.5,
            "aspect_deg": 180.0,
            "curvature": -0.5,
            "dist_to_road_m": 45.0,
            "dist_to_river_m": 350.0,
            "rain_24h_mm": 350.0,  # Training max is 209.2 mm
            "rain_3d_mm": 600.0,  # Training max is 403.1 mm
            "rain_7d_mm": 900.0,  # Training max is 562.3 mm
            "soil_moisture_pct": 75.0,
            "ndvi": 0.65,
        }
        eval_result = evaluate_point_reliability(high_rain_point)
        self.assertFalse(eval_result["is_within_training_range"])
        self.assertEqual(eval_result["out_of_range_count"], 3)
        self.assertIn("rain_24h_mm", eval_result["out_of_range_features"])
        self.assertIn("rain_3d_mm", eval_result["out_of_range_features"])
        self.assertIn("rain_7d_mm", eval_result["out_of_range_features"])
        self.assertEqual(eval_result["reliability_label"], "Outside training range, less reliable")
        self.assertIn("Outside training range", eval_result["breakdown"]["rain_24h_mm"]["warning"])

    def test_provenance_tags_assigned(self):
        """Ensure each input receives the required provenance category."""
        eval_result = evaluate_point_reliability({"elevation_m": 1000.0, "dist_to_road_m": 50.0, "ndvi": 0.5})
        breakdown = eval_result["breakdown"]
        self.assertEqual(breakdown["elevation_m"]["provenance"], "From terrain data (DEM)")
        self.assertEqual(breakdown["dist_to_road_m"]["provenance"], "Approximate (hand-estimated)")
        self.assertEqual(breakdown["ndvi"]["provenance"], "Default value")

    def test_borderline_score_detection(self):
        """Test that scores within 0.03 of 0.25 or 0.70 are flagged as borderline."""
        # Near Yellow (0.25): [0.22, 0.28]
        self.assertTrue(is_borderline_score(0.2544))  # Deorali baseline
        self.assertTrue(is_borderline_score(0.2587))  # Ranipool baseline
        self.assertTrue(is_borderline_score(0.2650))  # Gangtok Zero Point baseline
        self.assertTrue(is_borderline_score(0.2453))  # Penlong La baseline
        self.assertTrue(is_borderline_score(0.2200))  # Lower boundary
        self.assertTrue(is_borderline_score(0.2800))  # Upper boundary

        # Near Red (0.70): [0.67, 0.73]
        self.assertTrue(is_borderline_score(0.7181))  # 29th Mile at +100 mm
        self.assertTrue(is_borderline_score(0.7159))  # Tadong at +50 mm
        self.assertTrue(is_borderline_score(0.6700))  # Lower boundary
        self.assertTrue(is_borderline_score(0.7300))  # Upper boundary

        # Clearly non-borderline scores
        self.assertFalse(is_borderline_score(0.1312)) # Rangpo baseline
        self.assertFalse(is_borderline_score(0.1363)) # Teesta Bazaar baseline
        self.assertFalse(is_borderline_score(0.4500)) # Mid-range
        self.assertFalse(is_borderline_score(0.8500)) # Clear high
        self.assertFalse(is_borderline_score(0.2190)) # Just outside yellow boundary
        self.assertFalse(is_borderline_score(0.2810)) # Just outside yellow boundary
        self.assertFalse(is_borderline_score(0.6690)) # Just outside red boundary
        self.assertFalse(is_borderline_score(0.7310)) # Just outside red boundary

    def test_ranges_strictly_equal_dataset_csv(self):
        """Verify backend and frontend training ranges match data/dataset.csv exactly."""
        import pandas as pd
        import re
        from pathlib import Path

        base_dir = Path(__file__).resolve().parent.parent
        dataset_path = base_dir / "data" / "dataset.csv"
        frontend_ts = base_dir.parent / "frontend" / "src" / "data" / "trainingRanges.ts"

        df = pd.read_csv(dataset_path)

        # 1. Check backend TRAINING_FEATURE_RANGES
        for feat, bounds in TRAINING_FEATURE_RANGES.items():
            expected_min = round(float(df[feat].min()), 4)
            expected_max = round(float(df[feat].max()), 4)
            self.assertAlmostEqual(bounds["min"], expected_min, places=4, msg=f"Backend min mismatch for {feat}")
            self.assertAlmostEqual(bounds["max"], expected_max, places=4, msg=f"Backend max mismatch for {feat}")

        # 2. Check frontend trainingRanges.ts
        with open(frontend_ts, "r", encoding="utf-8") as f:
            ts_content = f.read()

        for feat in TRAINING_FEATURE_RANGES:
            # Match: feat: {\n min: X,\n max: Y,
            pattern = rf"{feat}:\s*\{{\s*min:\s*([-\d\.]+),\s*max:\s*([-\d\.]+)"
            match = re.search(pattern, ts_content)
            self.assertIsNotNone(match, f"Feature {feat} not found in {frontend_ts}")
            ts_min = float(match.group(1))
            ts_max = float(match.group(2))
            expected_min = round(float(df[feat].min()), 4)
            expected_max = round(float(df[feat].max()), 4)
            self.assertAlmostEqual(ts_min, expected_min, places=4, msg=f"Frontend min mismatch for {feat}")
            self.assertAlmostEqual(ts_max, expected_max, places=4, msg=f"Frontend max mismatch for {feat}")


if __name__ == "__main__":
    unittest.main()

