import { useTopGainers } from "../../../services/gainers/useTopGainers";
import Columns from "../../Templates/Columns/Columns";
import CryptoCard from "./CryptoCard";

export default function CryptoCardList() {
  const { coins, loading } = useTopGainers();

  if (loading) return <p>loading</p>;

  return (
    <Columns className="flex-col sm:flex-row">
      {coins.map((coin) => (
        <CryptoCard key={coin.id} coin={coin} />
      ))}
    </Columns>
  );
}
