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
            <Link to="/" className="a">
              home
            </Link>
            <Link to="/speciality" className="a">
              speciality
            </Link>
            <Link to="/popular" className="a">
              popular
            </Link>
            <Link to="/gallery" className="a">
              gallery
            </Link>
            <Link to="/review" className="a">
              review
            </Link>
            <Link to="/feedback" className="a">
              Feedback
            </Link>
          </nav>
        </header>
      </HeaderNavbar>
    </>
  );
};

export default Navbar;
