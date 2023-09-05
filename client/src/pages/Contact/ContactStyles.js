import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  formContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  field: {
    width: "100%",
    fontFamily: "DM Sans, sans-serif",
    display: "flex",
  },
  buttonContainer: {
    paddingTop: 30,
  },
  heading: {
    paddingTop: 40,
    fontSize: "33px",
    fontWeight: 500,
    lineHeight: "43px",
  },
  paragraph: {
    display: "inline-block",
    paddingTop: 50,
    fontSize: "20px",
    fontWeight: 400,
    lineHeight: "26px",
    paddingBottom: 50,
    maxWidth: 470,
    textAlign: "center",
    justifySelf: "center",
  },
}));

export const fieldStyle = {
  "& fieldset": {
    border: "none",
    borderBottom: `1px solid ${"#D8D8D8"}`,
    borderRadius: "0px",
    // marginRight: "5vw",
    // maxWidth: "500px"
  },
};
