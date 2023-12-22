import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/view/Home";
import Career from "./Components/Career";
import Resources from "./Components/view/Resources";
import About from "./Components/About";
import Contact from "./Components/view/Contact";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Company" element={<Career />} />
          <Route path="/Resources" element={<Resources />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
