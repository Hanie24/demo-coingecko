import Icon from "../../Atoms/Icon";
import Subtitle from "../../Atoms/Subtitle/Subtitle";
import type { IconHeadingProps } from "./IconHeading.types";

export default function IconHeading({ src, alt, title }: IconHeadingProps) {
  return (
    <div className="flex gap-4 items-center">
      <Icon src={src} alt={alt} />
      <Subtitle>{title}</Subtitle>
    </div>
  );
}
