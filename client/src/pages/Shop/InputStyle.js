import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: "DM Sans, sans-serif",
  },
});

export const customTheme = createTheme({
  components: {
    MuiSlider: {
      styleOverrides: {
        thumb: {
          display: "none",
        },
        rail: {
          display: "none",
        },
        track: {
          display: "none",
        },
      },
    },
  },
});

export const useStyles = makeStyles((theme) => ({
  stackStyle: {
    paddingBottom: "250px",
    paddingTop: "20px",
  },
  Container: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "16px",
  },
  searchInput: {
    width: "261px",
    height: "25px",
    border: "none",
    borderBottom: "1px solid rgba(216, 216, 216, 1)",
  },
  Title: {
    color: "rgba(0, 0, 0, 1)",
    paddingBottom: "35px",
    "@media (max-width : 767.98px) ": {
      paddingBottom: "10px",
    },
  },
  SelectInput: {
    fontSize: "14px",
    border: "1px solid rgba(216, 216, 216, 1)",
    height: "53px",
    padding: "15px 12px",
  },
  SelectInputItem: {
    fontSize: "14px",
    padding: "15px 12px",
  },

  BoxSwitch: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  SliderPrice: {
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "22px",
    color: "rgba(112, 112, 112, 1)",
  },
  FilterTitle: {
    fontWeight: 400,
    lineHeight: "20px",
    color: "rgba(161, 138, 104, 1)",
  },
}));
