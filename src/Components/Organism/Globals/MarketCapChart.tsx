import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import type { TooltipProps } from "recharts";
import { useMarketCapChart } from "../../../services/global/useMarketCapChart";

function formatTrillions(value: number) {
  return `$${(value / 1e12).toFixed(2)}T`;
}

function CustomTooltip({
  active,
  payload,
  label,
}: TooltipProps<number, string>) {
  if (!active || !payload?.length) return null;

  return (
    <div className="bg-gray-800 border border-gray-700 rounded px-3 py-2 text-xs">
      <p className="text-blue-200 font-semibold mb-1">{label}</p>
      <p className="text-blue-400">{formatTrillions(payload[0].value ?? 0)}</p>
    </div>
  );
}

export default function MarketCapChart() {
  const { data, loading } = useMarketCapChart();

  if (loading) return <p>loading</p>;

  return (
    <ResponsiveContainer width="100%" height={200} className="mt-6">
      <AreaChart data={data} margin={{ top: 8, right: 8, left: 8, bottom: 0 }}>
        <defs>
          <linearGradient id="mcGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
        <XAxis
          dataKey="day"
          tick={{ fill: "#93c5fd", fontSize: 12 }}
          axisLine={{ stroke: "#374151" }}
          tickLine={false}
        />
        <YAxis
          tickFormatter={formatTrillions}
          tick={{ fill: "#93c5fd", fontSize: 11 }}
          axisLine={false}
          tickLine={false}
          width={58}
        />
        <Tooltip content={<CustomTooltip />} />
        <Area
          type="monotone"
          dataKey="marketCap"
          stroke="#3b82f6"
          fill="url(#mcGradient)"
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 4, fill: "#3b82f6" }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
