import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

function Navbar() {
  return (
    <div className="navbar">
      <li>
        <Link to="/about">About Me</Link>
      </li>
      <li>
        <Link to="/portfolio">Portfolio</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
      <Link to="/resume">Resume</Link>
      </li>
    </div>
  );
}

export default Navbar;
