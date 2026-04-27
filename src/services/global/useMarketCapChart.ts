import { useEffect, useState } from "react";
import { getMarketCapChart } from "./getMarketCapChart.service";
import type { MarketCapDataPoint } from "./marketCapChart.types";
import { DAYS, HOURS_PER_DAY } from "../../utils/constants";

export function useMarketCapChart() {
  const [data, setData] = useState<MarketCapDataPoint[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const coins = await getMarketCapChart();

      const points: MarketCapDataPoint[] = Array.from(
        { length: DAYS },
        (_, i) => {
          const sparklineIndex = i * HOURS_PER_DAY;

          const totalMarketCap = coins.reduce((sum, coin) => {
            const sparklinePrice = coin.sparkline_in_7d.price[sparklineIndex];
            if (!sparklinePrice || !coin.current_price) return sum;
            return (
              sum + coin.market_cap * (sparklinePrice / coin.current_price)
            );
          }, 0);

          const date = new Date();
          date.setDate(date.getDate() - (DAYS - 1 - i));

          return {
            day: date.toLocaleDateString("en-US", { weekday: "short" }),
            marketCap: totalMarketCap,
          };
        },
      );

      setData(points);
      setLoading(false);
    }

    load();
  }, []);

  return { data, loading };
}
