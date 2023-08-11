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
    "@media (max-width : 768px) ": {
      textAlign: "start",
      margin: "24px 0px 18px",
      fontSize: "16px",
    },
  },
  wrapper_cart: {
    justifyContent: "space-between",
    width: "100%",
  },
  cart_empty: {
    display: "flex",
    fontSize: "24px",
    textTransform: "uppercase",
    width: "100%",
    justifyContent: "center",
    "@media (max-width : 768px) ": {
      marginBottom: "40px",
      fontSize: "16px",
    },
  },
  cart_items: {
    display: "flex",
    flexDirection: "column",
    padding: "15px 30px",
    "@media (max-width : 768px) ": {
      padding: "15px",
    },
  },
  cart_totals: {
    padding: "40px",
    width: "100%",
    "@media (max-width : 768px) ": {
      padding: "15px 16px",
      lineHeight: "20px",
      backgroundColor: "#EFEFEF",
      borderRadius: "4px",
    },
  },
  cart_totalsTitle: {
    textAlign: "center",
    marginBottom: "44px",
    fontSize: "26px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "25px",
    "@media (max-width : 768px) ": {
      textAlign: "start",
      marginBottom: "23px",
      fontSize: "16px",
      lineHeight: "27px",
    },
  },
  cart_subtotalWrapper: {
    justifyContent: "space-between",
  },
  cart_subtotal: {},
  cart_shipping: {
    maxWidth: "250px",
    "@media (max-width : 450px) ": {
      maxWidth: "150px",
    },
  },
  cart_subtitle: {},
  updateCartBtn: {
    marginTop: "39px",
    height: "53px",
    width: "168px",
    fontWeight: "700",
    "@media (max-width : 768px) ": {
      width: "100%",
    },
  },
  updateTotalsBtn: {
    padding: 0,
    fontWeight: "700px",
    width: "100%",
    height: "53px",
  },
  applyCouponBtn: {
    marginTop: "64px",
    height: "53px",
    width: "168px",
    background: "black",
    color: "white",
    "@media (max-width : 768px) ": {
      width: "100%",
      marginBottom: "30px",
    },
  },
  checkoutBtn: {
    "@media (max-width : 768px) ": {
      display: "none",
      width: "100%",
    },
  },
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
