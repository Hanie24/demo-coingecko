import type { ReactNode } from "react";

export interface TextProps {
  children: ReactNode;
  as?: "p" | "span" | "strong" | "small";
  className?: string;
}
