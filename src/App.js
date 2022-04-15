import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Items from "./components/pages/Items";
import ItemsID from "./components/pages/ItemsID";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/items/:category" element={<Items />} />
          <Route path="/items/:category/:id" element={<ItemsID />} />
          {/* Page not found */}
          <Route path="*" element={<h1>Page not found 404 error</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
