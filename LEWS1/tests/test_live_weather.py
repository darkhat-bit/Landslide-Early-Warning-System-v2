import unittest
from unittest.mock import patch, MagicMock
from src.live_weather import (
    get_imd_rainfall_category,
    compute_station_live_metrics,
    compute_corridor_timeline,
    fetch_open_meteo_forecast,
    CACHE_TTL_SECONDS,
)

class LiveWeatherTests(unittest.TestCase):
    def setUp(self):
        self.sample_station = {
            "id": "pt-test",
            "name": "Test Milestone Station",
            "latitude": 27.0215,
            "longitude": 88.4419,
            "elevation_m": 500.0,
            "slope_deg": 25.0,
            "aspect_deg": 180.0,
            "curvature": 0.0,
            "dist_to_road_m": 20.0,
            "dist_to_river_m": 100.0,
            "rain_24h_mm": 30.0,
            "rain_3d_mm": 60.0,
            "rain_7d_mm": 90.0,
            "soil_moisture_pct": 50.0,
            "ndvi": 0.50,
        }

        # Create 200 synthetic hourly timesteps
        times = [f"2026-11-03T{h:02d}:00" for h in range(200)]
        precip = [1.0] * 200  # 1.0 mm rain every hour
        sm = [0.325] * 200    # 0.325 m3/m3 volumetric moisture

        self.mock_weather = {
            "latitude": 27.00,
            "longitude": 88.50,
            "elevation": 450.0,
            "hourly": {
                "time": times,
                "precipitation": precip,
                "soil_moisture_0_to_7cm": sm,
            }
        }

    def test_imd_rainfall_categories(self):
        """Verify official IMD 24-hour rainfall classification thresholds."""
        self.assertEqual(get_imd_rainfall_category(0.0), "No rain")
        self.assertEqual(get_imd_rainfall_category(1.5), "Very light rain")
        self.assertEqual(get_imd_rainfall_category(10.0), "Light rain")
        self.assertEqual(get_imd_rainfall_category(35.0), "Moderate rain")
        self.assertEqual(get_imd_rainfall_category(75.0), "Heavy rain")
        self.assertEqual(get_imd_rainfall_category(150.0), "Very heavy rain")
        self.assertEqual(get_imd_rainfall_category(250.0), "Extremely heavy rain")

    def test_rolling_rainfall_and_option4_soil_moisture(self):
        """Ensure 24h=24mm, 3d=72mm, 7d=168mm for 1mm/h rain and Option 4 SM = 32.5%."""
        t_idx = 180
        metrics = compute_station_live_metrics(self.sample_station, self.mock_weather, target_idx=t_idx)

        # 24h rolling sum: 24 * 1.0 = 24.0 mm
        self.assertAlmostEqual(metrics["rain_24h_mm"], 24.0, places=1)
        # 3d rolling sum (72 hours): 72 * 1.0 = 72.0 mm
        self.assertAlmostEqual(metrics["rain_3d_mm"], 72.0, places=1)
        # 7d rolling sum (168 hours): 168 * 1.0 = 168.0 mm
        self.assertAlmostEqual(metrics["rain_7d_mm"], 168.0, places=1)

        # Option 4: sm_0_to_7cm * 100.0 = 32.5%
        self.assertAlmostEqual(metrics["soil_moisture_pct"], 32.5, places=1)
        self.assertEqual(metrics["imd_category_24h"], "Moderate rain")
        self.assertIn("Live weather model", metrics["reliability"]["breakdown"]["rain_24h_mm"]["provenance"])

    def test_corridor_timeline_calculation(self):
        """Verify timeline evaluates horizons +0h to +72h and produces summary."""
        timeline = compute_corridor_timeline([self.sample_station], [self.mock_weather], base_idx=100)
        self.assertIn("+0h", timeline["horizons"])
        self.assertIn("+6h", timeline["horizons"])
        self.assertIn("+12h", timeline["horizons"])
        self.assertIn("+24h", timeline["horizons"])
        self.assertIn("+48h", timeline["horizons"])
        self.assertIn("+72h", timeline["horizons"])
        self.assertIn("Highest expected risk", timeline["corridor_summary_sentence"])
        self.assertEqual(len(timeline["station_strips"]), 1)
        self.assertEqual(len(timeline["station_strips"][0]["strip"]), 6)

    @patch("urllib.request.urlopen")
    def test_open_meteo_offline_handling(self, mock_urlopen):
        """Verify fallback returns clear status message when API times out."""
        mock_urlopen.side_effect = TimeoutError("Connection timed out")
        data, is_live, msg = fetch_open_meteo_forecast([self.sample_station], timeout_secs=0.1, force_refresh=True)
        # Should gracefully return offline status without raising uncaught exception
        self.assertIn("Open-Meteo", msg)

    def test_training_ranges_match_dataset_csv(self):
        """Item 2 & Item 3 requirement: TRAINING_FEATURE_RANGES matches dataset.csv min and max for all 11 features."""
        from pathlib import Path
        import pandas as pd
        from src.reliability import TRAINING_FEATURE_RANGES
        from src.config import FEATURE_COLUMNS

        csv_path = Path(__file__).resolve().parent.parent / "data" / "dataset.csv"
        df = pd.read_csv(csv_path)

        for col in FEATURE_COLUMNS:
            self.assertIn(col, TRAINING_FEATURE_RANGES)
            expected_min = float(df[col].min())
            expected_max = float(df[col].max())
            actual_min = TRAINING_FEATURE_RANGES[col]["min"]
            actual_max = TRAINING_FEATURE_RANGES[col]["max"]
            self.assertAlmostEqual(actual_min, expected_min, places=3, msg=f"Min mismatch for {col}")
            self.assertAlmostEqual(actual_max, expected_max, places=3, msg=f"Max mismatch for {col}")

    def test_live_out_of_range_detection_and_listing(self):
        """Item 2 requirement: Live out-of-range detection lists specific features exceeding training range."""
        from src.reliability import evaluate_point_reliability

        # Test station with live inputs below minimum rainfall (e.g., 29th Mile post-monsoon dry season)
        live_inputs = {
            "elevation_m": 326.9,
            "slope_deg": 33.8,
            "aspect_deg": 197.6,
            "curvature": 0.0076,
            "dist_to_road_m": 15.0,
            "dist_to_river_m": 60.0,
            "rain_24h_mm": 0.20,  # below training min 0.30
            "rain_3d_mm": 0.80,   # below training min 6.00
            "rain_7d_mm": 15.10,  # below training min 34.60
            "soil_moisture_pct": 26.5, # within [5.0, 90.1]
            "ndvi": 0.28,         # within [0.0618, 0.8577]
        }

        rel = evaluate_point_reliability(live_inputs)
        self.assertFalse(rel["is_within_training_range"])
        out_features = rel["out_of_range_features"]
        self.assertIn("rain_24h_mm", out_features)
        self.assertIn("rain_3d_mm", out_features)
        self.assertIn("rain_7d_mm", out_features)
        self.assertEqual(len(out_features), 3)

        # In-range station (e.g. Penlong La where rain exceeds min)
        penlong_inputs = {
            "elevation_m": 1987.5,
            "slope_deg": 28.5,
            "aspect_deg": 95.0,
            "curvature": 0.005,
            "dist_to_road_m": 35.0,
            "dist_to_river_m": 1200.0,
            "rain_24h_mm": 5.9,   # within [0.30, 209.20]
            "rain_3d_mm": 17.2,   # within [6.00, 403.10]
            "rain_7d_mm": 52.5,   # within [34.60, 562.30]
            "soil_moisture_pct": 39.5,
            "ndvi": 0.45,
        }
        rel_penlong = evaluate_point_reliability(penlong_inputs)
        self.assertTrue(rel_penlong["is_within_training_range"])
        self.assertEqual(len(rel_penlong["out_of_range_features"]), 0)

    def test_live_mode_borderline_stations(self):
        """Item 4 requirement: Confirm Borderline badge in live mode for Tarkhola (0.2250), Deorali (0.2251), Ranipool (0.2464)."""
        from src.reliability import is_borderline_score

        # 3 qualifying live stations (within 0.03 of 0.25 Yellow boundary)
        tarkhola_score = 0.2250
        deorali_score = 0.2251
        ranipool_score = 0.2464

        self.assertTrue(is_borderline_score(tarkhola_score), f"Tarkhola score {tarkhola_score} must be borderline")
        self.assertTrue(is_borderline_score(deorali_score), f"Deorali score {deorali_score} must be borderline")
        self.assertTrue(is_borderline_score(ranipool_score), f"Ranipool score {ranipool_score} must be borderline")

        # Non-qualifying stations (far from boundaries 0.25 and 0.70)
        mile29_score = 0.3610  # distance to 0.25 is 0.1110 > 0.03
        likhipir_score = 0.3611 # distance to 0.25 is 0.1111 > 0.03
        self.assertFalse(is_borderline_score(mile29_score))
        self.assertFalse(is_borderline_score(likhipir_score))

if __name__ == "__main__":
    unittest.main()

