import { useEffect, useState } from "react";
import { getTradingVolumeChart } from "./getTradingVolumeChart.service";
import type { TradingVolumeDataPoint } from "./tradingVolumeChart.types";
import { DAYS } from "../../utils/constants";

export function useTradingVolumeChart() {
  const [data, setData] = useState<TradingVolumeDataPoint[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const response = await getTradingVolumeChart();

      const points: TradingVolumeDataPoint[] = response.total_volumes
        .slice(0, DAYS)
        .map(([timestamp, volume]) => {
          const date = new Date(timestamp);
          return {
            day: date.toLocaleDateString("en-US", { weekday: "short" }),
            volume,
          };
        });

      setData(points);
      setLoading(false);
    }

    load();
  }, []);

  return { data, loading };
}
