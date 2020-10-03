import React, { Component } from "react";
import Product from "./Product";

class ProductsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="products-container">
        {this.props.productsData.map((product) => (
          <Product key={product.key} product={product} />
        ))}
      </div>
    );
  }
}

export default ProductsTable;
