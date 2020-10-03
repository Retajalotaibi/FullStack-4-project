import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import cart from "../img/cart.svg";
import logo from "../img/logo.svg";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleCartChange = () => {
    return this.props.activated === false ? (
      <img src={cart} />
    ) : (
      <i className="fa fa-shopping-cart" aria-hidden="true"></i>
    );
  };
  render() {
    return (
      <header>
        <img src={logo} />
        <ul className="navbar-menu">
          <NavLink exact to="/" className="navbar-item">
            <li>Home</li>
          </NavLink>
          <NavLink exact to="/cellection" className="navbar-item">
            <li>Cellection</li>
          </NavLink>
          <NavLink exact to="/contact" className="navbar-item">
            <li>Contact</li>
          </NavLink>
        </ul>
        <div className="cart-item">
          {this.handleCartChange()}
          <NavLink exact to="/cart" className="navbar-cart">
            Cart
          </NavLink>
        </div>
      </header>
    );
  }
}

export default Header;
