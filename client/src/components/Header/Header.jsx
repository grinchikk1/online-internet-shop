import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../../styles/style.scss";
import { ShoppingBasket } from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Badge, Drawer } from "@mui/material";
import FavouriteList from "../FavouriteList/FavouriteList";
import { getWishlist } from "../../data/fetchFavourite";

function Header() {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const [isFavoritesMenuOpen, setIsFavoritesMenuOpen] = useState(false);

  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const favoritesList = useSelector((state) => state.favorites.favoritesList);

  useEffect(() => {
    if (!!token) {
      localStorage.removeItem("favorites");
      dispatch(getWishlist(token));
    }
  }, [token, dispatch]);

  const countProductInCart = useSelector((state) => state.cart.cart.length);

  const links = ["Home", "Shop", "About", "Contact"];

  const handleBurgerMenu = () => {
    setIsBurgerMenuOpen((prevState) => !prevState);
  };

  const handleResize = () => {
    if (window.innerWidth > 768) {
      setIsBurgerMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleFavoritesMenuOpen(event) {
    setIsFavoritesMenuOpen(true);
  }
  function handleFavoritesMenuClose() {
    setIsFavoritesMenuOpen(false);
  }

  return (
    <header className="header">
      <div
        className={`header__blur${isBurgerMenuOpen ? "--open" : ""}`}
        onClick={handleBurgerMenu}
      ></div>
      <div className="container flex-container">
        <button
          className={`nav-opener ${isBurgerMenuOpen ? "open" : ""}`}
          onClick={handleBurgerMenu}
        >
          <span className="nav-opener__menu-line"></span>
          <span className="nav-opener__menu-line"></span>
          <span className="nav-opener__menu-line"></span>
        </button>
        <Link to="/" className="header__logo-image">
          <img
            src="https://res.cloudinary.com/ddh4awlkr/image/upload/v1690390156/online-internet-shop/mystery.jpg"
            alt="Logo_image"
          />
        </Link>
        <div className={`header__nav-holder ${isBurgerMenuOpen ? "open" : ""}`}>
          <nav className={`header__nav ${isBurgerMenuOpen ? "open" : ""}`}>
            <ul className="header__nav-list">
              {links.map((link, index) => {
                return (
                  <li className="header__nav-item" key={index}>
                    <NavLink
                      className="header__nav-link"
                      onClick={handleBurgerMenu}
                      to={index === 0 ? "/" : `/${link}`}
                      key={index}
                    >
                      {link}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="header__logo-holder">
            <FavoriteIcon
              className="header__icon"
              onClick={handleFavoritesMenuOpen}
            />
            {favoritesList.length !== 0 && (
              <span
                style={{
                  transform: "translate(-18px,-12px)",
                  fontSize: "12px",
                  fontWeight: "500",
                }}
              >
                {!!token ? favoritesList.products.length : favoritesList.length}
              </span>
            )}
            <Drawer
              anchor="right"
              open={isFavoritesMenuOpen}
              onClose={handleFavoritesMenuClose}
            >
              <FavouriteList />
            </Drawer>
            <Link to="/cart" className="header__icon">
              <Badge
                badgeContent={countProductInCart}
                style={{ color: "black " }}
              >
                <ShoppingBasket style={{ color: "black " }} />
              </Badge>
            </Link>
            <Link to="/login" className="header__icon">
              <AccountCircleIcon
                style={{ paddingTop: "3px", color: "black" }}
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
