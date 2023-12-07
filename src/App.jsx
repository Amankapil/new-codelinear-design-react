import "./App.css";
import Footer from "./component/footer/footer";
import Navbar from "./component/header/Navbar";
import Home from "./component/pages/home/Home";
import About from "./component/pages/about/About";

import { useEffect } from "react";

import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import Services from "./component/pages/Services/Services";
import Work from "./component/pages/work/work";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2,
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // https://easings.net
      direction: 0,
      smooth: true,
      // smoothTouch: false,
      // touchMultiplier: 2
      // wheelMultiplier:0,
      // touchMultiplier:0,
      normalizeWheel: true,
      smoothWheel: true,
    });

    // addEffect((time) => {
    //   lenis.raf(time);
    // });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          {/* <Switch> */}
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/service" element={<Services />} />
          <Route exact path="/work" element={<Work />} />
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </>
  );
}

export default App;
