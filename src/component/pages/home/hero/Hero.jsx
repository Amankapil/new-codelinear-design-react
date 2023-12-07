import React from "react";

import "./hero.scss";
const Hero = () => {
  return (
    <>
      <div className="home-hero pt-44">
        <div className="home-hero-heading">
          <h1>Propelling the World, by design.</h1>
        </div>
        <div className="home-hero-video"></div>
      </div>

      <div className="menu-card">
        <div className="intro">introduction</div>
        <p>
          <span className="line-menu"></span>
          <span className="text-fixed-menu">about us</span>
        </p>
        <p>
          <span className="line-menu"></span>
          <span className="text-fixed-menu">Services</span>
        </p>
        <p>
          <span className="line-menu"></span>
          <span className="text-fixed-menu">Works </span>
        </p>
        <p>
          <span className="line-menu"></span>
          <span className="text-fixed-menu">industries</span>
        </p>
      </div>
    </>
  );
};

export default Hero;
