import React from "react";
import { Link } from "react-router-dom";
import "../../styles/style.scss";
import { grey } from "@mui/material/colors";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

function Footer() {
  return (
    <footer className="footer">
      <div className="container flex-container">
        <ul className="footer__nav-list">
          <li className="footer__nav-item">
            <Link className="footer__nav-link" to="/">
              Contact
            </Link>
          </li>
          <li className="footer__nav-item">
            <Link className="footer__nav-link" to="/">
              TERMS OF SERVICES
            </Link>
          </li>
          <li className="footer__nav-item">
            <Link className="footer__nav-link" to="/">
              TERMS OF SERVICES
            </Link>
          </li>
        </ul>
        <ul className="footer__subscribe-icons">
          <li className="footer__subscribe-list">
            <Link to="https://www.youtube.com/watch?v=R6iAtSXbGNs">
              <LinkedInIcon sx={{ color: grey[500] }} />
            </Link>
          </li>
          <li className="footer__subscribe-list">
            <Link to="/">
              <FacebookIcon sx={{ color: grey[500] }} />
            </Link>
          </li>
          <li className="footer__subscribe-list">
            <Link to="/">
              <InstagramIcon sx={{ color: grey[500] }} />
            </Link>
          </li>
          <li className="footer__subscribe-list">
            <Link to="/">
              <TwitterIcon sx={{ color: grey[500] }} />
            </Link>
          </li>
        </ul>
        <p className="footer__privacy-policy">
          <span className="footer__privacy-policy--text">© 2021 Shelly.</span>{" "}
          Terms of use <span className="footer__privacy-policy--text">and</span>{" "}
          <Link to="/privacy-policy" className="footer__privacy-policy">
            privacy policy.
          </Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
