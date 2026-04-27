import { useGlobal } from "../../../services/global/useGlobal";
import Columns from "../../Templates/Columns/Columns";
import MarketCap from "./MarketCap";
import TradigVolume from "./TradingVolume";

export default function GlobalGrid() {
  const { global, loading } = useGlobal();
  return (
    <Columns>
      <div className="flex flex-col gap-4 flex-1 min-w-0">
        <MarketCap global={global} loading={loading} />
      </div>
      <div className="flex-1 min-w-0">
        <TradigVolume global={global} loading={loading} />
      </div>
    </Columns>
  );
}
