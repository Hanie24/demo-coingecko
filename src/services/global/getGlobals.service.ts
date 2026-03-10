import { fetchCoinGecko } from "../apiClient";
import { COINGECKO_ENDPOINTS } from "../endpoints";
import type { GlobalStats } from "./globals.types";

export function getGlobals() {
  return fetchCoinGecko<GlobalStats>(COINGECKO_ENDPOINTS.GLOBAL);
}
