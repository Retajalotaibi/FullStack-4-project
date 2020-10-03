import React from "react";
import footerImage from "../img/mailing-list-img.png";
import FooterNav from "./FooterNav";

const Footer = () => {
  return (
    <React.Fragment>
      <footer>
        <img src={footerImage} />
        <div className="footer-container">
          <p>sign up for our newsletter and get 10% off your next order</p>
          <input className="emailInput" placeholder="  YOUR EMAIL" />
        </div>
      </footer>
      <FooterNav />
    </React.Fragment>
  );
};

export default Footer;
