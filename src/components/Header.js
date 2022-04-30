import React from "react";
import HeaderImg from "../assets/images/Hero-Image-Raw.jpg";
import Styles from "./Header.module.css";
function Header() {
  return (
    <div style={{ height: "90vh" }} className={`flex items-center bg-fixed  bg-[url('/src/assets/images/Hero-Image-Raw.jpg')] bg-cover bg-no-repeat relative ${Styles.headerwrapper}`}>
      <div className={`font-bold text-8xl text-white absolute left-24 z-10`}>
        ready for your <br /> best day at <br /> work, <div className={` inline-block ${Styles.highlighbottom}`}>ever?</div>
      </div>
    </div>
  );
}

export default Header;
