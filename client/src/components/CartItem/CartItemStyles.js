import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  item_wrapper: {
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "39px",
    "@media (max-width : 768px) ": {
      marginBottom: "24px",
      fontSize: "12px",
    },
  },
  count_wrapper: {
    borderRadius: "6px",
    "@media (max-width : 500px) ": {
      alignSelf: "flex-start",
    },
  },
  count_button: {
    width: "30px",
    height: "53px",
    border: "none",
    cursor: "pointer",
    color: "#707070",
    fontSize: "16px",
    "@media (max-width : 500px) ": {
      width: "20px",
      height: "40px",
    },
  },
  count_input: {
    padding: "0px",
    width: "40px",
    height: "53px",
    border: "none",
    backgroundColor: "#efefef",
    color: "#707070",
    fontSize: "16px",
    textAlign: "center",
    "@media (max-width : 500px) ": {
      width: "20px",
      height: "40px",
    },
  },
  item_image: {
    height: "136px",
    width: "136px",
    borderRadius: "4px",
  },
  wrapp_description: {
    marginLeft: "20px",
    "@media (max-width : 768px) ": {
      marginLeft: "0px",
      fontSize: "12px",
      alignSelf: "flex-start",
    },
  },
  wrapp: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexGrow: "1",
    "@media (max-width : 768px) ": {
      marginLeft: "10px",
    },
    "@media (max-width : 500px) ": {
      flexDirection: "column",
    },
  },
  item_name: {
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "26px",
    marginBottom: "14px",
    "@media (max-width : 500px) ": {
      fontSize: "12px",
      marginBottom: "0px",
    },
  },
  item_description: {
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "27px",
    color: "#707070",
    marginBottom: "2px",
    "@media (max-width : 500px) ": {
      fontSize: "12px",
    },
  },
  item_price: {
    color: "#a18a68",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "27px",
    "@media (max-width : 500px) ": {
      fontSize: "12px",
    },
  },
  cart_line: {
    borderBottom: "1px solid #d8d8d8",
    width: "100%",
    marginBottom: "39px",
    "@media (max-width : 768px) ": {
      display: "none",
    },
  },
  close_button: {
    border: "none",
    cursor: "pointer",
    backgroundColor: "#ffffff",
    paddingBottom: "100px",
  },
}));
