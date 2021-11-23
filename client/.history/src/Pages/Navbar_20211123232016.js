import React, { useState } from "react";
import { HeaderNavbar } from "../Styles/Navbar";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [native, setNative] = useState(false);
  const handleNative = () => {
    setNative(!native);
  };
  return (
    <>
      <HeaderNavbar>
        <header>
          <Link to="/">
            <div className="logo">
              <i className="fas fa-utensils"></i>food Pizza
            </div>
          </Link>

          <div
            id="menu-bar"
            className="fas fa-bars "
            onClick={handleNative}
          ></div>
          <nav className={`navbar ${native ? "active" : ""}`}>
            <p>home</p>
            <p>speciality</p>
            <p>popular</p>
            <p>gallery</p>
            <p>review</p>
            <p>Feedback</p>
          </nav>
        </header>
      </HeaderNavbar>
    </>
  );
};

export default Navbar;
