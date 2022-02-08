import React from "react";
import Navbar  from "../Navbar/Navbar";
import './Header.css'

function Header() {
  return (
    <section className="header">
      <section className="header-title">
        <h1>Christi Marchetti</h1>
      </section>
      <section className="header-navigation"><Navbar/></section>
    </section>
  );
}

export default Header;
