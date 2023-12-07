import "./footer.css";
import { Link } from "react-router-dom";

import { gsap, Power2 } from "gsap";
import { TweenMax } from "gsap";
import { useEffect } from "react";

import arrow from "./images/Group 1000002377.svg";
import LowerFooter from "./lowerFooter";

export default function Footer({ isDarkMode, handleButtonHover }) {
 
  return (
    <footer id="footer" className="max-md:mt-10 footersection">
      <section id="footeer" className="main-footer">
        <b style={{ color: "#000000" }} id="ftrcnt">
          Wanna Know A Secret?
        </b>
        <div className="arrow">
          <img src={arrow} alt="" srcset="" className="arrow" loading="lazy" />
        </div>
        <Link to="/let's_talk" className="link">
          <h1 id="ftrh1">Let's Talk</h1>
        </Link>
        <LowerFooter />
      </section>
    </footer>
  );
}
