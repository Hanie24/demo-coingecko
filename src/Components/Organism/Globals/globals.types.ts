import type { GlobalStats } from "../../../services/global/globals.types";

export type GlobalsProps = {
  global: GlobalStats | null;
  loading: boolean;
};
