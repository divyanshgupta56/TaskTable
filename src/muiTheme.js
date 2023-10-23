import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: ["Mulish", "sans-serif"].join(","),
    h1: {
      fontSize: "2rem",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "48px",
      color: "#131316",
      "@media (max-width:786px)": {
        fontSize: "1.5rem",
        lineHeight: "36px",
      },
    },
    h2: {
      fontSize: "1.5rem",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "36px",
      color: "#131316",
      "@media (max-width:786px)": {
        fontSize: "1.125rem",
      },
    },
    h3: {
      fontSize: "1.125rem",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "27px",
      color: "#131316",
      "@media (max-width:786px)": {
        fontSize: "1rem",
      },
    },
    h4: {
      fontSize: "1rem",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "24px",
      color: "#131316",
    },
    h5: {
      fontSize: "0.875rem",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "20px",
      color: "#131316",
    },
    body1: {
      fontSize: "1rem",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "24px",
      color: "#131316",
    },
    body2: {
      fontSize: "0.875rem",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "20px",
      color: "#131316",
    },
    subtitle1: {
      fontSize: "0.875rem",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "20px",
      color: "#545463",
    },
    subtitle2: {
      fontSize: "0.75rem",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "18px",
      color: "#717184",
    },
  },
  palette: {
    primary: {
      main: "#48bf84",
      dark: "#389F6C",
    },
    secondary: {
      main: "#1B7FF5",
      dark: "#982F93",
    },
    error: {
      main: "#EE2737",
    },
  },
});

export default theme;
