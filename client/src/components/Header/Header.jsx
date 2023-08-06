import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../../styles/style.scss";
import { ShoppingBasket } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";

function Header() {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const handleBurgerMenu = () => {
    setIsBurgerMenuOpen((prevState) => !prevState);
  };
  return (
    <header className="header">
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
              <li className="header__nav-item">
                <NavLink className="header__nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="header__nav-item">
                <NavLink className="header__nav-link" to="/shop">
                  Shop
                </NavLink>
              </li>
              <li className="header__nav-item">
                <NavLink className="header__nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="header__nav-item">
                <NavLink className="header__nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="header__logo-holder">
            <SearchIcon style={{ color: "black" }} className="header__icon" />
            <FavoriteIcon className="header__icon" />
            <Link to="/cart" className="header__icon">
              <ShoppingBasket style={{ color: "black" }} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
