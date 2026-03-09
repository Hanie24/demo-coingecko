import type { SubtitleProps } from "./Subtitle.types";

export default function Subtitle({ children }: SubtitleProps) {
  return <h2 className="text-xl text-blue-primary">{children}</h2>;
}
