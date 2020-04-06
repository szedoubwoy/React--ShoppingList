import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Product = ({ id, name, number, image, handler, edit, del }) => {
  return (
    <>
      <div className="col-12 col-md-5 col-lg-8">
        <img width="200" src={image} className="img-thumbnail" alt={name} />
      </div>
      <div className="col-12 col-md-8 align-self-center">
        <span className="font-weight-bold">{name}</span>
        <span className="d-block pb-2">
          Quantity:
          <span className="font-weight-bold"> {number}</span>
        </span>
        {del && (
          <button onClick={handler} className="btn btn-sm btn-outline-danger">
            Delete
          </button>
        )}

        {edit && (
          <NavLink
            to={`/edit/${id}`}
            className="btn btn-sm btn-outline-primary"
          >
            Edit
          </NavLink>
        )}
      </div>
    </>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired
};

Product.defaultProps = {
  del: true,
  image:
    "https://www.telegraph.co.uk/content/dam/food-and-drink/2018/06/20/Veg_trans_NvBQzQNjv4Bqul3YgLXf2lEf3afmzmy4CHMT9HEIQzXrohIUnOkGrQA.jpg"
};

export default Product;
