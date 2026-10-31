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

## 🛡️ License & Academic Provenance

Developed as part of the CSE276 project coursework on Intelligent Geospatial Disaster Mitigation Systems.
For in-depth mathematical derivations, validation splits, and calibration curves, refer to [PROJECT_REPORT.md](file:///LEWS1/PROJECT_REPORT.md).

