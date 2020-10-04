import React from "react";
import Header from "./components/header";
import { Route, Redirect } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import CartPage from "./pages/CartPage";
import data from "./data/store-items.json";
import DetailsPage from "./pages/detailsPage";
class App extends React.Component {
  state = {
    cartActivated: false,
    Headerposition: "relative",
    cartItems: [],
  };

  handleDelete = (Selecteditem) => {
    console.log("hi");
    let remove = this.state.cartItems.indexOf(Selecteditem);
    this.setState(
      {
        cartItems: this.state.cartItems.filter((_, index) => index !== remove),
      },
      () => {
        console.log("deleted");
      }
    );
  };
  handleHasgChange = (pathname) => {
    if (pathname === "/cart") {
      this.setState({ cartActivated: true });
    } else if (pathname === "/") {
      this.setState({ cartActivated: false });
      this.setState({ Headerposition: "absolute" });
    } else {
      this.setState({ cartActivated: false });
    }
  };

  handleCartAdding = async (selectedItem, count) => {
    try {
      const myItem = {
        name: selectedItem.name,
        price: selectedItem.price,
        description: selectedItem.description,
        image: selectedItem.image,
        key: selectedItem.key,
        count: count,
      };
      await this.setState({ cartItems: [...this.state.cartItems, myItem] });
      alert("an item have been add successfully");
    } catch (error) {
      alert("some thing went wrong");
    }
  };
  render() {
    return (
      <React.Fragment>
        <Header activated={this.state.cartActivated} />
        <div>
          <Route
            exact
            path="/"
            render={(props) => (
              <HomePage
                {...props}
                onHashChange={this.handleHasgChange}
                data={data}
              />
            )}
          />
          <Route
            exact
            path="/details/:id"
            render={(props) => (
              <DetailsPage
                {...props}
                data={data}
                onAdding={this.handleCartAdding}
              />
            )}
          />
          <Route
            exact
            path="/cart"
            render={(props) => (
              <CartPage
                {...props}
                onHashChange={this.handleHasgChange}
                cartData={this.state.cartItems}
                onDelete={this.handleDelete}
              />
            )}
          />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
