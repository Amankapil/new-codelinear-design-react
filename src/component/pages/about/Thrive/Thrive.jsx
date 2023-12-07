import "./thrive.scss";
import img from "./Frame 1000001779.svg";

import React, { useEffect } from "react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

const Thrive = () => {
  useEffect(() => {
    const section = document.querySelector(".thrive");
    const body = document.querySelector("body");
    const h1 = section.querySelector("h1");
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
              "conic-gradient(from 174deg at 100.4% 49.25%, #B46F38 5.011211335659027deg, #CF974A 55.738980174064636deg)",
          });

          // Change the color of the h1 element
          gsap.to(h1, {
            color: "#FFE3BC", // Change the color of the h1 element
          });
          gsap.to(p, {
            color: "#FFE3BC", // Change the color of the h1 element
          });
        },
        onEnter: () => {
          gsap.to(body, {
            background:
              "conic-gradient(from 174deg at 100.4% 49.25%, #B46F38 5.011211335659027deg, #CF974A 55.738980174064636deg)",
          });

          // Change the color of the h1 element
          gsap.to(h1, {
            color: "#FFE3BC", // Change the color of the h1 element
          });
          gsap.to(p, {
            color: "#FFE3BC", // Change the color of the h1 element
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
    <>

   
      <div className="thrive">
        <div className="main-thrive">
          <div className="up-thrive">
            <h1>We thrive on challenges and complex problems.</h1>
          </div>

          <div className="digital-product flex justify-between items-start py-32">
            <div className="digitalimg">
              <img src={img} alt="" />
            </div>
            <div className="digital-peras">
              <p>
                We are a digital product development and UX design firm
                determined to make an impact through our clients. With the
                finest end-user experience as our primary objective, we
                integrate our tech expertise with a social conscience to build
                digital products.
              </p>
              <p>
                We are a digital product development and UX design firm
                determined to make an impact through our clients. With the
                finest end-user experience as our primary objective, we
                integrate our tech expertise with a social conscience to build
                digital products.
              </p>
              <p>
                We are a digital product development and UX design firm
                determined to make an impact through our clients. With the
                finest end-user experience as our primary objective, we
                integrate our tech expertise with a social conscience to build
                digital products.
              </p>
              <p>
                We are a digital product development and UX design firm
                determined to make an impact through our clients. With the
                finest end-user experience as our primary objective, we
                integrate our tech expertise with a social conscience to build
                digital products.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Thrive;
