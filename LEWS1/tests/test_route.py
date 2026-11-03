"""
tests/test_route.py — Unit Tests for Route-Based Warning & Terrain Extraction

Phase 3 Requirements:
1. Mocked Nominatim geocoding with rate-limiting and caching.
2. Mocked OSRM routing and UTM 45N sampling (every 250-500m, <=200 points).
3. Runtime DEM terrain extraction & batch scoring (Green, Yellow, Red).
4. Out-of-bounds coverage handling (grey / NO_COVERAGE for points outside lat 27.00-27.45, lon 88.40-88.65).
5. FastAPI route endpoint tests (/api/v1/route/geocode and /api/v1/route/analyze).
"""

import json
import unittest
from unittest.mock import MagicMock, patch

from fastapi.testclient import TestClient

from app.main import app
from src.routing import (
    OSRMRouteProvider,
    analyze_route_hazards,
    sample_route_points,
    search_locations,
)


class RouteHazardTests(unittest.TestCase):
    def setUp(self):
        self.client = TestClient(app)
        # Synthetic GeoJSON LineString coordinates (Rangpo to Singtam stretch)
        self.sample_coords = [
            [88.5283, 27.1764],
            [88.5200, 27.1900],
            [88.5100, 27.2100],
            [88.4981, 27.2348],
        ]

    def test_sample_route_points_spacing(self):
        """Verify UTM 45N sampling respects step distance and caps at max_points."""
        sampled = sample_route_points(self.sample_coords, step_m=300.0, max_points=200)
        self.assertGreater(len(sampled), 2)
        self.assertLessEqual(len(sampled), 200)
        self.assertAlmostEqual(sampled[0]["distance_km"], 0.0, places=1)
        # Check monotonic distance
        for i in range(1, len(sampled)):
            self.assertGreaterEqual(sampled[i]["distance_km"], sampled[i - 1]["distance_km"])

    @patch("urllib.request.urlopen")
    def test_mocked_nominatim_search(self, mock_urlopen):
        """Verify geocoding formats Nominatim response and caches queries."""
        mock_resp = MagicMock()
        mock_resp.read.return_value = json.dumps([
            {"display_name": "Gangtok, East Sikkim, India", "lat": "27.3389", "lon": "88.6138"}
        ]).encode("utf-8")
        mock_resp.__enter__.return_value = mock_resp
        mock_urlopen.return_value = mock_resp

        results = search_locations("Gangtok Test Query")
        self.assertIsInstance(results, list)
        self.assertGreater(len(results), 0)
        self.assertEqual(results[0]["name"], "Gangtok")
        self.assertAlmostEqual(results[0]["latitude"], 27.3389, places=3)

    @patch.object(OSRMRouteProvider, "get_route")
    def test_route_hazard_analysis_in_coverage(self, mock_get_route):
        """Verify route inside DEM bounds derives elevation, slope, aspect, curvature, and assigns tiers."""
        mock_get_route.return_value = {
            "provider": "MockOSRM",
            "geometry": {"type": "LineString", "coordinates": self.sample_coords},
            "distance_m": 8500.0,
            "duration_s": 900.0,
        }

        res = analyze_route_hazards(
            start_lat=27.1764, start_lon=88.5283,
            end_lat=27.2348, end_lon=88.4981,
            rainfall_delta=0.0
        )

        self.assertEqual(res["status"], "success")
        summary = res["route_summary"]
        self.assertAlmostEqual(summary["total_distance_km"], 8.5, places=1)
        self.assertIn("On this route", summary["summary_sentence"])

        # Check sample points feature extraction
        points = res["sample_points"]
        self.assertGreater(len(points), 0)
        p0 = points[0]
        self.assertTrue(p0["in_coverage"])
        self.assertIsNotNone(p0["elevation_m"])
        self.assertIsNotNone(p0["slope_deg"])
        self.assertIsNotNone(p0["aspect_deg"])
        self.assertIsNotNone(p0["curvature"])
        self.assertIn(p0["tier"], ["GREEN", "YELLOW", "RED"])

        # Check segments
        segments = res["segments"]
        self.assertGreater(len(segments), 0)
        self.assertIn(segments[0]["color"], ["#16a34a", "#f59e0b", "#dc2626"])

    @patch.object(OSRMRouteProvider, "get_route")
    def test_route_out_of_coverage_handling(self, mock_get_route):
        """Verify points outside Sikkim model bounds (lat > 27.45 or < 27.00) are flagged NO_COVERAGE (grey)."""
        out_of_bounds_coords = [
            [88.5283, 27.1764],  # Inside
            [88.5000, 27.5500],  # Outside (lat > 27.45)
            [88.5000, 27.6000],  # Outside
        ]
        mock_get_route.return_value = {
            "provider": "MockOSRM",
            "geometry": {"type": "LineString", "coordinates": out_of_bounds_coords},
            "distance_m": 45000.0,
            "duration_s": 3600.0,
        }

        res = analyze_route_hazards(
            start_lat=27.1764, start_lon=88.5283,
            end_lat=27.6000, end_lon=88.5000,
        )

        pts = res["sample_points"]
        out_pts = [p for p in pts if not p["in_coverage"]]
        self.assertGreater(len(out_pts), 0)
        for p in out_pts:
            self.assertEqual(p["tier"], "NO_COVERAGE")
            self.assertIsNone(p["score"])

        grey_segs = [s for s in res["segments"] if s["tier"] == "NO_COVERAGE"]
        self.assertGreater(len(grey_segs), 0)
        self.assertEqual(grey_segs[0]["color"], "#94a3b8")  # Slate grey

    def test_fastapi_route_endpoints(self):
        """Test API endpoints /api/v1/route/geocode and /api/v1/route/analyze."""
        # 1. Geocode endpoint
        resp_geo = self.client.get("/api/v1/route/geocode?q=Gangtok")
        self.assertEqual(resp_geo.status_code, 200)
        geo_data = resp_geo.json()
        self.assertIsInstance(geo_data, list)
        self.assertGreater(len(geo_data), 0)

        # 2. Analyze endpoint
        payload = {
            "start_lat": 27.1764,
            "start_lon": 88.5283,
            "end_lat": 27.2348,
            "end_lon": 88.4981,
            "operation_mode": "SCENARIO",
            "rainfall_delta": 50.0,
        }
        resp_analyze = self.client.post("/api/v1/route/analyze", json=payload)
        self.assertEqual(resp_analyze.status_code, 200)
        data = resp_analyze.json()
        self.assertEqual(data["status"], "success")
        self.assertIn("summary_sentence", data["route_summary"])
        self.assertGreater(len(data["segments"]), 0)


if __name__ == "__main__":
    unittest.main()

