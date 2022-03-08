import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Layout } from "antd";

import { Navbar, Articles, Homepage, Sign_in, Sign_up } from "./components";

import "./App.css";
import { ShrinkOutlined } from "@ant-design/icons";

const App = () => (
  <div className="App">
    <div className="navbar">
      <Navbar />
    </div>
    <div className="main">
      <Layout>
        <div className="routes">
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/articles" element={<Articles />} />
            <Route exact path="/sign_in" element={<Sign_in />} />
            <Route exact path="/sign_up" element={<Sign_up />} />
          </Routes>
        </div>
      </Layout>
    </div>
  </div>
);

export default App;
