import { API_CONFIG } from "../config/api.config";

export async function fetchCoinGecko<T>(
  endpoint: string,
  params?: Record<string, string | number>,
): Promise<T> {
  const url = new URL(`${API_CONFIG.COINGECKO_BASE_URL}${endpoint}`);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, String(value));
    });
  }

  const res = await fetch(url.toString());

  if (!res.ok) {
    throw new Error("CoinGecko request failed");
  }

  return res.json();
}
