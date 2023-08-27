import React, { useState, useEffect } from "react";
import {
  Container,
  Button,
  Box,
  Typography,
  IconButton,
  Divider,
  Rating,
  Tabs,
  Tab,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SocialMediaIcons from "./SocialMediaIcons";
import CustomSnackbar from "../CustomSnackBar/CustomSnackBar";
import { useStyles } from "./ProductCardStyles";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { TabPanel } from "./TabPanel";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useTheme } from "@mui/material/styles";
import ReviewForm from "../ReviewForm/ReviewForm";
import { useSelector, useDispatch } from "react-redux";
import { getReviews } from "../../features/review/reviewSlice";

export default function ProductCard({ product, onAddToCartClicked }) {
  const theme = useTheme();
  const classes = useStyles();
  const navigate = useNavigate();

  const {
    _id,
    imageUrls,
    name,
    currentPrice,
    description,
    brand,
    itemNo,
    quantity,
    productMaterial,
    manufacturerCountry,
    categories,
  } = product;

  const dispatch = useDispatch();
  const { reviews } = useSelector((state) => state.reviews);

  const [averageRating, setAverageRating] = useState(0);
  const [lastReviewText, setLastReviewText] = useState(
    "На цей продукт поки що нема відгуків, залиште перший"
  );

  useEffect(() => {
    dispatch(getReviews(_id, reviews));
  }, [dispatch]);

  useEffect(() => {
    if (reviews.length > 0) {
      const totalRating = reviews.reduce(
        (sum, review) => sum + review.someCustomParam.rating,
        0
      );
      const averageRating = totalRating / reviews.length;
      setAverageRating(averageRating);
    }

    const lastReview = reviews[reviews.length - 1]?.content;
    setLastReviewText(lastReview);
  }, [reviews]);

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
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    } else {
      setCurrentPhotoIndex((prevIndex) =>
        prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1
      );
    }
  };

  const handleDecrement = () => {
    if (value > 1) {
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
    if (buttonName === "addToCart") {
      onAddToCartClicked(value);
    }
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
      disableGutters={true}
      sx={{
        display: "flex",
        flexDirection: isMobile ? "row" : "column",
        width: "100%",
        paddingTop: isMobile ? "0" : "128px",
      }}
    >
      {/* mobile */}
      {isMobile && (
        <Container
          sx={{
            width: "100%",
          }}
        >
          <Container maxWidth={"sm"} disableGutters={true}>
            <Box
              sx={{
                backgroundImage: `url(${imageUrls[currentPhotoIndex]})`,
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
              {imageUrls.map((img, index) => (
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
                <SocialMediaIcons item={product} />
              </Box>
            )}
            <Button
              variant="contained"
              className={classes.button_add}
              sx={{
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
                {description}
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
                  <span className={classes.text_color_mobile}>
                    {manufacturerCountry}
                  </span>{" "}
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
              Reviews({reviews.length})
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
              <Container
                disableGutters
                sx={{
                  fontSize: "12px",
                  lineHeight: "20px",
                  color: "#707070",
                  padding: "10px 0",
                }}
              >
                <ReviewForm productId={_id} />
              </Container>
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
                marginBottom: "14px",
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
        </Container>
      )}
      {/* desktop */}
      {!isMobile && (
        <Box
          className={classes.container_desktop}
          sx={{ paddingRight: "20px" }}
        >
          <Container
            className={classes.container_image_desktop}
            sx={{ marginLeft: "50px", marginRight: "25px" }}
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
              {imageUrls.map((url, index) => {
                return (
                  <Box
                    key={index}
                    className={classes.image_list_desktop}
                    sx={{
                      backgroundImage: `url(${url})`,
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
                  backgroundImage: `url(${imageUrls[currentPhotoIndex]})`,
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
                {imageUrls.map((img, index) => (
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
          <Box paddingRight={3}>
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
                  color: "#faaf00",
                }}
                name="customized-10"
                value={averageRating}
                max={5}
                readOnly
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
                paddingLeft: "1px",
                fontSize: "16px",
                lineHeight: "27px",
                color: "#707070",
                wordBreak: "break-word",
                height: "100px",
                overflow: "auto",
                scrollbarWidth: "thin",
                "&::-webkit-scrollbar": {
                  width: "5px",
                },
              }}
            >
              {lastReviewText}
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
                className={classes.button_add}
                sx={{
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
            <Box display={"flex"} className={classes.box_social_icons}>
              <SocialMediaIcons item={product} />
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
          disableGutters={true}
          className={classes.container_tabs}
          maxWidth={"lg"}
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
            <Tab label={`Reviews(${reviews.length})`} value="3" />
          </Tabs>
          {valueTab === "1" && (
            <TabPanel valueTab={valueTab} index="1">
              <Typography className={classes.description_text_desktop}>
                {description}
              </Typography>
            </TabPanel>
          )}
          {valueTab === "2" && (
            <TabPanel valueTab={valueTab} index="2">
              <Typography sx={{ paddingBottom: "10px" }}>
                Country:{" "}
                <span className={classes.text_color}>
                  {manufacturerCountry}
                </span>
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
              <ReviewForm productId={_id} />
            </TabPanel>
          )}
        </Container>
      )}
      <CustomSnackbar
        open={showButtons.addToCart}
        onClose={handleCloseSnackbar}
        titleText="success"
        text="The item added to your Shopping bag."
      />
    </Container>
  );
}
