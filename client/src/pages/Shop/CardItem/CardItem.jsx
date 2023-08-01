import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function MultiActionAreaCard({ card }) {
  const cards = {
    height: 300,
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
  return (
    // onClick={handleClick}
    <Card style={cards}>
      <CardActionArea sx={{ marginRight: "40px" }}>
        <CardMedia
          component="img"
          style={img}
          src={card.image}
          alt={card.name}
        ></CardMedia>
        <div style={discount} className="discount">
          <span>-</span>
          <span>21%</span>
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
          }}
        >
          {card.name}
        </Typography>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            fontSize: 20,
            fontWeight: 500,
            color: "rgba(161, 138, 104, 1)",
          }}
        >
          ${card.currentPrice},00
        </Typography>
      </CardActionArea>
    </Card>
  );
}
