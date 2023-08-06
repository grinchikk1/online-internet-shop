import React, { useState } from "react";
import {
  Container,
  Button,
  Box,
  Typography,
  IconButton,
  Divider,
  Snackbar,
  Alert,
  Rating,
  Tabs,
  Tab,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SocialMediaIcons from "./SocialMediaIcons";
import { useStyles } from "./ProductCardStyles";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { TabPanel } from "./TabPanel";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useTheme } from "@mui/material/styles";

export default function ProductCard({ product }) {
  const theme = useTheme();
  const classes = useStyles();
  const navigate = useNavigate();

  const {
    image,
    name,
    currentPrice,
    brand,
    itemNo,
    quantity,
    productMaterial,
    country,
    categories,
  } = product;

  const isMobile = useMediaQuery("(max-width: 900px)");
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [showButtons, setShowButtons] = useState({
    addToCart: false,
    share: false,
    showMore: false,
    description: false,
    additionalInfo: false,
    reviews: false,
  });
  const [value, setValue] = useState(1);
  const [valueTab, setValueTab] = useState("1");

  const handleScroll = (event) => {
    const img = event.currentTarget;
    const xClick = event.clientX - img.getBoundingClientRect().left;
    const halfWidth = img.clientWidth / 2;

    if (xClick >= halfWidth) {
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % image.length);
    } else {
      setCurrentPhotoIndex((prevIndex) =>
        prevIndex === 0 ? image.length - 1 : prevIndex - 1
      );
    }
  };

  const handleDecrement = () => {
    if (value > 0) {
      setValue((prevValue) => prevValue - 1);
    }
  };

  const handleIncrement = () => {
    setValue((prevValue) => prevValue + 1);
  };

  const handleTabChange = (event, newValue) => {
    setValueTab(newValue);
  };

  const handleButtonClick = (buttonName) => {
    setShowButtons((prevButtons) => ({
      ...prevButtons,
      [buttonName]: !prevButtons[buttonName],
    }));
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setShowButtons((prevButtons) => ({
      ...prevButtons,
      addToCart: false,
    }));
  };

  const handleClickContinueBtn = () => {
    navigate("/shop");
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: isMobile ? "row" : "column",
        width: "100%",
        paddingTop: isMobile ? "0" : "128px",
      }}
    >
      {/* mobile */}
      {isMobile && (
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Container maxWidth={"sm"} disableGutters={true}>
            <Box
              sx={{
                backgroundImage: `url(${image[currentPhotoIndex]})`,
                width: "100%",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                borderRadius: "4px",
                height: "374px",
              }}
              onClick={handleScroll}
            />
            <Box
              sx={{ display: "flex", justifyContent: "center", mt: 2, mb: 4 }}
            >
              {image.map((img, index) => (
                <Box
                  key={index}
                  sx={{
                    width: "100%",
                    height: "8px",
                    backgroundColor:
                      index === currentPhotoIndex ? "#707070" : "#EFEFEF",
                    cursor: "pointer",
                    transition: "all 0.2s ease-in-out",
                  }}
                  onClick={() => setCurrentPhotoIndex(index)}
                />
              ))}
            </Box>
          </Container>
          <Container maxWidth={"sm"} disableGutters={true}>
            <Typography
              variant="h2"
              sx={{
                fontSize: "20px",
                fontWeight: "400",
                lineHeight: "26px",
              }}
            >
              {name}
            </Typography>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              sx={{ paddingTop: "5px", paddingBottom: "24px" }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: "#A18A68",
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "26px",
                  textTransform: "capitalize",
                }}
              >
                {`$  ${currentPrice},00`}
              </Typography>
              <IconButton onClick={() => handleButtonClick("share")}>
                <ShareIcon fontSize="small" sx={{ color: "#000" }} />
              </IconButton>
            </Box>
            {showButtons.share && (
              <Box
                display={"flex"}
                sx={{
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "10px 0 20px",
                  width: "250px",
                  color: "#707070",
                }}
              >
                <SocialMediaIcons />
              </Box>
            )}
            <Button
              variant="contained"
              sx={{
                background: theme.palette.allCollors.white,
                color: theme.palette.allCollors.black,
                height: "53px",
                width: "100%",
                border: "1px solid #000000",
                borderRadius: "4px",
                ":hover": {
                  background: theme.palette.allCollors.black,
                  color: theme.palette.allCollors.white,
                  transition: "all 0.3s ease-in-out",
                },
              }}
              onClick={() => handleButtonClick("addToCart")}
            >
              Add to cart
            </Button>
            <Typography
              sx={{
                paddingTop: "16px",
                fontSize: "12px",
                lineHeight: "20px",
                color: "#707070",
                overflow: "hidden",
                display: "-webkit-box",
                WebkitLineClamp: showButtons.showMore ? "unset" : 1,
                WebkitBoxOrient: "vertical",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              placerat, augue a volutpat hendrerit, sapien tortor faucibus
              augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu
              facilisis consequat sed eu felis.
            </Typography>
            <Button
              disableRipple
              variant={"text"}
              size={"small"}
              sx={{
                display: "flex",
                fontSize: "12px",
                lineHeight: "20px",
                color: theme.palette.allCollors.accent,
                padding: "0",
                ":hover": {
                  background: theme.palette.allCollors.white,
                  transition: "all 0.2s ease-in-out",
                },
              }}
              onClick={() => handleButtonClick("showMore")}
            >
              View more{" "}
              <ArrowForwardIosIcon
                fontSize="12px"
                sx={{
                  paddingLeft: "4px",
                  color: showButtons.showMore
                    ? theme.palette.allCollors.dark_gray
                    : theme.palette.allCollors.black,
                  transform: showButtons.showMore
                    ? "rotate(-0.25turn)"
                    : "rotate(0deg)",
                  transition: "transform 0.2s ease-in-out",
                }}
              />
            </Button>
            <Divider
              sx={{
                color: "#D8D8D8",
                paddingTop: "14px",
              }}
            />
            <Button
              disableRipple
              variant={"text"}
              size={"small"}
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                fontSize: "12px",
                lineHeight: "20px",
                color: "#000",
                marginTop: "14px",
                padding: "10px 0",
                ":hover": {
                  background: "#FFF",
                  transition: "all 0.3s ease-in-out",
                },
              }}
              onClick={() => handleButtonClick("description")}
            >
              Description
              <ExpandMoreIcon
                fontSize="small"
                sx={{
                  color: showButtons.description ? "#707070" : "#000",
                  transform: showButtons.description
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
                  transition: "transform 0.2s ease-in-out",
                }}
              />
            </Button>
            {showButtons.description && (
              <Typography
                sx={{
                  fontSize: "12px",
                  lineHeight: "20px",
                  color: "#707070",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                placerat, augue a volutpat hendrerit, sapien tortor faucibus
                augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu
                facilisis consequat sed eu felis. Nunc sed porta augue. Morbi
                porta tempor odio, in molestie diam bibendum sed.
              </Typography>
            )}
            <Button
              disableRipple
              variant={"text"}
              size={"small"}
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                fontSize: "12px",
                lineHeight: "20px",
                color: "#000",
                marginTop: "14px",
                padding: "10px 0",
                ":hover": {
                  background: "#FFF",
                  transition: "all 0.3s ease-in-out",
                },
              }}
              onClick={() => handleButtonClick("additionalInfo")}
            >
              Additional information
              <ExpandMoreIcon
                fontSize="small"
                sx={{
                  color: showButtons.additionalInfo ? "#707070" : "#000",
                  transform: showButtons.additionalInfo
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
                  transition: "transform 0.2s ease-in-out",
                }}
              />
            </Button>
            {showButtons.additionalInfo && (
              <>
                <Typography
                  className={classes.title_text_color_mobile}
                  sx={{ paddingBottom: "10px" }}
                >
                  Country:{" "}
                  <span className={classes.text_color_mobile}>{country}</span>{" "}
                </Typography>
                <Typography
                  className={classes.title_text_color_mobile}
                  sx={{ paddingBottom: "10px" }}
                >
                  Brand:{" "}
                  <span className={classes.text_color_mobile}>{brand}</span>{" "}
                </Typography>
                <Typography
                  className={classes.title_text_color_mobile}
                  sx={{ paddingBottom: "10px" }}
                >
                  Quantity:{" "}
                  <span className={classes.text_color_mobile}>{quantity}</span>{" "}
                </Typography>
                <Typography className={classes.title_text_color_mobile}>
                  Material:{" "}
                  <span className={classes.text_color_mobile}>
                    {productMaterial}
                  </span>{" "}
                </Typography>
              </>
            )}
            <Button
              disableRipple
              variant={"text"}
              size={"small"}
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                fontSize: "12px",
                lineHeight: "20px",
                color: "#000",
                marginTop: "14px",
                padding: "10px 0",
                ":hover": {
                  background: "#FFF",
                  transition: "all 0.3s ease-in-out",
                },
              }}
              onClick={() => handleButtonClick("reviews")}
            >
              Reviews(0)
              <ExpandMoreIcon
                fontSize="small"
                sx={{
                  color: showButtons.reviews ? "#707070" : "#000",
                  transform: showButtons.reviews
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
                  transition: "transform 0.2s ease-in-out",
                }}
              />
            </Button>
            {showButtons.reviews && (
              <Typography
                sx={{
                  fontSize: "12px",
                  lineHeight: "20px",
                  color: "#707070",
                  padding: "10px 0",
                }}
              >
                Reviews content
              </Typography>
            )}
            <Divider
              sx={{
                color: "#D8D8D8",
                paddingTop: "14px",
              }}
            />
            <Button
              disableRipple
              variant={"text"}
              size={"small"}
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                fontSize: "12px",
                lineHeight: "20px",
                color: "#A18A68",
                marginTop: "14px",
                padding: "0",
                ":hover": {
                  background: "#FFF",
                  transition: "all 0.3s ease-in-out",
                },
              }}
              onClick={handleClickContinueBtn}
            >
              Continue shopping
              <ArrowForwardIosIcon fontSize="small" sx={{ color: "#000" }} />
            </Button>
          </Container>
        </Box>
      )}
      {/* desktop */}
      {!isMobile && (
        <Box
          sx={{
            display: "flex",
            width: "100%",
          }}
        >
          <Container
            disableGutters={true}
            sx={{
              display: "flex",
              flexDirection: "row",
              paddingRight: "20px",
            }}
          >
            <Container
              disableGutters={true}
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "200px",
                height: "100%",
                gap: "40px",
                paddingRight: "40px",
              }}
            >
              {image.map((url, index) => {
                return (
                  <Box
                    key={index}
                    sx={{
                      width: "120px",
                      height: "120px",
                      backgroundImage: `url(${url})`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      borderRadius: "4px",
                      cursor: "pointer",
                      transition: "all 0.2s ease-in-out",
                    }}
                    onClick={() => setCurrentPhotoIndex(index)}
                  />
                );
              })}
            </Container>
            <Container
              disableGutters={true}
              sx={{
                minWidth: "350px",
              }}
            >
              <Box
                sx={{
                  backgroundImage: `url(${image[currentPhotoIndex]})`,
                  width: "100%",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  borderRadius: "4px",
                  height: "600px",
                }}
                onClick={handleScroll}
              />
              <Box
                sx={{ display: "flex", justifyContent: "center", mt: 2, mb: 4 }}
              >
                {image.map((img, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: "100%",
                      height: "8px",
                      backgroundColor:
                        index === currentPhotoIndex ? "#707070" : "#EFEFEF",
                      cursor: "pointer",
                      transition: "all 0.2s ease-in-out",
                    }}
                    onClick={() => setCurrentPhotoIndex(index)}
                  />
                ))}
              </Box>
            </Container>
          </Container>
          <Box>
            <Typography
              variant="h2"
              sx={{
                fontSize: "26px",
                fontWeight: "400",
                lineHeight: "35px",
              }}
            >
              {name}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                paddingTop: "22px",
                color: "#A18A68",
                fontSize: "20px",
                fontWeight: "500",
                lineHeight: "26px",
                textTransform: "capitalize",
              }}
            >
              {`$  ${currentPrice},00`}
            </Typography>
            <Box display={"flex"} sx={{ paddingTop: "44px" }}>
              <Rating
                sx={{
                  color: "#000000",
                }}
                name="customized-10"
                defaultValue={3}
                max={5}
              />
              <Typography
                component="legend"
                sx={{
                  paddingLeft: "24px",
                  fontSize: "16px",
                  lineHeight: "27px",
                  color: "#707070",
                }}
              >
                1 customer review
              </Typography>
            </Box>
            <Typography
              component="div"
              sx={{
                maxWidth: "480px",
                paddingTop: "20px",
                fontSize: "16px",
                lineHeight: "27px",
                color: "#707070",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              placerat, augue a volutpat hendrerit, sapien tortor faucibus
              augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu
              facilisis consequat sed eu felis.
            </Typography>
            <Box
              display="flex"
              paddingTop="48px"
              gap="22px"
              justifyContent="start"
            >
              <Box
                display={"flex"}
                sx={{
                  width: "102px",
                  height: "54px",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  borderRadius: "4px",
                  backgroundColor: "#EFEFEF",
                }}
              >
                <IconButton
                  aria-label="Remove from cart"
                  color="#707070"
                  onClick={handleDecrement}
                >
                  <RemoveIcon
                    sx={{
                      fontSize: "16px",
                    }}
                  />
                </IconButton>
                <Typography
                  sx={{
                    fontSize: "16px",
                    lineHeight: "27px",
                  }}
                >
                  {value}
                </Typography>
                <IconButton
                  aria-label="Add to cart"
                  color="#707070"
                  onClick={handleIncrement}
                >
                  <AddIcon
                    sx={{
                      fontSize: "16px",
                    }}
                  />
                </IconButton>
              </Box>
              <Button
                variant="contained"
                sx={{
                  background: "#FFFFFF",
                  color: "#000000",
                  height: "53px",
                  minWidth: "150px",
                  border: "1px solid #000000",
                  borderRadius: "4px",
                  ":hover": {
                    background: "#000000",
                    color: "#FFFFFF",
                    transition: "all 0.3s ease-in-out",
                  },
                }}
                onClick={() => handleButtonClick("addToCart")}
              >
                Add to cart
              </Button>
            </Box>
            <Box
              display={"flex"}
              sx={{
                alignItems: "center",
                justifyContent: "space-between",
                paddingTop: "50px",
                width: "250px",
                color: "#707070",
              }}
            >
              <SocialMediaIcons />
            </Box>
            <Typography sx={{ paddingTop: "36px" }}>
              itemNo:
              <span className={classes.text_color}> {itemNo}</span>
            </Typography>
            <Typography sx={{ paddingTop: "6px" }}>
              Categories:
              <span className={classes.text_color}> {categories}</span>
            </Typography>
          </Box>
        </Box>
      )}
      {!isMobile && (
        <Container
          maxWidth={"lg"}
          sx={{
            paddingTop: "100px",
            bottom: "0",
            left: "0",
            width: "100%",
          }}
        >
          <Tabs
            sx={{ borderBottom: 1, borderColor: "divider" }}
            value={valueTab}
            onChange={handleTabChange}
            textColor="inherit"
            indicatorColor="primary"
            aria-label="Tabs where selection follows focus"
          >
            <Tab label="Description" value="1" />
            <Tab label="Additional information" value="2" />
            <Tab label="Reviews(0)" value="3" />
          </Tabs>
          {valueTab === "1" && (
            <TabPanel valueTab={valueTab} index="1">
              <Typography
                sx={{
                  fontSize: "16px",
                  lineHeight: "27px",
                  color: "#707070",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                placerat, augue a volutpat hendrerit, sapien tortor faucibus
                augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu
                facilisis consequat sed eu felis. Nunc sed porta augue. Morbi
                porta tempor odio, in molestie diam bibendum sed.
              </Typography>
            </TabPanel>
          )}
          {valueTab === "2" && (
            <TabPanel valueTab={valueTab} index="2">
              <Typography sx={{ paddingBottom: "10px" }}>
                Country: <span className={classes.text_color}>{country}</span>
              </Typography>
              <Typography sx={{ paddingBottom: "10px" }}>
                Brand: <span className={classes.text_color}>{brand}</span>
              </Typography>
              <Typography sx={{ paddingBottom: "10px" }}>
                Quantity: <span className={classes.text_color}>{quantity}</span>
              </Typography>
              <Typography>
                Material:{" "}
                <span className={classes.text_color}>{productMaterial}</span>
              </Typography>
            </TabPanel>
          )}
          {valueTab === "3" && (
            <TabPanel valueTab={valueTab} index="3">
              Reviews content
            </TabPanel>
          )}
        </Container>
      )}
      <Snackbar
        open={showButtons.addToCart}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          The item added to your Shopping bag.
        </Alert>
      </Snackbar>
    </Container>
  );
}