import React from "react";
import Profile from "./Profile";
import Footer from "./Footer";
import Button from "./Button";
import Social from "./Social";
import Contact from "../Contact";
import Text from "./Text";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="../Contact" component={<Contact />} />
      </Routes>

      <Profile />
      <Button />
      <Social />
      <Footer />
      <Text />
    </div>
  );
}

export default App;
