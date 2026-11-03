# 🏔️ LEWS — Landslide Early Warning System

**AI-powered landslide risk prediction and susceptibility benchmarking for the East Sikkim NH-10 Highway Corridor**

---

## Overview

LEWS is a machine learning early warning framework designed for mountainous highway corridors. Built around the core geotechnical principle:
> **"Terrain tells you WHERE a landslide can happen; Rainfall and Soil Moisture tell you WHEN it will happen."**

The system operates across **11 physical features**, combines NASA SRTM 30m DEM terrain extraction with hydrometeorological scenario modeling, and features a dual-model comparison (Random Forest primary classifier and XGBoost baseline) optimized for civil defense early warning (targeting validation recall $\ge 85\%$ to reduce missed disaster events).

---

## Regional Coverage & Geometry Provenance

- **SRTM DEM Raster Extent**: Latitude $27.00^\circ\text{N}$ to $28.00^\circ\text{N}$, Longitude $88.00^\circ\text{E}$ to $89.00^\circ\text{E}$ (`N27E088.hgt`, SRTMGL1 30 m grid).
- **Monitored Corridor Bounding Box**: Latitude $27.00^\circ\text{N}$ to $27.45^\circ\text{N}$, Longitude $88.40^\circ\text{E}$ to $88.65^\circ\text{E}$ (East Sikkim NH-10 corridor).
- **Corridor Elevation Range**: Monitored highway stations span from $300.7\text{ m}$ (Rangpo) to $1,987.5\text{ m}$ (Penlong La).
- **Corridor Slope Range**: Monitored highway stations span from $10.6^\circ$ (Rangpo Entry Checkpost) to $39.9^\circ$ (Martam Ridge Cutting).
- **15 Highway Stations**: Latitudes $27.02^\circ\text{N}$ to $27.42^\circ\text{N}$ (Teesta Bazaar $\rightarrow$ Gangtok $\rightarrow$ Dikchu Link). Station coordinates are **approximate** milestone locations hand-selected along chronic failure sectors of NH-10 strictly within DEM coverage. Station terrain values were re-extracted from the SRTM DEM with the same function used for the training table. Station coordinates are approximate, so single-pixel values are sensitive to exact position.
- **Road & River Geometry**: Road alignment is an **approximate** piecewise polyline connecting the 15 station milestones sequentially. River geometry is **approximate** (no vector GIS shapefile loaded; river and road distances are approximate estimates).

---

## 11 Geotechnical Features

| # | Feature Name | Dimension | Source | Role in Slope Instability |
|:-:|:---|:---:|:---:|:---|
| 1 | `elevation_m` | m | **REAL (SRTM DEM)** | Orographic precipitation belts & elevation gradients |
| 2 | `slope_deg` | degrees | **REAL (SRTM DEM)** | Primary gravitational shear stress ($>33^\circ$ colluvium limit) |
| 3 | `aspect_deg` | degrees | **REAL (SRTM DEM)** | Slope orientation facing incoming monsoon fronts |
| 4 | `curvature` | $100/\text{m}$ | **REAL (SRTM DEM)** | Convergent hollows (negative) trap water; ridges (positive) shed water |
| 5 | `dist_to_road_m` | m | Approximate Spatial | Proximity to destabilized highway cut-slopes |
| 6 | `dist_to_river_m` | m | Approximate Spatial | Proximity to Teesta River toe scouring and undercutting |
| 7 | `rain_24h_mm` | mm | Scenario (simulated) | Short-term storm intensity triggering shallow translational slips |
| 8 | `rain_3d_mm` | mm | Scenario (simulated) | 3-day cumulative infiltration saturating topsoil mantle |
| 9 | `rain_7d_mm` | mm | Scenario (simulated) | 7-day antecedent saturation (API) raising groundwater tables |
| 10 | `soil_moisture_pct` | % | Scenario (simulated) | Volumetric moisture; loss of suction at $>75\%$ saturation |
| 11 | `ndvi` | index | Scenario (simulated) | Vegetation root tensile reinforcement (bare cuts $<0.30$) |

---

## Project Structure

```
LEWS1/
├── app/
│   ├── __init__.py
│   ├── main.py                    # FastAPI server (endpoints: /health, /predict/point, /simulate/storm)
│   └── schemas.py                 # Pydantic request/response models (11 features)
├── src/
│   ├── __init__.py
│   ├── config.py                  # Regional BBox, DEM path, 11 features schema, risk thresholds
│   ├── audit_inventory.py         # NASA GLC catalog & DEM spatial precision audit
│   ├── dataset_generator.py       # Re-extracts genuine DEM terrain + generates benchmark CSV
│   ├── geospatial_pipeline.py     # Rasterio reprojection (UTM 45N) and metric gradient derivation
│   ├── real_susceptibility_check.py # Real-data spatial CV benchmark (elevation-matched + bootstrap CI)
│   ├── real_weather_pipeline.py   # ERA5-Land weather extraction pipeline
│   ├── real_weather_season_matched.py # Season-matched benchmark pipeline
│   ├── inference.py               # Runtime inference engine & civil defense protocols
│   └── train.py                   # 3-way split (Train/Val/Test), validation threshold tuning, model selection
├── data/
│   ├── raw/
│   │   ├── dem/                   # N27E088.hgt (SRTM 30m DEM present)
│   │   └── landslide_inventory/   # Global_Landslide_Catalog_Export_rows.csv (present)
│   ├── processed/
│   │   ├── real_inventory_events_audited.csv
│   │   ├── inventory_audit_summary.json
│   │   ├── real_terrain_susceptibility_results.json
│   │   └── real_weather/
│   │       ├── real_events_weather_dataset.csv
│   │       ├── real_weather_benchmark_results.json
│   │       ├── season_matched_benchmark_results.json
│   │       └── season_matched_events_weather_dataset.csv
│   └── dataset.csv                # 1,500 rows with genuine DEM terrain values
├── models/
│   ├── landslide_primary.joblib   # Primary production model artifact (RandomForestClassifier)
│   ├── landslide_rf.joblib        # Random Forest model artifact
│   ├── landslide_xgb.joblib       # XGBoost model artifact (retained for comparison/compatibility)
│   ├── scaler.joblib              # Fitted StandardScaler (11 features)
│   └── landslide_primary.metadata.json # Full metrics, comparison, and provenance sidecar
├── tests/
│   └── test_pipeline.py           # Unit & integration tests
├── generate_report_pdf.py         # 13-section PDF report builder (ReportLab)
├── PROJECT_REPORT.md              # Complete 13-section scientific report
├── PROJECT_REPORT.pdf             # Compiled 13-section formal PDF
├── requirements.txt               # Dependencies (FastAPI, XGBoost, Rasterio, ReportLab, etc.)
└── README.md                      # This file
```

---

## Model Evaluation & Threshold Tuning Protocol

### Validation-Tuned Threshold Methodology
To prevent test leakage, decision thresholds are tuned exclusively on a **separate validation split** (20% of spatial groups) targeting validation recall $\ge 85\%$ to reduce false-negative disasters. The tuned threshold is then evaluated on the **untouched test split** (20% of spatial groups):
- **Train Split**: 900 samples (173 positives, 27 spatial groups)
- **Validation Split**: 297 samples (62 positives, 9 spatial groups)
- **Untouched Test Split**: 303 samples (65 positives, 9 spatial groups)

### Results on Untouched Test Split

| Model | Standard (Th = 0.50) Recall | Standard (Th = 0.50) Precision | Standard (Th = 0.50) F1 | Val-Tuned Threshold | Test Recall at Val-Tuned Th | Test Precision at Val-Tuned Th | Test F1 at Val-Tuned Th | Test ROC-AUC | Primary Selection |
|:---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **Random Forest** | **49.23%** | **57.14%** | **0.5289** | **0.250** | **89.23%** | **27.10%** | **0.4158** | **0.7642** | **Selected Primary** |
| **XGBoost** | 44.62% | 54.72% | 0.4915 | 0.030 | 90.77% | 27.44% | 0.4214 | 0.7421 | Baseline |

> **Selection Rationale:** Random Forest achieves higher untouched test ROC-AUC (0.7642 vs. 0.7421) and higher F1 at 0.50 (0.5289 vs. 0.4915). Its validation-tuned threshold ($0.250$) is operationally meaningful, whereas XGBoost requires an extreme threshold ($0.030$). Random Forest is serialized as `models/landslide_primary.joblib`.

---

## Real-Data Susceptibility Benchmark (NASA GLC $\le 5\text{ km}$ + SRTM DEM)

Using **only verified historical catalog events with spatial accuracy $\le 5\text{ km}$** (40 events) within the DEM tile:
- **Sampling Protocol:** Background candidate points are sampled within DEM Tile N27E088 ($[27.02^\circ\text{N}, 27.98^\circ\text{N}], [88.02^\circ\text{E}, 88.98^\circ\text{E}]$, $\sim 10,000\text{ km}^2$), outside a $1,000\text{ m}$ exclusion buffer from all catalog events.
- **Elevation Distribution & Matched Resampling:**
  - Real Events: $\min = 229.8\text{ m}$, $\text{median} = 1,514.2\text{ m}$, $\max = 3,760.2\text{ m}$
  - Unconstrained Background: $\min = 499.9\text{ m}$, $\text{median} = 3,328.1\text{ m}$, $\max = 6,265.5\text{ m}$ (substantial discrepancy due to unpopulated glaciated summits).
  - Resampled Matched Background: $\min = 392.2\text{ m}$, $\text{median} = 1,607.9\text{ m}$, $\max = 3,728.7\text{ m}$ (constrained to the event elevation range).
- **Validation:** 5-Fold Spatial Cross-Validation (`GroupKFold` on 15 km geographic blocks) with 1,000 bootstrap iterations for 95% confidence intervals.

| Model | Mean Fold ROC-AUC | Overall Spatial CV ROC-AUC | Bootstrap 95% CI | Recall (Th = 0.50) | Precision (Th = 0.50) | Tuned Th (Recall $\ge 85\%$) | Precision at Recall $\ge 85\%$ |
|:---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **Random Forest** | **0.6594** | **0.5788** | **[0.4583, 0.7077]** | 47.50% | 57.58% | **0.395** | **56.67%** |
| **XGBoost** | 0.5112 | 0.4963 | [0.3721, 0.6268] | 47.50% | 57.58% | 0.235 | 48.57% |
| **Logistic Regression** | 0.4926 | 0.4731 | [0.3409, 0.6004] | 47.50% | 48.72% | 0.380 | 54.84% |

**Real Terrain Feature Importances (Random Forest):**
1. `elevation_m`: **32.03%**
2. `curvature`: **26.48%**
3. `slope_deg`: **22.02%**
4. `aspect_deg`: **19.47%**

Run this benchmark anytime:
```bash
python src/real_susceptibility_check.py
```

---

## API Endpoints & Request Specifications

### `/api/v1/predict/point` Behavior
- **Does `/predict/point` look up terrain from the DEM automatically?** **NO.**
- The endpoint requires the caller to send terrain and weather variables in the request JSON body. Missing required fields (`elevation_m`, `slope_deg`, `dist_to_road_m`, `rain_24h_mm`, `rain_3d_mm`, `rain_7d_mm`) return a `422 Unprocessable Entity` error. Optional fields (`aspect_deg`, `curvature`, `dist_to_river_m`, `soil_moisture_pct`, `ndvi`) apply default parameters if omitted.

```bash
curl -X POST http://127.0.0.1:8000/api/v1/predict/point \
  -H "Content-Type: application/json" \
  -d '{
    "latitude": 27.25,
    "longitude": 88.50,
    "elevation_m": 1200.0,
    "slope_deg": 25.0,
    "dist_to_road_m": 50.0,
    "rain_24h_mm": 60.0,
    "rain_3d_mm": 110.0,
    "rain_7d_mm": 150.0
  }'
```

**Actual Response:**
```json
{
  "failure_probability": 0.4532,
  "risk_tier": "YELLOW",
  "advisory_text": "ALERT — Enhanced monitoring activated. Deploy field sensors, notify SDRF/NDRF teams, restrict heavy vehicle movement on vulnerable NH-10 stretches, and prepare contingency diversions. [Example action protocol (illustrative, to be set by local authorities)]",
  "timestamp": "2026-11-02T16:06:37.510109Z"
}
```

---

## Civil Defense Risk Tiers

The Yellow tier boundary starts at **$P = 0.25$**, directly aligning with the validation-tuned alert threshold for disaster recall $\ge 85\%$:

| Tier | Failure Probability ($P$) | Operational Action Protocol |
|:---|:---:|:---|
| 🟢 **GREEN** | $P < 0.25$ | Normal operations. Continue routine geotechnical observation along corridor. |
| 🟡 **YELLOW** | $0.25 \le P < 0.70$ | **WATCH ADVISORY** — Enhanced monitoring active. Restrict heavy traffic, alert SDRF/NDRF squads, mobilize field sensors. (Example: $P = 0.30$ is assigned to YELLOW). |
| 🔴 **RED** | $P \ge 0.70$ | **CRITICAL WARNING** — High failure probability. Close NH-10 segments, evacuate roadside settlements, deploy NDRF response squads. |

### Verified Corridor Storm Simulation Tier Summary (15 Monitored Stations)

| Scenario Delta | Distribution (Green / Yellow / Red) | High Count | Highway Sectors at High Risk (Red) |
| :--- | :---: | :---: | :--- |
| **+0 mm (Baseline)** | **3 / 12 / 0** | **0 High** | None (12 Watch, 3 Normal: Teesta Bazaar, Rangpo, Penlong La) |
| **+50 mm** | **2 / 6 / 7** | **7 High** | 29th Mile, Likhipir, Melli, Mining Ground, Singtam, Martam, Tadong Mile 6 |
| **+100 mm** | **2 / 7 / 6** | **6 High** | 29th Mile, Likhipir, Melli, Mining Ground, Singtam, Martam |
| **+200 mm** | **2 / 7 / 6** | **6 High** | 29th Mile, Likhipir, Melli, Mining Ground, Singtam, Martam |
| **+300 mm** | **2 / 7 / 6** | **6 High** | 29th Mile, Likhipir, Melli, Mining Ground, Singtam, Martam |

---

## Season-Matched Real Weather Benchmark (Exploratory)

To benchmark real-world meteorological discrimination, 40 real landslide events ($\le 5\text{ km}$ location error) were paired with 40 elevation-matched background points sampled within $\pm 15$ days of the same day-of-year across 2007–2017 using Open-Meteo ERA5-Land reanalysis weather:
- **Terrain-Only (Random Forest)**: Spatial CV ROC-AUC = **0.5522** (95% CI: $[0.4227, 0.6813]$)
- **Terrain-Only (Logistic Regression)**: Spatial CV ROC-AUC = **0.6156** (95% CI: $[0.4818, 0.7433]$)
- **Terrain + Real Weather (Random Forest)**: Spatial CV ROC-AUC = **0.5834** (95% CI: $[0.4590, 0.7037]$)
- **Terrain + Real Weather (Logistic Regression)**: Spatial CV ROC-AUC = **0.6425** (95% CI: $[0.5261, 0.7730]$)

*Takeaway:* Spatial AUC settles into the **$0.55\text{–}0.64$** range. This reflects physical reality: coarse $10\text{ km}$ reanalysis weather captures the broad monsoon season, but lacks the sub-kilometer cloudburst intensity needed to distinguish exact slope failure hours from wet non-failure monsoon days in steep topography.

---

## Alert Inbox (Scenario Simulation)

The frontend console includes an **Alert Inbox (scenario simulation)** tab:
- **Simulation Source:** Alerts are generated strictly from backend model results when `/api/v1/simulate/storm` returns, flagging stations whose risk tier escalates.
- **Permanent Honesty Disclaimer:** *"Alerts come from simulated rainfall scenarios, not live sensors. Station coordinates are approximate; verify location on the ground."*
- **Station Actions:** Detail drawer provides 11-feature telemetry breakdown with provenance badges (`DEM`, `Approximate`, `Simulated`), highest values vs corridor median, and direct navigation links (Google Maps and OpenStreetMap).

---

## Engineering Limitations (7 Key Points)

1. **Simulated Weather:** Dynamic precipitation (24h, 3d, 7d) and soil moisture are scenario simulations, not live automated weather station (AWS) or radar nowcasts.
2. **Approximate Geometry:** The 15 highway stations are approximate milestone coordinates; the road polyline is an approximate piecewise line; river distances are approximate manual estimates without a vector GIS shapefile.
3. **40 Real Events with up to 5 km Error:** The historical ground-truth catalog contains only 40 verified events in the entire tile, with spatial uncertainties up to $5\text{ km}$, introducing coordinate noise relative to 30 m DEM cells.
4. **Rule-Based Benchmark Labels:** The 1,500-sample training table assigns ground-truth labels via synthetic geophysical heuristics rather than confirmed field stability sensors.
5. **Uncalibrated Model Scores:** Decision scores produced by Random Forest represent tree vote fractions rather than calibrated posterior probabilities; thresholds ($0.25$ for Yellow, $0.70$ for Red) are research prototypes tuned on validation data.
6. **2000-Era DEM:** SRTM 30m topographic data reflects ground elevation from the February 2000 mission; it does not reflect recent highway widening cuts, benching, or gabion retaining structures.
7. **No Real-Rainfall Validation:** While terrain features were cross-validated on real historical events, the model's dynamic rainfall trigger thresholds have not been validated against multi-season precipitation telemetry during actual slope failure moments.

> **Model Behavior Note on Rainfall Monotonicity & Tier Sensitivity:** The Random Forest is not monotonic in rainfall. In the current station set the number of High stations is 7 at +50 mm and 6 at +100 mm. Stations whose score is close to a tier threshold can change tier with small input changes.
>
> In sensitivity tests, replacing a near-zero live 24-hour rainfall with the training median slightly LOWERS the score at several stations, i.e. the model gives dry weather a slightly higher score than moderate rain at those stations. This is a quirk of the synthetic-label model near the edge of the training range. The cause was not verified. Because of this, Watch in dry weather must not be read as 'terrain only' or as a rainfall effect.


---

## 🌐 External Services, API Keys & Usage Policies

LEWS integrates external geospatial and meteorological services under responsible usage policies:

| Service | Purpose | Provider / Endpoint | Key Required? | Tier / Cost | Verified Usage Policy & Rate Limits |
|:---|:---|:---|:---:|:---:|:---|
| **OSRM Routing** | Highway route polyline & turn-by-turn geometry | `http://router.project-osrm.org` | **No** | Free Demo Server | Low-frequency testing / demo use only. No bulk crawling. Self-hosted OSRM recommended for production. |
| **OSM Nominatim** | Search & geocoding for route endpoints | `https://nominatim.openstreetmap.org` | **No** | Free (OpenStreetMap) | Requires distinct User-Agent header (configured in `.env`), strict max 1 request/sec rate limit, and in-memory LRU caching. |
| **Open-Meteo** | Real-time weather, 72h forecast & ERA5 reanalysis | `https://api.open-meteo.com` | **No** | Free Tier | Permitted for academic & non-commercial use (< 10,000 calls/day). Attribution to Open-Meteo under CC BY 4.0. |
| **OpenRouteService** | Optional alternative routing provider | `https://api.openrouteservice.org` | **Optional** | Free Tier (Sign-up) | Free token grants 2,000 requests/day. Configured via `OPENROUTESERVICE_API_KEY` in `.env`. |

---

## 🛣️ Route-Based Warning & Runtime DEM Sampling (Phase 3)

In addition to discrete station monitoring, LEWS provides an end-to-end **Route Hazard Analysis Engine**:
- **Geocoding & Path Generation:** Users search any origin/destination via Nominatim (with 1.0s throttling and caching). Driving geometry is fetched via OSRM.
- **UTM 45N Path Sampling:** The polyline is converted into metric UTM Zone 45N coordinates and sampled every ~300 meters (up to 200 points).
- **Runtime DEM Feature Extraction:** For every sample point, elevation, slope, aspect, and curvature are queried directly from the cached 30m SRTM DEM grid (`N27E088.hgt`).
- **Dynamic Terrain-Weather Inference:** Each point is paired with live corridor weather and evaluated through the validated Random Forest classifier.
- **Bounding Box Coverage Enforcement:** Samples outside the calibrated East Sikkim monitoring corridor ($27.00^\circ\text{N}$ to $27.45^\circ\text{N}$, $88.40^\circ\text{E}$ to $88.65^\circ\text{E}$) are flagged as `is_outside_coverage = true` and rendered in slate grey (`#94a3b8`) with explicit warnings.
- **Actionable Segment Aggregation:** Adjacent points in the same tier are consolidated into continuous road segments with plain-English driving advisories.

---

## ⚖️ Physical Rainfall Threshold Baseline (Caine 1980 vs. ML) (Phase 4)

To ground machine learning performance against classical empirical landslide hydrology, LEWS benchmarks against the **Caine (1980)** global intensity-duration threshold ($I = 14.82 \cdot D^{-0.39}$, $E_{24\text{h}} = 102.76\text{ mm}$, $E_{72\text{h}} = 201.05\text{ mm}$):

| Approach / Rule | Type | Decision Criterion | ROC-AUC | Bootstrap 95% CI | Sensitivity | Specificity |
|:---|:---|:---|:---:|:---:|:---:|:---:|
| **Caine (1980) 24h Threshold** | Physics Threshold | Rain $\ge 102.8\text{ mm}$ | **0.5750** | [0.5244, 0.6351] | 15.00% | **100.00%** |
| **Caine (1980) 72h Threshold** | Physics Threshold | Rain $\ge 201.1\text{ mm}$ | **0.5000** | [0.5000, 0.5000] | 0.00% | **100.00%** |
| **Rainfall 24h Only** | Univariate Hydrology | Continuous `rain_24h_mm` | **0.5100** | [0.3826, 0.6380] | N/A | N/A |
| **Rainfall 3d Only** | Univariate Hydrology | Continuous `rain_3d_mm` | **0.4756** | [0.3491, 0.6057] | N/A | N/A |
| **Rainfall 7d Only** | Univariate Hydrology | Continuous `rain_7d_mm` | **0.5375** | [0.4098, 0.6654] | N/A | N/A |
| **Soil Moisture Only (0-7 cm)** | Univariate Hydrology | Continuous `soil_moisture_pct` | **0.4613** | [0.3356, 0.5919] | N/A | N/A |
| **Terrain + Weather (LR)** | Multivariate ML | 15 km Spatial CV | **0.6425** | [0.5261, 0.7730] | **70.00%** | 58.62% |
| **Terrain + Weather (RF)** | Multivariate ML | 15 km Spatial CV | **0.5834** | [0.4590, 0.7037] | 65.00% | 53.12% |

### Key Scientific Takeaways
1. **Univariate Rainfall Inadequacy:** In a season-matched post-monsoon / monsoon evaluation ($N=80$), standalone rainfall scores achieve near-random discrimination (24h rain AUC = 0.5100) because both failure and non-failure days receive heavy rainfall.
2. **Caine Threshold Trade-off:** The global Caine 24h threshold yields **100% specificity** on non-events, but exhibits only **15% sensitivity** on ~10 km reanalysis because regional gridded averages smooth out localized convective cloudbursts.
3. **Topographic Value Add:** Multivariate ML models outperform rainfall-only baselines ($0.6425$ vs $0.5100$) because they incorporate topographic slope and curvature, identifying which terrain facets are geotechnically unstable when monsoon precipitation occurs.

---

## 📢 Field Feedback & Emergency Email Dispatch (Phase 5)

Phase 5 introduces ground-truth crowd/engineer reporting and automated civil defense emergency notifications, implemented with **strict architectural modularity** for instant detachment or enabling:

### Capabilities
- **Field Hazard Ingestion (`POST /api/v1/feedback`)**: Ingests active rockfall, road subsidence, tension crack, and all-clear observations from commuters, local residents, and BRO/SDRF patrol officers, saving atomically to `data/processed/feedback/user_reports.jsonl`.
- **Public Feed Query (`GET /api/v1/feedback/list`)**: Exposes recent validated observations for the corridor.
- **Emergency Email Dispatch (`POST /api/v1/alerts/email/send`)**: Dispatches styled HTML/plain-text landslide early warning advisories. Supports direct TLS SMTP when configured in `.env` (`EMAIL_ALERTS_ENABLED=true`), with automatic, non-crashing local simulation logging (`data/processed/alerts/simulated_email_log.jsonl`) when offline or unconfigured.

### Quick Disablement / Removal Procedure
If Phase 5 is not desired, it can be detached in 10 seconds without affecting any core model, pipeline, or route feature:
1. **Backend**: In `app/main.py`, comment out:
   ```python
   # from app.feedback_router import router as feedback_router
   # app.include_router(feedback_router)
   ```
2. **Frontend**: In `frontend/src/components/MapConsole.tsx`, remove the `<button ...>Feedback & Alerts</button>` button and `<FeedbackAlertsModal />`.

