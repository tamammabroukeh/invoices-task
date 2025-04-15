import { format } from "date-fns";

export function FormatDate(date: string | Date): string {
  return format(new Date(date), "MMM dd, yyyy");
}

export function currencyFormatter(price: number) {
  const currency = new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
    signDisplay: "never",
    unitDisplay: "long",
    notation: "standard",
    localeMatcher: "best fit",
  }).format(price);
  return currency;
}
