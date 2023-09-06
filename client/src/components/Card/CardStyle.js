import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: "DM Sans, sans-serif",
    button: {
      textTransform: "none",
    },
  },
});

export const cardContainer = {
  padding: "0",
  margin: "0 5px 80px 5px",
  width: "350px",
  height: "450px",
  "&:hover": {
    "& .cardHover": {
      top: "285px",
    },
  },
  "@media (max-width: 437.9px)": {
    padding: "0",
    margin: "0 0px 60px 0px",
    width: "150px",
    height: "193px",
    "&:hover": {
      "& .cardHover": {
        top: "120px",
      },
    },
  },
  "@media (min-width: 438px) and (max-width: 575.9px)": {
    padding: "0",
    margin: "0 0px 30px 0px",
    width: "140px",
    height: "208px",
    "&:hover": {
      "& .cardHover": {
        top: "106px",
      },
    },
  },
  "@media (min-width: 576px) and (max-width: 639.9px)": {
    padding: "0",
    margin: "0 5px 60px 5px",
    width: "150px",
    height: "193px",
    "&:hover": {
      "& .cardHover": {
        top: "120px",
      },
    },
  },
  "@media (min-width: 640px) and (max-width: 768.9px)": {
    padding: "0",
    margin: "0 5px 60px 5px",
    width: "182px",
    height: "218px",
    "&:hover": {
      "& .cardHover": {
        top: "135px",
      },
    },
  },
  "@media (min-width: 769px) and (max-width: 887.9px)": {
    padding: "0",
    margin: "0 5px 50px 5px",
    width: "205px",
    height: "257px",
    "&:hover": {
      "& .cardHover": {
        top: "160px",
      },
    },
  },
  "@media (min-width: 888px) and (max-width: 1023.9px)": {
    padding: "0",
    margin: "0 5px 60px 5px",
    width: "240px",
    height: "308px",
    "&:hover": {
      "& .cardHover": {
        top: "195px",
      },
    },
  },
  "@media (min-width: 1024px) and (max-width: 1199.9px)": {
    padding: "0",
    margin: "0 5px 80px 5px",
    width: "280px",
    height: "360px",
    "&:hover": {
      "& .cardHover": {
        top: "220px",
      },
    },
  },
  "@media (min-width: 1200px)": {
    padding: "0",
    margin: "0 5px 80px 5px",
    width: "350px",
    height: "450px",
    "&:hover": {
      "& .cardHover": {
        top: "285px",
      },
    },
  },
};
export const cardImgContainer = {
  position: "relative",
  overflow: "hidden",
  padding: "0",
  margin: "0",
  width: "350px",
  height: "350px",
  borderRadius: "8px",
  "@media (max-width: 437.9px)": {
    padding: "0",
    margin: "0",
    width: "150px",
    height: "150px",
    borderRadius: "5px",
  },
  "@media (min-width: 438px) and (max-width: 575.9px)": {
    padding: "0",
    margin: "0",
    width: "136px",
    height: "136px",
    borderRadius: "4px",
  },
  "@media (min-width: 576px) and (max-width: 639.9px)": {
    padding: "0",
    margin: "0",
    width: "150px",
    height: "150px",
    borderRadius: "5px",
  },
  "@media (min-width: 640px) and (max-width: 768.9px)": {
    padding: "0",
    margin: "0",
    width: "170px",
    height: "170px",
    borderRadius: "5px",
  },
  "@media (min-width: 769px) and (max-width: 887.9px)": {
    padding: "0",
    margin: "0",
    width: "200px",
    height: "200px",
    borderRadius: "5px",
  },
  "@media (min-width: 888px) and (max-width: 1023.9px)": {
    padding: "0",
    margin: "0",
    width: "240px",
    height: "240px",
    borderRadius: "5px",
  },
  "@media (min-width: 1024px) and (max-width: 1199.9px)": {
    padding: "0",
    margin: "0",
    width: "280px",
    height: "280px",
    borderRadius: "6px",
  },
  "@media (min-width: 1200px)": {
    padding: "0",
    margin: "0",
    width: "350px",
    height: "350px",
    borderRadius: "8px",
  },
};
export const cardNameContainer = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  "@media (max-width: 575.9px)": {
    padding: "0",
    margin: "0",
    width: "96%",
  },
  "@media (min-width: 576px) and (max-width: 639.9px)": {
    padding: "0",
    margin: "0",
  },
  "@media (min-width: 640px) and (max-width: 768.9px)": {
    padding: "0",
    margin: "0",
    width: "93%",
  },
  "@media (min-width: 769px) and (max-width: 887.9px)": {
    padding: "0",
    margin: "3px 0 0 0",
    width: "97%",
  },
  "@media (min-width: 888px) and (max-width: 1023.9px)": {
    padding: "0",
    margin: "8px 0 0 0",
  },
  "@media (min-width: 1024px) and (max-width: 1199px)": {
    padding: "0",
    margin: "12px 0 0 0",
  },
  "@media (min-width: 1200px)": {
    margin: "12px 0 0 0",
    padding: "0",
  },
};
export const cardHover = {
  position: "absolute",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingLeft: "20px",
  paddingRight: "20px",
  top: "415px",
  left: "0px",
  width: "100%",
  height: "65px",
  backgroundColor: "rgba(255, 255, 255, 0.50)",
  transition: "all 0.5s ease",
  "@media (max-width: 437.9px)": {
    paddingLeft: "20px",
    paddingRight: "20px",
    top: "150px",
    left: "0px",
    width: "100%",
    height: "30px",
  },
  "@media (min-width: 438px) and (max-width: 575.9px)": {
    paddingLeft: "20px",
    paddingRight: "20px",
    top: "136px",
    left: "0px",
    width: "100%",
    height: "30px",
  },
  "@media (min-width: 576px) and (max-width: 639.9px)": {
    paddingLeft: "20px",
    paddingRight: "20px",
    top: "150px",
    left: "0px",
    width: "100%",
    height: "30px",
  },
  "@media (min-width: 640px) and (max-width: 768.9px)": {
    paddingLeft: "20px",
    paddingRight: "20px",
    top: "170px",
    left: "0px",
    width: "100%",
    height: "35px",
  },
  "@media (min-width: 769px) and (max-width: 887.9px)": {
    paddingLeft: "20px",
    paddingRight: "20px",
    top: "200px",
    left: "0px",
    width: "100%",
    height: "40px",
  },
  "@media (min-width: 888px) and (max-width: 1023.9px)": {
    paddingLeft: "20px",
    paddingRight: "20px",
    top: "240px",
    left: "0px",
    width: "100%",
    height: "45px",
  },
  "@media (min-width: 1024px) and (max-width: 1199px)": {
    paddingLeft: "20px",
    paddingRight: "20px",
    top: "280px",
    left: "0px",
    width: "100%",
    height: "60px",
  },
  "@media (min-width: 1200px)": {
    paddingLeft: "20px",
    paddingRight: "20px",
    top: "415px",
    left: "0px",
    width: "100%",
    height: "65px",
  },
};
export const cardHoverAdd = {
  fontSize: "16px",
  fontWeight: "700",
  fontStyle: "normal",
  lineHeight: "normal",
  color: "#000000",
  cursor: "pointer",
  userSelect: "none",
  "@media (max-width: 575.9px)": {
    fontSize: "8px",
    fontWeight: "600",
    fontStyle: "normal",
    lineHeight: "normal",
  },
  "@media (min-width: 576px) and (max-width: 639.9px)": {
    fontSize: "8px",
    fontWeight: "600",
    fontStyle: "normal",
    lineHeight: "normal",
  },
  "@media (min-width: 640px) and (max-width: 768.9px)": {
    fontSize: "10px",
    fontWeight: "600",
    fontStyle: "normal",
    lineHeight: "normal",
  },
  "@media (min-width: 769px) and (max-width: 887.9px)": {
    fontSize: "10px",
    fontWeight: "600",
    fontStyle: "normal",
    lineHeight: "normal",
  },
  "@media (min-width: 888px) and (max-width: 1023.9px)": {
    fontSize: "12px",
    fontWeight: "600",
    fontStyle: "normal",
    lineHeight: "normal",
  },
  "@media (min-width: 1024px) and (max-width: 1199.9px)": {
    fontSize: "16px",
    fontWeight: "700",
    fontStyle: "normal",
    lineHeight: "normal",
  },
  "@media (min-width: 1200px)": {
    fontSize: "16px",
    fontWeight: "700",
    fontStyle: "normal",
    lineHeight: "normal",
  },
};
export const cardHoverFavouriteButton = {
  width: "30px",
  height: "30px",
  "@media (max-width: 575.9px)": {
    width: "16px",
    height: "16px",
  },
  "@media (min-width: 576px) and (max-width: 769px)": {
    width: "20px",
    height: "20px",
  },
};
export const cardName = {
  marginTop: "20px",
  fontSize: "20px",
  fontWeight: "400",
  fontStyle: "normal",
  lineHeight: "26px",
  color: "#000000",
  textTransform: "capitalize",
  "@media (max-width: 575.9px)": {
    marginTop: "8px",
    fontSize: "14px",
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: "22px",
  },
  "@media (min-width: 576px) and (max-width: 639.9px)": {
    marginTop: "8px",
    fontSize: "14px",
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: "22px",
  },
  "@media (min-width: 640px) and (max-width: 768.9px)": {
    marginTop: "10px",
    fontSize: "15px",
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: "22px",
  },
  "@media (min-width: 769px) and (max-width: 887.9px)": {
    marginTop: "10px",
    fontSize: "16px",
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: "22px",
  },
  "@media (min-width: 888px) and (max-width: 1023.9px)": {
    marginTop: "14px",
    fontSize: "18px",
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: "22px",
  },
  "@media (min-width: 1024px) and (max-width: 1199.9px)": {
    marginTop: "20px",
    fontSize: "20px",
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: "26px",
  },
};
export const cardPrice = {
  fontSize: "20px",
  fontWeight: "500",
  fontStyle: "normal",
  lineHeight: "26px",
  color: "rgba(161, 138, 104, 1)",
  "@media (max-width: 575.9px)": {
    fontSize: "12px",
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: "20px",
  },
  "@media (min-width: 576px) and (max-width: 639.9px)": {
    fontSize: "12px",
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: "20px",
  },
  "@media (min-width: 640px) and (max-width: 768.9px)": {
    fontSize: "14px",
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: "20px",
  },
  "@media (min-width: 769px) and (max-width: 887.9px)": {
    fontSize: "14px",
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: "20px",
  },
  "@media (min-width: 888px) and (max-width: 1023.9px)": {
    fontSize: "16px",
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: "20px",
  },
  "@media (min-width: 1024px) and (max-width: 1199.9px)": {
    fontSize: "20px",
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: "26px",
  },
  "@media (min-width: 1200px)": {
    fontSize: "20px",
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: "26px",
  },
};
export const cardMaterial = {
  fontSize: "16px",
  fontWeight: "400",
  fontStyle: "normal",
  lineHeight: "26px",
  color: "#707070",
  "@media (max-width: 575.9px)": {
    fontSize: "10px",
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: "26px",
  },
  "@media (min-width: 576px) and (max-width: 639.9px)": {
    fontSize: "10px",
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: "26px",
  },
  "@media (min-width: 640px) and (max-width: 768.9px)": {
    fontSize: "12px",
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: "26px",
  },
  "@media (min-width: 769px) and (max-width: 887.9px)": {
    fontSize: "12px",
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: "26px",
  },
  "@media (min-width: 888px) and (max-width: 1023.9px)": {
    fontSize: "16px",
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: "26px",
  },
  "@media (min-width: 1024px) and (max-width: 1199.9px)": {
    fontSize: "16px",
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: "26px",
  },
  "@media (min-width: 1200px)": {
    fontSize: "16px",
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: "26px",
  },
};
export const cardBrand = {
  marginTop: "10px",
  fontSize: "20px",
  fontWeight: "500",
  fontStyle: "normal",
  lineHeight: "26px",
  color: "#000000",
  "@media (max-width: 575.9px)": {
    marginTop: "0px",
    fontSize: "14px",
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: "26px",
  },
  "@media (min-width: 576px) and (max-width: 639.9px)": {
    marginTop: "0px",
    fontSize: "14px",
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: "26px",
  },
  "@media (min-width: 640px) and (max-width: 768.9px)": {
    marginTop: "0px",
    fontSize: "14px",
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: "26px",
  },
  "@media (min-width: 769px) and (max-width: 887.9px)": {
    marginTop: "0px",
    fontSize: "14px",
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: "26px",
  },
  "@media (min-width: 888px) and (max-width: 1023.9px)": {
    marginTop: "5px",
    fontSize: "18px",
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: "26px",
  },
  "@media (min-width: 1024px) and (max-width: 1199.9px)": {
    marginTop: "10px",
    fontSize: "20px",
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: "26px",
  },
  "@media (min-width: 1200px)": {
    marginTop: "10px",
    fontSize: "20px",
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: "26px",
  },
};

export const useStyles = makeStyles(() => ({
  cardImg: {
    margin: "0",
    padding: "0",
    width: "350px",
    height: "350px",
    cursor: "pointer",
  },
  "@media (max-width: 437.9px)": {
    cardImg: {
      width: "150px",
      height: "150px",
    },
  },
  "@media (min-width: 438px) and (max-width: 575.9px)": {
    cardImg: {
      width: "136px",
      height: "136px",
    },
  },
  "@media (min-width: 576px) and (max-width: 639.9px)": {
    cardImg: {
      width: "150px",
      height: "150px",
    },
  },
  "@media (min-width: 640px) and (max-width: 768.9px)": {
    cardImg: {
      width: "170px",
      height: "170px",
    },
  },
  "@media (min-width: 769px) and (max-width: 887.9px)": {
    cardImg: {
      width: "200px",
      height: "200px",
    },
  },
  "@media (min-width: 888px) and (max-width: 1023.9px)": {
    cardImg: {
      width: "240px",
      height: "240px",
    },
  },
  "@media (min-width: 1024px) and (max-width: 1199px)": {
    cardImg: {
      width: "280px",
      height: "280px",
    },
  },
}));
