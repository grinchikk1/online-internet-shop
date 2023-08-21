import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: "DM Sans, sans-serif",
  },
});
export const useStyles = makeStyles((theme) => ({
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    maxWidth: 1200
  },

  article1: {
    display: "inline-block",
    paddingTop: 50,
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 27,
    paddingBottom: 50,
    maxWidth: 670,
    textAlign: "left",
    // justifySelf: "center",
  },
  article2: {
    display: "inline-block",
    // paddingTop: 24,
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 27,
    paddingBottom: 50,
    maxWidth: 670,
    textAlign: "left",
    
    // justifySelf: "center",
  },
  // title: {
    // display: "block",
    // paddingTop: 50,
    // fontWeight: 400,
    // paddingBottom: 20,
    // fontSize: 50,
    // fontWeight: 800,
  
  // },
 
}));
