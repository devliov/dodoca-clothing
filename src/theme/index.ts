"use client";
import { createTheme } from "@mui/material/styles";
import typography from "./typography";
import palette from "./palette";

const theme = createTheme({
  typography,
  palette,
  components: {
    MuiChip: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.size === "medium" && {
            "& .MuiChip-label": {
              padding: "0px",
            },
          }),
        }),
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "0px !important",
        },
      },
    },
  },
});

export default theme;
