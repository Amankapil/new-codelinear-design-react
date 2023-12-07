import React, { useEffect } from "react";
import "./workhero.scss";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import img from "./workassets/Frame 1000001741 (1).png";
import img2 from "./workassets/Frame 1000001741 (2).png";
import img3 from "./workassets/Frame 567.png";
import img4 from "./workassets/Frame 567 (1).png";
import img5 from "./workassets/pexels-anh-khac-6318739 1.png";
import img6 from "./workassets/Frame 567 (2).png";
import img7 from "./workassets/Frame 1000001741.png";
import img8 from "./workassets/image 11 (1).png";
import img9 from "./workassets/image 11 (1).png";

const Workhero = () => {
  useEffect(() => {
    const bulletContainer = document.querySelector(".bullet-container-left");
    const bulletEffect = document.querySelector(".bullet-effect-left");
    const bulletItems = bulletEffect.querySelectorAll("img");
    const bulletContainerWidth = bulletContainer.offsetWidth;

    let totalWidth = 0;
    bulletItems.forEach((item) => {
      totalWidth -=
        item.offsetWidth - parseInt(getComputedStyle(item).marginRight);
    });

    if (totalWidth > bulletContainerWidth) {
      const cloneItems = bulletEffect.innerHTML;
      bulletEffect.innerHTML -= cloneItems;
    }

    gsap.to(".bullet-effect-left", {
      y: `+=${50}%`,
      duration: 10,
      ease: "linear",
      repeat: -1,
    });
  }, []);
  useEffect(() => {
    const bulletContainer = document.querySelector(".bullet-container-right");
    const bulletEffect = document.querySelector(".bullet-effect-right");
    const bulletItems = bulletEffect.querySelectorAll("img");
    const bulletContainerWidth = bulletContainer.offsetWidth;

    let totalWidth = 0;
    bulletItems.forEach((item) => {
      totalWidth +=
        item.offsetWidth + parseInt(getComputedStyle(item).marginRight);
    });

    if (totalWidth > bulletContainerWidth) {
      const cloneItems = bulletEffect.innerHTML;
      bulletEffect.innerHTML += cloneItems;
    }

    gsap.to(".bullet-effect-right", {
      y: `-=${50}%`,
      duration: 20,
      ease: "linear",
      repeat: -1,
    });
  }, []);
  return (
    <div className="workhero ">
      <div className="workhero-left absolute">
        <div class="bullet-container-left ml[28%] ">
          <ul class="bullet-effect-left">
            <li class="bulltes_point">
              <img src={img5} alt="" />
            </li>
            <li class="bulltes_point">
              <img src={img4} alt="" />
            </li>
            <li class="bulltes_point">
              <img src={img6} alt="" />
            </li>
            <li class="bulltes_point">
              <img src={img7} alt="" />
            </li>
            <li class="bulltes_point">
              <img src={img8} alt="" />
            </li>
            <li class="bulltes_point">
              <img src={img} alt="" />
            </li>
            <li class="bulltes_point">
              <img src={img2} alt="" />
            </li>
          </ul>
        </div>
      </div>

      <div className="workhero-right absolute">
        <div class="bullet-container-right ml[28%] ">
          <ul class="bullet-effect-right">
            <li class="bulltes_point">
              <img src={img5} alt="" />
            </li>
            <li class="bulltes_point">
              <img src={img4} alt="" />
            </li>
            <li class="bulltes_point">
              <img src={img6} alt="" />
            </li>
            <li class="bulltes_point">
              <img src={img7} alt="" />
            </li>
            <li class="bulltes_point">
              <img src={img8} alt="" />
            </li>
            <li class="bulltes_point">
              <img src={img} alt="" />
            </li>
            <li class="bulltes_point">
              <img src={img2} alt="" />
            </li>
          </ul>
        </div>
      </div>

      <div className="main-hero pt-40 flex justify-center ">
        <h1>our work</h1>
      </div>
    </div>
  );
};

export default Workhero;
