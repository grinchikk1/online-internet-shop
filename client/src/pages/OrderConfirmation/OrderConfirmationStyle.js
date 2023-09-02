import { makeStyles } from "@mui/styles";
import { theme } from "../../styles/GlobalTheme";

const useStyles = makeStyles(() => ({
  orderMain: {
    marginTop: "50px",
    display: "flex",
    lineHeight: "27px",
    fontSize: "16px",
    flexWrap: "wrap",
    marginBottom: "30px",
  },
  orderDetails: {
    flex: "0 1 calc(50% - 5px)",
    marginBottom: "20px",
  },
  orderMainHeader: {
    lineHeight: "35px",
    fontSize: "26px",
    marginBottom: "30px",
    whiteSpace: "nowrap",
  },

  orderDetailsBlock: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    rowGap: "40px",
    marginBottom: "50px",
    columnGap: "10px",
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "1fr",
      maxWidth: "100%",
    },
  },
  orderDetailsItem: {
    fontSize: "16px",
    lineHeight: "27px",
  },
  detailsTitle: {},
  detailsSubtitle: {
    color: "#707070",
    marginBottom: "40px",
  },
  orderSummary: {
    flex: "0 1 calc(50% - 5px)",
  },
  orderSummaryBlock: {
    background: "#EFEFEF",
    padding: "0 60px",
  },
  orderSummaryHeader: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: "40px",
    paddingBottom: "15px",
    borderBottom: "1px solid #D8D8D8",
    gap: "10px",
  },
  orderSummaryItems: {
    marginTop: "20px",
    color: "#707070",
  },
  orderSummaryItem: {
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
    marginBottom: "25px",
  },
  orderSummaryTotal: {
    display: "flex",
    justifyContent: "space-between",
    padding: "25px 0",
    fontWeight: "700",
  },
}));

export default useStyles;
