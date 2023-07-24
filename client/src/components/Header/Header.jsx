import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <nav>
        <Link to="/"> Home</Link>
        <br />
        <Link to="/shop"> Shop</Link>
        <br />
        <Link to="/cart"> Cart</Link>
        <br />
        <Link to="/contact"> Contact</Link>
        <br />
        <br />
      </nav>
    </>
  );
}

export default Header;
