import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { InvoiceStore } from "@/interfaces/Invoices";
import { initialInvoices } from "@/data";

export const useInvoiceStore = create<InvoiceStore>()(
  persist(
    (set) => ({
      invoices: initialInvoices,
      addInvoice: (invoice) =>
        set((state) => ({ invoices: [...state.invoices, invoice] })),
      toggleInvoiceStatus: (id) =>
        set((state) => ({
          invoices: state.invoices.map((invoice) =>
            invoice.id === id
              ? {
                  ...invoice,
                  status: invoice.status === "Paid" ? "Unpaid" : "Paid",
                }
              : invoice
          ),
        })),
    }),
    {
      name: "invoice-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);