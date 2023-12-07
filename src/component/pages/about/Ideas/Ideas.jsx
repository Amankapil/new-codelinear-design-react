import React from "react";
import "./idea.scss";
import img1 from "./Ideaassets/Frame 570.png";
import img2 from "./Ideaassets/Frame 1000001744.png";
import img3 from "./Ideaassets/Frame 1000001743.png";
const Ideas = () => {
  return (
    <div className="ideas">
      <div className="main-idea">
        <div className="head-idea flex justify-between items-center">
          <div className="idea-heading">
            <h1>our ideas</h1>
          </div>
          <div className="know-btn">
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

        <div className="blogs-about flex justify-around items-start pt-32">
          <div className="blog-one flex flex-col gap-8">
            <div className="blog-img-about">
              <img src={img1} alt="" />
            </div>

            <div className="blog-content-about flex flex-col gap-3">
              <h1>when to listen to your customers</h1>
              <p>Lorem Ipsum, 19/9/19</p>
            </div>
          </div>
          <div className="blog-one flex flex-col gap-8 pt-40">
            <div className="blog-img-about">
              <img src={img2} alt="" />
            </div>

            <div className="blog-content-about flex flex-col gap-3">
              <h1>when to listen to your customers</h1>
              <p>Lorem Ipsum, 19/9/19</p>
            </div>
          </div>
          <div className="blog-one flex flex-col gap-8">
            <div className="blog-img-about">
              <img src={img3} alt="" />
            </div>

            <div className="blog-content-about flex flex-col gap-3">
              <h1>when to listen to your customers</h1>
              <p>Lorem Ipsum, 19/9/19</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ideas;
