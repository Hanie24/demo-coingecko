import PriceChange from "../../Atoms/PriceChange/PriceChange";
import Text from "../../Atoms/Text/Text";
import IconHeading from "../../Molecules/IconHeading/IconHeading";
import Columns from "../../Templates/Columns/Columns";
import Card from "../Card/Card";
import type { CryptoCardProps } from "./CryptoCard.types";

export default function CryptoCard({ coin }: CryptoCardProps) {
  return (
    <Card>
      <IconHeading src={coin?.image} alt={coin.name} title={coin.name} />
      <Text className="mt-4 text-md text-blue-50">
        {coin.current_price} {coin.symbol.toUpperCase()}
      </Text>
      <Columns className="justify-between">
        <Text className="text-sm text-blue-50">${coin.current_price}</Text>
        <PriceChange value={coin.price_change_percentage_24h} />
      </Columns>
    </Card>
  );
}
