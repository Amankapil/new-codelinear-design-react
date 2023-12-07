import React from "react";
import Navbar from "../../header/Navbar";
import HomeAbout from "./homeAbout/HomeAbout";
import HomeService from "./homeService/HomeService";
import Portfolio from "./Portfolio/Portfolio";
import Served from "./Served/Served";
import Hero from "./hero/Hero";
import Footer from "../../footer/footer";
import Google from "./googleSearch/Google";

const Home = () => {
  return (
    <>
      <Hero />
      <Google />
      <HomeAbout />
      <HomeService />
      <Portfolio />
      <Served />
      <Footer />
    </>
  );
};

export default Home;
