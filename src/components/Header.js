import React from "react";
import HeaderImg from "../assets/images/Hero-Image-Raw.jpg";
import Styles from "./Header.module.css";
import { ReactComponent as LogoSVG } from "../assets/images/logo_rolf_logo.svg";
function Header() {
  return (
    <div style={{ height: "90vh" }} className={`flex items-center bg-fixed  bg-[url('/src/assets/images/hero.jpeg')] bg-cover bg-no-repeat relative bg-bottom ${Styles.headerwrapper}`}>
      <div className="z-10 absolute top-4 left-8 cursor-pointer">
        <LogoSVG className={`h-auto cursor-pointer lg:w-40 md:w-36 w-32 ${Styles.whitesvg}`} />
      </div>
      <div className={`font-bold lg:text-8xl md:text-6xl text-[2.7rem] text-white absolute left-24 z-10`}>
        ready for your <br /> best day at <br /> work, <div className={` inline-block ${Styles.highlighbottom} relative`}>ever?</div>
      </div>
    </div>
  );
}

export default Header;

//Redefine work culture and fall in love with your work.
