# 🏔️ LEWS — Landslide Early Warning System

An AI-powered geotechnical early warning framework and interactive GIS corridor monitoring platform designed for the mountainous **East Sikkim NH-10 Highway Corridor**.

> *"Terrain tells you WHERE a landslide can happen; Rainfall and Soil Moisture tell you WHEN it will happen."*

---

## 🌟 Project Highlights

- **11 Physical & Hydrometeorological Features**: Merges high-resolution NASA SRTM 30m DEM terrain extraction (elevation, slope, aspect, curvature) with hydrometeorological scenario modeling (24h rainfall, 3-day and 7-day antecedent saturation, soil moisture, NDVI).
- **Dual-Model ML Architecture**: Machine learning pipeline utilizing Random Forest as primary production classifier (untouched test ROC-AUC = 0.7642, tuned recall = 89.23%) and XGBoost as baseline, calibrated for early civil defense action.
- **FastAPI Real-Time Prediction API**: Endpoints for single-point risk inference and multi-station storm simulation across 15 critical highway sectors.
- **Interactive React & Leaflet Dashboard**: Modern GIS command console featuring real-time risk classification (Green / Yellow / Red), alert feeds, station telemetry, and rainfall slider simulation.

---

## 📁 Repository Structure

```
LEWS/
├── .gitignore                   # Git ignore configuration for Python, Node, OS, and large files
├── README.md                    # Root project documentation
│
├── LEWS1/                       # Backend & ML Core
│   ├── app/                     # FastAPI server and Pydantic schemas
│   │   ├── main.py              # API server with /predict/point and /simulate/storm
│   │   └── schemas.py           # Request & response validation models
│   ├── src/                     # Core ML & Geospatial pipeline modules
│   │   ├── config.py            # Regional bounding box, feature schemas, thresholds
│   │   ├── geospatial_pipeline.py # SRTM DEM extraction & terrain derivations
│   │   ├── train.py             # Validation-tuned spatial ML training pipeline
│   │   └── inference.py         # Real-time risk scoring engine
│   ├── models/                  # Serialized ML artifacts & metadata
│   ├── data/                    # Processed datasets and NASA GLC inventories
│   ├── tests/                   # Backend & pipeline unit/integration tests
│   ├── requirements.txt         # Python dependencies
│   ├── PROJECT_REPORT.md        # Comprehensive 13-section technical report
│   └── README.md                # Detailed backend documentation
│
└── frontend/                    # Web Dashboard (React + TypeScript + Vite)
    ├── src/                     # React application source code
    │   ├── components/          # Map console, Alert feeds, Telemetry panels
    │   └── ...
    ├── package.json             # Frontend dependencies & scripts
    ├── tsconfig.json            # TypeScript configuration
    └── vite.config.ts           # Vite build configuration
```

---

## 🚀 Quick Start Guide

### 1. Prerequisites
- **Python**: 3.10+
- **Node.js**: 18+ and `npm`
- **Git**

---

### 2. Backend Setup (`LEWS1`)

1. Open a terminal and navigate to the backend directory:
   ```bash
   cd LEWS1
   ```

2. Create and activate a Python virtual environment:
   ```bash
   # Windows (PowerShell)
   python -m venv venv
   .\venv\Scripts\Activate.ps1

   # Linux / macOS
   python3 -m venv venv
   source venv/bin/activate
   ```

3. Install required dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Run unit tests to verify installation:
   ```bash
   python -m unittest discover tests
   ```

5. Start the FastAPI development server:
   ```bash
   uvicorn app.main:app --reload --port 8000
   ```
   *Interactive API docs available at: `http://localhost:8000/docs`*

---

### 3. Frontend Setup (`frontend`)

1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Vite development server:
   ```bash
   npm run dev
   ```
   *Dashboard will be live at: `http://localhost:5173`*

---

---

## ⚠️ Engineering Limitations & Model Behavior Note

1. **Simulated Weather vs. Live Telemetry:** Scenario precipitation (24h, 3d, 7d) and soil moisture are simulated stress-tests; live weather utilizes Open-Meteo atmospheric forecasts (~10 km grid cells) rather than physical milestone rain gauges.
2. **Model Non-Monotonicity:** The Random Forest is not monotonic in rainfall. In the current station set the number of High stations is 7 at +50 mm and 6 at +100 mm. Stations whose score is close to a tier threshold can change tier with small input changes.
3. **Live Weather Sensitivity Quirk:** In sensitivity tests, replacing a near-zero live 24-hour rainfall with the training median slightly LOWERS the score at several stations, i.e. the model gives dry weather a slightly higher score than moderate rain at those stations. This is a quirk of the synthetic-label model near the edge of the training range. The cause was not verified. Because of this, Watch in dry weather must not be read as 'terrain only' or as a rainfall effect.
4. **Soil Moisture Scales:** The model was trained on a synthetic soil-moisture scale (5 to 90%). Live soil moisture is Open-Meteo volumetric water content (0-7 cm), so live scores are experimental and may be lower than scenario scores.

## 🛡️ License & Academic Provenance

Developed as part of the CSE276 project coursework on Intelligent Geospatial Disaster Mitigation Systems.
For in-depth mathematical derivations, validation splits, and calibration curves, refer to [PROJECT_REPORT.md](LEWS1/PROJECT_REPORT.md).



---

## 🌐 External Services, API Keys & Usage Policies

| Service | Purpose | Endpoint | Key Required? | Tier / Cost | Usage Policy & Rate Limits |
|:---|:---|:---|:---:|:---:|:---|
| **OSRM Routing** | Highway route polyline & geometry | `http://router.project-osrm.org` | **No** | Free Demo Server | Low-frequency testing / demo use only. Self-hosted OSRM recommended for production. |
| **OSM Nominatim** | Search & geocoding for route endpoints | `https://nominatim.openstreetmap.org` | **No** | Free (OpenStreetMap) | Requires distinct User-Agent header (configured in `.env`), strict max 1 request/sec rate limit, and in-memory LRU caching. |
| **Open-Meteo** | Real-time weather, 72h forecast & ERA5 reanalysis | `https://api.open-meteo.com` | **No** | Free Tier | Academic & non-commercial use (< 10,000 calls/day). Attribution to Open-Meteo under CC BY 4.0. |
| **OpenRouteService** | Optional alternative routing provider | `https://api.openrouteservice.org` | **Optional** | Free Tier (Sign-up) | Free token grants 2,000 requests/day. Configured via `OPENROUTESERVICE_API_KEY` in `.env`. |

---

## 🛣️ Route-Based Early Warning (Phase 3) & Physical Baseline (Phase 4)

- **Route Hazard Analysis:** Given start/destination coordinates, LEWS routes along the road network (via OSRM/Nominatim), samples the path every ~300m in UTM 45N metric space, queries the 30m SRTM DEM dynamically at runtime, scores each point with live meteorological inputs, and segments the route into actionable risk corridors.
- **Physical Rainfall Threshold Baseline:** Compared against the empirical **Caine (1980)** global intensity-duration threshold ($I = 14.82 \cdot D^{-0.39}$, $E_{24\text{h}} = 102.76\text{ mm}$). Evaluated across 80 season-matched events and non-events with 10,000 bootstrap CI iterations. Caine 24h threshold yields 100% specificity but misses 85% of events due to 10 km reanalysis spatial averaging, while multivariate ML models incorporating DEM slope and curvature achieve $0.6425$ ROC-AUC.

---

## 📢 Field Feedback & Emergency Email Dispatch (Phase 5)

- **Ground Hazard Observations:** Commuters, local residents, and BRO/SDRF teams submit geotagged field reports (rockfall, road slumps, all-clear) via `POST /api/v1/feedback`.
- **Emergency Email Notifications:** Automated civil defense advisories with operational risk tiers, probabilities, and action protocols via `POST /api/v1/alerts/email/send`. Safe offline simulation logging when SMTP credentials in `.env` are omitted.
- **Modular Isolation:** Fully decoupled router and modal component that can be toggled on/off in 1 line.

