import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./Profile";
import Footer from "./Footer";
import Button from "./Button";
import Social from "./Social";
import Contact from "../Contact";
import Home from "../Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>

      <Profile />
      <Button />
      <Social />
      <Footer />
    </div>
  );
}

export default App;
