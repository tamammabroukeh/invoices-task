import { useForm, useFieldArray } from "react-hook-form";
// import { SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AddInvoiceSchema, AddInvoiceType } from "@/schemas/AddInvoiceSchema";
import { useInvoiceStore } from "@/app/invoices-store";
import { Invoice } from "@/interfaces/Invoices";
import { FormatDate } from "@/utils/functions";
import { useCallback } from "react";

export default function useAddInvoice(handleClose?: () => void) {
  // hook for add a new invoice
  const addInvoice = useInvoiceStore((state) => state.addInvoice);
  //  hook for elements the form
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<AddInvoiceType>({
    resolver: zodResolver(AddInvoiceSchema),
    defaultValues: {
      clientName: "",
      dueDate: new Date(),
      lineItems: [{ description: "", quantity: 1, price: 0 }],
    },
  });
  // hook for manage the line items
  const { fields, append, remove } = useFieldArray({
    control,
    name: "lineItems",
  });

  const lineItems = watch("lineItems");
  // calculate the total
  const total = lineItems.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );
  // function to submit the form, send the invoices and save it in the state management
  const onSubmit = useCallback(
    (data: AddInvoiceType) => {
      const newInvoice: Invoice = {
        id: Date.now(),
        client: data.clientName,
        date: FormatDate(data.dueDate),
        amount: total,
        status: "Unpaid",
        items: data.lineItems.map((item) => ({
          description: item.description,
          quantity: item.quantity,
          price: item.price,
        })),
      };
      addInvoice(newInvoice);
      reset();
      handleClose?.();
    },
    [addInvoice, reset, handleClose, total]
  );
  return {
    total,
    fields,
    append,
    remove,
    handleSubmit,
    onSubmit,
    errors,
    control,
  };
}
