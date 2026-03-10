import { useEffect, useState } from "react";
import type { GlobalStats } from "./globals.types";
import { getGlobals } from "./getGlobals.service";

export function useGlobal() {
  const [global, setGlobal] = useState<GlobalStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const data = await getGlobals();
      setGlobal(data);
      setLoading(false);
    }

    load();
  }, []);

  return { global, loading };
}
