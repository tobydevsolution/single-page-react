import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "../Contact";
import Home from "../Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
