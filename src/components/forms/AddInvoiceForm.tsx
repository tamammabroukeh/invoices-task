import { Controller } from "react-hook-form";
import { Add, Delete } from "@mui/icons-material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
  Button,
  TextField,
  IconButton,
  Typography,
  Divider,
  Box,
} from "@mui/material";
import useAddInvoice from "@/hooks/useAddInvoice";
import { currencyFormatter } from "@/utils/functions";
import React from "react";
interface AddInvoiceFormProps {
  handleClose?: () => void;
}
const AddInvoiceForm = ({ handleClose }: AddInvoiceFormProps) => {
  const {
    total,
    append,
    errors,
    fields,
    handleSubmit,
    onSubmit,
    remove,
    control,
  } = useAddInvoice(handleClose);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", gap: 5 }}>
          {/* Client name Input */}
          <Box>
            <Controller
              name="clientName"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Client Name"
                  fullWidth
                  error={!!errors.clientName}
                  helperText={errors.clientName?.message}
                />
              )}
            />
          </Box>
          {/* Date Picker Input */}
          <Box>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Controller
                name="dueDate"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    label="Due Date"
                    value={field.value}
                    onChange={field.onChange}
                    slotProps={{
                      textField: {
                        fullWidth: true,
                        error: !!errors.dueDate,
                        helperText: errors.dueDate?.message,
                      },
                    }}
                  />
                )}
              />
            </LocalizationProvider>
          </Box>
        </Box>
        {/* line items */}
        <Box>
          <Divider sx={{ my: 3 }} />
          <Typography variant="body1">Line Items</Typography>

          {fields.map((item, index) => (
            <Box
              key={item.id}
              sx={{
                my: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: 3,
              }}
            >
              {/* Description & Quantity*/}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 5,
                }}
              >
                <Controller
                  name={`lineItems.${index}.description`}
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Description"
                      fullWidth
                      error={!!errors.lineItems?.[index]?.description}
                      helperText={
                        errors.lineItems?.[index]?.description?.message
                      }
                    />
                  )}
                />
                <Controller
                  name={`lineItems.${index}.quantity`}
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Qty"
                      type="number"
                      fullWidth
                      onChange={(e) =>
                        field.onChange(parseFloat(e.target.value))
                      }
                      error={!!errors.lineItems?.[index]?.quantity}
                      helperText={errors.lineItems?.[index]?.quantity?.message}
                    />
                  )}
                />
              </Box>
              {/* Price & delete button*/}
              <Box
                sx={{
                  display: "flex",
                  gap: 5,
                }}
              >
                <Controller
                  name={`lineItems.${index}.price`}
                  control={control}
                  render={({ field }) => (
                    <TextField
                      sx={{ flexBasis: "45%" }}
                      {...field}
                      label="Price"
                      type="number"
                      fullWidth
                      onChange={(e) =>
                        field.onChange(parseFloat(e.target.value))
                      }
                      error={!!errors.lineItems?.[index]?.price}
                      helperText={errors.lineItems?.[index]?.price?.message}
                    />
                  )}
                />

                <IconButton
                  onClick={() => remove(index)}
                  color="primary"
                  disabled={fields.length <= 1}
                >
                  <Delete />
                </IconButton>
              </Box>
            </Box>
          ))}

          <Button
            startIcon={<Add />}
            onClick={() => append({ description: "", quantity: 1, price: 0 })}
            variant="contained"
          >
            Add Item
          </Button>
        </Box>
      </Box>
      {/* Total Price */}
      <Box
        sx={{
          display: "flex",
          my: 2,
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <Typography variant="h6">Total: {currencyFormatter(total)}</Typography>
        <Button type="submit" variant="contained">
          Add Invoice
        </Button>
      </Box>
    </form>
  );
};
export default React.memo(AddInvoiceForm);
