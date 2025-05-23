import React from "react";

export default function useOpen() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return { open, setOpen, handleClickOpen, handleClose };
}
