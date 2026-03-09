import type { ContainerProps } from "./Container.types";

export default function Container({ children }: ContainerProps) {
  return <main className="px-4 my-2 max-w-[1920px] mx-auto">{children}</main>;
}
