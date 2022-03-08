import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import { Navbar, Articles, Homepage, Sign_in, Sign_up } from "./components";

import "./App.css";
import { ShrinkOutlined } from "@ant-design/icons";

const App = () => (
  <div className="App">
    <Navbar />
    <div className="routes">
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/articles" element={<Articles />} />
        <Route exact path="/sign_in" element={<Sign_in />} />
        <Route exact path="/sign_up" element={<Sign_up />} />
      </Routes>
    </div>
  </div>
);

export default App;
