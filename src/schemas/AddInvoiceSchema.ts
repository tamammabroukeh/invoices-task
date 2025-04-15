import { z } from "zod";
// validation the line items
const lineItemSchema = z.object({
  description: z.string().min(1, "Description is required"),
  quantity: z.number().min(1, "Minimum quantity is 1"),
  price: z.number().min(0.01, "Price must be at least 0.01"),
});
// validation the add invoice form
const AddInvoiceSchema = z.object({
  clientName: z
    .string()
    .min(2, { message: "Name should be at least two characters" })
    .trim(),
  dueDate: z.date(),
  lineItems: z
    .array(lineItemSchema)
    .min(1, "At least one line item is required"),
});

type AddInvoiceType = z.infer<typeof AddInvoiceSchema>;
export { AddInvoiceSchema, type AddInvoiceType };
