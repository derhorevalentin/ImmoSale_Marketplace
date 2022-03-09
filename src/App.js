import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

import {
  Navbar,
  Articles,
  Homepage,
  Sign_in,
  Sign_up,
  Article,
} from "./components";

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
            <Route exact path="/article/:articleId" element={<Article />} />
          </Routes>
        </div>
      </Layout>
    </div>
    <div className="footer">
      <Typography.Title
        level={5}
        style={{ color: "white", textAlign: "center" }}
      >
        ImmoSale Marketplace ©<br />
        All rights reserverd
      </Typography.Title>
    </div>
  </div>
);

export default App;
