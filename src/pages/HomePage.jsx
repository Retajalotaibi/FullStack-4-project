import React, { Component } from "react";
import Hero from "../components/Hero";
import ProductsTable from "../components/ProductsTable";
import MoreButton from "../components/MoreButton";
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.onHashChange(this.props.location.pathname);
  }
  render() {
    return (
      <React.Fragment>
        <Hero />
        <ProductsTable productsData={this.props.data} />
        <MoreButton />
      </React.Fragment>
    );
  }
}

export default HomePage;
