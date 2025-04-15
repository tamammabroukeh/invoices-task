import { InvoiceStatus } from "@/types/Invoices";

export interface InvoiceItem {
  description: string;
  quantity: number;
  price: number;
}

export interface Invoice {
  id: number;
  client: string;
  date: string;
  amount: number;
  status: InvoiceStatus;
  items: InvoiceItem[];
}

export interface InvoiceStore {
  invoices: Invoice[];
  addInvoice: (invoice: Invoice) => void;
  toggleInvoiceStatus: (id: number) => void;
}
