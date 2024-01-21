import React, { useState, useRef, useEffect } from "react";
import logo from "./assets/nav-logo.jpg";
import { Button } from "../../ui";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <div className="nav-bg">
        <div>
          <Link to="/">
            <img className="nav-logo" src={logo} alt="Jollibee KSA" />
          </Link>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <Link to="/menu">
            <Button label="ORDER NOW" classname={"order-now-1"} />
          </Link>

          <div
            className={`hamburger-icon ${isMenuOpen ? "menu-open" : ""}`}
            onClick={toggleMenu}
          >
            ME
            <br />
            NU
          </div>

          {isMenuOpen && (
            <div className="menu" ref={menuRef}>
              <div className="close-btn" onClick={toggleMenu}>
                &times;
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  paddingTop: "60px",
                }}
              >
                <Link to="/">
                  <a href="/">!Home of the Famous Chickenjoy</a>
                </Link>
                <Link to="/menu">
                  <a href="/">Menu</a>
                </Link>
                <Link to="/">
                  <a href="/">Store Locations</a>
                </Link>
                <Link to="/">
                  <a href="/">About us</a>
                </Link>
                <Link to="/beesafe">
                  <a href="/">Beesafe</a>
                </Link>
                <Link to="/">
                  <a href="/">Contact Us</a>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
