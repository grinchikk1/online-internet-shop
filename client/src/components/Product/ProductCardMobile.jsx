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
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SocialMediaIcons from "./SocialMediaIcons";
import { useStyles } from "./ProductCardStyles";
import { useNavigate } from "react-router-dom";

function ProductCardDesktop({ product }) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [addToCartBtn, setAddToCartBtn] = useState(false);
  const [shareBtn, setShareBtn] = useState(false);
  const [showMoreBtn, setShowMoreBtn] = useState(false);
  const [description, setDescriptionBtn] = useState(false);
  const [additionalInfoBtn, setAdditionalInfoBtn] = useState(false);
  const [reviews, setReviewBtn] = useState(false);

  const classes = useStyles();
  const navigate = useNavigate();

  const handleClickContinueBtn = () => {
    navigate("/shop");
  };

  const handleClickShowMoreBtn = () => {
    setShowMoreBtn((prevShowMoreBtn) => !prevShowMoreBtn);
  };

  const handleClickShareBtn = () => {
    setShareBtn((prevShareBtn) => !prevShareBtn);
  };

  const handleClickAddToCartBtn = () => {
    setAddToCartBtn(true);
  };

  const handleClickDescriptionBtn = () => {
    setDescriptionBtn((prevDescriptionBtn) => !prevDescriptionBtn);
  };

  const handleClickAdditionalInfoBtn = () => {
    setAdditionalInfoBtn((prevAdditionalInfoBtn) => !prevAdditionalInfoBtn);
  };

  const handleClickReviewBtn = () => {
    setReviewBtn((prevReviewBtn) => !prevReviewBtn);
  };

  const handleCloseAddToCartBtn = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setAddToCartBtn(false);
  };

  const handleScroll = (event) => {
    const image = event.currentTarget;
    const xClick = event.clientX - image.getBoundingClientRect().left;
    const halfWidth = image.clientWidth / 2;

    if (xClick >= halfWidth) {
      setCurrentPhotoIndex(
        (prevIndex) => (prevIndex + 1) % product.image.length
      );
    } else {
      setCurrentPhotoIndex((prevIndex) =>
        prevIndex === 0 ? product.image.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        paddingTop: "128px",
      }}
    >
      <Container maxWidth={"sm"} disableGutters={true}>
        <Box
          sx={{
            backgroundImage: `url(${product.image[currentPhotoIndex]})`,
            width: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "4px",
            height: "374px",
          }}
          onClick={handleScroll}
        />
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2, mb: 4 }}>
          {product.image.map((img, index) => (
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
          {product.name}
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
            {`$  ${product.currentPrice},00`}
          </Typography>
          <IconButton onClick={handleClickShareBtn}>
            <ShareIcon fontSize="small" sx={{ color: "#000" }} />
          </IconButton>
        </Box>
        {shareBtn && (
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
            background: "#FFFFFF",
            color: "#000000",
            height: "53px",
            width: "100%",
            border: "1px solid #000000",
            borderRadius: "4px",
            ":hover": {
              background: "#000000",
              color: "#FFFFFF",
              transition: "all 0.3s ease-in-out",
            },
          }}
          onClick={handleClickAddToCartBtn}
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
            WebkitLineClamp: showMoreBtn ? "unset" : 1,
            WebkitBoxOrient: "vertical",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
          maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
          consequat sed eu felis.
        </Typography>
        <Button
          disableRipple
          variant={"text"}
          size={"small"}
          sx={{
            display: "flex",
            fontSize: "12px",
            lineHeight: "20px",
            color: "#A18A68",
            padding: "0",
            ":hover": {
              background: "#FFF",
              transition: "all 0.3s ease-in-out",
            },
          }}
          onClick={handleClickShowMoreBtn}
        >
          View more{" "}
          <ArrowForwardIosIcon
            fontSize="12px"
            sx={{
              paddingLeft: "4px",
              color: showMoreBtn ? "#707070" : "#000",
              transform: showMoreBtn ? "rotate(-0.25turn)" : "rotate(0deg)",
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
          onClick={handleClickDescriptionBtn}
        >
          Description
          <ExpandMoreIcon
            fontSize="small"
            sx={{
              color: description ? "#707070" : "#000",
              transform: description ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.2s ease-in-out",
            }}
          />
        </Button>
        {description && (
          <Typography
            sx={{
              fontSize: "12px",
              lineHeight: "20px",
              color: "#707070",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            placerat, augue a volutpat hendrerit, sapien tortor faucibus augue,
            a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
            consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor
            odio, in molestie diam bibendum sed.
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
          onClick={handleClickAdditionalInfoBtn}
        >
          Additional information
          <ExpandMoreIcon
            fontSize="small"
            sx={{
              color: additionalInfoBtn ? "#707070" : "#000",
              transform: additionalInfoBtn ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.2s ease-in-out",
            }}
          />
        </Button>
        {additionalInfoBtn && (
          <>
            <Typography
              className={classes.title_text_color_mobile}
              sx={{ paddingBottom: "10px" }}
            >
              Country:{" "}
              <span className={classes.text_color_mobile}>
                {product.country}
              </span>{" "}
            </Typography>
            <Typography
              className={classes.title_text_color_mobile}
              sx={{ paddingBottom: "10px" }}
            >
              Brand:{" "}
              <span className={classes.text_color_mobile}>{product.brand}</span>{" "}
            </Typography>
            <Typography
              className={classes.title_text_color_mobile}
              sx={{ paddingBottom: "10px" }}
            >
              Quantity:{" "}
              <span className={classes.text_color_mobile}>
                {product.quantity}
              </span>{" "}
            </Typography>
            <Typography className={classes.title_text_color_mobile}>
              Material:{" "}
              <span className={classes.text_color_mobile}>
                {product.productMaterial}
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
          onClick={handleClickReviewBtn}
        >
          Reviews(0)
          <ExpandMoreIcon
            fontSize="small"
            sx={{
              color: reviews ? "#707070" : "#000",
              transform: reviews ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.2s ease-in-out",
            }}
          />
        </Button>
        {reviews && (
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
      <Snackbar
        open={addToCartBtn}
        autoHideDuration={3000}
        onClose={handleCloseAddToCartBtn}
      >
        <Alert
          onClose={handleCloseAddToCartBtn}
          severity="success"
          sx={{ width: "100%" }}
        >
          The item added to your Shopping bag.
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default ProductCardDesktop;
