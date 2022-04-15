import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import DashBoard from "./components/pages/DashBoard";
import Home from "./components/pages/Home";
import Items from "./components/pages/Items";
import ItemsID from "./components/pages/ItemsID";
import Login from "./components/pages/Login";
import Logout from "./components/pages/Logout";

const App = () => {
  let isLogged = true;
  const data = {
    'status': 'user not login'
  }
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
          <Route path="/dashboard" element={isLogged ? <DashBoard />: <Navigate to="/login" state={data} replace/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          {/* Page not found */}
          <Route path="*" element={<h1>Page not found 404 error</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
