import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#5d0000",
        },
      },
    },
  },
  palette: {
    error: {
      main: "#5d0000",
    },
    mode: "dark",
    primary: {
      main: "#5d0000",
    },
    secondary: {
      main: "#ce93d8",
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
  },
  typography: {
    h5: {
      color: "#eee",
      fontWeight: "bold",
      fontSize: "24px",
    },
    h6: {
      color: "#eee",
      fontWeight: "bold",
      fontSize: "18px",
    },
    body1: {
      color: "#eee",
      fontWeight: "bold",
      fontSize: "18px",
    },
  },
});
