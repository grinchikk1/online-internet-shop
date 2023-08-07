import React from "react";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { IconButton, Divider } from "@mui/material";
import FavouriteButton from "../FavouriteButton/FavouriteButton";

const SocialMediaIcons = ({ item }) => {
  return (
    <>
      <IconButton>
        <FavouriteButton item={item} />
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
