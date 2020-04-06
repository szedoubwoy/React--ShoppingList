import React from "react";
import EditProduct from "../../components/EditProducts/EditProduct/EditProduct";

class EditSingleProductView extends React.Component {
  render() {
    const {
      match: { params }
    } = this.props;
    return (
      <div className="container text-center">
        <EditProduct id={params.id} />
      </div>
    );
  }
}

export default EditSingleProductView;
