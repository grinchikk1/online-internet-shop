import React from "react";
import { Link } from "react-router-dom"; // Імпортуємо компонент Link з React Router
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
        <a
          href="mailto:mystery.shop.original@gmail.com"
          style={{ color: "inherit" }}
        >
          <MailOutlinedIcon />
        </a>
      </IconButton>
      <IconButton>
        <Link to="https://www.facebook.com" style={{ color: "inherit" }}>
          <FacebookOutlinedIcon />
        </Link>
      </IconButton>
      <IconButton>
        <Link to="https://www.instagram.com" style={{ color: "inherit" }}>
          <InstagramIcon />
        </Link>
      </IconButton>
      <IconButton>
        <Link to="https://www.twitter.com" style={{ color: "inherit" }}>
          <TwitterIcon />
        </Link>
      </IconButton>
    </>
  );
};

export default SocialMediaIcons;
