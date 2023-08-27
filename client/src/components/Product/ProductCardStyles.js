import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  text_color: {
    color: "#707070",
    paddingLeft: "10px",
  },
  text_color_mobile: {
    color: "#707070",
    paddingLeft: "10px",
    fontSize: "12px",
  },
  title_text_color_mobile: {
    fontSize: "14px",
  },
  container_desktop: {
    display: "flex",
    width: "100%",
  },
  container_image_desktop: {
    display: "flex",
    flexDirection: "row",
    maxWidth: "750px",
  },
  image_list_desktop: {
    width: "120px",
    height: "120px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "all 0.2s ease-in-out",
  },
  button_add: {
    background: "#FFFFFF",
    color: "#000000",
    height: "53px",
    width: "100%",
    border: "1px solid #000000",
    borderRadius: "4px",
  },
  box_social_icons: {
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: "50px",
    width: "250px",
    color: "#707070",
  },
  container_tabs: {
    paddingTop: "100px",
    width: "100%",
  },
  description_text_desktop: {
    fontSize: "16px",
    lineHeight: "27px",
    color: "#707070",
  },
}));
