export interface AreaChartProps {
  data: Record<string, string | number>[];
  dataKey: string;
  color: string;
  tickColor: string;
  gradientId: string;
  formatter: (value: number) => string;
}
