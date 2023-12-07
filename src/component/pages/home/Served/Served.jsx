import React, { useEffect } from "react";
import "./served.scss";
import img from "./servedassets/shubham-dhage-05rC4c5-oWw-unsplash 2.svg";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

const Served = () => {
  //   const head = document.querySelector("select");
  useEffect(() => {
    const section = document.querySelector(".industry");
    const body = document.querySelector("body");
    const h1 = section.querySelector("h1");
    const p = section.querySelector("p");
    const div = section.querySelector("div");

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
              "conic-gradient(from 0deg at 35.28% 47.29%, #BCC66F 75.81636071205139deg, #517435 360deg)",
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
              "conic-gradient(from 0deg at 35.28% 47.29%, #BCC66F 75.81636071205139deg, #517435 360deg)",
          });

          // Change the color of the h1 element
          gsap.to(h1, {
            color: "#EDDBC6", // Change the color of the h1 element
          });
          gsap.to(p, {
            color: "#EDDBC6", // Change the color of the h1 element
          });
          gsap.to(".middle-consult", {
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
          gsap.to(".middle-consult", {
            color: "#EDDBC6", // Change the color of the h1 element
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

  const leftContent = document.querySelector("img");
  //   const rightContent = document.querySelector(".list-one");

  gsap.set(leftContent, { opacity: 1, pointerEvents: "none" });
  //   ///////////1st///////////////////////////

  const servedIN = () => {
    gsap.to(".left-bottom-img", {
      opacity: 0,
      pointerEvents: "none",
      duration: 0.3,
    });

    gsap.to(".one-list", {
      background: "#D3DAA7",
      duration: 0.3,
    });

    gsap.to(".right-concept", {
      //   background: "#D3DAA7",
      width: "600%",
      duration: 0.3,
    });


    gsap.to(".middel", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "hidden",
      duration: 0.3,
    });



    gsap.to(".left1", {
      visibility: "visible",
      y: 0,
      rotate: "0",
      duration: 0.3,
    });


    gsap.to(".right1", {
      visibility: "visible",
      duration: 0.3,
    });
    
  };



  const servedOUT = () => {
    gsap.to(".left-bottom-img", {
      opacity: 1,
      pointerEvents: "auto",
      duration: 0.3,
    });
    gsap.to(".one-list", {
      background: "transparent",

      duration: 0.3,
    });
    gsap.to(".right-concept", {
      //   background: "#D3DAA7",
      width: "100%",
      duration: 0.3,
    });

    gsap.to(".left1", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "hidden",
      rotate: "8.9760deg",
      y: 50,
      duration: 0.3,
    });
    gsap.to(".right1", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "hidden",
      duration: 0.3,
    });
    gsap.to(".middel", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "visible",
      duration: 0.3,
    });
  };

  //   ///////////1st///////////////////////////
  //   ///////////2st///////////////////////////

  const servedINTechno = () => {
    gsap.to(".left-bottom-img", {
      opacity: 0,
      pointerEvents: "none",
      duration: 0.3,
    });
    gsap.to(".list-2", {
      background: "#D3DAA7",
      duration: 0.3,
    });
    gsap.to(".right-concept", {
      //   background: "#D3DAA7",
      width: "600%",
      duration: 0.3,
    });
    gsap.to(".middel2", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "hidden",
      duration: 0.3,
    });
    gsap.to(".left2", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "visible",
      y: 0,
      rotate: "0",
      duration: 0.3,
    });
    gsap.to(".right2", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "visible",
      duration: 0.3,
    });
  };
  const servedOUTTechno = () => {
    gsap.to(".left-bottom-img", {
      opacity: 1,
      pointerEvents: "auto",
      duration: 0.3,
    });
    gsap.to(".list-2", {
      background: "transparent",
      duration: 0.3,
    });
    gsap.to(".right-concept", {
      //   background: "#D3DAA7",
      width: "100%",
      duration: 0.3,
    });

    gsap.to(".left2", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "hidden",
      rotate: "8.9760deg",
      y: 50,
      duration: 0.3,
    });
    gsap.to(".right2", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "hidden",
      duration: 0.3,
    });
    gsap.to(".middel2", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "visible",
      duration: 0.3,
    });
  };
  //   ///////////3st///////////////////////////
  //   ///////////2st///////////////////////////

  const servedINTecom = () => {
    gsap.to(".left-bottom-img", {
      opacity: 0,
      pointerEvents: "none",
      duration: 0.3,
    });
    gsap.to(".list-3", {
      background: "#D3DAA7",
      duration: 0.3,
    });
    gsap.to(".right-concept", {
      //   background: "#D3DAA7",
      width: "600%",
      duration: 0.3,
    });
    gsap.to(".middel3", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "hidden",
      duration: 0.3,
    });
    gsap.to(".left3", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "visible",
      y: 0,
      rotate: "0",
      duration: 0.3,
    });
    gsap.to(".right3", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "visible",
      duration: 0.3,
    });
  };
  const servedOUTTecom = () => {
    gsap.to(".left-bottom-img", {
      opacity: 1,
      pointerEvents: "auto",
      duration: 0.3,
    });
    gsap.to(".list-3", {
      background: "transparent",

      duration: 0.3,
    });
    gsap.to(".right-concept", {
      //   background: "#D3DAA7",
      width: "100%",
      duration: 0.3,
    });

    gsap.to(".left3", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "hidden",
      rotate: "8.9760deg",
      y: 50,
      duration: 0.3,
    });
    gsap.to(".right3", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "hidden",
      duration: 0.3,
    });
    gsap.to(".middel3", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "visible",
      duration: 0.3,
    });
  };
  //   ///////////3st///////////////////////////
  //   ///////////2st///////////////////////////

  const servedINTsup = () => {
    gsap.to(".left-bottom-img", {
      opacity: 0,
      pointerEvents: "none",
      duration: 0.3,
    });
    gsap.to(".list-4", {
      background: "#D3DAA7",
      duration: 0.3,
    });
    gsap.to(".right-concept", {
      //   background: "#D3DAA7",
      width: "600%",
      duration: 0.3,
    });
    gsap.to(".middel4", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "hidden",
      duration: 0.3,
    });
    gsap.to(".left4", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "visible",
      y: 0,
      rotate: "0",
      duration: 0.3,
    });
    gsap.to(".right4", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "visible",
      duration: 0.3,
    });
  };
  const servedOUTTsup = () => {
    gsap.to(".left-bottom-img", {
      opacity: 1,
      pointerEvents: "auto",
      duration: 0.3,
    });
    gsap.to(".list-4", {
      background: "transparent",

      duration: 0.3,
    });
    gsap.to(".right-concept", {
      //   background: "#D3DAA7",
      width: "100%",
      duration: 0.3,
    });

    gsap.to(".left4", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "hidden",
      rotate: "8.9760deg",
      y: 50,
      duration: 0.3,
    });
    gsap.to(".right4", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "hidden",
      duration: 0.3,
    });
    gsap.to(".middel4", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "visible",
      duration: 0.3,
    });
  };
  //   ///////////3st///////////////////////////
  //   ///////////2st///////////////////////////

  const servedINhel = () => {
    gsap.to(".left-bottom-img", {
      opacity: 0,
      pointerEvents: "none",
      duration: 0.3,
    });
    gsap.to(".list-5", {
      background: "#D3DAA7",
      duration: 0.3,
    });
    gsap.to(".right-concept", {
      //   background: "#D3DAA7",
      width: "600%",
      duration: 0.3,
    });
    gsap.to(".middel5", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "hidden",
      duration: 0.3,
    });
    gsap.to(".left5", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "visible",
      y: 0,
      rotate: "0",
      duration: 0.3,
    });
    gsap.to(".right5", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "visible",
      duration: 0.3,
    });
  };
  const servedOUTThel = () => {
    gsap.to(".left-bottom-img", {
      opacity: 1,
      pointerEvents: "auto",
      duration: 0.3,
    });
    gsap.to(".list-5", {
      background: "transparent",

      duration: 0.3,
    });
    gsap.to(".right-concept", {
      //   background: "#D3DAA7",
      width: "100%",
      duration: 0.3,
    });

    gsap.to(".left5", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "hidden",
      rotate: "8.9760deg",
      y: 50,
      duration: 0.3,
    });
    gsap.to(".right5", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "hidden",
      duration: 0.3,
    });
    gsap.to(".middel5", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "visible",
      duration: 0.3,
    });
  };
  //   ///////////3st///////////////////////////
  //   ///////////2st///////////////////////////

  const servedINTfood = () => {
    gsap.to(".left-bottom-img", {
      opacity: 0,
      pointerEvents: "none",
      duration: 0.3,
    });
    gsap.to(".list-6", {
      background: "#D3DAA7",
      duration: 0.3,
    });
    gsap.to(".right-concept", {
      //   background: "#D3DAA7",
      width: "600%",
      duration: 0.3,
    });
    gsap.to(".middel6", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "hidden",
      duration: 0.3,
    });
    gsap.to(".left6", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "visible",
      y: 0,
      rotate: "0",
      duration: 0.3,
    });
    gsap.to(".right6", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "visible",
      duration: 0.3,
    });
  };
  const servedOUTTfood = () => {
    gsap.to(".left-bottom-img", {
      opacity: 1,
      pointerEvents: "auto",
      duration: 0.3,
    });
    gsap.to(".list-6", {
      background: "transparent",

      duration: 0.3,
    });
    gsap.to(".right-concept", {
      //   background: "#D3DAA7",
      width: "100%",
      duration: 0.3,
    });

    gsap.to(".left6", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "hidden",
      rotate: "8.9760deg",
      y: 50,
      duration: 0.3,
    });
    gsap.to(".right6", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "hidden",
      duration: 0.3,
    });
    gsap.to(".middel6", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "visible",
      duration: 0.3,
    });
  };
  //   ///////////3st///////////////////////////
  //   ///////////2st///////////////////////////

  const servedINTbio = () => {
    gsap.to(".left-bottom-img", {
      opacity: 0,
      pointerEvents: "none",
      duration: 0.3,
    });
    gsap.to(".list-7", {
      background: "#D3DAA7",
      duration: 0.3,
    });
    gsap.to(".right-concept", {
      //   background: "#D3DAA7",
      width: "600%",
      duration: 0.3,
    });
    gsap.to(".middel7", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "hidden",
      duration: 0.3,
    });
    gsap.to(".left7", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "visible",
      y: 0,
      rotate: "0",
      duration: 0.3,
    });
    gsap.to(".right7", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "visible",
      duration: 0.3,
    });
  };
  const servedOUTTbio = () => {
    gsap.to(".left-bottom-img", {
      opacity: 1,
      pointerEvents: "auto",
      duration: 0.3,
    });
    gsap.to(".list-7", {
      background: "transparent",

      duration: 0.3,
    });
    gsap.to(".right-concept", {
      //   background: "#D3DAA7",
      width: "100%",
      duration: 0.3,
    });

    gsap.to(".left7", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "hidden",
      rotate: "8.9760deg",
      y: 50,
      duration: 0.3,
    });
    gsap.to(".right7", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "hidden",
      duration: 0.3,
    });
    gsap.to(".middel7", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "visible",
      duration: 0.3,
    });
  };
  //   ///////////3st///////////////////////////
  //   ///////////2st///////////////////////////

  const servedINTman = () => {
    gsap.to(".left-bottom-img", {
      opacity: 0,
      pointerEvents: "none",
      duration: 0.3,
    });
    gsap.to(".list-8", {
      background: "#D3DAA7",
      duration: 0.3,
    });
    gsap.to(".right-concept", {
      //   background: "#D3DAA7",
      width: "600%",
      duration: 0.3,
    });
    gsap.to(".middel8", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "hidden",
      duration: 0.3,
    });
    gsap.to(".left8", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "visible",
      y: 0,
      rotate: "0",
      duration: 0.3,
    });
    gsap.to(".right8", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "visible",
      duration: 0.3,
    });
  };
  const servedOUTTmanu = () => {
    gsap.to(".left-bottom-img", {
      opacity: 1,
      pointerEvents: "auto",
      duration: 0.3,
    });
    gsap.to(".list-8", {
      background: "transparent",

      duration: 0.3,
    });
    gsap.to(".right-concept", {
      //   background: "#D3DAA7",
      width: "100%",
      duration: 0.3,
    });

    gsap.to(".left8", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "hidden",
      rotate: "8.9760deg",
      y: 50,
      duration: 0.3,
    });
    gsap.to(".right8", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "hidden",
      duration: 0.3,
    });
    gsap.to(".middel8", {
      //   background: "#D3DAA7",
      //   width: "600%",
      visibility: "visible",
      duration: 0.3,
    });
  };
  //   ///////////3st///////////////////////////
  return (
    <>
      <div className="industry">
        <div className="main-top">
          <div className="head-industry flex justify-between items-start w-[100%]">
            <div className="heading-industry">
              <h1>Industries we served</h1>
            </div>
            <div className="desc-industry">
              <div>
                <p>
                  Id donec rutrum mauris venenatis ac. Id metus lorem mus sit
                  magna varius cum proin. Accumsan volutpat natoque purus
                  pellentesque nec ac nulla turpis consectetur. Fermentum ut non
                  commodo lacus enim.
                </p>
              </div>
              <div className="h-[200px] w-[300px]">
                <div className="btn-about-home relative">
                  <button className="flex items-center  h-[200px] w-[300px]">
                    services
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
          </div>
        </div>

        <div className="botton concept relative">
          <div className="flex items-start">
            <div className="left-bottom-img">
              <img src={img} alt="" />
            </div>

            <div className="right-concept">
              <div
                onMouseEnter={servedIN}
                onMouseLeave={servedOUT}
                className="list-one  one-list"
              >

                <div className="left-consulting left1">Fintech</div>

                <div className="middle-consult middel">FINETECH</div>
                <div className="right-cosult right1">
                  <ul className="flex">
                    <li>klub</li>|<li>middle</li>|<li>kernel wealth</li>|
                    <li>Tradejini</li>
                  </ul>
                </div>
              </div>

              <div
                onMouseEnter={servedINTechno}
                onMouseLeave={servedOUTTechno}
                className="list-one list-2"
              >
                <div className="left-consulting left2">Technology</div>

                <div className="middle-consult middel2">Technology</div>
                <div className="right-cosult right2">
                  <ul className="flex">
                    <li>klub</li>|<li>middle</li>|<li>kernel wealth</li>|
                    <li>Tradejini</li>
                  </ul>
                </div>
              </div>
              <div
                onMouseEnter={servedINTecom}
                onMouseLeave={servedOUTTecom}
                className="list-one list-3"
              >
                <div className="left-consulting left3">ecommerce</div>

                <div className="middle-consult middel3">ecommerce</div>
                <div className="right-cosult right3">
                  <ul className="flex">
                    <li>klub</li>|<li>middle</li>|<li>kernel wealth</li>|
                    <li>Tradejini</li>
                  </ul>
                </div>
              </div>
              <div
                onMouseEnter={servedINTsup}
                onMouseLeave={servedOUTTsup}
                className="list-one list-4"
              >
                <div className="left-consulting left4">Technology</div>

                <div className="middle-consult middel4">Technology</div>
                <div className="right-cosult right4">
                  <ul className="flex">
                    <li>klub</li>|<li>middle</li>|<li>kernel wealth</li>|
                    <li>Tradejini</li>
                  </ul>
                </div>
              </div>
              <div
                onMouseEnter={servedINhel}
                onMouseLeave={servedOUTThel}
                className="list-one list-5"
              >
                <div className="left-consulting left5">Technology</div>

                <div className="middle-consult middel5">Technology</div>
                <div className="right-cosult right5">
                  <ul className="flex">
                    <li>klub</li>|<li>middle</li>|<li>kernel wealth</li>|
                    <li>Tradejini</li>
                  </ul>
                </div>
              </div>
              <div
                onMouseEnter={servedINTfood}
                onMouseLeave={servedOUTTfood}
                className="list-one list-6"
              >
                <div className="left-consulting left6">Technology</div>
                <div className="middle-consult middel6">Technology</div>
                <div className="right-cosult right6">
                  <ul className="flex">
                    <li>klub</li>|<li>middle</li>|<li>kernel wealth</li>|
                    <li>Tradejini</li>
                  </ul>
                </div>
              </div>
              <div
                onMouseEnter={servedINTbio}
                onMouseLeave={servedOUTTbio}
                className="list-one list-7"
              >
                <div className="left-consulting left7">Technology</div>

                <div className="middle-consult middel7">Technology</div>
                <div className="right-cosult right7">
                  <ul className="flex">
                    <li>klub</li>|<li>middle</li>|<li>kernel wealth</li>|
                    <li>Tradejini</li>
                  </ul>
                </div>
              </div>
              <div
                onMouseEnter={servedINTman}
                onMouseLeave={servedOUTTmanu}
                className="list-one list-8"
              >
                <div className="left-consulting left8">Technology</div>

                <div className="middle-consult middel8">Technology</div>
                <div className="right-cosult right8">
                  <ul className="flex">
                    <li>klub</li>|<li>middle</li>|<li>kernel wealth</li>|
                    <li>Tradejini</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Served;
