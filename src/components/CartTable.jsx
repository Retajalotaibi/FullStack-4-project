import React, { Component } from "react";
import CartBody from "./cartBody";

class CartTable extends Component {
  thePriceSum = () => {
    console.log(this.props.data);
    return 2;
  };
  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
    console.log(this.state.sortColumn);
  };
  render() {
    const totalPrice = 19;
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
          {/* <TableTitle
          column={this.column}
          onSort={this.handleSort}
          sortColumn={this.state.sortColumn}
        /> */}
        </table>
        <div></div>
      </React.Fragment>
    );
  }
}

export default CartTable;
