import React, { useEffect } from "react";
import "./port.scss";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import mango from "./portassets/pexels-anh-khac-6318739 1.png";
import cowboy from "./portassets/Frame 567 (1).png";
import warewell from "./portassets/Frame 567 (2).png";
import tradejini from "./portassets/Frame 1000001741.png";
import briatania from "./portassets/Frame 1000001834.png";
import ikea from "./portassets/Frame 1000001741 (1).png";
import william from "./portassets/Frame 1000001741 (2).png";
import viuri from "./portassets/image 11 (1).png";

import Horizontal from "./Horizontal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Client from "./Horizontal";

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const slickSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    autoplay: false,
    slidesToShow: 2.2,
  };
  return (
    <>
      <div className="portfolio mt44">
        <div className="main-port ">
          <div className="up-head-port flex justify-between w-full">
            <div className="port-heading">
              <h1>portfolio</h1>
            </div>
            <div className="port-pera">
              <p>
                Id donec rutrum mauris venenatis ac. Id metus lorem mus sit
                magna varius cum proin. Accumsan volutpat natoque purus
                pellentesque nec ac nulla turpis consectetur. Fermentum ut non
                commodo lacus enim.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <Horizontal/> */}

      <div className="scroll-container">
        <Slider {...slickSettings}>
          <div className="scroll-content">
            <img src={mango} alt="" />
            <p>Mango</p>
          </div>

          <div className="scroll-content">
            <img src={cowboy} alt="" />
            <p>cowboy</p>
          </div>

          <div className="scroll-content">
            <img src={warewell} alt="" />
            <p>warewell</p>
          </div>
          <div className="scroll-content">
            <img src={tradejini} alt="" />
            <p>tradejini</p>
          </div>
          <div className="scroll-content">
            <img src={briatania} alt="" />
            <p>briatania</p>
          </div>
          <div className="scroll-content">
            <img src={ikea} alt="" />
            <p>ikea</p>
          </div>
          <div className="scroll-content">
            <img src={william} alt="" />
            <p>william</p>
          </div>
          <div className="scroll-content">
            <img src={viuri} alt="" />
            <p>viuri</p>
          </div>
        </Slider>
      </div>

      <Client />
    </>
  );
};

export default Portfolio;
