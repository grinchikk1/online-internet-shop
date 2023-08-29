import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
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
    marginBottom: "50px",
  },
  cart_empty: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20%",
    fontSize: "40px",
    fontWeight: "600",
    textTransform: "uppercase",
    width: "100%",
    "@media (max-width : 959px) ": {
      marginTop: "0",
    },
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
      padding: "10px 0",
    },
  },
  updateCartBtn: {
    marginTop: "39px",
    height: "53px",
    width: "168px",
    fontWeight: "700",
    "@media (max-width : 768px) ": {
      width: "100%",
    },
  },
}));
