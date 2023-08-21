import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
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
