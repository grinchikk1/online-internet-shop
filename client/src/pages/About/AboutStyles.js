import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    maxWidth: 1200,
  },

  article1: {
    display: "inline-block",
    paddingTop: 50,
    fontSize: 16,
    fontWeight: 400,
    lineHeight: "27px",
    paddingBottom: 50,
    maxWidth: 670,
    textAlign: "left",
  },
  article2: {
    display: "inline-block",
    fontSize: 16,
    fontWeight: 400,
    lineHeight: "27px",
    paddingBottom: 50,
    maxWidth: 670,
    textAlign: "left",
  },
}));
