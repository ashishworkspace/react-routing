import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./nav.css";
const Navbar = () => {
  return (
    // <ul>
    //   <li>
    //     <Link to="/">Home</Link>
    //   </li>
    //   <li>
    //     <Link to="/about">About</Link>
    //   </li>
    //   <li>
    //     <Link to="/contact">Contact</Link>
    //   </li>
    // </ul>
    <ul>
      <li>
        <NavLink
          style={({ isActive }) => {
            return { background: isActive ? "pink" : "" };
          }}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
