import React from "react";
import { NavLink } from "react-router-dom";

const FooterNav = () => {
  return (
    <div className="footerNav-container">
      <ul className="footerNav">
        <NavLink exact to="/about" className="footerNav-item">
          <li>About</li>
        </NavLink>
        <NavLink exact to="/Coustomer" className="footerNav-item">
          <li>Customer Care</li>
        </NavLink>
        <NavLink exact to="/instagram" className="footerNav-item">
          <li>Instagram</li>
        </NavLink>
        <NavLink exact to="/about" className="footerNav-item">
          <li style={{ float: "right" }}>&copy;Pretend Store</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default FooterNav;
