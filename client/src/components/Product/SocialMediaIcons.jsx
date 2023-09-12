import React from "react";
import { Link } from "react-router-dom"; // Імпортуємо компонент Link з React Router
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { IconButton, Divider } from "@mui/material";
import FavouriteButton from "../FavouriteButton/FavouriteButton";
import { useStyles } from "./ProductCardStyles";

const SocialMediaIcons = ({ item }) => {
  const styles = useStyles();
  return (
    <>
      <IconButton>
        <FavouriteButton item={item} />
      </IconButton>
      <Divider
        orientation="vertical"
        variant="middle"
        flexItem
        sx={{ backgroundColor: "#D8D8D8" }}
      />
      <IconButton>
        <a
          href="mailto:mystery.shop.original@gmail.com"
          style={{ color: "inherit" }}
        >
          <MailOutlinedIcon className={styles.styleIcons} />
        </a>
      </IconButton>
      <IconButton>
        <Link
          to="https://www.facebook.com"
          target="blank"
          style={{ color: "inherit" }}
        >
          <FacebookOutlinedIcon className={styles.styleIcons} />
        </Link>
      </IconButton>
      <IconButton>
        <Link
          to="https://www.instagram.com"
          target="blank"
          style={{ color: "inherit" }}
        >
          <InstagramIcon className={styles.styleIcons} />
        </Link>
      </IconButton>
      <IconButton>
        <Link
          to="https://www.twitter.com"
          target="blank"
          style={{ color: "inherit" }}
        >
          <TwitterIcon className={styles.styleIcons} />
        </Link>
      </IconButton>
    </>
  );
};

export default SocialMediaIcons;
