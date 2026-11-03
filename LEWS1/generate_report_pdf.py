"""
generate_report_pdf.py — Export Comprehensive 13-Section Project Report to PDF
=============================================================================
Uses ReportLab to build a professional, publication-quality PDF report with:
  • Complete 13 sections matching PROJECT_REPORT.md
  • Multi-page layout with running headers and "Page X of Y" footers (NumberedCanvas)
  • Fixed, perfectly proportioned tables with repeatRows=1 and alternating colors
  • Clear callouts and honest scientific disclaimers
  • Exact metrics from 3-way split, elevation-matched spatial CV, and 7 limitations
"""

import sys
from pathlib import Path
from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
    HRFlowable,
    PageBreak,
)
from reportlab.pdfgen import canvas


class NumberedCanvas(canvas.Canvas):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self._saved_page_states = []

    def showPage(self):
        self._saved_page_states.append(dict(self.__dict__))
        self._startPage()

    def save(self):
        num_pages = len(self._saved_page_states)
        for state in self._saved_page_states:
            self.__dict__.update(state)
            self.draw_page_decorations(num_pages)
            super().showPage()
        super().save()

    def draw_page_decorations(self, page_count):
        self.saveState()
        self.setFont("Helvetica", 8)
        self.setFillColor(colors.HexColor("#64748b"))

        # Header (pages > 1)
        if self._pageNumber > 1:
            self.drawString(54, 750, "AI-Based Landslide Early Warning System (LEWS) — SIH26001 / CA2 Report")
            self.setStrokeColor(colors.HexColor("#cbd5e1"))
            self.setLineWidth(0.5)
            self.line(54, 744, 558, 744)

        # Footer
        text = f"Page {self._pageNumber} of {page_count}"
        self.drawRightString(558, 36, text)
        self.drawString(54, 36, "CONFIDENTIAL — FOR ACADEMIC & RESEARCH EVALUATION ONLY")
        self.setStrokeColor(colors.HexColor("#cbd5e1"))
        self.setLineWidth(0.5)
        self.line(54, 46, 558, 46)
        self.restoreState()


def create_report_pdf(output_path: Path):
    doc = SimpleDocTemplate(
        str(output_path),
        pagesize=letter,
        leftMargin=54,
        rightMargin=54,
        topMargin=54,
        bottomMargin=54,
    )

    styles = getSampleStyleSheet()

    title_style = ParagraphStyle(
        "CoverTitle",
        parent=styles["Normal"],
        fontName="Helvetica-Bold",
        fontSize=18,
        leading=22,
        textColor=colors.HexColor("#0f172a"),
        spaceAfter=4,
    )
    subtitle_style = ParagraphStyle(
        "CoverSubtitle",
        parent=styles["Normal"],
        fontName="Helvetica-Bold",
        fontSize=10,
        leading=14,
        textColor=colors.HexColor("#0284c7"),
        spaceAfter=8,
    )
    h1_style = ParagraphStyle(
        "Heading1_Custom",
        parent=styles["Normal"],
        fontName="Helvetica-Bold",
        fontSize=12,
        leading=15,
        textColor=colors.HexColor("#0f172a"),
        spaceBefore=10,
        spaceAfter=4,
        keepWithNext=True,
    )
    h2_style = ParagraphStyle(
        "Heading2_Custom",
        parent=styles["Normal"],
        fontName="Helvetica-Bold",
        fontSize=9.5,
        leading=12.5,
        textColor=colors.HexColor("#1e293b"),
        spaceBefore=7,
        spaceAfter=3,
        keepWithNext=True,
    )
    body_style = ParagraphStyle(
        "Body_Custom",
        parent=styles["Normal"],
        fontName="Helvetica",
        fontSize=8,
        leading=11.5,
        textColor=colors.HexColor("#334155"),
        spaceAfter=4,
    )
    callout_style = ParagraphStyle(
        "Callout",
        parent=styles["Normal"],
        fontName="Helvetica",
        fontSize=7.5,
        leading=10.5,
        textColor=colors.HexColor("#991b1b"),
    )
    table_cell = ParagraphStyle(
        "TableCell",
        parent=styles["Normal"],
        fontName="Helvetica",
        fontSize=7,
        leading=9,
        textColor=colors.HexColor("#1e293b"),
    )
    table_cell_bold = ParagraphStyle(
        "TableCellBold",
        parent=table_cell,
        fontName="Helvetica-Bold",
        textColor=colors.HexColor("#0f172a"),
    )

    story = []

    # Title Banner
    story.append(Paragraph("AI-Based Landslide Early Warning System (LEWS)", title_style))
    story.append(Paragraph("North Eastern Region (East Sikkim NH-10 Corridor) — SIH26001 / CA2 Scientific Report", subtitle_style))
    story.append(HRFlowable(width="100%", thickness=1.5, color=colors.HexColor("#0284c7"), spaceAfter=8))

    # SECTION 1
    story.append(Paragraph("1. Problem Statement & Core Concept", h1_style))
    story.append(Paragraph(
        "<b>The Problem:</b> National Highway 10 (NH-10) is the main road link connecting the landlocked state of Sikkim to mainland India. "
        "Every monsoon season, intense cloudbursts and prolonged antecedent rainfall trigger severe slope failures along the deeply incised Teesta River valley, "
        "isolating Gangtok and causing repeated disruptions to civilian transit and national defense logistics.",
        body_style,
    ))
    story.append(Paragraph(
        "<b>The One-Line Core Concept:</b> <i>'Terrain tells you WHERE a landslide can happen; Rainfall and Soil Moisture tell you WHEN it will happen.'</i>",
        body_style,
    ))
    story.append(Paragraph(
        "• <b>Static Geotechnical Factors (WHERE):</b> Ground slope, elevation, surface curvature (concave hollows), orientation (aspect), and highway road-cuts govern intrinsic hillside susceptibility.<br/>"
        "• <b>Dynamic Hydrological Triggers (WHEN):</b> Short-term 24h storm bursts trigger shallow translational slips; 3-day and 7-day cumulative rainfall saturate the soil mantle, elevating pore-water pressure to shear failure.",
        body_style,
    ))

    # SECTION 2
    story.append(Paragraph("2. Study Area & Geographic Extent", h1_style))
    story.append(Paragraph(
        "• <b>Target Highway Corridor:</b> East Sikkim NH-10 Corridor from Teesta Bazaar (27.02°N) to Gangtok Terminus & Dikchu Link (27.42°N).<br/>"
        "• <b>Active Corridor Bounding Box:</b> Latitude 27.00°N to 27.45°N, Longitude 88.40°E to 88.65°E.<br/>"
        "• <b>SRTM DEM Tile Extent:</b> NASA Tile <code>N27E088.hgt</code> covering Latitude 27.00°N to 28.00°N, Longitude 88.00°E to 89.00°E.<br/>"
        "• <b>Corridor Elevation Range:</b> Monitored road stations span 300.7 m (Rangpo checkpost) to 1,987.5 m (Penlong La). (Tile extremes: 182 m to >8,000 m).<br/>"
        "• <b>Corridor Slope Range:</b> Monitored road stations span 10.6° (Rangpo checkpost) to 39.9° (Martam Ridge Cutting).<br/>"
        "• <b>Station Re-extraction Note:</b> Station terrain values were re-extracted from the SRTM DEM with the same function used for the training table. Station coordinates are approximate, so single-pixel values are sensitive to exact position.<br/>"
        "• <b>Geometry & Station Coordinates Provenance:</b> The 15 highway station coordinates are <b>approximate</b> milestone locations hand-selected along chronic failure sectors of NH-10 strictly within DEM bounds (27.02°N to 27.42°N). The road line on the map is an <b>approximate</b> piecewise corridor polyline connecting these 15 stations sequentially. River geometry is <b>approximate</b> (no vector GIS shapefile loaded; river and road distances are approximate estimates).",
        body_style,
    ))

    # SECTION 3
    story.append(Paragraph("3. Complete Project Folder & File Structure", h1_style))
    story.append(Paragraph(
        "The project consists of a structured backend engine (<code>LEWS1/</code>) and an interactive React dashboard (<code>frontend/</code>):<br/>"
        "• <code>LEWS1/data/raw/</code>: Contains raw SRTM 30m DEM (<code>N27E088.hgt</code>) and NASA Global Landslide Catalog CSV.<br/>"
        "• <code>LEWS1/data/processed/</code>: Audited catalog tables, summary audit JSON, and elevation-matched susceptibility metrics.<br/>"
        "• <code>LEWS1/data/dataset.csv</code>: 1,500-sample scenario benchmark dataset with DEM terrain re-extracted for every row.<br/>"
        "• <code>LEWS1/src/</code>: Configuration, catalog auditing, DEM feature derivation, real-data spatial CV check, and training engine.<br/>"
        "• <code>LEWS1/models/</code>: Serialized primary model (<code>landslide_primary.joblib</code> holding winning RandomForestClassifier), scaler, and metadata.<br/>"
        "• <code>frontend/src/</code>: React 19 + TypeScript dashboard with Leaflet map, 3x3 Location Inspector, and scenario simulation dock.",
        body_style,
    ))

    # SECTION 4
    story.append(Paragraph("4. Data Sources & Limitations", h1_style))
    data_table_data = [
        [Paragraph("Dataset Name", table_cell_bold), Paragraph("Source Org", table_cell_bold), Paragraph("Format & File", table_cell_bold), Paragraph("Limitations & Real-World Reality", table_cell_bold)],
        [Paragraph("NASA SRTM 30m DEM", table_cell_bold), Paragraph("NASA / USGS", table_cell), Paragraph("30m grid, N27E088.hgt", table_cell), Paragraph("Static baseline terrain from 2000. Accurately derives slope/curvature but does not reflect post-2000 road widening cuts.", table_cell)],
        [Paragraph("Global Landslide Catalog", table_cell_bold), Paragraph("NASA GSFC", table_cell), Paragraph("Tabular CSV (11k global rows)", table_cell), Paragraph("Contains 82 events in DEM tile; 40 events have accuracy <= 5 km. No dynamic rain gauge or soil moisture recorded at slide moment.", table_cell)],
        [Paragraph("15 Highway Stations", table_cell_bold), Paragraph("Hand-selected milestones", table_cell), Paragraph("15 GPS corridor points", table_cell), Paragraph("Approximate milestone locations representing chronic slide sectors along the East Sikkim NH-10 corridor. Terrain features are sampled from DEM.", table_cell)],
    ]
    t1 = Table(data_table_data, colWidths=[105, 75, 105, 219], repeatRows=1)
    t1.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#f1f5f9")),
        ("GRID", (0, 0), (-1, -1), 0.5, colors.HexColor("#cbd5e1")),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("TOPPADDING", (0, 0), (-1, -1), 2.5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 2.5),
    ]))
    story.append(t1)
    story.append(Spacer(1, 4))

    # SECTION 5
    story.append(Paragraph("5. Complete Feature List (11 Features)", h1_style))
    feat_data = [
        [Paragraph("#", table_cell_bold), Paragraph("Feature Name", table_cell_bold), Paragraph("Units", table_cell_bold), Paragraph("Data Source", table_cell_bold), Paragraph("Geotechnical Role in Failure", table_cell_bold)],
        [Paragraph("1", table_cell), Paragraph("elevation_m", table_cell_bold), Paragraph("m", table_cell), Paragraph("REAL (SRTM DEM)", table_cell), Paragraph("Orographic cloud burst zones & elevation lapse rate.", table_cell)],
        [Paragraph("2", table_cell), Paragraph("slope_deg", table_cell_bold), Paragraph("deg", table_cell), Paragraph("REAL (SRTM DEM)", table_cell), Paragraph("Primary shear stress driver. Slopes > 33° exceed friction angle.", table_cell)],
        [Paragraph("3", table_cell), Paragraph("aspect_deg", table_cell_bold), Paragraph("deg", table_cell), Paragraph("REAL (SRTM DEM)", table_cell), Paragraph("Slope orientation (0-360°). South/SW slopes face monsoon fronts.", table_cell)],
        [Paragraph("4", table_cell), Paragraph("curvature", table_cell_bold), Paragraph("100/m", table_cell), Paragraph("REAL (SRTM DEM)", table_cell), Paragraph("Concave hollows (< -0.2) concentrate water; convex ridges shed water.", table_cell)],
        [Paragraph("5", table_cell), Paragraph("dist_to_road_m", table_cell_bold), Paragraph("m", table_cell), Paragraph("Approx. Spatial", table_cell), Paragraph("Proximity to highway cut-slopes with removed toe support.", table_cell)],
        [Paragraph("6", table_cell), Paragraph("dist_to_river_m", table_cell_bold), Paragraph("m", table_cell), Paragraph("Approx. Spatial", table_cell), Paragraph("Proximity to Teesta River toe scouring and bank undercutting.", table_cell)],
        [Paragraph("7", table_cell), Paragraph("rain_24h_mm", table_cell_bold), Paragraph("mm", table_cell), Paragraph("Scenario (simulated)", table_cell), Paragraph("24-hour storm intensity triggering shallow translational debris slides.", table_cell)],
        [Paragraph("8", table_cell), Paragraph("rain_3d_mm", table_cell_bold), Paragraph("mm", table_cell), Paragraph("Scenario (simulated)", table_cell), Paragraph("3-day cumulative precipitation progressively saturating topsoil.", table_cell)],
        [Paragraph("9", table_cell), Paragraph("rain_7d_mm (R7)", table_cell_bold), Paragraph("mm", table_cell), Paragraph("Scenario (simulated)", table_cell), Paragraph("7-day antecedent saturation (API) raising deep groundwater tables.", table_cell)],
        [Paragraph("10", table_cell), Paragraph("soil_moisture_pct", table_cell_bold), Paragraph("%", table_cell), Paragraph("Scenario (simulated)", table_cell), Paragraph("Volumetric water content. >75% eliminates soil matric suction.", table_cell)],
        [Paragraph("11", table_cell), Paragraph("ndvi", table_cell_bold), Paragraph("index", table_cell), Paragraph("Scenario (simulated)", table_cell), Paragraph("Vegetation root cohesion. Low values (<0.30) indicate bare cuts/scars.", table_cell)],
    ]
    t2 = Table(feat_data, colWidths=[20, 95, 65, 105, 219], repeatRows=1)
    t2.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#f1f5f9")),
        ("GRID", (0, 0), (-1, -1), 0.5, colors.HexColor("#cbd5e1")),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("TOPPADDING", (0, 0), (-1, -1), 2),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 2),
    ]))
    story.append(t2)
    story.append(Spacer(1, 4))

    # SECTION 6
    story.append(Paragraph("6. How the Dataset is Built (Data Honesty)", h1_style))
    story.append(Paragraph(
        "• <b>DEM Terrain Re-Extraction:</b> All four terrain columns (<code>elevation_m</code>, <code>slope_deg</code>, <code>aspect_deg</code>, <code>curvature</code>) in <code>data/dataset.csv</code> were <b>re-extracted directly from the SRTM DEM (<code>N27E088.hgt</code>)</b> at each sample's coordinates using metric UTM 45N reprojection.<br/>"
        "• <b>Strict Data Separation:</b> Real historical catalog events and synthetic scenario samples are never mixed into one table. The real catalog contains only verified events with genuine terrain, while <code>dataset.csv</code> is a calibrated 1,500-sample benchmark dataset used to evaluate software pipeline mechanics under spatial isolation.<br/>"
        "• <b>Spatial Group Blocking:</b> All points are assigned to disjoint 5 km geographic grid blocks (<code>spatial_group</code>). The dataset is split 3-way (60% Train, 20% Validation, 20% Test) by spatial blocks, which reduces spatial leakage between training, threshold tuning, and testing.",
        body_style,
    ))

    # SECTION 7
    story.append(Paragraph("7. Machine Learning Models, Validation-Tuned Thresholds & Selection", h1_style))
    story.append(Paragraph(
        "<b>Split Protocol:</b> To prevent methodological leakage, decision thresholds were tuned strictly on a separate <b>Validation Split (297 samples, 62 positives)</b> and evaluated once on an untouched <b>Test Split (303 samples, 65 positives)</b>. Standard 0.50 thresholds miss over half the events; tuning for <b>Recall &ge; 85%</b> reduces false negatives to operational requirements. "
        "<i>Note: Random Forest model output scores represent tree vote fractions rather than calibrated posterior probabilities.</i>",
        body_style,
    ))

    metrics_table = [
        [Paragraph("Evaluation Metric (Untouched Test Split)", table_cell_bold), Paragraph("XGBoost (Standard 0.50)", table_cell_bold), Paragraph("XGBoost (Val-Tuned 0.030)", table_cell_bold), Paragraph("Random Forest (Standard 0.50)", table_cell_bold), Paragraph("Random Forest (Val-Tuned 0.250)", table_cell_bold)],
        [Paragraph("Decision Threshold", table_cell), Paragraph("0.50", table_cell), Paragraph("0.030", table_cell), Paragraph("0.50", table_cell), Paragraph("0.250", table_cell_bold)],
        [Paragraph("Recall (Disaster Detection)", table_cell_bold), Paragraph("44.62%", table_cell), Paragraph("90.77%", table_cell), Paragraph("49.23%", table_cell), Paragraph("89.23%", table_cell_bold)],
        [Paragraph("Precision", table_cell_bold), Paragraph("54.72%", table_cell), Paragraph("27.44%", table_cell), Paragraph("57.14%", table_cell), Paragraph("27.10%", table_cell_bold)],
        [Paragraph("F1 Score", table_cell), Paragraph("0.4915", table_cell), Paragraph("0.4214", table_cell), Paragraph("0.5289", table_cell), Paragraph("0.4158", table_cell)],
        [Paragraph("ROC-AUC Score", table_cell_bold), Paragraph("0.7421", table_cell), Paragraph("0.7421", table_cell), Paragraph("0.7642", table_cell_bold), Paragraph("0.7642", table_cell_bold)],
        [Paragraph("Confusion Matrix (TN, FP, FN, TP)", table_cell), Paragraph("[214, 24, 36, 29]", table_cell), Paragraph("[82, 156, 6, 59]", table_cell), Paragraph("[214, 24, 33, 32]", table_cell), Paragraph("[82, 156, 7, 58]", table_cell)],
    ]
    t3 = Table(metrics_table, colWidths=[124, 95, 95, 95, 95], repeatRows=1)
    t3.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#f1f5f9")),
        ("GRID", (0, 0), (-1, -1), 0.5, colors.HexColor("#cbd5e1")),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("TOPPADDING", (0, 0), (-1, -1), 2.5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 2.5),
    ]))
    story.append(t3)
    story.append(Spacer(1, 4))

    story.append(Paragraph(
        "<b>Primary Model Selection:</b> <b>Random Forest</b> is chosen as the primary model. It achieves higher test ROC-AUC (0.7642 vs. 0.7421) and reaches 89.23% recall at an operationally grounded alert threshold (0.250), whereas XGBoost required an extreme threshold (0.030). Serialized as <code>landslide_primary.joblib</code>.<br/>"
        "<b>Operational Risk Tiers:</b> Aligned directly with the tuned threshold: <b>GREEN (&lt; 0.25)</b>, <b>YELLOW (0.25 &le; P &lt; 0.70)</b>, <b>RED (P &ge; 0.70)</b>. A point with failure probability <b>P = 0.30 is assigned to YELLOW (Watch Advisory)</b>.",
        body_style,
    ))

    # SECTION 8
    story.append(Paragraph("8. Real-Data Susceptibility Benchmark (NASA GLC <= 5km + SRTM DEM)", h1_style))
    story.append(Paragraph(
        "Using <b>only verified NASA catalog events with location accuracy &le; 5 km</b> (40 historical events) within the DEM tile against elevation-matched background points (outside 1,000 m buffer). "
        "Real events span 229.8 m to 3,760.2 m (median 1,514.2 m). Background candidates were constrained strictly to [229.8 m, 3,760.2 m] (median 1,607.9 m) to prevent high-altitude glaciated artifacts (&gt;6,000 m). "
        "Evaluated via <b>5-Fold Spatial Cross-Validation (GroupKFold on 15 km geographic blocks)</b> with 1,000 bootstrap iterations:",
        body_style,
    ))

    real_data_table = [
        [Paragraph("Model", table_cell_bold), Paragraph("Overall Spatial AUC", table_cell_bold), Paragraph("Bootstrap 95% CI", table_cell_bold), Paragraph("Mean Fold AUC", table_cell_bold), Paragraph("Recall (0.50)", table_cell_bold), Paragraph("Precision (0.50)", table_cell_bold), Paragraph("Tuned Th (Rec&ge;85%)", table_cell_bold), Paragraph("Precision @ Rec&ge;85%", table_cell_bold)],
        [Paragraph("Random Forest", table_cell_bold), Paragraph("0.5788", table_cell_bold), Paragraph("[0.4583, 0.7077]", table_cell_bold), Paragraph("0.6594", table_cell_bold), Paragraph("47.50%", table_cell), Paragraph("57.58%", table_cell), Paragraph("0.395", table_cell_bold), Paragraph("56.67%", table_cell_bold)],
        [Paragraph("XGBoost", table_cell), Paragraph("0.4963", table_cell), Paragraph("[0.3721, 0.6268]", table_cell), Paragraph("0.5112", table_cell), Paragraph("47.50%", table_cell), Paragraph("57.58%", table_cell), Paragraph("0.235", table_cell), Paragraph("48.57%", table_cell)],
        [Paragraph("Logistic Regression", table_cell), Paragraph("0.4731", table_cell), Paragraph("[0.3409, 0.6004]", table_cell), Paragraph("0.4926", table_cell), Paragraph("47.50%", table_cell), Paragraph("48.72%", table_cell), Paragraph("0.380", table_cell), Paragraph("54.84%", table_cell)],
    ]
    t4 = Table(real_data_table, colWidths=[74, 66, 76, 56, 56, 56, 60, 60], repeatRows=1)
    t4.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#f1f5f9")),
        ("GRID", (0, 0), (-1, -1), 0.5, colors.HexColor("#cbd5e1")),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("TOPPADDING", (0, 0), (-1, -1), 2.5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 2.5),
    ]))
    story.append(t4)
    story.append(Spacer(1, 4))
    story.append(Paragraph(
        "<b>Scientific Finding:</b> Elevation-matched spatial AUC is 0.5788. This test, with 40 events, up to 5 km location error and ~10 km weather data, could not detect a reliable signal; this reflects data limits, not proof that terrain or rainfall do not matter. "
        "<b>Real Terrain Feature Importances (RF):</b> Elevation (32.03%), Curvature (26.48%), Slope (22.02%), Aspect (19.47%).",
        body_style,
    ))

    # Real Weather Reanalysis Subsection
    story.append(Paragraph("<b>Exploratory Real Weather Benchmark (Season-Matched Open-Meteo Reanalysis):</b> <i>'Real weather (reanalysis), small sample, exploratory.'</i>", h2_style))
    story.append(Paragraph(
        "<b>Why Season Matching Matters:</b> Drawing background dates across the year introduces dry winter days, making models learn an uninformative 'monsoon vs. winter' detector rather than identifying genuine failure triggers among ordinary wet monsoon days. "
        "Background points were elevation-matched and season-matched within &plusmn;15 days of each event's day-of-year in a different year (2007-2017) outside 1,000 m buffer and &plusmn;3 days (month histograms match). "
        "Under 5-Fold Spatial CV on 15 km blocks, spatial AUC honestly settles into the 0.58-0.64 range:",
        body_style,
    ))

    rw_table_data = [
        [Paragraph("Configuration", table_cell_bold), Paragraph("Model", table_cell_bold), Paragraph("Spatial CV AUC", table_cell_bold), Paragraph("Bootstrap 95% CI", table_cell_bold), Paragraph("Recall (0.50)", table_cell_bold), Paragraph("Precision (0.50)", table_cell_bold), Paragraph("Tuned Th", table_cell_bold), Paragraph("Tuned Prec", table_cell_bold)],
        [Paragraph("Terrain-Only (4 feats)", table_cell), Paragraph("Random Forest", table_cell), Paragraph("0.5522", table_cell), Paragraph("[0.4227, 0.6813]", table_cell), Paragraph("60.0%", table_cell), Paragraph("58.5%", table_cell), Paragraph("0.325", table_cell), Paragraph("54.0%", table_cell)],
        [Paragraph("Terrain-Only (4 feats)", table_cell), Paragraph("Logistic Reg", table_cell), Paragraph("0.6156", table_cell), Paragraph("[0.4818, 0.7433]", table_cell), Paragraph("70.0%", table_cell), Paragraph("59.6%", table_cell), Paragraph("0.394", table_cell), Paragraph("61.8%", table_cell)],
        [Paragraph("Terrain + Weather (Season-Matched)", table_cell_bold), Paragraph("Random Forest", table_cell_bold), Paragraph("0.5834", table_cell_bold), Paragraph("[0.4590, 0.7037]", table_cell_bold), Paragraph("65.0%", table_cell_bold), Paragraph("59.1%", table_cell_bold), Paragraph("0.350", table_cell_bold), Paragraph("53.1%", table_cell_bold)],
        [Paragraph("Terrain + Weather (Season-Matched)", table_cell_bold), Paragraph("Logistic Reg", table_cell_bold), Paragraph("0.6425", table_cell_bold), Paragraph("[0.5261, 0.7730]", table_cell_bold), Paragraph("70.0%", table_cell_bold), Paragraph("66.7%", table_cell_bold), Paragraph("0.320", table_cell_bold), Paragraph("58.6%", table_cell_bold)],
    ]
    t_rw = Table(rw_table_data, colWidths=[90, 70, 60, 76, 52, 52, 52, 52], repeatRows=1)
    t_rw.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#f1f5f9")),
        ("GRID", (0, 0), (-1, -1), 0.5, colors.HexColor("#cbd5e1")),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("TOPPADDING", (0, 0), (-1, -1), 2),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 2),
    ]))
    story.append(t_rw)
    story.append(Spacer(1, 4))

    # Rainfall Threshold Baseline Subsection (Phase 4)
    story.append(Paragraph("<b>Rainfall Threshold Baseline vs. ML Models (Phase 4 Empirical Benchmark):</b>", h2_style))
    story.append(Paragraph(
        "To establish a non-ML baseline from published geotechnical literature, we implemented the classic <b>Caine (1980)</b> rainfall intensity-duration threshold: "
        "<i>I = 14.82 &middot; D<sup>-0.39</sup></i> &rArr; cumulative threshold <i>E = 14.82 &middot; D<sup>0.61</sup></i> "
        "(<i>E<sub>24h</sub> = 102.76 mm</i>, <i>E<sub>72h</sub> = 201.05 mm</i>). "
        "Evaluated on season-matched events and background days (N=80) with 10,000 bootstrap CI iterations:",
        body_style,
    ))

    thresh_table_data = [
        [Paragraph("Approach / Benchmark", table_cell_bold), Paragraph("Type", table_cell_bold), Paragraph("Criterion", table_cell_bold), Paragraph("ROC-AUC", table_cell_bold), Paragraph("Bootstrap 95% CI", table_cell_bold), Paragraph("Sensitivity", table_cell_bold), Paragraph("Specificity", table_cell_bold)],
        [Paragraph("Caine (1980) 24h Threshold", table_cell), Paragraph("Physics Threshold", table_cell), Paragraph("Rain &ge; 102.8 mm", table_cell), Paragraph("0.5750", table_cell), Paragraph("[0.5244, 0.6351]", table_cell), Paragraph("15.00%", table_cell), Paragraph("100.00%", table_cell)],
        [Paragraph("Caine (1980) 72h Threshold", table_cell), Paragraph("Physics Threshold", table_cell), Paragraph("Rain &ge; 201.1 mm", table_cell), Paragraph("0.5000", table_cell), Paragraph("[0.5000, 0.5000]", table_cell), Paragraph("0.00%", table_cell), Paragraph("100.00%", table_cell)],
        [Paragraph("Rainfall 24h Only", table_cell), Paragraph("Univariate Score", table_cell), Paragraph("Continuous rain_24h", table_cell), Paragraph("0.5100", table_cell), Paragraph("[0.3826, 0.6380]", table_cell), Paragraph("N/A", table_cell), Paragraph("N/A", table_cell)],
        [Paragraph("Rainfall 3d Only", table_cell), Paragraph("Univariate Score", table_cell), Paragraph("Continuous rain_3d", table_cell), Paragraph("0.4756", table_cell), Paragraph("[0.3491, 0.6057]", table_cell), Paragraph("N/A", table_cell), Paragraph("N/A", table_cell)],
        [Paragraph("Rainfall 7d Only", table_cell), Paragraph("Univariate Score", table_cell), Paragraph("Continuous rain_7d", table_cell), Paragraph("0.5375", table_cell), Paragraph("[0.4098, 0.6654]", table_cell), Paragraph("N/A", table_cell), Paragraph("N/A", table_cell)],
        [Paragraph("Soil Moisture Only (0-7 cm)", table_cell), Paragraph("Univariate Score", table_cell), Paragraph("Continuous soil_moist", table_cell), Paragraph("0.4613", table_cell), Paragraph("[0.3356, 0.5919]", table_cell), Paragraph("N/A", table_cell), Paragraph("N/A", table_cell)],
        [Paragraph("Terrain + Weather (LR)", table_cell_bold), Paragraph("Multivariate ML", table_cell_bold), Paragraph("15 km Spatial CV", table_cell_bold), Paragraph("0.6425", table_cell_bold), Paragraph("[0.5261, 0.7730]", table_cell_bold), Paragraph("70.00%", table_cell_bold), Paragraph("58.62%", table_cell_bold)],
        [Paragraph("Terrain + Weather (RF)", table_cell_bold), Paragraph("Multivariate ML", table_cell_bold), Paragraph("15 km Spatial CV", table_cell_bold), Paragraph("0.5834", table_cell_bold), Paragraph("[0.4590, 0.7037]", table_cell_bold), Paragraph("65.00%", table_cell_bold), Paragraph("53.12%", table_cell_bold)],
    ]
    t_thresh = Table(thresh_table_data, colWidths=[110, 70, 80, 54, 70, 60, 60], repeatRows=1)
    t_thresh.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#f1f5f9")),
        ("GRID", (0, 0), (-1, -1), 0.5, colors.HexColor("#cbd5e1")),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("TOPPADDING", (0, 0), (-1, -1), 2),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 2),
    ]))
    story.append(t_thresh)
    story.append(Spacer(1, 4))
    story.append(Paragraph(
        "<b>Key Geotechnical Takeaways:</b> (1) Univariate weather cannot separate monsoon events (24h rain AUC = 0.5100, 3d rain AUC = 0.4756); both failure and non-failure days experience heavy rainfall. (2) The Caine threshold gives 100% specificity but misses 85% of events because ~10 km reanalysis smooths out localized convective cloudbursts. (3) Multivariate ML outperforms rainfall-only models (0.6425 vs 0.5100) because it incorporates static topographic slope and curvature susceptibility.",
        body_style,
    ))
    story.append(Spacer(1, 4))

    # SECTION 9
    story.append(Paragraph("9. System Architecture", h1_style))
    story.append(Paragraph(
        "• <b>Offline Preparation Pipeline:</b> SRTM 30m DEM + NASA catalog &rarr; Geospatial Pipeline (UTM 45N reprojection, terrain derivation) &rarr; Elevation-Matched Spatial CV Susceptibility Benchmark &rarr; 3-Way Spatial Block Holdout &rarr; Validation Threshold Tuning &rarr; Model Serialization.<br/>"
        "• <b>Online Simulation Pipeline:</b> React Leaflet UI (15 highway stations) &rarr; Rainfall Slider Delta &rarr; FastAPI Backend (<code>/api/v1/simulate/storm</code>) &rarr; StandardScaler & ML Inference Engine &rarr; Risk Tier Mapping & GeoJSON Delivery.",
        body_style,
    ))

    # SECTION 10
    story.append(Paragraph("10. Backend REST API Endpoints & Request Verification", h1_style))
    story.append(Paragraph(
        "• <code>GET /health</code> — Verifies ML model readiness and returns the list of all 11 loaded features.<br/>"
        "• <code>POST /api/v1/predict/point</code> — Single-point risk evaluation across all 11 features. The caller must supply feature values in the request payload.<br/>"
        "• <code>POST /api/v1/simulate/storm</code> — Batch corridor storm scenario simulation injecting rainfall increments across highway stations.<br/>"
        "• <code>POST /api/v1/route/analyze</code> — Dynamic highway route analysis with runtime DEM extraction and danger interval segmentation.<br/>"
        "• <code>POST /api/v1/feedback</code> & <code>POST /api/v1/alerts/email/send</code> — Field hazard observation ingestion and modular emergency email dispatch.",
        body_style,
    ))
    story.append(Spacer(1, 2))

    storm_table_data = [
        [Paragraph("Scenario Delta", table_cell_bold), Paragraph("Tiers (G / Y / R)", table_cell_bold), Paragraph("High Risk Sectors Count & Names", table_cell_bold)],
        [Paragraph("+0 mm (Baseline)", table_cell), Paragraph("3 / 12 / 0", table_cell), Paragraph("0 High (12 Watch, 3 Normal: Teesta Bazaar, Rangpo, Penlong La)", table_cell)],
        [Paragraph("+50 mm", table_cell), Paragraph("2 / 6 / 7", table_cell), Paragraph("7 High (29th Mile, Likhipir, Melli, Mining Ground, Singtam, Martam, Tadong Mile 6)", table_cell)],
        [Paragraph("+100 mm", table_cell), Paragraph("2 / 7 / 6", table_cell), Paragraph("6 High (29th Mile, Likhipir, Melli, Mining Ground, Singtam, Martam)", table_cell)],
        [Paragraph("+200 mm", table_cell), Paragraph("2 / 7 / 6", table_cell), Paragraph("6 High (29th Mile, Likhipir, Melli, Mining Ground, Singtam, Martam)", table_cell)],
        [Paragraph("+300 mm", table_cell), Paragraph("2 / 7 / 6", table_cell), Paragraph("6 High (29th Mile, Likhipir, Melli, Mining Ground, Singtam, Martam)", table_cell)],
    ]
    t_storm = Table(storm_table_data, colWidths=[90, 85, 329], repeatRows=1)
    t_storm.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#f1f5f9")),
        ("GRID", (0, 0), (-1, -1), 0.5, colors.HexColor("#cbd5e1")),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("TOPPADDING", (0, 0), (-1, -1), 2.5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 2.5),
    ]))
    story.append(t_storm)
    story.append(Spacer(1, 4))

    # SECTION 11
    story.append(Paragraph("11. Dashboard User Interface Guide & Backend Verification", h1_style))
    story.append(Paragraph(
        "• <b>UI Backend Verification:</b> The top bar and sidebar display <code>Model API connected</code>; all station risk objects carry <code>risk_source: 'backend_model'</code>. (If disconnected, switches to <code>Fallback heuristic active</code> in amber).<br/>"
        "• <b>Interactive Map:</b> Engineering basemap with 15 color-coded highway station markers using distinct geometric shapes for color-blind accessibility (Circle Green, Triangle Yellow, Diamond Red).<br/>"
        "• <b>Location Inspector:</b> Tabular breakdown with all 11 geotechnical metrics, baseline corridor medians, data provenance tags (DEM Derived / Approximate / Simulated), and direct navigation links (Google Maps, OpenStreetMap).<br/>"
        "• <b>Alert Inbox (Scenario Simulation):</b> Dedicated alert drawer tracking risk escalations resulting from storm scenario injections. Provides unread badge counts, tier filters, uncalibrated scores, CSV export, and directions.<br/>"
        "• <b>Scenario Simulator Dock:</b> 0-300 mm storm slider labeled <i>'Scenario simulation (what-if), not a forecast'</i> with debounced input, simple text preset buttons, and downloadable advisory reports.",
        body_style,
    ))

    # SECTION 12
    story.append(Paragraph("12. Engineering Limitations (7 Key Points) & Step-by-Step Execution", h1_style))
    story.append(Paragraph(
        "<b>Seven Explicit Engineering Limitations:</b><br/>"
        "1. <i>Simulated Weather:</i> Dynamic precipitation and soil moisture are scenario simulations, not live radar nowcasts.<br/>"
        "2. <i>Approximate Geometry:</i> Station coordinates and road/river geometries are approximate milestone estimates, not surveyed shapefiles.<br/>"
        "3. <i>40 Real Events with &le;5 km Error:</i> The real historical catalog contains only 40 verified events in the corridor with spatial uncertainty.<br/>"
        "4. <i>Rule-Based Benchmark Labels:</i> The 1,500-sample training table assigns ground-truth labels via synthetic geophysical heuristics.<br/>"
        "5. <i>Uncalibrated Prototype Thresholds:</i> Decision boundaries (0.25 Yellow, 0.70 Red) are research prototypes requiring field calibration.<br/>"
        "6. <i>2000-Era DEM:</i> SRTM 30m data reflects ground elevation from 2000 and does not capture post-2000 highway widening cuts.<br/>"
        "7. <i>No Real-Rainfall Validation:</i> Model dynamic rainfall triggers have not been validated against in-situ sensor telemetry during actual failure events.<br/><br/>"
        "<b>Model Behavior Note on Rainfall Monotonicity & Tier Sensitivity:</b> The Random Forest is not monotonic in rainfall. In the current station set the number of High stations is 7 at +50 mm and 6 at +100 mm. Stations whose score is close to a tier threshold can change tier with small input changes.<br/><br/>"
        "<b>Live Weather Sensitivity Quirk:</b> In sensitivity tests, replacing a near-zero live 24-hour rainfall with the training median slightly LOWERS the score at several stations, i.e. the model gives dry weather a slightly higher score than moderate rain at those stations. This is a quirk of the synthetic-label model near the edge of the training range. The cause was not verified. Because of this, Watch in dry weather must not be read as 'terrain only' or as a rainfall effect.",
        body_style,
    ))

    # Callout Box: Scientific Warning
    callout_data = [[
        Paragraph(
            "<b>SCIENTIFIC & OPERATIONAL DISCLAIMER:</b> "
            "Terrain attributes are derived from NASA SRTM 30m DEM. Meteorological variables are scenario simulations for emergency planning. "
            "Real-world operational deployment requires coupling with automated IMD Doppler weather radar nowcasts and in-situ borehole piezometer telemetry.",
            callout_style,
        )
    ]]
    t_callout = Table(callout_data, colWidths=[504])
    t_callout.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), colors.HexColor("#fef2f2")),
        ("BOX", (0, 0), (-1, -1), 1, colors.HexColor("#f87171")),
        ("TOPPADDING", (0, 0), (-1, -1), 3),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
    ]))
    story.append(t_callout)
    story.append(Spacer(1, 4))

    # SECTION 13
    story.append(Paragraph("13. Common Teacher / Jury Questions & Model Answers", h1_style))
    qas = [
        ("Q: Why did you rename the model artifact to landslide_primary.joblib and select Random Forest?",
         "The serialized primary model holds a RandomForestClassifier. Renaming the artifact avoids naming confusion. Random Forest was selected because it achieved higher ROC-AUC (0.7642 vs. 0.7421) on the untouched spatial holdout test split, and reached 89.23% recall at an operationally sound threshold of 0.250 (whereas XGBoost required a near-zero threshold of 0.030)."),
        ("Q: Did you tune the decision threshold on the test set?",
         "In initial exploratory tests, thresholds were swept directly on test data. We corrected this by implementing a strictly disjoint 3-way spatial split (60% Train, 20% Validation, 20% Test). The alert threshold (0.250) was tuned exclusively on the Validation split to achieve >= 85% recall, and then evaluated on the untouched Test split where it achieved 89.23% recall and 27.10% precision."),
        ("Q: Why does Yellow tier start at 0.25, and what tier does probability 0.30 receive?",
         "In disaster early warning, missed events carry severe consequences. Aligning the Yellow tier to start at 0.25 directly matches our validation-tuned threshold for >= 85% disaster recall. A point with failure probability 0.30 falls into the range 0.25 <= P < 0.70 and is assigned to the YELLOW tier (Watch Advisory), ensuring field crews are alerted rather than categorizing it as safe."),
        ("Q: How were background points sampled in the real-data benchmark, and why was elevation matching necessary?",
         "Background points were sampled across DEM Tile N27E088 with a 1,000 m exclusion buffer around all catalog events. Initially, unconstrained background sampling drew points up to 6,265 m on glaciated Himalayan peaks, inflating the model's apparent accuracy simply because landslides are not reported in unpopulated alpine zones. When background points were resampled strictly within the real event elevation range (229.8 m to 3,760.2 m), the spatial-CV ROC-AUC adjusted to 0.5788 (95% bootstrap CI: [0.4583, 0.7077]). This test, with 40 events, up to 5 km location error and ~10 km weather data, could not detect a reliable signal; this reflects data limits, not proof that terrain or rainfall do not matter."),
        ("Q: Does /api/v1/predict/point query the DEM automatically?",
         "No. The endpoint evaluates inference based on the 11 feature values supplied in the request JSON payload. If required fields like elevation_m or slope_deg are missing, the API returns a 422 validation error."),
    ]
    for q, a in qas:
        story.append(Paragraph(f"<b>{q}</b>", h2_style))
        story.append(Paragraph(a, body_style))

    doc.build(story, canvasmaker=NumberedCanvas)
    print(f"Successfully generated 13-section PDF report at: {output_path}")


if __name__ == "__main__":
    pdf_out = Path(__file__).resolve().parent / "PROJECT_REPORT.pdf"
    create_report_pdf(pdf_out)
