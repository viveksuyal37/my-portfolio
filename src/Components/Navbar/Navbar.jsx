import React from "react";
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav_logo">
          Vivek
        </a>

        <div className={showNav ? "nav_menu show-nav-menu" : "nav_menu"}>
          <ul className="navlist">
            <li className="nav_item">
              <a href="#home" className="nav_link active">
                <i className="uil uil-estate nav_icon "></i> Home
              </a>
            </li>

            <li className="nav_item">
              <a href="#about" className="nav_link">
                <i className="uil uil-user nav_icon"></i> About
              </a>
            </li>

            <li className="nav_item">
              <a href="#skills" className="nav_link">
                <i className="uil uil-user nav_icon"></i> Skills
              </a>
            </li>

            <li className="nav_item">
              <a href="#services" className="nav_link">
                <i className="uil uil-briefcase nav_icon"></i> Services
              </a>
            </li>

            <li className="nav_item">
              <a href="#portfolio" className="nav_link">
                <i className="uil uil-scenery nav_icon"></i> Portfolio
              </a>
            </li>

            <li className="nav_item">
              <a href="#contact" className="nav_link">
                <i className="uil uil-phone nav_icon"></i> Contact
              </a>
            </li>
          </ul>

          <i onClick={toggleNav} className="uil uil-times nav_close"></i>
        </div>

        <div className="nav_toggle">
          <i onClick={toggleNav} className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
