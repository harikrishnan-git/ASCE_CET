import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Activity/Programs";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Campus from "./components/Events/Campus";
import Testimonials from "./components/Team/Testimonials";
import Contact from "./components/Membership/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="ACTIVITIES" title="" />
        <Programs />
        <About />
        <Title subTitle="EVENTS" title="" />
        <Campus />
        <Title subTitle="TEAM" title="" />
        <Testimonials />
        <Title subTitle="JOIN US" title="" />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
