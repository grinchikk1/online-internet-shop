import React, { useState } from "react";
import SocialMediaIcons from "./SocialMediaIcons";
import {
  Container,
  Button,
  Box,
  Rating,
  Typography,
  IconButton,
  Tabs,
  Tab,
  Snackbar,
  Alert,
} from "@mui/material";
import { TabPanel } from "./TabPanel";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useStyles } from "./ProductCardStyles";

function ProductCardDesktop({ product }) {
  const [value, setValue] = useState(1);
  const [valueTab, setValueTab] = useState("1");
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleChange = (event, newValue) => {
    setValueTab(newValue);
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

  const handleDecrement = () => {
    if (value > 0) {
      setValue((prevValue) => prevValue - 1);
    }
  };

  const handleIncrement = () => {
    setValue((prevValue) => prevValue + 1);
  };

  return (
    <>
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          paddingTop: "128px",
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
            {product.image.map((url, index) => {
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
                backgroundImage: `url(${product.image[currentPhotoIndex]})`,
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
            {product.name}
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
            {`$  ${product.currentPrice}.00`}
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
            placerat, augue a volutpat hendrerit, sapien tortor faucibus augue,
            a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
            consequat sed eu felis.
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
              onClick={handleClick}
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
            <span className={classes.text_color}> {product.itemNo}</span>
          </Typography>
          <Typography sx={{ paddingTop: "6px" }}>
            Categories:
            <span className={classes.text_color}> {product.categories}</span>
          </Typography>
        </Box>
      </Container>
      <Container
        maxWidth={"lg"}
        sx={{
          paddingTop: "100px",
          bottom: "0",
          left: "0",
          width: "100%",
        }}
      >
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={valueTab}
            onChange={handleChange}
            textColor="inherit"
            indicatorColor="primary"
            aria-label="Tabs where selection follows focus"
          >
            <Tab label="Description" value="1" />
            <Tab label="Aditional information" value="2" />
            <Tab label="Reviews(0)" value="3" />
          </Tabs>
        </Box>
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
              Country:{" "}
              <span className={classes.text_color}>{product.country}</span>{" "}
            </Typography>
            <Typography sx={{ paddingBottom: "10px" }}>
              Brand: <span className={classes.text_color}>{product.brand}</span>{" "}
            </Typography>
            <Typography sx={{ paddingBottom: "10px" }}>
              Quantity:{" "}
              <span className={classes.text_color}>{product.quantity}</span>{" "}
            </Typography>
            <Typography>
              Material:{" "}
              <span className={classes.text_color}>
                {product.productMaterial}
              </span>{" "}
            </Typography>
          </TabPanel>
        )}
        {valueTab === "3" && (
          <TabPanel valueTab={valueTab} index="3">
            Reviews content
          </TabPanel>
        )}
      </Container>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          The item added to your Shopping bag.
        </Alert>
      </Snackbar>
    </>
  );
}

export default ProductCardDesktop;
