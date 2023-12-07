import React from "react";
import HeroAbout from "./HeroAbout/HeroAbout";
import Craft from "./Craft/Craft";
import Footer from "../../footer/footer";
import Circle from "./Circle/Circle";
import Thrive from "./Thrive/Thrive";
import Ideas from "./Ideas/Ideas";

const About = () => {
  return (
    <>
      <HeroAbout />
      <Craft />
      <Circle />
      <Thrive />
      <Ideas />
      <Footer />
    </>
  );
};

export default About;
