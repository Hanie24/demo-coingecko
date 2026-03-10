import { useEffect, useState } from "react";
import type { Coin } from "./coin";
import { getTopGainers } from "./getTopGainers.service";

export function useTopGainers() {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const data = await getTopGainers();
      setCoins(data);
      setLoading(false);
    }

    load();
  }, []);

  return { coins, loading };
}
