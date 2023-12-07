import React from "react";
import "./heroabout.scss";

const HeroAbout = () => {
  return (
    <>
      <div className="about-hero">
        <div className="main-about-hero">
          <h1>We are a digital product development and UX design firm.</h1>
        </div>

        <div className="about-her-pera flex justify-end items-center pt-40">
          <p>
            We are a digital product development and UX design firm determined
            to make an impact through our clients. With the finest end-user
            experience as our primary objective, we integrate our tech expertise
            with a social conscience to build digital products.
          </p>
        </div>
      </div>

      <div className="lottie pt-56"></div>
    </>
  );
};

export default HeroAbout;
