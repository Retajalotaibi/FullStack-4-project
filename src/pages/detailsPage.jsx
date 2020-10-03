import React, { Component } from "react";
import ProductsTable from "../components/ProductsTable";
import MoreButton from "../components/MoreButton";
import Detail from "../components/details";

class DetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const key = this.props.match.params.id;
    const silcedData = this.props.data.slice(1, 4);
    const selectedData = this.props.data.find((data) => data.key.includes(key));
    console.log(selectedData);
    return (
      <div>
        <Detail
          {...this.props}
          data={selectedData}
          onAdding={this.props.onAdding}
        />
        <h3 style={{ display: "flex", justifyContent: "center" }}>
          might also like
        </h3>
        <ProductsTable productsData={silcedData} />
        <MoreButton />
      </div>
    );
  }
}

export default DetailsPage;
