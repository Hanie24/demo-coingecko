export interface TradingVolumeChartResponse {
  total_volumes: [number, number][];
}

export interface TradingVolumeDataPoint {
  day: string;
  volume: number;
}
