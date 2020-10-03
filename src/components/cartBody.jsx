import React, { Component } from "react";

class CartBody extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  thePriceSum = () => {
    let sum = 0;
    const data = this.props.cartData;
    data.forEach((data) => {
      const price = data.price.replace("$", "");
      sum += Number(price * data.count);
    });

    return sum;
  };
  render() {
    return (
      <tbody>
        {this.props.cartData.map((data) => (
          <tr className="cartTable-row">
            <td>
              <img src={data.image} width={80} />
            </td>
            <td>{data.name}</td>
            <td>{data.count}</td>
            <td>{data.price}</td>
            <td className="chech-out-item-button">
              <button className="chech-out-item-button-color">CHECK OUT</button>
            </td>
            <td>
              <i
                className="fas fa-trash"
                onClick={() => this.props.onDelete(data)}
              ></i>
            </td>
          </tr>
        ))}
        <tr className="cartTable-final-row">
          <td style={{ paddingLeft: "100px" }}>All items</td>
          <td></td>
          <td>01</td>
          <td>{this.thePriceSum()}</td>
          <td className="chech-out-item-button allItems-Button">
            <button>CHECK OUT ALL</button>
          </td>
        </tr>
      </tbody>
    );
  }
}

export default CartBody;
