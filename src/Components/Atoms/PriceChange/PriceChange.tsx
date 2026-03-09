import Text from "../Text/Text";
import type { PriceChangeProps } from "./PriceChange.types";

export default function PriceChange({ value }: PriceChangeProps) {
  const isPositive = value >= 0;

  return (
    <Text
      as="span"
      className={`text-sm ${isPositive ? "text-green-500" : "text-red-500"}`}
    >
      {isPositive ? "↑" : "↓"} {value.toFixed(2)}%
    </Text>
  );
}
