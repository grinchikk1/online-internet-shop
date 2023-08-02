import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: "DM Sans, sans-serif",
  },
  palette: {
    primary: {
      main: "#000",
    },
  },
});

export const useStyles = makeStyles((theme) => ({
  text_color: {
    color: "#707070",
    paddingLeft: "10px",
  },
}));
