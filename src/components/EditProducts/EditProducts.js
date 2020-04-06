import React from "react";

import AppContext from "../../context";
import Product from "../../components/Products/Product/Product";

const EditProducts = () => {
  return (
    <AppContext.Consumer>
      {context => (
        <div className="container mx-auto">
          <div className="row">
            {context.products.length ? (
              <div className="row my-5 mx-auto text-center text-md-left">
                {context.products.map(product => (
                  <div className="col-12 col-md-6 col-lg-4 d-md-flex flex-column flex-md-row my-4">
                    <Product
                      key={product.name}
                      {...product}
                      handler={e =>
                        window.confirm("Do You Want to delete this product?") &&
                        context.deleteProduct(e, product.id)
                      }
                      edit={true}
                      del={true}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <h5>List is empty...</h5>
            )}
          </div>
        </div>
      )}
    </AppContext.Consumer>
  );
};

export default EditProducts;
