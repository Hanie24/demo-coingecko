import type { ColumnsProps } from "./Columns.types";

export default function Columns({ children, className }: ColumnsProps) {
  return (
    <section className={`flex gap-6 mt-4 ${className}`}>{children}</section>
  );
}
