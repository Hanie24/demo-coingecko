import { fetchCoinGecko } from "../apiClient";
import { COINGECKO_ENDPOINTS } from "../endpoints";
import type { TradingVolumeChartResponse } from "./tradingVolumeChart.types";

export function getTradingVolumeChart() {
  return fetchCoinGecko<TradingVolumeChartResponse>(
    COINGECKO_ENDPOINTS.BITCOIN_MARKET_CHART,
    {
      vs_currency: "usd",
      days: 7,
      interval: "daily",
    },
  );
}
