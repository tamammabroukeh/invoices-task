export interface IChildren {
  children: React.ReactNode;
}
export interface IDialogProps {
  btnTitle: string;
  children: React.ReactNode;
  dialogTitle?: string;
  dialogDescription?: string;
  open: boolean;
  handleClickOpen: () => void;
  handleClose: () => void;
}
