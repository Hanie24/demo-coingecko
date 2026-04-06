import { fetchCoinGecko } from "../apiClient";
import { COINGECKO_ENDPOINTS } from "../endpoints";
import type { CoinWithSparkline } from "./marketCapChart.types";

export function getMarketCapChart() {
  return fetchCoinGecko<CoinWithSparkline[]>(COINGECKO_ENDPOINTS.MARKETS, {
    vs_currency: "usd",
    order: "market_cap_desc",
    per_page: 50,
    page: 1,
    sparkline: "true",
  });
}
