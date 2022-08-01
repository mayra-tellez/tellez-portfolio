import React from "react";
import { Route, Routes } from "react-router";

import Home from "./Components/Home/Home";
import Projects from "./Components/Projects/Projects";
import Work from "./Components/Work/Work";
import About from "./Components/About/About";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/work" element={<Work />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default Router;