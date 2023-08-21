import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
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
  cart_shipping: {
    maxWidth: "250px",
    "@media (max-width : 450px) ": {
      maxWidth: "150px",
    },
  },
  updateTotalsBtn: {
    padding: 0,
    fontWeight: "700px",
    width: "100%",
    height: "53px",
  },
  shipping_accordion: {
    color: "#707070",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "20px",
  },
}));
