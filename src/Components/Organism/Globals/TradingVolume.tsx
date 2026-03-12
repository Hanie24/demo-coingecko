import { formatCurrency } from "../../../utils/formatters";
import Subtitle from "../../Atoms/Subtitle/Subtitle";
import Text from "../../Atoms/Text/Text";
import Card from "../Card/Card";
import type { GlobalsProps } from "./globals.types";

export default function TradigVolume({ global, loading }: GlobalsProps) {
  const volume = global?.data.total_volume.usd;

  if (loading) return <p>loading</p>;

  return (
    <Card>
      <Subtitle>Trading Volume </Subtitle>
      <Text className="mt-4 text-blue-50">{formatCurrency(volume)}</Text>
    </Card>
  );
}
