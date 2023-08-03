import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: "DM Sans, sans-serif",
  },
});

export const useStyles = makeStyles((theme) => ({
  item_wrapper: {
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "39px",
  },
  count_wrapper: {
    borderRadius: "6px",
  },
  count_button: {
    width: "30px",
    height: "53px",
    border: "none",
    cursor: "pointer",
    color: "#707070",
    fontSize: "16px",
  },
  count_input: {
    padding: "0px",
    width: "40px",
    height: "53px",
    border: "none",
    backgroundColor: "#efefef",
    color: "#707070",
    fontSize: "16px",
    textAlign: "center",
  },
  item_image: {
    height: "136px",
    width: "136px",
    borderRadius: "4px",
  },
  wrapp_description: {
    minWidth: "200px",

    marginLeft: "20px",
  },
  item_name: {
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "26px",
    marginBottom: "14px",
  },
  item_description: {
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "27px",
    color: "#707070",
    marginBottom: "2px",
  },
  item_price: {
    color: "#a18a68",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "27px",
  },
  cart_line: {
    borderBottom: "1px solid #d8d8d8",
    width: "100%",
    marginBottom: "39px",
  },
  close_button: {
    border: "none",
    cursor: "pointer",
    backgroundColor: "#ffffff",
    paddingBottom: "100px",
  },
}));
