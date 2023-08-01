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

function ProductCardDesktop({ product }) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
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
            {`$  ${product.currentPrice}.00`}
          </Typography>
          <IconButton>
            <ShareIcon fontSize="small" sx={{ color: "#000" }} />
          </IconButton>
        </Box>
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
          onClick={handleClick}
        >
          Add to cart
        </Button>
        <Typography
          sx={{
            paddingTop: "16px",
            fontSize: "12px",
            lineHeight: "20px",
            color: "#707070",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
          maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
          consequat sed eu felis.
        </Typography>
        <Button
          variant={"text"}
          size={"small"}
          sx={{
            display: "flex",
            fontSize: "12px",
            lineHeight: "20px",
            color: "#A18A68",
            padding: "0",
          }}
          onClick={() => {}}
        >
          View more{" "}
          <ArrowForwardIosIcon
            fontSize="12px"
            sx={{
              paddingLeft: "4px",
              color: "#000",
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
          }}
        >
          Description
          <ExpandMoreIcon fontSize="small" sx={{ color: "#000" }} />
        </Button>
        <Button
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
          }}
        >
          Additional information
          <ExpandMoreIcon fontSize="small" sx={{ color: "#000" }} />
        </Button>
        <Button
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
          }}
        >
          Reviews(0)
          <ExpandMoreIcon fontSize="small" sx={{ color: "#000" }} />
        </Button>
        <Divider
          sx={{
            color: "#D8D8D8",
            paddingTop: "14px",
          }}
        />
        <Button
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
          }}
        >
          Continue shopping
          <ArrowForwardIosIcon fontSize="small" sx={{ color: "#000" }} />
        </Button>
      </Container>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          The item added to your Shopping bag.
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default ProductCardDesktop;
