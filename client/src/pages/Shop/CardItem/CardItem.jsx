import * as React from "react";
import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function MultiActionAreaCard() {
  const card = {
    position: "relative",
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
    <Card style={card} sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image="https://img.freepik.com/premium-photo/abstract-red-background_8466-4.jpg"
          alt="green iguana"
          sx={{ pb: 3 }}
          style={img}
        ></CardMedia>
        <div style={discount} className="discount">
          <span>-</span>
          <span>21%</span>
        </div>

        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontSize: 20 }}
        >
          Product Name
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
          Product Price
        </Typography>
      </CardActionArea>
    </Card>
  );
}
