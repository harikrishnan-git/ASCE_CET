import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.jpeg";
import { Link } from "react-scroll";
import menuicon from "../../assets/menuicon.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <nav className={`nav ${sticky ? "darknav" : ""}`}>
      <img src={logo} alt="" />
      <ul className={mobileMenu ? "" : "hidemobilemenu"}>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        {/* <li>
          <Link to="programs" smooth={true} offset={-310} duration={500}>
            Activity
          </Link>
        </li> */}
        <li>
          <Link to="aboutus" smooth={true} offset={-150} duration={500}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="campus" smooth={true} offset={-250} duration={500}>
            Team
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} offset={-310} duration={500}>
            Events
          </Link>
        </li>
        <li>
          <Link to="contactus" smooth={true} offset={-310} duration={500}>
            <button className="btn">Join Us</button>
          </Link>
        </li>
      </ul>
      <img src={menuicon} alt="" className="menuicon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
