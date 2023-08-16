import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function MultiActionAreaCard({ card }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${card._id}`);
  };

  const cards = {
    height: 350,
    width: 200,
    boxShadow: "none",
    margin: "0 auto",
  };

  const img = {
    borderBottomLeftRadius: "4px",
    borderBottomRightRadius: "4px",
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

  const discountPrice = (
    (card.currentPrice / card.previousPrice) *
    100
  ).toFixed(0);

  return (
    <Card style={cards}>
      <CardActionArea onClick={handleClick} sx={{ marginRight: "40px" }}>
        <CardMedia
          component="img"
          style={img}
          src={card.imageUrls[0]}
          alt={card.name}
        ></CardMedia>
        <div style={discount} className="discount">
          <span>-</span>
          <span>{discountPrice}%</span>
        </div>

        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            fontSize: 20,
            fontWeight: "400",
            color: "black",
            marginBottom: "16px",
            marginTop: "20px",
          }}
        >
          {card.name}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              marginBottom: "10px",
              fontSize: 20,
              fontWeight: 500,
              color: "rgba(161, 138, 104, 1)",
            }}
          >
            ${card.currentPrice},00
          </Typography>
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
            // color: "rgb(191 140 140)",
          }}
        >
          {card.brand}
        </Typography>
      </CardActionArea>
    </Card>
  );
}
