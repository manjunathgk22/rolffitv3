import React, { useRef } from "react";
import Slider from "react-slick/lib/slider";
import "./HowItWorks.css";
import { motion } from "framer-motion";
import tent from "../assets/images/tent.jpg";

const dotsText = ["Quick setup", "Special Chair Therapy", "Expert therapists", "Authentic massage products"];
function HowItWorks() {
  const dotRef = useRef(null);
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
      console.log("dots", dotRef.current);
      return (
        <div
          style={{
            // backgroundColor: "#ddd",
            borderRadius: "10px",
            padding: "10px",
            display: "flex",
            paddingTop: "2rem",
          }}
        >
          {dots?.map((item) => (
            <div className="dotWrapper flex whitespace-nowrap w-full md:w-auto min-w-full md:min-w-[auto]">{item}</div>
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
    beforeChange: (page) => {
      console.log("qqq", page);
      debugger;
      if (window.innerWidth < 640) {
        const wrapper = dotRef.current.getElementsByClassName("slick-dots")[0];
        console.log("www", wrapper.srcollLeft, page);
        if (wrapper) wrapper.scrollLeft = wrapper.getElementsByTagName("li")[0]?.clientWidth * ((page + 1) % 3);
      }
    },
    afterChange: (...page) => {},
  };
  const variants = {
    visible: { opacity: 1, background: "red" },
    hidden: { opacity: 0 },
  };
  return (
    <div style={{ backgroundColor: "#f9f1e4" }} className={`relative py-8 clipTop clipbottom`}>
      <div ref={dotRef} className="max-w-6xl container m-auto p-4">
        <div className="h5 sm:h4 md:h3 text-6xl font-bold text-center mb-8">how it works</div>
        <Slider {...settings}>
          <div>
            <div style={{}} className="mb-8 flex-col justify-center items-center md:flex md:flex-row">
              <div className="animate-left">
                <div style={{ margin: "2rem", height: "350px", width: "auto", backgroundSize: "cover", backgroundRepeat: "no-repeat", position: "relative" }} className=" bg-[url('/src/assets/images/tent.jpg')]">
                  {/* <img style={{ width: "100%", boxSizing: "border-box", margin: "0" }} className="image lg:h-96 md:h-80 h-44" src={tent} alt="" height="2197" width="2813" data-mobile-image-width="1024" data-mobile-image-height="800" />{" "} */}
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full absolute left-0 bottom-0 text-white wheatsvg pointer-events-none" viewBox="0 0 331 227.75" preserveAspectRatio="none">
                    <g data-name="Layer 2">
                      <path d="M0 0v227.75h331V0zm327.84 91.68l-4.41 108.06c-.19 4.75-.52 9.79-4.34 13.73-6.55 6.74-20.15 7.48-31.84 7.55-80.58.5-159.11 10.38-239.7 2.13-9.84-1-20.13-2.35-27.78-6.77C8 209.56 5.94 197.68 5 187A820.94 820.94 0 017.68 17.88c.51-4.25 1.37-9 6-11.74C17.31 4 22.3 3.56 27 3.2c85.55-6.6 171.27 7.72 257.09 3.2 8.42-.44 17.34-.81 24.83 1.89C322 13 325.42 24.68 326.7 34.85c3.23 25.49 2.19 31.25 1.14 56.83z" fill="currentColor" fill-rule="evenodd" data-name="Layer 1"></path>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="content-container animate-right" style={{ flex: 1 }}>
                <h3 className="text-2xl md:text-3xl lg:text-3xl font-bold mb-4">Quick setup</h3>
                {/* <p>rolf.fit brings its setup to your office. The specially designed set-up takes a few minutes to install. It does not take up much of your space and ensures privacy for the employees during the massage.</p> */}
                <li className="bullet">We will set up a specially designed space for the therapy to take place.</li>
                <li className="bullet">Our therapist will be available at your office during working hours.</li>
                <li className="bullet">Employees can opt for the service during their free time and will be charged there and then.</li>
                <li className="bullet">
                  You (Employer) will <strong>not be charged</strong> for any services.
                </li>
              </div>
            </div>
          </div>
          <div>
            <div style={{}} className="mb-8 flex-col justify-center items-center md:flex md:flex-row">
              <div className="animate-left">
                {/* <img className="image lg:h-96 md:h-80 h-44" style={{ width: "100%", boxSizing: "border-box", padding: "2rem", margin: "0" }} src="https://www.plan.london/wp-content/uploads/2021/11/Icons-Final-17.png" data-src="https://www.plan.london/wp-content/uploads/2021/11/Icons-Final-17.png" alt="" height="2197" width="2813" data-mobile-image="https://www.plan.london/wp-content/uploads/2021/11/Icons-Final-17.png" data-mobile-image-width="1024" data-mobile-image-height="800" />{" "} */}
                <div style={{ margin: "2rem", height: "350px", width: "auto", backgroundSize: "cover", backgroundRepeat: "no-repeat", position: "relative" }} className=" bg-[url('/src/assets/images/chair.jpeg')]">
                  {/* <img style={{ width: "100%", boxSizing: "border-box", margin: "0" }} className="image lg:h-96 md:h-80 h-44" src={tent} alt="" height="2197" width="2813" data-mobile-image-width="1024" data-mobile-image-height="800" />{" "} */}
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full absolute left-0 bottom-0 text-white wheatsvg pointer-events-none" viewBox="0 0 331 227.75" preserveAspectRatio="none">
                    <g data-name="Layer 2">
                      <path d="M0 0v227.75h331V0zm327.84 91.68l-4.41 108.06c-.19 4.75-.52 9.79-4.34 13.73-6.55 6.74-20.15 7.48-31.84 7.55-80.58.5-159.11 10.38-239.7 2.13-9.84-1-20.13-2.35-27.78-6.77C8 209.56 5.94 197.68 5 187A820.94 820.94 0 017.68 17.88c.51-4.25 1.37-9 6-11.74C17.31 4 22.3 3.56 27 3.2c85.55-6.6 171.27 7.72 257.09 3.2 8.42-.44 17.34-.81 24.83 1.89C322 13 325.42 24.68 326.7 34.85c3.23 25.49 2.19 31.25 1.14 56.83z" fill="currentColor" fill-rule="evenodd" data-name="Layer 1"></path>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="content-container animate-right" style={{ flex: 1 }}>
                <h3 className="text-2xl md:text-3xl lg:text-3xl font-bold mb-4">Special Chair Therapy</h3>
                <li className="bullet">Seated head, neck, shoulder and back massage therapy</li>
                <li className="bullet">Short therapy session of 10 to 30 minutes</li>
                <li className="bullet">No clothing is removed and no oils are used</li>
                <li className="bullet">Each massage is concluded with a re-energising facial spritz</li>
              </div>
            </div>
          </div>
          <div>
            <div style={{}} className="mb-8 flex-col justify-center items-center md:flex md:flex-row">
              <div className="animate-left">
                {/* <img className="image lg:h-96 md:h-80 h-44" style={{ width: "100%", boxSizing: "border-box", padding: "2rem", margin: "0" }} src="https://www.plan.london/wp-content/uploads/2021/11/Icons-Final-17.png" data-src="https://www.plan.london/wp-content/uploads/2021/11/Icons-Final-17.png" alt="" height="2197" width="2813" data-mobile-image="https://www.plan.london/wp-content/uploads/2021/11/Icons-Final-17.png" data-mobile-image-width="1024" data-mobile-image-height="800" />{" "} */}
                <div style={{ margin: "2rem", height: "350px", width: "auto", backgroundSize: "cover", backgroundRepeat: "no-repeat", position: "relative" }} className=" bg-[url('/src/assets/images/therapist.jpeg')]">
                  {/* <img style={{ width: "100%", boxSizing: "border-box", margin: "0" }} className="image lg:h-96 md:h-80 h-44" src={tent} alt="" height="2197" width="2813" data-mobile-image-width="1024" data-mobile-image-height="800" />{" "} */}
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full absolute left-0 bottom-0 text-white wheatsvg pointer-events-none" viewBox="0 0 331 227.75" preserveAspectRatio="none">
                    <g data-name="Layer 2">
                      <path d="M0 0v227.75h331V0zm327.84 91.68l-4.41 108.06c-.19 4.75-.52 9.79-4.34 13.73-6.55 6.74-20.15 7.48-31.84 7.55-80.58.5-159.11 10.38-239.7 2.13-9.84-1-20.13-2.35-27.78-6.77C8 209.56 5.94 197.68 5 187A820.94 820.94 0 017.68 17.88c.51-4.25 1.37-9 6-11.74C17.31 4 22.3 3.56 27 3.2c85.55-6.6 171.27 7.72 257.09 3.2 8.42-.44 17.34-.81 24.83 1.89C322 13 325.42 24.68 326.7 34.85c3.23 25.49 2.19 31.25 1.14 56.83z" fill="currentColor" fill-rule="evenodd" data-name="Layer 1"></path>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="content-container animate-right" style={{ flex: 1 }}>
                <h3 className="text-2xl md:text-3xl lg:text-3xl font-bold mb-4">Expert therapists</h3>
                <li className="bullet">
                  We have a team of highly qualified therapists targeting pressure points for <strong>maximum relaxation</strong>.
                </li>
                <li className="bullet">Professional Attired</li>
                <li className="bullet">Trained and accredited</li>
                <li className="bullet">Follow strict hygiene processes</li>
              </div>
            </div>
          </div>
          {/* <div>
          <div style={{  }} className="mb-8 flex-col justify-center items-center md:flex md:flex-row">
            <div className="animate-left">
              <img className="image lg:h-96 md:h-80 h-44" style={{ width: "100%", boxSizing: "border-box", padding: "2rem", margin: "0" }} src="https://www.plan.london/wp-content/uploads/2021/11/Icons-Final-17.png" data-src="https://www.plan.london/wp-content/uploads/2021/11/Icons-Final-17.png" alt="" height="2197" width="2813" data-mobile-image="https://www.plan.london/wp-content/uploads/2021/11/Icons-Final-17.png" data-mobile-image-width="1024" data-mobile-image-height="800" />{" "}
            </div>
            <div className="content-container animate-right" style={{ flex: 1 }}>
              <h3 className="text-2xl md:text-3xl lg:text-3xl font-bold mb-4">Authentic massage products</h3>
              <p>Every product used in massage therapies is of premium quality. It undergoes a thorough quality check.</p>
            </div>
          </div>
        </div> */}
        </Slider>
      </div>
    </div>
  );
}

export default HowItWorks;
