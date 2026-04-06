export interface CoinWithSparkline {
  market_cap: number;
  current_price: number;
  sparkline_in_7d: { price: number[] };
}

export interface MarketCapDataPoint {
  day: string;
  marketCap: number;
}
