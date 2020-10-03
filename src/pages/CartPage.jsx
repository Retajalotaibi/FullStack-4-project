import React, { Component } from "react";
import CartTable from "../components/CartTable";
class CartPage extends Component {
  componentDidMount() {
    this.props.onHashChange(this.props.location.pathname);
  }
  render() {
    return (
      <React.Fragment>
        <CartTable
          cartData={this.props.cartData}
          onDelete={this.props.onDelete}
        />
      </React.Fragment>
    );
  }
}

export default CartPage;
