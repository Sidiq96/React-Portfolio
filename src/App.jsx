import React from "react";
import NavBar from "../components/NavBar";
import Home from "../components/Home";
import About from "../components/About";
import Skills from "../components/Skills";
import Work from "../components/Work";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </>
  );
}

export default App;
