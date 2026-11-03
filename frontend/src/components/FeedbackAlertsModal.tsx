import React, { useState, useEffect } from 'react';
import { X, Send, Mail, ExternalLink, AlertTriangle, CheckCircle, ShieldCheck, MessageSquare, Clock, RefreshCw } from 'lucide-react';

interface FeedbackAlertsModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedStationName?: string;
  selectedStationId?: string;
}

interface FeedbackReportItem {
  report_id: string;
  timestamp: string;
  data: {
    observer_name: string;
    observer_role: string;
    location_name: string;
    hazard_type: string;
    severity: string;
    description: string;
  };
}

export const FeedbackAlertsModal: React.FC<FeedbackAlertsModalProps> = ({
  isOpen,
  onClose,
  selectedStationName,
  selectedStationId,
}) => {
  const [activeTab, setActiveTab] = useState<'hazard' | 'email'>(() => window.location.href.includes('email') ? 'email' : 'hazard');

  // Form State: Ground Observation
  const [observerName, setObserverName] = useState('Field Observer');
  const [observerRole, setObserverRole] = useState('Commuter / Tourist');
  const [locationName, setLocationName] = useState(selectedStationName || 'Rangpo Entry Checkpost');
  const [hazardType, setHazardType] = useState('Active Rockfall / Debris');
  const [severity, setSeverity] = useState('HIGH');
  const [description, setDescription] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [isSubmittingFeedback, setIsSubmittingFeedback] = useState(false);
  const [feedbackSuccessMsg, setFeedbackSuccessMsg] = useState<string | null>(null);
  const [feedbackErrorMsg, setFeedbackErrorMsg] = useState<string | null>(null);
  const [recentReports, setRecentReports] = useState<FeedbackReportItem[]>([]);
  const [isLoadingReports, setIsLoadingReports] = useState(false);

  // Form State: Email Dispatch
  const [recipientEmail, setRecipientEmail] = useState('');
  const [alertStation, setAlertStation] = useState(selectedStationName || '29th Mile Chronic Slide');
  const [alertTier, setAlertTier] = useState<'YELLOW' | 'RED'>('RED');
  const [alertProb, setAlertProb] = useState(0.74);
  const [alertReason, setAlertReason] = useState('Heavy antecedent 72h rainfall exceeding saturation threshold');
  const [isSubmittingEmail, setIsSubmittingEmail] = useState(false);
  const [emailResult, setEmailResult] = useState<{ status: string; message: string; simulated: boolean } | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);

  // Sync if selectedStationName changes
  useEffect(() => {
    if (selectedStationName) {
      setLocationName(selectedStationName);
      setAlertStation(selectedStationName);
    }
  }, [selectedStationName]);

  // Load recent feedback reports
  const fetchRecentReports = async () => {
    setIsLoadingReports(true);
    try {
      const res = await fetch('/api/v1/feedback/list?limit=10');
      if (res.ok) {
        const data = await res.json();
        setRecentReports(data.reports || []);
      }
    } catch {
      // Ignore network errors on background poll
    } finally {
      setIsLoadingReports(false);
    }
  };

  useEffect(() => {
    if (isOpen && activeTab === 'hazard') {
      fetchRecentReports();
    }
  }, [isOpen, activeTab]);

  if (!isOpen) return null;

  const handleFeedbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingFeedback(true);
    setFeedbackSuccessMsg(null);
    setFeedbackErrorMsg(null);

    try {
      const res = await fetch('/api/v1/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          observer_name: observerName,
          observer_role: observerRole,
          station_id: selectedStationId || null,
          location_name: locationName,
          hazard_type: hazardType,
          severity: severity,
          description: description,
          contact_email: contactEmail || null,
        }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.detail?.[0]?.msg || err.detail || 'Submission failed');
      }

      const data = await res.json();
      setFeedbackSuccessMsg(`Observation successfully recorded as ${data.report_id}. Field teams notified.`);
      setDescription('');
      fetchRecentReports();
    } catch (err: any) {
      setFeedbackErrorMsg(err.message || 'Error recording report. Ensure backend is active.');
    } finally {
      setIsSubmittingFeedback(false);
    }
  };

  const handleEmailAlertSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingEmail(true);
    setEmailResult(null);
    setEmailError(null);

    try {
      const res = await fetch('/api/v1/alerts/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          recipient_email: recipientEmail,
          station_name: alertStation,
          risk_tier: alertTier,
          failure_probability: alertProb,
          trigger_reason: alertReason,
          advisory_text:
            alertTier === 'RED'
              ? 'Critical Warning: Immediate vehicular traffic suspension and deployment of emergency clearance squads advised.'
              : 'Watch Advisory: Enhanced geotechnical vigilance and roadside monitoring active.',
        }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.detail?.[0]?.msg || err.detail || 'Email transmission failed');
      }

      const data = await res.json();
      setEmailResult({
        status: data.status,
        message: data.message,
        simulated: data.simulated,
      });
    } catch (err: any) {
      setEmailError(err.message || 'Error processing email alert.');
    } finally {
      setIsSubmittingEmail(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-700 rounded-xl shadow-2xl text-slate-100 max-h-[92vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white tracking-wide">Field Feedback & Emergency Alerts</h2>
              <p className="text-xs text-slate-400">Civil Defense Ingestion & Automated Highway Notifications</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            title="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selector */}
        <div className="flex border-b border-slate-800 bg-slate-950/40 px-6 pt-2">
          <button
            type="button"
            onClick={() => setActiveTab('hazard')}
            className={`flex items-center gap-2 py-3 px-4 font-semibold text-sm border-b-2 transition-colors ${
              activeTab === 'hazard'
                ? 'border-emerald-500 text-emerald-400 bg-slate-800/40'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <AlertTriangle className="w-4 h-4" />
            Report Ground Hazard
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('email')}
            className={`flex items-center gap-2 py-3 px-4 font-semibold text-sm border-b-2 transition-colors ${
              activeTab === 'email'
                ? 'border-emerald-500 text-emerald-400 bg-slate-800/40'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Mail className="w-4 h-4" />
            Emergency Email Alerts
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-300">
          {activeTab === 'hazard' && (
            <div className="space-y-6">
              <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/60">
                <p className="text-xs text-slate-300">
                  Observed an active rockfall, shooting stones, road cracking, or clear road status along NH-10? Submit
                  verified field observations here to help improve civil defense situational awareness.
                </p>
              </div>

              {feedbackSuccessMsg && (
                <div className="flex items-start gap-3 p-3.5 bg-emerald-950/60 border border-emerald-500/40 rounded-lg text-emerald-200">
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div className="text-xs">{feedbackSuccessMsg}</div>
                </div>
              )}

              {feedbackErrorMsg && (
                <div className="flex items-start gap-3 p-3.5 bg-red-950/60 border border-red-500/40 rounded-lg text-red-200">
                  <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <div className="text-xs">{feedbackErrorMsg}</div>
                </div>
              )}

              <form onSubmit={handleFeedbackSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Observer Name</label>
                    <input
                      type="text"
                      value={observerName}
                      onChange={(e) => setObserverName(e.target.value)}
                      required
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Observer Role</label>
                    <select
                      value={observerRole}
                      onChange={(e) => setObserverRole(e.target.value)}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500"
                    >
                      <option value="Commuter / Tourist">Commuter / Tourist</option>
                      <option value="Local Resident">Local Resident</option>
                      <option value="Commercial Driver">Commercial Driver</option>
                      <option value="Field Engineer / SDRF">Field Engineer / SDRF</option>
                      <option value="BRO Patrol Officer">BRO Patrol Officer</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Highway Location / Milestone</label>
                    <input
                      type="text"
                      value={locationName}
                      onChange={(e) => setLocationName(e.target.value)}
                      required
                      placeholder="e.g. 29th Mile, Likhipir, Singtam"
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Hazard Category</label>
                    <select
                      value={hazardType}
                      onChange={(e) => setHazardType(e.target.value)}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500"
                    >
                      <option value="Active Rockfall / Debris">Active Rockfall / Debris</option>
                      <option value="Road Slump / Cracking">Road Slump / Cracking</option>
                      <option value="Teesta River Inundation">Teesta River Inundation</option>
                      <option value="Mudflow / Slurry Deposit">Mudflow / Slurry Deposit</option>
                      <option value="Clear / Safe Passage (False Alarm)">Clear / Safe Passage (False Alarm)</option>
                      <option value="Other Hazard">Other Hazard</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Reported Severity</label>
                    <div className="flex gap-2">
                      {(['LOW', 'MEDIUM', 'HIGH', 'CRITICAL'] as const).map((sev) => (
                        <button
                          key={sev}
                          type="button"
                          onClick={() => setSeverity(sev)}
                          className={`flex-1 py-1.5 text-xs font-bold rounded border transition-colors ${
                            severity === sev
                              ? sev === 'CRITICAL'
                                ? 'bg-red-600 border-red-500 text-white'
                                : sev === 'HIGH'
                                ? 'bg-orange-600 border-orange-500 text-white'
                                : sev === 'MEDIUM'
                                ? 'bg-amber-600 border-amber-500 text-white'
                                : 'bg-emerald-600 border-emerald-500 text-white'
                              : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
                          }`}
                        >
                          {sev}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Contact Email (Optional)</label>
                    <input
                      type="email"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      placeholder="For validation queries"
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Observation Description</label>
                  <textarea
                    rows={3}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    placeholder="Describe exact conditions: boulder sizes, lane blocked, seepage, cracks..."
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    disabled={isSubmittingFeedback}
                    className="flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-semibold text-sm transition-colors shadow-md disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    {isSubmittingFeedback ? 'Transmitting Report...' : 'Submit Ground Report'}
                  </button>
                </div>
              </form>

              {/* Feed of Recent Reports */}
              <div className="pt-4 border-t border-slate-800">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-emerald-400" />
                    Recent Field Submissions ({recentReports.length})
                  </h3>
                  <button
                    type="button"
                    onClick={fetchRecentReports}
                    className="p-1 text-slate-400 hover:text-white rounded hover:bg-slate-800 text-xs flex items-center gap-1"
                  >
                    <RefreshCw className={`w-3 h-3 ${isLoadingReports ? 'animate-spin' : ''}`} />
                    Refresh
                  </button>
                </div>

                {recentReports.length === 0 ? (
                  <p className="text-xs text-slate-500 italic">No recent ground observations submitted yet.</p>
                ) : (
                  <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                    {recentReports.map((rpt) => (
                      <div
                        key={rpt.report_id}
                        className="p-3 bg-slate-950/60 border border-slate-800 rounded-lg text-xs space-y-1"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-slate-200">{rpt.data.location_name}</span>
                          <span
                            className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                              rpt.data.severity === 'CRITICAL'
                                ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                                : rpt.data.severity === 'HIGH'
                                ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                                : 'bg-slate-800 text-slate-300'
                            }`}
                          >
                            {rpt.data.severity}
                          </span>
                        </div>
                        <div className="text-slate-400 text-[11px] flex gap-2">
                          <span>{rpt.data.hazard_type}</span>
                          <span>•</span>
                          <span>{rpt.data.observer_role}</span>
                          <span>•</span>
                          <span>{new Date(rpt.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                        </div>
                        <p className="text-slate-300">{rpt.data.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'email' && (
            <div className="space-y-6">
              <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/60">
                <p className="text-xs text-slate-300">
                  Configure automated emergency alert dispatches. For demonstration or development, LEWS safely logs all
                  alerts to a local audit trail when SMTP credentials in <code className="text-amber-300">.env</code> are
                  empty. When SMTP credentials are provided, alerts are dispatched directly via encrypted TLS.
                </p>
              </div>

              {emailResult && (
                <div
                  className={`flex items-start gap-3 p-3.5 rounded-lg text-xs ${
                    emailResult.simulated
                      ? 'bg-amber-950/60 border border-amber-500/40 text-amber-200'
                      : 'bg-emerald-950/60 border border-emerald-500/40 text-emerald-200'
                  }`}
                >
                  <ShieldCheck className="w-5 h-5 flex-shrink-0 mt-0.5 text-current" />
                  <div>
                    <div className="font-bold mb-0.5">
                      {emailResult.simulated ? 'Simulated Dispatch Logged' : 'Email Advisory Dispatched'}
                    </div>
                    <div>{emailResult.message}</div>
                  </div>
                </div>
              )}

              {emailError && (
                <div className="flex items-start gap-3 p-3.5 bg-red-950/60 border border-red-500/40 rounded-lg text-red-200">
                  <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <div className="text-xs">{emailError}</div>
                </div>
              )}

              <form onSubmit={handleEmailAlertSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Recipient Email Address</label>
                  <input
                    type="email"
                    value={recipientEmail}
                    onChange={(e) => setRecipientEmail(e.target.value)}
                    required
                    placeholder="e.g. sdrf-control@sikkim.gov.in, officer@disaster.in"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Target Highway Station</label>
                    <input
                      type="text"
                      value={alertStation}
                      onChange={(e) => setAlertStation(e.target.value)}
                      required
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Alert Risk Tier</label>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          setAlertTier('YELLOW');
                          if (alertProb >= 0.7) setAlertProb(0.45);
                        }}
                        className={`flex-1 py-2 text-xs font-bold rounded border transition-colors ${
                          alertTier === 'YELLOW'
                            ? 'bg-amber-600 border-amber-500 text-white'
                            : 'bg-slate-800 border-slate-700 text-slate-400'
                        }`}
                      >
                        YELLOW (Watch)
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setAlertTier('RED');
                          if (alertProb < 0.7) setAlertProb(0.74);
                        }}
                        className={`flex-1 py-2 text-xs font-bold rounded border transition-colors ${
                          alertTier === 'RED'
                            ? 'bg-red-600 border-red-500 text-white'
                            : 'bg-slate-800 border-slate-700 text-slate-400'
                        }`}
                      >
                        RED (Critical)
                      </button>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Failure Probability (P = {alertProb.toFixed(2)})
                    </label>
                    <input
                      type="range"
                      min="0.25"
                      max="0.99"
                      step="0.01"
                      value={alertProb}
                      onChange={(e) => setAlertProb(parseFloat(e.target.value))}
                      className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Trigger Explanation</label>
                    <input
                      type="text"
                      value={alertReason}
                      onChange={(e) => setAlertReason(e.target.value)}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-800">
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipientEmail || 'jaiswalrishabh704@gmail.com')}&su=${encodeURIComponent(`[LEWS EARLY WARNING] ${alertTier} Alert at ${alertStation} (P=${alertProb.toFixed(2)})`)}&body=${encodeURIComponent(
                      `AI-BASED LANDSLIDE EARLY WARNING SYSTEM (LEWS) — EAST SIKKIM NH-10\n` +
                      `Status: ${alertTier} HAZARD ALERT\n` +
                      `Station / Sector: ${alertStation}\n` +
                      `Failure Probability Score: ${alertProb.toFixed(4)}\n` +
                      `Primary Factor: ${alertReason}\n\n` +
                      `ADVISORY & ACTION PROTOCOL:\n` +
                      (alertTier === 'RED'
                        ? 'Critical Warning: Immediate vehicular traffic suspension and deployment of emergency clearance squads advised.'
                        : 'Watch Advisory: Enhanced geotechnical vigilance and roadside monitoring active.') +
                      `\n\nNotice: Prototype early warning advisory. Check official IMD, GSI, and District Disaster Management (SDRF/NDRF) updates before traveling.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white rounded-lg font-bold text-xs transition-all shadow-md"
                    title="Open pre-filled draft in Gmail web (Zero passwords or server configuration required)"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Send 1-Click via Gmail (Zero Setup)</span>
                  </a>

                  <button
                    type="submit"
                    disabled={isSubmittingEmail}
                    className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold text-xs sm:text-sm transition-colors shadow-md disabled:opacity-50"
                  >
                    <Mail className="w-4 h-4" />
                    {isSubmittingEmail ? 'Dispatching Advisory...' : 'Dispatch Server SMTP'}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-800 bg-slate-950/60 flex items-center justify-between text-xs text-slate-400">
          <span>Phase 5 Modular Feedback & Civil Defense Notification</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
