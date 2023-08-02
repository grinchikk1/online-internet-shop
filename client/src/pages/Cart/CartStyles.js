import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: "DM Sans, sans-serif",
  },
});

export const useStyles = makeStyles((theme) => ({
  cart_title: {
    textAlign: "center",
    fontSize: "33px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "43px",
    margin: "96px 0px 64px",
  },
  wrapper_cart: {
    justifyContent: "space-between",
  },
  cart_empty: {
    fontSize: "24px",
    textTransform: "uppercase",
    padding: "10px 30px",
    marginTop: "50%",
    marginBottom: "50%",
  },
  cart_items: {
    marginRight: "88px",
    gap: "39px",
  },
  cart_totals: {
    padding: "39px 59px 48px",
    width: "580px",
    // justifyContent: "space-between",
    // color: "inherit",
    // fontSize: "16px",
    // fontStyle: "normal",
    // fontWeight: "700",
    // lineHeight: "normal",
    // margin: "26px 0 29px",
    // rowGap: "45px",
  },
  cart_totalsTitle: {
    marginBottom: 44,
    fontSize: 26,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "25px",
  },
  cart_subtotalWrapper: {
    gap: "128px",
    // display: "flex",
    // justifyContent: "space-between",
  },
  cart_subtotal: {
    // marginTop: "44px",
    // gap: "23px",
  },
  cart_shipping: {
    maxWidth: "250px",
  },
  cart_subtitle: {
    marginRight: "128px",
  },
  update_button: {},
  checkout_button: {},
  shipping_accordion: {
    color: "#707070",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "20px",
  },
  cart_totalLine: {
    width: "100%",
    borderBottom: "1px solid #D8D8D8",
    paddingBottom: "39px",
  },
  cart_totalAmount: {
    justifyContent: "space-between",
    marginTop: "42px",
    marginBottom: "45px",
    fontWeight: "700",
  },
}));
