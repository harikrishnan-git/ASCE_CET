import React from "react";
import "./Hero.css";

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
        <h1>Sustainable Tomorrow</h1>
        <p>Building eco-conscious minds for a greener future</p>
      </div>
    </div>
  );
};

export default Hero;
