import React from "react";
import { Link } from "react-router-dom";

import icon from "../images/immosale.jpg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={icon}></img>
      </div>
      <div className="nav-link">
        <Link to="/">ImmoSale</Link>
        <Link to="/articles">Articles</Link>
        <Link to="/sign_in">SignIn</Link>
        <Link to="/sign_up">SignUp</Link>
      </div>
    </div>
  );
};

export default Navbar;
