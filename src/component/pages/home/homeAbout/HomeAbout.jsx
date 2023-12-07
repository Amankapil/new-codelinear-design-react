import React, { useEffect } from "react";
import "./aboutHome.scss";
import imgw from "./homeAboutassets/Frame 567.png";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

const HomeAbout = () => {
  //   const head = document.querySelector("select");
  useEffect(() => {
    const section = document.querySelector(".home-about");
    const body = document.querySelector("body");
    const h1 = section.querySelector("h1");
    const p = section.querySelector("p");

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
              "conic-gradient(from 174deg at 44.4% 80%, #d4a381 43.31266522407532deg, #46200d 360deg)",
          });

          // Change the color of the h1 element
          gsap.to(h1, {
            color: "#EDDBC6", // Change the color of the h1 element
          });
          gsap.to(p, {
            color: "#EDDBC6", // Change the color of the h1 element
          });
        },
        onEnter: () => {
          gsap.to(body, {
            background:
              "conic-gradient(from 174deg at 44.4% 80%, #d4a381 43.31266522407532deg, #46200d 360deg)",
          });

          // Change the color of the h1 element
          gsap.to(h1, {
            color: "#EDDBC6", // Change the color of the h1 element
          });
          gsap.to(p, {
            color: "#EDDBC6", // Change the color of the h1 element
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

  //   useEffect(() => {
  //     gsap.to(".home-about", {
  //       scrollTrigger: {
  //         trigger: ".home-about",
  //         start: "600 200",
  //         end: "1000 400", // Animation ends when the bottom center of the element reaches the center of the viewport
  //         scrub: 1,
  //         markers: true, // for debugging, remove this in production
  //       },
  //       background: "#fff",
  //       // "linear-gradient(to 174deg at 04% 10%, #fff 43.31266522407532deg, #fff 360deg)",
  //       // Desired background color when in viewport
  //     });
  //   }, []);
  return (
    <>
      <div className="home-about flex  py-40">
        <div className="head-about">
          <h1 className="select">Amet magnis diam varius viverra at</h1>
        </div>
        <div className="about-pera-home">
          <p>
            Id donec rutrum mauris venenatis ac. Id metus lorem mus sit magna
            varius cum proin. Accumsan volutpat natoque purus pellentesque nec
            ac nulla turpis consectetur. Fermentum ut non commodo lacus enim.
          </p>
        </div>
        <div className="img-button flex justify-between items-center">
          <div className="img-change">
            <img src={imgw} alt="" />
          </div>
          <div className="btn-about-home relative">
            <button className="flex items-center ">
              About Us
              <span className="pl-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                >
                  <rect
                    x="0.000732422"
                    y="9.51611"
                    width="1.15946"
                    height="19.2297"
                    transform="rotate(-90 0.000732422 9.51611)"
                    fill="#131313"
                  />
                  <rect
                    x="12.2103"
                    y="1.48584"
                    width="1.15946"
                    height="9.75225"
                    transform="rotate(-38.8464 12.2103 1.48584)"
                    fill="#131313"
                  />
                  <rect
                    width="1.15946"
                    height="9.75225"
                    transform="matrix(0.77883 0.627235 0.627235 -0.77883 12.2103 16.3821)"
                    fill="#131313"
                  />
                </svg>
              </span>
              <span className="absolute circle ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="89"
                  height="90"
                  viewBox="0 0 89 90"
                  fill="none"
                >
                  <circle
                    cx="44.7176"
                    cy="44.9362"
                    r="43.6546"
                    transform="rotate(-90 44.7176 44.9362)"
                    stroke="#131313"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeAbout;
