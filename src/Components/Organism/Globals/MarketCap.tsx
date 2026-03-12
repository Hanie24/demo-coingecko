import { formatCurrency } from "../../../utils/formatters";
import Subtitle from "../../Atoms/Subtitle/Subtitle";
import Text from "../../Atoms/Text/Text";
import Card from "../Card/Card";
import type { GlobalsProps } from "./globals.types";

export default function MarketCap({ global, loading }: GlobalsProps) {
  const marketCap = global?.data.total_market_cap.usd;

  if (loading) return <p>loading</p>;

  return (
    <Card>
      <Subtitle>Market Cap General</Subtitle>
      <Text className="mt-4 text-blue-50">{formatCurrency(marketCap)}</Text>
    </Card>
  );
}
