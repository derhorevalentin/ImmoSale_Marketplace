import React from "react";
import { Link } from "react-router-dom";

import icon from "../images/immo.jpg";

const Navbar = () => {
  return (
    <div className="nav-link">
      <div className="logo-container">
        <Link to="/">ImmoSale</Link>
        <img src="../images/immo.jpg"></img>
      </div>

      <Link to="/Home">Home</Link>
      <Link to="/Articles">Articles</Link>
    </div>
  );
};

export default Navbar;
