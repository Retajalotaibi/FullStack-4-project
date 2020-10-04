import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { key, image, name, price } = this.props.product;
    return (
      <NavLink exact to={`/details/${key}`} className="product-container-Link">
        <div className="product-container">
          <img src={"/" + image} />
          <div className="product-descripiton">
            <h6>{name}</h6>
            <h6 className="price">{price}</h6>
          </div>
        </div>
      </NavLink>
    );
  }
}

export default Product;
