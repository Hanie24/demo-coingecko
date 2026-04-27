import AreaChart from "../../Molecules/AreaChart/AreaChart";
import { useMarketCapChart } from "../../../services/global/useMarketCapChart";

function formatTrillions(value: number) {
  return `$${(value / 1e12).toFixed(2)}T`;
}

export default function MarketCapChart() {
  const { data, loading } = useMarketCapChart();

  if (loading) return <p>loading</p>;

  return (
    <AreaChart
      data={data}
      dataKey="marketCap"
      color="#3b82f6"
      tickColor="#93c5fd"
      gradientId="mcGradient"
      formatter={formatTrillions}
    />
  );
}
