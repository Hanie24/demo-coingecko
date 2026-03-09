import type { IconProps } from "./Icon.types";

export default function Icon({ src, alt }: IconProps) {
  return <img src={src} alt={alt} className="w-7 h-7" />;
}
