import unittest
import urllib.parse


def simulate_alert_generation(prev_tier: str, new_tier: str, is_backend_connected: bool) -> dict | None:
    """
    Core alert rule specification:
    1. Never create alerts from local fallback (paused when backend disconnected).
    2. Create alert when tier moves up: Green->Yellow, Yellow->Red, Green->Red, or new Red.
    3. Return None when tiers stay same or when disconnected.
    """
    if not is_backend_connected:
        return None  # Alerts paused: model API not connected

    priority = {"GREEN": 1, "YELLOW": 2, "RED": 3}
    if prev_tier == new_tier:
        return None  # No alert when tier stays the same

    if priority[new_tier] > priority[prev_tier] or (new_tier == "RED" and prev_tier != "RED"):
        return {
            "type": "ESCALATION",
            "prev_tier": prev_tier,
            "new_tier": new_tier,
            "is_critical": new_tier == "RED",
        }
    return None


def build_directions_urls(latitude: float, longitude: float) -> dict[str, str]:
    google_maps_url = f"https://www.google.com/maps/dir/?api=1&destination={latitude:.6f},{longitude:.6f}&travelmode=driving"
    osm_url = f"https://www.openstreetmap.org/?mlat={latitude:.6f}&mlon={longitude:.6f}#map=15/{latitude:.6f}/{longitude:.6f}"
    return {"googleMapsUrl": google_maps_url, "osmUrl": osm_url}


class AlertSystemLogicTests(unittest.TestCase):
    def test_tier_up_creates_alert(self) -> None:
        # Green -> Yellow
        alert_gy = simulate_alert_generation("GREEN", "YELLOW", is_backend_connected=True)
        self.assertIsNotNone(alert_gy)
        self.assertEqual(alert_gy["new_tier"], "YELLOW")
        self.assertFalse(alert_gy["is_critical"])

        # Yellow -> Red
        alert_yr = simulate_alert_generation("YELLOW", "RED", is_backend_connected=True)
        self.assertIsNotNone(alert_yr)
        self.assertEqual(alert_yr["new_tier"], "RED")
        self.assertTrue(alert_yr["is_critical"])

        # Green -> Red
        alert_gr = simulate_alert_generation("GREEN", "RED", is_backend_connected=True)
        self.assertIsNotNone(alert_gr)
        self.assertEqual(alert_gr["new_tier"], "RED")
        self.assertTrue(alert_gr["is_critical"])

    def test_same_tier_creates_no_alert(self) -> None:
        self.assertIsNone(simulate_alert_generation("GREEN", "GREEN", is_backend_connected=True))
        self.assertIsNone(simulate_alert_generation("YELLOW", "YELLOW", is_backend_connected=True))
        self.assertIsNone(simulate_alert_generation("RED", "RED", is_backend_connected=True))

    def test_fallback_mode_pauses_alerts(self) -> None:
        # Even on critical Red escalation, if backend is disconnected alerts are paused
        result = simulate_alert_generation("GREEN", "RED", is_backend_connected=False)
        self.assertIsNone(result)

    def test_directions_url_is_built_correctly(self) -> None:
        lat, lon = 27.0215, 88.4419
        urls = build_directions_urls(lat, lon)
        self.assertIn("https://www.google.com/maps/dir/?api=1", urls["googleMapsUrl"])
        self.assertIn("destination=27.021500,88.441900", urls["googleMapsUrl"])
        self.assertIn("travelmode=driving", urls["googleMapsUrl"])
        self.assertIn("mlat=27.021500", urls["osmUrl"])
        self.assertIn("mlon=88.441900", urls["osmUrl"])


if __name__ == "__main__":
    unittest.main()
