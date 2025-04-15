import { Box, Typography } from "@mui/material";
import MyDialog from "../shared/Dialog/MyDialog";
import AddInvoiceForm from "../forms/AddInvoiceForm";
import useOpen from "@/hooks/useOpen";
export default function InvoicesHeader() {
  const { open, handleClickOpen, handleClose } = useOpen();
  return (
    <Box
      sx={{
        py: 2,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography variant="h5">Invoices</Typography>
      <MyDialog
        {...{ open, handleClickOpen, handleClose }}
        btnTitle="Add Invoice"
        dialogTitle="Add Invoice"
      >
        <AddInvoiceForm {...{ handleClose }} />
      </MyDialog>
    </Box>
  );
}
