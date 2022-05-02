import React from "react";
import Slider from "react-slick/lib/slider";
import "./HowItWorks.css";
import { motion } from "framer-motion";

const dotsText = ["hello", "qwerty", "quick setup"];
function HowItWorks() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    dontAnimate: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    // fade: true,
    arrows: false,
    autoplay: true,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    animating: false,
    appendDots: (dots) => {
      console.log("dots", dots);
      return (
        <div
          style={{
            // backgroundColor: "#ddd",
            borderRadius: "10px",
            padding: "10px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {dots?.map((item) => (
            <div className="dotWrapper">{item}</div>
          ))}
        </div>
      );
    },
    customPaging: (i, ...props) => {
      console.log("customPaging", i, props);
      return (
        <div>
          <div className="dotText">{dotsText[i]}</div>
          <div class="slider-progress">
            <div class="progress"></div>
          </div>
        </div>
      );
    },
    beforeChange: (...props) => {
      console.log("qqq", props);
    },
    afterChange: (...props) => {
      console.log("www", props);
    },
  };
  const variants = {
    visible: { opacity: 1, background: "red" },
    hidden: { opacity: 0 },
  };
  return (
    <div className="max-w-5xl container m-auto">
      <Slider {...settings}>
        <div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div className="animate-left">
              <img style={{ width: "auto", height: 400 }} className="image" src="https://www.plan.london/wp-content/uploads/2021/11/Icons-Final-17.png" data-src="https://www.plan.london/wp-content/uploads/2021/11/Icons-Final-17.png" alt="" height="2197" width="2813" data-mobile-image="https://www.plan.london/wp-content/uploads/2021/11/Icons-Final-17.png" data-mobile-image-width="1024" data-mobile-image-height="800" />{" "}
            </div>
            <div className="content-container animate-right" style={{ flex: 1 }}>
              <h3 className="text-3xl font-bold mb-4">Combine perspectives</h3>
              <p>To get a full, rounded view of issues and opportunities, we circle the challenge to explore different perspectives. This helps us avoid blind spots and cross-reference data points to make sure we’ve understood everything.</p>
            </div>
          </div>
        </div>
        <div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div className="animate-left">
              <img class="image" style={{ width: "auto", height: 400 }} src="https://www.plan.london/wp-content/uploads/2021/11/Icons-Final-20.png" data-src="https://www.plan.london/wp-content/uploads/2021/11/Icons-Final-20.png" alt="" height="2197" width="2813" data-mobile-image="https://www.plan.london/wp-content/uploads/2021/11/Icons-Final-20.png" data-mobile-image-width="1024" data-mobile-image-height="800" />
            </div>
            <div className="content-container animate-right" style={{ flex: 1 }}>
              <h3 className="text-3xl font-bold mb-4">Combine perspectives</h3>
              <p>To get a full, rounded view of issues and opportunities, we circle the challenge to explore different perspectives. This helps us avoid blind spots and cross-reference data points to make sure we’ve understood everything.</p>
            </div>
          </div>
        </div>
        <div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div className="animate-left">
              <img style={{ width: "auto", height: 400 }} className="image" src="https://www.plan.london/wp-content/uploads/2021/11/Icons-Final-17.png" data-src="https://www.plan.london/wp-content/uploads/2021/11/Icons-Final-17.png" alt="" height="2197" width="2813" data-mobile-image="https://www.plan.london/wp-content/uploads/2021/11/Icons-Final-17.png" data-mobile-image-width="1024" data-mobile-image-height="800" />{" "}
            </div>
            <div className="content-container animate-right" style={{ flex: 1 }}>
              <h3 className="text-3xl font-bold mb-4">Combine perspectives</h3>
              <p>To get a full, rounded view of issues and opportunities, we circle the challenge to explore different perspectives. This helps us avoid blind spots and cross-reference data points to make sure we’ve understood everything.</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default HowItWorks;
