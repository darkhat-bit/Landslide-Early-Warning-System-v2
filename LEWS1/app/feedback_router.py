"""
feedback_router.py — Phase 5: Modular User Feedback & Emergency Email Dispatch
=============================================================================
Self-contained module for field observation ingestion and civil defense email
alert routing. Can be mounted or detached in a single line in app/main.py.
"""

import os
import json
import uuid
import smtplib
from datetime import datetime, timezone
from pathlib import Path
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from typing import Optional, List, Dict, Any

from fastapi import APIRouter, HTTPException, Query
from pydantic import BaseModel, Field
from dotenv import load_dotenv

load_dotenv()  # Loads .env from LEWS1 or root

router = APIRouter(prefix="/api/v1", tags=["Phase 5: Feedback & Email Alerts"])

# Paths for local file persistence
DATA_DIR = Path(__file__).resolve().parent.parent / "data" / "processed"
FEEDBACK_FILE = DATA_DIR / "feedback" / "user_reports.jsonl"
ALERTS_LOG_FILE = DATA_DIR / "alerts" / "simulated_email_log.jsonl"

FEEDBACK_FILE.parent.mkdir(parents=True, exist_ok=True)
ALERTS_LOG_FILE.parent.mkdir(parents=True, exist_ok=True)


# -------------------------------------------------------------------------
# Pydantic Schemas
# -------------------------------------------------------------------------

class FeedbackReportCreate(BaseModel):
    observer_name: str = Field(default="Anonymous Observer", min_length=2, max_length=100)
    observer_role: str = Field(default="Commuter", description="Commuter, Local Resident, Field Engineer, or Official")
    station_id: Optional[str] = Field(default=None, description="Optional associated corridor station ID")
    location_name: str = Field(..., min_length=2, max_length=120, description="Location name or NH-10 landmark")
    latitude: Optional[float] = Field(default=None, ge=-90.0, le=90.0)
    longitude: Optional[float] = Field(default=None, ge=-180.0, le=180.0)
    hazard_type: str = Field(
        ...,
        description="Active Rockfall / Debris, Road Slump / Cracking, Teesta River Inundation, Clear / Safe Passage, Other"
    )
    severity: str = Field(default="MEDIUM", description="LOW, MEDIUM, HIGH, or CRITICAL")
    description: str = Field(..., min_length=5, max_length=1000, description="Field observation details")
    contact_email: Optional[str] = Field(default=None, description="Optional contact email for verification")


class FeedbackReportResponse(BaseModel):
    report_id: str
    status: str
    timestamp: str
    data: FeedbackReportCreate


class EmailAlertRequest(BaseModel):
    recipient_email: str = Field(..., pattern=r"^[^@\s]+@[^@\s]+\.[^@\s]+$", description="Valid email address")
    station_name: str = Field(..., min_length=2, max_length=100)
    risk_tier: str = Field(..., description="GREEN, YELLOW, or RED")
    failure_probability: float = Field(..., ge=0.0, le=1.0)
    trigger_reason: Optional[str] = Field(default="High antecedent rainfall saturation")
    advisory_text: Optional[str] = Field(default=None)


class EmailAlertResponse(BaseModel):
    status: str
    recipient_email: str
    subject: str
    message: str
    timestamp: str
    simulated: bool


# -------------------------------------------------------------------------
# Helper Functions
# -------------------------------------------------------------------------

def _format_alert_email(req: EmailAlertRequest) -> tuple[str, str, str]:
    """Builds subject, plain text, and HTML formatted email."""
    tier_upper = req.risk_tier.upper()
    subject = f"[LEWS EARLY WARNING] {tier_upper} Alert at {req.station_name} (P={req.failure_probability:.2f})"
    
    plain_text = f"""
AI-BASED LANDSLIDE EARLY WARNING SYSTEM (LEWS) — EAST SIKKIM NH-10
=================================================================
Status: {tier_upper} HAZARD ALERT
Station / Sector: {req.station_name}
Failure Probability Score: {req.failure_probability:.4f}
Primary Factor: {req.trigger_reason}

ADVISORY & ACTION PROTOCOL:
{req.advisory_text or 'Proceed with extreme caution. Geotechnical monitoring elevated along highway stretch.'}

Notice: Prototype early warning advisory. Check official IMD, GSI, and District Disaster Management (SDRF/NDRF) updates before traveling.
Timestamp (UTC): {datetime.now(timezone.utc).isoformat()}
"""
    
    color_hex = "#dc2626" if tier_upper == "RED" else "#d97706" if tier_upper == "YELLOW" else "#16a34a"
    
    html_content = f"""
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body {{ font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 20px; }}
    .card {{ max-width: 580px; margin: 0 auto; background: #ffffff; border-radius: 8px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); }}
    .header {{ background-color: {color_hex}; color: #ffffff; padding: 18px 24px; }}
    .header h1 {{ margin: 0; font-size: 18px; font-weight: 700; letter-spacing: 0.5px; }}
    .header p {{ margin: 4px 0 0; font-size: 13px; opacity: 0.9; }}
    .body {{ padding: 24px; color: #1e293b; font-size: 14px; line-height: 1.6; }}
    .stat-box {{ background-color: #f1f5f9; border-radius: 6px; padding: 14px; margin: 16px 0; border-left: 4px solid {color_hex}; }}
    .stat-row {{ display: flex; justify-content: space-between; margin-bottom: 6px; }}
    .stat-label {{ font-weight: 600; color: #475569; }}
    .stat-val {{ font-weight: 700; color: #0f172a; }}
    .footer {{ padding: 16px 24px; background-color: #f8fafc; border-top: 1px solid #e2e8f0; font-size: 11px; color: #64748b; line-height: 1.5; }}
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h1>⚠️ LEWS Geotechnical Hazard Advisory</h1>
      <p>East Sikkim NH-10 Highway Corridor Surveillance</p>
    </div>
    <div class="body">
      <p>An automated hazard advisory has been issued for <strong>{req.station_name}</strong> along the Teesta-Gangtok Highway alignment.</p>
      <div class="stat-box">
        <div><strong>Operational Tier:</strong> <span style="color: {color_hex}; font-weight: 800;">{tier_upper}</span></div>
        <div><strong>Failure Probability:</strong> {req.failure_probability:.4f}</div>
        <div><strong>Primary Trigger:</strong> {req.trigger_reason}</div>
      </div>
      <p><strong>Recommended Action Protocol:</strong></p>
      <p style="background: #fffbeb; padding: 10px; border-radius: 4px; border: 1px solid #fde68a; font-size: 13px; color: #92400e;">
        {req.advisory_text or 'Deploy highway spotters. Exercise caution on active rockfall sectors between Rangpo and Singtam.'}
      </p>
    </div>
    <div class="footer">
      <strong>RESEARCH & PROTOTYPE NOTICE:</strong> This advisory is generated from an experimental AI framework trained on DEM terrain and scenario/weather models. Cross-verify with Border Roads Organisation (BRO), GSI, and Sikkim Disaster Management Authority before dispatch.
    </div>
  </div>
</body>
</html>
"""
    return subject, plain_text, html_content


def _send_or_simulate_email(recipient: str, subject: str, plain_text: str, html_text: str) -> tuple[bool, str]:
    """Attempts SMTP transmission if enabled in .env; otherwise logs to simulated file."""
    smtp_enabled = os.getenv("EMAIL_ALERTS_ENABLED", "false").lower() in ("true", "1", "yes")
    smtp_host = os.getenv("SMTP_HOST", "")
    smtp_port = int(os.getenv("SMTP_PORT", "587"))
    smtp_user = os.getenv("SMTP_USER", "")
    smtp_pass = os.getenv("SMTP_PASSWORD", "")
    smtp_from = os.getenv("SMTP_FROM", smtp_user or "lews-alerts@sikkim.gov.in")

    now_iso = datetime.now(timezone.utc).isoformat()

    if smtp_enabled and smtp_host and smtp_user and smtp_pass:
        try:
            msg = MIMEMultipart("alternative")
            msg["Subject"] = subject
            msg["From"] = smtp_from
            msg["To"] = recipient

            part1 = MIMEText(plain_text, "plain")
            part2 = MIMEText(html_text, "html")
            msg.attach(part1)
            msg.attach(part2)

            with smtplib.SMTP(smtp_host, smtp_port, timeout=8) as server:
                server.starttls()
                server.login(smtp_user, smtp_pass)
                server.sendmail(smtp_from, [recipient], msg.as_string())
            return True, "Email successfully dispatched via SMTP server."
        except Exception as e:
            # Fall back safely to log file on transmission error
            log_entry = {
                "timestamp": now_iso,
                "recipient": recipient,
                "subject": subject,
                "status": "failed_smtp_fallback_logged",
                "smtp_error": str(e),
                "body_preview": plain_text[:200]
            }
            with open(ALERTS_LOG_FILE, "a", encoding="utf-8") as f:
                f.write(json.dumps(log_entry) + "\n")
            return False, f"SMTP delivery failed ({type(e).__name__}); simulated fallback record created."

    # Simulation mode (default when no credentials are configured)
    log_entry = {
        "timestamp": now_iso,
        "recipient": recipient,
        "subject": subject,
        "status": "simulated",
        "body_preview": plain_text[:300]
    }
    with open(ALERTS_LOG_FILE, "a", encoding="utf-8") as f:
        f.write(json.dumps(log_entry) + "\n")

    return False, "Email alert simulated and logged to data/processed/alerts/simulated_email_log.jsonl (No live SMTP credentials in .env)."


# -------------------------------------------------------------------------
# API Endpoints
# -------------------------------------------------------------------------

@router.post("/feedback", response_model=FeedbackReportResponse)
def submit_feedback(report: FeedbackReportCreate):
    """
    Ingests ground hazard observations from commuters, drivers, and field engineers.
    Saves to data/processed/feedback/user_reports.jsonl.
    """
    report_id = f"RPT-{uuid.uuid4().hex[:8].upper()}"
    timestamp = datetime.now(timezone.utc).isoformat()

    record = {
        "report_id": report_id,
        "timestamp": timestamp,
        "status": "received",
        "data": report.model_dump()
    }

    try:
        with open(FEEDBACK_FILE, "a", encoding="utf-8") as f:
            f.write(json.dumps(record) + "\n")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to record feedback: {str(e)}")

    return FeedbackReportResponse(
        report_id=report_id,
        status="recorded",
        timestamp=timestamp,
        data=report
    )


@router.get("/feedback/list")
def list_feedback(limit: int = Query(20, ge=1, le=100)):
    """
    Retrieves the most recent verified field observations.
    """
    if not FEEDBACK_FILE.exists():
        return {"total": 0, "reports": []}

    reports = []
    try:
        with open(FEEDBACK_FILE, "r", encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if line:
                    reports.append(json.loads(line))
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to read reports: {str(e)}")

    # Return reverse chronological
    return {
        "total": len(reports),
        "reports": list(reversed(reports))[:limit]
    }


@router.post("/alerts/email/send", response_model=EmailAlertResponse)
def send_email_alert(alert_req: EmailAlertRequest):
    """
    Dispatches a structured landslide early warning email advisory.
    Uses SMTP if credentials are configured in .env; otherwise logs safely in simulation mode.
    """
    subject, plain_text, html_text = _format_alert_email(alert_req)
    sent_real, message = _send_or_simulate_email(
        recipient=str(alert_req.recipient_email),
        subject=subject,
        plain_text=plain_text,
        html_text=html_text
    )

    return EmailAlertResponse(
        status="dispatched" if sent_real else "simulated",
        recipient_email=str(alert_req.recipient_email),
        subject=subject,
        message=message,
        timestamp=datetime.now(timezone.utc).isoformat(),
        simulated=not sent_real
    )
