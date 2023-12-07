import React from "react";
import "./action.scss";
// import img from "./actionassets/Frame 1000001741 (1).png"
import img from "./actionassets/Frame 1000001741 (1).png";
import img2 from "./actionassets/Frame 1000001741 (2).png";
import img3 from "./actionassets/Frame 567.png";
import img4 from "./actionassets/Frame 567 (1).png";
import img5 from "./actionassets/pexels-anh-khac-6318739 1.png";
import img6 from "./actionassets/Frame 567 (2).png";
import img7 from "./actionassets/Frame 1000001741.png";
import img8 from "./actionassets/image 11 (1).png";
import img9 from "./actionassets/Frame 1000001741.png";
const Action = () => {
  return (
    <div className="action">
      <div className="main-action">
        <div className="head-action">
          <h1>We believe in actions over statements.</h1>
        </div>

        <div className="work-cards">
          <div className="main-work-card flex pt-40">
            <div className="card-one-work">
              <a href="#">
                <img src={img6} alt="" />
                <p>Ware Well</p>
              </a>
            </div>
            <div className="card-one-work pt-32">
              <a href="#">
                <img src={img5} alt="" />
                <p>Mango</p>
              </a>
            </div>
            <div className="card-one-work pt-64">
              <a href="#">
                <img src={img} alt="" />
                <p>William Abraham</p>
              </a>
            </div>
          </div>
          <div className="main-work-card flex pt-20">
            <div className="card-one-work">
              <a href="#">
                <img src={img4} alt="" />
                <p>Ware Well</p>
              </a>
            </div>
            <div className="card-one-work pt-32">
              <a href="#">
                <img src={img9} alt="" />
                <p>Mango</p>
              </a>
            </div>
            <div className="card-one-work pt-64">
              <a href="#">
                <img src={img8} alt="" />
                <p>William Abraham</p>
              </a>
            </div>
          </div>
          <div className="main-work-card flex pt-20">
            <div className="card-one-work">
              <a href="#">
                <img src={img} alt="" />
                <p>Ware Well</p>
              </a>
            </div>
            <div className="card-one-work pt-32">
              <a href="#">
                <img src={img2} alt="" />
                <p>Mango</p>
              </a>
            </div>
            <div className="card-one-work pt-64">
              <a href="#">
                <img src={img} alt="" />
                <p>William Abraham</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Action;
