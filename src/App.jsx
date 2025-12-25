import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Team from "./components/Team/Team";
import Testimonials from "./components/Events/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        {/* <Title subTitle="ACTIVITIES" title="" />
        <Programs /> */}
        <About />
        <Team />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
