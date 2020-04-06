import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AppContext from "../../context";

import styles from "./index.module.scss";
import Navbar from "../../components/Navbar/Navbar";
import AddProductView from "../AddProductView/AddProductView";
import EditProductListView from "../EditProductListView/EditProductListView";
import EditSingleProductView from "../EditSingleProductView/EditSingleProductView";
import ListProductsView from "../ListProductsView/ListProductsView";
import SettingsView from "../SettingsView/SettingsView";
import ShoppingListView from "../ShoppingListView/ShoppingListView";

class Root extends React.Component {
  state = {
    products: [
      {
        id: "1",
        name: "Bread",
        number: 1
      },
      {
        id: "2",
        name: "Milk",
        number: 5
      },
      {
        id: "3",
        name: "Ham",
        number: 1
      },
      {
        id: "4",
        name: "Cheese",
        number: 7
      },
      {
        id: "5",
        name: "Broccoli",
        number: 2
      }
    ],
    theme: "light"
  };

  addNewProduct = (e, newProduct) => {
    e.preventDefault();

    this.setState(prevState => ({
      products: [...prevState.products, newProduct]
    }));
  };

  updateProduct = (e, newProduct) => {
    e.preventDefault();

    this.setState(prevState => ({
      products: prevState.products.map(p =>
        p.id === newProduct.id
          ? {
              id: newProduct.id,
              name: newProduct.name,
              number: newProduct.number
            }
          : p
      )
    }));
  };

  deleteProduct = (e, id) => {
    e.preventDefault();
    const products = this.state.products.filter(p => p.id !== id);

    this.setState({ products: products });
  };

  render() {
    const contextElements = {
      ...this.state,
      addNewProduct: this.addNewProduct,
      updateProduct: this.updateProduct,
      deleteProduct: this.deleteProduct
    };
    return (
      <div>
        <BrowserRouter>
          <AppContext.Provider value={contextElements}>
            <Navbar />
            <Switch>
              <Route exact path="/" component={ListProductsView} />
              <Route path="/add" component={AddProductView} />
              <Route exact path="/edit" component={EditProductListView} />
              <Route path="/edit/:id" component={EditSingleProductView} />
              <Route path="/list" component={ShoppingListView} />
              <Route path="/settings" component={SettingsView} />
            </Switch>
          </AppContext.Provider>
        </BrowserRouter>
      </div>
    );
  }
}

export default Root;
