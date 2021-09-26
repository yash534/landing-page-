import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.svg";

const Navbar = (props) => {
  return (
    <div className="navbar-container">
      {/* Logo container */}
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
      </div>
      {/* Nav-Links */}
      <div className="navlinks-container">
        <Link to="/">
          {" "}
          <h3>{props.Home}</h3>{" "}
        </Link>
        <h3>
          {" "}
          <a href="#about">{props.About}</a>{" "}
        </h3>
        <h3>
          {" "}
          <a href="#feature">{props.Features}</a>{" "}
        </h3>
        <h3>
          {" "}
          <a href="#specification">{props.Specifications}</a>{" "}
        </h3>
        <h3>{props.Contact}</h3>
        {/* Cart icon */}
      </div>
    </div>
  );
};

export default Navbar;
