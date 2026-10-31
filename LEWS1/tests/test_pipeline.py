from __future__ import annotations

import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch

import numpy as np
import pandas as pd
import rasterio
from fastapi import HTTPException
from fastapi.testclient import TestClient
from pyproj import Transformer
from rasterio.transform import from_origin

from app.main import app, simulate_storm
from app.schemas import CorridorPoint, CorridorSimulationRequest
from src.config import FEATURE_COLUMNS
from src.geospatial_pipeline import extract_terrain, prepare_training_table
from src.train import _load_data, _split_data


class GeospatialPipelineTests(unittest.TestCase):
    def setUp(self) -> None:
        self.temp_dir = tempfile.TemporaryDirectory()
        self.root = Path(self.temp_dir.name)
        self.dem_path = self.root / "dem.tif"
        rows, cols = np.indices((120, 120))
        elevation = (cols * 30 * np.tan(np.deg2rad(10))).astype(np.float32)
        with rasterio.open(
            self.dem_path,
            "w",
            driver="GTiff",
            height=120,
            width=120,
            count=1,
            dtype="float32",
            crs="EPSG:32645",
            transform=from_origin(300000, 3100000, 30, 30),
            nodata=-9999,
        ) as raster:
            raster.write(elevation, 1)

    def tearDown(self) -> None:
        self.temp_dir.cleanup()

    def _point_at_grid(self, x: float = 301800, y: float = 3098200) -> tuple[float, float]:
        transformer = Transformer.from_crs("EPSG:32645", "EPSG:4326", always_xy=True)
        lon, lat = transformer.transform(x, y)
        return lat, lon

    def test_terrain_extraction_returns_physical_ranges(self) -> None:
        lat, lon = self._point_at_grid()
        result = extract_terrain(self.dem_path, pd.DataFrame({"latitude": [lat], "longitude": [lon]}), resolution_m=30)
        self.assertTrue(9.0 <= result.loc[0, "slope_deg"] <= 11.0)
        self.assertGreaterEqual(result.loc[0, "aspect_deg"], 0)
        self.assertLessEqual(result.loc[0, "aspect_deg"], 360)

    def test_terrain_extraction_fails_outside_dem_coverage(self) -> None:
        with self.assertRaisesRegex(ValueError, "coverage/nodata"):
            extract_terrain(self.dem_path, pd.DataFrame({"latitude": [26.0], "longitude": [88.0]}), resolution_m=30)

    def test_negative_samples_are_buffered_reproducibly(self) -> None:
        event_lat, event_lon = self._point_at_grid()
        events = pd.DataFrame([{
            "event_id": "event-1", "latitude": event_lat, "longitude": event_lon,
            "dist_to_road_m": 100, "dist_to_river_m": 200, "rain_24h_mm": 50,
            "rain_3d_mm": 100, "rain_7d_mm": 150, "soil_moisture_pct": 60, "ndvi": 0.45,
        }])
        candidates = pd.DataFrame([
            {"latitude": event_lat + lat_offset, "longitude": event_lon + lon_offset,
             "dist_to_road_m": 100, "dist_to_river_m": 200, "rain_24h_mm": 50,
             "rain_3d_mm": 100, "rain_7d_mm": 150, "soil_moisture_pct": 60, "ndvi": 0.45}
            for lat_offset, lon_offset in ((0.0, 0.0), (0.01, 0.01), (-0.01, -0.01), (0.015, -0.01))
        ])
        events_path = self.root / "events.csv"
        candidates_path = self.root / "candidates.csv"
        events.to_csv(events_path, index=False)
        candidates.to_csv(candidates_path, index=False)
        first_path, second_path = self.root / "first.csv", self.root / "second.csv"
        first = prepare_training_table(self.dem_path, events_path, candidates_path, first_path, 500, 42, 1, 30)
        second = prepare_training_table(self.dem_path, events_path, candidates_path, second_path, 500, 42, 1, 30)
        self.assertEqual(first["landslide_occurred"].value_counts().to_dict(), {1: 1, 0: 1})
        self.assertEqual(first["latitude"].tolist(), second["latitude"].tolist())
        self.assertIn("background_candidate_not_confirmed_stable", set(first["sample_type"]))
        self.assertTrue(first_path.with_suffix(".metadata.json").exists())


class TrainingValidationTests(unittest.TestCase):
    def test_dataset_schema_rejects_missing_feature(self) -> None:
        with tempfile.TemporaryDirectory() as directory:
            path = Path(directory) / "bad.csv"
            frame = pd.DataFrame({column: [0, 1] for column in FEATURE_COLUMNS})
            frame["landslide_occurred"] = [0, 1]
            frame.drop(columns=[FEATURE_COLUMNS[0]]).to_csv(path, index=False)
            with self.assertRaisesRegex(ValueError, "missing required columns"):
                _load_data(path)

    def test_group_split_keeps_groups_separate(self) -> None:
        X = pd.DataFrame({"feature": np.arange(40)})
        y = pd.Series([0, 1] * 20)
        frame = pd.DataFrame({"spatial_group": [f"g{idx // 4}" for idx in range(40)]})
        X_train, X_test, _, _, method = _split_data(X, y, frame, 42)
        train_groups = set(frame.iloc[X_train.index]["spatial_group"])
        test_groups = set(frame.iloc[X_test.index]["spatial_group"])
        self.assertTrue(train_groups.isdisjoint(test_groups))
        self.assertEqual(method, "group_holdout:spatial_group")


class StormApiTests(unittest.TestCase):
    def test_storm_returns_stable_ids_and_adjusted_rainfall(self) -> None:
        client = TestClient(app)
        with patch("app.main.evaluate_risk", return_value={
            "failure_probability": 0.73, "risk_tier": "RED", "action_protocol": "test advisory"
        }):
            response = client.post("/api/v1/simulate/storm", json={
                "simulated_rainfall_increment_mm": 25,
                "points": [{
                    "point_id": "pt-a", "latitude": 27.2, "longitude": 88.5,
                    "elevation_m": 1000, "slope_deg": 30, "aspect_deg": 180,
                    "curvature": -0.15, "dist_to_road_m": 100, "dist_to_river_m": 200,
                    "rain_24h_mm": 40, "rain_3d_mm": 100, "rain_7d_mm": 160,
                    "soil_moisture_pct": 60, "ndvi": 0.35
                }]
            })
        self.assertEqual(response.status_code, 200)
        feature = response.json()["features"][0]["properties"]
        self.assertEqual(feature["point_id"], "pt-a")
        self.assertEqual(feature["rain_24h_mm_adjusted"], 65.0)
        self.assertEqual(feature["rain_3d_mm_adjusted"], 130.0)
        self.assertEqual(feature["rain_7d_mm_adjusted"], 195.0)

    def test_storm_rejects_duplicate_point_ids(self) -> None:
        base = dict(latitude=27.2, longitude=88.5, elevation_m=1000, slope_deg=30,
                    aspect_deg=180, curvature=0.0, dist_to_road_m=100, dist_to_river_m=200,
                    rain_24h_mm=40, rain_3d_mm=100, rain_7d_mm=160,
                    soil_moisture_pct=60, ndvi=0.4)
        request = CorridorSimulationRequest(
            simulated_rainfall_increment_mm=1,
            points=[CorridorPoint(point_id="same", **base), CorridorPoint(point_id="same", **base)],
        )
        with self.assertRaises(HTTPException) as error:
            simulate_storm(request)
        self.assertEqual(error.exception.status_code, 422)


if __name__ == "__main__":
    unittest.main()
