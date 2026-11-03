"""
test_feedback_alerts.py — Unit Tests for Phase 5 Feedback & Emergency Email Dispatch
=====================================================================================
Tests endpoint ingestion, data validation, offline email simulation, and mocked SMTP.
"""

import json
import unittest
from unittest.mock import patch, MagicMock
from fastapi.testclient import TestClient

from app.main import app
from app.feedback_router import _format_alert_email, EmailAlertRequest


class TestFeedbackAlerts(unittest.TestCase):
    def setUp(self):
        self.client = TestClient(app)

    def test_submit_feedback_valid(self):
        """Test submitting valid field observation returns 200 and report ID."""
        payload = {
            "observer_name": "Test Engineer",
            "observer_role": "Field Engineer",
            "location_name": "Likhipir Escarpment",
            "hazard_type": "Active Rockfall / Debris",
            "severity": "HIGH",
            "description": "Small rock fragments falling across the northbound carriageway near milestone 32.",
            "contact_email": "engineer@sikkim-pwd.gov.in",
            "latitude": 27.085,
            "longitude": 88.423
        }
        res = self.client.post("/api/v1/feedback", json=payload)
        self.assertEqual(res.status_code, 200)
        data = res.json()
        self.assertIn("report_id", data)
        self.assertTrue(data["report_id"].startswith("RPT-"))
        self.assertEqual(data["status"], "recorded")
        self.assertEqual(data["data"]["location_name"], "Likhipir Escarpment")

    def test_submit_feedback_validation_error(self):
        """Test that invalid payloads return HTTP 422."""
        # Missing description
        payload = {
            "observer_name": "Test Observer",
            "location_name": "Rangpo",
            "hazard_type": "Road Slump",
            "description": ""  # min_length is 5
        }
        res = self.client.post("/api/v1/feedback", json=payload)
        self.assertEqual(res.status_code, 422)

    def test_list_feedback(self):
        """Test listing recent feedback entries."""
        res = self.client.get("/api/v1/feedback/list?limit=5")
        self.assertEqual(res.status_code, 200)
        data = res.json()
        self.assertIn("total", data)
        self.assertIn("reports", data)
        self.assertIsInstance(data["reports"], list)

    def test_email_alert_simulation_fallback(self):
        """Test email alert with no SMTP credentials falls back safely to simulation log."""
        payload = {
            "recipient_email": "sdrf-control@sikkim.gov.in",
            "station_name": "29th Mile",
            "risk_tier": "RED",
            "failure_probability": 0.742,
            "trigger_reason": "Severe antecedent rainfall exceeding 180mm",
            "advisory_text": "Close NH-10 section immediately."
        }
        res = self.client.post("/api/v1/alerts/email/send", json=payload)
        self.assertEqual(res.status_code, 200)
        data = res.json()
        self.assertEqual(data["status"], "simulated")
        self.assertTrue(data["simulated"])
        self.assertIn("29th Mile", data["subject"])
        self.assertIn("RED", data["subject"])

    def test_email_alert_invalid_email(self):
        """Test that invalid email format returns 422."""
        payload = {
            "recipient_email": "not-an-email",
            "station_name": "Melli",
            "risk_tier": "YELLOW",
            "failure_probability": 0.45
        }
        res = self.client.post("/api/v1/alerts/email/send", json=payload)
        self.assertEqual(res.status_code, 422)

    def test_email_formatting_helper(self):
        """Test formatting of email subject, plain text and HTML."""
        req = EmailAlertRequest(
            recipient_email="official@disaster.in",
            station_name="Singtam Bazar",
            risk_tier="RED",
            failure_probability=0.8123,
            trigger_reason="Intense cloudburst",
            advisory_text="Deploy emergency recovery units."
        )
        subject, plain, html = _format_alert_email(req)
        self.assertIn("[LEWS EARLY WARNING] RED Alert at Singtam Bazar", subject)
        self.assertIn("Failure Probability Score: 0.8123", plain)
        self.assertIn("Deploy emergency recovery units.", html)
        self.assertIn("#dc2626", html)  # Red styling

    @patch("smtplib.SMTP")
    @patch.dict("os.environ", {
        "EMAIL_ALERTS_ENABLED": "true",
        "SMTP_HOST": "smtp.test-relay.com",
        "SMTP_PORT": "587",
        "SMTP_USER": "alert-bot@test.com",
        "SMTP_PASSWORD": "secret-password",
        "SMTP_FROM": "lews@test.com"
    })
    def test_mocked_smtp_dispatch(self, mock_smtp_cls):
        """Test real SMTP path when credentials are provided in environment."""
        mock_server = MagicMock()
        mock_smtp_cls.return_value.__enter__.return_value = mock_server

        payload = {
            "recipient_email": "field-squad@sikkim.gov.in",
            "station_name": "Martam",
            "risk_tier": "YELLOW",
            "failure_probability": 0.521
        }
        res = self.client.post("/api/v1/alerts/email/send", json=payload)
        self.assertEqual(res.status_code, 200)
        data = res.json()
        self.assertEqual(data["status"], "dispatched")
        self.assertFalse(data["simulated"])
        self.assertTrue(mock_server.starttls.called)
        self.assertTrue(mock_server.login.called)
        self.assertTrue(mock_server.sendmail.called)


if __name__ == "__main__":
    unittest.main()

