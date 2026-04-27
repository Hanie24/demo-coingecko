import AreaChart from "../../Molecules/AreaChart/AreaChart";
import { useTradingVolumeChart } from "../../../services/global/useTradingVolumeChart";

function formatBillions(value: number) {
  return `$${(value / 1e9).toFixed(0)}B`;
}

export default function TradingVolumeChart() {
  const { data, loading } = useTradingVolumeChart();

  if (loading) return <p>loading</p>;

  return (
    <AreaChart
      data={data}
      dataKey="volume"
      color="#22c55e"
      tickColor="#86efac"
      gradientId="tvGradient"
      formatter={formatBillions}
    />
  );
}
