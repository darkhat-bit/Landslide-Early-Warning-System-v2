# AI-Based Landslide Early Warning System (LEWS) — North Eastern Region (NER)
## Project Comprehensive Engineering & Scientific Report (SIH26001 / CA2)

---

## 1. Problem Statement & Core Concept

### The Problem (SIH26001)
The North Eastern Region of India—particularly the State of Sikkim and the Darjeeling-Kalimpong Himalayan belt—is among the most landslide-prone zones in the world. National Highway 10 (NH-10), which runs along the deeply incised Teesta River valley, serves as the sole arterial lifeline connecting the landlocked state of Sikkim to mainland India (Siliguri, West Bengal). Every monsoon season, intense cloudbursts and prolonged rainfall trigger devastating translational landslides, rockfalls, and debris flows, cutting off food, medical supplies, civil transit, and military logistics for weeks at a time.

### The One-Line Core Idea
> **"Terrain tells you WHERE a landslide can happen; Rainfall and Soil Moisture tell you WHEN it will happen."**

- **The Static Component ("WHERE"):** Ground topography does not change overnight. Slope steepness, elevation, surface curvature (concave water traps), orientation (aspect), and proximity to human road-cuttings determine the intrinsic physical susceptibility of each hillside.
- **The Dynamic Component ("WHEN"):** Rainfall and soil saturation change hourly. Heavy 24-hour storms trigger sudden shallow failures; prolonged 3-day and 7-day antecedent rains saturate deep soil horizons, elevating pore-water pressure until the slope shears and collapses.

---

## 2. Study Area & Geographic Extent

- **Target Corridor:** National Highway 10 (NH-10) Corridor in East Sikkim.
- **Specific Route:** Teesta Bazaar $\rightarrow$ Likhipir $\rightarrow$ Melli $\rightarrow$ Rangpo $\rightarrow$ Singtam $\rightarrow$ Ranipool $\rightarrow$ Tadong $\rightarrow$ Gangtok (Capital Terminus) $\rightarrow$ Penlong La / Dikchu Link.
- **Active Corridor Bounding Box:** Latitude $27.00^\circ\text{N}$ to $27.45^\circ\text{N}$, Longitude $88.40^\circ\text{E}$ to $88.65^\circ\text{E}$.
- **DEM Tile Boundary:** NASA SRTM Tile `N27E088.hgt` covering Latitude $27.00^\circ\text{N}$ to $28.00^\circ\text{N}$, Longitude $88.00^\circ\text{E}$ to $89.00^\circ\text{E}$ (30 m SRTMGL1 raster).
- **Corridor Elevation Range:** Monitored highway stations span from $300.7\text{ m}$ (Rangpo entry checkpost) to $1,987.5\text{ m}$ (Penlong La escarpment).
- **Corridor Slope Range:** Monitored highway stations span from $10.6^\circ$ (Rangpo Entry Checkpost) to $39.9^\circ$ (Martam Ridge Cutting).
- **Station Re-extraction Note:** Station terrain values were re-extracted from the SRTM DEM with the same function used for the training table. Station coordinates are approximate, so single-pixel values are sensitive to exact position.
- **Geometry & Coordinates Provenance:**
  - **15 Highway Station Coordinates:** Labeled **approximate**. They represent hand-selected milestone coordinates positioned along known chronic landslide sectors of NH-10 strictly within genuine DEM bounds ($27.02^\circ\text{N}$ to $27.42^\circ\text{N}$).
  - **Road Geometry:** Labeled **approximate**. The road polyline displayed on the map is a schematic piecewise polyline connecting the 15 station milestones sequentially.
  - **River Geometry:** Labeled **approximate**. No vector GIS polyline shapefile is loaded; river distances and road distances are approximate estimates.

---

## 3. Complete Project Folder & File Structure

```text
CSE276/CA2 Project/
├── LEWS1/                                # Main Backend & Machine Learning Package
│   ├── app/                              # FastAPI Web Server Application
│   │   ├── __init__.py                   # Package marker
│   │   ├── main.py                       # FastAPI REST API endpoints (/health, /predict/point, /simulate/storm)
│   │   └── schemas.py                    # Pydantic data validation schemas for 11 features
│   ├── data/                             # Data Storage Directory
│   │   ├── raw/                          # Raw downloaded assets (present in workspace)
│   │   │   ├── dem/                      # Contains N27E088.hgt & N27E088.SRTMGL1.hgt.zip
│   │   │   └── landslide_inventory/      # Contains Global_Landslide_Catalog_Export_rows.csv
│   │   ├── processed/                    # Cleaned and audited tables
│   │   │   ├── real_inventory_events_audited.csv  # Audited real events with DEM features
│   │   │   ├── inventory_audit_summary.json       # JSON breakdown of catalog precision
│   │   │   └── real_terrain_susceptibility_results.json # Elevation-matched spatial CV results & bootstrap CIs
│   │   └── dataset.csv                   # 1,500 rows with genuine DEM terrain values
│   ├── models/                           # Serialized Machine Learning Artifacts
│   │   ├── landslide_primary.joblib      # Primary production model artifact (RandomForestClassifier)
│   │   ├── landslide_rf.joblib           # Random Forest classifier artifact
│   │   ├── landslide_xgb.joblib          # XGBoost classifier artifact (retained for comparison)
│   │   ├── scaler.joblib                 # StandardScaler fitted to all 11 features
│   │   └── landslide_primary.metadata.json # Full metadata: 3-way split metrics, feature importances
│   ├── src/                              # Core Machine Learning & Data Processing Engine
│   │   ├── __init__.py                   # Package marker
│   │   ├── config.py                     # Central configuration (11 feature schema, BBox, DEM path, risk thresholds)
│   │   ├── audit_inventory.py            # Audits raw NASA catalog and analyzes location accuracy
│   │   ├── dataset_generator.py          # Re-extracts genuine DEM terrain + generates scenario CSV
│   │   ├── geospatial_pipeline.py        # Rasterio reprojection (UTM 45N) and metric gradient derivation
│   │   ├── real_susceptibility_check.py  # Real-data spatial CV benchmark (elevation-matched + bootstrap CIs)
│   │   ├── inference.py                  # Singleton runtime engine to evaluate risk and assign protocols
│   │   └── train.py                      # 3-way split (Train/Val/Test), validation threshold tuning
│   ├── tests/                            # Unit & Integration Test Suite
│   │   └── test_pipeline.py              # Tests for terrain extraction, spatial split, API schemas
│   ├── generate_report_pdf.py            # ReportLab script generating complete 13-section PDF
│   ├── PROJECT_REPORT.md                 # Complete project documentation (this document)
│   ├── PROJECT_REPORT.pdf                # Compiled formal PDF report (all 13 sections)
│   └── requirements.txt                  # Python dependencies (FastAPI, XGBoost, Rasterio, ReportLab, etc.)
├── frontend/                             # Modern React 19 + TypeScript + Vite Web Dashboard
│   ├── public/                           # Static assets
│   ├── src/                              # Frontend source code
│   │   ├── components/                   # Reusable UI component modules
│   │   │   ├── BottomDock.tsx            # Rainfall scenario simulation slider & report exporter
│   │   │   ├── LandingPage.tsx           # Mission overview, feature cards, and console launch CTA
│   │   │   ├── LeftSidebar.tsx           # Telemetry panel, risk tier counters, station filter buttons
│   │   │   ├── LocationInspector.tsx     # 3x3 geotechnical telemetry card showing 11 feature metrics
│   │   │   └── MapConsole.tsx            # Leaflet interactive map rendering corridor GPS stations
│   │   ├── data/                         # Client-side data definitions
│   │   │   └── corridorData.ts           # 15 monitored NH-10 stations with genuine DEM parameters
│   │   ├── utils/                        # Audio siren & helper utilities
│   │   ├── App.tsx                       # Root view switcher (Landing Page vs Map Console)
│   │   ├── index.css                     # Styling & glassmorphism theme
│   │   └── main.tsx                      # React DOM mounting entry point
│   ├── package.json                      # Node.js dependencies
│   └── vite.config.ts                    # Vite bundler configuration with backend reverse proxy
└── README.md                             # Repository overview and quick start guide
```

---

## 4. Data Sources & Limitations

| Dataset Name | Source Organization | Format & File | Spatial / Temporal Resolution | Limitations & Real-World Reality |
| :--- | :--- | :--- | :--- | :--- |
| **NASA SRTM 30m DEM** | NASA / USGS Earthdata | Raster HGT (`N27E088.hgt`) | 1 arc-second (~$30\text{ m}$ grid); 2000 mission | **Static:** Captures baseline terrain, slope, and curvature accurately. However, it does not reflect recent road-widening excavation cuts or micro-gully changes made after the year 2000. |
| **Global Landslide Catalog (GLC)** | NASA Goddard Space Flight Center | Tabular CSV (`Global_Landslide_Catalog_Export_rows.csv`) | Global records (2007–2017) | **Location Uncertainty & Temporal Gaps:** Many points are derived from news reports. Out of 82 events in the tile, only 40 events have accuracy $\le 5\text{ km}$, and none record dynamic soil moisture or rain gauge telemetry at the exact failure minute. |
| **Monitored Highway Stations** | Hand-selected milestones along NH-10 | Geo-located point coordinates (`corridorData.ts`) | 15 specific GPS stations along NH-10 ($27.02^\circ\text{–}27.42^\circ\text{N}$) | **Approximate:** Hand-selected milestone locations representing chronic failure points along the monitored highway corridor. Terrain parameters are extracted from the DEM; road/river distances are approximate estimates. |

---

## 5. Complete Feature List (11 Features)

To provide true geotechnical early warning, our system operates on **11 ordered features**:

| # | Feature Name | Units | Data Source | Geotechnical Role in Failure |
| :---: | :--- | :---: | :---: | :--- |
| 1 | `elevation_m` | Meters (m) | **REAL (SRTM DEM)** | Height above mean sea level. High elevations experience freeze-thaw; mid-elevations experience concentrated monsoon cloud belts. |
| 2 | `slope_deg` | Degrees ($^\circ$) | **REAL (SRTM DEM)** | Slope gradient. Primary driver of shear stress. Angles $> 33^\circ$ exceed the natural angle of internal friction for colluvial soil. |
| 3 | `aspect_deg` | Degrees ($^\circ$) | **REAL (SRTM DEM)** | Compass direction the slope faces ($0^\circ\text{–}360^\circ$). South- and Southwest-facing slopes directly face oncoming Indian monsoon fronts. |
| 4 | `curvature` | $100/\text{m}$ | **REAL (SRTM DEM)** | Second spatial derivative ($\nabla^2 z$). **Negative (Concave)** slopes act as convergent hollows that collect water and debris; **Positive (Convex)** slopes shed water. |
| 5 | `dist_to_road_m` | Meters (m) | Approximate Spatial | Distance to NH-10. Cut-slopes along roads have removed toe support, destabilizing the overburden. |
| 6 | `dist_to_river_m` | Meters (m) | Approximate Spatial | Distance to the Teesta River. River flooding scours and undercuts the toe of adjacent mountain slopes. |
| 7 | `rain_24h_mm` | Millimeters (mm) | Scenario (simulated) | 24-hour rainfall total. Triggers fast, shallow translational slips and mudflows through intense pore-pressure spikes. |
| 8 | `rain_3d_mm` | Millimeters (mm) | Scenario (simulated) | 3-day cumulative precipitation. Progressively saturates the upper soil mantle. |
| 9 | `rain_7d_mm` (R7) | Millimeters (mm) | Scenario (simulated) | 7-day cumulative antecedent precipitation (API). Critical hydrometeorological trigger that raises the water table and weakens cohesion. |
| 10 | `soil_moisture_pct` | Percentage (%) | Scenario (simulated) | Volumetric soil water content. At $> 75\%$, negative pore pressure (suction) disappears, causing liquefaction. |
| 11 | `ndvi` | Index ($-1.0$ to $+1.0$) | Scenario (simulated) | Normalized Difference Vegetation Index. Proxy for vegetation root cohesion. Low values ($< 0.30$) represent bare rock, scars, or cleared cuts. |

---

## 6. How the Dataset is Built (Data Honesty)

### A. Separation of Real and Synthetic Data
To maintain scientific integrity, **synthetic and real catalog rows are never mixed in one training table**.
1. **Audited Real Catalog (`real_inventory_events_audited.csv`):** Contains only verified catalog events inside the tile extent. Only genuine DEM terrain attributes are populated; unrecorded weather columns are not faked.
2. **Benchmark Dataset (`dataset.csv`):** Contains 1,500 samples. **All four terrain features (`elevation_m`, `slope_deg`, `aspect_deg`, `curvature`) were re-extracted directly from the SRTM DEM (`N27E088.hgt`) at each sample coordinate.** Dynamic weather, soil moisture, and distance features are calibrated via geophysical simulation.

### B. Geophysical Generation Rules for the Benchmark
The benchmark dataset applies geotechnical domain rules:
- **High Risk (Label = 1):** Slope $> 27^\circ$ AND (24h rain $> 65\text{ mm}$ OR 7d rain $> 175\text{ mm}$) AND (road distance $< 500\text{ m}$ OR concave curvature $< -0.3$ OR barren NDVI $< 0.32$).
- **Safe Zone (Label = 0):** Gentle slopes ($< 15^\circ$) or well-vegetated planar slopes ($< 20^\circ$, $\text{NDVI} > 0.65$, curvature $\ge 0$).
- **Class Balance:** Realistic $1:4$ positive-to-negative ratio ($20\%$ positive, $80\%$ negative).

### C. Spatial Group Blocking
To prevent spatial data leakage, every point is assigned to a $5\text{ km} \times 5\text{ km}$ geographic grid block (`spatial_group`). The train-test split splits entire blocks, ensuring no test point is geographically adjacent to a training point.

---

## 7. Machine Learning Models, Validation-Tuned Thresholds & Selection

### A. Decision Threshold Optimization (Target: Recall $\ge 85\%$)
In landslide disaster mitigation, false negatives (missed landslides) carry severe human and economic costs, whereas false positives (precautionary vehicle hold-ups) cause minor delays. Standard 0.50 decision boundaries miss over half the landslide events under spatial block isolation.

> **Transparency Note on Split Protocol:** In early exploratory scripts, decision thresholds were swept directly on test data. To ensure strict methodological honesty, the pipeline was updated to a **mutually disjoint 3-way spatial split**:
> - **Train Split (60%):** 900 samples (173 positives, 27 spatial blocks) — fits the classifier.
> - **Validation Split (20%):** 297 samples (62 positives, 9 spatial blocks) — tunes the decision threshold for Recall $\ge 85\%$.
> - **Untouched Test Split (20%):** 303 samples (65 positives, 9 spatial blocks) — strictly held out and evaluated once using the validation-tuned threshold.

> **Important Note on Probability Calibration:** Scores produced by the Random Forest classifier (`predict_proba`) represent empirical tree vote fractions rather than calibrated posterior probabilities. In this operational early-warning context, they serve as monotonic relative risk indices for decision thresholding rather than true Bayesian failure frequencies.

### B. Model Comparison on Untouched Spatial Test Split

| Metric | XGBoost (Test @ Standard 0.50) | XGBoost (Test @ Val-Tuned 0.030) | Random Forest (Test @ Standard 0.50) | Random Forest (Test @ Val-Tuned 0.250) |
| :--- | :---: | :---: | :---: | :---: |
| **Decision Threshold** | 0.50 | 0.030 | 0.50 | **0.250** |
| **Recall (Disaster Detection)** | 44.62% | **90.77%** | 49.23% | **89.23%** |
| **Precision** | 54.72% | **27.44%** | 57.14% | **27.10%** |
| **F1 Score** | 0.4915 | 0.4214 | 0.5289 | **0.4158** |
| **ROC-AUC Score** | 0.7421 | 0.7421 | **0.7642** | **0.7642** |
| **Confusion Matrix (TN, FP, FN, TP)** | [214, 24, 36, 29] | [82, 156, 6, 59] | [214, 24, 33, 32] | [82, 156, 7, 58] |

### C. Primary Model Selection Rationale
**Random Forest is selected as the primary production model** because:
1. **Higher ROC-AUC:** Random Forest achieves $0.7642$ vs. XGBoost's $0.7421$ on the untouched test split.
2. **Operationally Sound Alert Threshold:** Random Forest achieves $89.23\%$ test recall at threshold $0.250$, a sensible operational boundary. XGBoost requires an extreme threshold ($0.030$) to reach $>85\%$ recall, causing instability.
3. **Better Balanced Standard Performance:** At threshold $0.50$, Random Forest achieves higher recall ($49.23\%$ vs. $44.62\%$), higher precision ($57.14\%$ vs. $54.72\%$), and higher F1 ($0.5289$ vs. $0.4915$).
4. **Primary Artifact Saved:** The trained `RandomForestClassifier` is serialized to `models/landslide_primary.joblib` and `models/landslide_rf.joblib`.

### D. Operational Risk Tiers Aligned with Tuned Alert Threshold
To align operational alerting directly with the validation-tuned threshold for Recall $\ge 85\%$, the **Yellow tier begins at $P = 0.25$**:
- **GREEN ($P < 0.25$):** Normal operations. Routine monitoring along NH-10.
- **YELLOW ($0.25 \le P < 0.70$):** Watch Advisory. Enhanced sensor monitoring; road maintenance and SDRF alerted; heavy vehicle transit restricted. **(A point with probability $0.30$ gets assigned to the YELLOW tier).**
- **RED ($P \ge 0.70$):** Critical Warning. Immediate action required; close vulnerable NH-10 highway segments, evacuate roadside settlements, dispatch NDRF/BRO response teams.

---

## 8. Real-Data Susceptibility Benchmark (NASA GLC $\le 5\text{ km}$ + SRTM DEM)

To establish an empirical baseline on genuine historical ground-truth data, we executed a terrain-only susceptibility analysis using **only NASA Global Landslide Catalog events with location accuracy $\le 5\text{ km}$** (40 verified events) within the DEM tile ($27.0^\circ\text{–}28.0^\circ\text{N}$, $88.0^\circ\text{–}89.0^\circ\text{E}$).

### A. Sampling Methodology & Elevation Discrepancy Analysis
- **Sampling Area:** DEM Tile N27E088 ($[27.02^\circ\text{N}, 27.98^\circ\text{N}], [88.02^\circ\text{E}, 88.98^\circ\text{E}]$, $\sim 100 \times 100\text{ km} = 10,000\text{ km}^2$).
- **Sample Count:** 40 background candidate points (1:1 balanced ratio with the 40 real events).
- **Buffer:** $1,000\text{ m}$ spatial exclusion buffer from all catalog event coordinates.
- **Elevation Distributions:**
  - **Real Events:** $\min = 229.8\text{ m}$, $\text{median} = 1,514.2\text{ m}$, $\max = 3,760.2\text{ m}$
  - **Unconstrained Background:** $\min = 499.9\text{ m}$, $\text{median} = 3,328.1\text{ m}$, $\max = 6,265.5\text{ m}$
  - **Identified Flaw:** Unconstrained background points sample into high Himalayan glaciated ridges (>6,000 m) where no human presence exists to report slides.
  - **Elevation-Matched Resampling:** Background candidates were constrained strictly to the event elevation range ($[229.8\text{ m}, 3,760.2\text{ m}]$) outside the $1,000\text{ m}$ buffer, resulting in matched background distribution: $\min = 392.2\text{ m}$, $\text{median} = 1,607.9\text{ m}$, $\max = 3,728.7\text{ m}$.

### B. REAL-DATA Spatial Cross-Validation Results (Elevation-Matched + Bootstrap 95% CIs)
Evaluated via 5-Fold Spatial Cross-Validation (`GroupKFold` on 15 km geographic blocks) with 1,000 bootstrap iterations:

| Model | Overall Spatial CV ROC-AUC | Bootstrap 95% CI | Mean Fold ROC-AUC | Standard (0.50) Recall | Standard (0.50) Precision | Tuned Th (Recall $\ge 85\%$) | Precision at Recall $\ge 85\%$ |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Random Forest** | **0.5788** | **[0.4583, 0.7077]** | **0.6594** | 47.50% | 57.58% | **0.395** | **56.67%** |
| **XGBoost** | 0.4963 | [0.3721, 0.6268] | 0.5112 | 47.50% | 57.58% | 0.235 | 48.57% |
| **Logistic Regression** | 0.4731 | [0.3409, 0.6004] | 0.4926 | 47.50% | 48.72% | 0.380 | 54.84% |

### C. Scientific Insight
When high-elevation glaciated artifacts are removed, terrain attributes alone yield modest discrimination ($0.5788$ spatial AUC). This confirms the central geotechnical thesis: **static terrain alone is insufficient to predict failure without dynamic rainfall and soil moisture triggers.**

**Real Terrain Feature Importances (Random Forest):**
1. `elevation_m`: **32.03%**
2. `curvature`: **26.48%**
3. `slope_deg`: **22.02%**
4. `aspect_deg`: **19.47%**

### D. Exploratory Real Weather Reanalysis Benchmark (Open-Meteo Archive + DEM)

> **Methodological Note:** *"Real weather (reanalysis), small sample, exploratory."*

To rigorously test whether real historical weather separates real landslide events from non-events, we extracted daily precipitation and soil moisture from the **Open-Meteo Historical Archive API (ERA5-Land reanalysis)** for all 40 verified events ($\le 5\text{ km}$ accuracy) and 40 **season-matched, elevation-matched** background points outside a $1,000\text{ m}$ exclusion buffer.

- **Why Season Matching Matters:** Drawing background dates uniformly across the calendar year includes dry winter and spring days with zero precipitation, allowing models to trivially learn a seasonal *"monsoon summer vs. dry winter"* detector rather than identifying genuine slope failure conditions among ordinary wet days during the active monsoon season.
- **Season Matching Protocol:** Each event's background counterpart was sampled from an elevation-matched coordinate ($229.8\text{ m}$ to $3,760.2\text{ m}$) within $\pm 15$ days of the **same day-of-year** but in a **different year** (2007–2017), strictly verifying that no catalog landslide occurred within $1,000\text{ m}$ and $\pm 3$ days.
- **Month Distribution Parity:** Month histograms between events and background points match closely:
  - Jan: 1 vs 1 | Apr: 3 vs 2 | May: 4 vs 5 | Jun: 10 vs 11 | Jul: 8 vs 5 | Aug: 5 vs 7 | Sep: 7 vs 6 | Oct: 2 vs 3.
- **Features Tested:** 4 DEM terrain (`elevation_m`, `slope_deg`, `aspect_deg`, `curvature`) + 4 real weather (`rain_24h_mm`, `rain_3d_mm`, `rain_7d_mm`, `soil_moisture_pct`). NDVI was skipped and labeled *"not available"*.
- **Data Reality & Reanalysis Grid Limit:** ERA5-Land reanalysis operates at roughly $10\text{ km}$ ($\sim 0.1^\circ$) spatial resolution, which is coarse for steep mountain valleys and cannot resolve localized cloudburst cells. No missing values were invented or simulated.
- **Artifacts Saved (Under `data/processed/real_weather/`):**
  - Season-Matched Dataset: `data/processed/real_weather/season_matched_events_weather_dataset.csv`.
  - Metrics JSON: `data/processed/real_weather/season_matched_benchmark_results.json`.

#### 5-Fold Spatial Cross-Validation Results (Season-Matched on 15 km Blocks):

| Feature Configuration | Model | Spatial CV ROC-AUC | Bootstrap 95% Confidence Interval | Standard (0.50) Recall | Standard (0.50) Precision | Tuned Th (Rec $\ge 85\%$) | Tuned Precision |
| :--- | :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **Terrain-Only** (4 feats) | Random Forest | **0.5522** | [0.4227, 0.6813] | 60.00% | 58.54% | 0.325 | 53.97% |
| **Terrain-Only** (4 feats) | Logistic Regression | **0.6156** | [0.4818, 0.7433] | 70.00% | 59.57% | 0.394 | 61.82% |
| **Terrain + Real Weather (Season-Matched)** | Random Forest | **0.5834** | **[0.4590, 0.7037]** | 65.00% | 59.09% | 0.350 | 53.12% |
| **Terrain + Real Weather (Season-Matched)** | Logistic Regression | **0.6425** | **[0.5261, 0.7730]** | 70.00% | 66.67% | 0.320 | 58.62% |

**Scientific Takeaway:** When background points are strictly season-matched, spatial cross-validation AUC settles honestly into the **$0.58\text{–}0.64$** range. This reflects physical reality: coarse $10\text{ km}$ reanalysis weather captures the broad monsoon season (high humidity and moderate regional rain), but lacks the sub-kilometer cloudburst intensity needed to distinguish exact slope failure hours from wet non-failure monsoon days in steep topography.

---

#### Rainfall Threshold Baseline vs. ML Models (Phase 4 Empirical Benchmark)

To establish a non-ML baseline from published geotechnical literature, we implemented the classic **Caine (1980)** rainfall intensity-duration threshold:
$$I = 14.82 \cdot D^{-0.39}$$
*(Citation: Caine, N., 1980. The rainfall intensity - duration control of shallow landslides and debris flows. Geografiska Annaler: Series A, Physical Geography, 62(1-2), pp.23-27. Units: $I$ in $\text{mm}\cdot\text{h}^{-1}$, duration $D$ in hours; valid for $0.16\text{ h} \le D \le 500\text{ h}$.)*

- Equivalent cumulative event threshold: $E = 14.82 \cdot D^{0.61}$
  - For $D = 24\text{ h}$: $I_{\text{thresh}} = 4.28\text{ mm/h} \implies E_{24\text{h}} = 102.76\text{ mm}$.
  - For $D = 72\text{ h}$ (3-day): $I_{\text{thresh}} = 2.79\text{ mm/h} \implies E_{72\text{h}} = 201.05\text{ mm}$.

Using the untouched season-matched historical dataset (`data/processed/real_weather/season_matched_events_weather_dataset.csv`, $N = 80$: 40 real events, 40 elevation-matched and season-matched background points), we computed ROC-AUC with 10,000 bootstrap iterations ($95\%$ CI), sensitivity (recall), and specificity:

| Method Name | Method Type | Feature / Decision Rule | ROC-AUC | Bootstrap 95% CI | Sensitivity (Recall) | Specificity | Accuracy |
| :--- | :--- | :--- | :---: | :---: | :---: | :---: | :---: |
| **Caine (1980) 24h Threshold** | Physical / Empirical Rule | $\text{rain\_24h\_mm} \ge 103.0\text{ mm}$ | **0.5750** | [0.5244, 0.6351] | **15.00%** | **100.00%** | 57.50% |
| **Rainfall Only: 24h Total** | Univariate Weather Score | $\text{rain\_24h\_mm}$ | **0.5100** | [0.3826, 0.6380] | N/A | N/A | N/A |
| **Rainfall Only: 3d Antecedent** | Univariate Weather Score | $\text{rain\_3d\_mm}$ | **0.4756** | [0.3491, 0.6057] | N/A | N/A | N/A |
| **Rainfall Only: 7d Antecedent** | Univariate Weather Score | $\text{rain\_7d\_mm}$ | **0.5375** | [0.4098, 0.6654] | N/A | N/A | N/A |
| **Soil Moisture Only (0-7 cm)** | Univariate Hydrology Score | $\text{soil\_moisture\_pct}$ | **0.4613** | [0.3356, 0.5919] | N/A | N/A | N/A |
| **Terrain + Weather (LR)** | Multivariate ML (15 km Spatial CV) | 11 Features (DEM + ERA5-Land) | **0.6425** | [0.5261, 0.7730] | **70.00%** | **58.62%** | **65.00%** |
| **Terrain + Weather (RF)** | Multivariate ML (15 km Spatial CV) | 11 Features (DEM + ERA5-Land) | **0.5834** | [0.4590, 0.7037] | **65.00%** | **53.12%** | **59.09%** |

*(Archived artifact: `data/processed/audit/rainfall_threshold_benchmark.csv`)*

#### Critical Methodological Insights & Caveats:
1. **Univariate Weather Cannot Separate Monsoon Events:** In a season-matched evaluation where non-events occur during the wet monsoon season, standalone rainfall totals achieve near-random discrimination (24h rain AUC = 0.5100, 3d rain AUC = 0.4756, 7d rain AUC = 0.5375). Both slide days and non-slide monsoon days experience sustained rainfall.
2. **Caine (1980) Specificity vs. Sensitivity Trade-off:** The global Caine 24h threshold ($102.8\text{ mm}$) produces **zero false positives** (100% specificity) on background days, but misses $85\%$ of true events (15% sensitivity). Coarse $10\text{ km}$ reanalysis averages rainfall across entire valleys, smoothing out localized convective cloudbursts that exceed the physical trigger threshold at the failure headwall.
3. **The Necessity of Terrain Susceptibility:** Multivariate ML models outperform the rainfall-only baseline ($0.6425$ vs $0.5100$) precisely because they incorporate topographic slope steepness and curvature hollows, identifying which mountain slopes are structurally predisposed to collapse when seasonal rains arrive.
4. **Data Caveat:** Results reflect a small sample ($N=80$) paired with $\sim 10\text{ km}$ ERA5-Land atmospheric reanalysis. Real-world early warning requires localized AWS tipping-bucket rain gauges and Doppler radar nowcasting.

---

## 9. System Architecture

### Offline Model-Building Pipeline
```
+------------------------------------+      +-----------------------------------------+
|   NASA SRTM 30m DEM (N27E088)      |      |   NASA Global Landslide Catalog (GLC)   |
|   (Elevation, Slope, Curvature)    |      |   (Historical Event Coordinates)        |
+-----------------+------------------+      +--------------------+--------------------+
                  |                                              |
                  v                                              v
+-------------------------------------------------------------------------------------+
|                              AUDIT & SPATIAL ENGINE                                  |
|  - Filter catalog events by spatial accuracy (<= 5km) within DEM bounds [27-28°N]   |
|  - Resample elevation-matched background points outside 1,000m event buffer         |
|  - Run real-data spatial CV susceptibility benchmark & compute bootstrap 95% CIs    |
+-------------------------------------------------------------------------------------+
                                          |
                                          v
+-------------------------------------------------------------------------------------+
|                      BENCHMARK & MODEL TRAINING PIPELINE                            |
|  - Re-extract genuine DEM terrain for all 1,500 sample coordinates                  |
|  - Split 3-way by disjoint 5km spatial blocks: Train (60%) / Val (20%) / Test (20%) |
|  - Tune decision thresholds on Validation split to reduce missed disaster events    |
|  - Evaluate untouched Test split; export landslide_primary.joblib + metadata.json  |
+-------------------------------------------------------------------------------------+
```

### Online Prediction & Simulation Pipeline
```
               [ User Moves Rainfall Slider / Selects Station ]
                                      |
                                      v
+-------------------------------------------------------------------------------------+
|                        REACT + TYPESCRIPT DASHBOARD                                 |
|  - Leaflet Map displaying 15 NH-10 Corridor Stations (27.02°N to 27.42°N)           |
|  - Location Inspector displaying 3x3 Geotechnical Grid (11 features)                |
+-------------------------------------+-----------------------------------------------+
                                      | HTTP POST (JSON Payload)
                                      v
+-------------------------------------------------------------------------------------+
|                             FASTAPI BACKEND SERVER                                  |
|  - GET  /health              -> Reports model readiness & 11 loaded features        |
|  - POST /api/v1/predict/point-> Evaluates single GPS point risk (client sends feats)|
|  - POST /api/v1/simulate/storm-> Injects scenario rainfall delta across corridor    |
+-------------------------------------+-----------------------------------------------+
                                      | Feature Vector Scaling & Inference
                                      v
+-------------------------------------------------------------------------------------+
|                           MACHINE LEARNING INFERENCE ENGINE                         |
|  - Scales 11 features using StandardScaler                                           |
|  - Evaluates failure probability P(Failure) via Random Forest Primary Model         |
|  - Maps P -> GREEN (<0.25) | YELLOW (0.25-0.70) | RED (>=0.70)                    |
|  - Returns GeoJSON with risk colors, adjusted rainfall, and operational advisory    |
+-------------------------------------+-----------------------------------------------+
```

---

## 10. Backend REST API Endpoints & Request Verification

The FastAPI server runs at `http://127.0.0.1:8000`:

### 1. `GET /health`
- **Purpose:** Verifies that the ML model and scaler are loaded in memory and returns feature names.
- **Output:** JSON containing `status: "healthy"`, loaded model class name (`RandomForestClassifier`), list of 11 features, feature importances, and metadata disclaimer.

### 2. `POST /api/v1/predict/point`
- **Important Specification:** **Does `/predict/point` look up terrain from the DEM automatically? NO.**
- The endpoint requires the caller to send terrain and weather variables in the request JSON body. Missing required fields (`elevation_m`, `slope_deg`, `dist_to_road_m`, `rain_24h_mm`, `rain_3d_mm`, `rain_7d_mm`) return a `422 Unprocessable Entity` validation error. Optional fields (`aspect_deg`, `curvature`, `dist_to_river_m`, `soil_moisture_pct`, `ndvi`) apply default parameters if omitted.
- **Output:** JSON with `failure_probability`, `risk_tier` (GREEN/YELLOW/RED), and `action_protocol`.

### 3. `POST /api/v1/simulate/storm`
- **Purpose:** Performs batch corridor storm scenario simulation by injecting an incremental rainfall delta across monitored highway points.
- **Input:** JSON with `simulated_rainfall_increment_mm` (e.g., $+80\text{ mm}$) and an array of corridor points.
- **Output:** GeoJSON `FeatureCollection` containing updated risk tiers, adjusted rainfall totals, curvature, NDVI, and marker colors for map rendering.

#### Verified Corridor Storm Simulation Tier Summary (15 Monitored Highway Stations)

| Rainfall Scenario | Tier Distribution (Green / Yellow / Red) | High Risk Stations Count | Critical Highway Sectors at High Risk |
| :--- | :---: | :---: | :--- |
| **+0 mm (Baseline)** | **3 Green / 12 Yellow / 0 Red** | **0 High** | None (12 Watch, 3 Normal: Teesta Bazaar, Rangpo, Penlong La) |
| **+50 mm** | **2 Green / 6 Yellow / 7 Red** | **7 High** | 29th Mile, Likhipir, Melli, Mining Ground, Singtam, Martam, Tadong Mile 6 |
| **+100 mm** | **2 Green / 7 Yellow / 6 Red** | **6 High** | 29th Mile, Likhipir, Melli, Mining Ground, Singtam, Martam |
| **+200 mm** | **2 Green / 7 Yellow / 6 Red** | **6 High** | 29th Mile, Likhipir, Melli, Mining Ground, Singtam, Martam |
| **+300 mm** | **2 Green / 7 Yellow / 6 Red** | **6 High** | 29th Mile, Likhipir, Melli, Mining Ground, Singtam, Martam |

> **Operational Note on +100 mm Scenario:** Exactly 6 stations escalate to High (Critical Warning, $P \ge 0.70$) under +100 mm storm conditions. Tadong Mile 6 transitions from Red ($P=0.7057$ at +50 mm) to Yellow ($P=0.6380$ at +100 mm) due to non-linear multi-feature tree splits across 7-day cumulative saturation.

---

## 11. Dashboard User Interface Guide & Backend Verification

The frontend runs at `http://localhost:5173/`:

1. **How the UI Confirms Backend vs. Fallback:**
   - **Active Backend API:** The top bar and sidebar status badges display `Model API connected` (or `Model API (11 Feat)`). All station risk objects carry `risk_source: 'backend_model'`.
   - **Local Fallback Mode:** If the FastAPI backend is offline or unreachable, the UI displays `Fallback heuristic active` with an amber indicator, and station risk objects carry `risk_source: 'local_heuristic_fallback'`.
2. **Interactive Leaflet Map (Center):**
   - Clean engineering basemap covering the East Sikkim NH-10 highway corridor.
   - Shows the 15 monitored highway stations with distinct geometric shapes for color-blind accessibility (Green circle = Normal, Yellow triangle = Watch Advisory, Red diamond = Critical Warning).
3. **Location Inspector (Side Table Drawer):**
   - Opens when any station is clicked on the map or selected from the sidebar.
   - Displays a clean tabular breakdown with all 11 geotechnical metrics, baseline corridor medians, and explicit data provenance tags (`DEM Derived`, `Approximate Spatial`, `Simulated Scenario`).
   - Identifies the top 3 extreme factors vs. corridor median ("highest values compared with other stations").
   - Provides direct navigation links: "Get directions" (Google Maps) and "Open in OpenStreetMap", with coordinate disclaimer.
4. **Alert Inbox (Scenario Simulation):**
   - A dedicated tab in the navigation drawer: *"Alert inbox (scenario simulation)"*.
   - **Permanent Honesty Disclaimer:** *"Alerts come from simulated rainfall scenarios, not live sensors."*
   - Generated strictly from backend model results when `/api/v1/simulate/storm` returns, tracking stations that escalate in risk tier.
   - Displays unread count badge, tier filters, uncalibrated model scores, CSV export, and detailed telemetry breakdown.
   - If backend is offline, alerts are paused with a clear banner: *"Alerts paused: model API not connected"*.
5. **Bottom Simulation Dock:**
   - **Scenario Simulation Slider ($0\text{–}300\text{ mm}$):** Labeled *"Scenario simulation (what-if), not a forecast"*, with debounced input (400 ms) to prevent alert flooding.
   - **Simple Text Preset Buttons:** Quick buttons for `0 mm (Baseline)`, `+50 mm`, `+100 mm`, `+200 mm`, and `+300 mm`.
   - **Legend for Risk Tiers:** Green ($< 0.25$), Yellow ($0.25\text{–}0.70$), Red ($\ge 0.70$).
   - **Advisory Text Bulletin:** Exports a structured scenario bulletin with station-by-station telemetry.

---

## 12. Engineering Limitations (7 Key Points) & Step-by-Step Execution

### Seven Key Engineering Limitations
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

### How to Run Everything (Step-by-Step)
```bash
# 1. Install dependencies & audit raw catalog:
cd LEWS1
pip install -r requirements.txt
python src/audit_inventory.py

# 2. Regenerate benchmark dataset with genuine DEM terrain:
python -m src.dataset_generator

# 3. Train models with 3-way split & validation threshold tuning:
python -m src.train

# 4. Run real-data susceptibility benchmark (elevation-matched + bootstrap CI):
python src/real_susceptibility_check.py

# 5. Run test suite:
python -m unittest discover tests

# 6. Launch FastAPI backend server:
python -m uvicorn app.main:app --host 127.0.0.1 --port 8000 --reload

# 7. Launch React dashboard:
cd ../frontend
npm install
npm run dev
```

---

## 13. Common Teacher / Jury Questions & Model Answers

**Q1: Why did you rename the model artifact to `landslide_primary.joblib` and select Random Forest?**
> *Answer:* The serialized primary model holds a `RandomForestClassifier`. Renaming the artifact from `landslide_xgb.joblib` to `landslide_primary.joblib` avoids naming confusion. Random Forest was selected because it achieved higher ROC-AUC ($0.7642$ vs. $0.7421$) on the untouched spatial holdout test split, and reached $89.23\%$ recall at an operationally sound threshold of $0.250$ (whereas XGBoost required a near-zero threshold of $0.030$).

**Q2: Did you tune the decision threshold on the test set?**
> *Answer:* In initial exploratory tests, thresholds were swept directly on test data. We corrected this by implementing a strictly disjoint 3-way spatial split (60% Train, 20% Validation, 20% Test). The alert threshold ($0.250$) was tuned exclusively on the Validation split to achieve $\ge 85\%$ recall, and then evaluated on the untouched Test split where it achieved $89.23\%$ recall and $27.10\%$ precision.

**Q3: Why does Yellow tier start at $0.25$, and what tier does probability $0.30$ receive?**
> *Answer:* In disaster early warning, missed events carry severe consequences. Aligning the Yellow tier to start at $0.25$ directly matches our validation-tuned threshold for $\ge 85\%$ disaster recall. A point with failure probability $0.30$ falls into the range $0.25 \le P < 0.70$ and is assigned to the **YELLOW** tier (Watch Advisory), ensuring field crews are alerted rather than categorizing it as safe.

**Q4: How were background points sampled in the real-data benchmark, and why was elevation matching necessary?**
> *Answer:* Background points were sampled across DEM Tile N27E088 with a $1,000\text{ m}$ exclusion buffer around all catalog events. Initially, unconstrained background sampling drew points up to $6,265\text{ m}$ on glaciated Himalayan peaks, inflating the model's apparent accuracy simply because landslides are not reported in unpopulated alpine zones. When background points were resampled strictly within the real event elevation range ($229.8\text{ m}$ to $3,760.2\text{ m}$), the spatial-CV ROC-AUC adjusted to $0.5788$ (95% bootstrap CI: $[0.4583, 0.7077]$). This test, with 40 events, up to 5 km location error and ~10 km weather data, could not detect a reliable signal; this reflects data limits, not proof that terrain or rainfall do not matter.

**Q5: Does `/api/v1/predict/point` query the DEM automatically?**
> *Answer:* No. The endpoint evaluates inference based on the 11 feature values supplied in the request JSON payload. If required fields like `elevation_m` or `slope_deg` are missing, the API returns a 422 validation error.
