import React, { useState } from "react";
import { gsap } from "gsap";
import logo from "./Navassets/logo.svg";
import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuClick = () => {
    setIsOpen(!isOpen);

    const menu = document.querySelector(".menu-ul");
    const line = document.querySelector(".close-menu");
    const line2 = document.querySelector(".linne");

    if (isOpen) {
      gsap.to(menu, {
        x: "100%",
        opacity: 0,
        duration: 1,
        ease: "power3.inOut",
      });
      gsap.to(line, {
        position: "absolute",
        rotate: -90,
      });
      gsap.to(line2, {
        position: "relative",
        // rotate: 90,
      });
    } else {
      gsap.to(menu, { x: -100, opacity: 1, duration: 1, ease: "power3.inOut" });
      gsap.to(line, {
        position: "absolute",
        rotate: 0,
      });
      gsap.to(line2, {
        position: "absolute",
        // rotate: 0,
      });
    }
  };
  return (
    <nav>
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div
          className="menu flex items-center justify-center"
          onClick={menuClick}
        >
          <div className="close-menu flex items-center justify-center">
            <span className="up-line mx-2 linne"></span>
            <span className="downn-line mx-2 liee"></span>
          </div>
          {/* <div className="opened-menu"> */}
          <ul className="menu-ul flex mt-5">
            <li className="items">
              {/* <Link to="/about" className="link"> */}
              {/* <h1 id="ftrh1">Let's Talk</h1> */}
              about us
              {/* </Link> */}
            </li>
            <li className="items">services</li>
            <li className="items">work</li>
            <li className="items">Let’s Talk</li>
          </ul>
          {/* </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
