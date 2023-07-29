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
  Container: {
    display: "flex",
    flexDirection: "column",
  },
  searchInput: {
    width: "261px",
    height: "35px",
    border: "none",
    borderBottom: "1px solid rgba(216, 216, 216, 1)",
    margin: "0px",
  },
  Title: {
    color: "rgba(0, 0, 0, 1)",
    paddingBottom: "35px",
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
  ItemList: {
    paddingTop: "100px",
  },
  StackStyle: {
    paddingBottom: "250px",
    paddingTop: "96px",
    display: "flex",
    justifyContent: "start",
    alignItems: "start",
  },
}));
