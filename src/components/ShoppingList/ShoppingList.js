import React from "react";
import AppContext from "../../context";
import Products from "../Products/Products";
import Product from "../Products/Product/Product";

class ShoppingList extends React.Component {
  state = {
    list: []
  };

  setStartValue = () => {
    const filteredProducts = this.context.products.filter(p => p.number < 2);

    this.setState({
      list: filteredProducts
    });
  };

  componentDidMount() {
    this.setStartValue();
    console.log(this.state.list);
  }

  render() {
    return (
      <div className="container mx-auto">
        <div className="row my-5 ">
          {this.state.list.length ? (
            <div className="row my-5 mx-auto text-center text-md-left">
              {this.state.list.map(product => (
                <div className="col-12 col-md-6 col-lg-4 d-md-flex flex-column flex-md-row my-4">
                  <Product
                    key={product.name}
                    {...product}
                    edit={false}
                    del={false}
                  />
                </div>
              ))}
            </div>
          ) : (
            <h5 className="text-center">There is nothing to buy...</h5>
          )}
        </div>
      </div>
    );
  }
}

ShoppingList.contextType = AppContext;

export default ShoppingList;
