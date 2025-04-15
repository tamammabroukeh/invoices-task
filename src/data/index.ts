import { Invoice } from "@/interfaces/Invoices";

export const InvoicesColumns: string[] = [
  "Invoice #",
  "Client Name",
  "Date",
  "Amount",
  "Status",
];

export const initialInvoices: Invoice[] = [
  {
    id: 1,
    client: "Acme Corp",
    date: "2023-10-01",
    amount: 1500.75,
    status: "Paid",
    items: [{ description: "Web Design", quantity: 10, price: 150.0 }],
  },
  {
    id: 2,
    client: "Globex Inc",
    date: "2023-10-05",
    amount: 2450.0,
    status: "Unpaid",
    items: [
      { description: "Consulting", quantity: 20, price: 100.0 },
      { description: "Hosting", quantity: 3, price: 150.0 },
    ],
  },
  {
    id: 3,
    client: "Stark Industries",
    date: "2024-06-10",
    amount: 3200.5,
    status: "Unpaid",
    items: [
      { description: "React Development", quantity: 40, price: 80.0 },
      { description: "UI/UX Design", quantity: 10, price: 120.0 },
    ],
  },
  {
    id: 4,
    client: "Wayne Enterprises",
    date: "2024-06-15",
    amount: 1800.0,
    status: "Paid",
    items: [
      { description: "Mobile App Development", quantity: 30, price: 60.0 },
    ],
  },
];
