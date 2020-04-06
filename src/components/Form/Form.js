import React from "react";
import shortid from "shortid";
import AppContext from "../../context";

let msg = false;

class Form extends React.Component {
  state = {
    id: shortid.generate(),
    name: "",
    number: 1
  };

  handleInputChange = e => {
    msg = false;
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <AppContext.Consumer>
        {context => (
          <div className="my-5">
            <div className="pb-3">
              <h2>Add new Product</h2>
              {msg && <h5 className="text-success pb-3">Product Added!</h5>}
            </div>
            <div className="row mx-auto">
              <div className="col-12 col-md-6 mx-auto">
                <form
                  autoComplete="off"
                  onSubmit={e => context.addNewProduct(e, this.state)}
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
                    <label htmlFor="number">Quantity of this product</label>
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
                    Add new Product
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

export default Form;
