import React from "react";
import AppContext from "../../context";
import Product from "./Product/Product";

const Products = ({ products }) => (
  <AppContext.Consumer>
    {context => (
      <div className="container">
        {context.products.length ? (
          <div className="row my-5 mx-auto text-center text-md-left">
            {context.products.map(product => (
              <div className="col-12 col-md-6 col-lg-3 d-md-flex flex-column flex-md-row my-4">
                <Product
                  key={product.name}
                  {...product}
                  handler={e =>
                    window.confirm("Do You Want to delete this product?") &&
                    context.deleteProduct(e, product.id)
                  }
                />
                <div className="d-block" />
              </div>
            ))}
          </div>
        ) : (
          <h5>List is empty...</h5>
        )}
      </div>
    )}
  </AppContext.Consumer>
);

export default Products;
