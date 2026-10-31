export interface AlertItem {
  id: string;
  pointId: string;
  stationName: string;
  section: string;
  previousTier: 'GREEN' | 'YELLOW' | 'RED';
  newTier: 'GREEN' | 'YELLOW' | 'RED';
  modelScore: number;
  scenario: string;
  timestamp: string;
  isRead: boolean;
  latitude: number;
  longitude: number;
  elevation_m: number;
  advisoryText: string;
  isRiskEased?: boolean;
}
