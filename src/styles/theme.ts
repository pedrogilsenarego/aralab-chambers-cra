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
