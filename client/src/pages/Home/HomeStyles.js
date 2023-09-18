import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
import img1 from "./img/Img01.jpg";
import img2 from "./img/Img02.jpg";
import img3 from "./img/Img03.jpg";
import img4 from "./img/Img04.jpg";
import img5 from "./img/Img05.jpg";

export const theme = createTheme({
  typography: {
    fontFamily: "DM Sans, sans-serif",
    button: {
      textTransform: "none",
    },
  },
});

export const container0 = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "0 auto",
  padding: "0",
  paddingLeft: "16px",
  paddingRight: "16px",
  maxWidth: "1200px",
  minWidth: "320px",
  "@media (max-width: 768.9px)": {
    margin: "0",
    padding: "0",
    paddingLeft: "8px",
    paddingRight: "8px",
  },
  "@media (min-width: 769px) and (max-width: 1199px)": {
    margin: "0",
    padding: "0",
    paddingLeft: "14px",
    paddingRight: "14px",
    maxWidth: "1168px",
  },
  "@media (min-width: 1200px)": {
    margin: "0",
    padding: "0",
    paddingLeft: "16px",
    paddingRight: "16px",
  },
};
export const container1 = {
  margin: "0",
  padding: "0",
  position: "relative",
  height: "646px",
  "@media (max-width: 768.9px)": {
    margin: "0",
    padding: "0",
    height: "350px",
    borderRadius: "8px",
    maxWidth: "768px",
  },
  "@media (min-width: 769px) and (max-width: 1199px)": {
    height: "460px",
  },
  "@media (min-width: 1200px)": {
    margin: "0",
    padding: "0",
  },
};
export const container2 = {
  margin: "0",
  padding: "0",
  top: "0px",
  left: "0px",
  position: "absolute",
  height: "646px",
  borderRadius: "16px",
  overflow: "hidden",

  "@media (max-width: 768.9px)": {
    margin: "0",
    padding: "0",
    height: "350px",
    borderRadius: "8px",
  },
  "@media (min-width: 769px) and (max-width: 1199px)": {
    margin: "0px",
    padding: "0px",
    height: "460px",
  },
  "@media (min-width: 1200px)": {
    margin: "0",
    padding: "0",
  },
};

export const btn = {
  margin: 0,
  padding: 0,
  zIndex: "10",
  position: "absolute",
  top: "380px",
  left: "50px",
  width: "193px",
  height: "53px",
  borderRadius: "6px",
  border: "2px solid #FFFFFF",
  color: "#FFFFFF",
  fontSize: "20px",
  fontWeight: "700",
  fontStyle: "normal",
  lineHeight: "normal",
  "&:hover": {
    border: "2px solid #FFFFFF",
    backgroundColor: "#FFFFFF",
    color: "#000000",
  },
  "@media (max-width: 768.9px)": {
    top: "290px",
    left: "10px",
    width: "92px",
    height: "32px",
    borderRadius: "4px",
    border: "1px solid #FFFFFF",
    fontSize: "12px",
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: "20px",
  },
  "@media (min-width: 769px) and (max-width: 1199px)": {
    top: "310px",
    left: "50px",
    width: "164px",
    height: "45px",
    borderRadius: "4px",
    border: "2px solid #FFFFFF",
    fontSize: "18px",
    fontWeight: "700",
    fontStyle: "normal",
    lineHeight: "normal",
  },
};
export const carousel = {
  position: "relative",
  margin: "0 auto",
  padding: "0",
  width: "98.5%",
  height: "775px",
  "@media (max-width: 768.9px)": {
    height: "450px",
  },
  "@media (min-width: 769px) and (max-width: 1199px)": {
    height: "580px",
  },
};
export const name = {
  zIndex: "10",
  position: "absolute",
  top: "250px",
  left: "50px",
  width: "240px",
  fontSize: "33px",
  fontWeight: "500",
  fontStyle: "normal",
  lineHeight: "43px",
  color: "#FFFFFF",
  userSelect: "none",
  "@media (max-width: 768.9px)": {
    top: "230px",
    left: "10px",
    width: "240px",
    fontSize: "20px",
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: "26px",
  },
  "@media (min-width: 769px) and (max-width: 1199px)": {
    top: "200px",
    left: "50px",
    width: "240px",
    fontSize: "26px",
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: "36px",
  },
};
export const price = {
  zIndex: "10",
  position: "absolute",
  top: "310px",
  left: "50px",
  width: "200px",
  fontSize: "26px",
  fontWeight: "400",
  fontStyle: "normal",
  lineHeight: "35px",
  color: "#FFFFFF",
  userSelect: "none",
  "@media (max-width: 768.9px)": {
    top: "260px",
    left: "10px",
    width: "200px",
    fontSize: "14px",
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: "22px",
  },
  "@media (min-width: 769px) and (max-width: 1199px)": {
    top: "250px",
    left: "50px",
    width: "200px",
    fontSize: "22px",
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: "35px",
  },
};
export const container3 = {
  margin: "0",
  padding: "0",
  marginTop: "20px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "120px",
  width: "100%",
  "@media (max-width: 768.9px)": {
    margin: "0",
    padding: "0",
    marginTop: "10px",
    height: "60px",
  },
  "@media (min-width: 769px) and (max-width: 1199.9px)": {
    margin: "0",
    padding: "0",
    marginTop: "20px",
    height: "100px",
  },
  "@media (min-width: 1200px)": {
    margin: "0",
    padding: "0",
  },
};
export const latest = {
  fontSize: "33px",
  fontWeight: "500",
  fontStyle: "normal",
  lineHeight: "43px",
  color: "#000000",
  userSelect: "none",
  margin: "0 8px",
  "@media (max-width: 768.9px)": {
    fontSize: "16px",
    fontWeight: "800",
    fontStyle: "normal",
    lineHeight: "27px",
  },
  "@media (min-width: 769px) and (max-width: 1199.9px)": {
    fontSize: "33px",
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: "43px",
  },
};
export const discounts = {
  minWidth: "175px",
  fontSize: "16px",
  fontWeight: "500",
  fontStyle: "normal",
  color: "rgba(161, 138, 104, 1)",
  userSelect: "none",
  margin: "10px 0 0 8px",
  "@media (max-width: 768.9px)": {
    marginTop: "0px",
    fontSize: "12px",
  },
  "@media (min-width: 769px) and (max-width: 1199.9px)": {
    marginTop: "4px",
    fontSize: "16px",
  },
};
export const btnAll = {
  width: "193px",
  height: "53px",
  color: "rgba(161, 138, 104, 1)",
  fontSize: "20px",
  fontWeight: "700",
  fontStyle: "normal",
  lineHeight: "normal",
  display: "flex",
  justifyContent: "end",
  background: "transparent",
  margin: "20px 8px 0 8px",
  "&:hover": {
    background: "transparent",
    color: "#000000",
  },
  "@media (max-width: 768.9px)": {
    width: "120px",
    height: "24px",
    fontSize: "14px",
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: "22px",
  },
  "@media (min-width: 769px) and (max-width: 1199.9px)": {
    width: "193px",
    height: "53px",
    fontSize: "20px",
    fontWeight: "700",
    fontStyle: "normal",
    lineHeight: "normal",
  },
};
export const container4 = {
  margin: "0",
  padding: "0",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  "@media (max-width: 437.9px)": {
    margin: "0",
    padding: "0",
    justifyContent: "space-around",
  },
  "@media (min-width: 438px) and (max-width: 768.9px)": {
    margin: "0",
    padding: "0",
  },
  "@media (min-width: 769px) and (max-width: 1199.9px)": {
    margin: "0",
    padding: "0",
  },
  "@media (min-width: 1200px)": {
    margin: "0",
    padding: "0",
  },
};
export const carouselIcon = {
  margin: "8px",
  width: "9px",
  height: "9px",
  color: "#FFFFFF",
  backgroundColor: "#FFFFFF",
  borderRadius: "50%",
  "@media (max-width: 768.9px)": {
    margin: "4px",
    width: "5px",
    height: "5px",
  },
  "@media (min-width: 769px) and (max-width: 1199.9px)": {
    margin: "8px",
    width: "9px",
    height: "9px",
  },
};
export const carouselItem1 = {
  height: "596px",
  backgroundImage: `url(${img1})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  borderRadius: "16px",
  "@media (max-width: 768.9px)": {
    height: "350px",
    backgroundPosition: "80%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    borderRadius: "8px",
  },
  "@media (min-width: 769px) and (max-width: 1199.9px)": {
    height: "460px",
    backgroundPosition: "right",
    backgroundSize: "cover",
  },
};
export const carouselItem2 = {
  height: "596px",
  backgroundImage: `url(${img2})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  borderRadius: "16px",
  "@media (max-width: 768.9px)": {
    height: "350px",
    backgroundPosition: "80%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    borderRadius: "8px",
  },
  "@media (min-width: 769px) and (max-width: 1199px)": {
    height: "460px",
    backgroundPosition: "right",
    backgroundSize: "cover",
  },
};
export const carouselItem3 = {
  height: "596px",
  backgroundImage: `url(${img3})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  borderRadius: "16px",
  "@media (max-width: 768.9px)": {
    height: "350px",
    backgroundPosition: "80%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    borderRadius: "8px",
  },
  "@media (min-width: 769px) and (max-width: 1199px)": {
    height: "460px",
    backgroundPosition: "right",
    backgroundSize: "cover",
  },
};
export const carouselItem4 = {
  height: "596px",
  backgroundImage: `url(${img4})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  borderRadius: "16px",
  "@media (max-width: 768.9px)": {
    height: "350px",
    backgroundPosition: "80%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    borderRadius: "8px",
  },
  "@media (min-width: 769px) and (max-width: 1199px)": {
    height: "460px",
    backgroundPosition: "right",
    backgroundSize: "cover",
  },
};
export const carouselItem5 = {
  height: "596px",
  backgroundImage: `url(${img5})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  borderRadius: "16px",
  "@media (max-width: 768.9px)": {
    height: "350px",
    backgroundPosition: "80%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    borderRadius: "8px",
  },
  "@media (min-width: 769px) and (max-width: 1199px)": {
    height: "460px",
    backgroundPosition: "right",
    backgroundSize: "cover",
  },
};

export const useStyles = makeStyles(() => ({
  link: {
    textDecoration: "none",
  },
}));
