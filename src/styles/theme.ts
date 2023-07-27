import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
      light: "#42a5f5",
      dark: "#1565c0",
      contrastText: "#fff",
    },
    error: {
      main: "#d32f2f",
    },
    background: {
      paper: "blue",
      default: "#FAFAFA",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "6px",
        },
      },
    },
  },

  typography: {
    allVariants: {
      fontFamily: "Calibri",
      textTransform: "none",
      fontSize: 16,
      color: "black",
      caretColor: "darkGrey",
    },
  },
});

export const Colors = {
  red: {
    400: "#d32f2f",
  },
  blue: {
    400: "blue",
  },
  white: {
    400: "white",
  },
};
