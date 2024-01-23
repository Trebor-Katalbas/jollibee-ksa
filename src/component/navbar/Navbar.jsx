import React, { useState, useRef, useEffect } from "react";
import logo from "./assets/nav-logo.jpg";
import { Button } from "../../ui";
import { Link, NavLink } from "react-router-dom";
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
          <a href="https://main.order.tryotter.com/a46f86a1-3ca6-4d29-ae1a-ced896188089" target="_blank" rel='noreferrer'>
            <Button label="ORDER NOW" classname={"order-now-1"} />
          </a>

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
                <NavLink
                  to="/"
                  style={{
                    color: window.location.pathname === "/" ? "#ff5900" : "",
                  }}
                  end
                >
                  !Home of the Famous Chickenjoy
                </NavLink>
                <NavLink
                  to="/menu"
                  style={{
                    color:
                      window.location.pathname === "/menu" ? "#ff5900" : "",
                  }}
                >
                  Menu
                </NavLink>
                <NavLink
                  to="/storelocations"
                  style={{
                    color:
                      window.location.pathname === "/storelocations"
                        ? "#ff5900"
                        : "",
                  }}
                >
                  Store Locations
                </NavLink>
                <NavLink
                  to="/aboutus"
                  style={{
                    color:
                      window.location.pathname === "/aboutus" ? "#ff5900" : "",
                  }}
                >
                  About us
                </NavLink>
                <NavLink
                  to="/beesafe"
                  style={{
                    color:
                      window.location.pathname === "/beesafe" ? "#ff5900" : "",
                  }}
                >
                  Beesafe
                </NavLink>
                <NavLink
                  to="/contactus"
                  style={{
                    color:
                      window.location.pathname === "/contactus"
                        ? "#ff5900"
                        : "",
                  }}
                >
                  Contact Us
                </NavLink>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
