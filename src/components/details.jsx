import React, { Component } from "react";
import ReactDOM from "react-dom";
class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      currentColor: "Pink",
      colors: [
        { name: "Pink", number: 1 },
        { name: "purple", number: 2 },
        { name: "black", number: 3 },
      ],
    };
  }

  componentDidUpdate(props) {
    if (this.props.data.key != props.match.params.id) {
      this.setState({ count: 1 });
    }
  }

  handleCountChange = async () => {
    await this.setState({ count: (this.state.count += 1) });
  };
  handleColorChange = (event, color) => {
    // console.log(color);
    const node = ReactDOM.findDOMNode(this);

    // Get child nodes
    if (node instanceof HTMLElement) {
      const child = node.querySelector(".currentcolor");
      if (child) {
        child.className = child.className.replace("currentcolor", "");
      }
    }

    event.target.classList.toggle("currentcolor");
    this.setState({ currentColor: color.name });
    // console.log(this.state);
  };
  render() {
    const { name, image, price, description } = this.props.data;
    const { onAdding } = this.props;
    return (
      <div className="details-container">
        <div className="sideImages-container">
          <img src={"/" + image} width={80} />
          <img src={"/" + image} width={80} />
          <img src={"/" + image} width={80} />
        </div>
        <div className="main-image">
          <img src={"/" + image} />
        </div>
        <div className="descreipiton-container">
          <h3 style={{ fontWeight: "bold" }}>{price}</h3>
          <h3>{name}</h3>
          <p>{description}</p>
          <div className="colorChoosing">
            <h4>Color: {this.state.currentColor}</h4>
            {this.state.colors.map((color) => (
              <div
                className={`color-${color.number} colorCude `}
                key={color.number}
                onClick={(e) => this.handleColorChange(e, color)}
              ></div>
            ))}
            {/* <div className="color-1 colorCude currentcolor"></div>
            <div className="color-2 colorCude"></div>
            <div className="color-3 colorCude"></div> */}
          </div>
          <div className="buttons-container">
            <button
              className="details-description-item"
              onClick={() => this.handleCountChange()}
            >
              {this.state.count}
            </button>
            <button
              className="hero-description-addTocart"
              onClick={() => onAdding(this.props.data, this.state.count)}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
