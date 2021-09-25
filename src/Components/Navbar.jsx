import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.svg";

const Navbar = () => {
  return (
    <div className="navbar-container">
      {/* Logo container */}
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="logo" className="logo"/>
        </Link>
      </div>
      {/* Nav-Links */}
      <div className="navlinks-container">
        <Link to="/">
          {" "}
          <h3>Home</h3>{" "}
        </Link>
        <h3> <a href="#about">About</a> </h3>
        <h3> <a href="#feature">Features</a> </h3>
        <h3> <a href="#specification">Specifications</a>  </h3>
        <h3>Contact</h3>
        {/* Cart icon */}
      </div>
    </div>
  );
};

export default Navbar;
