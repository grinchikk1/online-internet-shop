import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
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
  container_images_desktop: {
    display: "flex",
    flexDirection: "row",
    maxWidth: "750px",
    margin: 0,
  },
  container_image_desktop: {
    display: "flex",
    flexDirection: "column",
    width: "200px",
    height: "100%",
    gap: "40px",
    paddingRight: "40px",
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
  description_text_desktop: {
    fontSize: "16px",
    lineHeight: "27px",
    color: "#707070",
  },
  styleIcons: {
    "@media (max-width: 575.9px)": {
      width: "16px",
      height: "16px",
    },
    "@media (min-width: 576px) and (max-width: 769px)": {
      width: "20px",
      height: "20px",
    },
  },
}));
