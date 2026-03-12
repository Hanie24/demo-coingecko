export function formatCurrency(value?: number) {
  if (!value) return "-";

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "UDS",
  }).format(value);
}
