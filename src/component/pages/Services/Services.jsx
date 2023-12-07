import React from "react";
import ServiceHero from "./ServiceHero/ServiceHero";
import Consult from "./consulting/Consult";
import Userexperience from "./userExperience/Userexperience";
import Footer from "../../footer/footer";
import Productdev from "./productDev/Productdev";
import Digitalmarket from "./digitalMarket/Digitalmarket";

const Services = () => {
  return (
    <>
      <ServiceHero />
      <Consult />
      <Userexperience />
      <Productdev />
      <Digitalmarket/>
      <Footer />
    </>
  );
};

export default Services;
