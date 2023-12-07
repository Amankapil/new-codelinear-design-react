import "./craft.scss";
import imgg from "./craftassets/image 15.svg";

import React, { useEffect } from "react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

const Craft = () => {
  useEffect(() => {
    const section = document.querySelector(".craft");
    const body = document.querySelector("body");
    const h1 = section.querySelectorAll("h1");
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
              "conic-gradient(from 0deg at 100.79% 52.19%, #87A3B2 25.08894592523575deg, #436272 332.0570683479309deg)",
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
              "conic-gradient(from 0deg at 100.79% 52.19%, #87A3B2 25.08894592523575deg, #436272 332.0570683479309deg)",
          });

          // Change the color of the h1 element
          gsap.to(h1, {
            color: "#fff", // Change the color of the h1 element
          });
          gsap.to(p, {
            color: "#fff", // Change the color of the h1 element
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
    <div className="craft">
      <div className="main-craft">
        <div className="craft-heading">
          <h1>Crafting ideal, innovative and impactful digital products</h1>
        </div>

        <div className="main-agenda">
          <div className="flex justify-around items-start">
            <div className="ideal-about flex justify-around items-center flex-col pt-40">
              <div className="ideal ">
                <h1>Ideal.</h1>
                <p>
                  We are a digital product development and UX design firm
                  determined to make an impact through our clients. With the
                  finest end-user experience as our primary objective, we
                  integrate our tech expertise with a social conscience to build
                  digital products.
                </p>
              </div>
              <div className="ideal impact pt-40">
                <h1>Impact.</h1>
                <p>
                  We are a digital product development and UX design firm
                  determined to make an impact through our clients. With the
                  finest end-user experience as our primary objective, we
                  integrate our tech expertise with a social conscience to build
                  digital products.
                </p>
              </div>
            </div>
            <div className="ideal-about flex justify-around items-start flex-col pt-40">
              <div className="ideal ">
                <h1>innovation.</h1>
                <p>
                  We are a digital product development and UX design firm
                  determined to make an impact through our clients. With the
                  finest end-user experience as our primary objective, we
                  integrate our tech expertise with a social conscience to build
                  digital products.
                </p>
              </div>
              <div className="ideal pt-40  impactt w-[673px] h-[655px]">
                <img src={imgg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Craft;
