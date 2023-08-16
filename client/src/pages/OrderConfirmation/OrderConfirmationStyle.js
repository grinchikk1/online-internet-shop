import { makeStyles } from "@mui/styles";
import { theme } from "../../styles/GlobalTheme";

const useStyles = makeStyles(() => ({
  orderHeader: {
    background: " #EFEFEF",
    maxHeight: "68px",
    padding: "20px 5vw",
    borderTop: "2px solid #A18A68",
    whiteSpace: "nowrap",
  },
  orderMain: {
    marginTop: "90px",
    display: "flex",
    lineHeight: "27px",
    fontSize: "16px",
    flexWrap: "wrap",
    marginBottom: "30px",
  },
  icon: {
    transform: "translate(-10px,5px)",
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
    // maxWidth: "50%",
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
    // borderBottom: "1px solid #D8D8D8",
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
