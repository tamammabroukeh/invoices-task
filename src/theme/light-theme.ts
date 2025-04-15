import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
  palette: {
    error: {
      main: "#9a0000",
    },
    mode: "light",
    primary: {
      main: "#022f5a",
    },
    secondary: {
      main: "#9c27b0",
    },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
  },
  typography: {
    h5: {
      color: "#022f5a",
      fontWeight: "bold",
      fontSize: "24px",
    },
    h6: {
      fontWeight: "bold",
      fontSize: "18px",
    },
    body1: {
      color: "#022f5a",
      fontWeight: "bold",
      fontSize: "18px",
    },
  },
});
