import type { TextProps } from "./Text.types";

export default function Text({ children, as = "p", className }: TextProps) {
  const Component = as;

  return <Component className={className}>{children}</Component>;
}
