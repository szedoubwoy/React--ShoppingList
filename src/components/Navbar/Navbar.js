import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <NavLink exact to="/" className="navbar-brand">
      <img
        src="https://whistlergrocery.com/assets/img/wgs-logo.svg"
        width="150"
        height="50"
        className="d-inline-block align-top"
        alt=""
      />
    </NavLink>

    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item ml-5">
          <NavLink to="/" className="nav-link">
            product list
          </NavLink>
        </li>
        <li className="nav-item ml-5">
          <NavLink exact to="/add" className="nav-link">
            add
          </NavLink>
        </li>
        <li className="nav-item ml-5">
          <NavLink to="/edit" className="nav-link">
            edit
          </NavLink>
        </li>
        <li className="nav-item ml-5">
          <NavLink exact to="/list" className="nav-link">
            shopping list
          </NavLink>
        </li>
      </ul>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item mr-auto ml-5">
          <NavLink to="/settings" className="nav-link">
            settings
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
