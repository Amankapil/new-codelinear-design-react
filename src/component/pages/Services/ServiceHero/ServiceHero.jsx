import React, { useEffect } from "react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import "./servicehero.scss";
import img from "./serviceaseets/Frame 1000001836.png";

const ServiceHero = () => {

  useEffect(() => {
    const section = document.querySelector(".bottom-chnage-color");
    const body = document.querySelector("body");
    const h1 = document.querySelectorAll("h1");
    const p = section.querySelectorAll("p");

    gsap.to(section, {
      scrollTrigger: {
        trigger: section,
        start: "top center",
        end: "bottom center",
        scrub: 10,
        lerp: 10,
        duration: 10,
        // markers: true, // for debugging, remove this in production
        onEnterBack: () => {
          gsap.to(body, {
            background:
              "conic-gradient(from 175deg at 37.18% 50%, #583933 84.375deg, #121B2C 358.32846879959106deg)",
          });

          // Change the color of the h1 element
          gsap.to(h1, {
            color: "#fff", // Change the color of the h1 element
          });
          gsap.to(p, {
            color: "#fff", // Change the color of the h1 element
          });
        },
        onEnter: () => {
          gsap.to(body, {
            background:
              "conic-gradient(from 175deg at 37.18% 50%, #583933 84.375deg, #121B2C 358.32846879959106deg)",
          });

          // Change the color of the h1 element
          gsap.to(h1, {
            color: "#E9E4D3", // Change the color of the h1 element
          });
          gsap.to(p, {
            color: "#E9E4D3", // Change the color of the h1 element
          });
        },
        onLeave: () => {
          gsap.to(body, {
            background: "transparent",
          });

          // Change the color of the h1 element back to the original color
          gsap.to(h1, {
            color: "#333",
          });
          gsap.to(p, {
            color: "#333", // Change the color of the h1 element
          });
        },
        onLeaveBack: () => {
          gsap.to(body, {
            background: "transparent",
          });

          // Change the color of the h1 element back to the original color
          gsap.to(h1, {
            color: "#333",
          });
          gsap.to(p, {
            color: "#333", // Change the color of the h1 element
          });
        },
      },
    });
  }, []);
  return (
    <div className="servicehero">
      <div className="main-hero">
        <div className="up-hero pt-40">
          <h1>We are a digital product development and UX design firm.</h1>
        </div>

        <div className="bottom-chnage-color pt-40">
          <div className="main-service-bottom flex justify-between">
            <div className="leftimg-service-hero">
              <img src={img} alt="" />
            </div>
            <div className="rightcontent-service-hero flex flex-col justify-between">
              <div className="pera-digit">
                <p>
                  We are a digital product development and UX design firm
                  determined to make an impact through our clients. With the
                  finest end-user experience as our primary objective, we
                  integrate our tech expertise with a social conscience to build
                  digital products.
                </p>
              </div>
              <div className="love-pera ">
                <h1 className="pt-72">
                  We love building and shaping brands that stand the test of
                  time.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceHero;
