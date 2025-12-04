import React from "react";
import "./About.css";
import aboutsection from "../../assets/aboutsection.jpg";

const About = () => {
  return (
    <div className="about" id="aboutus">
      {/* <div className="aboutleft">
            <img src={aboutsection} alt="" />
        </div> */}
      <div className="aboutright">
        <h3>ABOUT US</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          ASCE CET is the student chapter of the American Society of Civil
          Engineers at the College of Engineering Trivandrum. We bring together
          students passionate about civil engineering and hands-on learning.
          Through workshops, expert talks, industry visits, and technical
          events, we help members grow beyond the classroom. Our goal is to
          inspire future engineers to innovate, collaborate, and create
          sustainable solutions.
        </p>
      </div>
    </div>
  );
};

export default About;
