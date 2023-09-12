import React from "react";
import { Typography, Box } from "@mui/material";
import { useMediaQuery } from "@mui/material";

const PrivacyPolicy = () => {
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
        We understand the importance of your privacy and are committed to
        protecting your personal data. This document describes how we collect,
        use, process, and safeguard your information.
      </Typography>
      <Typography
        variant="h2"
        sx={{
          fontSize: fontSize,
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
        We make every effort to ensure the security of your information. We
        utilize advanced technologies and security measures to protect your data
        from unauthorized access and use.
      </Typography>
      <Typography
        variant="h2"
        sx={{
          fontSize: fontSize,
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
        ● We use cookies to enhance the functionality of our website. They help
        us provide a convenient online experience for you.
      </Typography>
      <Typography sx={{ fontSize: fontSizeBody, padding: "10px" }}>
        ● Nam fringilla molestie velit, eget pellentesque risus scelerisque
      </Typography>
      <Typography sx={{ fontSize: fontSizeBody, padding: "10px" }}>
        ● We also use cookies to analyze website usage data and improve its
        functionality.
      </Typography>
    </div>
  );
};

export default PrivacyPolicy;
