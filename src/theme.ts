"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        background: {
          default: "#F3F4F6",
          paper: "#FFFEFE",
        },
      },
    },
    dark: {
      palette: {
        background: {
          default: "#252728",
          paper: "#1D1C1C",
        },
      },
    },
  },
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
});

export default theme;
