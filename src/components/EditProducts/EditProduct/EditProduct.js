import React from "react";

import AppContext from "../../../context";

let msg = false;

class EditProduct extends React.Component {
  state = {
    id: "",
    name: "",
    number: 1
  };

  handleInputChange = e => {
    msg = false;
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  setStartValue = () => {
    const id = this.props.id;
    let product = this.context.products.find(p => p.id === id);

    this.setState({
      id: product.id,
      name: product.name,
      number: product.number
    });
  };

  componentDidMount() {
    this.setStartValue();
  }

  render() {
    return (
      <AppContext.Consumer>
        {context => (
          <div className="my-5">
            <h2 className="">Edit Product</h2>
            {msg && <h5 className="text-success pb-3">Product updated!</h5>}
            <div className="row mx-auto">
              <div className="col-12 col-md-6 mx-auto">
                <form
                  autoComplete="off"
                  onSubmit={e => context.updateProduct(e, this.state)}
                >
                  <div className="form-group">
                    <label htmlFor="name">Product Name</label>
                    <input
                      required
                      onChange={this.handleInputChange}
                      value={this.state.name}
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="number">Number of this product</label>
                    <input
                      required
                      onChange={this.handleInputChange}
                      value={this.state.number}
                      type="number"
                      className="form-control"
                      id="number"
                      name="number"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={() => (msg = true)}
                  >
                    Save Product
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}

EditProduct.contextType = AppContext;

export default EditProduct;
