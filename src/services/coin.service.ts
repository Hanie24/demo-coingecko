import type { Coin } from "../types/coin";
import { fetchCoinGecko } from "./apiClient";
import { COINGECKO_ENDPOINTS } from "./endpoints";

export function getTopGainers() {
  return fetchCoinGecko<Coin[]>(COINGECKO_ENDPOINTS.MARKETS, {
    vs_currency: "usd",
    order: "price_change_percentage_24h_desc",
    per_page: 3,
    page: 1,
    price_change_percentage: "24h",
  });
}
