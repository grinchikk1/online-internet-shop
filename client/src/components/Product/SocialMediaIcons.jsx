import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { IconButton, Divider } from "@mui/material";

const SocialMediaIcons = () => {
  return (
    <>
      <IconButton>
        <FavoriteBorderIcon />
      </IconButton>
      <Divider
        orientation="vertical"
        variant="middle"
        flexItem
        sx={{ backgroundColor: "#D8D8D8", width: "1px" }}
      />
      <IconButton>
        <MailOutlinedIcon />
      </IconButton>
      <IconButton>
        <FacebookOutlinedIcon />
      </IconButton>
      <IconButton>
        <InstagramIcon />
      </IconButton>
      <IconButton>
        <TwitterIcon />
      </IconButton>
    </>
  );
};

export default SocialMediaIcons;
