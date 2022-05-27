import React from "react";
import HeaderImg from "../assets/images/Hero-Image-Raw.jpg";
import Styles from "./Header.module.css";
import { ReactComponent as LogoSVG } from "../assets/images/logo_rolf_logo.svg";
import Nav from "./Nav";
import ReactGA4 from "react-ga4";
import logEvent from "../util/util";

function Header() {
  const scrolltoHowItWorks = () => {
    document.getElementById("howitworks")?.scrollIntoView({ block: "start", behavior: "smooth" });
    logEvent({
      action: "CLICK_ON_HOWITWORKS",
    });
  };
  const scrollToDemo = () => {
    document.getElementById("contact")?.scrollIntoView({ block: "start", behavior: "smooth" });
    logEvent({ action: "CLICK_ON_FREEDEMO" });
  };
  return (
    <div style={{ height: "90vh" }} className={` flex max-h-[615px] mb-8 lg:mb-16 lg:max-h-[90vh] items-center bg-[url('/src/assets/images/hero.jpeg')] bg-cover bg-no-repeat relative bg-bottom ${Styles.headerwrapper}`}>
      <div className="z-100 absolute top-4 left-8 w-[calc(100%-4rem)] flex">
        {/* <LogoSVG className={`h-auto lg:w-40 md:w-36 w-32 ${Styles.whitesvg}`} /> */}
        <Nav />
      </div>
      <div className={`md:text-6xl  md:max-w-[50%] w-3/4 text-white absolute lg:left-24 left-10 z-10 lg:ml-20`}>
        <h1 className="font-geomanist font-bold text-4xl lg:text-7xl mt-20">
          reward your team with mini head-massage breaks on office <span className={`${Styles.highlighbottomline} `}> premises</span>
        </h1>
        <div className="flex-col flex sm:flex-row gap-2 mt-6 pt-10">
          <button onClick={scrolltoHowItWorks} className="mx-3 hover:font-bold transition-all text-lg lg:w-fit px-8 w-full mt-4 border-white  border-2 bg-white text-black py-2 rounded font-geomanist ml-0" type="button">
            How it works
          </button>
          <button onClick={scrollToDemo} className="mx-3 hover:font-bold transition-all text-lg lg:w-fit px-8 w-full mt-4 border-white  border-2  bg-white  text-black  py-2 rounded font-geomanist ml-0" type="button">
            Get FREE demo
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;

//Redefine work culture and fall in love with your work.
