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
  grey: {
    300: "#C0C0C0",
    400: "grey",
    600: "#808080",
    700: "#696969",
  },
  red: {
    200: "#d32f2f66",
    300: "#d32f2fCC",
    400: "#d32f2f",
  },
  blue: {
    200: "#1F51FF66",
    300: "#1F51FFCC",
    400: "#1F51FF",
  },
  white: {
    400: "white",
  },
};
