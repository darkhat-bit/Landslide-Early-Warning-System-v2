// Default pre-computed route hazard analyses for zero-latency initial render and offline demo
import { RouteAnalysisData } from './corridorData';

export const DEFAULT_ROUTE_IN_COVERAGE: RouteAnalysisData = {
  "status": "success",
  "route_summary": {
    "total_distance_km": 40.01,
    "estimated_duration_min": 34.3,
    "sample_points_count": 134,
    "summary_sentence": "On this route 16 section(s) need watching (km 0.0\u20131.5, km 2.1\u20133.0, km 4.5\u20134.8, km 6.0\u20138.4, km 9.0\u201310.5, km 11.1\u201314.7, km 15.6\u201319.9, km 20.4\u201321.7, km 22.3\u201328.0, km 28.9\u201329.2, km 29.8\u201331.0, km 31.9\u201332.2, km 33.7\u201335.5, km 36.4\u201337.0, km 37.6\u201338.5, km 39.1\u201340.0), none are high risk.",
    "plain_segments_list": [
      "km 0.0\u20131.5: Watch",
      "km 1.8\u20131.8: Low risk",
      "km 2.1\u20133.0: Watch",
      "km 3.3\u20134.2: Low risk",
      "km 4.5\u20134.8: Watch",
      "km 5.1\u20135.7: Low risk",
      "km 6.0\u20138.4: Watch",
      "km 8.7\u20138.7: Low risk",
      "km 9.0\u201310.5: Watch",
      "km 10.8\u201310.8: Low risk",
      "km 11.1\u201314.7: Watch",
      "km 15.0\u201315.3: Low risk",
      "km 15.6\u201319.9: Watch",
      "km 20.1\u201320.1: Low risk",
      "km 20.4\u201321.7: Watch",
      "km 22.0\u201322.0: Low risk",
      "km 22.3\u201328.0: Watch",
      "km 28.3\u201328.6: Low risk",
      "km 28.9\u201329.2: Watch",
      "km 29.5\u201329.5: Low risk",
      "km 29.8\u201331.0: Watch",
      "km 31.3\u201331.6: Low risk",
      "km 31.9\u201332.2: Watch",
      "km 32.5\u201333.4: Low risk",
      "km 33.7\u201335.5: Watch",
      "km 35.8\u201336.1: Low risk",
      "km 36.4\u201337.0: Watch",
      "km 37.3\u201337.3: Low risk",
      "km 37.6\u201338.5: Watch",
      "km 38.8\u201338.8: Low risk",
      "km 39.1\u201340.0: Watch"
    ]
  },
  "segments": [
    {
      "start_km": 0.0,
      "end_km": 1.5,
      "tier": "YELLOW",
      "color": "#f59e0b",
      "coordinates": [
        [
          88.528489,
          27.176690999999998
        ],
        [
          88.52567025985707,
          27.177428947893343
        ],
        [
          88.5226465330966,
          27.177404196026153
        ],
        [
          88.52031229758354,
          27.178578238607518
        ],
        [
          88.51853473623797,
          27.180653983894988
        ],
        [
          88.51600158731934,
          27.181730936779747
        ]
      ],
      "sample_points_count": 6,
      "avg_score": 0.3536
    },
    {
      "start_km": 1.8,
      "end_km": 1.8,
      "tier": "GREEN",
      "color": "#16a34a",
      "coordinates": [
        [
          88.51335565548925,
          27.180786855472558
        ]
      ],
      "sample_points_count": 1,
      "avg_score": 0.1505
    },
    {
      "start_km": 2.11,
      "end_km": 3.01,
      "tier": "YELLOW",
      "color": "#f59e0b",
      "coordinates": [
        [
          88.51063636035192,
          27.18078023243519
        ],
        [
          88.50870907193492,
          27.180984090858598
        ],
        [
          88.50776858703443,
          27.183366525626248
        ],
        [
          88.50525622993109,
          27.18469692249222
        ]
      ],
      "sample_points_count": 4,
      "avg_score": 0.3477
    },
    {
      "start_km": 3.31,
      "end_km": 4.21,
      "tier": "GREEN",
      "color": "#16a34a",
      "coordinates": [
        [
          88.50447631934979,
          27.186260575330547
        ],
        [
          88.50374173099294,
          27.18702243565856
        ],
        [
          88.50167291354452,
          27.188587560637476
        ],
        [
          88.49920075041182,
          27.18730413245095
        ]
      ],
      "sample_points_count": 4,
      "avg_score": 0.1337
    },
    {
      "start_km": 4.51,
      "end_km": 4.81,
      "tier": "YELLOW",
      "color": "#f59e0b",
      "coordinates": [
        [
          88.49771365894861,
          27.186461335180887
        ],
        [
          88.49786321223388,
          27.188968887460064
        ]
      ],
      "sample_points_count": 2,
      "avg_score": 0.3389
    },
    {
      "start_km": 5.11,
      "end_km": 5.72,
      "tier": "GREEN",
      "color": "#16a34a",
      "coordinates": [
        [
          88.49645160163034,
          27.191362425002133
        ],
        [
          88.49438308011017,
          27.193206837153976
        ],
        [
          88.49237559411179,
          27.195016546107738
        ]
      ],
      "sample_points_count": 3,
      "avg_score": 0.1167
    },
    {
      "start_km": 6.02,
      "end_km": 8.42,
      "tier": "YELLOW",
      "color": "#f59e0b",
      "coordinates": [
        [
          88.49130975925473,
          27.196291734099216
        ],
        [
          88.48957175588446,
          27.19851483432164
        ],
        [
          88.48836704729752,
          27.200965457518443
        ],
        [
          88.48671131565176,
          27.203156565190515
        ],
        [
          88.4872334912945,
          27.20536003282366
        ],
        [
          88.4895259938953,
          27.206932377410077
        ],
        [
          88.49102871089131,
          27.20904035367916
        ],
        [
          88.49112830911193,
          27.211752793698786
        ],
        [
          88.4899385228963,
          27.2140707479342
        ]
      ],
      "sample_points_count": 9,
      "avg_score": 0.3414
    },
    {
      "start_km": 8.72,
      "end_km": 8.72,
      "tier": "GREEN",
      "color": "#16a34a",
      "coordinates": [
        [
          88.49051994579435,
          27.216609107982382
        ]
      ],
      "sample_points_count": 1,
      "avg_score": 0.135
    },
    {
      "start_km": 9.02,
      "end_km": 10.53,
      "tier": "YELLOW",
      "color": "#f59e0b",
      "coordinates": [
        [
          88.49004079261069,
          27.219247278859566
        ],
        [
          88.49112028531421,
          27.221775108018406
        ],
        [
          88.49221388849226,
          27.224194834312502
        ],
        [
          88.49324857316087,
          27.22657069894101
        ],
        [
          88.49404877622848,
          27.229039049029463
        ],
        [
          88.49618639210652,
          27.230621666795095
        ]
      ],
      "sample_points_count": 6,
      "avg_score": 0.323
    },
    {
      "start_km": 10.83,
      "end_km": 10.83,
      "tier": "GREEN",
      "color": "#16a34a",
      "coordinates": [
        [
          88.49912002207054,
          27.231055784976128
        ]
      ],
      "sample_points_count": 1,
      "avg_score": 0.1538
    },
    {
      "start_km": 11.13,
      "end_km": 14.74,
      "tier": "YELLOW",
      "color": "#f59e0b",
      "coordinates": [
        [
          88.49703755976164,
          27.23255013718279
        ],
        [
          88.49960634662058,
          27.232940523339956
        ],
        [
          88.50247658233218,
          27.23313355474088
        ],
        [
          88.50476866096314,
          27.234637013922633
        ],
        [
          88.50717301817811,
          27.236036691396272
        ],
        [
          88.50998946069738,
          27.236740955563185
        ],
        [
          88.51291363436292,
          27.23700703674593
        ],
        [
          88.51444444210031,
          27.23914121711615
        ],
        [
          88.51662801779429,
          27.24066449275438
        ],
        [
          88.51938316347831,
          27.241323006249505
        ],
        [
          88.52199375781204,
          27.242458559199182
        ],
        [
          88.52405205465679,
          27.244385765417963
        ],
        [
          88.52606905287197,
          27.24616425842034
        ]
      ],
      "sample_points_count": 13,
      "avg_score": 0.3569
    },
    {
      "start_km": 15.04,
      "end_km": 15.34,
      "tier": "GREEN",
      "color": "#16a34a",
      "coordinates": [
        [
          88.5283073317732,
          27.24781823929198
        ],
        [
          88.53059269794413,
          27.24958934134221
        ]
      ],
      "sample_points_count": 2,
      "avg_score": 0.1389
    },
    {
      "start_km": 15.64,
      "end_km": 19.85,
      "tier": "YELLOW",
      "color": "#f59e0b",
      "coordinates": [
        [
          88.53290778106297,
          27.250570649714227
        ],
        [
          88.53581186984766,
          27.250458143906958
        ],
        [
          88.53845219381785,
          27.250452426437032
        ],
        [
          88.54076970110812,
          27.252029088578208
        ],
        [
          88.5401875998477,
          27.252177025629575
        ],
        [
          88.54133186518136,
          27.253731032945403
        ],
        [
          88.5436327739047,
          27.255361677402203
        ],
        [
          88.54600959212023,
          27.256865309171207
        ],
        [
          88.54833620282184,
          27.25775705794951
        ],
        [
          88.55043314786121,
          27.259596970916824
        ],
        [
          88.55307215990409,
          27.26081090623407
        ],
        [
          88.55571943576325,
          27.26130553376984
        ],
        [
          88.55674732061574,
          27.263408612491673
        ],
        [
          88.55926652884786,
          27.26484572094409
        ],
        [
          88.561880088061,
          27.26356907370114
        ]
      ],
      "sample_points_count": 15,
      "avg_score": 0.3731
    },
    {
      "start_km": 20.15,
      "end_km": 20.15,
      "tier": "GREEN",
      "color": "#16a34a",
      "coordinates": [
        [
          88.5620924327074,
          27.26108993056133
        ]
      ],
      "sample_points_count": 1,
      "avg_score": 0.1225
    },
    {
      "start_km": 20.45,
      "end_km": 21.66,
      "tier": "YELLOW",
      "color": "#f59e0b",
      "coordinates": [
        [
          88.56456070056444,
          27.26173598094947
        ],
        [
          88.56711069739663,
          27.262701285088394
        ],
        [
          88.5698450831199,
          27.263779709268196
        ],
        [
          88.5723231990109,
          27.265190843923236
        ],
        [
          88.57482332380714,
          27.266675962984806
        ]
      ],
      "sample_points_count": 5,
      "avg_score": 0.3345
    },
    {
      "start_km": 21.96,
      "end_km": 21.96,
      "tier": "GREEN",
      "color": "#16a34a",
      "coordinates": [
        [
          88.57624206608219,
          27.268089457816874
        ]
      ],
      "sample_points_count": 1,
      "avg_score": 0.121
    },
    {
      "start_km": 22.26,
      "end_km": 27.97,
      "tier": "YELLOW",
      "color": "#f59e0b",
      "coordinates": [
        [
          88.57868592285573,
          27.268947851019707
        ],
        [
          88.5770961252391,
          27.269790739771164
        ],
        [
          88.57430038355606,
          27.270440062127637
        ],
        [
          88.57567083199807,
          27.271044421785138
        ],
        [
          88.57680116264021,
          27.27055660440239
        ],
        [
          88.57481724669846,
          27.2716267555511
        ],
        [
          88.57476002272448,
          27.27201223326257
        ],
        [
          88.57757116945768,
          27.272411543613917
        ],
        [
          88.57957456708981,
          27.273346123696296
        ],
        [
          88.58236866596465,
          27.27261962269155
        ],
        [
          88.58339608335604,
          27.2740152884129
        ],
        [
          88.58477610223265,
          27.27639468636257
        ],
        [
          88.5864887709841,
          27.278572963886276
        ],
        [
          88.58877274136316,
          27.280218840365976
        ],
        [
          88.58904938103204,
          27.282296413944184
        ],
        [
          88.58975801736656,
          27.283051030972437
        ],
        [
          88.59016448816581,
          27.28526199516799
        ],
        [
          88.5913048963545,
          27.287281240837558
        ],
        [
          88.59200617481761,
          27.289707086006878
        ],
        [
          88.59038107202267,
          27.291842277902987
        ]
      ],
      "sample_points_count": 20,
      "avg_score": 0.3446
    },
    {
      "start_km": 28.27,
      "end_km": 28.58,
      "tier": "GREEN",
      "color": "#16a34a",
      "coordinates": [
        [
          88.58873733561752,
          27.29384878348594
        ],
        [
          88.59058086352346,
          27.293554621933442
        ]
      ],
      "sample_points_count": 2,
      "avg_score": 0.1129
    },
    {
      "start_km": 28.88,
      "end_km": 29.18,
      "tier": "YELLOW",
      "color": "#f59e0b",
      "coordinates": [
        [
          88.59021031461737,
          27.29493584708373
        ],
        [
          88.5880012897968,
          27.296182184234308
        ]
      ],
      "sample_points_count": 2,
      "avg_score": 0.3249
    },
    {
      "start_km": 29.48,
      "end_km": 29.48,
      "tier": "GREEN",
      "color": "#16a34a",
      "coordinates": [
        [
          88.58777960998209,
          27.298508758831716
        ]
      ],
      "sample_points_count": 1,
      "avg_score": 0.1318
    },
    {
      "start_km": 29.78,
      "end_km": 30.98,
      "tier": "YELLOW",
      "color": "#f59e0b",
      "coordinates": [
        [
          88.58895666590584,
          27.30090952255133
        ],
        [
          88.58790659295647,
          27.303279348024066
        ],
        [
          88.58828178838715,
          27.30514670325986
        ],
        [
          88.58826150652983,
          27.307466254154882
        ],
        [
          88.58924583534625,
          27.309538312488606
        ]
      ],
      "sample_points_count": 5,
      "avg_score": 0.3451
    },
    {
      "start_km": 31.28,
      "end_km": 31.58,
      "tier": "GREEN",
      "color": "#16a34a",
      "coordinates": [
        [
          88.58923721766175,
          27.311879498642238
        ],
        [
          88.5921292177558,
          27.31214707117527
        ]
      ],
      "sample_points_count": 2,
      "avg_score": 0.1794
    },
    {
      "start_km": 31.88,
      "end_km": 32.18,
      "tier": "YELLOW",
      "color": "#f59e0b",
      "coordinates": [
        [
          88.59421660183278,
          27.313734958462014
        ],
        [
          88.59550877350158,
          27.31576899743039
        ]
      ],
      "sample_points_count": 2,
      "avg_score": 0.2868
    },
    {
      "start_km": 32.49,
      "end_km": 33.39,
      "tier": "GREEN",
      "color": "#16a34a",
      "coordinates": [
        [
          88.59615848743059,
          27.317109097132256
        ],
        [
          88.59716841319499,
          27.314738393903742
        ],
        [
          88.5959514065974,
          27.31272920881144
        ],
        [
          88.59515509911715,
          27.310151686505645
        ]
      ],
      "sample_points_count": 4,
      "avg_score": 0.1228
    },
    {
      "start_km": 33.69,
      "end_km": 35.49,
      "tier": "YELLOW",
      "color": "#f59e0b",
      "coordinates": [
        [
          88.59406337463041,
          27.30767374031216
        ],
        [
          88.59492572101315,
          27.3079176768343
        ],
        [
          88.59704583630271,
          27.309811608403038
        ],
        [
          88.59877774694813,
          27.312005713900003
        ],
        [
          88.60089782028842,
          27.313916657850218
        ],
        [
          88.60084395228866,
          27.316136013514935
        ],
        [
          88.6026514252172,
          27.31796432714395
        ]
      ],
      "sample_points_count": 7,
      "avg_score": 0.3025
    },
    {
      "start_km": 35.79,
      "end_km": 36.1,
      "tier": "GREEN",
      "color": "#16a34a",
      "coordinates": [
        [
          88.60474763902833,
          27.319567333605676
        ],
        [
          88.60674574196288,
          27.321422219102526
        ]
      ],
      "sample_points_count": 2,
      "avg_score": 0.1326
    },
    {
      "start_km": 36.4,
      "end_km": 37.0,
      "tier": "YELLOW",
      "color": "#f59e0b",
      "coordinates": [
        [
          88.60669805459912,
          27.32036359888262
        ],
        [
          88.60497914708178,
          27.318223931798464
        ],
        [
          88.60575669629804,
          27.318035722673795
        ]
      ],
      "sample_points_count": 3,
      "avg_score": 0.2871
    },
    {
      "start_km": 37.3,
      "end_km": 37.3,
      "tier": "GREEN",
      "color": "#16a34a",
      "coordinates": [
        [
          88.60831709790618,
          27.319281050272508
        ]
      ],
      "sample_points_count": 1,
      "avg_score": 0.1121
    },
    {
      "start_km": 37.6,
      "end_km": 38.5,
      "tier": "YELLOW",
      "color": "#f59e0b",
      "coordinates": [
        [
          88.60901788928884,
          27.32175373149346
        ],
        [
          88.61010557768428,
          27.3242526652515
        ],
        [
          88.61020622325874,
          27.326921785702847
        ],
        [
          88.61170701160565,
          27.328307477745327
        ]
      ],
      "sample_points_count": 4,
      "avg_score": 0.3107
    },
    {
      "start_km": 38.8,
      "end_km": 38.8,
      "tier": "GREEN",
      "color": "#16a34a",
      "coordinates": [
        [
          88.6129900161397,
          27.330464207848426
        ]
      ],
      "sample_points_count": 1,
      "avg_score": 0.1145
    },
    {
      "start_km": 39.1,
      "end_km": 40.01,
      "tier": "YELLOW",
      "color": "#f59e0b",
      "coordinates": [
        [
          88.6146982641041,
          27.332538535599905
        ],
        [
          88.61506206570861,
          27.335068372176167
        ],
        [
          88.61457890587866,
          27.337388995966716
        ],
        [
          88.613773,
          27.339218999999996
        ]
      ],
      "sample_points_count": 4,
      "avg_score": 0.2973
    }
  ],
  "sample_points": [
    {
      "index": 0,
      "latitude": 27.176690999999998,
      "longitude": 88.528489,
      "distance_km": 0.0,
      "in_coverage": true,
      "elevation_m": 310.6,
      "slope_deg": 27.8,
      "aspect_deg": 210.0,
      "curvature": -1.3884,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3313,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 1,
      "latitude": 27.177428947893343,
      "longitude": 88.52567025985707,
      "distance_km": 0.3,
      "in_coverage": true,
      "elevation_m": 319.1,
      "slope_deg": 30.7,
      "aspect_deg": 191.0,
      "curvature": -0.6097,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3509,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 2,
      "latitude": 27.177404196026153,
      "longitude": 88.5226465330966,
      "distance_km": 0.6,
      "in_coverage": true,
      "elevation_m": 322.9,
      "slope_deg": 25.9,
      "aspect_deg": 186.2,
      "curvature": -0.2866,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3427,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Steep Slope",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 3,
      "latitude": 27.178578238607518,
      "longitude": 88.52031229758354,
      "distance_km": 0.9,
      "in_coverage": true,
      "elevation_m": 331.8,
      "slope_deg": 43.7,
      "aspect_deg": 242.7,
      "curvature": -0.2531,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3771,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 4,
      "latitude": 27.180653983894988,
      "longitude": 88.51853473623797,
      "distance_km": 1.2,
      "in_coverage": true,
      "elevation_m": 326.0,
      "slope_deg": 40.7,
      "aspect_deg": 205.0,
      "curvature": -1.4755,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3629,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 5,
      "latitude": 27.181730936779747,
      "longitude": 88.51600158731934,
      "distance_km": 1.5,
      "in_coverage": true,
      "elevation_m": 352.3,
      "slope_deg": 26.3,
      "aspect_deg": 181.3,
      "curvature": -0.0492,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3565,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 6,
      "latitude": 27.180786855472558,
      "longitude": 88.51335565548925,
      "distance_km": 1.8,
      "in_coverage": true,
      "elevation_m": 360.2,
      "slope_deg": 4.7,
      "aspect_deg": 138.2,
      "curvature": 0.3524,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.1505,
      "tier": "GREEN",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 7,
      "latitude": 27.18078023243519,
      "longitude": 88.51063636035192,
      "distance_km": 2.11,
      "in_coverage": true,
      "elevation_m": 387.6,
      "slope_deg": 39.3,
      "aspect_deg": 126.7,
      "curvature": -0.5228,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.384,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 8,
      "latitude": 27.180984090858598,
      "longitude": 88.50870907193492,
      "distance_km": 2.41,
      "in_coverage": true,
      "elevation_m": 400.1,
      "slope_deg": 52.3,
      "aspect_deg": 232.0,
      "curvature": 0.0235,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.354,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 9,
      "latitude": 27.183366525626248,
      "longitude": 88.50776858703443,
      "distance_km": 2.71,
      "in_coverage": true,
      "elevation_m": 413.8,
      "slope_deg": 24.1,
      "aspect_deg": 224.2,
      "curvature": -0.2252,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.312,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 10,
      "latitude": 27.18469692249222,
      "longitude": 88.50525622993109,
      "distance_km": 3.01,
      "in_coverage": true,
      "elevation_m": 384.1,
      "slope_deg": 34.8,
      "aspect_deg": 247.2,
      "curvature": 0.8554,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3407,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 11,
      "latitude": 27.186260575330547,
      "longitude": 88.50447631934979,
      "distance_km": 3.31,
      "in_coverage": true,
      "elevation_m": 360.7,
      "slope_deg": 12.8,
      "aspect_deg": 191.2,
      "curvature": -0.3782,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.1157,
      "tier": "GREEN",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 12,
      "latitude": 27.18702243565856,
      "longitude": 88.50374173099294,
      "distance_km": 3.61,
      "in_coverage": true,
      "elevation_m": 381.2,
      "slope_deg": 8.4,
      "aspect_deg": 163.3,
      "curvature": 0.2365,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.1451,
      "tier": "GREEN",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 13,
      "latitude": 27.188587560637476,
      "longitude": 88.50167291354452,
      "distance_km": 3.91,
      "in_coverage": true,
      "elevation_m": 382.4,
      "slope_deg": 15.1,
      "aspect_deg": 187.7,
      "curvature": -0.7901,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.1446,
      "tier": "GREEN",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 14,
      "latitude": 27.18730413245095,
      "longitude": 88.49920075041182,
      "distance_km": 4.21,
      "in_coverage": true,
      "elevation_m": 376.5,
      "slope_deg": 13.5,
      "aspect_deg": 128.7,
      "curvature": -0.3831,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.1295,
      "tier": "GREEN",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 15,
      "latitude": 27.186461335180887,
      "longitude": 88.49771365894861,
      "distance_km": 4.51,
      "in_coverage": true,
      "elevation_m": 358.7,
      "slope_deg": 33.8,
      "aspect_deg": 259.9,
      "curvature": 0.7724,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3209,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 16,
      "latitude": 27.188968887460064,
      "longitude": 88.49786321223388,
      "distance_km": 4.81,
      "in_coverage": true,
      "elevation_m": 372.2,
      "slope_deg": 50.6,
      "aspect_deg": 246.3,
      "curvature": 0.3466,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.357,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 17,
      "latitude": 27.191362425002133,
      "longitude": 88.49645160163034,
      "distance_km": 5.11,
      "in_coverage": true,
      "elevation_m": 345.2,
      "slope_deg": 14.5,
      "aspect_deg": 227.7,
      "curvature": 0.1523,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.1095,
      "tier": "GREEN",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 18,
      "latitude": 27.193206837153976,
      "longitude": 88.49438308011017,
      "distance_km": 5.41,
      "in_coverage": true,
      "elevation_m": 343.2,
      "slope_deg": 13.5,
      "aspect_deg": 217.4,
      "curvature": 0.0371,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.1095,
      "tier": "GREEN",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 19,
      "latitude": 27.195016546107738,
      "longitude": 88.49237559411179,
      "distance_km": 5.72,
      "in_coverage": true,
      "elevation_m": 351.9,
      "slope_deg": 9.4,
      "aspect_deg": 295.6,
      "curvature": 0.5985,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.131,
      "tier": "GREEN",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 20,
      "latitude": 27.196291734099216,
      "longitude": 88.49130975925473,
      "distance_km": 6.02,
      "in_coverage": true,
      "elevation_m": 356.7,
      "slope_deg": 32.8,
      "aspect_deg": 228.8,
      "curvature": 0.1663,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3182,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 21,
      "latitude": 27.19851483432164,
      "longitude": 88.48957175588446,
      "distance_km": 6.32,
      "in_coverage": true,
      "elevation_m": 366.5,
      "slope_deg": 44.1,
      "aspect_deg": 224.4,
      "curvature": -0.1362,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3779,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 22,
      "latitude": 27.200965457518443,
      "longitude": 88.48836704729752,
      "distance_km": 6.62,
      "in_coverage": true,
      "elevation_m": 389.9,
      "slope_deg": 31.6,
      "aspect_deg": 237.9,
      "curvature": 0.1907,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3336,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 23,
      "latitude": 27.203156565190515,
      "longitude": 88.48671131565176,
      "distance_km": 6.92,
      "in_coverage": true,
      "elevation_m": 392.9,
      "slope_deg": 41.8,
      "aspect_deg": 232.5,
      "curvature": 0.4046,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3526,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 24,
      "latitude": 27.20536003282366,
      "longitude": 88.4872334912945,
      "distance_km": 7.22,
      "in_coverage": true,
      "elevation_m": 374.1,
      "slope_deg": 29.8,
      "aspect_deg": 318.4,
      "curvature": -0.5989,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3631,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 25,
      "latitude": 27.206932377410077,
      "longitude": 88.4895259938953,
      "distance_km": 7.52,
      "in_coverage": true,
      "elevation_m": 357.6,
      "slope_deg": 30.6,
      "aspect_deg": 311.1,
      "curvature": -0.4088,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.357,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 26,
      "latitude": 27.20904035367916,
      "longitude": 88.49102871089131,
      "distance_km": 7.82,
      "in_coverage": true,
      "elevation_m": 364.9,
      "slope_deg": 34.3,
      "aspect_deg": 266.7,
      "curvature": -0.0597,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.355,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 27,
      "latitude": 27.211752793698786,
      "longitude": 88.49112830911193,
      "distance_km": 8.12,
      "in_coverage": true,
      "elevation_m": 366.6,
      "slope_deg": 26.8,
      "aspect_deg": 245.8,
      "curvature": 0.4222,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3311,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 28,
      "latitude": 27.2140707479342,
      "longitude": 88.4899385228963,
      "distance_km": 8.42,
      "in_coverage": true,
      "elevation_m": 363.3,
      "slope_deg": 21.2,
      "aspect_deg": 247.9,
      "curvature": 0.5662,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.2842,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 29,
      "latitude": 27.216609107982382,
      "longitude": 88.49051994579435,
      "distance_km": 8.72,
      "in_coverage": true,
      "elevation_m": 381.2,
      "slope_deg": 11.4,
      "aspect_deg": 274.1,
      "curvature": 0.3099,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.135,
      "tier": "GREEN",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 30,
      "latitude": 27.219247278859566,
      "longitude": 88.49004079261069,
      "distance_km": 9.02,
      "in_coverage": true,
      "elevation_m": 357.3,
      "slope_deg": 21.4,
      "aspect_deg": 298.2,
      "curvature": 0.1045,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.2552,
      "tier": "YELLOW",
      "is_borderline": true,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 31,
      "latitude": 27.221775108018406,
      "longitude": 88.49112028531421,
      "distance_km": 9.32,
      "in_coverage": true,
      "elevation_m": 352.0,
      "slope_deg": 38.6,
      "aspect_deg": 271.2,
      "curvature": -0.4758,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3816,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 32,
      "latitude": 27.224194834312502,
      "longitude": 88.49221388849226,
      "distance_km": 9.63,
      "in_coverage": true,
      "elevation_m": 374.5,
      "slope_deg": 40.7,
      "aspect_deg": 299.2,
      "curvature": -0.2297,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3595,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 33,
      "latitude": 27.22657069894101,
      "longitude": 88.49324857316087,
      "distance_km": 9.93,
      "in_coverage": true,
      "elevation_m": 350.0,
      "slope_deg": 39.9,
      "aspect_deg": 260.9,
      "curvature": -2.0317,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3737,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 34,
      "latitude": 27.229039049029463,
      "longitude": 88.49404877622848,
      "distance_km": 10.23,
      "in_coverage": true,
      "elevation_m": 360.7,
      "slope_deg": 23.4,
      "aspect_deg": 287.4,
      "curvature": -0.7911,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.2937,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 35,
      "latitude": 27.230621666795095,
      "longitude": 88.49618639210652,
      "distance_km": 10.53,
      "in_coverage": true,
      "elevation_m": 356.8,
      "slope_deg": 17.5,
      "aspect_deg": 352.2,
      "curvature": -0.4488,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.2745,
      "tier": "YELLOW",
      "is_borderline": true,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 36,
      "latitude": 27.231055784976128,
      "longitude": 88.49912002207054,
      "distance_km": 10.83,
      "in_coverage": true,
      "elevation_m": 359.5,
      "slope_deg": 13.6,
      "aspect_deg": 330.8,
      "curvature": -0.5302,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.1538,
      "tier": "GREEN",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 37,
      "latitude": 27.23255013718279,
      "longitude": 88.49703755976164,
      "distance_km": 11.13,
      "in_coverage": true,
      "elevation_m": 377.2,
      "slope_deg": 17.4,
      "aspect_deg": 178.0,
      "curvature": -0.2146,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.317,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 38,
      "latitude": 27.232940523339956,
      "longitude": 88.49960634662058,
      "distance_km": 11.43,
      "in_coverage": true,
      "elevation_m": 385.6,
      "slope_deg": 20.0,
      "aspect_deg": 156.8,
      "curvature": -0.5243,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3943,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 39,
      "latitude": 27.23313355474088,
      "longitude": 88.50247658233218,
      "distance_km": 11.73,
      "in_coverage": true,
      "elevation_m": 395.0,
      "slope_deg": 25.0,
      "aspect_deg": 190.1,
      "curvature": 0.0754,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3263,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 40,
      "latitude": 27.234637013922633,
      "longitude": 88.50476866096314,
      "distance_km": 12.03,
      "in_coverage": true,
      "elevation_m": 399.5,
      "slope_deg": 32.3,
      "aspect_deg": 133.9,
      "curvature": -0.3426,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3552,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 41,
      "latitude": 27.236036691396272,
      "longitude": 88.50717301817811,
      "distance_km": 12.33,
      "in_coverage": true,
      "elevation_m": 406.3,
      "slope_deg": 28.6,
      "aspect_deg": 180.0,
      "curvature": -0.3983,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3447,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 42,
      "latitude": 27.236740955563185,
      "longitude": 88.50998946069738,
      "distance_km": 12.63,
      "in_coverage": true,
      "elevation_m": 426.7,
      "slope_deg": 30.9,
      "aspect_deg": 170.7,
      "curvature": -0.1526,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3599,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 43,
      "latitude": 27.23700703674593,
      "longitude": 88.51291363436292,
      "distance_km": 12.93,
      "in_coverage": true,
      "elevation_m": 420.0,
      "slope_deg": 25.5,
      "aspect_deg": 164.0,
      "curvature": 0.26,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3627,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 44,
      "latitude": 27.23914121711615,
      "longitude": 88.51444444210031,
      "distance_km": 13.23,
      "in_coverage": true,
      "elevation_m": 438.6,
      "slope_deg": 25.6,
      "aspect_deg": 115.6,
      "curvature": -0.1792,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3747,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 45,
      "latitude": 27.24066449275438,
      "longitude": 88.51662801779429,
      "distance_km": 13.54,
      "in_coverage": true,
      "elevation_m": 444.4,
      "slope_deg": 21.5,
      "aspect_deg": 151.5,
      "curvature": 0.3666,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3528,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 46,
      "latitude": 27.241323006249505,
      "longitude": 88.51938316347831,
      "distance_km": 13.84,
      "in_coverage": true,
      "elevation_m": 458.6,
      "slope_deg": 29.4,
      "aspect_deg": 170.3,
      "curvature": -0.5805,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3526,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 47,
      "latitude": 27.242458559199182,
      "longitude": 88.52199375781204,
      "distance_km": 14.14,
      "in_coverage": true,
      "elevation_m": 523.9,
      "slope_deg": 61.8,
      "aspect_deg": 114.5,
      "curvature": 0.5298,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3599,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 48,
      "latitude": 27.244385765417963,
      "longitude": 88.52405205465679,
      "distance_km": 14.44,
      "in_coverage": true,
      "elevation_m": 468.4,
      "slope_deg": 41.7,
      "aspect_deg": 120.3,
      "curvature": -0.583,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3708,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 49,
      "latitude": 27.24616425842034,
      "longitude": 88.52606905287197,
      "distance_km": 14.74,
      "in_coverage": true,
      "elevation_m": 469.1,
      "slope_deg": 21.1,
      "aspect_deg": 153.2,
      "curvature": -0.7071,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3686,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 50,
      "latitude": 27.24781823929198,
      "longitude": 88.5283073317732,
      "distance_km": 15.04,
      "in_coverage": true,
      "elevation_m": 474.9,
      "slope_deg": 12.8,
      "aspect_deg": 122.0,
      "curvature": -0.6035,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.148,
      "tier": "GREEN",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 51,
      "latitude": 27.24958934134221,
      "longitude": 88.53059269794413,
      "distance_km": 15.34,
      "in_coverage": true,
      "elevation_m": 481.1,
      "slope_deg": 14.8,
      "aspect_deg": 147.0,
      "curvature": 0.1048,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.1298,
      "tier": "GREEN",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 52,
      "latitude": 27.250570649714227,
      "longitude": 88.53290778106297,
      "distance_km": 15.64,
      "in_coverage": true,
      "elevation_m": 493.1,
      "slope_deg": 24.7,
      "aspect_deg": 199.0,
      "curvature": -0.3806,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3246,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 53,
      "latitude": 27.250458143906958,
      "longitude": 88.53581186984766,
      "distance_km": 15.94,
      "in_coverage": true,
      "elevation_m": 527.8,
      "slope_deg": 19.1,
      "aspect_deg": 211.2,
      "curvature": -0.2774,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.2959,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 54,
      "latitude": 27.250452426437032,
      "longitude": 88.53845219381785,
      "distance_km": 16.24,
      "in_coverage": true,
      "elevation_m": 554.8,
      "slope_deg": 39.1,
      "aspect_deg": 116.3,
      "curvature": -0.0747,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.4138,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 55,
      "latitude": 27.252029088578208,
      "longitude": 88.54076970110812,
      "distance_km": 16.54,
      "in_coverage": true,
      "elevation_m": 563.7,
      "slope_deg": 26.5,
      "aspect_deg": 159.0,
      "curvature": 0.3722,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3651,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 56,
      "latitude": 27.252177025629575,
      "longitude": 88.5401875998477,
      "distance_km": 16.84,
      "in_coverage": true,
      "elevation_m": 573.0,
      "slope_deg": 25.3,
      "aspect_deg": 154.4,
      "curvature": 0.0185,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.353,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 57,
      "latitude": 27.253731032945403,
      "longitude": 88.54133186518136,
      "distance_km": 17.15,
      "in_coverage": true,
      "elevation_m": 604.0,
      "slope_deg": 29.2,
      "aspect_deg": 133.4,
      "curvature": -0.3646,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3718,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 58,
      "latitude": 27.255361677402203,
      "longitude": 88.5436327739047,
      "distance_km": 17.45,
      "in_coverage": true,
      "elevation_m": 625.3,
      "slope_deg": 42.8,
      "aspect_deg": 143.3,
      "curvature": 0.5469,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.393,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 59,
      "latitude": 27.256865309171207,
      "longitude": 88.54600959212023,
      "distance_km": 17.75,
      "in_coverage": true,
      "elevation_m": 643.2,
      "slope_deg": 33.6,
      "aspect_deg": 136.1,
      "curvature": 0.582,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3586,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 60,
      "latitude": 27.25775705794951,
      "longitude": 88.54833620282184,
      "distance_km": 18.05,
      "in_coverage": true,
      "elevation_m": 619.4,
      "slope_deg": 43.1,
      "aspect_deg": 161.9,
      "curvature": 0.0345,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.379,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 61,
      "latitude": 27.259596970916824,
      "longitude": 88.55043314786121,
      "distance_km": 18.35,
      "in_coverage": true,
      "elevation_m": 632.5,
      "slope_deg": 35.4,
      "aspect_deg": 137.5,
      "curvature": -0.0293,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3926,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 62,
      "latitude": 27.26081090623407,
      "longitude": 88.55307215990409,
      "distance_km": 18.65,
      "in_coverage": true,
      "elevation_m": 644.4,
      "slope_deg": 37.3,
      "aspect_deg": 152.4,
      "curvature": -0.1734,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.4079,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 63,
      "latitude": 27.26130553376984,
      "longitude": 88.55571943576325,
      "distance_km": 18.95,
      "in_coverage": true,
      "elevation_m": 626.3,
      "slope_deg": 22.7,
      "aspect_deg": 161.3,
      "curvature": 0.484,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3717,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 64,
      "latitude": 27.263408612491673,
      "longitude": 88.55674732061574,
      "distance_km": 19.25,
      "in_coverage": true,
      "elevation_m": 625.8,
      "slope_deg": 20.7,
      "aspect_deg": 139.4,
      "curvature": -0.386,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3815,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 65,
      "latitude": 27.26484572094409,
      "longitude": 88.55926652884786,
      "distance_km": 19.55,
      "in_coverage": true,
      "elevation_m": 639.1,
      "slope_deg": 42.6,
      "aspect_deg": 162.3,
      "curvature": -1.3551,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3955,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 66,
      "latitude": 27.26356907370114,
      "longitude": 88.561880088061,
      "distance_km": 19.85,
      "in_coverage": true,
      "elevation_m": 653.2,
      "slope_deg": 49.3,
      "aspect_deg": 235.1,
      "curvature": -0.2379,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3929,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 67,
      "latitude": 27.26108993056133,
      "longitude": 88.5620924327074,
      "distance_km": 20.15,
      "in_coverage": true,
      "elevation_m": 644.5,
      "slope_deg": 11.1,
      "aspect_deg": 212.4,
      "curvature": 0.4531,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.1225,
      "tier": "GREEN",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 68,
      "latitude": 27.26173598094947,
      "longitude": 88.56456070056444,
      "distance_km": 20.45,
      "in_coverage": true,
      "elevation_m": 665.7,
      "slope_deg": 16.2,
      "aspect_deg": 158.7,
      "curvature": 0.8322,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.2601,
      "tier": "YELLOW",
      "is_borderline": true,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 69,
      "latitude": 27.262701285088394,
      "longitude": 88.56711069739663,
      "distance_km": 20.75,
      "in_coverage": true,
      "elevation_m": 678.8,
      "slope_deg": 33.8,
      "aspect_deg": 156.8,
      "curvature": 0.6907,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3472,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 70,
      "latitude": 27.263779709268196,
      "longitude": 88.5698450831199,
      "distance_km": 21.06,
      "in_coverage": true,
      "elevation_m": 672.1,
      "slope_deg": 17.3,
      "aspect_deg": 154.1,
      "curvature": -0.5921,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3348,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 71,
      "latitude": 27.265190843923236,
      "longitude": 88.5723231990109,
      "distance_km": 21.36,
      "in_coverage": true,
      "elevation_m": 678.4,
      "slope_deg": 24.4,
      "aspect_deg": 141.5,
      "curvature": -0.3485,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3615,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 72,
      "latitude": 27.266675962984806,
      "longitude": 88.57482332380714,
      "distance_km": 21.66,
      "in_coverage": true,
      "elevation_m": 683.5,
      "slope_deg": 33.7,
      "aspect_deg": 137.2,
      "curvature": -1.4542,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.369,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 73,
      "latitude": 27.268089457816874,
      "longitude": 88.57624206608219,
      "distance_km": 21.96,
      "in_coverage": true,
      "elevation_m": 710.3,
      "slope_deg": 14.0,
      "aspect_deg": 130.9,
      "curvature": -0.4118,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.121,
      "tier": "GREEN",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 74,
      "latitude": 27.268947851019707,
      "longitude": 88.57868592285573,
      "distance_km": 22.26,
      "in_coverage": true,
      "elevation_m": 723.3,
      "slope_deg": 25.0,
      "aspect_deg": 147.9,
      "curvature": -0.2666,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3457,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 75,
      "latitude": 27.269790739771164,
      "longitude": 88.5770961252391,
      "distance_km": 22.56,
      "in_coverage": true,
      "elevation_m": 788.2,
      "slope_deg": 34.3,
      "aspect_deg": 190.1,
      "curvature": 0.0923,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3491,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 76,
      "latitude": 27.270440062127637,
      "longitude": 88.57430038355606,
      "distance_km": 22.86,
      "in_coverage": true,
      "elevation_m": 796.4,
      "slope_deg": 27.0,
      "aspect_deg": 185.0,
      "curvature": 0.5319,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3497,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 77,
      "latitude": 27.271044421785138,
      "longitude": 88.57567083199807,
      "distance_km": 23.16,
      "in_coverage": true,
      "elevation_m": 823.7,
      "slope_deg": 23.6,
      "aspect_deg": 187.4,
      "curvature": -0.1042,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.361,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 78,
      "latitude": 27.27055660440239,
      "longitude": 88.57680116264021,
      "distance_km": 23.46,
      "in_coverage": true,
      "elevation_m": 841.0,
      "slope_deg": 26.2,
      "aspect_deg": 200.1,
      "curvature": 1.2819,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3009,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Steep Slope",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 79,
      "latitude": 27.2716267555511,
      "longitude": 88.57481724669846,
      "distance_km": 23.76,
      "in_coverage": true,
      "elevation_m": 863.7,
      "slope_deg": 29.4,
      "aspect_deg": 187.7,
      "curvature": 0.2701,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3388,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 80,
      "latitude": 27.27201223326257,
      "longitude": 88.57476002272448,
      "distance_km": 24.06,
      "in_coverage": true,
      "elevation_m": 880.6,
      "slope_deg": 25.8,
      "aspect_deg": 198.3,
      "curvature": 0.8634,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3163,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 81,
      "latitude": 27.272411543613917,
      "longitude": 88.57757116945768,
      "distance_km": 24.36,
      "in_coverage": true,
      "elevation_m": 902.2,
      "slope_deg": 33.3,
      "aspect_deg": 128.8,
      "curvature": 0.8688,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3486,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 82,
      "latitude": 27.273346123696296,
      "longitude": 88.57957456708981,
      "distance_km": 24.67,
      "in_coverage": true,
      "elevation_m": 912.4,
      "slope_deg": 24.2,
      "aspect_deg": 203.7,
      "curvature": 0.2032,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3559,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 83,
      "latitude": 27.27261962269155,
      "longitude": 88.58236866596465,
      "distance_km": 24.97,
      "in_coverage": true,
      "elevation_m": 940.6,
      "slope_deg": 27.4,
      "aspect_deg": 204.3,
      "curvature": -0.0363,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3671,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 84,
      "latitude": 27.2740152884129,
      "longitude": 88.58339608335604,
      "distance_km": 25.27,
      "in_coverage": true,
      "elevation_m": 966.0,
      "slope_deg": 16.7,
      "aspect_deg": 128.7,
      "curvature": 0.0174,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.2945,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 85,
      "latitude": 27.27639468636257,
      "longitude": 88.58477610223265,
      "distance_km": 25.57,
      "in_coverage": true,
      "elevation_m": 987.6,
      "slope_deg": 21.8,
      "aspect_deg": 119.5,
      "curvature": -0.1763,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3386,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 86,
      "latitude": 27.278572963886276,
      "longitude": 88.5864887709841,
      "distance_km": 25.87,
      "in_coverage": true,
      "elevation_m": 972.1,
      "slope_deg": 28.1,
      "aspect_deg": 143.9,
      "curvature": -0.7756,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.367,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 87,
      "latitude": 27.280218840365976,
      "longitude": 88.58877274136316,
      "distance_km": 26.17,
      "in_coverage": true,
      "elevation_m": 977.2,
      "slope_deg": 35.2,
      "aspect_deg": 146.1,
      "curvature": -1.297,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3849,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 88,
      "latitude": 27.282296413944184,
      "longitude": 88.58904938103204,
      "distance_km": 26.47,
      "in_coverage": true,
      "elevation_m": 962.4,
      "slope_deg": 34.1,
      "aspect_deg": 59.9,
      "curvature": -0.7421,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3741,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 89,
      "latitude": 27.283051030972437,
      "longitude": 88.58975801736656,
      "distance_km": 26.77,
      "in_coverage": true,
      "elevation_m": 932.2,
      "slope_deg": 20.9,
      "aspect_deg": 101.0,
      "curvature": -0.0234,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3161,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 90,
      "latitude": 27.28526199516799,
      "longitude": 88.59016448816581,
      "distance_km": 27.07,
      "in_coverage": true,
      "elevation_m": 905.2,
      "slope_deg": 32.5,
      "aspect_deg": 89.5,
      "curvature": -0.748,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3609,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 91,
      "latitude": 27.287281240837558,
      "longitude": 88.5913048963545,
      "distance_km": 27.37,
      "in_coverage": true,
      "elevation_m": 878.2,
      "slope_deg": 30.9,
      "aspect_deg": 73.6,
      "curvature": -0.0779,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3751,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 92,
      "latitude": 27.289707086006878,
      "longitude": 88.59200617481761,
      "distance_km": 27.67,
      "in_coverage": true,
      "elevation_m": 873.6,
      "slope_deg": 26.3,
      "aspect_deg": 111.0,
      "curvature": 0.155,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3531,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 93,
      "latitude": 27.291842277902987,
      "longitude": 88.59038107202267,
      "distance_km": 27.97,
      "in_coverage": true,
      "elevation_m": 864.1,
      "slope_deg": 18.8,
      "aspect_deg": 29.7,
      "curvature": -0.1647,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.2955,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 94,
      "latitude": 27.29384878348594,
      "longitude": 88.58873733561752,
      "distance_km": 28.27,
      "in_coverage": true,
      "elevation_m": 847.1,
      "slope_deg": 5.2,
      "aspect_deg": 78.1,
      "curvature": -1.3745,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.1144,
      "tier": "GREEN",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 95,
      "latitude": 27.293554621933442,
      "longitude": 88.59058086352346,
      "distance_km": 28.58,
      "in_coverage": true,
      "elevation_m": 874.4,
      "slope_deg": 15.2,
      "aspect_deg": 226.4,
      "curvature": 0.3321,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.1113,
      "tier": "GREEN",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 96,
      "latitude": 27.29493584708373,
      "longitude": 88.59021031461737,
      "distance_km": 28.88,
      "in_coverage": true,
      "elevation_m": 894.6,
      "slope_deg": 30.9,
      "aspect_deg": 217.2,
      "curvature": -0.7794,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3703,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 97,
      "latitude": 27.296182184234308,
      "longitude": 88.5880012897968,
      "distance_km": 29.18,
      "in_coverage": true,
      "elevation_m": 924.4,
      "slope_deg": 20.3,
      "aspect_deg": 233.7,
      "curvature": 0.4225,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.2795,
      "tier": "YELLOW",
      "is_borderline": true,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 98,
      "latitude": 27.298508758831716,
      "longitude": 88.58777960998209,
      "distance_km": 29.48,
      "in_coverage": true,
      "elevation_m": 944.7,
      "slope_deg": 14.8,
      "aspect_deg": 273.9,
      "curvature": 0.3635,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.1318,
      "tier": "GREEN",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 99,
      "latitude": 27.30090952255133,
      "longitude": 88.58895666590584,
      "distance_km": 29.78,
      "in_coverage": true,
      "elevation_m": 990.3,
      "slope_deg": 35.5,
      "aspect_deg": 251.8,
      "curvature": 0.1525,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3599,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 100,
      "latitude": 27.303279348024066,
      "longitude": 88.58790659295647,
      "distance_km": 30.08,
      "in_coverage": true,
      "elevation_m": 1002.9,
      "slope_deg": 28.9,
      "aspect_deg": 275.3,
      "curvature": 0.3161,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3576,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 101,
      "latitude": 27.30514670325986,
      "longitude": 88.58828178838715,
      "distance_km": 30.38,
      "in_coverage": true,
      "elevation_m": 1025.7,
      "slope_deg": 26.9,
      "aspect_deg": 248.8,
      "curvature": 0.8471,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3095,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 102,
      "latitude": 27.307466254154882,
      "longitude": 88.58826150652983,
      "distance_km": 30.68,
      "in_coverage": true,
      "elevation_m": 1050.1,
      "slope_deg": 24.5,
      "aspect_deg": 245.5,
      "curvature": 0.2121,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3514,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 103,
      "latitude": 27.309538312488606,
      "longitude": 88.58924583534625,
      "distance_km": 30.98,
      "in_coverage": true,
      "elevation_m": 1084.6,
      "slope_deg": 24.0,
      "aspect_deg": 301.0,
      "curvature": 0.4154,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.347,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 104,
      "latitude": 27.311879498642238,
      "longitude": 88.58923721766175,
      "distance_km": 31.28,
      "in_coverage": true,
      "elevation_m": 1094.5,
      "slope_deg": 16.3,
      "aspect_deg": 314.7,
      "curvature": 0.2451,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.2417,
      "tier": "GREEN",
      "is_borderline": true,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 105,
      "latitude": 27.31214707117527,
      "longitude": 88.5921292177558,
      "distance_km": 31.58,
      "in_coverage": true,
      "elevation_m": 1117.1,
      "slope_deg": 11.2,
      "aspect_deg": 335.4,
      "curvature": -0.3655,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.117,
      "tier": "GREEN",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 106,
      "latitude": 27.313734958462014,
      "longitude": 88.59421660183278,
      "distance_km": 31.88,
      "in_coverage": true,
      "elevation_m": 1136.3,
      "slope_deg": 21.5,
      "aspect_deg": 305.0,
      "curvature": 0.1503,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.2683,
      "tier": "YELLOW",
      "is_borderline": true,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 107,
      "latitude": 27.31576899743039,
      "longitude": 88.59550877350158,
      "distance_km": 32.18,
      "in_coverage": true,
      "elevation_m": 1168.1,
      "slope_deg": 22.2,
      "aspect_deg": 252.9,
      "curvature": 0.3773,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3053,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 108,
      "latitude": 27.317109097132256,
      "longitude": 88.59615848743059,
      "distance_km": 32.49,
      "in_coverage": true,
      "elevation_m": 1181.9,
      "slope_deg": 10.6,
      "aspect_deg": 300.3,
      "curvature": 0.4617,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.1304,
      "tier": "GREEN",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 109,
      "latitude": 27.314738393903742,
      "longitude": 88.59716841319499,
      "distance_km": 32.79,
      "in_coverage": true,
      "elevation_m": 1202.1,
      "slope_deg": 15.2,
      "aspect_deg": 269.5,
      "curvature": -0.6357,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.1206,
      "tier": "GREEN",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 110,
      "latitude": 27.31272920881144,
      "longitude": 88.5959514065974,
      "distance_km": 33.09,
      "in_coverage": true,
      "elevation_m": 1219.3,
      "slope_deg": 13.3,
      "aspect_deg": 321.2,
      "curvature": 0.7552,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.124,
      "tier": "GREEN",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 111,
      "latitude": 27.310151686505645,
      "longitude": 88.59515509911715,
      "distance_km": 33.39,
      "in_coverage": true,
      "elevation_m": 1240.8,
      "slope_deg": 15.1,
      "aspect_deg": 285.6,
      "curvature": 0.0266,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.1161,
      "tier": "GREEN",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 112,
      "latitude": 27.30767374031216,
      "longitude": 88.59406337463041,
      "distance_km": 33.69,
      "in_coverage": true,
      "elevation_m": 1251.0,
      "slope_deg": 30.5,
      "aspect_deg": 303.9,
      "curvature": 0.0432,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3717,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 113,
      "latitude": 27.3079176768343,
      "longitude": 88.59492572101315,
      "distance_km": 33.99,
      "in_coverage": true,
      "elevation_m": 1279.4,
      "slope_deg": 19.3,
      "aspect_deg": 329.2,
      "curvature": 0.2655,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.2912,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 114,
      "latitude": 27.309811608403038,
      "longitude": 88.59704583630271,
      "distance_km": 34.29,
      "in_coverage": true,
      "elevation_m": 1291.2,
      "slope_deg": 21.3,
      "aspect_deg": 291.0,
      "curvature": -0.0524,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.258,
      "tier": "YELLOW",
      "is_borderline": true,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 115,
      "latitude": 27.312005713900003,
      "longitude": 88.59877774694813,
      "distance_km": 34.59,
      "in_coverage": true,
      "elevation_m": 1312.7,
      "slope_deg": 22.0,
      "aspect_deg": 295.7,
      "curvature": 0.0371,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.2715,
      "tier": "YELLOW",
      "is_borderline": true,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 116,
      "latitude": 27.313916657850218,
      "longitude": 88.60089782028842,
      "distance_km": 34.89,
      "in_coverage": true,
      "elevation_m": 1349.7,
      "slope_deg": 27.5,
      "aspect_deg": 301.7,
      "curvature": -0.0902,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3664,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 117,
      "latitude": 27.316136013514935,
      "longitude": 88.60084395228866,
      "distance_km": 35.19,
      "in_coverage": true,
      "elevation_m": 1353.7,
      "slope_deg": 20.9,
      "aspect_deg": 231.8,
      "curvature": 0.4774,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.2861,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 118,
      "latitude": 27.31796432714395,
      "longitude": 88.6026514252172,
      "distance_km": 35.49,
      "in_coverage": true,
      "elevation_m": 1382.6,
      "slope_deg": 21.8,
      "aspect_deg": 307.8,
      "curvature": -0.1292,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.2727,
      "tier": "YELLOW",
      "is_borderline": true,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 119,
      "latitude": 27.319567333605676,
      "longitude": 88.60474763902833,
      "distance_km": 35.79,
      "in_coverage": true,
      "elevation_m": 1403.1,
      "slope_deg": 14.9,
      "aspect_deg": 328.5,
      "curvature": 0.0166,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.1264,
      "tier": "GREEN",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 120,
      "latitude": 27.321422219102526,
      "longitude": 88.60674574196288,
      "distance_km": 36.1,
      "in_coverage": true,
      "elevation_m": 1416.3,
      "slope_deg": 15.4,
      "aspect_deg": 305.3,
      "curvature": 0.395,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.1387,
      "tier": "GREEN",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 121,
      "latitude": 27.32036359888262,
      "longitude": 88.60669805459912,
      "distance_km": 36.4,
      "in_coverage": true,
      "elevation_m": 1430.0,
      "slope_deg": 21.8,
      "aspect_deg": 289.0,
      "curvature": -0.1449,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.2559,
      "tier": "YELLOW",
      "is_borderline": true,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 122,
      "latitude": 27.318223931798464,
      "longitude": 88.60497914708178,
      "distance_km": 36.7,
      "in_coverage": true,
      "elevation_m": 1465.2,
      "slope_deg": 24.5,
      "aspect_deg": 341.2,
      "curvature": 0.9038,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3116,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 123,
      "latitude": 27.318035722673795,
      "longitude": 88.60575669629804,
      "distance_km": 37.0,
      "in_coverage": true,
      "elevation_m": 1478.4,
      "slope_deg": 23.4,
      "aspect_deg": 336.5,
      "curvature": -0.3249,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.2937,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 124,
      "latitude": 27.319281050272508,
      "longitude": 88.60831709790618,
      "distance_km": 37.3,
      "in_coverage": true,
      "elevation_m": 1491.7,
      "slope_deg": 15.3,
      "aspect_deg": 159.5,
      "curvature": 1.4267,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.1121,
      "tier": "GREEN",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 125,
      "latitude": 27.32175373149346,
      "longitude": 88.60901788928884,
      "distance_km": 37.6,
      "in_coverage": true,
      "elevation_m": 1536.3,
      "slope_deg": 24.5,
      "aspect_deg": 288.1,
      "curvature": 1.0245,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3082,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 126,
      "latitude": 27.3242526652515,
      "longitude": 88.61010557768428,
      "distance_km": 37.9,
      "in_coverage": true,
      "elevation_m": 1576.8,
      "slope_deg": 42.8,
      "aspect_deg": 273.9,
      "curvature": 1.3869,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3615,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 127,
      "latitude": 27.326921785702847,
      "longitude": 88.61020622325874,
      "distance_km": 38.2,
      "in_coverage": true,
      "elevation_m": 1587.8,
      "slope_deg": 21.4,
      "aspect_deg": 286.2,
      "curvature": 0.4445,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.2608,
      "tier": "YELLOW",
      "is_borderline": true,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 128,
      "latitude": 27.328307477745327,
      "longitude": 88.61170701160565,
      "distance_km": 38.5,
      "in_coverage": true,
      "elevation_m": 1604.1,
      "slope_deg": 24.4,
      "aspect_deg": 258.8,
      "curvature": -0.4389,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3124,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 129,
      "latitude": 27.330464207848426,
      "longitude": 88.6129900161397,
      "distance_km": 38.8,
      "in_coverage": true,
      "elevation_m": 1643.7,
      "slope_deg": 13.1,
      "aspect_deg": 301.4,
      "curvature": -0.0227,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.1145,
      "tier": "GREEN",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 130,
      "latitude": 27.332538535599905,
      "longitude": 88.6146982641041,
      "distance_km": 39.1,
      "in_coverage": true,
      "elevation_m": 1666.1,
      "slope_deg": 24.0,
      "aspect_deg": 297.7,
      "curvature": -0.0922,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3073,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 131,
      "latitude": 27.335068372176167,
      "longitude": 88.61506206570861,
      "distance_km": 39.4,
      "in_coverage": true,
      "elevation_m": 1681.6,
      "slope_deg": 21.7,
      "aspect_deg": 236.2,
      "curvature": -0.0627,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.2876,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 132,
      "latitude": 27.337388995966716,
      "longitude": 88.61457890587866,
      "distance_km": 39.7,
      "in_coverage": true,
      "elevation_m": 1711.2,
      "slope_deg": 17.8,
      "aspect_deg": 286.7,
      "curvature": 0.4188,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.25,
      "tier": "YELLOW",
      "is_borderline": true,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 133,
      "latitude": 27.339218999999996,
      "longitude": 88.613773,
      "distance_km": 40.01,
      "in_coverage": true,
      "elevation_m": 1722.8,
      "slope_deg": 26.3,
      "aspect_deg": 205.9,
      "curvature": 0.3402,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3441,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    }
  ],
  "raw_geojson": {
    "coordinates": [
      [
        88.528489,
        27.176691
      ],
      [
        88.528382,
        27.176746
      ],
      [
        88.528209,
        27.176852
      ],
      [
        88.527996,
        27.176998
      ],
      [
        88.527819,
        27.177133
      ],
      [
        88.527783,
        27.177157
      ],
      [
        88.52769,
        27.1772
      ],
      [
        88.527607,
        27.177225
      ],
      [
        88.527515,
        27.177241
      ],
      [
        88.527344,
        27.177258
      ],
      [
        88.52719,
        27.177281
      ],
      [
        88.527073,
        27.177307
      ],
      [
        88.526919,
        27.177356
      ],
      [
        88.526834,
        27.177378
      ],
      [
        88.526742,
        27.177394
      ],
      [
        88.526646,
        27.177406
      ],
      [
        88.526549,
        27.177412
      ],
      [
        88.526452,
        27.177413
      ],
      [
        88.526144,
        27.177393
      ],
      [
        88.526058,
        27.177393
      ],
      [
        88.525929,
        27.177398
      ],
      [
        88.525805,
        27.17741
      ],
      [
        88.525549,
        27.177446
      ],
      [
        88.525191,
        27.177487
      ],
      [
        88.524905,
        27.177513
      ],
      [
        88.524669,
        27.177528
      ],
      [
        88.524553,
        27.177527
      ],
      [
        88.524401,
        27.177518
      ],
      [
        88.523496,
        27.177441
      ],
      [
        88.523134,
        27.177423
      ],
      [
        88.52268,
        27.177405
      ],
      [
        88.522347,
        27.177397
      ],
      [
        88.52217,
        27.177398
      ],
      [
        88.521985,
        27.177406
      ],
      [
        88.521803,
        27.177421
      ],
      [
        88.521672,
        27.177442
      ],
      [
        88.521603,
        27.177457
      ],
      [
        88.521411,
        27.177419
      ],
      [
        88.521241,
        27.177592
      ],
      [
        88.52111,
        27.177655
      ],
      [
        88.520931,
        27.177762
      ],
      [
        88.52085,
        27.177817
      ],
      [
        88.520706,
        27.177925
      ],
      [
        88.520586,
        27.178028
      ],
      [
        88.520491,
        27.178119
      ],
      [
        88.520421,
        27.178193
      ],
      [
        88.520343,
        27.178285
      ],
      [
        88.520315,
        27.178336
      ],
      [
        88.520302,
        27.178398
      ],
      [
        88.520301,
        27.178458
      ],
      [
        88.520315,
        27.178607
      ],
      [
        88.520319,
        27.178686
      ],
      [
        88.52031,
        27.178813
      ],
      [
        88.520289,
        27.178898
      ],
      [
        88.520253,
        27.178977
      ],
      [
        88.520198,
        27.17905
      ],
      [
        88.519821,
        27.179502
      ],
      [
        88.519753,
        27.179591
      ],
      [
        88.519623,
        27.179779
      ],
      [
        88.519542,
        27.179879
      ],
      [
        88.519446,
        27.179987
      ],
      [
        88.519342,
        27.180092
      ],
      [
        88.519289,
        27.180141
      ],
      [
        88.519184,
        27.180225
      ],
      [
        88.519133,
        27.180257
      ],
      [
        88.519085,
        27.180282
      ],
      [
        88.518948,
        27.180343
      ],
      [
        88.518818,
        27.18041
      ],
      [
        88.518735,
        27.180463
      ],
      [
        88.518655,
        27.180524
      ],
      [
        88.51858,
        27.180597
      ],
      [
        88.518468,
        27.180738
      ],
      [
        88.518357,
        27.180863
      ],
      [
        88.518218,
        27.181005
      ],
      [
        88.518065,
        27.181152
      ],
      [
        88.517841,
        27.181353
      ],
      [
        88.517717,
        27.181455
      ],
      [
        88.517629,
        27.181518
      ],
      [
        88.517559,
        27.181551
      ],
      [
        88.517521,
        27.181563
      ],
      [
        88.517438,
        27.181578
      ],
      [
        88.517395,
        27.181582
      ],
      [
        88.517306,
        27.181583
      ],
      [
        88.517172,
        27.18157
      ],
      [
        88.517134,
        27.181562
      ],
      [
        88.517004,
        27.181533
      ],
      [
        88.516963,
        27.18153
      ],
      [
        88.516923,
        27.181531
      ],
      [
        88.516843,
        27.181545
      ],
      [
        88.516768,
        27.18157
      ],
      [
        88.516668,
        27.181619
      ],
      [
        88.516552,
        27.181693
      ],
      [
        88.516527,
        27.181705
      ],
      [
        88.516462,
        27.181728
      ],
      [
        88.516423,
        27.181738
      ],
      [
        88.516333,
        27.181752
      ],
      [
        88.516229,
        27.181758
      ],
      [
        88.516115,
        27.181752
      ],
      [
        88.516054,
        27.181743
      ],
      [
        88.515928,
        27.181714
      ],
      [
        88.515857,
        27.18169
      ],
      [
        88.515581,
        27.181577
      ],
      [
        88.515151,
        27.181378
      ],
      [
        88.514362,
        27.18097
      ],
      [
        88.514087,
        27.180747
      ],
      [
        88.514013,
        27.180704
      ],
      [
        88.513733,
        27.180615
      ],
      [
        88.513458,
        27.180711
      ],
      [
        88.513203,
        27.1809
      ],
      [
        88.512817,
        27.181112
      ],
      [
        88.512344,
        27.181259
      ],
      [
        88.511805,
        27.181302
      ],
      [
        88.511315,
        27.181224
      ],
      [
        88.511247,
        27.181181
      ],
      [
        88.510866,
        27.18097
      ],
      [
        88.510662,
        27.180811
      ],
      [
        88.510607,
        27.180745
      ],
      [
        88.510546,
        27.180694
      ],
      [
        88.510303,
        27.180512
      ],
      [
        88.509743,
        27.180148
      ],
      [
        88.509646,
        27.180048
      ],
      [
        88.50955,
        27.179993
      ],
      [
        88.509452,
        27.179949
      ],
      [
        88.509337,
        27.179942
      ],
      [
        88.509265,
        27.179972
      ],
      [
        88.509191,
        27.180032
      ],
      [
        88.509162,
        27.180137
      ],
      [
        88.509179,
        27.180329
      ],
      [
        88.509135,
        27.180426
      ],
      [
        88.50903,
        27.180526
      ],
      [
        88.50891,
        27.180598
      ],
      [
        88.508779,
        27.180862
      ],
      [
        88.508594,
        27.181185
      ],
      [
        88.508356,
        27.181395
      ],
      [
        88.508144,
        27.181596
      ],
      [
        88.508014,
        27.18176
      ],
      [
        88.507989,
        27.182231
      ],
      [
        88.507802,
        27.182414
      ],
      [
        88.507719,
        27.182553
      ],
      [
        88.507743,
        27.182925
      ],
      [
        88.507813,
        27.183135
      ],
      [
        88.507813,
        27.18331
      ],
      [
        88.507725,
        27.183422
      ],
      [
        88.507377,
        27.183468
      ],
      [
        88.507143,
        27.183565
      ],
      [
        88.506389,
        27.183839
      ],
      [
        88.506054,
        27.183933
      ],
      [
        88.505911,
        27.184014
      ],
      [
        88.505709,
        27.184173
      ],
      [
        88.505514,
        27.184338
      ],
      [
        88.505412,
        27.184465
      ],
      [
        88.505324,
        27.184573
      ],
      [
        88.505219,
        27.184765
      ],
      [
        88.505181,
        27.184861
      ],
      [
        88.505179,
        27.184958
      ],
      [
        88.505171,
        27.185096
      ],
      [
        88.505238,
        27.185382
      ],
      [
        88.505347,
        27.185587
      ],
      [
        88.505359,
        27.185608
      ],
      [
        88.505578,
        27.185706
      ],
      [
        88.505655,
        27.185739
      ],
      [
        88.505686,
        27.18587
      ],
      [
        88.505505,
        27.186175
      ],
      [
        88.505419,
        27.18627
      ],
      [
        88.505391,
        27.186285
      ],
      [
        88.505328,
        27.186317
      ],
      [
        88.505061,
        27.186336
      ],
      [
        88.504764,
        27.186312
      ],
      [
        88.504378,
        27.186243
      ],
      [
        88.50428,
        27.18622
      ],
      [
        88.504009,
        27.186106
      ],
      [
        88.503761,
        27.185953
      ],
      [
        88.503516,
        27.185838
      ],
      [
        88.503292,
        27.185822
      ],
      [
        88.503172,
        27.185851
      ],
      [
        88.50308,
        27.185957
      ],
      [
        88.503032,
        27.186119
      ],
      [
        88.503074,
        27.186265
      ],
      [
        88.503395,
        27.186509
      ],
      [
        88.503446,
        27.186548
      ],
      [
        88.503673,
        27.186867
      ],
      [
        88.503738,
        27.186973
      ],
      [
        88.503742,
        27.187026
      ],
      [
        88.503779,
        27.187287
      ],
      [
        88.503724,
        27.187487
      ],
      [
        88.503656,
        27.187674
      ],
      [
        88.503535,
        27.187848
      ],
      [
        88.503307,
        27.188014
      ],
      [
        88.502937,
        27.188203
      ],
      [
        88.502579,
        27.188351
      ],
      [
        88.501541,
        27.188622
      ],
      [
        88.501117,
        27.188604
      ],
      [
        88.500774,
        27.188485
      ],
      [
        88.499736,
        27.187918
      ],
      [
        88.499552,
        27.187757
      ],
      [
        88.499331,
        27.187583
      ],
      [
        88.499175,
        27.187249
      ],
      [
        88.498903,
        27.18639
      ],
      [
        88.498839,
        27.186177
      ],
      [
        88.498785,
        27.186044
      ],
      [
        88.49871,
        27.185935
      ],
      [
        88.498634,
        27.185853
      ],
      [
        88.498508,
        27.185831
      ],
      [
        88.498351,
        27.185828
      ],
      [
        88.49833,
        27.185838
      ],
      [
        88.498119,
        27.185939
      ],
      [
        88.497939,
        27.186062
      ],
      [
        88.497775,
        27.186198
      ],
      [
        88.497771,
        27.186203
      ],
      [
        88.497708,
        27.186396
      ],
      [
        88.497719,
        27.186523
      ],
      [
        88.497726,
        27.186651
      ],
      [
        88.497721,
        27.186739
      ],
      [
        88.497631,
        27.186897
      ],
      [
        88.497633,
        27.186939
      ],
      [
        88.497626,
        27.187051
      ],
      [
        88.497712,
        27.187168
      ],
      [
        88.497761,
        27.187238
      ],
      [
        88.49784,
        27.187395
      ],
      [
        88.497958,
        27.187524
      ],
      [
        88.498105,
        27.187707
      ],
      [
        88.498123,
        27.187738
      ],
      [
        88.498133,
        27.187927
      ],
      [
        88.498149,
        27.188103
      ],
      [
        88.498156,
        27.188303
      ],
      [
        88.498042,
        27.188515
      ],
      [
        88.49801,
        27.188608
      ],
      [
        88.497977,
        27.188681
      ],
      [
        88.49789,
        27.188864
      ],
      [
        88.497819,
        27.189142
      ],
      [
        88.497734,
        27.189288
      ],
      [
        88.497597,
        27.18954
      ],
      [
        88.497411,
        27.189865
      ],
      [
        88.497136,
        27.190322
      ],
      [
        88.496894,
        27.190697
      ],
      [
        88.496696,
        27.190974
      ],
      [
        88.496566,
        27.191185
      ],
      [
        88.496463,
        27.191329
      ],
      [
        88.496389,
        27.191546
      ],
      [
        88.496361,
        27.191591
      ],
      [
        88.496187,
        27.191872
      ],
      [
        88.49601,
        27.192209
      ],
      [
        88.495874,
        27.192354
      ],
      [
        88.49582,
        27.192388
      ],
      [
        88.495417,
        27.192605
      ],
      [
        88.494929,
        27.192827
      ],
      [
        88.494776,
        27.192937
      ],
      [
        88.494728,
        27.192982
      ],
      [
        88.494188,
        27.193334
      ],
      [
        88.49378,
        27.193588
      ],
      [
        88.493524,
        27.193733
      ],
      [
        88.493201,
        27.193938
      ],
      [
        88.492862,
        27.194175
      ],
      [
        88.492496,
        27.194459
      ],
      [
        88.49233,
        27.194698
      ],
      [
        88.492315,
        27.194887
      ],
      [
        88.492402,
        27.195073
      ],
      [
        88.492619,
        27.195226
      ],
      [
        88.492736,
        27.195292
      ],
      [
        88.49275,
        27.195305
      ],
      [
        88.492779,
        27.19535
      ],
      [
        88.492793,
        27.19538
      ],
      [
        88.492819,
        27.19545
      ],
      [
        88.492836,
        27.195532
      ],
      [
        88.492841,
        27.195574
      ],
      [
        88.49284,
        27.195661
      ],
      [
        88.492822,
        27.195744
      ],
      [
        88.492805,
        27.195783
      ],
      [
        88.492784,
        27.19582
      ],
      [
        88.492736,
        27.19589
      ],
      [
        88.49268,
        27.195952
      ],
      [
        88.492619,
        27.196003
      ],
      [
        88.492556,
        27.196038
      ],
      [
        88.492524,
        27.196049
      ],
      [
        88.492493,
        27.196054
      ],
      [
        88.492462,
        27.196054
      ],
      [
        88.492432,
        27.196048
      ],
      [
        88.492403,
        27.196036
      ],
      [
        88.492209,
        27.195919
      ],
      [
        88.492066,
        27.195842
      ],
      [
        88.491972,
        27.195802
      ],
      [
        88.491928,
        27.195789
      ],
      [
        88.491887,
        27.19578
      ],
      [
        88.491849,
        27.195778
      ],
      [
        88.491815,
        27.195783
      ],
      [
        88.491781,
        27.195798
      ],
      [
        88.491742,
        27.195824
      ],
      [
        88.491698,
        27.19586
      ],
      [
        88.491603,
        27.195953
      ],
      [
        88.491503,
        27.196063
      ],
      [
        88.491258,
        27.196353
      ],
      [
        88.491015,
        27.196629
      ],
      [
        88.490807,
        27.196878
      ],
      [
        88.490665,
        27.197056
      ],
      [
        88.490536,
        27.197227
      ],
      [
        88.49048,
        27.197307
      ],
      [
        88.490211,
        27.197713
      ],
      [
        88.490053,
        27.197924
      ],
      [
        88.489867,
        27.198147
      ],
      [
        88.489444,
        27.198674
      ],
      [
        88.489396,
        27.198727
      ],
      [
        88.489227,
        27.198882
      ],
      [
        88.489149,
        27.19897
      ],
      [
        88.489105,
        27.199036
      ],
      [
        88.489087,
        27.199072
      ],
      [
        88.489058,
        27.199148
      ],
      [
        88.489019,
        27.199279
      ],
      [
        88.488913,
        27.199686
      ],
      [
        88.488841,
        27.199903
      ],
      [
        88.488754,
        27.20014
      ],
      [
        88.488665,
        27.200349
      ],
      [
        88.488531,
        27.200597
      ],
      [
        88.488439,
        27.200779
      ],
      [
        88.488388,
        27.200898
      ],
      [
        88.488347,
        27.20103
      ],
      [
        88.488314,
        27.201095
      ],
      [
        88.48827,
        27.201149
      ],
      [
        88.488233,
        27.201178
      ],
      [
        88.488189,
        27.201198
      ],
      [
        88.488089,
        27.201227
      ],
      [
        88.488039,
        27.201245
      ],
      [
        88.487969,
        27.20128
      ],
      [
        88.487928,
        27.201308
      ],
      [
        88.487878,
        27.201361
      ],
      [
        88.487819,
        27.201457
      ],
      [
        88.48777,
        27.20152
      ],
      [
        88.487613,
        27.201669
      ],
      [
        88.487527,
        27.201772
      ],
      [
        88.487439,
        27.201899
      ],
      [
        88.487362,
        27.202038
      ],
      [
        88.487322,
        27.202131
      ],
      [
        88.48727,
        27.202292
      ],
      [
        88.487245,
        27.202357
      ],
      [
        88.487195,
        27.202457
      ],
      [
        88.487148,
        27.202535
      ],
      [
        88.486866,
        27.202946
      ],
      [
        88.486675,
        27.203206
      ],
      [
        88.486542,
        27.203362
      ],
      [
        88.486447,
        27.203457
      ],
      [
        88.486365,
        27.203544
      ],
      [
        88.486278,
        27.203656
      ],
      [
        88.486236,
        27.203718
      ],
      [
        88.486199,
        27.203784
      ],
      [
        88.486168,
        27.203853
      ],
      [
        88.486144,
        27.203923
      ],
      [
        88.48613,
        27.203995
      ],
      [
        88.486128,
        27.204066
      ],
      [
        88.486139,
        27.204137
      ],
      [
        88.486166,
        27.204206
      ],
      [
        88.48621,
        27.204273
      ],
      [
        88.486268,
        27.204343
      ],
      [
        88.486488,
        27.204593
      ],
      [
        88.486824,
        27.204951
      ],
      [
        88.487044,
        27.205176
      ],
      [
        88.487287,
        27.205412
      ],
      [
        88.487474,
        27.205618
      ],
      [
        88.487774,
        27.205908
      ],
      [
        88.487875,
        27.205984
      ],
      [
        88.487968,
        27.206037
      ],
      [
        88.488018,
        27.206058
      ],
      [
        88.488278,
        27.206148
      ],
      [
        88.488421,
        27.206205
      ],
      [
        88.488552,
        27.206268
      ],
      [
        88.488687,
        27.206349
      ],
      [
        88.488752,
        27.206379
      ],
      [
        88.488817,
        27.206402
      ],
      [
        88.488914,
        27.206424
      ],
      [
        88.488976,
        27.206433
      ],
      [
        88.489091,
        27.206441
      ],
      [
        88.489149,
        27.206451
      ],
      [
        88.489234,
        27.206479
      ],
      [
        88.489309,
        27.206519
      ],
      [
        88.489348,
        27.206551
      ],
      [
        88.489376,
        27.206587
      ],
      [
        88.489468,
        27.206807
      ],
      [
        88.489573,
        27.207034
      ],
      [
        88.489652,
        27.207179
      ],
      [
        88.489696,
        27.207241
      ],
      [
        88.489761,
        27.207293
      ],
      [
        88.48993,
        27.207396
      ],
      [
        88.490141,
        27.207511
      ],
      [
        88.490451,
        27.207673
      ],
      [
        88.490567,
        27.207739
      ],
      [
        88.490659,
        27.2078
      ],
      [
        88.490707,
        27.207837
      ],
      [
        88.490803,
        27.207924
      ],
      [
        88.490848,
        27.207974
      ],
      [
        88.49089,
        27.208028
      ],
      [
        88.490928,
        27.208087
      ],
      [
        88.49096,
        27.208151
      ],
      [
        88.490985,
        27.20822
      ],
      [
        88.491002,
        27.208293
      ],
      [
        88.491011,
        27.208372
      ],
      [
        88.49103,
        27.209089
      ],
      [
        88.491043,
        27.20974
      ],
      [
        88.491053,
        27.21026
      ],
      [
        88.491087,
        27.210707
      ],
      [
        88.49111,
        27.211149
      ],
      [
        88.491129,
        27.211475
      ],
      [
        88.491122,
        27.21155
      ],
      [
        88.491136,
        27.212
      ],
      [
        88.491131,
        27.212094
      ],
      [
        88.491133,
        27.212172
      ],
      [
        88.491108,
        27.212562
      ],
      [
        88.491011,
        27.212758
      ],
      [
        88.490768,
        27.213123
      ],
      [
        88.490681,
        27.213368
      ],
      [
        88.490669,
        27.213418
      ],
      [
        88.490596,
        27.213619
      ],
      [
        88.490456,
        27.213749
      ],
      [
        88.490366,
        27.213801
      ],
      [
        88.490211,
        27.213893
      ],
      [
        88.490141,
        27.213943
      ],
      [
        88.490084,
        27.213996
      ],
      [
        88.489903,
        27.214089
      ],
      [
        88.489821,
        27.214285
      ],
      [
        88.489851,
        27.214581
      ],
      [
        88.489917,
        27.214978
      ],
      [
        88.489963,
        27.215265
      ],
      [
        88.489969,
        27.2154
      ],
      [
        88.489983,
        27.215479
      ],
      [
        88.490103,
        27.215704
      ],
      [
        88.490258,
        27.215822
      ],
      [
        88.490366,
        27.215972
      ],
      [
        88.490459,
        27.216202
      ],
      [
        88.490498,
        27.216406
      ],
      [
        88.490521,
        27.216599
      ],
      [
        88.490504,
        27.216762
      ],
      [
        88.490462,
        27.21689
      ],
      [
        88.490397,
        27.217082
      ],
      [
        88.490325,
        27.217247
      ],
      [
        88.490249,
        27.217369
      ],
      [
        88.490186,
        27.217507
      ],
      [
        88.490146,
        27.217632
      ],
      [
        88.490102,
        27.217718
      ],
      [
        88.490093,
        27.217877
      ],
      [
        88.490094,
        27.21801
      ],
      [
        88.490102,
        27.218126
      ],
      [
        88.490113,
        27.218243
      ],
      [
        88.490104,
        27.218373
      ],
      [
        88.490085,
        27.218469
      ],
      [
        88.490057,
        27.218611
      ],
      [
        88.490021,
        27.218825
      ],
      [
        88.490025,
        27.219029
      ],
      [
        88.490032,
        27.219158
      ],
      [
        88.490045,
        27.21929
      ],
      [
        88.490105,
        27.219426
      ],
      [
        88.490195,
        27.219638
      ],
      [
        88.490272,
        27.219742
      ],
      [
        88.490287,
        27.219769
      ],
      [
        88.490333,
        27.219936
      ],
      [
        88.490418,
        27.220141
      ],
      [
        88.490472,
        27.220267
      ],
      [
        88.490556,
        27.220415
      ],
      [
        88.49063,
        27.220574
      ],
      [
        88.490715,
        27.220772
      ],
      [
        88.490778,
        27.220889
      ],
      [
        88.490829,
        27.22107
      ],
      [
        88.490916,
        27.221281
      ],
      [
        88.491043,
        27.221565
      ],
      [
        88.491242,
        27.222106
      ],
      [
        88.491453,
        27.222459
      ],
      [
        88.491535,
        27.222595
      ],
      [
        88.491796,
        27.223011
      ],
      [
        88.491878,
        27.22324
      ],
      [
        88.491821,
        27.223444
      ],
      [
        88.491793,
        27.223586
      ],
      [
        88.491849,
        27.223795
      ],
      [
        88.491942,
        27.223961
      ],
      [
        88.491976,
        27.22401
      ],
      [
        88.492254,
        27.224226
      ],
      [
        88.492385,
        27.224302
      ],
      [
        88.492474,
        27.224454
      ],
      [
        88.492496,
        27.224652
      ],
      [
        88.492621,
        27.22504
      ],
      [
        88.492738,
        27.225161
      ],
      [
        88.492816,
        27.225321
      ],
      [
        88.492944,
        27.225506
      ],
      [
        88.493104,
        27.225641
      ],
      [
        88.493234,
        27.225772
      ],
      [
        88.493312,
        27.225956
      ],
      [
        88.49335,
        27.226094
      ],
      [
        88.493304,
        27.22627
      ],
      [
        88.493235,
        27.226491
      ],
      [
        88.493274,
        27.22672
      ],
      [
        88.493248,
        27.226886
      ],
      [
        88.49324,
        27.226936
      ],
      [
        88.493157,
        27.227107
      ],
      [
        88.493162,
        27.227231
      ],
      [
        88.493279,
        27.227385
      ],
      [
        88.493427,
        27.227516
      ],
      [
        88.493545,
        27.227675
      ],
      [
        88.493518,
        27.227865
      ],
      [
        88.49351,
        27.227905
      ],
      [
        88.493585,
        27.228135
      ],
      [
        88.493611,
        27.228173
      ],
      [
        88.493767,
        27.228419
      ],
      [
        88.49386,
        27.228557
      ],
      [
        88.493914,
        27.228665
      ],
      [
        88.494045,
        27.229008
      ],
      [
        88.494063,
        27.229156
      ],
      [
        88.494095,
        27.229519
      ],
      [
        88.494153,
        27.229623
      ],
      [
        88.494219,
        27.22972
      ],
      [
        88.494317,
        27.229807
      ],
      [
        88.494395,
        27.229877
      ],
      [
        88.494659,
        27.230056
      ],
      [
        88.495103,
        27.230211
      ],
      [
        88.495439,
        27.230386
      ],
      [
        88.495735,
        27.230501
      ],
      [
        88.496089,
        27.230611
      ],
      [
        88.496299,
        27.230634
      ],
      [
        88.496471,
        27.230659
      ],
      [
        88.496687,
        27.230684
      ],
      [
        88.496857,
        27.230697
      ],
      [
        88.497106,
        27.230666
      ],
      [
        88.49725,
        27.230637
      ],
      [
        88.497476,
        27.230628
      ],
      [
        88.497668,
        27.230641
      ],
      [
        88.497964,
        27.230712
      ],
      [
        88.498223,
        27.230782
      ],
      [
        88.499081,
        27.231001
      ],
      [
        88.499121,
        27.231053
      ],
      [
        88.499075,
        27.231184
      ],
      [
        88.49875,
        27.23194
      ],
      [
        88.498708,
        27.232081
      ],
      [
        88.498622,
        27.232209
      ],
      [
        88.498476,
        27.232307
      ],
      [
        88.498157,
        27.232402
      ],
      [
        88.497196,
        27.232525
      ],
      [
        88.496988,
        27.232558
      ],
      [
        88.496944,
        27.232625
      ],
      [
        88.497023,
        27.232741
      ],
      [
        88.497142,
        27.23279
      ],
      [
        88.497358,
        27.232782
      ],
      [
        88.497579,
        27.232707
      ],
      [
        88.49788,
        27.232646
      ],
      [
        88.49833,
        27.232616
      ],
      [
        88.498688,
        27.2326
      ],
      [
        88.499263,
        27.232659
      ],
      [
        88.499453,
        27.232793
      ],
      [
        88.499611,
        27.232945
      ],
      [
        88.499857,
        27.233059
      ],
      [
        88.500059,
        27.233127
      ],
      [
        88.50091,
        27.233265
      ],
      [
        88.501241,
        27.233393
      ],
      [
        88.501572,
        27.233446
      ],
      [
        88.501753,
        27.233369
      ],
      [
        88.501981,
        27.23326
      ],
      [
        88.50223,
        27.23318
      ],
      [
        88.502522,
        27.233125
      ],
      [
        88.502833,
        27.233101
      ],
      [
        88.503081,
        27.23313
      ],
      [
        88.503377,
        27.233287
      ],
      [
        88.503554,
        27.233381
      ],
      [
        88.503625,
        27.233471
      ],
      [
        88.503755,
        27.23354
      ],
      [
        88.503918,
        27.2337
      ],
      [
        88.504091,
        27.233964
      ],
      [
        88.504389,
        27.234189
      ],
      [
        88.504637,
        27.234504
      ],
      [
        88.504929,
        27.234799
      ],
      [
        88.505096,
        27.234911
      ],
      [
        88.505523,
        27.235152
      ],
      [
        88.505696,
        27.235295
      ],
      [
        88.505777,
        27.235373
      ],
      [
        88.506028,
        27.235624
      ],
      [
        88.506694,
        27.235988
      ],
      [
        88.506874,
        27.236129
      ],
      [
        88.506983,
        27.236137
      ],
      [
        88.507069,
        27.236096
      ],
      [
        88.507183,
        27.236031
      ],
      [
        88.507316,
        27.23602
      ],
      [
        88.50755,
        27.236048
      ],
      [
        88.507807,
        27.23614
      ],
      [
        88.508322,
        27.236301
      ],
      [
        88.508832,
        27.236337
      ],
      [
        88.509094,
        27.236328
      ],
      [
        88.509447,
        27.236342
      ],
      [
        88.509742,
        27.236517
      ],
      [
        88.510121,
        27.23686
      ],
      [
        88.510487,
        27.237017
      ],
      [
        88.510958,
        27.237048
      ],
      [
        88.511363,
        27.23707
      ],
      [
        88.511833,
        27.23707
      ],
      [
        88.512382,
        27.237018
      ],
      [
        88.512809,
        27.236968
      ],
      [
        88.513069,
        27.237065
      ],
      [
        88.513276,
        27.237151
      ],
      [
        88.513341,
        27.237212
      ],
      [
        88.513679,
        27.237513
      ],
      [
        88.513934,
        27.23778
      ],
      [
        88.514004,
        27.237902
      ],
      [
        88.514171,
        27.238314
      ],
      [
        88.514179,
        27.238529
      ],
      [
        88.514119,
        27.238673
      ],
      [
        88.514418,
        27.239063
      ],
      [
        88.514561,
        27.239486
      ],
      [
        88.514713,
        27.239766
      ],
      [
        88.515102,
        27.240098
      ],
      [
        88.515333,
        27.24033
      ],
      [
        88.515659,
        27.240448
      ],
      [
        88.51606,
        27.240487
      ],
      [
        88.516523,
        27.240534
      ],
      [
        88.516622,
        27.240657
      ],
      [
        88.516724,
        27.240784
      ],
      [
        88.516946,
        27.241029
      ],
      [
        88.517173,
        27.241155
      ],
      [
        88.517415,
        27.241185
      ],
      [
        88.51765,
        27.241151
      ],
      [
        88.518048,
        27.241089
      ],
      [
        88.518408,
        27.241121
      ],
      [
        88.518513,
        27.24113
      ],
      [
        88.519111,
        27.241292
      ],
      [
        88.519664,
        27.241355
      ],
      [
        88.5203,
        27.241323
      ],
      [
        88.522779,
        27.242985
      ],
      [
        88.523018,
        27.243146
      ],
      [
        88.523425,
        27.243556
      ],
      [
        88.523724,
        27.24378
      ],
      [
        88.523865,
        27.24403
      ],
      [
        88.523992,
        27.244283
      ],
      [
        88.524269,
        27.244757
      ],
      [
        88.524446,
        27.245129
      ],
      [
        88.524593,
        27.245396
      ],
      [
        88.524834,
        27.245704
      ],
      [
        88.525162,
        27.245926
      ],
      [
        88.525544,
        27.246077
      ],
      [
        88.526242,
        27.246193
      ],
      [
        88.526775,
        27.246332
      ],
      [
        88.527133,
        27.246492
      ],
      [
        88.527416,
        27.246686
      ],
      [
        88.528067,
        27.24754
      ],
      [
        88.528384,
        27.247907
      ],
      [
        88.528676,
        27.248202
      ],
      [
        88.528737,
        27.24824
      ],
      [
        88.528956,
        27.248402
      ],
      [
        88.52975,
        27.24893
      ],
      [
        88.529917,
        27.249028
      ],
      [
        88.530082,
        27.249145
      ],
      [
        88.53069,
        27.249674
      ],
      [
        88.530972,
        27.249907
      ],
      [
        88.531177,
        27.250123
      ],
      [
        88.531296,
        27.250378
      ],
      [
        88.531408,
        27.250661
      ],
      [
        88.53158,
        27.250766
      ],
      [
        88.531666,
        27.250763
      ],
      [
        88.532033,
        27.250729
      ],
      [
        88.533055,
        27.250544
      ],
      [
        88.533363,
        27.250533
      ],
      [
        88.533802,
        27.250689
      ],
      [
        88.533981,
        27.250674
      ],
      [
        88.534219,
        27.250485
      ],
      [
        88.534739,
        27.250412
      ],
      [
        88.535573,
        27.250497
      ],
      [
        88.535644,
        27.250486
      ],
      [
        88.535873,
        27.250448
      ],
      [
        88.536399,
        27.250215
      ],
      [
        88.536738,
        27.250185
      ],
      [
        88.537178,
        27.249989
      ],
      [
        88.53803,
        27.249998
      ],
      [
        88.538211,
        27.250066
      ],
      [
        88.53837,
        27.250218
      ],
      [
        88.538512,
        27.250623
      ],
      [
        88.538666,
        27.250881
      ],
      [
        88.539096,
        27.251283
      ],
      [
        88.53952,
        27.251474
      ],
      [
        88.540236,
        27.251901
      ],
      [
        88.540911,
        27.252063
      ],
      [
        88.541298,
        27.252349
      ],
      [
        88.541616,
        27.252595
      ],
      [
        88.541668,
        27.252703
      ],
      [
        88.541651,
        27.252786
      ],
      [
        88.541594,
        27.252804
      ],
      [
        88.541522,
        27.252785
      ],
      [
        88.541355,
        27.252576
      ],
      [
        88.54098,
        27.252287
      ],
      [
        88.540784,
        27.252222
      ],
      [
        88.540422,
        27.252258
      ],
      [
        88.539982,
        27.252106
      ],
      [
        88.539828,
        27.252144
      ],
      [
        88.53981,
        27.25227
      ],
      [
        88.539989,
        27.25234
      ],
      [
        88.540278,
        27.252387
      ],
      [
        88.540751,
        27.252542
      ],
      [
        88.541047,
        27.252758
      ],
      [
        88.541237,
        27.253118
      ],
      [
        88.541276,
        27.253251
      ],
      [
        88.541296,
        27.253319
      ],
      [
        88.541339,
        27.253813
      ],
      [
        88.541433,
        27.253961
      ],
      [
        88.541728,
        27.254237
      ],
      [
        88.542079,
        27.254476
      ],
      [
        88.542478,
        27.254686
      ],
      [
        88.542961,
        27.254791
      ],
      [
        88.543672,
        27.255395
      ],
      [
        88.544464,
        27.255909
      ],
      [
        88.544645,
        27.256088
      ],
      [
        88.544827,
        27.256155
      ],
      [
        88.545151,
        27.25613
      ],
      [
        88.545422,
        27.256247
      ],
      [
        88.545688,
        27.256468
      ],
      [
        88.546083,
        27.256956
      ],
      [
        88.546806,
        27.257423
      ],
      [
        88.547038,
        27.257593
      ],
      [
        88.547113,
        27.257848
      ],
      [
        88.547246,
        27.257923
      ],
      [
        88.547467,
        27.2579
      ],
      [
        88.54763,
        27.257746
      ],
      [
        88.547794,
        27.257603
      ],
      [
        88.54796,
        27.257604
      ],
      [
        88.548336,
        27.257757
      ],
      [
        88.548805,
        27.257891
      ],
      [
        88.549111,
        27.258107
      ],
      [
        88.549471,
        27.258753
      ],
      [
        88.550912,
        27.260017
      ],
      [
        88.55145,
        27.260338
      ],
      [
        88.551752,
        27.260449
      ],
      [
        88.551951,
        27.26046
      ],
      [
        88.552565,
        27.260709
      ],
      [
        88.553207,
        27.260838
      ],
      [
        88.553668,
        27.261257
      ],
      [
        88.553883,
        27.261448
      ],
      [
        88.554096,
        27.261551
      ],
      [
        88.554775,
        27.261462
      ],
      [
        88.555159,
        27.261295
      ],
      [
        88.555474,
        27.261229
      ],
      [
        88.555753,
        27.261316
      ],
      [
        88.555878,
        27.261536
      ],
      [
        88.556019,
        27.261787
      ],
      [
        88.556256,
        27.261936
      ],
      [
        88.556489,
        27.262039
      ],
      [
        88.556524,
        27.262138
      ],
      [
        88.556515,
        27.262288
      ],
      [
        88.556268,
        27.262559
      ],
      [
        88.556179,
        27.262756
      ],
      [
        88.55621,
        27.262845
      ],
      [
        88.556251,
        27.262961
      ],
      [
        88.556412,
        27.26315
      ],
      [
        88.557295,
        27.263831
      ],
      [
        88.557701,
        27.264092
      ],
      [
        88.558275,
        27.264419
      ],
      [
        88.558729,
        27.264734
      ],
      [
        88.558996,
        27.26483
      ],
      [
        88.559409,
        27.264854
      ],
      [
        88.559811,
        27.264685
      ],
      [
        88.560435,
        27.264407
      ],
      [
        88.561149,
        27.264098
      ],
      [
        88.561403,
        27.263875
      ],
      [
        88.561512,
        27.263763
      ],
      [
        88.561751,
        27.263682
      ],
      [
        88.561864,
        27.263596
      ],
      [
        88.561959,
        27.263437
      ],
      [
        88.562055,
        27.263167
      ],
      [
        88.562218,
        27.26277
      ],
      [
        88.562092,
        27.262417
      ],
      [
        88.562082,
        27.262048
      ],
      [
        88.56184,
        27.261705
      ],
      [
        88.561781,
        27.261465
      ],
      [
        88.562077,
        27.261099
      ],
      [
        88.562288,
        27.260975
      ],
      [
        88.562541,
        27.260933
      ],
      [
        88.562831,
        27.261101
      ],
      [
        88.563112,
        27.261357
      ],
      [
        88.563318,
        27.261449
      ],
      [
        88.563542,
        27.261312
      ],
      [
        88.563617,
        27.26126
      ],
      [
        88.563712,
        27.261195
      ],
      [
        88.563924,
        27.261228
      ],
      [
        88.564415,
        27.261532
      ],
      [
        88.56461,
        27.261805
      ],
      [
        88.564725,
        27.262033
      ],
      [
        88.564946,
        27.26225
      ],
      [
        88.565238,
        27.262426
      ],
      [
        88.565462,
        27.262546
      ],
      [
        88.565718,
        27.26253
      ],
      [
        88.566032,
        27.262507
      ],
      [
        88.56635,
        27.26243
      ],
      [
        88.56668,
        27.262518
      ],
      [
        88.567072,
        27.262671
      ],
      [
        88.567578,
        27.263067
      ],
      [
        88.56808,
        27.263326
      ],
      [
        88.569634,
        27.263713
      ],
      [
        88.570732,
        27.26406
      ],
      [
        88.571377,
        27.26433
      ],
      [
        88.571856,
        27.264639
      ],
      [
        88.572026,
        27.264963
      ],
      [
        88.572227,
        27.265139
      ],
      [
        88.572561,
        27.265319
      ],
      [
        88.57362,
        27.265974
      ],
      [
        88.573979,
        27.266235
      ],
      [
        88.574321,
        27.266527
      ],
      [
        88.574499,
        27.266611
      ],
      [
        88.574751,
        27.266678
      ],
      [
        88.575887,
        27.266646
      ],
      [
        88.576103,
        27.266691
      ],
      [
        88.576167,
        27.266825
      ],
      [
        88.576097,
        27.267037
      ],
      [
        88.575934,
        27.267685
      ],
      [
        88.575963,
        27.267892
      ],
      [
        88.57612,
        27.268047
      ],
      [
        88.576327,
        27.268119
      ],
      [
        88.576931,
        27.268099
      ],
      [
        88.577347,
        27.268009
      ],
      [
        88.577544,
        27.267944
      ],
      [
        88.577727,
        27.267944
      ],
      [
        88.577879,
        27.268024
      ],
      [
        88.578018,
        27.268189
      ],
      [
        88.578181,
        27.268543
      ],
      [
        88.578532,
        27.268876
      ],
      [
        88.579044,
        27.269115
      ],
      [
        88.57899,
        27.269194
      ],
      [
        88.578754,
        27.269573
      ],
      [
        88.578419,
        27.269738
      ],
      [
        88.57834,
        27.269746
      ],
      [
        88.578203,
        27.269745
      ],
      [
        88.57811,
        27.269636
      ],
      [
        88.577941,
        27.269558
      ],
      [
        88.577845,
        27.26951
      ],
      [
        88.577764,
        27.269431
      ],
      [
        88.577718,
        27.2694
      ],
      [
        88.577643,
        27.269388
      ],
      [
        88.577496,
        27.269419
      ],
      [
        88.577356,
        27.269507
      ],
      [
        88.577187,
        27.269679
      ],
      [
        88.577123,
        27.269782
      ],
      [
        88.577,
        27.269822
      ],
      [
        88.576557,
        27.269825
      ],
      [
        88.576397,
        27.269822
      ],
      [
        88.576238,
        27.269869
      ],
      [
        88.576052,
        27.269962
      ],
      [
        88.575966,
        27.27005
      ],
      [
        88.575805,
        27.270197
      ],
      [
        88.575715,
        27.270242
      ],
      [
        88.575591,
        27.270249
      ],
      [
        88.575393,
        27.270254
      ],
      [
        88.575317,
        27.270266
      ],
      [
        88.575246,
        27.270303
      ],
      [
        88.575143,
        27.270382
      ],
      [
        88.574975,
        27.270425
      ],
      [
        88.574826,
        27.270401
      ],
      [
        88.574658,
        27.270383
      ],
      [
        88.57449,
        27.270382
      ],
      [
        88.574401,
        27.270386
      ],
      [
        88.574309,
        27.270431
      ],
      [
        88.574251,
        27.270492
      ],
      [
        88.57413,
        27.270597
      ],
      [
        88.574067,
        27.270631
      ],
      [
        88.574004,
        27.270645
      ],
      [
        88.573909,
        27.27064
      ],
      [
        88.573842,
        27.270633
      ],
      [
        88.573765,
        27.270628
      ],
      [
        88.573699,
        27.270651
      ],
      [
        88.573668,
        27.270711
      ],
      [
        88.573677,
        27.270795
      ],
      [
        88.573739,
        27.270858
      ],
      [
        88.573853,
        27.27091
      ],
      [
        88.574437,
        27.270843
      ],
      [
        88.574634,
        27.270838
      ],
      [
        88.574907,
        27.270849
      ],
      [
        88.575058,
        27.270839
      ],
      [
        88.575299,
        27.270773
      ],
      [
        88.575344,
        27.270774
      ],
      [
        88.575377,
        27.270793
      ],
      [
        88.575506,
        27.270902
      ],
      [
        88.575626,
        27.271007
      ],
      [
        88.575747,
        27.271108
      ],
      [
        88.575869,
        27.27115
      ],
      [
        88.576003,
        27.271147
      ],
      [
        88.576114,
        27.271124
      ],
      [
        88.57623,
        27.27108
      ],
      [
        88.576327,
        27.270997
      ],
      [
        88.576365,
        27.270946
      ],
      [
        88.576418,
        27.270869
      ],
      [
        88.576474,
        27.270697
      ],
      [
        88.576464,
        27.270509
      ],
      [
        88.576483,
        27.27044
      ],
      [
        88.576541,
        27.270365
      ],
      [
        88.57661,
        27.270347
      ],
      [
        88.576853,
        27.270368
      ],
      [
        88.577075,
        27.270421
      ],
      [
        88.577236,
        27.270464
      ],
      [
        88.577308,
        27.270523
      ],
      [
        88.577337,
        27.270582
      ],
      [
        88.577312,
        27.270645
      ],
      [
        88.57725,
        27.270696
      ],
      [
        88.577158,
        27.270695
      ],
      [
        88.577024,
        27.270611
      ],
      [
        88.576847,
        27.270554
      ],
      [
        88.576759,
        27.270559
      ],
      [
        88.576698,
        27.27065
      ],
      [
        88.57664,
        27.271033
      ],
      [
        88.576581,
        27.271284
      ],
      [
        88.576557,
        27.271412
      ],
      [
        88.576483,
        27.271504
      ],
      [
        88.576365,
        27.271604
      ],
      [
        88.576166,
        27.271625
      ],
      [
        88.575902,
        27.27164
      ],
      [
        88.575758,
        27.271608
      ],
      [
        88.575625,
        27.271551
      ],
      [
        88.575455,
        27.271427
      ],
      [
        88.575361,
        27.271372
      ],
      [
        88.575284,
        27.271371
      ],
      [
        88.575163,
        27.271411
      ],
      [
        88.574957,
        27.271514
      ],
      [
        88.574781,
        27.271656
      ],
      [
        88.574618,
        27.27172
      ],
      [
        88.574524,
        27.271721
      ],
      [
        88.574446,
        27.271683
      ],
      [
        88.574323,
        27.271655
      ],
      [
        88.574167,
        27.271625
      ],
      [
        88.574041,
        27.271651
      ],
      [
        88.573718,
        27.271771
      ],
      [
        88.573627,
        27.271829
      ],
      [
        88.573588,
        27.271929
      ],
      [
        88.573582,
        27.272054
      ],
      [
        88.57358,
        27.272168
      ],
      [
        88.573596,
        27.272235
      ],
      [
        88.573625,
        27.272292
      ],
      [
        88.573705,
        27.272304
      ],
      [
        88.573848,
        27.272257
      ],
      [
        88.573973,
        27.272173
      ],
      [
        88.574111,
        27.272092
      ],
      [
        88.574293,
        27.27203
      ],
      [
        88.574583,
        27.272006
      ],
      [
        88.574867,
        27.272016
      ],
      [
        88.575184,
        27.271954
      ],
      [
        88.575431,
        27.271934
      ],
      [
        88.57587,
        27.272068
      ],
      [
        88.576525,
        27.272254
      ],
      [
        88.57668,
        27.272254
      ],
      [
        88.576938,
        27.272206
      ],
      [
        88.577163,
        27.272159
      ],
      [
        88.57734,
        27.272159
      ],
      [
        88.577496,
        27.272254
      ],
      [
        88.577571,
        27.272407
      ],
      [
        88.577587,
        27.272836
      ],
      [
        88.577646,
        27.273122
      ],
      [
        88.577753,
        27.273336
      ],
      [
        88.577882,
        27.273484
      ],
      [
        88.578102,
        27.273575
      ],
      [
        88.578419,
        27.273546
      ],
      [
        88.578848,
        27.273408
      ],
      [
        88.578998,
        27.273384
      ],
      [
        88.579153,
        27.273403
      ],
      [
        88.579293,
        27.273427
      ],
      [
        88.579481,
        27.273384
      ],
      [
        88.580022,
        27.273165
      ],
      [
        88.580221,
        27.273112
      ],
      [
        88.58036,
        27.273103
      ],
      [
        88.580537,
        27.273198
      ],
      [
        88.580661,
        27.273217
      ],
      [
        88.580833,
        27.273203
      ],
      [
        88.581213,
        27.272988
      ],
      [
        88.581637,
        27.272807
      ],
      [
        88.581761,
        27.272745
      ],
      [
        88.581991,
        27.272731
      ],
      [
        88.582115,
        27.272721
      ],
      [
        88.582329,
        27.27264
      ],
      [
        88.582839,
        27.272378
      ],
      [
        88.582984,
        27.272302
      ],
      [
        88.58315,
        27.272292
      ],
      [
        88.583332,
        27.272387
      ],
      [
        88.583606,
        27.272774
      ],
      [
        88.583638,
        27.272969
      ],
      [
        88.583627,
        27.273141
      ],
      [
        88.583499,
        27.273456
      ],
      [
        88.583391,
        27.273708
      ],
      [
        88.58337,
        27.273899
      ],
      [
        88.583418,
        27.274113
      ],
      [
        88.583563,
        27.274304
      ],
      [
        88.583692,
        27.274447
      ],
      [
        88.583949,
        27.274876
      ],
      [
        88.584609,
        27.27583
      ],
      [
        88.584716,
        27.276025
      ],
      [
        88.584743,
        27.276302
      ],
      [
        88.584818,
        27.276512
      ],
      [
        88.585258,
        27.277046
      ],
      [
        88.585365,
        27.277198
      ],
      [
        88.585446,
        27.277499
      ],
      [
        88.585569,
        27.277751
      ],
      [
        88.586277,
        27.278424
      ],
      [
        88.586921,
        27.278877
      ],
      [
        88.587093,
        27.279015
      ],
      [
        88.587458,
        27.27912
      ],
      [
        88.587838,
        27.279282
      ],
      [
        88.588085,
        27.27943
      ],
      [
        88.588348,
        27.279916
      ],
      [
        88.588584,
        27.280135
      ],
      [
        88.589507,
        27.280545
      ],
      [
        88.589695,
        27.280684
      ],
      [
        88.589716,
        27.280774
      ],
      [
        88.589641,
        27.280936
      ],
      [
        88.589281,
        27.281382
      ],
      [
        88.589239,
        27.281592
      ],
      [
        88.589214,
        27.281928
      ],
      [
        88.589072,
        27.282233
      ],
      [
        88.589016,
        27.28239
      ],
      [
        88.589029,
        27.28277
      ],
      [
        88.589252,
        27.283227
      ],
      [
        88.58948,
        27.283494
      ],
      [
        88.589563,
        27.28352
      ],
      [
        88.589676,
        27.283504
      ],
      [
        88.589719,
        27.283398
      ],
      [
        88.589664,
        27.283296
      ],
      [
        88.5896,
        27.283208
      ],
      [
        88.589562,
        27.283141
      ],
      [
        88.589509,
        27.283062
      ],
      [
        88.589451,
        27.283011
      ],
      [
        88.589411,
        27.282921
      ],
      [
        88.589434,
        27.282817
      ],
      [
        88.589529,
        27.282784
      ],
      [
        88.589614,
        27.282805
      ],
      [
        88.590046,
        27.283543
      ],
      [
        88.590015,
        27.283822
      ],
      [
        88.589739,
        27.283983
      ],
      [
        88.589563,
        27.284329
      ],
      [
        88.589588,
        27.284636
      ],
      [
        88.589657,
        27.284731
      ],
      [
        88.589965,
        27.28482
      ],
      [
        88.590084,
        27.284954
      ],
      [
        88.590178,
        27.285194
      ],
      [
        88.590116,
        27.285506
      ],
      [
        88.590156,
        27.285607
      ],
      [
        88.590238,
        27.285666
      ],
      [
        88.59029,
        27.285781
      ],
      [
        88.590167,
        27.286032
      ],
      [
        88.590068,
        27.286147
      ],
      [
        88.590054,
        27.286243
      ],
      [
        88.590143,
        27.286355
      ],
      [
        88.590362,
        27.286357
      ],
      [
        88.590509,
        27.286368
      ],
      [
        88.590597,
        27.286452
      ],
      [
        88.590676,
        27.28659
      ],
      [
        88.590874,
        27.286807
      ],
      [
        88.591219,
        27.287178
      ],
      [
        88.591323,
        27.287303
      ],
      [
        88.591286,
        27.287463
      ],
      [
        88.591121,
        27.287785
      ],
      [
        88.591067,
        27.288043
      ],
      [
        88.591109,
        27.288319
      ],
      [
        88.591185,
        27.288647
      ],
      [
        88.591306,
        27.28878
      ],
      [
        88.591403,
        27.288927
      ],
      [
        88.591874,
        27.289467
      ],
      [
        88.592081,
        27.289843
      ],
      [
        88.592037,
        27.290046
      ],
      [
        88.59185,
        27.290236
      ],
      [
        88.591529,
        27.2904
      ],
      [
        88.591273,
        27.290696
      ],
      [
        88.59087,
        27.291136
      ],
      [
        88.590466,
        27.29173
      ],
      [
        88.59023,
        27.292042
      ],
      [
        88.589643,
        27.292491
      ],
      [
        88.589086,
        27.293086
      ],
      [
        88.588848,
        27.293231
      ],
      [
        88.588764,
        27.293364
      ],
      [
        88.588576,
        27.293487
      ],
      [
        88.588807,
        27.294005
      ],
      [
        88.588783,
        27.29417
      ],
      [
        88.588773,
        27.294292
      ],
      [
        88.588776,
        27.29441
      ],
      [
        88.58879,
        27.294446
      ],
      [
        88.588813,
        27.294483
      ],
      [
        88.588856,
        27.294516
      ],
      [
        88.588915,
        27.29453
      ],
      [
        88.589017,
        27.29453
      ],
      [
        88.58921,
        27.294509
      ],
      [
        88.589426,
        27.294472
      ],
      [
        88.589879,
        27.294368
      ],
      [
        88.590067,
        27.294269
      ],
      [
        88.590245,
        27.293994
      ],
      [
        88.590356,
        27.293758
      ],
      [
        88.590431,
        27.293612
      ],
      [
        88.590566,
        27.293558
      ],
      [
        88.590698,
        27.293528
      ],
      [
        88.590908,
        27.293483
      ],
      [
        88.591044,
        27.293415
      ],
      [
        88.591085,
        27.293317
      ],
      [
        88.591144,
        27.293258
      ],
      [
        88.591205,
        27.293234
      ],
      [
        88.59122,
        27.293317
      ],
      [
        88.591205,
        27.293391
      ],
      [
        88.591167,
        27.293468
      ],
      [
        88.591116,
        27.293522
      ],
      [
        88.590995,
        27.293586
      ],
      [
        88.590917,
        27.293649
      ],
      [
        88.590851,
        27.293729
      ],
      [
        88.590802,
        27.293871
      ],
      [
        88.590719,
        27.294039
      ],
      [
        88.590554,
        27.294552
      ],
      [
        88.590505,
        27.294721
      ],
      [
        88.590462,
        27.294809
      ],
      [
        88.590384,
        27.294872
      ],
      [
        88.590063,
        27.29499
      ],
      [
        88.589959,
        27.295044
      ],
      [
        88.589723,
        27.29527
      ],
      [
        88.589639,
        27.295323
      ],
      [
        88.589542,
        27.295352
      ],
      [
        88.589126,
        27.295386
      ],
      [
        88.589023,
        27.295408
      ],
      [
        88.588824,
        27.295491
      ],
      [
        88.588718,
        27.295517
      ],
      [
        88.588603,
        27.295522
      ],
      [
        88.588419,
        27.295526
      ],
      [
        88.588178,
        27.295543
      ],
      [
        88.588087,
        27.295575
      ],
      [
        88.58803,
        27.295621
      ],
      [
        88.587995,
        27.295683
      ],
      [
        88.587978,
        27.295775
      ],
      [
        88.588006,
        27.296018
      ],
      [
        88.587999,
        27.296262
      ],
      [
        88.587918,
        27.296495
      ],
      [
        88.5878,
        27.296707
      ],
      [
        88.587745,
        27.29686
      ],
      [
        88.587764,
        27.297009
      ],
      [
        88.587813,
        27.297134
      ],
      [
        88.587929,
        27.297269
      ],
      [
        88.588018,
        27.297336
      ],
      [
        88.58806,
        27.297374
      ],
      [
        88.588074,
        27.297403
      ],
      [
        88.588072,
        27.297433
      ],
      [
        88.588061,
        27.297456
      ],
      [
        88.588012,
        27.297495
      ],
      [
        88.587927,
        27.297545
      ],
      [
        88.587795,
        27.29761
      ],
      [
        88.587723,
        27.297675
      ],
      [
        88.587649,
        27.29776
      ],
      [
        88.587591,
        27.29788
      ],
      [
        88.587564,
        27.298006
      ],
      [
        88.587568,
        27.298158
      ],
      [
        88.587627,
        27.298315
      ],
      [
        88.587779,
        27.298508
      ],
      [
        88.587988,
        27.298768
      ],
      [
        88.588061,
        27.298863
      ],
      [
        88.58825,
        27.299059
      ],
      [
        88.588594,
        27.299356
      ],
      [
        88.588643,
        27.299475
      ],
      [
        88.588689,
        27.299777
      ],
      [
        88.588821,
        27.300113
      ],
      [
        88.588912,
        27.300516
      ],
      [
        88.58897,
        27.301027
      ],
      [
        88.588956,
        27.30129
      ],
      [
        88.588896,
        27.301516
      ],
      [
        88.588795,
        27.301739
      ],
      [
        88.588635,
        27.301971
      ],
      [
        88.588501,
        27.302107
      ],
      [
        88.588233,
        27.3023
      ],
      [
        88.588043,
        27.30248
      ],
      [
        88.587901,
        27.302652
      ],
      [
        88.587838,
        27.302946
      ],
      [
        88.587888,
        27.303188
      ],
      [
        88.587911,
        27.303301
      ],
      [
        88.587948,
        27.303488
      ],
      [
        88.588208,
        27.303641
      ],
      [
        88.588472,
        27.30372
      ],
      [
        88.588935,
        27.303882
      ],
      [
        88.589035,
        27.303953
      ],
      [
        88.589022,
        27.304063
      ],
      [
        88.588929,
        27.304301
      ],
      [
        88.588814,
        27.304535
      ],
      [
        88.588662,
        27.304702
      ],
      [
        88.588486,
        27.304833
      ],
      [
        88.588288,
        27.305038
      ],
      [
        88.588278,
        27.305213
      ],
      [
        88.588353,
        27.305506
      ],
      [
        88.588488,
        27.305746
      ],
      [
        88.588574,
        27.306017
      ],
      [
        88.58854,
        27.306299
      ],
      [
        88.588539,
        27.306459
      ],
      [
        88.58855,
        27.30669
      ],
      [
        88.588688,
        27.306895
      ],
      [
        88.58879,
        27.307011
      ],
      [
        88.588795,
        27.307148
      ],
      [
        88.588681,
        27.307291
      ],
      [
        88.588325,
        27.3074
      ],
      [
        88.588141,
        27.307592
      ],
      [
        88.588087,
        27.30769
      ],
      [
        88.588145,
        27.307866
      ],
      [
        88.588285,
        27.308082
      ],
      [
        88.588313,
        27.308185
      ],
      [
        88.588281,
        27.30835
      ],
      [
        88.588169,
        27.308651
      ],
      [
        88.588169,
        27.30882
      ],
      [
        88.588216,
        27.308979
      ],
      [
        88.588375,
        27.309099
      ],
      [
        88.588634,
        27.309229
      ],
      [
        88.588909,
        27.30933
      ],
      [
        88.589244,
        27.309537
      ],
      [
        88.589416,
        27.30966
      ],
      [
        88.589457,
        27.309796
      ],
      [
        88.589466,
        27.309943
      ],
      [
        88.589438,
        27.310127
      ],
      [
        88.589399,
        27.310266
      ],
      [
        88.589382,
        27.310343
      ],
      [
        88.589037,
        27.310844
      ],
      [
        88.5889,
        27.311122
      ],
      [
        88.588839,
        27.311289
      ],
      [
        88.588809,
        27.311396
      ],
      [
        88.588843,
        27.311534
      ],
      [
        88.588874,
        27.311583
      ],
      [
        88.588927,
        27.311667
      ],
      [
        88.589043,
        27.311777
      ],
      [
        88.589234,
        27.311878
      ],
      [
        88.589526,
        27.312014
      ],
      [
        88.58988,
        27.312178
      ],
      [
        88.590184,
        27.312272
      ],
      [
        88.590364,
        27.312312
      ],
      [
        88.590707,
        27.31236
      ],
      [
        88.590972,
        27.312387
      ],
      [
        88.591241,
        27.312371
      ],
      [
        88.591541,
        27.312279
      ],
      [
        88.591987,
        27.312188
      ],
      [
        88.592331,
        27.312089
      ],
      [
        88.592493,
        27.312051
      ],
      [
        88.59264,
        27.312091
      ],
      [
        88.592834,
        27.312308
      ],
      [
        88.592874,
        27.312472
      ],
      [
        88.592896,
        27.312644
      ],
      [
        88.593001,
        27.312799
      ],
      [
        88.593287,
        27.313011
      ],
      [
        88.593475,
        27.313207
      ],
      [
        88.593662,
        27.313368
      ],
      [
        88.593838,
        27.313492
      ],
      [
        88.593996,
        27.313593
      ],
      [
        88.594327,
        27.313806
      ],
      [
        88.594555,
        27.313963
      ],
      [
        88.594832,
        27.314118
      ],
      [
        88.594926,
        27.314181
      ],
      [
        88.59508,
        27.314284
      ],
      [
        88.595348,
        27.314413
      ],
      [
        88.595508,
        27.314549
      ],
      [
        88.59564,
        27.314818
      ],
      [
        88.595722,
        27.315066
      ],
      [
        88.595714,
        27.315274
      ],
      [
        88.595628,
        27.315415
      ],
      [
        88.595551,
        27.315523
      ],
      [
        88.595516,
        27.315697
      ],
      [
        88.595489,
        27.315966
      ],
      [
        88.595511,
        27.316112
      ],
      [
        88.595518,
        27.316154
      ],
      [
        88.595533,
        27.316197
      ],
      [
        88.595551,
        27.316229
      ],
      [
        88.59558,
        27.316262
      ],
      [
        88.595693,
        27.316383
      ],
      [
        88.595884,
        27.31661
      ],
      [
        88.595863,
        27.316736
      ],
      [
        88.595833,
        27.316967
      ],
      [
        88.595801,
        27.317183
      ],
      [
        88.595813,
        27.317346
      ],
      [
        88.59588,
        27.317478
      ],
      [
        88.596016,
        27.317593
      ],
      [
        88.596216,
        27.317631
      ],
      [
        88.596204,
        27.317469
      ],
      [
        88.596161,
        27.317305
      ],
      [
        88.596163,
        27.317164
      ],
      [
        88.596151,
        27.317018
      ],
      [
        88.596236,
        27.316595
      ],
      [
        88.596243,
        27.316562
      ],
      [
        88.596318,
        27.31619
      ],
      [
        88.59636,
        27.315858
      ],
      [
        88.596384,
        27.31557
      ],
      [
        88.596432,
        27.315465
      ],
      [
        88.596524,
        27.315421
      ],
      [
        88.596663,
        27.315324
      ],
      [
        88.596905,
        27.315178
      ],
      [
        88.597139,
        27.314975
      ],
      [
        88.597181,
        27.314853
      ],
      [
        88.597162,
        27.31468
      ],
      [
        88.597201,
        27.314552
      ],
      [
        88.597228,
        27.314177
      ],
      [
        88.597213,
        27.313984
      ],
      [
        88.5972,
        27.313814
      ],
      [
        88.59718,
        27.313504
      ],
      [
        88.59706,
        27.313274
      ],
      [
        88.59687,
        27.313014
      ],
      [
        88.596657,
        27.312885
      ],
      [
        88.596445,
        27.312879
      ],
      [
        88.596251,
        27.312889
      ],
      [
        88.596065,
        27.312819
      ],
      [
        88.595958,
        27.312738
      ],
      [
        88.595841,
        27.312582
      ],
      [
        88.595624,
        27.312177
      ],
      [
        88.595482,
        27.311882
      ],
      [
        88.59539,
        27.311566
      ],
      [
        88.595296,
        27.311195
      ],
      [
        88.595213,
        27.310923
      ],
      [
        88.595154,
        27.31068
      ],
      [
        88.59515,
        27.31034
      ],
      [
        88.595166,
        27.310201
      ],
      [
        88.595145,
        27.310106
      ],
      [
        88.595134,
        27.310057
      ],
      [
        88.59507,
        27.309973
      ],
      [
        88.595058,
        27.309761
      ],
      [
        88.594967,
        27.309542
      ],
      [
        88.594948,
        27.309376
      ],
      [
        88.594806,
        27.309191
      ],
      [
        88.594781,
        27.308994
      ],
      [
        88.594764,
        27.3089
      ],
      [
        88.594746,
        27.308782
      ],
      [
        88.594663,
        27.308622
      ],
      [
        88.594397,
        27.308148
      ],
      [
        88.594186,
        27.307831
      ],
      [
        88.593924,
        27.307495
      ],
      [
        88.59386,
        27.307413
      ],
      [
        88.593527,
        27.306902
      ],
      [
        88.593533,
        27.30684
      ],
      [
        88.593564,
        27.30681
      ],
      [
        88.593631,
        27.306787
      ],
      [
        88.593696,
        27.306809
      ],
      [
        88.593909,
        27.307071
      ],
      [
        88.59426,
        27.30745
      ],
      [
        88.594495,
        27.307662
      ],
      [
        88.594575,
        27.307716
      ],
      [
        88.594902,
        27.307908
      ],
      [
        88.595179,
        27.308021
      ],
      [
        88.595477,
        27.308246
      ],
      [
        88.595665,
        27.308434
      ],
      [
        88.595791,
        27.308545
      ],
      [
        88.596002,
        27.308783
      ],
      [
        88.59616,
        27.308972
      ],
      [
        88.596281,
        27.309062
      ],
      [
        88.596357,
        27.309117
      ],
      [
        88.596563,
        27.309306
      ],
      [
        88.596831,
        27.309492
      ],
      [
        88.59697,
        27.309705
      ],
      [
        88.597026,
        27.309781
      ],
      [
        88.597177,
        27.310014
      ],
      [
        88.597302,
        27.310241
      ],
      [
        88.597423,
        27.310503
      ],
      [
        88.597555,
        27.31069
      ],
      [
        88.597654,
        27.310845
      ],
      [
        88.597772,
        27.311012
      ],
      [
        88.597964,
        27.311246
      ],
      [
        88.59813,
        27.311456
      ],
      [
        88.598282,
        27.311565
      ],
      [
        88.598465,
        27.311701
      ],
      [
        88.598681,
        27.311903
      ],
      [
        88.598908,
        27.312144
      ],
      [
        88.599127,
        27.312385
      ],
      [
        88.599368,
        27.312616
      ],
      [
        88.599549,
        27.312773
      ],
      [
        88.599905,
        27.313077
      ],
      [
        88.600233,
        27.313261
      ],
      [
        88.600312,
        27.313319
      ],
      [
        88.600447,
        27.313417
      ],
      [
        88.600567,
        27.313495
      ],
      [
        88.600773,
        27.313714
      ],
      [
        88.600951,
        27.314003
      ],
      [
        88.601045,
        27.314126
      ],
      [
        88.601178,
        27.314269
      ],
      [
        88.601287,
        27.314488
      ],
      [
        88.601395,
        27.314606
      ],
      [
        88.601648,
        27.314787
      ],
      [
        88.601702,
        27.314824
      ],
      [
        88.601716,
        27.314886
      ],
      [
        88.601668,
        27.314954
      ],
      [
        88.601377,
        27.315308
      ],
      [
        88.601005,
        27.315868
      ],
      [
        88.600844,
        27.316129
      ],
      [
        88.600842,
        27.316423
      ],
      [
        88.600943,
        27.316633
      ],
      [
        88.60107,
        27.316826
      ],
      [
        88.60111,
        27.316888
      ],
      [
        88.601376,
        27.317291
      ],
      [
        88.601456,
        27.317332
      ],
      [
        88.601578,
        27.317325
      ],
      [
        88.601684,
        27.317291
      ],
      [
        88.601795,
        27.317274
      ],
      [
        88.601927,
        27.317312
      ],
      [
        88.602063,
        27.317428
      ],
      [
        88.602265,
        27.317626
      ],
      [
        88.602427,
        27.317765
      ],
      [
        88.602593,
        27.317918
      ],
      [
        88.602791,
        27.318075
      ],
      [
        88.603194,
        27.318389
      ],
      [
        88.603367,
        27.318566
      ],
      [
        88.603401,
        27.318695
      ],
      [
        88.603417,
        27.318756
      ],
      [
        88.603431,
        27.318982
      ],
      [
        88.603452,
        27.319116
      ],
      [
        88.603599,
        27.31925
      ],
      [
        88.60378,
        27.319368
      ],
      [
        88.603967,
        27.319422
      ],
      [
        88.604299,
        27.319514
      ],
      [
        88.604544,
        27.319554
      ],
      [
        88.60488,
        27.319576
      ],
      [
        88.605109,
        27.319708
      ],
      [
        88.605247,
        27.319793
      ],
      [
        88.60537,
        27.319831
      ],
      [
        88.605503,
        27.319952
      ],
      [
        88.605626,
        27.320156
      ],
      [
        88.605735,
        27.320338
      ],
      [
        88.605735,
        27.320484
      ],
      [
        88.605855,
        27.32065
      ],
      [
        88.606053,
        27.320708
      ],
      [
        88.606314,
        27.320924
      ],
      [
        88.606401,
        27.321004
      ],
      [
        88.606544,
        27.3212
      ],
      [
        88.606678,
        27.321343
      ],
      [
        88.60692,
        27.321626
      ],
      [
        88.607387,
        27.322039
      ],
      [
        88.607407,
        27.321794
      ],
      [
        88.607005,
        27.321373
      ],
      [
        88.606771,
        27.321038
      ],
      [
        88.606719,
        27.320548
      ],
      [
        88.606668,
        27.320099
      ],
      [
        88.60654,
        27.319779
      ],
      [
        88.606356,
        27.319529
      ],
      [
        88.605989,
        27.319033
      ],
      [
        88.605721,
        27.31879
      ],
      [
        88.605455,
        27.318543
      ],
      [
        88.604763,
        27.318079
      ],
      [
        88.604579,
        27.317979
      ],
      [
        88.604339,
        27.317704
      ],
      [
        88.604208,
        27.317508
      ],
      [
        88.604232,
        27.317368
      ],
      [
        88.604353,
        27.317346
      ],
      [
        88.604554,
        27.317461
      ],
      [
        88.60482,
        27.317656
      ],
      [
        88.605326,
        27.317944
      ],
      [
        88.605689,
        27.318025
      ],
      [
        88.606112,
        27.318092
      ],
      [
        88.606458,
        27.318126
      ],
      [
        88.606555,
        27.318147
      ],
      [
        88.606771,
        27.318194
      ],
      [
        88.606963,
        27.318245
      ],
      [
        88.60733,
        27.318384
      ],
      [
        88.607617,
        27.318612
      ],
      [
        88.608564,
        27.319517
      ],
      [
        88.608839,
        27.319821
      ],
      [
        88.608932,
        27.320166
      ],
      [
        88.608982,
        27.320379
      ],
      [
        88.608807,
        27.320948
      ],
      [
        88.608824,
        27.321246
      ],
      [
        88.608891,
        27.321515
      ],
      [
        88.609009,
        27.321742
      ],
      [
        88.609303,
        27.32213
      ],
      [
        88.609425,
        27.322322
      ],
      [
        88.609593,
        27.322584
      ],
      [
        88.609806,
        27.323047
      ],
      [
        88.609852,
        27.323156
      ],
      [
        88.609922,
        27.323377
      ],
      [
        88.610081,
        27.324105
      ],
      [
        88.610205,
        27.32485
      ],
      [
        88.610193,
        27.325068
      ],
      [
        88.610124,
        27.325246
      ],
      [
        88.610025,
        27.325583
      ],
      [
        88.610029,
        27.326018
      ],
      [
        88.610039,
        27.326269
      ],
      [
        88.610257,
        27.32712
      ],
      [
        88.610275,
        27.327161
      ],
      [
        88.610313,
        27.327195
      ],
      [
        88.610365,
        27.327226
      ],
      [
        88.610445,
        27.327217
      ],
      [
        88.610954,
        27.327023
      ],
      [
        88.611144,
        27.32697
      ],
      [
        88.611305,
        27.326947
      ],
      [
        88.611342,
        27.326965
      ],
      [
        88.611369,
        27.326977
      ],
      [
        88.611424,
        27.327019
      ],
      [
        88.611479,
        27.327058
      ],
      [
        88.611524,
        27.327111
      ],
      [
        88.611618,
        27.327378
      ],
      [
        88.61164,
        27.327535
      ],
      [
        88.611714,
        27.327993
      ],
      [
        88.611707,
        27.328308
      ],
      [
        88.611687,
        27.328519
      ],
      [
        88.611676,
        27.3286
      ],
      [
        88.61169,
        27.32873
      ],
      [
        88.611761,
        27.329042
      ],
      [
        88.611767,
        27.329068
      ],
      [
        88.611857,
        27.329385
      ],
      [
        88.611873,
        27.329442
      ],
      [
        88.611927,
        27.329611
      ],
      [
        88.612057,
        27.329942
      ],
      [
        88.612076,
        27.329976
      ],
      [
        88.612146,
        27.330084
      ],
      [
        88.612271,
        27.330217
      ],
      [
        88.612384,
        27.330297
      ],
      [
        88.612412,
        27.330311
      ],
      [
        88.612439,
        27.330324
      ],
      [
        88.6126,
        27.330367
      ],
      [
        88.612851,
        27.330433
      ],
      [
        88.613243,
        27.330521
      ],
      [
        88.613435,
        27.330579
      ],
      [
        88.613526,
        27.330699
      ],
      [
        88.613708,
        27.330968
      ],
      [
        88.613772,
        27.331325
      ],
      [
        88.613833,
        27.331424
      ],
      [
        88.613973,
        27.331574
      ],
      [
        88.614074,
        27.331814
      ],
      [
        88.614223,
        27.331963
      ],
      [
        88.614483,
        27.332262
      ],
      [
        88.614672,
        27.332498
      ],
      [
        88.614891,
        27.332836
      ],
      [
        88.615129,
        27.333255
      ],
      [
        88.615245,
        27.333613
      ],
      [
        88.615338,
        27.334039
      ],
      [
        88.61538,
        27.334349
      ],
      [
        88.615311,
        27.334496
      ],
      [
        88.615097,
        27.33485
      ],
      [
        88.615063,
        27.335063
      ],
      [
        88.615059,
        27.335086
      ],
      [
        88.615046,
        27.335273
      ],
      [
        88.61504,
        27.3353
      ],
      [
        88.615018,
        27.335391
      ],
      [
        88.615005,
        27.335447
      ],
      [
        88.614925,
        27.335589
      ],
      [
        88.614578,
        27.335874
      ],
      [
        88.614353,
        27.336117
      ],
      [
        88.614232,
        27.336281
      ],
      [
        88.614198,
        27.336373
      ],
      [
        88.614167,
        27.33646
      ],
      [
        88.614156,
        27.336664
      ],
      [
        88.614258,
        27.337029
      ],
      [
        88.614282,
        27.337115
      ],
      [
        88.61444,
        27.337285
      ],
      [
        88.614818,
        27.337568
      ],
      [
        88.615072,
        27.337813
      ],
      [
        88.615103,
        27.337881
      ],
      [
        88.61509,
        27.337966
      ],
      [
        88.615068,
        27.338033
      ],
      [
        88.61507,
        27.338109
      ],
      [
        88.615083,
        27.338175
      ],
      [
        88.61507,
        27.33838
      ],
      [
        88.615049,
        27.338503
      ],
      [
        88.614917,
        27.338672
      ],
      [
        88.614758,
        27.33882
      ],
      [
        88.614412,
        27.339037
      ],
      [
        88.614076,
        27.339178
      ],
      [
        88.613923,
        27.339229
      ],
      [
        88.613773,
        27.339219
      ]
    ],
    "type": "LineString"
  }
};

export const DEFAULT_ROUTE_OUT_OF_COVERAGE: RouteAnalysisData = {
  "status": "success",
  "route_summary": {
    "total_distance_km": 82.04,
    "estimated_duration_min": 94.3,
    "sample_points_count": 200,
    "summary_sentence": "On this route 8 section(s) need watching (km 0.0\u20132.9, km 4.1\u20135.0, km 5.8\u20137.8, km 8.7\u20139.9, km 11.1\u201313.6, km 14.4\u201332.1, km 33.0\u201341.2, km 42.0\u201347.4), none are high risk. [Outside coverage: km 47.8\u201382.0 beyond regional boundary].",
    "plain_segments_list": [
      "km 0.0\u20132.9: Watch",
      "km 3.3\u20133.7: Low risk",
      "km 4.1\u20135.0: Watch",
      "km 5.4\u20135.4: Low risk",
      "km 5.8\u20137.8: Watch",
      "km 8.2\u20138.2: Low risk",
      "km 8.7\u20139.9: Watch",
      "km 10.3\u201310.7: Low risk",
      "km 11.1\u201313.6: Watch",
      "km 14.0\u201314.0: Low risk",
      "km 14.4\u201332.1: Watch",
      "km 32.6\u201332.6: Low risk",
      "km 33.0\u201341.2: Watch",
      "km 41.6\u201341.6: Low risk",
      "km 42.0\u201347.4: Watch",
      "km 47.8\u201382.0: No model coverage"
    ]
  },
  "segments": [
    {
      "start_km": 0.0,
      "end_km": 2.89,
      "tier": "YELLOW",
      "color": "#f59e0b",
      "coordinates": [
        [
          88.528489,
          27.176690999999998
        ],
        [
          88.52455240317559,
          27.17752696466204
        ],
        [
          88.5206395356734,
          27.177982048582173
        ],
        [
          88.51832823153468,
          27.180892389407127
        ],
        [
          88.51469894079626,
          27.18114423647356
        ],
        [
          88.51098169273544,
          27.18103407150334
        ],
        [
          88.50829558244155,
          27.181452282788428
        ],
        [
          88.50610290656375,
          27.183919277023225
        ]
      ],
      "sample_points_count": 8,
      "avg_score": 0.3481
    },
    {
      "start_km": 3.3,
      "end_km": 3.71,
      "tier": "GREEN",
      "color": "#16a34a",
      "coordinates": [
        [
          88.5045863374528,
          27.186280241812952
        ],
        [
          88.50350806345337,
          27.187867611740167
        ]
      ],
      "sample_points_count": 2,
      "avg_score": 0.1226
    },
    {
      "start_km": 4.12,
      "end_km": 4.95,
      "tier": "YELLOW",
      "color": "#f59e0b",
      "coordinates": [
        [
          88.49974402643538,
          27.187922384435126
        ],
        [
          88.49772535273725,
          27.18666239182891
        ],
        [
          88.49729468543445,
          27.190058294159282
        ]
      ],
      "sample_points_count": 3,
      "avg_score": 0.3377
    },
    {
      "start_km": 5.36,
      "end_km": 5.36,
      "tier": "GREEN",
      "color": "#16a34a",
      "coordinates": [
        [
          88.49482701567885,
          27.192900322102602
        ]
      ],
      "sample_points_count": 1,
      "avg_score": 0.1185
    },
    {
      "start_km": 5.77,
      "end_km": 7.83,
      "tier": "YELLOW",
      "color": "#f59e0b",
      "coordinates": [
        [
          88.4927795033651,
          27.195351078639845
        ],
        [
          88.49033716805603,
          27.197522575765028
        ],
        [
          88.48844048137774,
          27.200776069453322
        ],
        [
          88.48618828531814,
          27.20380784881786
        ],
        [
          88.48883641094571,
          27.20640640248867
        ],
        [
          88.4910310465418,
          27.209141408230813
        ]
      ],
      "sample_points_count": 6,
      "avg_score": 0.3437
    },
    {
      "start_km": 8.24,
      "end_km": 8.24,
      "tier": "GREEN",
      "color": "#16a34a",
      "coordinates": [
        [
          88.49096395533199,
          27.212828664012292
        ]
      ],
      "sample_points_count": 1,
      "avg_score": 0.1163
    },
    {
      "start_km": 8.66,
      "end_km": 9.89,
      "tier": "YELLOW",
      "color": "#f59e0b",
      "coordinates": [
        [
          88.49038616597738,
          27.21602187293911
        ],
        [
          88.49018983230313,
          27.219625827227887
        ],
        [
          88.49180566640584,
          27.223037995261947
        ],
        [
          88.49330127312217,
          27.22627873392894
        ]
      ],
      "sample_points_count": 4,
      "avg_score": 0.3246
    },
    {
      "start_km": 10.31,
      "end_km": 10.72,
      "tier": "GREEN",
      "color": "#16a34a",
      "coordinates": [
        [
          88.49421495981228,
          27.229714062154347
        ],
        [
          88.49664866261253,
          27.231705908036112
        ]
      ],
      "sample_points_count": 2,
      "avg_score": 0.1235
    },
    {
      "start_km": 11.13,
      "end_km": 13.6,
      "tier": "YELLOW",
      "color": "#f59e0b",
      "coordinates": [
        [
          88.49251637129335,
          27.231865155523653
        ],
        [
          88.49066002745002,
          27.235112530116336
        ],
        [
          88.48857949394285,
          27.23819234833423
        ],
        [
          88.48558864995053,
          27.24067062545047
        ],
        [
          88.48184687161964,
          27.241785441068405
        ],
        [
          88.47815062578323,
          27.243076014589082
        ],
        [
          88.47650792400592,
          27.24641127083743
        ]
      ],
      "sample_points_count": 7,
      "avg_score": 0.3205
    },
    {
      "start_km": 14.01,
      "end_km": 14.01,
      "tier": "GREEN",
      "color": "#16a34a",
      "coordinates": [
        [
          88.47554603691195,
          27.249921798728302
        ]
      ],
      "sample_points_count": 1,
      "avg_score": 0.1579
    },
    {
      "start_km": 14.43,
      "end_km": 32.15,
      "tier": "YELLOW",
      "color": "#f59e0b",
      "coordinates": [
        [
          88.47493770643617,
          27.24756166955628
        ],
        [
          88.47207058479347,
          27.248971371987054
        ],
        [
          88.4686056455628,
          27.250674645094175
        ],
        [
          88.46452306777492,
          27.25082143854362
        ],
        [
          88.46127159030948,
          27.251342670199794
        ],
        [
          88.46097323196715,
          27.254533249910846
        ],
        [
          88.46135112876073,
          27.257637901752638
        ],
        [
          88.45941315343909,
          27.259034786024454
        ],
        [
          88.4558078548919,
          27.260022450015953
        ],
        [
          88.45223773304485,
          27.26166064427135
        ],
        [
          88.44857609914969,
          27.262577722765343
        ],
        [
          88.44653512318646,
          27.265692457726008
        ],
        [
          88.44504745204661,
          27.268349789364006
        ],
        [
          88.44581292324256,
          27.2717123265869
        ],
        [
          88.4458079772791,
          27.27529053876713
        ],
        [
          88.44731926361591,
          27.278512573356128
        ],
        [
          88.4482366014224,
          27.28195914904656
        ],
        [
          88.4498814138707,
          27.285036090147745
        ],
        [
          88.44902375363019,
          27.28859433381464
        ],
        [
          88.44880446693342,
          27.292165169202843
        ],
        [
          88.4490581723723,
          27.295428749985412
        ],
        [
          88.44966619331424,
          27.298930488180687
        ],
        [
          88.45107629056342,
          27.302243316034055
        ],
        [
          88.45404030434828,
          27.30477265811939
        ],
        [
          88.45623891771184,
          27.307527080771003
        ],
        [
          88.45821598033811,
          27.31056630617954
        ],
        [
          88.46057576216482,
          27.31285750570862
        ],
        [
          88.46354574429049,
          27.31523597622985
        ],
        [
          88.46706741600501,
          27.316972457615332
        ],
        [
          88.4705033606183,
          27.31802153049338
        ],
        [
          88.4743134632197,
          27.31838523162843
        ],
        [
          88.47800459232202,
          27.319860402453912
        ],
        [
          88.4805149843745,
          27.32245969461755
        ],
        [
          88.4837430096111,
          27.3242409384504
        ],
        [
          88.48748728912268,
          27.32513593743702
        ],
        [
          88.49108361189347,
          27.32540639099918
        ],
        [
          88.49459113847813,
          27.324635027267018
        ],
        [
          88.49338259120749,
          27.326949875585612
        ],
        [
          88.49163190000549,
          27.329531259179472
        ],
        [
          88.49115352530964,
          27.332725797866136
        ],
        [
          88.49084143220371,
          27.336068687617068
        ],
        [
          88.49276216453283,
          27.3391977056712
        ],
        [
          88.4920803763882,
          27.34107385091509
        ],
        [
          88.48901236203066,
          27.342729968838952
        ]
      ],
      "sample_points_count": 44,
      "avg_score": 0.3458
    },
    {
      "start_km": 32.56,
      "end_km": 32.56,
      "tier": "GREEN",
      "color": "#16a34a",
      "coordinates": [
        [
          88.48675425509903,
          27.34539000098829
        ]
      ],
      "sample_points_count": 1,
      "avg_score": 0.1201
    },
    {
      "start_km": 32.98,
      "end_km": 41.22,
      "tier": "YELLOW",
      "color": "#f59e0b",
      "coordinates": [
        [
          88.4859294479072,
          27.348647255504122
        ],
        [
          88.48452920372078,
          27.35178489750177
        ],
        [
          88.48418377094191,
          27.355404083844146
        ],
        [
          88.48388285679272,
          27.359008293825504
        ],
        [
          88.4845195876158,
          27.36252190883801
        ],
        [
          88.48537833069376,
          27.366106719799102
        ],
        [
          88.48589853091916,
          27.369751390024412
        ],
        [
          88.48765776251024,
          27.37297782564735
        ],
        [
          88.49034108027853,
          27.37547491350924
        ],
        [
          88.49387451941263,
          27.37667294876068
        ],
        [
          88.49735708181662,
          27.377913248941628
        ],
        [
          88.50044912400236,
          27.380070622125455
        ],
        [
          88.50320732715691,
          27.382161024767356
        ],
        [
          88.50619283287787,
          27.384586147481635
        ],
        [
          88.5097670711092,
          27.38631677456979
        ],
        [
          88.51203408399104,
          27.38903732296108
        ],
        [
          88.51410501641065,
          27.39139922658593
        ],
        [
          88.51588974803502,
          27.39472312288833
        ],
        [
          88.51794481453531,
          27.397843700293105
        ],
        [
          88.52008391905414,
          27.400901168460685
        ],
        [
          88.52061673539984,
          27.403715416445795
        ]
      ],
      "sample_points_count": 21,
      "avg_score": 0.3501
    },
    {
      "start_km": 41.63,
      "end_km": 41.63,
      "tier": "GREEN",
      "color": "#16a34a",
      "coordinates": [
        [
          88.52061091155991,
          27.404944627194094
        ]
      ],
      "sample_points_count": 1,
      "avg_score": 0.141
    },
    {
      "start_km": 42.04,
      "end_km": 47.4,
      "tier": "YELLOW",
      "color": "#f59e0b",
      "coordinates": [
        [
          88.51872785285006,
          27.407847700401618
        ],
        [
          88.51678931291168,
          27.411025967225456
        ],
        [
          88.5152755848356,
          27.4144297576998
        ],
        [
          88.5156432099562,
          27.41801772597614
        ],
        [
          88.51554145554876,
          27.42149702516033
        ],
        [
          88.51460456014415,
          27.425009211369964
        ],
        [
          88.51447482382099,
          27.42842859975079
        ],
        [
          88.51480023428346,
          27.43158875332565
        ],
        [
          88.5148688696261,
          27.43514541736175
        ],
        [
          88.51431621168075,
          27.438454730050967
        ],
        [
          88.51365865122467,
          27.441482695701307
        ],
        [
          88.51604403094348,
          27.444003455719713
        ],
        [
          88.51860564570973,
          27.44681617972988
        ],
        [
          88.51852144244103,
          27.449569751495883
        ]
      ],
      "sample_points_count": 14,
      "avg_score": 0.3741
    },
    {
      "start_km": 47.82,
      "end_km": 82.03,
      "tier": "NO_COVERAGE",
      "color": "#94a3b8",
      "coordinates": [
        [
          88.52058021014476,
          27.452257777680053
        ],
        [
          88.52206629556112,
          27.455407587047432
        ],
        [
          88.51979818099313,
          27.457534448873027
        ],
        [
          88.52293549454339,
          27.45897701910784
        ],
        [
          88.52338046764629,
          27.46254392444382
        ],
        [
          88.5252405797566,
          27.46543228555385
        ],
        [
          88.52480624151204,
          27.468592407643616
        ],
        [
          88.52730218951184,
          27.470918139394577
        ],
        [
          88.52678062212759,
          27.474354730127164
        ],
        [
          88.52781459061895,
          27.47622160870109
        ],
        [
          88.52691565762125,
          27.479005446963722
        ],
        [
          88.52718059577515,
          27.48209155675142
        ],
        [
          88.52779364727331,
          27.481658232564953
        ],
        [
          88.52846940243505,
          27.479438129042887
        ],
        [
          88.52856077198304,
          27.482602257127983
        ],
        [
          88.52897617083288,
          27.479780055077423
        ],
        [
          88.5289442746687,
          27.48218617892671
        ],
        [
          88.52987732890409,
          27.480637367450456
        ],
        [
          88.53017257997729,
          27.481231375558874
        ],
        [
          88.53108058626437,
          27.48229261225722
        ],
        [
          88.53121004006945,
          27.482177339634315
        ],
        [
          88.53295848806773,
          27.484456055067522
        ],
        [
          88.53229483991325,
          27.487448766704397
        ],
        [
          88.52971650961544,
          27.4891057079129
        ],
        [
          88.52849072643154,
          27.492422653791927
        ],
        [
          88.52926284130501,
          27.495604932158248
        ],
        [
          88.52908644712947,
          27.49584410980148
        ],
        [
          88.52860625581978,
          27.49591670836291
        ],
        [
          88.52814055600247,
          27.496076766905542
        ],
        [
          88.52662652994306,
          27.493012012039298
        ],
        [
          88.527570048545,
          27.489859966586046
        ],
        [
          88.5266390295649,
          27.49113420533562
        ],
        [
          88.52596461825779,
          27.49403280655741
        ],
        [
          88.52678186732868,
          27.49733388288096
        ],
        [
          88.52858613545607,
          27.500222287210786
        ],
        [
          88.52819192483935,
          27.50355360787208
        ],
        [
          88.52888555483135,
          27.507038391685267
        ],
        [
          88.52936569135443,
          27.50927180371188
        ],
        [
          88.52914911245878,
          27.509732461257553
        ],
        [
          88.52636543497599,
          27.509668105751828
        ],
        [
          88.52769267060589,
          27.513102921350637
        ],
        [
          88.5292725979931,
          27.51626624824358
        ],
        [
          88.53085052482217,
          27.519586182799124
        ],
        [
          88.52831433287585,
          27.522338271948446
        ],
        [
          88.52495903258513,
          27.524295069524772
        ],
        [
          88.52125080306365,
          27.525776532497453
        ],
        [
          88.51864800784647,
          27.526660504638553
        ],
        [
          88.51510849263168,
          27.527119743481872
        ],
        [
          88.51274231394133,
          27.5294629519243
        ],
        [
          88.51235552383591,
          27.53271309181144
        ],
        [
          88.50837799680275,
          27.532822023997767
        ],
        [
          88.50491539143147,
          27.53450960943388
        ],
        [
          88.50090365486045,
          27.535412936292364
        ],
        [
          88.49837000094942,
          27.53524033747757
        ],
        [
          88.49454755002927,
          27.536193470642203
        ],
        [
          88.49323552283289,
          27.536225954231732
        ],
        [
          88.49062924371368,
          27.53698001930038
        ],
        [
          88.48824765848077,
          27.538531191573263
        ],
        [
          88.48719297947459,
          27.539842585328703
        ],
        [
          88.48484521940469,
          27.541099635693747
        ],
        [
          88.48381631665862,
          27.538854660253676
        ],
        [
          88.48056668078635,
          27.540105969102605
        ],
        [
          88.47732815117338,
          27.542235666030987
        ],
        [
          88.47606165957738,
          27.54401549220751
        ],
        [
          88.4797195515052,
          27.542608886871037
        ],
        [
          88.48075591083459,
          27.542827828549004
        ],
        [
          88.47778015122599,
          27.54498799617417
        ],
        [
          88.47669027239968,
          27.548217666477647
        ],
        [
          88.47327474472925,
          27.54906645576911
        ],
        [
          88.46972793175068,
          27.55021558701554
        ],
        [
          88.47052144693735,
          27.55096341819123
        ],
        [
          88.47274372457807,
          27.55043419215469
        ],
        [
          88.4715266713359,
          27.553763248062527
        ],
        [
          88.47394375485193,
          27.552235234425655
        ],
        [
          88.4749986212073,
          27.552473715398147
        ],
        [
          88.47851682057566,
          27.55272486127795
        ],
        [
          88.48204654197816,
          27.551138579249656
        ],
        [
          88.48534299814585,
          27.54928938782466
        ],
        [
          88.48840378817219,
          27.548324113471743
        ],
        [
          88.48944360709459,
          27.549054360089325
        ],
        [
          88.49060532202085,
          27.549324531193072
        ],
        [
          88.48973438331527,
          27.550280763516984
        ],
        [
          88.49007593978384,
          27.55240256804923
        ],
        [
          88.487572,
          27.555294
        ]
      ],
      "sample_points_count": 84,
      "avg_score": 0.0
    }
  ],
  "sample_points": [
    {
      "index": 0,
      "latitude": 27.176690999999998,
      "longitude": 88.528489,
      "distance_km": 0.0,
      "in_coverage": true,
      "elevation_m": 310.6,
      "slope_deg": 27.8,
      "aspect_deg": 210.0,
      "curvature": -1.3884,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3313,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 1,
      "latitude": 27.17752696466204,
      "longitude": 88.52455240317559,
      "distance_km": 0.41,
      "in_coverage": true,
      "elevation_m": 321.0,
      "slope_deg": 25.9,
      "aspect_deg": 183.9,
      "curvature": -0.2387,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3506,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 2,
      "latitude": 27.177982048582173,
      "longitude": 88.5206395356734,
      "distance_km": 0.82,
      "in_coverage": true,
      "elevation_m": 329.3,
      "slope_deg": 35.3,
      "aspect_deg": 227.1,
      "curvature": -0.0354,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3611,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 3,
      "latitude": 27.180892389407127,
      "longitude": 88.51832823153468,
      "distance_km": 1.24,
      "in_coverage": true,
      "elevation_m": 338.6,
      "slope_deg": 44.9,
      "aspect_deg": 221.5,
      "curvature": -0.2951,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3758,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 4,
      "latitude": 27.18114423647356,
      "longitude": 88.51469894079626,
      "distance_km": 1.65,
      "in_coverage": true,
      "elevation_m": 352.0,
      "slope_deg": 16.3,
      "aspect_deg": 133.4,
      "curvature": 0.6284,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3113,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 5,
      "latitude": 27.18103407150334,
      "longitude": 88.51098169273544,
      "distance_km": 2.06,
      "in_coverage": true,
      "elevation_m": 369.3,
      "slope_deg": 28.8,
      "aspect_deg": 132.6,
      "curvature": -1.3034,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3458,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 6,
      "latitude": 27.181452282788428,
      "longitude": 88.50829558244155,
      "distance_km": 2.47,
      "in_coverage": true,
      "elevation_m": 416.7,
      "slope_deg": 50.0,
      "aspect_deg": 238.6,
      "curvature": 0.6457,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3668,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 7,
      "latitude": 27.183919277023225,
      "longitude": 88.50610290656375,
      "distance_km": 2.89,
      "in_coverage": true,
      "elevation_m": 390.4,
      "slope_deg": 34.5,
      "aspect_deg": 223.5,
      "curvature": 0.0837,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3419,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 8,
      "latitude": 27.186280241812952,
      "longitude": 88.5045863374528,
      "distance_km": 3.3,
      "in_coverage": true,
      "elevation_m": 367.3,
      "slope_deg": 10.7,
      "aspect_deg": 184.4,
      "curvature": -0.1625,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.1233,
      "tier": "GREEN",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 9,
      "latitude": 27.187867611740167,
      "longitude": 88.50350806345337,
      "distance_km": 3.71,
      "in_coverage": true,
      "elevation_m": 387.9,
      "slope_deg": 1.1,
      "aspect_deg": 200.2,
      "curvature": 0.1564,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.1219,
      "tier": "GREEN",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 10,
      "latitude": 27.187922384435126,
      "longitude": 88.49974402643538,
      "distance_km": 4.12,
      "in_coverage": true,
      "elevation_m": 384.7,
      "slope_deg": 16.7,
      "aspect_deg": 144.2,
      "curvature": -0.1769,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3302,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 11,
      "latitude": 27.18666239182891,
      "longitude": 88.49772535273725,
      "distance_km": 4.53,
      "in_coverage": true,
      "elevation_m": 362.5,
      "slope_deg": 34.8,
      "aspect_deg": 258.5,
      "curvature": 0.7956,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3234,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 12,
      "latitude": 27.190058294159282,
      "longitude": 88.49729468543445,
      "distance_km": 4.95,
      "in_coverage": true,
      "elevation_m": 353.8,
      "slope_deg": 49.8,
      "aspect_deg": 249.2,
      "curvature": -1.1678,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3595,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 13,
      "latitude": 27.192900322102602,
      "longitude": 88.49482701567885,
      "distance_km": 5.36,
      "in_coverage": true,
      "elevation_m": 349.6,
      "slope_deg": 8.9,
      "aspect_deg": 234.2,
      "curvature": 0.5409,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.1185,
      "tier": "GREEN",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 14,
      "latitude": 27.195351078639845,
      "longitude": 88.4927795033651,
      "distance_km": 5.77,
      "in_coverage": true,
      "elevation_m": 354.5,
      "slope_deg": 18.2,
      "aspect_deg": 255.9,
      "curvature": -0.3877,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.2634,
      "tier": "YELLOW",
      "is_borderline": true,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 15,
      "latitude": 27.197522575765028,
      "longitude": 88.49033716805603,
      "distance_km": 6.18,
      "in_coverage": true,
      "elevation_m": 380.0,
      "slope_deg": 47.6,
      "aspect_deg": 227.3,
      "curvature": -0.3237,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3705,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 16,
      "latitude": 27.200776069453322,
      "longitude": 88.48844048137774,
      "distance_km": 6.6,
      "in_coverage": true,
      "elevation_m": 397.6,
      "slope_deg": 29.8,
      "aspect_deg": 247.4,
      "curvature": 0.4261,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3395,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 17,
      "latitude": 27.20380784881786,
      "longitude": 88.48618828531814,
      "distance_km": 7.01,
      "in_coverage": true,
      "elevation_m": 367.9,
      "slope_deg": 41.1,
      "aspect_deg": 259.6,
      "curvature": 0.0595,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3467,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 18,
      "latitude": 27.20640640248867,
      "longitude": 88.48883641094571,
      "distance_km": 7.42,
      "in_coverage": true,
      "elevation_m": 370.6,
      "slope_deg": 40.2,
      "aspect_deg": 335.3,
      "curvature": -0.2648,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3871,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 19,
      "latitude": 27.209141408230813,
      "longitude": 88.4910310465418,
      "distance_km": 7.83,
      "in_coverage": true,
      "elevation_m": 364.9,
      "slope_deg": 34.3,
      "aspect_deg": 266.7,
      "curvature": -0.0597,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.355,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 20,
      "latitude": 27.212828664012292,
      "longitude": 88.49096395533199,
      "distance_km": 8.24,
      "in_coverage": true,
      "elevation_m": 356.5,
      "slope_deg": 11.4,
      "aspect_deg": 247.1,
      "curvature": -0.3729,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.1163,
      "tier": "GREEN",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 21,
      "latitude": 27.21602187293911,
      "longitude": 88.49038616597738,
      "distance_km": 8.66,
      "in_coverage": true,
      "elevation_m": 374.0,
      "slope_deg": 18.0,
      "aspect_deg": 267.3,
      "curvature": 0.4516,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.2827,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 22,
      "latitude": 27.219625827227887,
      "longitude": 88.49018983230313,
      "distance_km": 9.07,
      "in_coverage": true,
      "elevation_m": 351.6,
      "slope_deg": 22.8,
      "aspect_deg": 296.1,
      "curvature": -0.1129,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.2778,
      "tier": "YELLOW",
      "is_borderline": true,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 23,
      "latitude": 27.223037995261947,
      "longitude": 88.49180566640584,
      "distance_km": 9.48,
      "in_coverage": true,
      "elevation_m": 365.6,
      "slope_deg": 43.2,
      "aspect_deg": 285.7,
      "curvature": -2.5752,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3929,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 24,
      "latitude": 27.22627873392894,
      "longitude": 88.49330127312217,
      "distance_km": 9.89,
      "in_coverage": true,
      "elevation_m": 347.1,
      "slope_deg": 33.8,
      "aspect_deg": 274.4,
      "curvature": -1.9025,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3449,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 25,
      "latitude": 27.229714062154347,
      "longitude": 88.49421495981228,
      "distance_km": 10.31,
      "in_coverage": true,
      "elevation_m": 348.3,
      "slope_deg": 14.5,
      "aspect_deg": 310.2,
      "curvature": -0.2527,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.13,
      "tier": "GREEN",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 26,
      "latitude": 27.231705908036112,
      "longitude": 88.49664866261253,
      "distance_km": 10.72,
      "in_coverage": true,
      "elevation_m": 356.2,
      "slope_deg": 3.6,
      "aspect_deg": 254.9,
      "curvature": -0.2007,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.1169,
      "tier": "GREEN",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 27,
      "latitude": 27.231865155523653,
      "longitude": 88.49251637129335,
      "distance_km": 11.13,
      "in_coverage": true,
      "elevation_m": 355.8,
      "slope_deg": 19.6,
      "aspect_deg": 211.4,
      "curvature": -0.2521,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.2909,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 28,
      "latitude": 27.235112530116336,
      "longitude": 88.49066002745002,
      "distance_km": 11.54,
      "in_coverage": true,
      "elevation_m": 359.6,
      "slope_deg": 31.0,
      "aspect_deg": 248.6,
      "curvature": -1.1237,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3342,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 29,
      "latitude": 27.23819234833423,
      "longitude": 88.48857949394285,
      "distance_km": 11.95,
      "in_coverage": true,
      "elevation_m": 393.1,
      "slope_deg": 26.6,
      "aspect_deg": 208.2,
      "curvature": -0.273,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3386,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 30,
      "latitude": 27.24067062545047,
      "longitude": 88.48558864995053,
      "distance_km": 12.37,
      "in_coverage": true,
      "elevation_m": 380.8,
      "slope_deg": 31.1,
      "aspect_deg": 216.6,
      "curvature": -0.4383,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3493,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Steep Slope",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 31,
      "latitude": 27.241785441068405,
      "longitude": 88.48184687161964,
      "distance_km": 12.78,
      "in_coverage": true,
      "elevation_m": 383.2,
      "slope_deg": 24.6,
      "aspect_deg": 194.8,
      "curvature": -0.0208,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3271,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 32,
      "latitude": 27.243076014589082,
      "longitude": 88.47815062578323,
      "distance_km": 13.19,
      "in_coverage": true,
      "elevation_m": 390.4,
      "slope_deg": 22.5,
      "aspect_deg": 202.3,
      "curvature": 0.2169,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3262,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 33,
      "latitude": 27.24641127083743,
      "longitude": 88.47650792400592,
      "distance_km": 13.6,
      "in_coverage": true,
      "elevation_m": 417.2,
      "slope_deg": 18.5,
      "aspect_deg": 255.6,
      "curvature": -0.1631,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.2775,
      "tier": "YELLOW",
      "is_borderline": true,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 34,
      "latitude": 27.249921798728302,
      "longitude": 88.47554603691195,
      "distance_km": 14.01,
      "in_coverage": true,
      "elevation_m": 436.5,
      "slope_deg": 8.6,
      "aspect_deg": 274.9,
      "curvature": -1.2514,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.1579,
      "tier": "GREEN",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 35,
      "latitude": 27.24756166955628,
      "longitude": 88.47493770643617,
      "distance_km": 14.43,
      "in_coverage": true,
      "elevation_m": 454.9,
      "slope_deg": 29.2,
      "aspect_deg": 92.2,
      "curvature": 0.5882,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3308,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 36,
      "latitude": 27.248971371987054,
      "longitude": 88.47207058479347,
      "distance_km": 14.84,
      "in_coverage": true,
      "elevation_m": 485.1,
      "slope_deg": 42.1,
      "aspect_deg": 231.0,
      "curvature": -0.0152,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3618,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 37,
      "latitude": 27.250674645094175,
      "longitude": 88.4686056455628,
      "distance_km": 15.25,
      "in_coverage": true,
      "elevation_m": 497.6,
      "slope_deg": 26.4,
      "aspect_deg": 170.7,
      "curvature": 0.0849,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3519,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 38,
      "latitude": 27.25082143854362,
      "longitude": 88.46452306777492,
      "distance_km": 15.66,
      "in_coverage": true,
      "elevation_m": 520.8,
      "slope_deg": 42.8,
      "aspect_deg": 172.4,
      "curvature": 0.5094,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3648,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 39,
      "latitude": 27.251342670199794,
      "longitude": 88.46127159030948,
      "distance_km": 16.08,
      "in_coverage": true,
      "elevation_m": 549.0,
      "slope_deg": 35.9,
      "aspect_deg": 210.9,
      "curvature": 0.7829,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3484,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 40,
      "latitude": 27.254533249910846,
      "longitude": 88.46097323196715,
      "distance_km": 16.49,
      "in_coverage": true,
      "elevation_m": 586.1,
      "slope_deg": 27.1,
      "aspect_deg": 306.4,
      "curvature": 0.8356,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3206,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 41,
      "latitude": 27.257637901752638,
      "longitude": 88.46135112876073,
      "distance_km": 16.9,
      "in_coverage": true,
      "elevation_m": 594.6,
      "slope_deg": 33.9,
      "aspect_deg": 296.2,
      "curvature": 0.6917,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3607,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 42,
      "latitude": 27.259034786024454,
      "longitude": 88.45941315343909,
      "distance_km": 17.31,
      "in_coverage": true,
      "elevation_m": 606.6,
      "slope_deg": 43.8,
      "aspect_deg": 170.2,
      "curvature": 0.3967,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3804,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 43,
      "latitude": 27.260022450015953,
      "longitude": 88.4558078548919,
      "distance_km": 17.72,
      "in_coverage": true,
      "elevation_m": 631.3,
      "slope_deg": 35.2,
      "aspect_deg": 215.1,
      "curvature": -0.5306,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3869,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 44,
      "latitude": 27.26166064427135,
      "longitude": 88.45223773304485,
      "distance_km": 18.14,
      "in_coverage": true,
      "elevation_m": 646.7,
      "slope_deg": 25.8,
      "aspect_deg": 210.4,
      "curvature": 0.1298,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3227,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 45,
      "latitude": 27.262577722765343,
      "longitude": 88.44857609914969,
      "distance_km": 18.55,
      "in_coverage": true,
      "elevation_m": 653.2,
      "slope_deg": 34.4,
      "aspect_deg": 207.7,
      "curvature": 0.3758,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3575,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 46,
      "latitude": 27.265692457726008,
      "longitude": 88.44653512318646,
      "distance_km": 18.96,
      "in_coverage": true,
      "elevation_m": 685.9,
      "slope_deg": 24.3,
      "aspect_deg": 220.7,
      "curvature": 0.0011,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3239,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 47,
      "latitude": 27.268349789364006,
      "longitude": 88.44504745204661,
      "distance_km": 19.37,
      "in_coverage": true,
      "elevation_m": 711.4,
      "slope_deg": 32.2,
      "aspect_deg": 289.4,
      "curvature": 0.5971,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3585,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 48,
      "latitude": 27.2717123265869,
      "longitude": 88.44581292324256,
      "distance_km": 19.79,
      "in_coverage": true,
      "elevation_m": 738.4,
      "slope_deg": 36.4,
      "aspect_deg": 265.7,
      "curvature": 0.3958,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3611,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 49,
      "latitude": 27.27529053876713,
      "longitude": 88.4458079772791,
      "distance_km": 20.2,
      "in_coverage": true,
      "elevation_m": 714.5,
      "slope_deg": 24.8,
      "aspect_deg": 286.3,
      "curvature": 0.3531,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3251,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 50,
      "latitude": 27.278512573356128,
      "longitude": 88.44731926361591,
      "distance_km": 20.61,
      "in_coverage": true,
      "elevation_m": 695.2,
      "slope_deg": 26.8,
      "aspect_deg": 297.3,
      "curvature": -0.5914,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3242,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 51,
      "latitude": 27.28195914904656,
      "longitude": 88.4482366014224,
      "distance_km": 21.02,
      "in_coverage": true,
      "elevation_m": 681.8,
      "slope_deg": 29.3,
      "aspect_deg": 276.2,
      "curvature": -0.1566,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3547,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 52,
      "latitude": 27.285036090147745,
      "longitude": 88.4498814138707,
      "distance_km": 21.43,
      "in_coverage": true,
      "elevation_m": 687.2,
      "slope_deg": 31.5,
      "aspect_deg": 267.6,
      "curvature": -1.2143,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3585,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Steep Slope",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 53,
      "latitude": 27.28859433381464,
      "longitude": 88.44902375363019,
      "distance_km": 21.85,
      "in_coverage": true,
      "elevation_m": 667.7,
      "slope_deg": 28.4,
      "aspect_deg": 250.3,
      "curvature": -0.2017,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3488,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 54,
      "latitude": 27.292165169202843,
      "longitude": 88.44880446693342,
      "distance_km": 22.26,
      "in_coverage": true,
      "elevation_m": 688.7,
      "slope_deg": 21.6,
      "aspect_deg": 281.0,
      "curvature": -0.1989,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.2548,
      "tier": "YELLOW",
      "is_borderline": true,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 55,
      "latitude": 27.295428749985412,
      "longitude": 88.4490581723723,
      "distance_km": 22.67,
      "in_coverage": true,
      "elevation_m": 670.1,
      "slope_deg": 31.0,
      "aspect_deg": 238.0,
      "curvature": -0.5255,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3685,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 56,
      "latitude": 27.298930488180687,
      "longitude": 88.44966619331424,
      "distance_km": 23.08,
      "in_coverage": true,
      "elevation_m": 690.5,
      "slope_deg": 22.0,
      "aspect_deg": 313.3,
      "curvature": -0.2676,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.2686,
      "tier": "YELLOW",
      "is_borderline": true,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 57,
      "latitude": 27.302243316034055,
      "longitude": 88.45107629056342,
      "distance_km": 23.5,
      "in_coverage": true,
      "elevation_m": 703.2,
      "slope_deg": 26.7,
      "aspect_deg": 310.3,
      "curvature": 0.3668,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3297,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 58,
      "latitude": 27.30477265811939,
      "longitude": 88.45404030434828,
      "distance_km": 23.91,
      "in_coverage": true,
      "elevation_m": 714.6,
      "slope_deg": 35.1,
      "aspect_deg": 332.1,
      "curvature": 0.9583,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3554,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 59,
      "latitude": 27.307527080771003,
      "longitude": 88.45623891771184,
      "distance_km": 24.32,
      "in_coverage": true,
      "elevation_m": 726.8,
      "slope_deg": 45.4,
      "aspect_deg": 306.9,
      "curvature": -0.9882,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.4009,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 60,
      "latitude": 27.31056630617954,
      "longitude": 88.45821598033811,
      "distance_km": 24.73,
      "in_coverage": true,
      "elevation_m": 698.4,
      "slope_deg": 32.2,
      "aspect_deg": 308.7,
      "curvature": -0.0659,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3699,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 61,
      "latitude": 27.31285750570862,
      "longitude": 88.46057576216482,
      "distance_km": 25.14,
      "in_coverage": true,
      "elevation_m": 710.6,
      "slope_deg": 31.1,
      "aspect_deg": 324.0,
      "curvature": 0.0341,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3407,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Steep Slope",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 62,
      "latitude": 27.31523597622985,
      "longitude": 88.46354574429049,
      "distance_km": 25.56,
      "in_coverage": true,
      "elevation_m": 726.7,
      "slope_deg": 35.3,
      "aspect_deg": 308.8,
      "curvature": 1.038,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3669,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 63,
      "latitude": 27.316972457615332,
      "longitude": 88.46706741600501,
      "distance_km": 25.97,
      "in_coverage": true,
      "elevation_m": 742.2,
      "slope_deg": 50.9,
      "aspect_deg": 337.7,
      "curvature": 0.9423,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.418,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 64,
      "latitude": 27.31802153049338,
      "longitude": 88.4705033606183,
      "distance_km": 26.38,
      "in_coverage": true,
      "elevation_m": 749.2,
      "slope_deg": 42.6,
      "aspect_deg": 319.9,
      "curvature": -0.691,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.4004,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 65,
      "latitude": 27.31838523162843,
      "longitude": 88.4743134632197,
      "distance_km": 26.79,
      "in_coverage": true,
      "elevation_m": 772.9,
      "slope_deg": 42.7,
      "aspect_deg": 353.3,
      "curvature": -1.8507,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.4024,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 66,
      "latitude": 27.319860402453912,
      "longitude": 88.47800459232202,
      "distance_km": 27.21,
      "in_coverage": true,
      "elevation_m": 797.3,
      "slope_deg": 42.3,
      "aspect_deg": 331.4,
      "curvature": -0.1613,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.4242,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 67,
      "latitude": 27.32245969461755,
      "longitude": 88.4805149843745,
      "distance_km": 27.62,
      "in_coverage": true,
      "elevation_m": 747.0,
      "slope_deg": 44.9,
      "aspect_deg": 316.2,
      "curvature": -2.4197,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.4352,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 68,
      "latitude": 27.3242409384504,
      "longitude": 88.4837430096111,
      "distance_km": 28.03,
      "in_coverage": true,
      "elevation_m": 782.6,
      "slope_deg": 22.3,
      "aspect_deg": 324.2,
      "curvature": -0.3384,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.2729,
      "tier": "YELLOW",
      "is_borderline": true,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 69,
      "latitude": 27.32513593743702,
      "longitude": 88.48748728912268,
      "distance_km": 28.44,
      "in_coverage": true,
      "elevation_m": 801.4,
      "slope_deg": 18.3,
      "aspect_deg": 3.0,
      "curvature": 0.6211,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.2883,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 70,
      "latitude": 27.32540639099918,
      "longitude": 88.49108361189347,
      "distance_km": 28.85,
      "in_coverage": true,
      "elevation_m": 811.9,
      "slope_deg": 25.9,
      "aspect_deg": 31.0,
      "curvature": 0.34,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3306,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 71,
      "latitude": 27.324635027267018,
      "longitude": 88.49459113847813,
      "distance_km": 29.27,
      "in_coverage": true,
      "elevation_m": 828.3,
      "slope_deg": 29.5,
      "aspect_deg": 19.0,
      "curvature": -0.8937,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3686,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 72,
      "latitude": 27.326949875585612,
      "longitude": 88.49338259120749,
      "distance_km": 29.68,
      "in_coverage": true,
      "elevation_m": 831.2,
      "slope_deg": 47.2,
      "aspect_deg": 201.8,
      "curvature": 1.3819,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3689,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 73,
      "latitude": 27.329531259179472,
      "longitude": 88.49163190000549,
      "distance_km": 30.09,
      "in_coverage": true,
      "elevation_m": 845.4,
      "slope_deg": 25.9,
      "aspect_deg": 285.9,
      "curvature": 0.1909,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3255,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 74,
      "latitude": 27.332725797866136,
      "longitude": 88.49115352530964,
      "distance_km": 30.5,
      "in_coverage": true,
      "elevation_m": 867.9,
      "slope_deg": 20.9,
      "aspect_deg": 248.2,
      "curvature": 0.0345,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.2632,
      "tier": "YELLOW",
      "is_borderline": true,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 75,
      "latitude": 27.336068687617068,
      "longitude": 88.49084143220371,
      "distance_km": 30.92,
      "in_coverage": true,
      "elevation_m": 864.4,
      "slope_deg": 21.5,
      "aspect_deg": 272.1,
      "curvature": 0.3059,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.275,
      "tier": "YELLOW",
      "is_borderline": true,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 76,
      "latitude": 27.3391977056712,
      "longitude": 88.49276216453283,
      "distance_km": 31.33,
      "in_coverage": true,
      "elevation_m": 878.4,
      "slope_deg": 19.4,
      "aspect_deg": 283.7,
      "curvature": 0.1379,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.2749,
      "tier": "YELLOW",
      "is_borderline": true,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 77,
      "latitude": 27.34107385091509,
      "longitude": 88.4920803763882,
      "distance_km": 31.74,
      "in_coverage": true,
      "elevation_m": 879.5,
      "slope_deg": 44.8,
      "aspect_deg": 205.3,
      "curvature": -0.7554,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.383,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 78,
      "latitude": 27.342729968838952,
      "longitude": 88.48901236203066,
      "distance_km": 32.15,
      "in_coverage": true,
      "elevation_m": 887.0,
      "slope_deg": 18.0,
      "aspect_deg": 198.4,
      "curvature": 0.5606,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.2863,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 79,
      "latitude": 27.34539000098829,
      "longitude": 88.48675425509903,
      "distance_km": 32.56,
      "in_coverage": true,
      "elevation_m": 885.0,
      "slope_deg": 13.9,
      "aspect_deg": 274.0,
      "curvature": -0.0558,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.1201,
      "tier": "GREEN",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 80,
      "latitude": 27.348647255504122,
      "longitude": 88.4859294479072,
      "distance_km": 32.98,
      "in_coverage": true,
      "elevation_m": 889.8,
      "slope_deg": 19.4,
      "aspect_deg": 272.1,
      "curvature": -0.4602,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.2842,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 81,
      "latitude": 27.35178489750177,
      "longitude": 88.48452920372078,
      "distance_km": 33.39,
      "in_coverage": true,
      "elevation_m": 860.3,
      "slope_deg": 24.6,
      "aspect_deg": 267.8,
      "curvature": -0.0676,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3201,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 82,
      "latitude": 27.355404083844146,
      "longitude": 88.48418377094191,
      "distance_km": 33.8,
      "in_coverage": true,
      "elevation_m": 851.1,
      "slope_deg": 27.9,
      "aspect_deg": 263.6,
      "curvature": -0.01,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3266,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 83,
      "latitude": 27.359008293825504,
      "longitude": 88.48388285679272,
      "distance_km": 34.21,
      "in_coverage": true,
      "elevation_m": 843.0,
      "slope_deg": 51.1,
      "aspect_deg": 269.5,
      "curvature": -1.6206,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3854,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 84,
      "latitude": 27.36252190883801,
      "longitude": 88.4845195876158,
      "distance_km": 34.62,
      "in_coverage": true,
      "elevation_m": 809.8,
      "slope_deg": 34.9,
      "aspect_deg": 298.9,
      "curvature": -0.1837,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3606,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 85,
      "latitude": 27.366106719799102,
      "longitude": 88.48537833069376,
      "distance_km": 35.04,
      "in_coverage": true,
      "elevation_m": 812.2,
      "slope_deg": 33.2,
      "aspect_deg": 271.5,
      "curvature": -0.2069,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3435,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 86,
      "latitude": 27.369751390024412,
      "longitude": 88.48589853091916,
      "distance_km": 35.45,
      "in_coverage": true,
      "elevation_m": 815.2,
      "slope_deg": 38.2,
      "aspect_deg": 269.0,
      "curvature": -0.2943,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.4074,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 87,
      "latitude": 27.37297782564735,
      "longitude": 88.48765776251024,
      "distance_km": 35.86,
      "in_coverage": true,
      "elevation_m": 825.6,
      "slope_deg": 42.8,
      "aspect_deg": 287.4,
      "curvature": -0.1901,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3796,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 88,
      "latitude": 27.37547491350924,
      "longitude": 88.49034108027853,
      "distance_km": 36.27,
      "in_coverage": true,
      "elevation_m": 826.7,
      "slope_deg": 27.6,
      "aspect_deg": 331.1,
      "curvature": 0.0106,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3321,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 89,
      "latitude": 27.37667294876068,
      "longitude": 88.49387451941263,
      "distance_km": 36.69,
      "in_coverage": true,
      "elevation_m": 840.2,
      "slope_deg": 25.1,
      "aspect_deg": 338.3,
      "curvature": 0.0926,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.2974,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 90,
      "latitude": 27.377913248941628,
      "longitude": 88.49735708181662,
      "distance_km": 37.1,
      "in_coverage": true,
      "elevation_m": 840.2,
      "slope_deg": 26.7,
      "aspect_deg": 314.9,
      "curvature": -0.0025,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3215,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 91,
      "latitude": 27.380070622125455,
      "longitude": 88.50044912400236,
      "distance_km": 37.51,
      "in_coverage": true,
      "elevation_m": 832.6,
      "slope_deg": 35.9,
      "aspect_deg": 321.9,
      "curvature": -0.5102,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3706,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 92,
      "latitude": 27.382161024767356,
      "longitude": 88.50320732715691,
      "distance_km": 37.92,
      "in_coverage": true,
      "elevation_m": 821.0,
      "slope_deg": 35.5,
      "aspect_deg": 333.4,
      "curvature": 0.7433,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3732,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 93,
      "latitude": 27.384586147481635,
      "longitude": 88.50619283287787,
      "distance_km": 38.33,
      "in_coverage": true,
      "elevation_m": 769.8,
      "slope_deg": 27.3,
      "aspect_deg": 345.5,
      "curvature": 0.2075,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3329,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 94,
      "latitude": 27.38631677456979,
      "longitude": 88.5097670711092,
      "distance_km": 38.75,
      "in_coverage": true,
      "elevation_m": 756.8,
      "slope_deg": 36.8,
      "aspect_deg": 341.7,
      "curvature": -0.1499,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3829,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 95,
      "latitude": 27.38903732296108,
      "longitude": 88.51203408399104,
      "distance_km": 39.16,
      "in_coverage": true,
      "elevation_m": 714.8,
      "slope_deg": 27.5,
      "aspect_deg": 324.7,
      "curvature": 1.1631,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3167,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 96,
      "latitude": 27.39139922658593,
      "longitude": 88.51410501641065,
      "distance_km": 39.57,
      "in_coverage": true,
      "elevation_m": 700.7,
      "slope_deg": 33.1,
      "aspect_deg": 296.4,
      "curvature": 0.0024,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3332,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 97,
      "latitude": 27.39472312288833,
      "longitude": 88.51588974803502,
      "distance_km": 39.98,
      "in_coverage": true,
      "elevation_m": 655.2,
      "slope_deg": 31.5,
      "aspect_deg": 291.4,
      "curvature": -0.2658,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3506,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 98,
      "latitude": 27.397843700293105,
      "longitude": 88.51794481453531,
      "distance_km": 40.4,
      "in_coverage": true,
      "elevation_m": 646.1,
      "slope_deg": 36.9,
      "aspect_deg": 311.8,
      "curvature": 0.368,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3935,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 99,
      "latitude": 27.400901168460685,
      "longitude": 88.52008391905414,
      "distance_km": 40.81,
      "in_coverage": true,
      "elevation_m": 602.6,
      "slope_deg": 31.8,
      "aspect_deg": 300.6,
      "curvature": -0.5963,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3682,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 100,
      "latitude": 27.403715416445795,
      "longitude": 88.52061673539984,
      "distance_km": 41.22,
      "in_coverage": true,
      "elevation_m": 611.1,
      "slope_deg": 25.5,
      "aspect_deg": 161.7,
      "curvature": -0.1187,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.371,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 101,
      "latitude": 27.404944627194094,
      "longitude": 88.52061091155991,
      "distance_km": 41.63,
      "in_coverage": true,
      "elevation_m": 629.5,
      "slope_deg": 14.7,
      "aspect_deg": 281.0,
      "curvature": -1.0621,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.141,
      "tier": "GREEN",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 102,
      "latitude": 27.407847700401618,
      "longitude": 88.51872785285006,
      "distance_km": 42.04,
      "in_coverage": true,
      "elevation_m": 617.2,
      "slope_deg": 25.0,
      "aspect_deg": 255.4,
      "curvature": -0.1003,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3249,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 103,
      "latitude": 27.411025967225456,
      "longitude": 88.51678931291168,
      "distance_km": 42.46,
      "in_coverage": true,
      "elevation_m": 608.0,
      "slope_deg": 51.8,
      "aspect_deg": 248.1,
      "curvature": -1.8462,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3909,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 104,
      "latitude": 27.4144297576998,
      "longitude": 88.5152755848356,
      "distance_km": 42.87,
      "in_coverage": true,
      "elevation_m": 635.1,
      "slope_deg": 46.8,
      "aspect_deg": 252.2,
      "curvature": 0.4083,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3738,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 105,
      "latitude": 27.41801772597614,
      "longitude": 88.5156432099562,
      "distance_km": 43.28,
      "in_coverage": true,
      "elevation_m": 692.3,
      "slope_deg": 58.6,
      "aspect_deg": 267.2,
      "curvature": 0.1372,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3833,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 106,
      "latitude": 27.42149702516033,
      "longitude": 88.51554145554876,
      "distance_km": 43.69,
      "in_coverage": true,
      "elevation_m": 637.4,
      "slope_deg": 47.9,
      "aspect_deg": 260.4,
      "curvature": -2.3176,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.4141,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 107,
      "latitude": 27.425009211369964,
      "longitude": 88.51460456014415,
      "distance_km": 44.11,
      "in_coverage": true,
      "elevation_m": 675.8,
      "slope_deg": 31.2,
      "aspect_deg": 239.4,
      "curvature": 0.3736,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3553,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Steep Slope",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 108,
      "latitude": 27.42842859975079,
      "longitude": 88.51447482382099,
      "distance_km": 44.52,
      "in_coverage": true,
      "elevation_m": 688.3,
      "slope_deg": 29.5,
      "aspect_deg": 319.4,
      "curvature": -0.3723,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3594,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 109,
      "latitude": 27.43158875332565,
      "longitude": 88.51480023428346,
      "distance_km": 44.93,
      "in_coverage": true,
      "elevation_m": 728.3,
      "slope_deg": 49.4,
      "aspect_deg": 249.5,
      "curvature": 0.4718,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.383,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 110,
      "latitude": 27.43514541736175,
      "longitude": 88.5148688696261,
      "distance_km": 45.34,
      "in_coverage": true,
      "elevation_m": 766.9,
      "slope_deg": 45.1,
      "aspect_deg": 292.3,
      "curvature": 1.0716,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.4043,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 111,
      "latitude": 27.438454730050967,
      "longitude": 88.51431621168075,
      "distance_km": 45.75,
      "in_coverage": true,
      "elevation_m": 766.7,
      "slope_deg": 25.5,
      "aspect_deg": 252.2,
      "curvature": 0.5951,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3191,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Convex/Concave Curvature",
        "Heavy 24h Rain",
        "Steep Slope"
      ]
    },
    {
      "index": 112,
      "latitude": 27.441482695701307,
      "longitude": 88.51365865122467,
      "distance_km": 46.17,
      "in_coverage": true,
      "elevation_m": 800.3,
      "slope_deg": 40.5,
      "aspect_deg": 301.9,
      "curvature": 1.8999,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3789,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 113,
      "latitude": 27.444003455719713,
      "longitude": 88.51604403094348,
      "distance_km": 46.58,
      "in_coverage": true,
      "elevation_m": 825.2,
      "slope_deg": 35.8,
      "aspect_deg": 306.6,
      "curvature": 0.3136,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.364,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 114,
      "latitude": 27.44681617972988,
      "longitude": 88.51860564570973,
      "distance_km": 46.99,
      "in_coverage": true,
      "elevation_m": 843.1,
      "slope_deg": 37.1,
      "aspect_deg": 314.9,
      "curvature": -1.1803,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3972,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 115,
      "latitude": 27.449569751495883,
      "longitude": 88.51852144244103,
      "distance_km": 47.4,
      "in_coverage": true,
      "elevation_m": 855.3,
      "slope_deg": 41.8,
      "aspect_deg": 205.9,
      "curvature": -0.0765,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": 0.3893,
      "tier": "YELLOW",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "From terrain data (DEM)",
        "slope_deg": "From terrain data (DEM)",
        "aspect_deg": "From terrain data (DEM)",
        "curvature": "From terrain data (DEM)",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      },
      "top_factors": [
        "Steep Slope",
        "Convex/Concave Curvature",
        "Heavy 24h Rain"
      ]
    },
    {
      "index": 116,
      "latitude": 27.452257777680053,
      "longitude": 88.52058021014476,
      "distance_km": 47.82,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 117,
      "latitude": 27.455407587047432,
      "longitude": 88.52206629556112,
      "distance_km": 48.23,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 118,
      "latitude": 27.457534448873027,
      "longitude": 88.51979818099313,
      "distance_km": 48.64,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 119,
      "latitude": 27.45897701910784,
      "longitude": 88.52293549454339,
      "distance_km": 49.05,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 120,
      "latitude": 27.46254392444382,
      "longitude": 88.52338046764629,
      "distance_km": 49.46,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 121,
      "latitude": 27.46543228555385,
      "longitude": 88.5252405797566,
      "distance_km": 49.88,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 122,
      "latitude": 27.468592407643616,
      "longitude": 88.52480624151204,
      "distance_km": 50.29,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 123,
      "latitude": 27.470918139394577,
      "longitude": 88.52730218951184,
      "distance_km": 50.7,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 124,
      "latitude": 27.474354730127164,
      "longitude": 88.52678062212759,
      "distance_km": 51.11,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 125,
      "latitude": 27.47622160870109,
      "longitude": 88.52781459061895,
      "distance_km": 51.53,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 126,
      "latitude": 27.479005446963722,
      "longitude": 88.52691565762125,
      "distance_km": 51.94,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 127,
      "latitude": 27.48209155675142,
      "longitude": 88.52718059577515,
      "distance_km": 52.35,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 128,
      "latitude": 27.481658232564953,
      "longitude": 88.52779364727331,
      "distance_km": 52.76,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 129,
      "latitude": 27.479438129042887,
      "longitude": 88.52846940243505,
      "distance_km": 53.17,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 130,
      "latitude": 27.482602257127983,
      "longitude": 88.52856077198304,
      "distance_km": 53.59,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 131,
      "latitude": 27.479780055077423,
      "longitude": 88.52897617083288,
      "distance_km": 54.0,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 132,
      "latitude": 27.48218617892671,
      "longitude": 88.5289442746687,
      "distance_km": 54.41,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 133,
      "latitude": 27.480637367450456,
      "longitude": 88.52987732890409,
      "distance_km": 54.82,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 134,
      "latitude": 27.481231375558874,
      "longitude": 88.53017257997729,
      "distance_km": 55.23,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 135,
      "latitude": 27.48229261225722,
      "longitude": 88.53108058626437,
      "distance_km": 55.65,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 136,
      "latitude": 27.482177339634315,
      "longitude": 88.53121004006945,
      "distance_km": 56.06,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 137,
      "latitude": 27.484456055067522,
      "longitude": 88.53295848806773,
      "distance_km": 56.47,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 138,
      "latitude": 27.487448766704397,
      "longitude": 88.53229483991325,
      "distance_km": 56.88,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 139,
      "latitude": 27.4891057079129,
      "longitude": 88.52971650961544,
      "distance_km": 57.3,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 140,
      "latitude": 27.492422653791927,
      "longitude": 88.52849072643154,
      "distance_km": 57.71,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 141,
      "latitude": 27.495604932158248,
      "longitude": 88.52926284130501,
      "distance_km": 58.12,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 142,
      "latitude": 27.49584410980148,
      "longitude": 88.52908644712947,
      "distance_km": 58.53,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 143,
      "latitude": 27.49591670836291,
      "longitude": 88.52860625581978,
      "distance_km": 58.94,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 144,
      "latitude": 27.496076766905542,
      "longitude": 88.52814055600247,
      "distance_km": 59.36,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 145,
      "latitude": 27.493012012039298,
      "longitude": 88.52662652994306,
      "distance_km": 59.77,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 146,
      "latitude": 27.489859966586046,
      "longitude": 88.527570048545,
      "distance_km": 60.18,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 147,
      "latitude": 27.49113420533562,
      "longitude": 88.5266390295649,
      "distance_km": 60.59,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 148,
      "latitude": 27.49403280655741,
      "longitude": 88.52596461825779,
      "distance_km": 61.01,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 149,
      "latitude": 27.49733388288096,
      "longitude": 88.52678186732868,
      "distance_km": 61.42,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 150,
      "latitude": 27.500222287210786,
      "longitude": 88.52858613545607,
      "distance_km": 61.83,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 151,
      "latitude": 27.50355360787208,
      "longitude": 88.52819192483935,
      "distance_km": 62.24,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 152,
      "latitude": 27.507038391685267,
      "longitude": 88.52888555483135,
      "distance_km": 62.65,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 153,
      "latitude": 27.50927180371188,
      "longitude": 88.52936569135443,
      "distance_km": 63.07,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 154,
      "latitude": 27.509732461257553,
      "longitude": 88.52914911245878,
      "distance_km": 63.48,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 155,
      "latitude": 27.509668105751828,
      "longitude": 88.52636543497599,
      "distance_km": 63.89,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 156,
      "latitude": 27.513102921350637,
      "longitude": 88.52769267060589,
      "distance_km": 64.3,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 157,
      "latitude": 27.51626624824358,
      "longitude": 88.5292725979931,
      "distance_km": 64.72,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 158,
      "latitude": 27.519586182799124,
      "longitude": 88.53085052482217,
      "distance_km": 65.13,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 159,
      "latitude": 27.522338271948446,
      "longitude": 88.52831433287585,
      "distance_km": 65.54,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 160,
      "latitude": 27.524295069524772,
      "longitude": 88.52495903258513,
      "distance_km": 65.95,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 161,
      "latitude": 27.525776532497453,
      "longitude": 88.52125080306365,
      "distance_km": 66.36,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 162,
      "latitude": 27.526660504638553,
      "longitude": 88.51864800784647,
      "distance_km": 66.78,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 163,
      "latitude": 27.527119743481872,
      "longitude": 88.51510849263168,
      "distance_km": 67.19,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 164,
      "latitude": 27.5294629519243,
      "longitude": 88.51274231394133,
      "distance_km": 67.6,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 165,
      "latitude": 27.53271309181144,
      "longitude": 88.51235552383591,
      "distance_km": 68.01,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 166,
      "latitude": 27.532822023997767,
      "longitude": 88.50837799680275,
      "distance_km": 68.43,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 167,
      "latitude": 27.53450960943388,
      "longitude": 88.50491539143147,
      "distance_km": 68.84,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 168,
      "latitude": 27.535412936292364,
      "longitude": 88.50090365486045,
      "distance_km": 69.25,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 169,
      "latitude": 27.53524033747757,
      "longitude": 88.49837000094942,
      "distance_km": 69.66,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 170,
      "latitude": 27.536193470642203,
      "longitude": 88.49454755002927,
      "distance_km": 70.07,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 171,
      "latitude": 27.536225954231732,
      "longitude": 88.49323552283289,
      "distance_km": 70.49,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 172,
      "latitude": 27.53698001930038,
      "longitude": 88.49062924371368,
      "distance_km": 70.9,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 173,
      "latitude": 27.538531191573263,
      "longitude": 88.48824765848077,
      "distance_km": 71.31,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 174,
      "latitude": 27.539842585328703,
      "longitude": 88.48719297947459,
      "distance_km": 71.72,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 175,
      "latitude": 27.541099635693747,
      "longitude": 88.48484521940469,
      "distance_km": 72.14,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 176,
      "latitude": 27.538854660253676,
      "longitude": 88.48381631665862,
      "distance_km": 72.55,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 177,
      "latitude": 27.540105969102605,
      "longitude": 88.48056668078635,
      "distance_km": 72.96,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 178,
      "latitude": 27.542235666030987,
      "longitude": 88.47732815117338,
      "distance_km": 73.37,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 179,
      "latitude": 27.54401549220751,
      "longitude": 88.47606165957738,
      "distance_km": 73.78,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 180,
      "latitude": 27.542608886871037,
      "longitude": 88.4797195515052,
      "distance_km": 74.2,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 181,
      "latitude": 27.542827828549004,
      "longitude": 88.48075591083459,
      "distance_km": 74.61,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 182,
      "latitude": 27.54498799617417,
      "longitude": 88.47778015122599,
      "distance_km": 75.02,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 183,
      "latitude": 27.548217666477647,
      "longitude": 88.47669027239968,
      "distance_km": 75.43,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 184,
      "latitude": 27.54906645576911,
      "longitude": 88.47327474472925,
      "distance_km": 75.84,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 185,
      "latitude": 27.55021558701554,
      "longitude": 88.46972793175068,
      "distance_km": 76.26,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 186,
      "latitude": 27.55096341819123,
      "longitude": 88.47052144693735,
      "distance_km": 76.67,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 187,
      "latitude": 27.55043419215469,
      "longitude": 88.47274372457807,
      "distance_km": 77.08,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 188,
      "latitude": 27.553763248062527,
      "longitude": 88.4715266713359,
      "distance_km": 77.49,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 189,
      "latitude": 27.552235234425655,
      "longitude": 88.47394375485193,
      "distance_km": 77.91,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 190,
      "latitude": 27.552473715398147,
      "longitude": 88.4749986212073,
      "distance_km": 78.32,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 191,
      "latitude": 27.55272486127795,
      "longitude": 88.47851682057566,
      "distance_km": 78.73,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 192,
      "latitude": 27.551138579249656,
      "longitude": 88.48204654197816,
      "distance_km": 79.14,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 193,
      "latitude": 27.54928938782466,
      "longitude": 88.48534299814585,
      "distance_km": 79.55,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 194,
      "latitude": 27.548324113471743,
      "longitude": 88.48840378817219,
      "distance_km": 79.97,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 195,
      "latitude": 27.549054360089325,
      "longitude": 88.48944360709459,
      "distance_km": 80.38,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 196,
      "latitude": 27.549324531193072,
      "longitude": 88.49060532202085,
      "distance_km": 80.79,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 197,
      "latitude": 27.550280763516984,
      "longitude": 88.48973438331527,
      "distance_km": 81.2,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 198,
      "latitude": 27.55240256804923,
      "longitude": 88.49007593978384,
      "distance_km": 81.62,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    },
    {
      "index": 199,
      "latitude": 27.555294,
      "longitude": 88.487572,
      "distance_km": 82.03,
      "in_coverage": false,
      "elevation_m": null,
      "slope_deg": null,
      "aspect_deg": null,
      "curvature": null,
      "dist_to_road_m": 15.0,
      "dist_to_river_m": 150.0,
      "ndvi": 0.415,
      "rain_24h_mm": 40.0,
      "rain_3d_mm": 85.0,
      "rain_7d_mm": 140.0,
      "soil_moisture_pct": 58.0,
      "score": null,
      "tier": "NO_COVERAGE",
      "is_borderline": false,
      "reliability_badges": {
        "elevation_m": "Outside coverage",
        "slope_deg": "Outside coverage",
        "aspect_deg": "Outside coverage",
        "curvature": "Outside coverage",
        "dist_to_road_m": "Approximate (hand-estimated)",
        "dist_to_river_m": "Approximate (hand-estimated)",
        "ndvi": "Default value (median)",
        "rain_24h_mm": "Simulated scenario",
        "soil_moisture_pct": "Simulated scenario"
      }
    }
  ],
  "raw_geojson": {
    "coordinates": [
      [
        88.528489,
        27.176691
      ],
      [
        88.528382,
        27.176746
      ],
      [
        88.528209,
        27.176852
      ],
      [
        88.527996,
        27.176998
      ],
      [
        88.527819,
        27.177133
      ],
      [
        88.527783,
        27.177157
      ],
      [
        88.52769,
        27.1772
      ],
      [
        88.527607,
        27.177225
      ],
      [
        88.527515,
        27.177241
      ],
      [
        88.527344,
        27.177258
      ],
      [
        88.52719,
        27.177281
      ],
      [
        88.527073,
        27.177307
      ],
      [
        88.526919,
        27.177356
      ],
      [
        88.526834,
        27.177378
      ],
      [
        88.526742,
        27.177394
      ],
      [
        88.526646,
        27.177406
      ],
      [
        88.526549,
        27.177412
      ],
      [
        88.526452,
        27.177413
      ],
      [
        88.526144,
        27.177393
      ],
      [
        88.526058,
        27.177393
      ],
      [
        88.525929,
        27.177398
      ],
      [
        88.525805,
        27.17741
      ],
      [
        88.525549,
        27.177446
      ],
      [
        88.525191,
        27.177487
      ],
      [
        88.524905,
        27.177513
      ],
      [
        88.524669,
        27.177528
      ],
      [
        88.524553,
        27.177527
      ],
      [
        88.524401,
        27.177518
      ],
      [
        88.523496,
        27.177441
      ],
      [
        88.523134,
        27.177423
      ],
      [
        88.52268,
        27.177405
      ],
      [
        88.522347,
        27.177397
      ],
      [
        88.52217,
        27.177398
      ],
      [
        88.521985,
        27.177406
      ],
      [
        88.521803,
        27.177421
      ],
      [
        88.521672,
        27.177442
      ],
      [
        88.521603,
        27.177457
      ],
      [
        88.521411,
        27.177419
      ],
      [
        88.521241,
        27.177592
      ],
      [
        88.52111,
        27.177655
      ],
      [
        88.520931,
        27.177762
      ],
      [
        88.52085,
        27.177817
      ],
      [
        88.520706,
        27.177925
      ],
      [
        88.520586,
        27.178028
      ],
      [
        88.520491,
        27.178119
      ],
      [
        88.520421,
        27.178193
      ],
      [
        88.520343,
        27.178285
      ],
      [
        88.520315,
        27.178336
      ],
      [
        88.520302,
        27.178398
      ],
      [
        88.520301,
        27.178458
      ],
      [
        88.520315,
        27.178607
      ],
      [
        88.520319,
        27.178686
      ],
      [
        88.52031,
        27.178813
      ],
      [
        88.520289,
        27.178898
      ],
      [
        88.520253,
        27.178977
      ],
      [
        88.520198,
        27.17905
      ],
      [
        88.519821,
        27.179502
      ],
      [
        88.519753,
        27.179591
      ],
      [
        88.519623,
        27.179779
      ],
      [
        88.519542,
        27.179879
      ],
      [
        88.519446,
        27.179987
      ],
      [
        88.519342,
        27.180092
      ],
      [
        88.519289,
        27.180141
      ],
      [
        88.519184,
        27.180225
      ],
      [
        88.519133,
        27.180257
      ],
      [
        88.519085,
        27.180282
      ],
      [
        88.518948,
        27.180343
      ],
      [
        88.518818,
        27.18041
      ],
      [
        88.518735,
        27.180463
      ],
      [
        88.518655,
        27.180524
      ],
      [
        88.51858,
        27.180597
      ],
      [
        88.518468,
        27.180738
      ],
      [
        88.518357,
        27.180863
      ],
      [
        88.518218,
        27.181005
      ],
      [
        88.518065,
        27.181152
      ],
      [
        88.517841,
        27.181353
      ],
      [
        88.517717,
        27.181455
      ],
      [
        88.517629,
        27.181518
      ],
      [
        88.517559,
        27.181551
      ],
      [
        88.517521,
        27.181563
      ],
      [
        88.517438,
        27.181578
      ],
      [
        88.517395,
        27.181582
      ],
      [
        88.517306,
        27.181583
      ],
      [
        88.517172,
        27.18157
      ],
      [
        88.517134,
        27.181562
      ],
      [
        88.517004,
        27.181533
      ],
      [
        88.516963,
        27.18153
      ],
      [
        88.516923,
        27.181531
      ],
      [
        88.516843,
        27.181545
      ],
      [
        88.516768,
        27.18157
      ],
      [
        88.516668,
        27.181619
      ],
      [
        88.516552,
        27.181693
      ],
      [
        88.516527,
        27.181705
      ],
      [
        88.516462,
        27.181728
      ],
      [
        88.516423,
        27.181738
      ],
      [
        88.516333,
        27.181752
      ],
      [
        88.516229,
        27.181758
      ],
      [
        88.516115,
        27.181752
      ],
      [
        88.516054,
        27.181743
      ],
      [
        88.515928,
        27.181714
      ],
      [
        88.515857,
        27.18169
      ],
      [
        88.515581,
        27.181577
      ],
      [
        88.515151,
        27.181378
      ],
      [
        88.514362,
        27.18097
      ],
      [
        88.514087,
        27.180747
      ],
      [
        88.514013,
        27.180704
      ],
      [
        88.513733,
        27.180615
      ],
      [
        88.513458,
        27.180711
      ],
      [
        88.513203,
        27.1809
      ],
      [
        88.512817,
        27.181112
      ],
      [
        88.512344,
        27.181259
      ],
      [
        88.511805,
        27.181302
      ],
      [
        88.511315,
        27.181224
      ],
      [
        88.511247,
        27.181181
      ],
      [
        88.510866,
        27.18097
      ],
      [
        88.510662,
        27.180811
      ],
      [
        88.510607,
        27.180745
      ],
      [
        88.510546,
        27.180694
      ],
      [
        88.510303,
        27.180512
      ],
      [
        88.509743,
        27.180148
      ],
      [
        88.509646,
        27.180048
      ],
      [
        88.50955,
        27.179993
      ],
      [
        88.509452,
        27.179949
      ],
      [
        88.509337,
        27.179942
      ],
      [
        88.509265,
        27.179972
      ],
      [
        88.509191,
        27.180032
      ],
      [
        88.509162,
        27.180137
      ],
      [
        88.509179,
        27.180329
      ],
      [
        88.509135,
        27.180426
      ],
      [
        88.50903,
        27.180526
      ],
      [
        88.50891,
        27.180598
      ],
      [
        88.508779,
        27.180862
      ],
      [
        88.508594,
        27.181185
      ],
      [
        88.508356,
        27.181395
      ],
      [
        88.508144,
        27.181596
      ],
      [
        88.508014,
        27.18176
      ],
      [
        88.507989,
        27.182231
      ],
      [
        88.507802,
        27.182414
      ],
      [
        88.507719,
        27.182553
      ],
      [
        88.507743,
        27.182925
      ],
      [
        88.507813,
        27.183135
      ],
      [
        88.507813,
        27.18331
      ],
      [
        88.507725,
        27.183422
      ],
      [
        88.507377,
        27.183468
      ],
      [
        88.507143,
        27.183565
      ],
      [
        88.506389,
        27.183839
      ],
      [
        88.506054,
        27.183933
      ],
      [
        88.505911,
        27.184014
      ],
      [
        88.505709,
        27.184173
      ],
      [
        88.505514,
        27.184338
      ],
      [
        88.505412,
        27.184465
      ],
      [
        88.505324,
        27.184573
      ],
      [
        88.505219,
        27.184765
      ],
      [
        88.505181,
        27.184861
      ],
      [
        88.505179,
        27.184958
      ],
      [
        88.505171,
        27.185096
      ],
      [
        88.505238,
        27.185382
      ],
      [
        88.505347,
        27.185587
      ],
      [
        88.505359,
        27.185608
      ],
      [
        88.505578,
        27.185706
      ],
      [
        88.505655,
        27.185739
      ],
      [
        88.505686,
        27.18587
      ],
      [
        88.505505,
        27.186175
      ],
      [
        88.505419,
        27.18627
      ],
      [
        88.505391,
        27.186285
      ],
      [
        88.505328,
        27.186317
      ],
      [
        88.505061,
        27.186336
      ],
      [
        88.504764,
        27.186312
      ],
      [
        88.504378,
        27.186243
      ],
      [
        88.50428,
        27.18622
      ],
      [
        88.504009,
        27.186106
      ],
      [
        88.503761,
        27.185953
      ],
      [
        88.503516,
        27.185838
      ],
      [
        88.503292,
        27.185822
      ],
      [
        88.503172,
        27.185851
      ],
      [
        88.50308,
        27.185957
      ],
      [
        88.503032,
        27.186119
      ],
      [
        88.503074,
        27.186265
      ],
      [
        88.503395,
        27.186509
      ],
      [
        88.503446,
        27.186548
      ],
      [
        88.503673,
        27.186867
      ],
      [
        88.503738,
        27.186973
      ],
      [
        88.503742,
        27.187026
      ],
      [
        88.503779,
        27.187287
      ],
      [
        88.503724,
        27.187487
      ],
      [
        88.503656,
        27.187674
      ],
      [
        88.503535,
        27.187848
      ],
      [
        88.503307,
        27.188014
      ],
      [
        88.502937,
        27.188203
      ],
      [
        88.502579,
        27.188351
      ],
      [
        88.501541,
        27.188622
      ],
      [
        88.501117,
        27.188604
      ],
      [
        88.500774,
        27.188485
      ],
      [
        88.499736,
        27.187918
      ],
      [
        88.499552,
        27.187757
      ],
      [
        88.499331,
        27.187583
      ],
      [
        88.499175,
        27.187249
      ],
      [
        88.498903,
        27.18639
      ],
      [
        88.498839,
        27.186177
      ],
      [
        88.498785,
        27.186044
      ],
      [
        88.49871,
        27.185935
      ],
      [
        88.498634,
        27.185853
      ],
      [
        88.498508,
        27.185831
      ],
      [
        88.498351,
        27.185828
      ],
      [
        88.49833,
        27.185838
      ],
      [
        88.498119,
        27.185939
      ],
      [
        88.497939,
        27.186062
      ],
      [
        88.497775,
        27.186198
      ],
      [
        88.497771,
        27.186203
      ],
      [
        88.497708,
        27.186396
      ],
      [
        88.497719,
        27.186523
      ],
      [
        88.497726,
        27.186651
      ],
      [
        88.497721,
        27.186739
      ],
      [
        88.497631,
        27.186897
      ],
      [
        88.497633,
        27.186939
      ],
      [
        88.497626,
        27.187051
      ],
      [
        88.497712,
        27.187168
      ],
      [
        88.497761,
        27.187238
      ],
      [
        88.49784,
        27.187395
      ],
      [
        88.497958,
        27.187524
      ],
      [
        88.498105,
        27.187707
      ],
      [
        88.498123,
        27.187738
      ],
      [
        88.498133,
        27.187927
      ],
      [
        88.498149,
        27.188103
      ],
      [
        88.498156,
        27.188303
      ],
      [
        88.498042,
        27.188515
      ],
      [
        88.49801,
        27.188608
      ],
      [
        88.497977,
        27.188681
      ],
      [
        88.49789,
        27.188864
      ],
      [
        88.497819,
        27.189142
      ],
      [
        88.497734,
        27.189288
      ],
      [
        88.497597,
        27.18954
      ],
      [
        88.497411,
        27.189865
      ],
      [
        88.497136,
        27.190322
      ],
      [
        88.496894,
        27.190697
      ],
      [
        88.496696,
        27.190974
      ],
      [
        88.496566,
        27.191185
      ],
      [
        88.496463,
        27.191329
      ],
      [
        88.496389,
        27.191546
      ],
      [
        88.496361,
        27.191591
      ],
      [
        88.496187,
        27.191872
      ],
      [
        88.49601,
        27.192209
      ],
      [
        88.495874,
        27.192354
      ],
      [
        88.49582,
        27.192388
      ],
      [
        88.495417,
        27.192605
      ],
      [
        88.494929,
        27.192827
      ],
      [
        88.494776,
        27.192937
      ],
      [
        88.494728,
        27.192982
      ],
      [
        88.494188,
        27.193334
      ],
      [
        88.49378,
        27.193588
      ],
      [
        88.493524,
        27.193733
      ],
      [
        88.493201,
        27.193938
      ],
      [
        88.492862,
        27.194175
      ],
      [
        88.492496,
        27.194459
      ],
      [
        88.49233,
        27.194698
      ],
      [
        88.492315,
        27.194887
      ],
      [
        88.492402,
        27.195073
      ],
      [
        88.492619,
        27.195226
      ],
      [
        88.492736,
        27.195292
      ],
      [
        88.49275,
        27.195305
      ],
      [
        88.492779,
        27.19535
      ],
      [
        88.492793,
        27.19538
      ],
      [
        88.492819,
        27.19545
      ],
      [
        88.492836,
        27.195532
      ],
      [
        88.492841,
        27.195574
      ],
      [
        88.49284,
        27.195661
      ],
      [
        88.492822,
        27.195744
      ],
      [
        88.492805,
        27.195783
      ],
      [
        88.492784,
        27.19582
      ],
      [
        88.492736,
        27.19589
      ],
      [
        88.49268,
        27.195952
      ],
      [
        88.492619,
        27.196003
      ],
      [
        88.492556,
        27.196038
      ],
      [
        88.492524,
        27.196049
      ],
      [
        88.492493,
        27.196054
      ],
      [
        88.492462,
        27.196054
      ],
      [
        88.492432,
        27.196048
      ],
      [
        88.492403,
        27.196036
      ],
      [
        88.492209,
        27.195919
      ],
      [
        88.492066,
        27.195842
      ],
      [
        88.491972,
        27.195802
      ],
      [
        88.491928,
        27.195789
      ],
      [
        88.491887,
        27.19578
      ],
      [
        88.491849,
        27.195778
      ],
      [
        88.491815,
        27.195783
      ],
      [
        88.491781,
        27.195798
      ],
      [
        88.491742,
        27.195824
      ],
      [
        88.491698,
        27.19586
      ],
      [
        88.491603,
        27.195953
      ],
      [
        88.491503,
        27.196063
      ],
      [
        88.491258,
        27.196353
      ],
      [
        88.491015,
        27.196629
      ],
      [
        88.490807,
        27.196878
      ],
      [
        88.490665,
        27.197056
      ],
      [
        88.490536,
        27.197227
      ],
      [
        88.49048,
        27.197307
      ],
      [
        88.490211,
        27.197713
      ],
      [
        88.490053,
        27.197924
      ],
      [
        88.489867,
        27.198147
      ],
      [
        88.489444,
        27.198674
      ],
      [
        88.489396,
        27.198727
      ],
      [
        88.489227,
        27.198882
      ],
      [
        88.489149,
        27.19897
      ],
      [
        88.489105,
        27.199036
      ],
      [
        88.489087,
        27.199072
      ],
      [
        88.489058,
        27.199148
      ],
      [
        88.489019,
        27.199279
      ],
      [
        88.488913,
        27.199686
      ],
      [
        88.488841,
        27.199903
      ],
      [
        88.488754,
        27.20014
      ],
      [
        88.488665,
        27.200349
      ],
      [
        88.488531,
        27.200597
      ],
      [
        88.488439,
        27.200779
      ],
      [
        88.488388,
        27.200898
      ],
      [
        88.488347,
        27.20103
      ],
      [
        88.488314,
        27.201095
      ],
      [
        88.48827,
        27.201149
      ],
      [
        88.488233,
        27.201178
      ],
      [
        88.488189,
        27.201198
      ],
      [
        88.488089,
        27.201227
      ],
      [
        88.488039,
        27.201245
      ],
      [
        88.487969,
        27.20128
      ],
      [
        88.487928,
        27.201308
      ],
      [
        88.487878,
        27.201361
      ],
      [
        88.487819,
        27.201457
      ],
      [
        88.48777,
        27.20152
      ],
      [
        88.487613,
        27.201669
      ],
      [
        88.487527,
        27.201772
      ],
      [
        88.487439,
        27.201899
      ],
      [
        88.487362,
        27.202038
      ],
      [
        88.487322,
        27.202131
      ],
      [
        88.48727,
        27.202292
      ],
      [
        88.487245,
        27.202357
      ],
      [
        88.487195,
        27.202457
      ],
      [
        88.487148,
        27.202535
      ],
      [
        88.486866,
        27.202946
      ],
      [
        88.486675,
        27.203206
      ],
      [
        88.486542,
        27.203362
      ],
      [
        88.486447,
        27.203457
      ],
      [
        88.486365,
        27.203544
      ],
      [
        88.486278,
        27.203656
      ],
      [
        88.486236,
        27.203718
      ],
      [
        88.486199,
        27.203784
      ],
      [
        88.486168,
        27.203853
      ],
      [
        88.486144,
        27.203923
      ],
      [
        88.48613,
        27.203995
      ],
      [
        88.486128,
        27.204066
      ],
      [
        88.486139,
        27.204137
      ],
      [
        88.486166,
        27.204206
      ],
      [
        88.48621,
        27.204273
      ],
      [
        88.486268,
        27.204343
      ],
      [
        88.486488,
        27.204593
      ],
      [
        88.486824,
        27.204951
      ],
      [
        88.487044,
        27.205176
      ],
      [
        88.487287,
        27.205412
      ],
      [
        88.487474,
        27.205618
      ],
      [
        88.487774,
        27.205908
      ],
      [
        88.487875,
        27.205984
      ],
      [
        88.487968,
        27.206037
      ],
      [
        88.488018,
        27.206058
      ],
      [
        88.488278,
        27.206148
      ],
      [
        88.488421,
        27.206205
      ],
      [
        88.488552,
        27.206268
      ],
      [
        88.488687,
        27.206349
      ],
      [
        88.488752,
        27.206379
      ],
      [
        88.488817,
        27.206402
      ],
      [
        88.488914,
        27.206424
      ],
      [
        88.488976,
        27.206433
      ],
      [
        88.489091,
        27.206441
      ],
      [
        88.489149,
        27.206451
      ],
      [
        88.489234,
        27.206479
      ],
      [
        88.489309,
        27.206519
      ],
      [
        88.489348,
        27.206551
      ],
      [
        88.489376,
        27.206587
      ],
      [
        88.489468,
        27.206807
      ],
      [
        88.489573,
        27.207034
      ],
      [
        88.489652,
        27.207179
      ],
      [
        88.489696,
        27.207241
      ],
      [
        88.489761,
        27.207293
      ],
      [
        88.48993,
        27.207396
      ],
      [
        88.490141,
        27.207511
      ],
      [
        88.490451,
        27.207673
      ],
      [
        88.490567,
        27.207739
      ],
      [
        88.490659,
        27.2078
      ],
      [
        88.490707,
        27.207837
      ],
      [
        88.490803,
        27.207924
      ],
      [
        88.490848,
        27.207974
      ],
      [
        88.49089,
        27.208028
      ],
      [
        88.490928,
        27.208087
      ],
      [
        88.49096,
        27.208151
      ],
      [
        88.490985,
        27.20822
      ],
      [
        88.491002,
        27.208293
      ],
      [
        88.491011,
        27.208372
      ],
      [
        88.49103,
        27.209089
      ],
      [
        88.491043,
        27.20974
      ],
      [
        88.491053,
        27.21026
      ],
      [
        88.491087,
        27.210707
      ],
      [
        88.49111,
        27.211149
      ],
      [
        88.491129,
        27.211475
      ],
      [
        88.491122,
        27.21155
      ],
      [
        88.491136,
        27.212
      ],
      [
        88.491131,
        27.212094
      ],
      [
        88.491133,
        27.212172
      ],
      [
        88.491108,
        27.212562
      ],
      [
        88.491011,
        27.212758
      ],
      [
        88.490768,
        27.213123
      ],
      [
        88.490681,
        27.213368
      ],
      [
        88.490669,
        27.213418
      ],
      [
        88.490596,
        27.213619
      ],
      [
        88.490456,
        27.213749
      ],
      [
        88.490366,
        27.213801
      ],
      [
        88.490211,
        27.213893
      ],
      [
        88.490141,
        27.213943
      ],
      [
        88.490084,
        27.213996
      ],
      [
        88.489903,
        27.214089
      ],
      [
        88.489821,
        27.214285
      ],
      [
        88.489851,
        27.214581
      ],
      [
        88.489917,
        27.214978
      ],
      [
        88.489963,
        27.215265
      ],
      [
        88.489969,
        27.2154
      ],
      [
        88.489983,
        27.215479
      ],
      [
        88.490103,
        27.215704
      ],
      [
        88.490258,
        27.215822
      ],
      [
        88.490366,
        27.215972
      ],
      [
        88.490459,
        27.216202
      ],
      [
        88.490498,
        27.216406
      ],
      [
        88.490521,
        27.216599
      ],
      [
        88.490504,
        27.216762
      ],
      [
        88.490462,
        27.21689
      ],
      [
        88.490397,
        27.217082
      ],
      [
        88.490325,
        27.217247
      ],
      [
        88.490249,
        27.217369
      ],
      [
        88.490186,
        27.217507
      ],
      [
        88.490146,
        27.217632
      ],
      [
        88.490102,
        27.217718
      ],
      [
        88.490093,
        27.217877
      ],
      [
        88.490094,
        27.21801
      ],
      [
        88.490102,
        27.218126
      ],
      [
        88.490113,
        27.218243
      ],
      [
        88.490104,
        27.218373
      ],
      [
        88.490085,
        27.218469
      ],
      [
        88.490057,
        27.218611
      ],
      [
        88.490021,
        27.218825
      ],
      [
        88.490025,
        27.219029
      ],
      [
        88.490032,
        27.219158
      ],
      [
        88.490045,
        27.21929
      ],
      [
        88.490105,
        27.219426
      ],
      [
        88.490195,
        27.219638
      ],
      [
        88.490272,
        27.219742
      ],
      [
        88.490287,
        27.219769
      ],
      [
        88.490333,
        27.219936
      ],
      [
        88.490418,
        27.220141
      ],
      [
        88.490472,
        27.220267
      ],
      [
        88.490556,
        27.220415
      ],
      [
        88.49063,
        27.220574
      ],
      [
        88.490715,
        27.220772
      ],
      [
        88.490778,
        27.220889
      ],
      [
        88.490829,
        27.22107
      ],
      [
        88.490916,
        27.221281
      ],
      [
        88.491043,
        27.221565
      ],
      [
        88.491242,
        27.222106
      ],
      [
        88.491453,
        27.222459
      ],
      [
        88.491535,
        27.222595
      ],
      [
        88.491796,
        27.223011
      ],
      [
        88.491878,
        27.22324
      ],
      [
        88.491821,
        27.223444
      ],
      [
        88.491793,
        27.223586
      ],
      [
        88.491849,
        27.223795
      ],
      [
        88.491942,
        27.223961
      ],
      [
        88.491976,
        27.22401
      ],
      [
        88.492254,
        27.224226
      ],
      [
        88.492385,
        27.224302
      ],
      [
        88.492474,
        27.224454
      ],
      [
        88.492496,
        27.224652
      ],
      [
        88.492621,
        27.22504
      ],
      [
        88.492738,
        27.225161
      ],
      [
        88.492816,
        27.225321
      ],
      [
        88.492944,
        27.225506
      ],
      [
        88.493104,
        27.225641
      ],
      [
        88.493234,
        27.225772
      ],
      [
        88.493312,
        27.225956
      ],
      [
        88.49335,
        27.226094
      ],
      [
        88.493304,
        27.22627
      ],
      [
        88.493235,
        27.226491
      ],
      [
        88.493274,
        27.22672
      ],
      [
        88.493248,
        27.226886
      ],
      [
        88.49324,
        27.226936
      ],
      [
        88.493157,
        27.227107
      ],
      [
        88.493162,
        27.227231
      ],
      [
        88.493279,
        27.227385
      ],
      [
        88.493427,
        27.227516
      ],
      [
        88.493545,
        27.227675
      ],
      [
        88.493518,
        27.227865
      ],
      [
        88.49351,
        27.227905
      ],
      [
        88.493585,
        27.228135
      ],
      [
        88.493611,
        27.228173
      ],
      [
        88.493767,
        27.228419
      ],
      [
        88.49386,
        27.228557
      ],
      [
        88.493914,
        27.228665
      ],
      [
        88.494045,
        27.229008
      ],
      [
        88.494063,
        27.229156
      ],
      [
        88.494095,
        27.229519
      ],
      [
        88.494153,
        27.229623
      ],
      [
        88.494219,
        27.22972
      ],
      [
        88.494317,
        27.229807
      ],
      [
        88.494395,
        27.229877
      ],
      [
        88.494659,
        27.230056
      ],
      [
        88.495103,
        27.230211
      ],
      [
        88.495439,
        27.230386
      ],
      [
        88.495735,
        27.230501
      ],
      [
        88.496089,
        27.230611
      ],
      [
        88.496299,
        27.230634
      ],
      [
        88.496471,
        27.230659
      ],
      [
        88.496687,
        27.230684
      ],
      [
        88.496857,
        27.230697
      ],
      [
        88.496855,
        27.230766
      ],
      [
        88.496827,
        27.231103
      ],
      [
        88.496741,
        27.231714
      ],
      [
        88.495657,
        27.231619
      ],
      [
        88.49516,
        27.231634
      ],
      [
        88.494277,
        27.231754
      ],
      [
        88.492625,
        27.231816
      ],
      [
        88.492548,
        27.231851
      ],
      [
        88.492405,
        27.231915
      ],
      [
        88.492264,
        27.231979
      ],
      [
        88.492074,
        27.232175
      ],
      [
        88.491572,
        27.233064
      ],
      [
        88.491396,
        27.2336
      ],
      [
        88.491213,
        27.233877
      ],
      [
        88.490758,
        27.234821
      ],
      [
        88.490389,
        27.235919
      ],
      [
        88.489967,
        27.236397
      ],
      [
        88.489674,
        27.236836
      ],
      [
        88.489591,
        27.23708
      ],
      [
        88.489175,
        27.237497
      ],
      [
        88.489124,
        27.237716
      ],
      [
        88.489009,
        27.237939
      ],
      [
        88.488974,
        27.237991
      ],
      [
        88.488921,
        27.238044
      ],
      [
        88.48888,
        27.238077
      ],
      [
        88.48883,
        27.238107
      ],
      [
        88.488666,
        27.238153
      ],
      [
        88.488378,
        27.238284
      ],
      [
        88.488157,
        27.2385
      ],
      [
        88.488013,
        27.238587
      ],
      [
        88.487681,
        27.238717
      ],
      [
        88.487502,
        27.23891
      ],
      [
        88.487331,
        27.239278
      ],
      [
        88.48685,
        27.23976
      ],
      [
        88.48572,
        27.240544
      ],
      [
        88.485442,
        27.240812
      ],
      [
        88.484588,
        27.241169
      ],
      [
        88.483668,
        27.241388
      ],
      [
        88.48346,
        27.24156
      ],
      [
        88.483369,
        27.241702
      ],
      [
        88.483328,
        27.241751
      ],
      [
        88.483287,
        27.24178
      ],
      [
        88.483242,
        27.241804
      ],
      [
        88.483203,
        27.241822
      ],
      [
        88.483172,
        27.241833
      ],
      [
        88.48314,
        27.241837
      ],
      [
        88.482534,
        27.241765
      ],
      [
        88.482146,
        27.241744
      ],
      [
        88.481749,
        27.241799
      ],
      [
        88.48104,
        27.242037
      ],
      [
        88.480693,
        27.242284
      ],
      [
        88.48044,
        27.242409
      ],
      [
        88.479859,
        27.242282
      ],
      [
        88.479543,
        27.242356
      ],
      [
        88.478816,
        27.242626
      ],
      [
        88.478543,
        27.242754
      ],
      [
        88.478426,
        27.24278
      ],
      [
        88.478325,
        27.242907
      ],
      [
        88.478169,
        27.243048
      ],
      [
        88.477946,
        27.243388
      ],
      [
        88.4774,
        27.244005
      ],
      [
        88.477211,
        27.244395
      ],
      [
        88.476455,
        27.24613
      ],
      [
        88.476544,
        27.246603
      ],
      [
        88.476375,
        27.246895
      ],
      [
        88.476346,
        27.247077
      ],
      [
        88.476309,
        27.2475
      ],
      [
        88.476385,
        27.247854
      ],
      [
        88.476169,
        27.24874
      ],
      [
        88.47568,
        27.249438
      ],
      [
        88.475505,
        27.25007
      ],
      [
        88.475445,
        27.25022
      ],
      [
        88.47534,
        27.250338
      ],
      [
        88.475229,
        27.250369
      ],
      [
        88.475044,
        27.250352
      ],
      [
        88.474899,
        27.250316
      ],
      [
        88.474848,
        27.250242
      ],
      [
        88.474843,
        27.250157
      ],
      [
        88.474909,
        27.249969
      ],
      [
        88.475126,
        27.249334
      ],
      [
        88.474947,
        27.24898
      ],
      [
        88.474881,
        27.24843
      ],
      [
        88.474854,
        27.248199
      ],
      [
        88.474848,
        27.248066
      ],
      [
        88.474852,
        27.24794
      ],
      [
        88.47487,
        27.24783
      ],
      [
        88.474899,
        27.247746
      ],
      [
        88.474934,
        27.247608
      ],
      [
        88.47494,
        27.247533
      ],
      [
        88.474913,
        27.247414
      ],
      [
        88.474856,
        27.247328
      ],
      [
        88.474779,
        27.247284
      ],
      [
        88.474676,
        27.247253
      ],
      [
        88.474544,
        27.247241
      ],
      [
        88.474361,
        27.247247
      ],
      [
        88.474192,
        27.247285
      ],
      [
        88.473885,
        27.247355
      ],
      [
        88.473757,
        27.247411
      ],
      [
        88.473639,
        27.247486
      ],
      [
        88.473505,
        27.247546
      ],
      [
        88.473211,
        27.247646
      ],
      [
        88.473096,
        27.247659
      ],
      [
        88.472967,
        27.247663
      ],
      [
        88.472792,
        27.247662
      ],
      [
        88.472724,
        27.247678
      ],
      [
        88.472666,
        27.247712
      ],
      [
        88.472607,
        27.247765
      ],
      [
        88.472565,
        27.247859
      ],
      [
        88.472535,
        27.248077
      ],
      [
        88.472344,
        27.248656
      ],
      [
        88.471953,
        27.249107
      ],
      [
        88.471524,
        27.249403
      ],
      [
        88.471365,
        27.249654
      ],
      [
        88.470975,
        27.250064
      ],
      [
        88.470835,
        27.250122
      ],
      [
        88.470443,
        27.250081
      ],
      [
        88.470165,
        27.250147
      ],
      [
        88.469819,
        27.250264
      ],
      [
        88.468055,
        27.250861
      ],
      [
        88.467153,
        27.251013
      ],
      [
        88.466289,
        27.250853
      ],
      [
        88.465059,
        27.250898
      ],
      [
        88.46438,
        27.250801
      ],
      [
        88.463899,
        27.250902
      ],
      [
        88.463309,
        27.250889
      ],
      [
        88.462921,
        27.250829
      ],
      [
        88.462628,
        27.250569
      ],
      [
        88.462504,
        27.250423
      ],
      [
        88.462391,
        27.250351
      ],
      [
        88.462271,
        27.250358
      ],
      [
        88.462201,
        27.250457
      ],
      [
        88.462115,
        27.250623
      ],
      [
        88.461963,
        27.251023
      ],
      [
        88.4617,
        27.251311
      ],
      [
        88.461554,
        27.251359
      ],
      [
        88.46126,
        27.251342
      ],
      [
        88.461107,
        27.251377
      ],
      [
        88.460952,
        27.25147
      ],
      [
        88.460875,
        27.251661
      ],
      [
        88.460801,
        27.251831
      ],
      [
        88.460726,
        27.252232
      ],
      [
        88.460644,
        27.252835
      ],
      [
        88.460672,
        27.253205
      ],
      [
        88.460499,
        27.253766
      ],
      [
        88.460446,
        27.254164
      ],
      [
        88.460468,
        27.254274
      ],
      [
        88.460544,
        27.25437
      ],
      [
        88.460666,
        27.254441
      ],
      [
        88.461049,
        27.254556
      ],
      [
        88.461139,
        27.254634
      ],
      [
        88.461222,
        27.254758
      ],
      [
        88.461254,
        27.254906
      ],
      [
        88.461215,
        27.255022
      ],
      [
        88.461142,
        27.255073
      ],
      [
        88.461057,
        27.255092
      ],
      [
        88.460917,
        27.255104
      ],
      [
        88.460788,
        27.255149
      ],
      [
        88.460681,
        27.255223
      ],
      [
        88.460664,
        27.25537
      ],
      [
        88.460747,
        27.255678
      ],
      [
        88.460665,
        27.256066
      ],
      [
        88.460719,
        27.256553
      ],
      [
        88.460831,
        27.256869
      ],
      [
        88.461267,
        27.257395
      ],
      [
        88.461604,
        27.258368
      ],
      [
        88.46151,
        27.258993
      ],
      [
        88.461397,
        27.259187
      ],
      [
        88.461061,
        27.259348
      ],
      [
        88.460871,
        27.259444
      ],
      [
        88.460777,
        27.259489
      ],
      [
        88.460644,
        27.259508
      ],
      [
        88.460525,
        27.259451
      ],
      [
        88.460412,
        27.259348
      ],
      [
        88.460369,
        27.259222
      ],
      [
        88.460295,
        27.259097
      ],
      [
        88.459972,
        27.258973
      ],
      [
        88.459167,
        27.259062
      ],
      [
        88.458403,
        27.258913
      ],
      [
        88.458182,
        27.258983
      ],
      [
        88.457912,
        27.258993
      ],
      [
        88.457603,
        27.258869
      ],
      [
        88.457353,
        27.258894
      ],
      [
        88.456601,
        27.259221
      ],
      [
        88.456277,
        27.259526
      ],
      [
        88.456104,
        27.259688
      ],
      [
        88.455898,
        27.259956
      ],
      [
        88.455548,
        27.260214
      ],
      [
        88.454854,
        27.260344
      ],
      [
        88.454229,
        27.260564
      ],
      [
        88.453742,
        27.260586
      ],
      [
        88.453584,
        27.260665
      ],
      [
        88.452874,
        27.261326
      ],
      [
        88.452376,
        27.261523
      ],
      [
        88.452154,
        27.261744
      ],
      [
        88.451893,
        27.261865
      ],
      [
        88.451705,
        27.26213
      ],
      [
        88.451565,
        27.262196
      ],
      [
        88.451002,
        27.262171
      ],
      [
        88.450377,
        27.262284
      ],
      [
        88.449941,
        27.262536
      ],
      [
        88.449809,
        27.262567
      ],
      [
        88.449675,
        27.262546
      ],
      [
        88.449546,
        27.262484
      ],
      [
        88.44945,
        27.262383
      ],
      [
        88.449159,
        27.262341
      ],
      [
        88.448923,
        27.262405
      ],
      [
        88.448742,
        27.262454
      ],
      [
        88.448506,
        27.26263
      ],
      [
        88.448359,
        27.26295
      ],
      [
        88.448102,
        27.263314
      ],
      [
        88.447961,
        27.263676
      ],
      [
        88.447848,
        27.264016
      ],
      [
        88.447813,
        27.264336
      ],
      [
        88.447641,
        27.264698
      ],
      [
        88.446893,
        27.265269
      ],
      [
        88.446537,
        27.265691
      ],
      [
        88.446125,
        27.266011
      ],
      [
        88.445549,
        27.266498
      ],
      [
        88.445405,
        27.266551
      ],
      [
        88.445233,
        27.266575
      ],
      [
        88.444961,
        27.266573
      ],
      [
        88.44481,
        27.266596
      ],
      [
        88.444709,
        27.266683
      ],
      [
        88.444649,
        27.266766
      ],
      [
        88.444658,
        27.266842
      ],
      [
        88.444843,
        27.267505
      ],
      [
        88.44489,
        27.26788
      ],
      [
        88.445074,
        27.268429
      ],
      [
        88.445353,
        27.268705
      ],
      [
        88.445521,
        27.26929
      ],
      [
        88.446037,
        27.26995
      ],
      [
        88.446078,
        27.270066
      ],
      [
        88.446156,
        27.270287
      ],
      [
        88.446237,
        27.270383
      ],
      [
        88.44616,
        27.270703
      ],
      [
        88.445801,
        27.271747
      ],
      [
        88.445763,
        27.271928
      ],
      [
        88.445806,
        27.272191
      ],
      [
        88.445602,
        27.273044
      ],
      [
        88.445657,
        27.273191
      ],
      [
        88.445842,
        27.273372
      ],
      [
        88.445915,
        27.273477
      ],
      [
        88.445952,
        27.273575
      ],
      [
        88.445975,
        27.274435
      ],
      [
        88.445798,
        27.275088
      ],
      [
        88.445808,
        27.275291
      ],
      [
        88.445991,
        27.275501
      ],
      [
        88.446516,
        27.275891
      ],
      [
        88.44677,
        27.276522
      ],
      [
        88.446969,
        27.276837
      ],
      [
        88.447053,
        27.277223
      ],
      [
        88.446885,
        27.277791
      ],
      [
        88.446994,
        27.278062
      ],
      [
        88.447239,
        27.278326
      ],
      [
        88.44739,
        27.278677
      ],
      [
        88.447732,
        27.278934
      ],
      [
        88.4478,
        27.279029
      ],
      [
        88.447806,
        27.279166
      ],
      [
        88.447773,
        27.279478
      ],
      [
        88.447691,
        27.279747
      ],
      [
        88.447742,
        27.280164
      ],
      [
        88.447857,
        27.280474
      ],
      [
        88.448067,
        27.280774
      ],
      [
        88.448082,
        27.280851
      ],
      [
        88.448079,
        27.280934
      ],
      [
        88.448085,
        27.281072
      ],
      [
        88.448168,
        27.281666
      ],
      [
        88.448247,
        27.281877
      ],
      [
        88.448177,
        27.28243
      ],
      [
        88.448338,
        27.282943
      ],
      [
        88.448975,
        27.283726
      ],
      [
        88.449781,
        27.284155
      ],
      [
        88.449815,
        27.284208
      ],
      [
        88.449843,
        27.284268
      ],
      [
        88.449864,
        27.284331
      ],
      [
        88.449876,
        27.284398
      ],
      [
        88.44982,
        27.284587
      ],
      [
        88.449916,
        27.285289
      ],
      [
        88.449844,
        27.285639
      ],
      [
        88.449834,
        27.286476
      ],
      [
        88.449658,
        27.286766
      ],
      [
        88.44944,
        27.287788
      ],
      [
        88.449202,
        27.288106
      ],
      [
        88.449193,
        27.288246
      ],
      [
        88.448849,
        27.288954
      ],
      [
        88.448824,
        27.289427
      ],
      [
        88.448795,
        27.289549
      ],
      [
        88.448762,
        27.289628
      ],
      [
        88.44874,
        27.289684
      ],
      [
        88.44874,
        27.289739
      ],
      [
        88.448915,
        27.290024
      ],
      [
        88.448967,
        27.290258
      ],
      [
        88.448817,
        27.290502
      ],
      [
        88.448702,
        27.29097
      ],
      [
        88.448815,
        27.291658
      ],
      [
        88.44876,
        27.291916
      ],
      [
        88.449055,
        27.293569
      ],
      [
        88.449243,
        27.29391
      ],
      [
        88.449302,
        27.294394
      ],
      [
        88.449498,
        27.294695
      ],
      [
        88.449568,
        27.294781
      ],
      [
        88.449622,
        27.294819
      ],
      [
        88.449657,
        27.294862
      ],
      [
        88.449673,
        27.294932
      ],
      [
        88.449663,
        27.295069
      ],
      [
        88.449539,
        27.295184
      ],
      [
        88.44904,
        27.295438
      ],
      [
        88.448916,
        27.29561
      ],
      [
        88.44891,
        27.296743
      ],
      [
        88.44916,
        27.297733
      ],
      [
        88.449308,
        27.298112
      ],
      [
        88.449339,
        27.298573
      ],
      [
        88.449454,
        27.298818
      ],
      [
        88.449786,
        27.298994
      ],
      [
        88.449922,
        27.299421
      ],
      [
        88.449787,
        27.299992
      ],
      [
        88.44982,
        27.300227
      ],
      [
        88.450247,
        27.300952
      ],
      [
        88.450523,
        27.301279
      ],
      [
        88.45078,
        27.301943
      ],
      [
        88.451369,
        27.30254
      ],
      [
        88.451718,
        27.303046
      ],
      [
        88.452691,
        27.303707
      ],
      [
        88.453504,
        27.304543
      ],
      [
        88.454723,
        27.305065
      ],
      [
        88.45484,
        27.30527
      ],
      [
        88.455081,
        27.306468
      ],
      [
        88.455256,
        27.306618
      ],
      [
        88.455722,
        27.306808
      ],
      [
        88.455963,
        27.306901
      ],
      [
        88.456205,
        27.307258
      ],
      [
        88.45625,
        27.307615
      ],
      [
        88.456307,
        27.307755
      ],
      [
        88.456403,
        27.307866
      ],
      [
        88.456727,
        27.307979
      ],
      [
        88.457097,
        27.308186
      ],
      [
        88.457286,
        27.308548
      ],
      [
        88.457415,
        27.30931
      ],
      [
        88.457763,
        27.309962
      ],
      [
        88.45818,
        27.310377
      ],
      [
        88.458268,
        27.31084
      ],
      [
        88.458348,
        27.310968
      ],
      [
        88.458424,
        27.311056
      ],
      [
        88.458571,
        27.311138
      ],
      [
        88.458778,
        27.311211
      ],
      [
        88.458926,
        27.311255
      ],
      [
        88.459012,
        27.311299
      ],
      [
        88.45905,
        27.311353
      ],
      [
        88.459074,
        27.311425
      ],
      [
        88.459111,
        27.311574
      ],
      [
        88.458984,
        27.312029
      ],
      [
        88.45912,
        27.312425
      ],
      [
        88.459515,
        27.312706
      ],
      [
        88.460243,
        27.31272
      ],
      [
        88.460969,
        27.31302
      ],
      [
        88.461509,
        27.31343
      ],
      [
        88.462202,
        27.314187
      ],
      [
        88.462432,
        27.314342
      ],
      [
        88.463071,
        27.3145
      ],
      [
        88.463285,
        27.314661
      ],
      [
        88.46344,
        27.315073
      ],
      [
        88.463491,
        27.315151
      ],
      [
        88.463558,
        27.315255
      ],
      [
        88.46388,
        27.315379
      ],
      [
        88.464302,
        27.315543
      ],
      [
        88.464994,
        27.315799
      ],
      [
        88.465729,
        27.31593
      ],
      [
        88.466075,
        27.316232
      ],
      [
        88.466294,
        27.316563
      ],
      [
        88.466919,
        27.316962
      ],
      [
        88.467288,
        27.316988
      ],
      [
        88.467558,
        27.31695
      ],
      [
        88.468173,
        27.316728
      ],
      [
        88.46845,
        27.316808
      ],
      [
        88.468799,
        27.317092
      ],
      [
        88.468976,
        27.317153
      ],
      [
        88.469536,
        27.31709
      ],
      [
        88.469909,
        27.317216
      ],
      [
        88.470073,
        27.317383
      ],
      [
        88.470442,
        27.317986
      ],
      [
        88.471625,
        27.318671
      ],
      [
        88.47246,
        27.31874
      ],
      [
        88.473196,
        27.318726
      ],
      [
        88.473612,
        27.31858
      ],
      [
        88.473817,
        27.318403
      ],
      [
        88.47415,
        27.318324
      ],
      [
        88.474756,
        27.318551
      ],
      [
        88.475353,
        27.319028
      ],
      [
        88.475819,
        27.31918
      ],
      [
        88.476281,
        27.319465
      ],
      [
        88.476753,
        27.319663
      ],
      [
        88.477824,
        27.319741
      ],
      [
        88.477908,
        27.319772
      ],
      [
        88.47797,
        27.319815
      ],
      [
        88.47805,
        27.31992
      ],
      [
        88.47819,
        27.320153
      ],
      [
        88.478552,
        27.320239
      ],
      [
        88.478737,
        27.320299
      ],
      [
        88.478883,
        27.320378
      ],
      [
        88.479504,
        27.321234
      ],
      [
        88.479571,
        27.321312
      ],
      [
        88.479654,
        27.321355
      ],
      [
        88.479785,
        27.321357
      ],
      [
        88.479993,
        27.321429
      ],
      [
        88.480071,
        27.321527
      ],
      [
        88.480085,
        27.321993
      ],
      [
        88.480205,
        27.322173
      ],
      [
        88.480386,
        27.322289
      ],
      [
        88.480754,
        27.322776
      ],
      [
        88.481505,
        27.323471
      ],
      [
        88.481893,
        27.323985
      ],
      [
        88.482042,
        27.324048
      ],
      [
        88.482356,
        27.32407
      ],
      [
        88.482964,
        27.323945
      ],
      [
        88.483358,
        27.324024
      ],
      [
        88.483878,
        27.324317
      ],
      [
        88.484202,
        27.3244
      ],
      [
        88.485085,
        27.324313
      ],
      [
        88.485492,
        27.324506
      ],
      [
        88.486415,
        27.325176
      ],
      [
        88.4867,
        27.325295
      ],
      [
        88.487218,
        27.325242
      ],
      [
        88.487609,
        27.325088
      ],
      [
        88.488034,
        27.324846
      ],
      [
        88.488729,
        27.32468
      ],
      [
        88.488956,
        27.324702
      ],
      [
        88.489081,
        27.324749
      ],
      [
        88.489312,
        27.325066
      ],
      [
        88.489582,
        27.325276
      ],
      [
        88.490381,
        27.325604
      ],
      [
        88.490878,
        27.32558
      ],
      [
        88.491079,
        27.325424
      ],
      [
        88.491167,
        27.325088
      ],
      [
        88.491247,
        27.32501
      ],
      [
        88.491349,
        27.324977
      ],
      [
        88.491468,
        27.324978
      ],
      [
        88.492621,
        27.325188
      ],
      [
        88.49298,
        27.32521
      ],
      [
        88.493272,
        27.32532
      ],
      [
        88.493645,
        27.325279
      ],
      [
        88.493955,
        27.325101
      ],
      [
        88.494142,
        27.324847
      ],
      [
        88.494416,
        27.324676
      ],
      [
        88.494634,
        27.324625
      ],
      [
        88.494879,
        27.324706
      ],
      [
        88.495172,
        27.325105
      ],
      [
        88.495314,
        27.325904
      ],
      [
        88.495277,
        27.32612
      ],
      [
        88.495025,
        27.326392
      ],
      [
        88.494864,
        27.326517
      ],
      [
        88.49427,
        27.326708
      ],
      [
        88.493479,
        27.326887
      ],
      [
        88.492973,
        27.327217
      ],
      [
        88.492581,
        27.327744
      ],
      [
        88.492249,
        27.3279
      ],
      [
        88.491522,
        27.327965
      ],
      [
        88.491435,
        27.328008
      ],
      [
        88.491402,
        27.328072
      ],
      [
        88.491389,
        27.328139
      ],
      [
        88.491367,
        27.3283
      ],
      [
        88.491432,
        27.328864
      ],
      [
        88.491648,
        27.329585
      ],
      [
        88.49185,
        27.329788
      ],
      [
        88.491996,
        27.329958
      ],
      [
        88.492016,
        27.330391
      ],
      [
        88.492046,
        27.330531
      ],
      [
        88.492167,
        27.330769
      ],
      [
        88.492297,
        27.330941
      ],
      [
        88.492311,
        27.331044
      ],
      [
        88.492285,
        27.33112
      ],
      [
        88.492212,
        27.331164
      ],
      [
        88.492084,
        27.331227
      ],
      [
        88.491788,
        27.331522
      ],
      [
        88.491551,
        27.33179
      ],
      [
        88.491354,
        27.332148
      ],
      [
        88.491158,
        27.33272
      ],
      [
        88.490972,
        27.332961
      ],
      [
        88.490786,
        27.333258
      ],
      [
        88.490603,
        27.333571
      ],
      [
        88.490549,
        27.333731
      ],
      [
        88.490573,
        27.333857
      ],
      [
        88.490594,
        27.33405
      ],
      [
        88.490583,
        27.334149
      ],
      [
        88.490517,
        27.334274
      ],
      [
        88.490339,
        27.334538
      ],
      [
        88.490321,
        27.334691
      ],
      [
        88.490343,
        27.33482
      ],
      [
        88.490392,
        27.334941
      ],
      [
        88.490604,
        27.335165
      ],
      [
        88.49076,
        27.335284
      ],
      [
        88.49083,
        27.33537
      ],
      [
        88.490854,
        27.33549
      ],
      [
        88.490843,
        27.335658
      ],
      [
        88.490803,
        27.335807
      ],
      [
        88.490798,
        27.335928
      ],
      [
        88.49083,
        27.336047
      ],
      [
        88.490966,
        27.336305
      ],
      [
        88.491148,
        27.336482
      ],
      [
        88.491357,
        27.336611
      ],
      [
        88.491463,
        27.33673
      ],
      [
        88.491505,
        27.336875
      ],
      [
        88.49159,
        27.337356
      ],
      [
        88.491684,
        27.337673
      ],
      [
        88.491791,
        27.337819
      ],
      [
        88.491942,
        27.337938
      ],
      [
        88.492224,
        27.338093
      ],
      [
        88.492318,
        27.3382
      ],
      [
        88.492342,
        27.338341
      ],
      [
        88.492397,
        27.338595
      ],
      [
        88.492444,
        27.338723
      ],
      [
        88.493007,
        27.339563
      ],
      [
        88.493175,
        27.339712
      ],
      [
        88.493268,
        27.339771
      ],
      [
        88.49337,
        27.339811
      ],
      [
        88.493494,
        27.339824
      ],
      [
        88.493644,
        27.339824
      ],
      [
        88.493732,
        27.339896
      ],
      [
        88.494021,
        27.340386
      ],
      [
        88.494015,
        27.340477
      ],
      [
        88.493963,
        27.340545
      ],
      [
        88.493913,
        27.340599
      ],
      [
        88.493553,
        27.340785
      ],
      [
        88.4934,
        27.340798
      ],
      [
        88.493092,
        27.340785
      ],
      [
        88.491544,
        27.341227
      ],
      [
        88.491367,
        27.341303
      ],
      [
        88.491237,
        27.341405
      ],
      [
        88.491076,
        27.341617
      ],
      [
        88.491008,
        27.341748
      ],
      [
        88.490965,
        27.342068
      ],
      [
        88.490814,
        27.342455
      ],
      [
        88.490741,
        27.342546
      ],
      [
        88.490714,
        27.342562
      ],
      [
        88.490689,
        27.342569
      ],
      [
        88.490653,
        27.342569
      ],
      [
        88.490616,
        27.342564
      ],
      [
        88.490321,
        27.342498
      ],
      [
        88.490191,
        27.34249
      ],
      [
        88.490056,
        27.342511
      ],
      [
        88.489423,
        27.342783
      ],
      [
        88.48933,
        27.342805
      ],
      [
        88.489239,
        27.342808
      ],
      [
        88.489143,
        27.342795
      ],
      [
        88.488916,
        27.342682
      ],
      [
        88.488821,
        27.342655
      ],
      [
        88.488801,
        27.342654
      ],
      [
        88.488778,
        27.342658
      ],
      [
        88.488712,
        27.342687
      ],
      [
        88.488516,
        27.342854
      ],
      [
        88.487961,
        27.343483
      ],
      [
        88.487784,
        27.343679
      ],
      [
        88.48689,
        27.344439
      ],
      [
        88.486762,
        27.344565
      ],
      [
        88.486708,
        27.344654
      ],
      [
        88.486686,
        27.344731
      ],
      [
        88.486697,
        27.344797
      ],
      [
        88.486728,
        27.344881
      ],
      [
        88.486808,
        27.345124
      ],
      [
        88.486805,
        27.345231
      ],
      [
        88.486685,
        27.345607
      ],
      [
        88.48612,
        27.346624
      ],
      [
        88.486022,
        27.347162
      ],
      [
        88.485654,
        27.347539
      ],
      [
        88.485647,
        27.347559
      ],
      [
        88.485549,
        27.347844
      ],
      [
        88.48555,
        27.348086
      ],
      [
        88.485587,
        27.348172
      ],
      [
        88.485643,
        27.34822
      ],
      [
        88.485898,
        27.348385
      ],
      [
        88.485957,
        27.348444
      ],
      [
        88.48598,
        27.348478
      ],
      [
        88.485998,
        27.348544
      ],
      [
        88.485978,
        27.348604
      ],
      [
        88.485923,
        27.348653
      ],
      [
        88.485856,
        27.34868
      ],
      [
        88.485544,
        27.348668
      ],
      [
        88.485484,
        27.348682
      ],
      [
        88.485432,
        27.348721
      ],
      [
        88.48541,
        27.348776
      ],
      [
        88.485394,
        27.34886
      ],
      [
        88.485392,
        27.349172
      ],
      [
        88.485156,
        27.34964
      ],
      [
        88.485054,
        27.349974
      ],
      [
        88.48486,
        27.350206
      ],
      [
        88.48457,
        27.350706
      ],
      [
        88.484537,
        27.350938
      ],
      [
        88.484557,
        27.351227
      ],
      [
        88.484573,
        27.351459
      ],
      [
        88.484437,
        27.352471
      ],
      [
        88.484392,
        27.353613
      ],
      [
        88.484367,
        27.354003
      ],
      [
        88.484406,
        27.354411
      ],
      [
        88.48438,
        27.354608
      ],
      [
        88.484238,
        27.354788
      ],
      [
        88.484091,
        27.354996
      ],
      [
        88.484197,
        27.355376
      ],
      [
        88.483961,
        27.355877
      ],
      [
        88.483969,
        27.356533
      ],
      [
        88.483782,
        27.356879
      ],
      [
        88.483677,
        27.357248
      ],
      [
        88.483656,
        27.357587
      ],
      [
        88.483804,
        27.358099
      ],
      [
        88.48379,
        27.358546
      ],
      [
        88.483886,
        27.358971
      ],
      [
        88.483849,
        27.35941
      ],
      [
        88.483905,
        27.360259
      ],
      [
        88.484174,
        27.360643
      ],
      [
        88.48415,
        27.360857
      ],
      [
        88.484003,
        27.361138
      ],
      [
        88.484009,
        27.361479
      ],
      [
        88.484133,
        27.361888
      ],
      [
        88.484299,
        27.362222
      ],
      [
        88.484591,
        27.362619
      ],
      [
        88.484676,
        27.36289
      ],
      [
        88.484808,
        27.363099
      ],
      [
        88.484995,
        27.36398
      ],
      [
        88.485283,
        27.364844
      ],
      [
        88.485462,
        27.365614
      ],
      [
        88.485354,
        27.36625
      ],
      [
        88.485589,
        27.366913
      ],
      [
        88.485584,
        27.367342
      ],
      [
        88.485594,
        27.367758
      ],
      [
        88.485595,
        27.367781
      ],
      [
        88.485595,
        27.368057
      ],
      [
        88.485696,
        27.368359
      ],
      [
        88.485846,
        27.368673
      ],
      [
        88.485916,
        27.37011
      ],
      [
        88.485991,
        27.37031
      ],
      [
        88.486398,
        27.370744
      ],
      [
        88.486867,
        27.371068
      ],
      [
        88.48707,
        27.371409
      ],
      [
        88.487187,
        27.371825
      ],
      [
        88.487322,
        27.372078
      ],
      [
        88.487476,
        27.372347
      ],
      [
        88.487627,
        27.37269
      ],
      [
        88.487714,
        27.373504
      ],
      [
        88.487744,
        27.3736
      ],
      [
        88.487775,
        27.373652
      ],
      [
        88.487819,
        27.373685
      ],
      [
        88.487917,
        27.373725
      ],
      [
        88.488243,
        27.373815
      ],
      [
        88.488382,
        27.373877
      ],
      [
        88.488505,
        27.373951
      ],
      [
        88.488701,
        27.374149
      ],
      [
        88.488777,
        27.374208
      ],
      [
        88.488929,
        27.374287
      ],
      [
        88.489122,
        27.374331
      ],
      [
        88.489262,
        27.374354
      ],
      [
        88.489324,
        27.374374
      ],
      [
        88.489383,
        27.374414
      ],
      [
        88.489415,
        27.374453
      ],
      [
        88.489503,
        27.374596
      ],
      [
        88.489552,
        27.374655
      ],
      [
        88.489925,
        27.375027
      ],
      [
        88.490067,
        27.37515
      ],
      [
        88.490165,
        27.375243
      ],
      [
        88.490338,
        27.375473
      ],
      [
        88.49047,
        27.375555
      ],
      [
        88.490519,
        27.37558
      ],
      [
        88.490589,
        27.375585
      ],
      [
        88.490714,
        27.375567
      ],
      [
        88.490818,
        27.375571
      ],
      [
        88.491169,
        27.375577
      ],
      [
        88.49145,
        27.375664
      ],
      [
        88.491765,
        27.37584
      ],
      [
        88.492212,
        27.375961
      ],
      [
        88.492428,
        27.375974
      ],
      [
        88.492884,
        27.375798
      ],
      [
        88.493051,
        27.375815
      ],
      [
        88.493228,
        27.375913
      ],
      [
        88.493507,
        27.376273
      ],
      [
        88.493796,
        27.376631
      ],
      [
        88.493942,
        27.376709
      ],
      [
        88.494101,
        27.376743
      ],
      [
        88.495138,
        27.376644
      ],
      [
        88.49557,
        27.376529
      ],
      [
        88.495762,
        27.376554
      ],
      [
        88.49591,
        27.376644
      ],
      [
        88.496065,
        27.376935
      ],
      [
        88.496475,
        27.377305
      ],
      [
        88.497873,
        27.378269
      ],
      [
        88.498023,
        27.378428
      ],
      [
        88.498253,
        27.378772
      ],
      [
        88.498325,
        27.378835
      ],
      [
        88.498506,
        27.378962
      ],
      [
        88.498562,
        27.379025
      ],
      [
        88.498613,
        27.379143
      ],
      [
        88.498693,
        27.379389
      ],
      [
        88.498772,
        27.379487
      ],
      [
        88.498963,
        27.379631
      ],
      [
        88.499176,
        27.379742
      ],
      [
        88.499357,
        27.379835
      ],
      [
        88.499509,
        27.379873
      ],
      [
        88.499753,
        27.379897
      ],
      [
        88.500102,
        27.379926
      ],
      [
        88.500296,
        27.379974
      ],
      [
        88.50042,
        27.380044
      ],
      [
        88.501002,
        27.380576
      ],
      [
        88.501177,
        27.380792
      ],
      [
        88.501285,
        27.380975
      ],
      [
        88.50143,
        27.381449
      ],
      [
        88.501466,
        27.381555
      ],
      [
        88.501575,
        27.381695
      ],
      [
        88.501917,
        27.38192
      ],
      [
        88.50224,
        27.382152
      ],
      [
        88.502367,
        27.382201
      ],
      [
        88.502468,
        27.382185
      ],
      [
        88.502539,
        27.382124
      ],
      [
        88.502752,
        27.381984
      ],
      [
        88.502835,
        27.381961
      ],
      [
        88.502885,
        27.38196
      ],
      [
        88.502944,
        27.381978
      ],
      [
        88.503083,
        27.382045
      ],
      [
        88.503652,
        27.382576
      ],
      [
        88.50377,
        27.382669
      ],
      [
        88.504452,
        27.382961
      ],
      [
        88.504987,
        27.383465
      ],
      [
        88.505262,
        27.383982
      ],
      [
        88.5055,
        27.384286
      ],
      [
        88.505668,
        27.384396
      ],
      [
        88.50604,
        27.384513
      ],
      [
        88.506414,
        27.384692
      ],
      [
        88.506707,
        27.384758
      ],
      [
        88.506954,
        27.384867
      ],
      [
        88.507422,
        27.385022
      ],
      [
        88.507702,
        27.385098
      ],
      [
        88.508034,
        27.385208
      ],
      [
        88.508566,
        27.385632
      ],
      [
        88.508912,
        27.385992
      ],
      [
        88.509077,
        27.386098
      ],
      [
        88.509258,
        27.386203
      ],
      [
        88.509604,
        27.38631
      ],
      [
        88.509941,
        27.386324
      ],
      [
        88.51061,
        27.386466
      ],
      [
        88.510685,
        27.386489
      ],
      [
        88.510732,
        27.386518
      ],
      [
        88.510781,
        27.386565
      ],
      [
        88.510859,
        27.386689
      ],
      [
        88.51088,
        27.386758
      ],
      [
        88.510876,
        27.386822
      ],
      [
        88.510872,
        27.387005
      ],
      [
        88.510874,
        27.387043
      ],
      [
        88.51088,
        27.387074
      ],
      [
        88.510905,
        27.387115
      ],
      [
        88.511176,
        27.387393
      ],
      [
        88.511377,
        27.387727
      ],
      [
        88.511726,
        27.388352
      ],
      [
        88.511934,
        27.388889
      ],
      [
        88.511974,
        27.388964
      ],
      [
        88.512151,
        27.38918
      ],
      [
        88.512204,
        27.38923
      ],
      [
        88.512313,
        27.389273
      ],
      [
        88.512394,
        27.389279
      ],
      [
        88.51247,
        27.389272
      ],
      [
        88.512564,
        27.389233
      ],
      [
        88.512812,
        27.389089
      ],
      [
        88.512912,
        27.389062
      ],
      [
        88.513026,
        27.389062
      ],
      [
        88.513107,
        27.389101
      ],
      [
        88.513218,
        27.389171
      ],
      [
        88.513543,
        27.389408
      ],
      [
        88.513575,
        27.389466
      ],
      [
        88.513616,
        27.389589
      ],
      [
        88.513649,
        27.389647
      ],
      [
        88.513812,
        27.389817
      ],
      [
        88.513844,
        27.389888
      ],
      [
        88.513854,
        27.389949
      ],
      [
        88.513851,
        27.390119
      ],
      [
        88.513869,
        27.390353
      ],
      [
        88.513928,
        27.390682
      ],
      [
        88.514032,
        27.391046
      ],
      [
        88.514106,
        27.391233
      ],
      [
        88.514105,
        27.391402
      ],
      [
        88.514202,
        27.391599
      ],
      [
        88.514355,
        27.391962
      ],
      [
        88.514564,
        27.39234
      ],
      [
        88.514833,
        27.392595
      ],
      [
        88.515127,
        27.393089
      ],
      [
        88.515343,
        27.393622
      ],
      [
        88.515628,
        27.394177
      ],
      [
        88.515653,
        27.394372
      ],
      [
        88.516156,
        27.395118
      ],
      [
        88.516343,
        27.395654
      ],
      [
        88.516382,
        27.396061
      ],
      [
        88.516498,
        27.396378
      ],
      [
        88.517067,
        27.396979
      ],
      [
        88.51736,
        27.397311
      ],
      [
        88.517923,
        27.397813
      ],
      [
        88.51836,
        27.398428
      ],
      [
        88.518656,
        27.398596
      ],
      [
        88.518694,
        27.398701
      ],
      [
        88.519204,
        27.399071
      ],
      [
        88.519339,
        27.399243
      ],
      [
        88.51955,
        27.399888
      ],
      [
        88.519991,
        27.400506
      ],
      [
        88.520169,
        27.401263
      ],
      [
        88.520337,
        27.401463
      ],
      [
        88.520601,
        27.401528
      ],
      [
        88.520892,
        27.401627
      ],
      [
        88.521391,
        27.40195
      ],
      [
        88.521354,
        27.401993
      ],
      [
        88.52054,
        27.402999
      ],
      [
        88.520539,
        27.403
      ],
      [
        88.520494,
        27.403157
      ],
      [
        88.520538,
        27.403349
      ],
      [
        88.520618,
        27.403701
      ],
      [
        88.520613,
        27.403758
      ],
      [
        88.520593,
        27.403811
      ],
      [
        88.520523,
        27.403874
      ],
      [
        88.520413,
        27.403895
      ],
      [
        88.520274,
        27.403914
      ],
      [
        88.520181,
        27.403971
      ],
      [
        88.520089,
        27.404271
      ],
      [
        88.520054,
        27.404497
      ],
      [
        88.520058,
        27.404525
      ],
      [
        88.520074,
        27.404546
      ],
      [
        88.520095,
        27.404555
      ],
      [
        88.520134,
        27.404554
      ],
      [
        88.520168,
        27.404532
      ],
      [
        88.520211,
        27.40444
      ],
      [
        88.520264,
        27.404311
      ],
      [
        88.520302,
        27.40424
      ],
      [
        88.520351,
        27.404178
      ],
      [
        88.520502,
        27.404135
      ],
      [
        88.520629,
        27.404055
      ],
      [
        88.52079,
        27.40392
      ],
      [
        88.520925,
        27.403728
      ],
      [
        88.520966,
        27.403714
      ],
      [
        88.52101,
        27.403717
      ],
      [
        88.521039,
        27.403726
      ],
      [
        88.521049,
        27.403741
      ],
      [
        88.52105,
        27.40376
      ],
      [
        88.52103,
        27.403816
      ],
      [
        88.521,
        27.40389
      ],
      [
        88.520976,
        27.403923
      ],
      [
        88.520737,
        27.404247
      ],
      [
        88.520622,
        27.404529
      ],
      [
        88.520594,
        27.404786
      ],
      [
        88.520673,
        27.405527
      ],
      [
        88.520618,
        27.405589
      ],
      [
        88.520511,
        27.405643
      ],
      [
        88.519676,
        27.406014
      ],
      [
        88.519462,
        27.406268
      ],
      [
        88.518841,
        27.407185
      ],
      [
        88.518772,
        27.407351
      ],
      [
        88.518866,
        27.407656
      ],
      [
        88.518759,
        27.40783
      ],
      [
        88.518532,
        27.407959
      ],
      [
        88.51836,
        27.408252
      ],
      [
        88.518233,
        27.408555
      ],
      [
        88.5177,
        27.409367
      ],
      [
        88.517427,
        27.409695
      ],
      [
        88.516919,
        27.41026
      ],
      [
        88.516838,
        27.410437
      ],
      [
        88.516826,
        27.410909
      ],
      [
        88.516741,
        27.41118
      ],
      [
        88.516682,
        27.411367
      ],
      [
        88.516405,
        27.411701
      ],
      [
        88.516056,
        27.412476
      ],
      [
        88.515806,
        27.412704
      ],
      [
        88.515539,
        27.413318
      ],
      [
        88.515317,
        27.414333
      ],
      [
        88.515204,
        27.414597
      ],
      [
        88.515045,
        27.414908
      ],
      [
        88.515046,
        27.415478
      ],
      [
        88.515286,
        27.416071
      ],
      [
        88.515251,
        27.416734
      ],
      [
        88.51546,
        27.417246
      ],
      [
        88.515629,
        27.417866
      ],
      [
        88.51566,
        27.418197
      ],
      [
        88.51545,
        27.418964
      ],
      [
        88.515467,
        27.419062
      ],
      [
        88.515529,
        27.419126
      ],
      [
        88.515655,
        27.419224
      ],
      [
        88.515834,
        27.419464
      ],
      [
        88.515985,
        27.420009
      ],
      [
        88.515898,
        27.420378
      ],
      [
        88.515674,
        27.420659
      ],
      [
        88.515488,
        27.421835
      ],
      [
        88.515433,
        27.422497
      ],
      [
        88.515223,
        27.423018
      ],
      [
        88.515166,
        27.423444
      ],
      [
        88.515219,
        27.423658
      ],
      [
        88.514989,
        27.424034
      ],
      [
        88.515006,
        27.424453
      ],
      [
        88.514679,
        27.424846
      ],
      [
        88.514305,
        27.425666
      ],
      [
        88.513968,
        27.426085
      ],
      [
        88.513883,
        27.426296
      ],
      [
        88.513866,
        27.426505
      ],
      [
        88.513965,
        27.427114
      ],
      [
        88.513937,
        27.427302
      ],
      [
        88.514019,
        27.42781
      ],
      [
        88.514439,
        27.428407
      ],
      [
        88.514847,
        27.428653
      ],
      [
        88.51507,
        27.428865
      ],
      [
        88.515136,
        27.429094
      ],
      [
        88.515069,
        27.429313
      ],
      [
        88.514621,
        27.429864
      ],
      [
        88.514583,
        27.430003
      ],
      [
        88.514749,
        27.430388
      ],
      [
        88.514652,
        27.430625
      ],
      [
        88.514722,
        27.430825
      ],
      [
        88.514976,
        27.431147
      ],
      [
        88.514939,
        27.431337
      ],
      [
        88.514686,
        27.431796
      ],
      [
        88.514538,
        27.431964
      ],
      [
        88.514496,
        27.432194
      ],
      [
        88.514576,
        27.43277
      ],
      [
        88.514549,
        27.433001
      ],
      [
        88.514825,
        27.433711
      ],
      [
        88.514789,
        27.433853
      ],
      [
        88.514858,
        27.434262
      ],
      [
        88.514734,
        27.434533
      ],
      [
        88.514771,
        27.434845
      ],
      [
        88.514886,
        27.435198
      ],
      [
        88.515326,
        27.435967
      ],
      [
        88.515081,
        27.436905
      ],
      [
        88.514965,
        27.437148
      ],
      [
        88.514847,
        27.437249
      ],
      [
        88.514809,
        27.437436
      ],
      [
        88.514763,
        27.437683
      ],
      [
        88.514759,
        27.437875
      ],
      [
        88.51474,
        27.437916
      ],
      [
        88.514698,
        27.437943
      ],
      [
        88.514525,
        27.437983
      ],
      [
        88.514396,
        27.438064
      ],
      [
        88.514337,
        27.438169
      ],
      [
        88.514348,
        27.438264
      ],
      [
        88.514301,
        27.438546
      ],
      [
        88.514385,
        27.438782
      ],
      [
        88.514394,
        27.438911
      ],
      [
        88.514448,
        27.439208
      ],
      [
        88.514359,
        27.439429
      ],
      [
        88.514298,
        27.439507
      ],
      [
        88.513922,
        27.43973
      ],
      [
        88.513355,
        27.440196
      ],
      [
        88.513261,
        27.440396
      ],
      [
        88.513252,
        27.440473
      ],
      [
        88.513258,
        27.44054
      ],
      [
        88.513265,
        27.440586
      ],
      [
        88.513297,
        27.440618
      ],
      [
        88.513402,
        27.440682
      ],
      [
        88.513523,
        27.44072
      ],
      [
        88.513624,
        27.440762
      ],
      [
        88.5137,
        27.440824
      ],
      [
        88.513657,
        27.441509
      ],
      [
        88.513691,
        27.441585
      ],
      [
        88.513756,
        27.44165
      ],
      [
        88.513863,
        27.441676
      ],
      [
        88.514031,
        27.441685
      ],
      [
        88.514409,
        27.441897
      ],
      [
        88.514977,
        27.441911
      ],
      [
        88.515125,
        27.442042
      ],
      [
        88.51539,
        27.442368
      ],
      [
        88.515554,
        27.443367
      ],
      [
        88.515608,
        27.443445
      ],
      [
        88.516128,
        27.444111
      ],
      [
        88.516571,
        27.444503
      ],
      [
        88.517454,
        27.44589
      ],
      [
        88.51783,
        27.446292
      ],
      [
        88.518323,
        27.446446
      ],
      [
        88.519056,
        27.447406
      ],
      [
        88.519499,
        27.44786
      ],
      [
        88.519824,
        27.448438
      ],
      [
        88.519793,
        27.448733
      ],
      [
        88.519564,
        27.449058
      ],
      [
        88.519404,
        27.449179
      ],
      [
        88.518725,
        27.449408
      ],
      [
        88.518316,
        27.449733
      ],
      [
        88.518283,
        27.449795
      ],
      [
        88.518262,
        27.449876
      ],
      [
        88.518287,
        27.450035
      ],
      [
        88.518941,
        27.45111
      ],
      [
        88.519474,
        27.451492
      ],
      [
        88.519785,
        27.45195
      ],
      [
        88.520087,
        27.452154
      ],
      [
        88.520542,
        27.452232
      ],
      [
        88.520877,
        27.452458
      ],
      [
        88.521104,
        27.452713
      ],
      [
        88.521314,
        27.452785
      ],
      [
        88.521422,
        27.452818
      ],
      [
        88.521499,
        27.452889
      ],
      [
        88.52154,
        27.452979
      ],
      [
        88.52166,
        27.453867
      ],
      [
        88.52198,
        27.45425
      ],
      [
        88.521981,
        27.454852
      ],
      [
        88.522052,
        27.455029
      ],
      [
        88.522122,
        27.455204
      ],
      [
        88.522128,
        27.455279
      ],
      [
        88.522104,
        27.455353
      ],
      [
        88.522037,
        27.45545
      ],
      [
        88.521235,
        27.455895
      ],
      [
        88.520621,
        27.456338
      ],
      [
        88.520445,
        27.456586
      ],
      [
        88.520332,
        27.456874
      ],
      [
        88.520279,
        27.45694
      ],
      [
        88.520188,
        27.456978
      ],
      [
        88.520032,
        27.457019
      ],
      [
        88.519675,
        27.457094
      ],
      [
        88.519419,
        27.457326
      ],
      [
        88.519393,
        27.457358
      ],
      [
        88.519379,
        27.457409
      ],
      [
        88.519403,
        27.457485
      ],
      [
        88.519488,
        27.457552
      ],
      [
        88.519623,
        27.457575
      ],
      [
        88.519839,
        27.457525
      ],
      [
        88.520059,
        27.457399
      ],
      [
        88.520927,
        27.457294
      ],
      [
        88.521606,
        27.457659
      ],
      [
        88.521986,
        27.457977
      ],
      [
        88.522562,
        27.458096
      ],
      [
        88.522733,
        27.458284
      ],
      [
        88.522772,
        27.45864
      ],
      [
        88.522906,
        27.458944
      ],
      [
        88.523065,
        27.459122
      ],
      [
        88.523112,
        27.459462
      ],
      [
        88.523175,
        27.459996
      ],
      [
        88.52336,
        27.460282
      ],
      [
        88.523532,
        27.460767
      ],
      [
        88.523536,
        27.460955
      ],
      [
        88.52346,
        27.461174
      ],
      [
        88.523471,
        27.46177
      ],
      [
        88.523332,
        27.462037
      ],
      [
        88.523478,
        27.463564
      ],
      [
        88.523533,
        27.463706
      ],
      [
        88.523934,
        27.464012
      ],
      [
        88.524308,
        27.464155
      ],
      [
        88.524405,
        27.464205
      ],
      [
        88.524375,
        27.464274
      ],
      [
        88.524372,
        27.464314
      ],
      [
        88.524434,
        27.46438
      ],
      [
        88.524532,
        27.46446
      ],
      [
        88.525008,
        27.464658
      ],
      [
        88.525122,
        27.464774
      ],
      [
        88.525187,
        27.464936
      ],
      [
        88.525207,
        27.465242
      ],
      [
        88.525264,
        27.465565
      ],
      [
        88.525231,
        27.46565
      ],
      [
        88.525069,
        27.465841
      ],
      [
        88.52503,
        27.465872
      ],
      [
        88.52501,
        27.465892
      ],
      [
        88.52497,
        27.465914
      ],
      [
        88.524629,
        27.465947
      ],
      [
        88.524572,
        27.465961
      ],
      [
        88.524476,
        27.466018
      ],
      [
        88.524446,
        27.466041
      ],
      [
        88.524435,
        27.466051
      ],
      [
        88.524431,
        27.46607
      ],
      [
        88.524433,
        27.466087
      ],
      [
        88.524459,
        27.46618
      ],
      [
        88.524485,
        27.466273
      ],
      [
        88.52454,
        27.466771
      ],
      [
        88.524445,
        27.467434
      ],
      [
        88.524481,
        27.467564
      ],
      [
        88.524661,
        27.467748
      ],
      [
        88.524792,
        27.468562
      ],
      [
        88.52494,
        27.468878
      ],
      [
        88.524921,
        27.469344
      ],
      [
        88.525029,
        27.469573
      ],
      [
        88.525142,
        27.469636
      ],
      [
        88.525336,
        27.469645
      ],
      [
        88.525682,
        27.469579
      ],
      [
        88.52643,
        27.469983
      ],
      [
        88.526854,
        27.470336
      ],
      [
        88.527137,
        27.470434
      ],
      [
        88.527277,
        27.470638
      ],
      [
        88.527343,
        27.471372
      ],
      [
        88.527537,
        27.471767
      ],
      [
        88.527499,
        27.471958
      ],
      [
        88.5272,
        27.472267
      ],
      [
        88.526779,
        27.472868
      ],
      [
        88.526734,
        27.473141
      ],
      [
        88.526837,
        27.473541
      ],
      [
        88.526791,
        27.473961
      ],
      [
        88.526715,
        27.474124
      ],
      [
        88.526996,
        27.475112
      ],
      [
        88.526904,
        27.475741
      ],
      [
        88.526954,
        27.47604
      ],
      [
        88.527127,
        27.476124
      ],
      [
        88.527944,
        27.475941
      ],
      [
        88.528121,
        27.475831
      ],
      [
        88.528251,
        27.475796
      ],
      [
        88.528318,
        27.475823
      ],
      [
        88.52835,
        27.475879
      ],
      [
        88.528352,
        27.475947
      ],
      [
        88.528297,
        27.47602
      ],
      [
        88.528058,
        27.476094
      ],
      [
        88.527522,
        27.476375
      ],
      [
        88.527073,
        27.476569
      ],
      [
        88.52675,
        27.476716
      ],
      [
        88.526632,
        27.476846
      ],
      [
        88.526702,
        27.477563
      ],
      [
        88.527145,
        27.478215
      ],
      [
        88.527344,
        27.478416
      ],
      [
        88.527281,
        27.478661
      ],
      [
        88.527178,
        27.47881
      ],
      [
        88.527005,
        27.478936
      ],
      [
        88.526964,
        27.478962
      ],
      [
        88.526885,
        27.479033
      ],
      [
        88.526595,
        27.479152
      ],
      [
        88.526345,
        27.479255
      ],
      [
        88.526292,
        27.479377
      ],
      [
        88.526267,
        27.479486
      ],
      [
        88.526495,
        27.479812
      ],
      [
        88.526688,
        27.480082
      ],
      [
        88.526967,
        27.480472
      ],
      [
        88.527066,
        27.480586
      ],
      [
        88.527237,
        27.480781
      ],
      [
        88.527291,
        27.480939
      ],
      [
        88.527284,
        27.481054
      ],
      [
        88.527292,
        27.48122
      ],
      [
        88.527278,
        27.48135
      ],
      [
        88.52728,
        27.481477
      ],
      [
        88.527285,
        27.481581
      ],
      [
        88.52729,
        27.481696
      ],
      [
        88.527274,
        27.481993
      ],
      [
        88.52719,
        27.482075
      ],
      [
        88.527119,
        27.4822
      ],
      [
        88.527111,
        27.482313
      ],
      [
        88.527083,
        27.482421
      ],
      [
        88.526981,
        27.482717
      ],
      [
        88.526929,
        27.482892
      ],
      [
        88.526838,
        27.483289
      ],
      [
        88.526842,
        27.483454
      ],
      [
        88.526926,
        27.483469
      ],
      [
        88.527012,
        27.483348
      ],
      [
        88.527057,
        27.483232
      ],
      [
        88.527079,
        27.483153
      ],
      [
        88.527134,
        27.482998
      ],
      [
        88.527289,
        27.482875
      ],
      [
        88.527345,
        27.482865
      ],
      [
        88.52763,
        27.482767
      ],
      [
        88.527678,
        27.482611
      ],
      [
        88.527673,
        27.482553
      ],
      [
        88.527657,
        27.482314
      ],
      [
        88.527557,
        27.482205
      ],
      [
        88.527526,
        27.482038
      ],
      [
        88.527609,
        27.481899
      ],
      [
        88.527727,
        27.481756
      ],
      [
        88.527969,
        27.481401
      ],
      [
        88.528001,
        27.481335
      ],
      [
        88.528051,
        27.481107
      ],
      [
        88.528061,
        27.48089
      ],
      [
        88.528107,
        27.480755
      ],
      [
        88.528095,
        27.480379
      ],
      [
        88.528024,
        27.480251
      ],
      [
        88.527842,
        27.479842
      ],
      [
        88.527826,
        27.479775
      ],
      [
        88.527824,
        27.479594
      ],
      [
        88.528006,
        27.479412
      ],
      [
        88.528087,
        27.479388
      ],
      [
        88.528357,
        27.479345
      ],
      [
        88.528491,
        27.47934
      ],
      [
        88.528687,
        27.479199
      ],
      [
        88.528728,
        27.479153
      ],
      [
        88.528798,
        27.479152
      ],
      [
        88.528844,
        27.479217
      ],
      [
        88.528814,
        27.479298
      ],
      [
        88.52872,
        27.479381
      ],
      [
        88.528579,
        27.479443
      ],
      [
        88.528354,
        27.479433
      ],
      [
        88.528039,
        27.47954
      ],
      [
        88.528033,
        27.479758
      ],
      [
        88.528163,
        27.479991
      ],
      [
        88.528216,
        27.480062
      ],
      [
        88.528523,
        27.480478
      ],
      [
        88.528583,
        27.480627
      ],
      [
        88.528572,
        27.480925
      ],
      [
        88.52846,
        27.481081
      ],
      [
        88.528455,
        27.481425
      ],
      [
        88.528404,
        27.48157
      ],
      [
        88.528386,
        27.481649
      ],
      [
        88.528358,
        27.481725
      ],
      [
        88.528327,
        27.48206
      ],
      [
        88.528333,
        27.482223
      ],
      [
        88.528329,
        27.482362
      ],
      [
        88.528482,
        27.482498
      ],
      [
        88.528618,
        27.482678
      ],
      [
        88.528722,
        27.482773
      ],
      [
        88.528834,
        27.482849
      ],
      [
        88.528923,
        27.482803
      ],
      [
        88.528928,
        27.482711
      ],
      [
        88.52882,
        27.482594
      ],
      [
        88.528604,
        27.482391
      ],
      [
        88.528533,
        27.482092
      ],
      [
        88.528673,
        27.481693
      ],
      [
        88.528721,
        27.481631
      ],
      [
        88.528909,
        27.481293
      ],
      [
        88.528996,
        27.481133
      ],
      [
        88.529085,
        27.480856
      ],
      [
        88.529104,
        27.480772
      ],
      [
        88.529045,
        27.480388
      ],
      [
        88.528978,
        27.480259
      ],
      [
        88.528927,
        27.480132
      ],
      [
        88.528918,
        27.479901
      ],
      [
        88.529057,
        27.479612
      ],
      [
        88.529176,
        27.479497
      ],
      [
        88.529273,
        27.479414
      ],
      [
        88.529374,
        27.479388
      ],
      [
        88.529429,
        27.479451
      ],
      [
        88.529437,
        27.479528
      ],
      [
        88.529332,
        27.479588
      ],
      [
        88.529167,
        27.479688
      ],
      [
        88.529077,
        27.479864
      ],
      [
        88.52909,
        27.480011
      ],
      [
        88.529146,
        27.48017
      ],
      [
        88.529222,
        27.480351
      ],
      [
        88.529294,
        27.480483
      ],
      [
        88.529329,
        27.480603
      ],
      [
        88.529364,
        27.480954
      ],
      [
        88.529364,
        27.481165
      ],
      [
        88.52925,
        27.481417
      ],
      [
        88.529095,
        27.481526
      ],
      [
        88.529007,
        27.481546
      ],
      [
        88.528957,
        27.481647
      ],
      [
        88.528907,
        27.481894
      ],
      [
        88.528925,
        27.48214
      ],
      [
        88.528973,
        27.482255
      ],
      [
        88.529113,
        27.482425
      ],
      [
        88.52947,
        27.482745
      ],
      [
        88.529552,
        27.482819
      ],
      [
        88.529628,
        27.482862
      ],
      [
        88.529753,
        27.482858
      ],
      [
        88.529791,
        27.482833
      ],
      [
        88.529812,
        27.482775
      ],
      [
        88.529699,
        27.48267
      ],
      [
        88.529475,
        27.482565
      ],
      [
        88.52932,
        27.482432
      ],
      [
        88.529202,
        27.482115
      ],
      [
        88.52919,
        27.482064
      ],
      [
        88.529211,
        27.481931
      ],
      [
        88.529303,
        27.481848
      ],
      [
        88.529345,
        27.481799
      ],
      [
        88.529613,
        27.481619
      ],
      [
        88.529668,
        27.481523
      ],
      [
        88.529742,
        27.481326
      ],
      [
        88.529824,
        27.48112
      ],
      [
        88.529853,
        27.481047
      ],
      [
        88.529894,
        27.480738
      ],
      [
        88.529839,
        27.480406
      ],
      [
        88.529808,
        27.480297
      ],
      [
        88.529846,
        27.480218
      ],
      [
        88.529932,
        27.480189
      ],
      [
        88.530101,
        27.480214
      ],
      [
        88.530301,
        27.480261
      ],
      [
        88.530402,
        27.480272
      ],
      [
        88.530624,
        27.480238
      ],
      [
        88.530881,
        27.480239
      ],
      [
        88.531157,
        27.480232
      ],
      [
        88.531272,
        27.48025
      ],
      [
        88.531304,
        27.480297
      ],
      [
        88.531309,
        27.480346
      ],
      [
        88.531269,
        27.480405
      ],
      [
        88.531149,
        27.480415
      ],
      [
        88.530866,
        27.480351
      ],
      [
        88.530676,
        27.480341
      ],
      [
        88.530475,
        27.480398
      ],
      [
        88.530356,
        27.480403
      ],
      [
        88.530189,
        27.480425
      ],
      [
        88.530124,
        27.480476
      ],
      [
        88.530125,
        27.480628
      ],
      [
        88.530165,
        27.480779
      ],
      [
        88.530187,
        27.480948
      ],
      [
        88.5302,
        27.48115
      ],
      [
        88.530169,
        27.481242
      ],
      [
        88.530065,
        27.481432
      ],
      [
        88.530028,
        27.481634
      ],
      [
        88.529951,
        27.481932
      ],
      [
        88.52996,
        27.48199
      ],
      [
        88.530008,
        27.482035
      ],
      [
        88.53013,
        27.482043
      ],
      [
        88.530243,
        27.482038
      ],
      [
        88.530432,
        27.482048
      ],
      [
        88.530679,
        27.482217
      ],
      [
        88.530766,
        27.48241
      ],
      [
        88.530867,
        27.482602
      ],
      [
        88.53107,
        27.482721
      ],
      [
        88.531353,
        27.482724
      ],
      [
        88.531558,
        27.482703
      ],
      [
        88.53176,
        27.48269
      ],
      [
        88.531813,
        27.482571
      ],
      [
        88.531709,
        27.482475
      ],
      [
        88.531511,
        27.482503
      ],
      [
        88.531436,
        27.482523
      ],
      [
        88.531168,
        27.48248
      ],
      [
        88.531104,
        27.482357
      ],
      [
        88.531064,
        27.482247
      ],
      [
        88.530789,
        27.481852
      ],
      [
        88.530523,
        27.48171
      ],
      [
        88.530398,
        27.481581
      ],
      [
        88.530459,
        27.481428
      ],
      [
        88.530557,
        27.48112
      ],
      [
        88.530581,
        27.481025
      ],
      [
        88.530603,
        27.480925
      ],
      [
        88.530642,
        27.480814
      ],
      [
        88.530689,
        27.480738
      ],
      [
        88.530737,
        27.48072
      ],
      [
        88.53078,
        27.480727
      ],
      [
        88.53084,
        27.480795
      ],
      [
        88.530863,
        27.480888
      ],
      [
        88.530795,
        27.481024
      ],
      [
        88.530575,
        27.481342
      ],
      [
        88.530604,
        27.481617
      ],
      [
        88.530665,
        27.48167
      ],
      [
        88.531025,
        27.481909
      ],
      [
        88.531026,
        27.481951
      ],
      [
        88.531057,
        27.482026
      ],
      [
        88.531176,
        27.482172
      ],
      [
        88.531329,
        27.482196
      ],
      [
        88.531643,
        27.482206
      ],
      [
        88.531962,
        27.482263
      ],
      [
        88.53215,
        27.482336
      ],
      [
        88.533206,
        27.482892
      ],
      [
        88.533309,
        27.482982
      ],
      [
        88.533341,
        27.483032
      ],
      [
        88.533346,
        27.483063
      ],
      [
        88.533341,
        27.483115
      ],
      [
        88.533302,
        27.483194
      ],
      [
        88.533001,
        27.483482
      ],
      [
        88.532945,
        27.483585
      ],
      [
        88.532936,
        27.483699
      ],
      [
        88.533058,
        27.484205
      ],
      [
        88.533006,
        27.484393
      ],
      [
        88.532737,
        27.48475
      ],
      [
        88.532649,
        27.485211
      ],
      [
        88.532671,
        27.485264
      ],
      [
        88.532718,
        27.485303
      ],
      [
        88.533023,
        27.485496
      ],
      [
        88.533054,
        27.485534
      ],
      [
        88.533072,
        27.485586
      ],
      [
        88.533076,
        27.48566
      ],
      [
        88.533057,
        27.485732
      ],
      [
        88.533013,
        27.485796
      ],
      [
        88.532741,
        27.48592
      ],
      [
        88.532668,
        27.486008
      ],
      [
        88.53264,
        27.48609
      ],
      [
        88.532641,
        27.4862
      ],
      [
        88.532661,
        27.486278
      ],
      [
        88.532698,
        27.486347
      ],
      [
        88.532837,
        27.486458
      ],
      [
        88.53288,
        27.486512
      ],
      [
        88.532903,
        27.486571
      ],
      [
        88.532908,
        27.486642
      ],
      [
        88.532884,
        27.486753
      ],
      [
        88.532857,
        27.486875
      ],
      [
        88.532777,
        27.487062
      ],
      [
        88.532671,
        27.487199
      ],
      [
        88.532423,
        27.487397
      ],
      [
        88.532168,
        27.4875
      ],
      [
        88.531689,
        27.487633
      ],
      [
        88.531201,
        27.487699
      ],
      [
        88.531039,
        27.487754
      ],
      [
        88.530787,
        27.487907
      ],
      [
        88.530636,
        27.487969
      ],
      [
        88.530428,
        27.487954
      ],
      [
        88.529997,
        27.487867
      ],
      [
        88.529854,
        27.487849
      ],
      [
        88.529791,
        27.487848
      ],
      [
        88.529741,
        27.487862
      ],
      [
        88.529687,
        27.487895
      ],
      [
        88.529644,
        27.487956
      ],
      [
        88.529632,
        27.488085
      ],
      [
        88.529663,
        27.488466
      ],
      [
        88.529768,
        27.488678
      ],
      [
        88.529794,
        27.488737
      ],
      [
        88.529805,
        27.488806
      ],
      [
        88.529806,
        27.488859
      ],
      [
        88.529785,
        27.488913
      ],
      [
        88.529741,
        27.488982
      ],
      [
        88.529702,
        27.489179
      ],
      [
        88.529743,
        27.489439
      ],
      [
        88.529872,
        27.489674
      ],
      [
        88.529897,
        27.489752
      ],
      [
        88.529891,
        27.489829
      ],
      [
        88.529863,
        27.490024
      ],
      [
        88.529576,
        27.490575
      ],
      [
        88.529412,
        27.490747
      ],
      [
        88.528901,
        27.49158
      ],
      [
        88.528651,
        27.491829
      ],
      [
        88.528599,
        27.491895
      ],
      [
        88.528445,
        27.492228
      ],
      [
        88.528438,
        27.492286
      ],
      [
        88.528439,
        27.49234
      ],
      [
        88.528453,
        27.492381
      ],
      [
        88.52848,
        27.492413
      ],
      [
        88.52852,
        27.492449
      ],
      [
        88.528668,
        27.492544
      ],
      [
        88.529337,
        27.49301
      ],
      [
        88.529425,
        27.493221
      ],
      [
        88.529449,
        27.493479
      ],
      [
        88.529422,
        27.493869
      ],
      [
        88.529336,
        27.494095
      ],
      [
        88.529031,
        27.494595
      ],
      [
        88.529055,
        27.494742
      ],
      [
        88.529234,
        27.494973
      ],
      [
        88.529312,
        27.495185
      ],
      [
        88.529323,
        27.495363
      ],
      [
        88.529315,
        27.49544
      ],
      [
        88.529264,
        27.495566
      ],
      [
        88.529259,
        27.495734
      ],
      [
        88.529195,
        27.495905
      ],
      [
        88.529125,
        27.496071
      ],
      [
        88.529103,
        27.49619
      ],
      [
        88.529205,
        27.496257
      ],
      [
        88.529393,
        27.496352
      ],
      [
        88.529559,
        27.496481
      ],
      [
        88.529726,
        27.496695
      ],
      [
        88.529871,
        27.496876
      ],
      [
        88.529962,
        27.497052
      ],
      [
        88.530053,
        27.49718
      ],
      [
        88.529932,
        27.497128
      ],
      [
        88.529716,
        27.496934
      ],
      [
        88.529263,
        27.496443
      ],
      [
        88.529044,
        27.49632
      ],
      [
        88.528972,
        27.496258
      ],
      [
        88.528965,
        27.496138
      ],
      [
        88.529039,
        27.495956
      ],
      [
        88.529106,
        27.495798
      ],
      [
        88.529152,
        27.495586
      ],
      [
        88.529123,
        27.495575
      ],
      [
        88.529105,
        27.495558
      ],
      [
        88.529082,
        27.495515
      ],
      [
        88.529057,
        27.495375
      ],
      [
        88.529012,
        27.495137
      ],
      [
        88.52877,
        27.49488
      ],
      [
        88.528686,
        27.494702
      ],
      [
        88.528739,
        27.494462
      ],
      [
        88.528785,
        27.494302
      ],
      [
        88.528787,
        27.494286
      ],
      [
        88.528788,
        27.494243
      ],
      [
        88.528784,
        27.494223
      ],
      [
        88.528778,
        27.494212
      ],
      [
        88.528767,
        27.494203
      ],
      [
        88.528759,
        27.494201
      ],
      [
        88.528746,
        27.494203
      ],
      [
        88.528736,
        27.494209
      ],
      [
        88.528716,
        27.494225
      ],
      [
        88.52861,
        27.49442
      ],
      [
        88.528498,
        27.494647
      ],
      [
        88.52848,
        27.494785
      ],
      [
        88.528497,
        27.494879
      ],
      [
        88.528543,
        27.494966
      ],
      [
        88.528742,
        27.495144
      ],
      [
        88.528833,
        27.495337
      ],
      [
        88.528804,
        27.495525
      ],
      [
        88.528662,
        27.495825
      ],
      [
        88.528476,
        27.496131
      ],
      [
        88.528395,
        27.496472
      ],
      [
        88.528371,
        27.496661
      ],
      [
        88.528395,
        27.496748
      ],
      [
        88.528477,
        27.496787
      ],
      [
        88.528512,
        27.496812
      ],
      [
        88.528566,
        27.496827
      ],
      [
        88.528719,
        27.496819
      ],
      [
        88.528806,
        27.496831
      ],
      [
        88.528865,
        27.496849
      ],
      [
        88.528899,
        27.49688
      ],
      [
        88.528941,
        27.496993
      ],
      [
        88.528959,
        27.497026
      ],
      [
        88.529065,
        27.497159
      ],
      [
        88.529098,
        27.497217
      ],
      [
        88.529103,
        27.497252
      ],
      [
        88.529102,
        27.497269
      ],
      [
        88.529093,
        27.497291
      ],
      [
        88.52907,
        27.497317
      ],
      [
        88.529048,
        27.497326
      ],
      [
        88.529022,
        27.497329
      ],
      [
        88.528992,
        27.49732
      ],
      [
        88.528975,
        27.49731
      ],
      [
        88.528926,
        27.497276
      ],
      [
        88.528887,
        27.497225
      ],
      [
        88.528833,
        27.497093
      ],
      [
        88.528784,
        27.497041
      ],
      [
        88.528728,
        27.497005
      ],
      [
        88.528672,
        27.496988
      ],
      [
        88.528605,
        27.49698
      ],
      [
        88.528422,
        27.496998
      ],
      [
        88.528379,
        27.496992
      ],
      [
        88.52834,
        27.496971
      ],
      [
        88.528288,
        27.496926
      ],
      [
        88.528189,
        27.496885
      ],
      [
        88.528171,
        27.49684
      ],
      [
        88.528091,
        27.496766
      ],
      [
        88.528042,
        27.496657
      ],
      [
        88.528035,
        27.496597
      ],
      [
        88.528031,
        27.496515
      ],
      [
        88.528023,
        27.496408
      ],
      [
        88.528044,
        27.496243
      ],
      [
        88.528086,
        27.496171
      ],
      [
        88.528141,
        27.496076
      ],
      [
        88.528246,
        27.495839
      ],
      [
        88.528277,
        27.4957
      ],
      [
        88.528273,
        27.49558
      ],
      [
        88.528248,
        27.495485
      ],
      [
        88.528213,
        27.495408
      ],
      [
        88.528151,
        27.495331
      ],
      [
        88.527838,
        27.495068
      ],
      [
        88.527753,
        27.494967
      ],
      [
        88.527664,
        27.494832
      ],
      [
        88.527653,
        27.49479
      ],
      [
        88.527648,
        27.494747
      ],
      [
        88.527653,
        27.494703
      ],
      [
        88.527724,
        27.494492
      ],
      [
        88.527781,
        27.494297
      ],
      [
        88.527796,
        27.494222
      ],
      [
        88.527788,
        27.494138
      ],
      [
        88.527764,
        27.494056
      ],
      [
        88.527723,
        27.493988
      ],
      [
        88.527449,
        27.493672
      ],
      [
        88.527312,
        27.493561
      ],
      [
        88.526918,
        27.493243
      ],
      [
        88.526465,
        27.492884
      ],
      [
        88.526404,
        27.492781
      ],
      [
        88.526361,
        27.492599
      ],
      [
        88.526327,
        27.49237
      ],
      [
        88.526338,
        27.492248
      ],
      [
        88.526388,
        27.492137
      ],
      [
        88.526622,
        27.491808
      ],
      [
        88.526853,
        27.491547
      ],
      [
        88.52694,
        27.491501
      ],
      [
        88.527208,
        27.491407
      ],
      [
        88.527273,
        27.491374
      ],
      [
        88.527328,
        27.491328
      ],
      [
        88.527374,
        27.491257
      ],
      [
        88.527591,
        27.490688
      ],
      [
        88.527643,
        27.490468
      ],
      [
        88.527646,
        27.490426
      ],
      [
        88.527641,
        27.490387
      ],
      [
        88.527613,
        27.490298
      ],
      [
        88.52759,
        27.490257
      ],
      [
        88.527536,
        27.490206
      ],
      [
        88.527526,
        27.490184
      ],
      [
        88.527522,
        27.49016
      ],
      [
        88.527524,
        27.490133
      ],
      [
        88.527549,
        27.490024
      ],
      [
        88.527578,
        27.489798
      ],
      [
        88.527571,
        27.489738
      ],
      [
        88.527542,
        27.4896
      ],
      [
        88.527536,
        27.489537
      ],
      [
        88.527545,
        27.489481
      ],
      [
        88.527723,
        27.489165
      ],
      [
        88.527869,
        27.488993
      ],
      [
        88.527883,
        27.488972
      ],
      [
        88.527894,
        27.488945
      ],
      [
        88.527895,
        27.488925
      ],
      [
        88.527892,
        27.488911
      ],
      [
        88.527883,
        27.488898
      ],
      [
        88.527866,
        27.488888
      ],
      [
        88.527845,
        27.488882
      ],
      [
        88.527818,
        27.488881
      ],
      [
        88.527791,
        27.488888
      ],
      [
        88.527727,
        27.488925
      ],
      [
        88.527702,
        27.488948
      ],
      [
        88.527589,
        27.489086
      ],
      [
        88.527528,
        27.489141
      ],
      [
        88.527445,
        27.489237
      ],
      [
        88.527379,
        27.489313
      ],
      [
        88.527343,
        27.489369
      ],
      [
        88.52732,
        27.489436
      ],
      [
        88.527302,
        27.489693
      ],
      [
        88.527229,
        27.490169
      ],
      [
        88.5271,
        27.490623
      ],
      [
        88.52705,
        27.490742
      ],
      [
        88.526889,
        27.49096
      ],
      [
        88.526712,
        27.491095
      ],
      [
        88.526323,
        27.491304
      ],
      [
        88.526146,
        27.491425
      ],
      [
        88.525882,
        27.491685
      ],
      [
        88.525591,
        27.492128
      ],
      [
        88.525432,
        27.492313
      ],
      [
        88.525218,
        27.492571
      ],
      [
        88.525199,
        27.492618
      ],
      [
        88.525185,
        27.492669
      ],
      [
        88.525182,
        27.492716
      ],
      [
        88.52519,
        27.492793
      ],
      [
        88.525198,
        27.492829
      ],
      [
        88.52521,
        27.492857
      ],
      [
        88.52524,
        27.492893
      ],
      [
        88.525334,
        27.492966
      ],
      [
        88.525357,
        27.492996
      ],
      [
        88.525372,
        27.493035
      ],
      [
        88.525387,
        27.493209
      ],
      [
        88.525422,
        27.493307
      ],
      [
        88.525458,
        27.493364
      ],
      [
        88.5255,
        27.493403
      ],
      [
        88.525898,
        27.493613
      ],
      [
        88.525929,
        27.493647
      ],
      [
        88.525949,
        27.493688
      ],
      [
        88.525959,
        27.493747
      ],
      [
        88.525941,
        27.493909
      ],
      [
        88.525948,
        27.493995
      ],
      [
        88.525988,
        27.494086
      ],
      [
        88.526066,
        27.494194
      ],
      [
        88.526113,
        27.494286
      ],
      [
        88.52628,
        27.494618
      ],
      [
        88.526317,
        27.494733
      ],
      [
        88.526321,
        27.494845
      ],
      [
        88.526303,
        27.49499
      ],
      [
        88.526274,
        27.495148
      ],
      [
        88.526154,
        27.49545
      ],
      [
        88.526144,
        27.495483
      ],
      [
        88.526144,
        27.495539
      ],
      [
        88.526155,
        27.495583
      ],
      [
        88.526176,
        27.495625
      ],
      [
        88.526224,
        27.4957
      ],
      [
        88.526291,
        27.495777
      ],
      [
        88.526569,
        27.495967
      ],
      [
        88.52662,
        27.496023
      ],
      [
        88.526646,
        27.49608
      ],
      [
        88.526655,
        27.496158
      ],
      [
        88.526655,
        27.49626
      ],
      [
        88.52664,
        27.496334
      ],
      [
        88.526486,
        27.496614
      ],
      [
        88.526451,
        27.496748
      ],
      [
        88.526444,
        27.496831
      ],
      [
        88.526448,
        27.496914
      ],
      [
        88.526475,
        27.497024
      ],
      [
        88.526478,
        27.497032
      ],
      [
        88.526482,
        27.497036
      ],
      [
        88.526616,
        27.497143
      ],
      [
        88.526659,
        27.49718
      ],
      [
        88.52673,
        27.497271
      ],
      [
        88.526777,
        27.497325
      ],
      [
        88.526817,
        27.497398
      ],
      [
        88.526829,
        27.497436
      ],
      [
        88.526832,
        27.497466
      ],
      [
        88.526825,
        27.497509
      ],
      [
        88.526781,
        27.497665
      ],
      [
        88.526772,
        27.49777
      ],
      [
        88.526777,
        27.497821
      ],
      [
        88.526788,
        27.497851
      ],
      [
        88.526803,
        27.497873
      ],
      [
        88.527186,
        27.498237
      ],
      [
        88.527457,
        27.498465
      ],
      [
        88.527613,
        27.498637
      ],
      [
        88.527693,
        27.498704
      ],
      [
        88.527756,
        27.498734
      ],
      [
        88.528002,
        27.498823
      ],
      [
        88.528273,
        27.498927
      ],
      [
        88.528452,
        27.499031
      ],
      [
        88.528579,
        27.499142
      ],
      [
        88.528621,
        27.4992
      ],
      [
        88.528645,
        27.499279
      ],
      [
        88.528646,
        27.499403
      ],
      [
        88.528626,
        27.49975
      ],
      [
        88.528619,
        27.5001
      ],
      [
        88.528447,
        27.50074
      ],
      [
        88.528294,
        27.500976
      ],
      [
        88.5282,
        27.501099
      ],
      [
        88.528177,
        27.50116
      ],
      [
        88.528165,
        27.501249
      ],
      [
        88.528157,
        27.501502
      ],
      [
        88.528169,
        27.501563
      ],
      [
        88.528208,
        27.501632
      ],
      [
        88.528313,
        27.50173
      ],
      [
        88.528471,
        27.501905
      ],
      [
        88.528499,
        27.501956
      ],
      [
        88.528518,
        27.502022
      ],
      [
        88.528521,
        27.502066
      ],
      [
        88.528509,
        27.502139
      ],
      [
        88.528456,
        27.502241
      ],
      [
        88.528447,
        27.502286
      ],
      [
        88.52845,
        27.502394
      ],
      [
        88.528454,
        27.502411
      ],
      [
        88.528461,
        27.502423
      ],
      [
        88.52847,
        27.50243
      ],
      [
        88.528574,
        27.50248
      ],
      [
        88.528607,
        27.502517
      ],
      [
        88.528641,
        27.502579
      ],
      [
        88.528664,
        27.502666
      ],
      [
        88.528675,
        27.502765
      ],
      [
        88.528554,
        27.502974
      ],
      [
        88.528312,
        27.503342
      ],
      [
        88.52819,
        27.503557
      ],
      [
        88.528174,
        27.503685
      ],
      [
        88.528183,
        27.503766
      ],
      [
        88.52845,
        27.504364
      ],
      [
        88.528632,
        27.504759
      ],
      [
        88.528835,
        27.505283
      ],
      [
        88.528888,
        27.505429
      ],
      [
        88.528919,
        27.505527
      ],
      [
        88.528928,
        27.505655
      ],
      [
        88.528918,
        27.505826
      ],
      [
        88.52889,
        27.505979
      ],
      [
        88.528632,
        27.506445
      ],
      [
        88.528621,
        27.506536
      ],
      [
        88.528642,
        27.506642
      ],
      [
        88.528752,
        27.506845
      ],
      [
        88.529031,
        27.507249
      ],
      [
        88.5291,
        27.507423
      ],
      [
        88.529116,
        27.507505
      ],
      [
        88.529114,
        27.507576
      ],
      [
        88.529093,
        27.507668
      ],
      [
        88.529061,
        27.507744
      ],
      [
        88.529034,
        27.507772
      ],
      [
        88.529005,
        27.507787
      ],
      [
        88.528975,
        27.507797
      ],
      [
        88.528928,
        27.507801
      ],
      [
        88.528858,
        27.507793
      ],
      [
        88.5288,
        27.507774
      ],
      [
        88.528613,
        27.507711
      ],
      [
        88.528519,
        27.507697
      ],
      [
        88.528448,
        27.507706
      ],
      [
        88.528295,
        27.507748
      ],
      [
        88.528063,
        27.507844
      ],
      [
        88.52801,
        27.507864
      ],
      [
        88.527983,
        27.50789
      ],
      [
        88.527973,
        27.507925
      ],
      [
        88.527969,
        27.507961
      ],
      [
        88.527973,
        27.507992
      ],
      [
        88.527981,
        27.508026
      ],
      [
        88.528024,
        27.508086
      ],
      [
        88.528403,
        27.508567
      ],
      [
        88.528773,
        27.508889
      ],
      [
        88.52913,
        27.509059
      ],
      [
        88.529221,
        27.509128
      ],
      [
        88.529384,
        27.50929
      ],
      [
        88.529438,
        27.509367
      ],
      [
        88.529517,
        27.509516
      ],
      [
        88.529651,
        27.509815
      ],
      [
        88.52971,
        27.509903
      ],
      [
        88.529926,
        27.510157
      ],
      [
        88.529998,
        27.510252
      ],
      [
        88.530062,
        27.510378
      ],
      [
        88.530084,
        27.51047
      ],
      [
        88.530098,
        27.510787
      ],
      [
        88.530115,
        27.510971
      ],
      [
        88.530112,
        27.511007
      ],
      [
        88.530094,
        27.511039
      ],
      [
        88.530074,
        27.511056
      ],
      [
        88.530053,
        27.511066
      ],
      [
        88.530023,
        27.511075
      ],
      [
        88.529946,
        27.511076
      ],
      [
        88.529891,
        27.511047
      ],
      [
        88.529884,
        27.510992
      ],
      [
        88.529917,
        27.510906
      ],
      [
        88.529957,
        27.510767
      ],
      [
        88.529879,
        27.510503
      ],
      [
        88.52983,
        27.510421
      ],
      [
        88.529704,
        27.510282
      ],
      [
        88.529377,
        27.510004
      ],
      [
        88.529022,
        27.509581
      ],
      [
        88.528634,
        27.509317
      ],
      [
        88.52818,
        27.50906
      ],
      [
        88.527701,
        27.508833
      ],
      [
        88.52742,
        27.508634
      ],
      [
        88.527254,
        27.508571
      ],
      [
        88.527083,
        27.508534
      ],
      [
        88.526974,
        27.508529
      ],
      [
        88.526894,
        27.508548
      ],
      [
        88.526716,
        27.508547
      ],
      [
        88.526679,
        27.508645
      ],
      [
        88.526635,
        27.50876
      ],
      [
        88.526416,
        27.509429
      ],
      [
        88.526396,
        27.509535
      ],
      [
        88.526365,
        27.50967
      ],
      [
        88.526397,
        27.509824
      ],
      [
        88.526509,
        27.510097
      ],
      [
        88.526577,
        27.510332
      ],
      [
        88.526747,
        27.510561
      ],
      [
        88.526869,
        27.510825
      ],
      [
        88.52704,
        27.511008
      ],
      [
        88.527111,
        27.511224
      ],
      [
        88.527169,
        27.511401
      ],
      [
        88.527272,
        27.511709
      ],
      [
        88.527319,
        27.511929
      ],
      [
        88.527437,
        27.512105
      ],
      [
        88.527596,
        27.512282
      ],
      [
        88.527598,
        27.512495
      ],
      [
        88.52762,
        27.512601
      ],
      [
        88.527593,
        27.512708
      ],
      [
        88.527612,
        27.512939
      ],
      [
        88.527654,
        27.513057
      ],
      [
        88.527702,
        27.513114
      ],
      [
        88.52777,
        27.513174
      ],
      [
        88.527856,
        27.513217
      ],
      [
        88.527929,
        27.513303
      ],
      [
        88.528084,
        27.513522
      ],
      [
        88.528138,
        27.513579
      ],
      [
        88.528334,
        27.51371
      ],
      [
        88.528572,
        27.513914
      ],
      [
        88.528749,
        27.514052
      ],
      [
        88.528827,
        27.514145
      ],
      [
        88.528881,
        27.514273
      ],
      [
        88.528902,
        27.514438
      ],
      [
        88.528912,
        27.514629
      ],
      [
        88.528886,
        27.514726
      ],
      [
        88.528848,
        27.514888
      ],
      [
        88.528867,
        27.515185
      ],
      [
        88.528896,
        27.515323
      ],
      [
        88.528977,
        27.515557
      ],
      [
        88.529053,
        27.515714
      ],
      [
        88.529248,
        27.51586
      ],
      [
        88.529291,
        27.516031
      ],
      [
        88.529263,
        27.516236
      ],
      [
        88.529296,
        27.51634
      ],
      [
        88.529367,
        27.516396
      ],
      [
        88.529514,
        27.516433
      ],
      [
        88.529634,
        27.516584
      ],
      [
        88.529689,
        27.516724
      ],
      [
        88.529689,
        27.516795
      ],
      [
        88.529696,
        27.516871
      ],
      [
        88.529701,
        27.516947
      ],
      [
        88.529735,
        27.517032
      ],
      [
        88.529772,
        27.517099
      ],
      [
        88.529825,
        27.517173
      ],
      [
        88.529852,
        27.51731
      ],
      [
        88.529849,
        27.517435
      ],
      [
        88.52991,
        27.517597
      ],
      [
        88.529999,
        27.517763
      ],
      [
        88.530111,
        27.517897
      ],
      [
        88.530179,
        27.517997
      ],
      [
        88.530275,
        27.518143
      ],
      [
        88.530405,
        27.51842
      ],
      [
        88.530536,
        27.51875
      ],
      [
        88.530648,
        27.519016
      ],
      [
        88.530781,
        27.519231
      ],
      [
        88.530817,
        27.51943
      ],
      [
        88.530852,
        27.519582
      ],
      [
        88.530694,
        27.52003
      ],
      [
        88.530496,
        27.520516
      ],
      [
        88.530405,
        27.520726
      ],
      [
        88.530165,
        27.521082
      ],
      [
        88.52997,
        27.521312
      ],
      [
        88.529623,
        27.521496
      ],
      [
        88.529162,
        27.521804
      ],
      [
        88.528489,
        27.522155
      ],
      [
        88.528083,
        27.522581
      ],
      [
        88.527775,
        27.522796
      ],
      [
        88.527652,
        27.522966
      ],
      [
        88.527432,
        27.523132
      ],
      [
        88.527283,
        27.523157
      ],
      [
        88.526373,
        27.523272
      ],
      [
        88.526144,
        27.52338
      ],
      [
        88.526077,
        27.523487
      ],
      [
        88.525455,
        27.523929
      ],
      [
        88.525318,
        27.524013
      ],
      [
        88.525122,
        27.524142
      ],
      [
        88.525036,
        27.524227
      ],
      [
        88.524863,
        27.52438
      ],
      [
        88.524677,
        27.524504
      ],
      [
        88.524558,
        27.524538
      ],
      [
        88.524339,
        27.524533
      ],
      [
        88.523994,
        27.524521
      ],
      [
        88.523728,
        27.524572
      ],
      [
        88.523494,
        27.524691
      ],
      [
        88.523383,
        27.524732
      ],
      [
        88.523258,
        27.524776
      ],
      [
        88.523012,
        27.524891
      ],
      [
        88.522597,
        27.525063
      ],
      [
        88.522336,
        27.525231
      ],
      [
        88.522078,
        27.525452
      ],
      [
        88.521818,
        27.525564
      ],
      [
        88.521464,
        27.52568
      ],
      [
        88.521051,
        27.525867
      ],
      [
        88.520506,
        27.525985
      ],
      [
        88.519905,
        27.526207
      ],
      [
        88.519664,
        27.526422
      ],
      [
        88.519248,
        27.526751
      ],
      [
        88.519059,
        27.526847
      ],
      [
        88.518965,
        27.526855
      ],
      [
        88.518923,
        27.526853
      ],
      [
        88.518899,
        27.526815
      ],
      [
        88.518898,
        27.52678
      ],
      [
        88.518956,
        27.526721
      ],
      [
        88.519085,
        27.526678
      ],
      [
        88.519216,
        27.526606
      ],
      [
        88.519299,
        27.526475
      ],
      [
        88.519307,
        27.526445
      ],
      [
        88.519302,
        27.526398
      ],
      [
        88.519268,
        27.52637
      ],
      [
        88.519233,
        27.526365
      ],
      [
        88.519176,
        27.526372
      ],
      [
        88.519116,
        27.526409
      ],
      [
        88.518961,
        27.526506
      ],
      [
        88.518727,
        27.5266
      ],
      [
        88.518633,
        27.526672
      ],
      [
        88.518575,
        27.526744
      ],
      [
        88.518492,
        27.526996
      ],
      [
        88.518416,
        27.527047
      ],
      [
        88.518302,
        27.527074
      ],
      [
        88.517801,
        27.527108
      ],
      [
        88.517453,
        27.527107
      ],
      [
        88.517068,
        27.52708
      ],
      [
        88.516514,
        27.526838
      ],
      [
        88.51632,
        27.526753
      ],
      [
        88.516072,
        27.526634
      ],
      [
        88.515903,
        27.526596
      ],
      [
        88.515738,
        27.526645
      ],
      [
        88.515303,
        27.526877
      ],
      [
        88.515198,
        27.526965
      ],
      [
        88.515135,
        27.527064
      ],
      [
        88.515067,
        27.527207
      ],
      [
        88.514754,
        27.527286
      ],
      [
        88.5146,
        27.527437
      ],
      [
        88.514429,
        27.527792
      ],
      [
        88.514247,
        27.528054
      ],
      [
        88.514097,
        27.528196
      ],
      [
        88.51402,
        27.528251
      ],
      [
        88.513867,
        27.52829
      ],
      [
        88.5135,
        27.528288
      ],
      [
        88.51315,
        27.52829
      ],
      [
        88.513003,
        27.528324
      ],
      [
        88.512907,
        27.52839
      ],
      [
        88.512825,
        27.528547
      ],
      [
        88.512815,
        27.528751
      ],
      [
        88.512733,
        27.52885
      ],
      [
        88.512682,
        27.529008
      ],
      [
        88.512665,
        27.529179
      ],
      [
        88.512702,
        27.529355
      ],
      [
        88.512792,
        27.529596
      ],
      [
        88.512891,
        27.529698
      ],
      [
        88.512926,
        27.5298
      ],
      [
        88.51285,
        27.529916
      ],
      [
        88.512825,
        27.53004
      ],
      [
        88.512838,
        27.530235
      ],
      [
        88.513066,
        27.530766
      ],
      [
        88.513273,
        27.531089
      ],
      [
        88.513321,
        27.531453
      ],
      [
        88.51324,
        27.531738
      ],
      [
        88.512996,
        27.532169
      ],
      [
        88.512763,
        27.532447
      ],
      [
        88.512581,
        27.53259
      ],
      [
        88.512189,
        27.532804
      ],
      [
        88.511886,
        27.532792
      ],
      [
        88.51147,
        27.532647
      ],
      [
        88.510896,
        27.532483
      ],
      [
        88.510199,
        27.532638
      ],
      [
        88.509456,
        27.532588
      ],
      [
        88.508933,
        27.532573
      ],
      [
        88.508487,
        27.532709
      ],
      [
        88.508243,
        27.532962
      ],
      [
        88.507921,
        27.533099
      ],
      [
        88.507499,
        27.533162
      ],
      [
        88.506389,
        27.533825
      ],
      [
        88.506059,
        27.533918
      ],
      [
        88.505932,
        27.533895
      ],
      [
        88.5058,
        27.533845
      ],
      [
        88.505698,
        27.533842
      ],
      [
        88.505602,
        27.533867
      ],
      [
        88.505551,
        27.533926
      ],
      [
        88.505513,
        27.534023
      ],
      [
        88.505471,
        27.534116
      ],
      [
        88.505416,
        27.534181
      ],
      [
        88.504863,
        27.534544
      ],
      [
        88.503204,
        27.535076
      ],
      [
        88.502513,
        27.53524
      ],
      [
        88.501909,
        27.535306
      ],
      [
        88.501041,
        27.535355
      ],
      [
        88.500702,
        27.535498
      ],
      [
        88.50052,
        27.535607
      ],
      [
        88.500338,
        27.535709
      ],
      [
        88.500243,
        27.535683
      ],
      [
        88.500232,
        27.535588
      ],
      [
        88.500349,
        27.535486
      ],
      [
        88.500417,
        27.535423
      ],
      [
        88.500433,
        27.535416
      ],
      [
        88.500455,
        27.535403
      ],
      [
        88.50055,
        27.535319
      ],
      [
        88.500487,
        27.535294
      ],
      [
        88.500187,
        27.535357
      ],
      [
        88.500071,
        27.535366
      ],
      [
        88.500018,
        27.53536
      ],
      [
        88.499976,
        27.535362
      ],
      [
        88.499937,
        27.535354
      ],
      [
        88.499901,
        27.535293
      ],
      [
        88.500034,
        27.53521
      ],
      [
        88.500136,
        27.535184
      ],
      [
        88.500161,
        27.535128
      ],
      [
        88.499865,
        27.535142
      ],
      [
        88.49959,
        27.535126
      ],
      [
        88.499558,
        27.535115
      ],
      [
        88.499521,
        27.53511
      ],
      [
        88.49946,
        27.535089
      ],
      [
        88.499383,
        27.535105
      ],
      [
        88.499269,
        27.535128
      ],
      [
        88.499183,
        27.535143
      ],
      [
        88.498994,
        27.535136
      ],
      [
        88.498926,
        27.535179
      ],
      [
        88.498717,
        27.535222
      ],
      [
        88.498432,
        27.535236
      ],
      [
        88.497946,
        27.53527
      ],
      [
        88.497516,
        27.535387
      ],
      [
        88.497299,
        27.535366
      ],
      [
        88.497012,
        27.535441
      ],
      [
        88.496644,
        27.535425
      ],
      [
        88.496407,
        27.53534
      ],
      [
        88.496243,
        27.535447
      ],
      [
        88.496041,
        27.535514
      ],
      [
        88.495932,
        27.535626
      ],
      [
        88.495828,
        27.535677
      ],
      [
        88.495744,
        27.535697
      ],
      [
        88.495603,
        27.535726
      ],
      [
        88.495525,
        27.535762
      ],
      [
        88.495477,
        27.53579
      ],
      [
        88.49543,
        27.535795
      ],
      [
        88.495377,
        27.535839
      ],
      [
        88.495129,
        27.535879
      ],
      [
        88.49479,
        27.53599
      ],
      [
        88.494698,
        27.536025
      ],
      [
        88.494619,
        27.536136
      ],
      [
        88.494527,
        27.53621
      ],
      [
        88.494749,
        27.536232
      ],
      [
        88.494963,
        27.536185
      ],
      [
        88.495144,
        27.536181
      ],
      [
        88.49532,
        27.536185
      ],
      [
        88.495702,
        27.536009
      ],
      [
        88.495787,
        27.536092
      ],
      [
        88.495783,
        27.536209
      ],
      [
        88.49545,
        27.536342
      ],
      [
        88.494891,
        27.536447
      ],
      [
        88.494418,
        27.536504
      ],
      [
        88.494013,
        27.536506
      ],
      [
        88.493534,
        27.536347
      ],
      [
        88.492957,
        27.536113
      ],
      [
        88.49278,
        27.536504
      ],
      [
        88.492257,
        27.536463
      ],
      [
        88.491902,
        27.536542
      ],
      [
        88.491693,
        27.536686
      ],
      [
        88.491522,
        27.53683
      ],
      [
        88.491275,
        27.536936
      ],
      [
        88.490927,
        27.536747
      ],
      [
        88.490741,
        27.536706
      ],
      [
        88.490479,
        27.536611
      ],
      [
        88.490372,
        27.536584
      ],
      [
        88.490326,
        27.536628
      ],
      [
        88.490383,
        27.536691
      ],
      [
        88.490617,
        27.536801
      ],
      [
        88.490718,
        27.536938
      ],
      [
        88.490712,
        27.536977
      ],
      [
        88.490666,
        27.536989
      ],
      [
        88.490269,
        27.536892
      ],
      [
        88.490139,
        27.536877
      ],
      [
        88.490045,
        27.536915
      ],
      [
        88.489494,
        27.537244
      ],
      [
        88.489118,
        27.537153
      ],
      [
        88.488797,
        27.537739
      ],
      [
        88.488575,
        27.537857
      ],
      [
        88.488414,
        27.538228
      ],
      [
        88.488162,
        27.538423
      ],
      [
        88.488024,
        27.538671
      ],
      [
        88.488087,
        27.538766
      ],
      [
        88.488282,
        27.538481
      ],
      [
        88.488561,
        27.538324
      ],
      [
        88.488813,
        27.538105
      ],
      [
        88.488999,
        27.538014
      ],
      [
        88.489108,
        27.538081
      ],
      [
        88.489059,
        27.538147
      ],
      [
        88.488797,
        27.538281
      ],
      [
        88.488582,
        27.538887
      ],
      [
        88.487963,
        27.539256
      ],
      [
        88.48794,
        27.539564
      ],
      [
        88.487856,
        27.539694
      ],
      [
        88.487764,
        27.539793
      ],
      [
        88.487431,
        27.539817
      ],
      [
        88.487124,
        27.53985
      ],
      [
        88.486816,
        27.539796
      ],
      [
        88.486301,
        27.539998
      ],
      [
        88.485383,
        27.540445
      ],
      [
        88.485017,
        27.540747
      ],
      [
        88.485046,
        27.540899
      ],
      [
        88.485336,
        27.540698
      ],
      [
        88.48552,
        27.540591
      ],
      [
        88.485474,
        27.540735
      ],
      [
        88.485018,
        27.540958
      ],
      [
        88.484785,
        27.541149
      ],
      [
        88.484333,
        27.541476
      ],
      [
        88.484073,
        27.541585
      ],
      [
        88.484096,
        27.541401
      ],
      [
        88.484124,
        27.540926
      ],
      [
        88.484121,
        27.540596
      ],
      [
        88.484219,
        27.540174
      ],
      [
        88.484149,
        27.539194
      ],
      [
        88.484028,
        27.538973
      ],
      [
        88.483232,
        27.538528
      ],
      [
        88.482654,
        27.538699
      ],
      [
        88.482193,
        27.538595
      ],
      [
        88.481898,
        27.53898
      ],
      [
        88.48142,
        27.539598
      ],
      [
        88.480738,
        27.539945
      ],
      [
        88.479563,
        27.541049
      ],
      [
        88.479177,
        27.541058
      ],
      [
        88.478833,
        27.541296
      ],
      [
        88.478636,
        27.541296
      ],
      [
        88.477943,
        27.541929
      ],
      [
        88.477133,
        27.542333
      ],
      [
        88.476784,
        27.542875
      ],
      [
        88.47613,
        27.543622
      ],
      [
        88.475513,
        27.544197
      ],
      [
        88.475316,
        27.544288
      ],
      [
        88.47531,
        27.544431
      ],
      [
        88.475518,
        27.544411
      ],
      [
        88.47634,
        27.543813
      ],
      [
        88.476682,
        27.543508
      ],
      [
        88.477594,
        27.543142
      ],
      [
        88.477982,
        27.543213
      ],
      [
        88.479064,
        27.543046
      ],
      [
        88.479509,
        27.542666
      ],
      [
        88.479756,
        27.542599
      ],
      [
        88.48002,
        27.542343
      ],
      [
        88.480282,
        27.542338
      ],
      [
        88.480518,
        27.542428
      ],
      [
        88.480952,
        27.541938
      ],
      [
        88.48136,
        27.541924
      ],
      [
        88.481644,
        27.541791
      ],
      [
        88.481748,
        27.541891
      ],
      [
        88.481585,
        27.542029
      ],
      [
        88.481088,
        27.542062
      ],
      [
        88.480562,
        27.543275
      ],
      [
        88.480348,
        27.543361
      ],
      [
        88.480187,
        27.543637
      ],
      [
        88.479857,
        27.543815
      ],
      [
        88.47959,
        27.543974
      ],
      [
        88.479393,
        27.544207
      ],
      [
        88.478662,
        27.544473
      ],
      [
        88.478163,
        27.544469
      ],
      [
        88.477894,
        27.544659
      ],
      [
        88.477767,
        27.545026
      ],
      [
        88.477208,
        27.545577
      ],
      [
        88.476875,
        27.546019
      ],
      [
        88.476845,
        27.546747
      ],
      [
        88.477129,
        27.547527
      ],
      [
        88.476983,
        27.547784
      ],
      [
        88.476693,
        27.547964
      ],
      [
        88.476689,
        27.548336
      ],
      [
        88.476468,
        27.548568
      ],
      [
        88.476446,
        27.548787
      ],
      [
        88.476237,
        27.548802
      ],
      [
        88.475652,
        27.548626
      ],
      [
        88.475432,
        27.548806
      ],
      [
        88.474999,
        27.548812
      ],
      [
        88.47444,
        27.548949
      ],
      [
        88.474096,
        27.548792
      ],
      [
        88.473567,
        27.549102
      ],
      [
        88.472975,
        27.54903
      ],
      [
        88.472328,
        27.548983
      ],
      [
        88.471953,
        27.54913
      ],
      [
        88.4713,
        27.549386
      ],
      [
        88.471126,
        27.549454
      ],
      [
        88.470863,
        27.550001
      ],
      [
        88.470492,
        27.550247
      ],
      [
        88.469901,
        27.550167
      ],
      [
        88.469413,
        27.550304
      ],
      [
        88.469413,
        27.550571
      ],
      [
        88.469494,
        27.550742
      ],
      [
        88.470068,
        27.551327
      ],
      [
        88.470075,
        27.55166
      ],
      [
        88.469864,
        27.551988
      ],
      [
        88.469984,
        27.552055
      ],
      [
        88.4704,
        27.551679
      ],
      [
        88.470309,
        27.551237
      ],
      [
        88.470379,
        27.550994
      ],
      [
        88.470556,
        27.550956
      ],
      [
        88.470815,
        27.551171
      ],
      [
        88.471307,
        27.551341
      ],
      [
        88.471496,
        27.551171
      ],
      [
        88.4715,
        27.550894
      ],
      [
        88.471741,
        27.550813
      ],
      [
        88.472267,
        27.550813
      ],
      [
        88.472589,
        27.550304
      ],
      [
        88.472986,
        27.549981
      ],
      [
        88.473106,
        27.5501
      ],
      [
        88.472719,
        27.550457
      ],
      [
        88.472596,
        27.550814
      ],
      [
        88.472263,
        27.551137
      ],
      [
        88.472237,
        27.551694
      ],
      [
        88.471983,
        27.551888
      ],
      [
        88.471843,
        27.552345
      ],
      [
        88.471577,
        27.552517
      ],
      [
        88.471609,
        27.552883
      ],
      [
        88.471564,
        27.553672
      ],
      [
        88.47142,
        27.554024
      ],
      [
        88.471522,
        27.554109
      ],
      [
        88.471935,
        27.553339
      ],
      [
        88.471967,
        27.552844
      ],
      [
        88.472025,
        27.552763
      ],
      [
        88.472199,
        27.552699
      ],
      [
        88.472292,
        27.552616
      ],
      [
        88.472437,
        27.552473
      ],
      [
        88.472621,
        27.55244
      ],
      [
        88.473159,
        27.552493
      ],
      [
        88.474118,
        27.552178
      ],
      [
        88.47532,
        27.551665
      ],
      [
        88.475867,
        27.551451
      ],
      [
        88.476008,
        27.551546
      ],
      [
        88.475609,
        27.551684
      ],
      [
        88.475121,
        27.552017
      ],
      [
        88.474842,
        27.552164
      ],
      [
        88.474842,
        27.552483
      ],
      [
        88.475483,
        27.552445
      ],
      [
        88.476038,
        27.552485
      ],
      [
        88.476269,
        27.552419
      ],
      [
        88.476441,
        27.552285
      ],
      [
        88.476673,
        27.552117
      ],
      [
        88.47679,
        27.552114
      ],
      [
        88.476885,
        27.552167
      ],
      [
        88.477243,
        27.552769
      ],
      [
        88.477352,
        27.552883
      ],
      [
        88.477484,
        27.552916
      ],
      [
        88.477616,
        27.552906
      ],
      [
        88.477923,
        27.552857
      ],
      [
        88.478255,
        27.552825
      ],
      [
        88.479225,
        27.552454
      ],
      [
        88.479661,
        27.552478
      ],
      [
        88.480169,
        27.552093
      ],
      [
        88.480689,
        27.552019
      ],
      [
        88.481035,
        27.55188
      ],
      [
        88.481405,
        27.551783
      ],
      [
        88.481729,
        27.551632
      ],
      [
        88.481886,
        27.551452
      ],
      [
        88.482002,
        27.55122
      ],
      [
        88.482095,
        27.55105
      ],
      [
        88.482223,
        27.550763
      ],
      [
        88.482266,
        27.550593
      ],
      [
        88.482347,
        27.55045
      ],
      [
        88.482487,
        27.550344
      ],
      [
        88.48276,
        27.550295
      ],
      [
        88.483147,
        27.55025
      ],
      [
        88.483556,
        27.550163
      ],
      [
        88.483931,
        27.55008
      ],
      [
        88.484241,
        27.549951
      ],
      [
        88.484748,
        27.549563
      ],
      [
        88.485055,
        27.549393
      ],
      [
        88.485572,
        27.549207
      ],
      [
        88.485816,
        27.549084
      ],
      [
        88.48591,
        27.549019
      ],
      [
        88.485932,
        27.549072
      ],
      [
        88.485864,
        27.549136
      ],
      [
        88.485757,
        27.549208
      ],
      [
        88.485702,
        27.549295
      ],
      [
        88.485736,
        27.549363
      ],
      [
        88.485868,
        27.549344
      ],
      [
        88.485987,
        27.549253
      ],
      [
        88.486132,
        27.54914
      ],
      [
        88.486323,
        27.54911
      ],
      [
        88.486498,
        27.549121
      ],
      [
        88.486711,
        27.549061
      ],
      [
        88.487005,
        27.549015
      ],
      [
        88.487247,
        27.548925
      ],
      [
        88.487855,
        27.548782
      ],
      [
        88.488063,
        27.548688
      ],
      [
        88.488249,
        27.548542
      ],
      [
        88.488406,
        27.548321
      ],
      [
        88.488554,
        27.5482
      ],
      [
        88.488734,
        27.54814
      ],
      [
        88.48905,
        27.548059
      ],
      [
        88.48957,
        27.547853
      ],
      [
        88.489721,
        27.547747
      ],
      [
        88.489989,
        27.547732
      ],
      [
        88.490198,
        27.547743
      ],
      [
        88.490411,
        27.547822
      ],
      [
        88.490543,
        27.547875
      ],
      [
        88.490585,
        27.548083
      ],
      [
        88.490441,
        27.548238
      ],
      [
        88.490189,
        27.548396
      ],
      [
        88.490011,
        27.548513
      ],
      [
        88.489696,
        27.548825
      ],
      [
        88.489543,
        27.548912
      ],
      [
        88.489485,
        27.549008
      ],
      [
        88.489385,
        27.54912
      ],
      [
        88.489428,
        27.549199
      ],
      [
        88.489534,
        27.54921
      ],
      [
        88.48967,
        27.549043
      ],
      [
        88.489823,
        27.548891
      ],
      [
        88.489968,
        27.548823
      ],
      [
        88.490113,
        27.548823
      ],
      [
        88.490385,
        27.548921
      ],
      [
        88.490658,
        27.549057
      ],
      [
        88.490803,
        27.549151
      ],
      [
        88.490913,
        27.549246
      ],
      [
        88.490909,
        27.549317
      ],
      [
        88.490798,
        27.54928
      ],
      [
        88.490602,
        27.549162
      ],
      [
        88.490402,
        27.549102
      ],
      [
        88.490172,
        27.549098
      ],
      [
        88.489959,
        27.549136
      ],
      [
        88.489836,
        27.54923
      ],
      [
        88.489819,
        27.549325
      ],
      [
        88.489951,
        27.54931
      ],
      [
        88.490126,
        27.549261
      ],
      [
        88.490364,
        27.549272
      ],
      [
        88.490598,
        27.549321
      ],
      [
        88.490739,
        27.549389
      ],
      [
        88.490768,
        27.549472
      ],
      [
        88.490688,
        27.549498
      ],
      [
        88.49053,
        27.549461
      ],
      [
        88.490236,
        27.549423
      ],
      [
        88.490079,
        27.549437
      ],
      [
        88.489831,
        27.549621
      ],
      [
        88.489666,
        27.549787
      ],
      [
        88.489434,
        27.550113
      ],
      [
        88.489225,
        27.550355
      ],
      [
        88.48901,
        27.550525
      ],
      [
        88.488933,
        27.550631
      ],
      [
        88.48887,
        27.550756
      ],
      [
        88.488844,
        27.550861
      ],
      [
        88.488908,
        27.550903
      ],
      [
        88.489053,
        27.550756
      ],
      [
        88.489283,
        27.550548
      ],
      [
        88.489529,
        27.550382
      ],
      [
        88.489687,
        27.55031
      ],
      [
        88.489828,
        27.550223
      ],
      [
        88.489968,
        27.550087
      ],
      [
        88.490117,
        27.549993
      ],
      [
        88.4903,
        27.54994
      ],
      [
        88.490441,
        27.549876
      ],
      [
        88.490675,
        27.549827
      ],
      [
        88.4907,
        27.549929
      ],
      [
        88.490667,
        27.550056
      ],
      [
        88.490482,
        27.550158
      ],
      [
        88.490401,
        27.550277
      ],
      [
        88.490352,
        27.550465
      ],
      [
        88.490382,
        27.550648
      ],
      [
        88.490442,
        27.550844
      ],
      [
        88.490416,
        27.551048
      ],
      [
        88.490382,
        27.551244
      ],
      [
        88.490331,
        27.551448
      ],
      [
        88.490271,
        27.551648
      ],
      [
        88.490225,
        27.551882
      ],
      [
        88.490182,
        27.552018
      ],
      [
        88.490144,
        27.552222
      ],
      [
        88.490046,
        27.552482
      ],
      [
        88.48991,
        27.552807
      ],
      [
        88.489756,
        27.553014
      ],
      [
        88.489471,
        27.553215
      ],
      [
        88.489233,
        27.553407
      ],
      [
        88.489062,
        27.553615
      ],
      [
        88.48893,
        27.553781
      ],
      [
        88.48879,
        27.553917
      ],
      [
        88.488675,
        27.554
      ],
      [
        88.488534,
        27.554132
      ],
      [
        88.488287,
        27.554271
      ],
      [
        88.488143,
        27.554419
      ],
      [
        88.488006,
        27.554585
      ],
      [
        88.487908,
        27.554743
      ],
      [
        88.487781,
        27.554992
      ],
      [
        88.487572,
        27.555294
      ]
    ],
    "type": "LineString"
  }
};
