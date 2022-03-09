import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";

import icon from "../images/immosale.jpg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={icon}></img>
      </div>
      <div className="nav-name">
        <Link to="/">ImmoSale</Link>
      </div>
      <div className="nav-link">
        <Link to="/articles" style={{ marginRight: "20px", fontSize: "20px" }}>
          Mes Articles
        </Link>
        <Link to="/sign_in" style={{ marginRight: "20px" }}>
          <button className="ant-btn ant-btn-primary"> Sign in </button>
        </Link>
        <Link to="/sign_up">
          <button className="ant-btn ant-btn-default">Register</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
