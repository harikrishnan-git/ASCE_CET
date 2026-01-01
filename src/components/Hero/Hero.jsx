import React from "react";
import "./Hero.css";
import EarthScene from "./EarthScene";

const Hero = () => {
  return (
    <div className="hero">
      {/* Background eco particles */}
      <ul className="eco-particles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>

      <div className="hero-text">
        <div style={{ height: "60vh", width: "60vw" }}>
          <EarthScene />
        </div>
      </div>
    </div>
  );
};

export default Hero;
