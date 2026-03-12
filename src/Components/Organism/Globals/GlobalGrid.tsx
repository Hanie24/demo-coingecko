import { useGlobal } from "../../../services/global/useGlobal";
import Columns from "../../Templates/Columns/Columns";
import MarketCap from "./MarketCap";
import TradigVolume from "./TradingVolume";

export default function GlobalGrid() {
  const { global, loading } = useGlobal();
  return (
    <Columns>
      <MarketCap global={global} loading={loading}></MarketCap>
      <TradigVolume global={global} loading={loading}></TradigVolume>
    </Columns>
  );
}
