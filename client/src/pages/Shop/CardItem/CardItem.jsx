import React, { useState } from "react";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Box, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../data/fetchCart";
import { CartLocalStorageHelper } from "../../../helpers/cartLocalStorageHelper";
import { addProductToCart } from "../../../features/cart/cartSlice";
import FavouriteButton from "../../../components/FavouriteButton/FavouriteButton";
import CustomSnackbar from "../../../components/CustomSnackBar/CustomSnackBar";

export const addProductToLocalStorage = (product) => {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  cartItems.push(product);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export default function MultiActionAreaCard({ card }) {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleClick = () => {
    navigate(`/product/${card._id}`);
  };

  const cards = {
    height: 420,
    boxShadow: "none",
    margin: "0 auto",
  };

  const img = {
    height: 300,
    width: 239,
    alignItems: "center",
    borderRadius: "6px",
    position: "relative",
  };

  const discount = {
    position: "absolute",
    top: "16px",
    left: "16px",
    paddingTop: "2px",
    paddingBottom: "2px",
    paddingLeft: "8px",
    paddingRight: "8px",
    color: "white",
    backgroundColor: "rgba(161, 138, 104, 1)",
    fontSize: "12px",
    lineHeight: "20px",
    borderRadius: "4px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "3px",
  };

  const cardHover = {
    position: "absolute",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: "10px",
    paddingRight: "10px",
    top: "260px",
    bottom: "0px",
    height: "65px",
    backgroundColor: "rgba(255, 255, 255, 0.50)",
    transition: "all 0.5s ease",
    opacity: 0,
    "@media (max-width: 600px) ": {
      paddingLeft: "15px",
      paddingRight: "15px",
      maxWidth: "240px",
    },
  };

  const cardHoverVisible = {
    top: "235px",
    opacity: 1,
  };
  const cardHoverAdd = {
    fontSize: "16px",
    fontWeight: "700",
    fontStyle: "normal",
    lineHeight: "normal",
    color: "#000000",
    cursor: "pointer",
    userSelect: "none",
    "@media (max-width: 579.9px)": {
      fontSize: "15px",
      fontWeight: "600",
    },
  };

  const discountPrice = Math.ceil(
    ((card.previousPrice - card.currentPrice) / card.previousPrice) * 100
  );

  const handleAddProductToCart = () => {
    dispatch(addProductToCart(card));
    if (!!token) {
      addToCart(card._id, token);
      setShowSnackbar(true);
    } else {
      CartLocalStorageHelper.addProductToCart(card);
      setShowSnackbar(true);
    }
  };

  return (
    <Container style={{ ...cards, "&:hover": "none" }}>
      <CardActionArea
        sx={{
          backgroundColor: "#fff",
          "&:hover": "none",
          maxWidth: "240px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <CardMedia
          onClick={handleClick}
          component="img"
          style={img}
          src={card.imageUrls[0]}
          alt={card.name}
        ></CardMedia>
        <div style={discount} className="discount">
          <span>-</span>
          <span>{discountPrice}%</span>
        </div>

        <Container sx={{ ...cardHover, ...(isHovered && cardHoverVisible) }}>
          <Typography sx={cardHoverAdd} onClick={handleAddProductToCart}>
            ADD TO CART
          </Typography>
          <FavouriteButton item={card} />
        </Container>

        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            fontSize: 20,
            fontWeight: "400",
            color: "black",
            marginBottom: "10px",
            marginTop: "10px",
            paddingRight: "5px",
            paddingLeft: "5px",
          }}
        >
          {card.name}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingRight: "5px",
            paddingLeft: "5px",
            maxWidth: "235px",
          }}
        >
          <Box>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                textDecoration: "line-through",
                marginBottom: "5px",
                fontSize: 14,
                fontWeight: 500,
                color: "rgba(161, 138, 104, 1)",
              }}
            >
              ${card.previousPrice},00
            </Typography>

            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                marginBottom: "5px",
                fontSize: 18,
                fontWeight: 500,
                color: "rgba(161, 138, 104, 1)",
              }}
            >
              ${card.currentPrice},00
            </Typography>
          </Box>

          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              fontSize: 15,
              fontWeight: 400,
              color: "rgba(112, 112, 112, 1)",
            }}
          >
            {card.productMaterial}
          </Typography>
        </Box>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            fontSize: 20,
            fontWeight: "400",
            color: "black",
            paddingRight: "5px",
            paddingLeft: "5px",
          }}
        >
          {card.brand}
        </Typography>
      </CardActionArea>
      <CustomSnackbar
        open={showSnackbar}
        onClose={() => setShowSnackbar(false)}
        severity="success"
        titleText="success"
        text="The item added to your Shopping bag."
      />
    </Container>
  );
}
