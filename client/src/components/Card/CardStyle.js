import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: "DM Sans, sans-serif",
    button: {
        textTransform: "none"
    },
  },
});


export const useStyles = makeStyles((theme) => ({

    cardContainer: {
        padding: "0",
        margin: "0",
        marginBottom: "60px",
        width: "350px",
        height: "450px",
        "&:hover": {
            "& $cardHover": {
                top: "285px",
            }            
        },
    },
    cardImgContainer: {
        position: "relative",
        overflow: "hidden",
        padding: "0",
        margin: "0",
        width: "350px",
        height: "350px",
        borderRadius: "8px",
    },
    cardImg: {
        width: "350px",
        height: "350px",
    },
    cardName: {
        marginTop: "20px",
        fontFamily: "DM Sans, sans-serif",
        fontSize: "20px",
        fontWeight: "400",
        fontStyle: "normal",
        lineHeight: "26px",
        color: "#000000",
    },
    cardPrice: {
        marginTop: "10px",
        fontFamily: "DM Sans, sans-serif",
        fontSize: "20px",
        fontWeight: "500",
        fontStyle: "normal",
        lineHeight: "26px",
        color: "rgba(161, 138, 104, 1)",
    },
    cardHover: {
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
        backgroundColor: "rgba(255, 255, 255, 0.50);",
        transition: "all 0.5s ease",
    },
    cardHoverAdd: {
        fontFamily: "DM Sans, sans-serif",
        fontSize: "16px",
        fontWeight: "700",
        fontStyle: "normal",
        lineHeight: "normal",
        color: "#000000",
        cursor: "pointer",
        userSelect: "none",
    },
    cardHoverImg: {
        width: "20px",
        height: "20px",
        cursor: "pointer",
        userSelect: "none",
    },     
  
  "@media (max-width: 579.9px)": {
    cardContainer: {
        marginBottom: "10px",
        width: "140px",
        height: "208px",
        "&:hover": {
            "& $cardHover": {
                top: "106px",
            }            
      },
    },
    cardImgContainer: {
        width: "136px",
        height: "136px",
        borderRadius: "4px",
    },
    cardImg: {
        width: "136px",
        height: "136px",
    },
    cardName: {
        marginTop: "8px",
        fontFamily: "DM Sans, sans-serif",
        fontSize: "14px",
        fontWeight: "400",
        fontStyle: "normal",
        lineHeight: "22px",
        color: "#000000",
    },
    cardPrice: {
        marginTop: "5px",
        fontFamily: "DM Sans, sans-serif",
        fontSize: "12px",
        fontWeight: "400",
        fontStyle: "normal",
        lineHeight: "20px",
        color: "rgba(161, 138, 104, 1)",
    },
    cardHover: {
        paddingLeft: "20px",
        paddingRight: "20px",
        top: "136px",
        left: "0px",
        width: "100%",
        height: "30px",
        backgroundColor: "rgba(255, 255, 255, 0.50);",
        transition: "all 0.5s ease",
    },
    cardHoverAdd: {
        fontFamily: "DM Sans, sans-serif",
        fontSize: "8px",
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: "normal",
        color: "#000000",
    },
    cardHoverImg: {
        width: "10px",
        height: "10px",
    },
    },
    "@media (min-width: 580px) and (max-width: 639.9px)":{
        cardContainer: {
            marginBottom: "40px",
            width: "150px",
            height: "193px",
            "&:hover": {
                "& $cardHover": {
                    top: "120px",
                }            
          },
        },
        cardImgContainer: {
            width: "150px",
            height: "150px",
            borderRadius: "5px",
        },
        cardImg: {
            width: "150px",
            height: "150px",
        },
        cardName: {
            marginTop: "8px",
            fontFamily: "DM Sans, sans-serif",
            fontSize: "14px",
            fontWeight: "400",
            fontStyle: "normal",
            lineHeight: "22px",
            color: "#000000",
        },
        cardPrice: {
            marginTop: "5px",
            fontFamily: "DM Sans, sans-serif",
            fontSize: "12px",
            fontWeight: "400",
            fontStyle: "normal",
            lineHeight: "20px",
            color: "rgba(161, 138, 104, 1)",
        },
        cardHover: {
            paddingLeft: "20px",
            paddingRight: "20px",
            top: "150px",
            left: "0px",
            width: "100%",
            height: "30px",
            backgroundColor: "rgba(255, 255, 255, 0.50);",
            transition: "all 0.5s ease",
        },
        cardHoverAdd: {
            fontFamily: "DM Sans, sans-serif",
            fontSize: "8px",
            fontWeight: "600",
            fontStyle: "normal",
            lineHeight: "normal",
            color: "#000000",
        },
        cardHoverImg: {
            width: "10px",
            height: "10px",
        },
    },
    "@media (min-width: 640px) and (max-width: 768.9px)":{
        cardContainer: {
            marginBottom: "40px",
            width: "182px",
            height: "218px",
            "&:hover": {
                "& $cardHover": {
                    top: "135px",
                }            
          },
        },
        cardImgContainer: {
            width: "170px",
            height: "170px",
            borderRadius: "5px",
        },
        cardImg: {
            width: "170px",
            height: "170px",
        },
        cardName: {
            marginTop: "10px",
            fontFamily: "DM Sans, sans-serif",
            fontSize: "16px",
            fontWeight: "400",
            fontStyle: "normal",
            lineHeight: "22px",
            color: "#000000",
        },
        cardPrice: {
            marginTop: "5px",
            fontFamily: "DM Sans, sans-serif",
            fontSize: "14px",
            fontWeight: "400",
            fontStyle: "normal",
            lineHeight: "20px",
            color: "rgba(161, 138, 104, 1)",
        },
        cardHover: {
            paddingLeft: "20px",
            paddingRight: "20px",
            top: "170px",
            left: "0px",
            width: "100%",
            height: "35px",
            backgroundColor: "rgba(255, 255, 255, 0.50);",
            transition: "all 0.5s ease",
        },
        cardHoverAdd: {
            fontFamily: "DM Sans, sans-serif",
            fontSize: "10px",
            fontWeight: "600",
            fontStyle: "normal",
            lineHeight: "normal",
            color: "#000000",
        },
        cardHoverImg: {
            width: "11px",
            height: "11px",
        },
    },
    "@media (min-width: 769px) and (max-width: 899.9px)":{
        cardContainer: {
            marginBottom: "30px",
            width: "220px",
            height: "257px",
            "&:hover": {
                "& $cardHover": {
                    top: "160px",
                }            
          },
        },
        cardImgContainer: {
            width: "200px",
            height: "200px",
            borderRadius: "5px",
        },
        cardImg: {
            width: "200px",
            height: "200px",
        },
        cardName: {
            marginTop: "10px",
            fontFamily: "DM Sans, sans-serif",
            fontSize: "16px",
            fontWeight: "400",
            fontStyle: "normal",
            lineHeight: "22px",
            color: "#000000",
        },
        cardPrice: {
            marginTop: "5px",
            fontFamily: "DM Sans, sans-serif",
            fontSize: "14px",
            fontWeight: "400",
            fontStyle: "normal",
            lineHeight: "20px",
            color: "rgba(161, 138, 104, 1)",
        },
        cardHover: {
            paddingLeft: "20px",
            paddingRight: "20px",
            top: "200px",
            left: "0px",
            width: "100%",
            height: "40px",
            backgroundColor: "rgba(255, 255, 255, 0.50);",
            transition: "all 0.5s ease",
        },
        cardHoverAdd: {
            fontFamily: "DM Sans, sans-serif",
            fontSize: "10px",
            fontWeight: "600",
            fontStyle: "normal",
            lineHeight: "normal",
            color: "#000000",
        },
        cardHoverImg: {
            width: "11px",
            height: "11px",
        },
    },
    "@media (min-width: 900px) and (max-width: 1023.9px)":{
        cardContainer: {
            marginBottom: "35px",
            width: "245px",
            height: "308px",
            "&:hover": {
                "& $cardHover": {
                    top: "195px",
                }            
          },
        },
        cardImgContainer: {
            width: "240px",
            height: "240px",
            borderRadius: "5px",
        },
        cardImg: {
            width: "240px",
            height: "240px",
        },
        cardName: {
            marginTop: "14px",
            fontFamily: "DM Sans, sans-serif",
            fontSize: "18px",
            fontWeight: "400",
            fontStyle: "normal",
            lineHeight: "22px",
            color: "#000000",
        },
        cardPrice: {
            marginTop: "10px",
            fontFamily: "DM Sans, sans-serif",
            fontSize: "16px",
            fontWeight: "400",
            fontStyle: "normal",
            lineHeight: "20px",
            color: "rgba(161, 138, 104, 1)",
        },
        cardHover: {
            paddingLeft: "20px",
            paddingRight: "20px",
            top: "240px",
            left: "0px",
            width: "100%",
            height: "45px",
            backgroundColor: "rgba(255, 255, 255, 0.50);",
            transition: "all 0.5s ease",
        },
        cardHoverAdd: {
            fontFamily: "DM Sans, sans-serif",
            fontSize: "12px",
            fontWeight: "600",
            fontStyle: "normal",
            lineHeight: "normal",
            color: "#000000",
        },
        cardHoverImg: {
            width: "13px",
            height: "13px",
        },
    },
  "@media (min-width: 1024px) and (max-width: 1199px)": {
    cardContainer: {
        marginBottom: "60px",
        width: "290px",
        height: "360px",
        "&:hover": {
            "& $cardHover": {
                top: "220px",
            }            
      },
    },
    cardImgContainer: {
        width: "280px",
        height: "280px",
        borderRadius: "6px",
    },
    cardImg: {
        width: "280px",
        height: "280px",
    },
    cardName: {
        marginTop: "20px",
        fontFamily: "DM Sans, sans-serif",
        fontSize: "20px",
        fontWeight: "400",
        fontStyle: "normal",
        lineHeight: "26px",
        color: "#000000",
    },
    cardPrice: {
        marginTop: "10px",
        fontFamily: "DM Sans, sans-serif",
        fontSize: "20px",
        fontWeight: "500",
        fontStyle: "normal",
        lineHeight: "26px",
        color: "rgba(161, 138, 104, 1)",
    },
    cardHover: {
        paddingLeft: "20px",
        paddingRight: "20px",
        top: "280px",
        left: "0px",
        width: "100%",
        height: "60px",
        backgroundColor: "rgba(255, 255, 255, 0.50);",
        transition: "all 0.5s ease",
    },
    cardHoverAdd: {
        fontFamily: "DM Sans, sans-serif",
        fontSize: "16px",
        fontWeight: "700",
        fontStyle: "normal",
        lineHeight: "normal",
        color: "#000000",
    },
    cardHoverImg: {
        width: "17px",
        height: "17px",
    },
  },
}));