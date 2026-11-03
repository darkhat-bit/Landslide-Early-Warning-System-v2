from __future__ import annotations

import unittest
from fastapi.testclient import TestClient
from app.main import app
from src.config import BBOX, FEATURE_COLUMNS, RISK_THRESHOLDS


class ApiRobustnessTests(unittest.TestCase):
    def setUp(self) -> None:
        self.client = TestClient(app, raise_server_exceptions=False)
        self.valid_point = {
            "latitude": 27.20,
            "longitude": 88.50,
            "elevation_m": 1200.0,
            "slope_deg": 30.0,
            "aspect_deg": 180.0,
            "curvature": -0.05,
            "dist_to_road_m": 25.0,
            "dist_to_river_m": 150.0,
            "rain_24h_mm": 45.0,
            "rain_3d_mm": 90.0,
            "rain_7d_mm": 140.0,
            "soil_moisture_pct": 55.0,
            "ndvi": 0.35,
        }

    def test_health_endpoint_contract_and_sanitization(self) -> None:
        resp = self.client.get("/health")
        self.assertEqual(resp.status_code, 200)
        data = resp.json()
        self.assertEqual(data["status"], "healthy")
        self.assertTrue(data["model_loaded"])
        self.assertTrue(data["scaler_loaded"])
        self.assertTrue(data["artifacts_exist"])
        self.assertEqual(data["feature_count"], 11)
        self.assertEqual(data["features"], FEATURE_COLUMNS)
        self.assertEqual(data["model_type"], "RandomForestClassifier")
        self.assertEqual(data["risk_thresholds"], RISK_THRESHOLDS)
        
        # Ensure no absolute paths are leaked
        raw_text = resp.text
        self.assertNotIn("C:\\", raw_text)
        self.assertNotIn("/home/", raw_text)
        self.assertNotIn("Users", raw_text)

    def test_predict_point_valid_request(self) -> None:
        resp = self.client.post("/api/v1/predict/point", json=self.valid_point)
        self.assertEqual(resp.status_code, 200)
        data = resp.json()
        self.assertIn("failure_probability", data)
        self.assertIn("risk_tier", data)
        self.assertIn("advisory_text", data)
        self.assertTrue(0.0 <= data["failure_probability"] <= 1.0)
        self.assertIn(data["risk_tier"], ["GREEN", "YELLOW", "RED"])
        self.assertIn("Example action protocol (illustrative, to be set by local authorities)", data["advisory_text"])

    def test_predict_point_rejects_out_of_bounds_coordinates(self) -> None:
        # Latitude out of bounds (< 27.00 or > 27.45)
        resp_low_lat = self.client.post("/api/v1/predict/point", json=dict(self.valid_point, latitude=26.99))
        self.assertEqual(resp_low_lat.status_code, 422)

        resp_high_lat = self.client.post("/api/v1/predict/point", json=dict(self.valid_point, latitude=27.46))
        self.assertEqual(resp_high_lat.status_code, 422)

        # Longitude out of bounds (< 88.40 or > 88.65)
        resp_low_lon = self.client.post("/api/v1/predict/point", json=dict(self.valid_point, longitude=88.39))
        self.assertEqual(resp_low_lon.status_code, 422)

        resp_high_lon = self.client.post("/api/v1/predict/point", json=dict(self.valid_point, longitude=88.66))
        self.assertEqual(resp_high_lon.status_code, 422)

    def test_predict_point_rejects_invalid_rainfall_ranges(self) -> None:
        # Negative rainfall
        self.assertEqual(self.client.post("/api/v1/predict/point", json=dict(self.valid_point, rain_24h_mm=-1.0)).status_code, 422)
        # Above 600 mm for 24h
        self.assertEqual(self.client.post("/api/v1/predict/point", json=dict(self.valid_point, rain_24h_mm=601.0)).status_code, 422)
        # Above 1000 mm for 3d
        self.assertEqual(self.client.post("/api/v1/predict/point", json=dict(self.valid_point, rain_3d_mm=1001.0)).status_code, 422)
        # Above 1500 mm for 7d
        self.assertEqual(self.client.post("/api/v1/predict/point", json=dict(self.valid_point, rain_7d_mm=1501.0)).status_code, 422)

    def test_predict_point_rejects_invalid_geotechnical_ranges(self) -> None:
        # Slope > 90 or < 0
        self.assertEqual(self.client.post("/api/v1/predict/point", json=dict(self.valid_point, slope_deg=95.0)).status_code, 422)
        self.assertEqual(self.client.post("/api/v1/predict/point", json=dict(self.valid_point, slope_deg=-5.0)).status_code, 422)
        # Aspect > 360 or < 0
        self.assertEqual(self.client.post("/api/v1/predict/point", json=dict(self.valid_point, aspect_deg=365.0)).status_code, 422)
        # Soil moisture > 100 or < 0
        self.assertEqual(self.client.post("/api/v1/predict/point", json=dict(self.valid_point, soil_moisture_pct=105.0)).status_code, 422)
        # NDVI > 1.0 or < -1.0
        self.assertEqual(self.client.post("/api/v1/predict/point", json=dict(self.valid_point, ndvi=1.5)).status_code, 422)
        self.assertEqual(self.client.post("/api/v1/predict/point", json=dict(self.valid_point, ndvi=-1.5)).status_code, 422)

    def test_simulate_storm_rainfall_increment_limits(self) -> None:
        pt = dict(self.valid_point, point_id="test_pt")
        # Valid increment at max (300 mm)
        resp_max = self.client.post("/api/v1/simulate/storm", json={
            "simulated_rainfall_increment_mm": 300.0,
            "points": [pt]
        })
        self.assertEqual(resp_max.status_code, 200)

        # Increment exceeding 300 mm rejected with 422
        resp_over = self.client.post("/api/v1/simulate/storm", json={
            "simulated_rainfall_increment_mm": 301.0,
            "points": [pt]
        })
        self.assertEqual(resp_over.status_code, 422)

        # Negative increment rejected with 422
        resp_neg = self.client.post("/api/v1/simulate/storm", json={
            "simulated_rainfall_increment_mm": -5.0,
            "points": [pt]
        })
        self.assertEqual(resp_neg.status_code, 422)


if __name__ == "__main__":
    unittest.main()

