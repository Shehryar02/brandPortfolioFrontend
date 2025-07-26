import React, { useState, useRef, useEffect } from "react";
import "./Navbar.css";
import { useNavigate, useLocation } from "react-router-dom";

import logo from '../../assets/New Logos/logo1.png'

const Navbar = () => {
  const location = useLocation(); // Get current path

  const [menuOpen, setMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false); // 👈 track if closing
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const workingLetsTalkBtn = () => {
    navigate("/contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  };

  const navigateToHome = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  };
  const navigateToAbout = () => {
    navigate("/about");
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  };

  const navigateToWork = () => {
    navigate("/work");
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  };

  const navigateToServices = () => {
    navigate("/services");
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  };

  const navigateToContact = () => {
    navigate("/contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    if (menuOpen) {
      setIsClosing(true);
    } else {
      setMenuOpen(true);
    }
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsClosing(true);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleAnimationEnd = () => {
    if (isClosing) {
      setMenuOpen(false);
      setIsClosing(false);
    }
  };

  const handleLinkClick = () => {
    setIsClosing(true);
  };

  return (
    <div>
      {menuOpen && (
        <div
          ref={menuRef}
          className={`menu-popup-lightMode ${
            isClosing ? "closing" : ""
          } bg-light p-3 rounded shadow`}
          onAnimationEnd={handleAnimationEnd}
        >
          <ul className="list-unstyled m-0">
            <li className="mb-2">
              <p onClick={navigateToHome}>Home</p>
            </li>
            <li className="mb-2">
              <p onClick={navigateToAbout}>About</p>
            </li>
            <li className="mb-2">
              <p onClick={navigateToWork}>Work</p>
            </li>
            <li className="mb-2">
              <p onClick={navigateToServices}>Services</p>
            </li>
            <li className="mb-2">
              <p onClick={navigateToContact}>Contact</p>
            </li>
          </ul>
        </div>
      )}

      <div className="container-fluid navCol">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <div onClick={navigateToHome} className="d-flex logoContainer justify-content-center align-items-center gap-0">
              <img src={logo} className="img-fluid logo" alt="" />
              <h3 className="m-0 d-flex justify-content-between align-items-start">
                Senvotex
              </h3>
            </div>

            <div className="centreMaterialNavbabr d-none d-md-flex justify-content-between gap-4">
              <p
                onClick={navigateToHome}
                className={`nav-link-style m-0 ${
                  location.pathname === "/" ? "active-link" : ""
                }`}
              >
                Home
              </p>
              <p
                onClick={navigateToAbout}
                className={`nav-link-style m-0 ${
                  location.pathname === "/about" ? "active-link" : ""
                }`}
              >
                About
              </p>
              <p
                onClick={navigateToWork}
                className={`nav-link-style m-0 ${
                  location.pathname === "/work" ? "active-link" : ""
                }`}
              >
                Work
              </p>
              <p
                onClick={navigateToServices}
                className={`nav-link-style m-0 ${
                  location.pathname === "/services" ? "active-link" : ""
                }`}
              >
                Services
              </p>
            </div>

            <div className="d-flex align-items-center justify-content-center gap-4">
              <button
                onClick={workingLetsTalkBtn}
                className="btns-lightMode btn-mobile d-flex align-items-center justify-content-center gap-2 px-3 py-1"
              >
                Contact Us{" "}
                <i className="iconFAwesom-lightMode fa-solid fa-arrow-right"></i>
              </button>
              <button
                className="hamburgerNavbar btns-lightMode px-3 py-1"
                onClick={toggleMenu}
              >
                <i className="iconFAwesom-lightMode fa-solid fa-bars"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
