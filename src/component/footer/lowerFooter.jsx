// import InstagramIcon from "@mui/icons-material/Instagram";
// import instagram from "../navigationBar/images/mdi_twitter.svg";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import FaceBookIcon from "@mui/icons-material/FaceBook";
// import FacebookIcon from "@mui/icons-material/Facebook";
import Vectorr from "./images/Vectorr.svg";
import Insta from "./images/mdi_instagram.svg";
import Linked from "./images/mdi_linkedin.svg";
import Twet from "./images/mdi_twitter.svg";
import Medi from "./images/carbon_logo-medium.svg";
// import Codelinear from "../codelinear/codelinear";

import { Link } from "react-router-dom";
import { gsap, Bounce } from "gsap";
import { useRef, useEffect } from "react";

// import { gsap, Power2 } from "gsap";
import { TweenMax } from "gsap";

export default function Lowerfooter({ isDarkMode, handleButtonHover }) {
  let footeranimation = useRef(null);
  let footeranimationwidth = useRef(null);
  let footerScroll = useRef(null);

  const Effect = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
      ease: Bounce.easeOut,
    });
    tl.fromTo(footeranimation, 1, { x: 0 }, { x: 0 });
    tl.fromTo(footeranimation, 0.2, { x: 0 }, { x: -65 });
    tl.fromTo(footeranimation, 0.2, { x: -65 }, { x: -60 });
    tl.fromTo(footeranimation, 1, { x: -60 }, { x: -60 });
  }, []);
  useEffect(() => {
    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
      ease: Bounce,
    });
    tl.fromTo(footeranimationwidth, 1, { width: 102 }, { width: 102 });
    tl.fromTo(footeranimationwidth, 0.4, { width: 102 }, { width: 235 });
    tl.fromTo(footeranimationwidth, 1, { width: 235 }, { width: 235 });
  }, []);

  // useEffect(() => {
  //   const controller = new ScrollMagic.Controller();

  //   const sections = document.querySelectorAll(".about-crew-left");
  //   sections.forEach((section) => {
  //     new ScrollMagic.Scene({
  //       triggerElement: section,
  //       triggerHook: 1, // Adjust this value to control when the animation starts
  //       reverse: false,
  //     })
  //       .on("enter", () => {
  //         TweenMax.to(section, 0, { opacity: 1, x: 0, ease: "easeOut" });
  //       })
  //       .addTo(controller);
  //   });
  // }, []);
  return (
    <section className="lower-footer">
      <div className="lower-footer-container">
        <div className="aligncenter" ref={(el) => (footeranimationwidth = el)}>
          <div className="footer-bounce" ref={(el) => (footeranimation = el)}>
            {/* <Codelinear isDarkMode={isDarkMode} /> */}
            {/* <Codelinear /> */}
          </div>
        </div>
        <p className="copyright">© Codelinear 2023. All Rights Reserved.</p>
      </div>
      <div id="lower-footer">
        <div className="footer-column">
          <div className="column about-crew-let">
            <Link
              className="footerlinklight"
              // style={{ color: isDarkMode ? "#000000" : "#959595" }}
              to={"/about"}
              onClick={Effect}
            >
              About
            </Link>
            <Link
              className="footerlinklight"
              to={"/service"}
              // className="footerlink"
              onClick={Effect}
            >
              Services
            </Link>
          </div>
          <div className="column ">
            <Link
              className="footerlinklight"
              to={"/work"}
              // className="footerlink"
              onClick={Effect}
            >
              Work
            </Link>
            <Link
              className="footerlinklight"
              to={"#"}
              // className="footerlink"
              onClick={Effect}
            >
              Careers
            </Link>
          </div>
          <div className="column servicchomesectionlin">
            <Link
              className="footerlinklight"
              to={"#"}
              // className="footerlink"
              onClick={Effect}
            >
              Ideas
            </Link>
            <Link
              className="footerlinklight"
              to={"#"}
              // className="footerlink"
              onClick={Effect}
            >
              Let's Talk
            </Link>
          </div>
        </div>
        <div style={{ color: "#000000" }} id="contact">
          <Link>
            info
            <a
              style={{
                fontFamily: "sans-serif",
                fontWeight: 100,
              }}
            >
              @
            </a>
            codelinear.com
          </Link>
          <Link>+1 415 523 5957</Link>
        </div>
        <div id="socials">
          <Link
            target="blank"
            to="https://www.linkedin.com/company/codelinear/mycompany/?viewAsMember=true"
          >
            <img src={Linked} alt="ju" />
          </Link>
          <Link
            style={{ color: isDarkMode ? "#000000" : "#959595" }}
            target="blank"
            to="https://www.instagram.com/codelinear_"
          >
            <img src={Insta} alt="ju" />
          </Link>
          <Link
            style={{ color: isDarkMode ? "#000000" : "#959595" }}
            target="blank"
            to="https://www.facebook.com/Codelinear"
          >
            <img src={Twet} alt="ju" />
          </Link>
          <Link
            style={{ color: isDarkMode ? "#000000" : "#959595" }}
            target="blank"
            to="https://medium.com/@codelinear_"
          >
            <img src={Medi} alt="" srcset="" className="icon" loading="lazy" />
          </Link>
        </div>
      </div>
    </section>
  );
}
