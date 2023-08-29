import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  formContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "start",
  },
  field: {
    height: "70px",
    width: "100%",
    fontFamily: "DM Sans, sans-serif",

    textAlign: "end",
  },
  buttonContainer: {
    paddingTop: 30,
  },
  heading: {
    paddingTop: 40,
    fontSize: "26px",
    fontWeight: 400,
    lineHeight: "35px",
  },
  error: {
    transform: "translateY(-10px)",
  },
  orderPrice: {
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "27px",
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "1px solid #D8D8D8",
    height: "50px",
  },
  orderPriceItem: {
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "27px",
    color: "#707070",
  },
  orderItem: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "50px",
  },
  total: {
    fontSize: "16px",
    fontWeight: 700,
    lineHeight: "27px",
    color: "#000",
    display: "flex",
    justifyContent: "space-between",
  },
}));

export const fieldStyle = {
  "& fieldset": {
    border: "none",
    borderBottom: `1px solid ${"#D8D8D8"}`,
    borderRadius: "0px",
    marginRight: "5vw",
  },
};
