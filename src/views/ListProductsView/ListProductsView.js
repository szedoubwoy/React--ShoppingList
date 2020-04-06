import React from "react";
import AppContext from "../../context";

import Products from "../../components/Products/Products";

const ListProductsView = () => (
  <AppContext.Consumer>
    {context => <Products products={context.products} />}
  </AppContext.Consumer>
);

export default ListProductsView;
