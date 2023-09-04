import React from "react";
import { Typography, Box, useMediaQuery } from "@mui/material";

function PrivacyPolicy() {
  const isMobile = useMediaQuery("(max-width: 670px)");

  const fontSizeTitle = isMobile ? "20px" : "33px";
  const fontWeightTitle = isMobile ? 400 : 500;
  const textAlignTitle = isMobile ? "start" : "center";

  const fontSize = isMobile ? "16px" : "26px";

  const fontSizeBody = isMobile ? "12px" : "16px";

  return (
    <div
      style={{
        margin: "0 auto",
        padding: "40px 16px 0",
        fontWeight: 400,
        maxWidth: "670px",
      }}
    >
      <Box sx={{ textAlign: textAlignTitle }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: fontSizeTitle,
            fontWeight: fontWeightTitle,
          }}
        >
          Privacy Policy
        </Typography>
      </Box>
      <Typography
        variant="body1"
        sx={{ fontSize: fontSizeBody, paddingTop: "40px" }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
        maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
        consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio,
        in molestie diam bibendum sed.
      </Typography>
      <Typography
        variant="h2"
        sx={{
          fontSize,
          fontWeight: 400,
          paddingTop: "22px",
        }}
      >
        Security
      </Typography>
      <Typography
        variant="body1"
        sx={{ fontSize: fontSizeBody, paddingTop: "14px" }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
        maximus elit ex vitae libero. Sed quis mauris eget .
      </Typography>
      <Typography
        variant="h2"
        sx={{
          fontSize,
          fontWeight: 400,
          paddingTop: "22px",
        }}
      >
        Cookies
      </Typography>

      <Typography sx={{ fontSize: fontSizeBody, padding: "10px" }}>
        ● Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam,
        sollicitudin ante a, gravida arcume
      </Typography>
      <Typography sx={{ fontSize: fontSizeBody, padding: "10px" }}>
        ● Nam fringilla molestie velit, eget pellentesque risus scelerisque
      </Typography>
    </div>
  );
}

export default PrivacyPolicy;
