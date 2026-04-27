import {
  AreaChart as RechartsAreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import type { TooltipProps } from "recharts";
import type { AreaChartProps } from "./AreaChart.types";

function renderTooltip(
  color: string,
  tickColor: string,
  formatter: (v: number) => string,
) {
  return function ({ active, payload, label }: TooltipProps<number, string>) {
    if (!active || !payload?.length) return null;
    return (
      <div className="bg-gray-800 border border-gray-700 rounded px-3 py-2 text-xs">
        <p style={{ color: tickColor }} className="font-semibold mb-1">
          {label}
        </p>
        <p style={{ color }}>{formatter(payload[0].value ?? 0)}</p>
      </div>
    );
  };
}

export default function AreaChart({
  data,
  dataKey,
  color,
  tickColor,
  gradientId,
  formatter,
}: AreaChartProps) {
  return (
    <ResponsiveContainer width="100%" height={200} className="mt-6">
      <RechartsAreaChart data={data} margin={{ top: 8, right: 8, left: 8, bottom: 0 }}>
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={color} stopOpacity={0.3} />
            <stop offset="95%" stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
        <XAxis
          dataKey="day"
          tick={{ fill: tickColor, fontSize: 12 }}
          axisLine={{ stroke: "#374151" }}
          tickLine={false}
        />
        <YAxis
          tickFormatter={formatter}
          tick={{ fill: tickColor, fontSize: 11 }}
          axisLine={false}
          tickLine={false}
          width={58}
        />
        <Tooltip content={renderTooltip(color, tickColor, formatter)} />
        <Area
          type="monotone"
          dataKey={dataKey}
          stroke={color}
          fill={`url(#${gradientId})`}
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 4, fill: color }}
        />
      </RechartsAreaChart>
    </ResponsiveContainer>
  );
}
