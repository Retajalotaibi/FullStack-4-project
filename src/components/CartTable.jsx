import React, { Component } from "react";
import CartBody from "./cartBody";

class CartTable extends Component {
  render() {
    if (this.props.cartData.length === 0) {
      return <h1>no items</h1>;
    }
    console.log(this.props.cartData);
    return (
      <React.Fragment>
        <table className="cartTable-table">
          <th className="tableHead">Your cart</th>
          <CartBody
            cartData={this.props.cartData}
            onDelete={this.props.onDelete}
          />
        </table>
        <div></div>
      </React.Fragment>
    );
  }
}

export default CartTable;
