import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { IDialogProps } from "@/interfaces/shared";
import React from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
const MyDialog = ({
  children,
  btnTitle,
  dialogTitle,
  dialogDescription,
  handleClickOpen,
  open,
  handleClose,
}: IDialogProps) => {
  // console.log(open);
  return (
    <React.Fragment>
      <Button variant="contained" onClick={handleClickOpen}>
        {btnTitle}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle variant="h5" align="center">
          {dialogTitle}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>
          <DialogContentText>{dialogDescription}</DialogContentText>
          {children}
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};
export default React.memo(MyDialog);
