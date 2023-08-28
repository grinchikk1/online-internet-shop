import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
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
    fontSize: "26px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "25px",
    "@media (max-width : 768px) ": {
      textAlign: "start",
      fontSize: "16px",
      lineHeight: "27px",
    },
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
