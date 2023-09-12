/* eslint-disable react-hooks/exhaustive-deps */
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
    previousPrice,
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
    "Your review can be the first..."
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
    } else {
      setAverageRating(0);
    }

    const lastReview = reviews[reviews.length - 1]?.content;
    setLastReviewText(lastReview);
  }, [reviews]);

  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [showButtons, setShowButtons] = useState({
    addToCart: false,
    share: false,
    showMore: false,
    description: false,
    additionalInfo: false,
    reviews: false,
  });
  const [valueQuantity, setValueQuantity] = useState(1);
  const [valueTab, setValueTab] = useState("1");

  const handleClickToImage = (event) => {
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

  const handleRemoveQuantityToCart = () => {
    if (valueQuantity > 1) {
      setValueQuantity((prevValue) => prevValue - 1);
    }
  };

  const handleAddQuantityToCart = () => {
    setValueQuantity((prevValue) => prevValue + 1);
  };

  const handleTabChange = (event, newValue) => {
    setValueTab(newValue);
  };

  const handleButtonClick = (buttonName) => {
    if (buttonName === "addToCart") {
      onAddToCartClicked(valueQuantity);
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
      disableGutters
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        pt: { xs: 0, md: 16 },
      }}
    >
      {/* mobile */}
      <Container
        sx={{
          display: { xs: "block", md: "none" },
          width: "100%",
        }}
      >
        <Container maxWidth="sm" disableGutters>
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
            onClick={handleClickToImage}
          />
          <Box sx={{ display: "flex", justifyContent: "center", mt: 2, mb: 4 }}>
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
        <Container maxWidth="sm" disableGutters>
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
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            sx={{ pt: 1, pb: 3 }}
          >
            <Box>
              <Typography
                variant="body1"
                sx={{
                  textDecoration: "line-through",
                  color: "#A18A68",
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "26px",
                  textTransform: "capitalize",
                }}
              >
                {`$  ${previousPrice},00`}
              </Typography>
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
            </Box>
            <IconButton onClick={() => handleButtonClick("share")}>
              <ShareIcon fontSize="small" sx={{ color: "#000" }} />
            </IconButton>
          </Box>
          {showButtons.share && (
            <Box
              display="flex"
              sx={{
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px 0 20px",
                width: "250px",
                color: theme.palette.secondary.main,
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
                background: theme.palette.common.black,
                color: theme.palette.common.white,
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
              pt: 2,
            }}
          />
          <Button
            disableRipple
            variant="text"
            size="small"
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              fontSize: "12px",
              lineHeight: "20px",
              color: "#000",
              mt: 2,
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
                color: theme.palette.secondary.main,
              }}
            >
              {description}
            </Typography>
          )}
          <Button
            disableRipple
            variant="text"
            size="small"
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              fontSize: "12px",
              lineHeight: "20px",
              color: "#000",
              mt: 2,
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
                sx={{ pb: 1 }}
              >
                Country:
                <span className={classes.text_color_mobile}>
                  {manufacturerCountry}
                </span>
              </Typography>
              <Typography
                className={classes.title_text_color_mobile}
                sx={{ pb: 1 }}
              >
                Brand:
                <span className={classes.text_color_mobile}>{brand}</span>
              </Typography>
              <Typography
                className={classes.title_text_color_mobile}
                sx={{ pb: 1 }}
              >
                Quantity:
                <span className={classes.text_color_mobile}>{quantity}</span>
              </Typography>
              <Typography className={classes.title_text_color_mobile}>
                Material:
                <span className={classes.text_color_mobile}>
                  {productMaterial}
                </span>
              </Typography>
            </>
          )}
          <Button
            disableRipple
            variant="text"
            size="small"
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              fontSize: "12px",
              lineHeight: "20px",
              color: "#000",
              mt: 2,
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
                color: theme.palette.secondary.main,
                padding: "10px 0",
              }}
            >
              <ReviewForm productId={_id} />
            </Container>
          )}
          <Divider
            sx={{
              color: "#D8D8D8",
              pt: 2,
            }}
          />
          <Button
            disableRipple
            variant="text"
            size="small"
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              fontSize: "12px",
              lineHeight: "20px",
              color: "#A18A68",
              mt: 2,
              mb: 2,
              p: 0,
              ":hover": {
                background: "#FFF",
                transition: "all 0.3s ease-in-out",
              },
            }}
            onClick={handleClickContinueBtn}
          >
            Continue shopping
            <ArrowForwardIosIcon
              fontSize="small"
              sx={{ color: theme.palette.common.black }}
            />
          </Button>
        </Container>
      </Container>
      {/* desktop */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          width: "100%",
        }}
      >
        <Container className={classes.container_images_desktop}>
          <Container disableGutters className={classes.container_image_desktop}>
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
            disableGutters
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
              onClick={handleClickToImage}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: 2,
                mb: 4,
              }}
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
        <Box sx={{ pr: 2, width: "50%" }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: "32px",
              fontWeight: "400",
              lineHeight: "35px",
            }}
          >
            {name}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textDecoration: "line-through",
              color: "#A18A68",
              fontSize: "18px",
              fontWeight: "500",
              lineHeight: "26px",
              textTransform: "capitalize",
              pt: 2,
            }}
          >
            {`$  ${previousPrice},00`}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              pt: 1,
              color: "#A18A68",
              fontSize: "20px",
              fontWeight: "500",
              lineHeight: "26px",
              textTransform: "capitalize",
            }}
          >
            {`$  ${currentPrice},00`}
          </Typography>
          <Box display="flex" sx={{ pt: 5 }}>
            <Rating
              sx={{
                color: "#faaf00",
                marginLeft: "-5px",
              }}
              name="customized-10"
              value={averageRating}
              max={5}
              readOnly
              precision={0.5}
            />
            <Typography
              component="legend"
              sx={{
                pl: 3,
                fontSize: "16px",
                lineHeight: "27px",
                color: theme.palette.secondary.main,
              }}
            >
              1 customer review
            </Typography>
          </Box>
          <Typography
            component="div"
            sx={{
              maxWidth: "480px",
              pt: 2.5,
              fontSize: "16px",
              lineHeight: "27px",
              color: theme.palette.secondary.main,
              wordBreak: "break-word",
              height: "100px",
              overflow: "auto",
              scrollbarWidth: "thin",
              "&::-webkit-scrollbar": {
                width: "5px",
              },
              fontStyle: reviews.length === 0 ? "italic" : "normal",
            }}
          >
            {reviews.length > 0
              ? lastReviewText
              : "Your review can be the first..."}
          </Typography>
          <Box
            display="flex"
            paddingTop="48px"
            gap="22px"
            justifyContent="start"
          >
            <Box
              display="flex"
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
                color="secondary"
                onClick={handleRemoveQuantityToCart}
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
                {valueQuantity}
              </Typography>
              <IconButton
                aria-label="Add to cart"
                color="secondary"
                onClick={handleAddQuantityToCart}
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
                  background: theme.palette.common.black,
                  color: theme.palette.common.white,
                  transition: "all 0.3s ease-in-out",
                },
              }}
              onClick={() => handleButtonClick("addToCart")}
            >
              Add to cart
            </Button>
          </Box>
          <Box display="flex" className={classes.box_social_icons}>
            <SocialMediaIcons item={product} />
          </Box>
          <Typography sx={{ pt: 4 }}>
            itemNo:
            <span className={classes.text_color}> {itemNo}</span>
          </Typography>
          <Typography sx={{ pt: 1 }}>
            Categories:
            <span className={classes.text_color}> {categories}</span>
          </Typography>
        </Box>
      </Box>
      <Container
        disableGutters
        sx={{
          display: { xs: "none", md: "block" },
          pt: 12,
          width: "100%",
        }}
        maxWidth="lg"
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
            <Typography sx={{ pb: 1 }}>
              Country:
              <span className={classes.text_color}>{manufacturerCountry}</span>
            </Typography>
            <Typography sx={{ pb: 1 }}>
              Brand: <span className={classes.text_color}>{brand}</span>
            </Typography>
            <Typography sx={{ pb: 1 }}>
              Quantity: <span className={classes.text_color}>{quantity}</span>
            </Typography>
            <Typography>
              Material:
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
      <CustomSnackbar
        open={showButtons.addToCart}
        onClose={handleCloseSnackbar}
        severity="success"
        titleText="success"
        text="The item added to your Shopping bag."
      />
    </Container>
  );
}
