import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Page404 from "../pages/Page404";
import React from "react";

const Routers: React.FC = () => {
  return (
    <Routes>
      <Route path="*" element={<Page404 />} />
      <Route path="/" element={<Home />} />

    </Routes>
  )
}

export default Routers
