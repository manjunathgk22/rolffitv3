import React from "react";
import Styles from "./Boxes.module.css";
import relief from "../assets/images/fatigue.png";
import absenteeism from "../assets/images/absentism.png";
import byestress from "../assets/images/byestress.png";
import ewellness from "../assets/images/ewellness.png";
import healthyculture from "../assets/images/healthyculture.png";
import motivatedwf from "../assets/images/motivatedwf.png";
import positiveenergy from "../assets/images/positiveenergy.png";
import retention from "../assets/images/retention.png";

const data = [
  {
    title: "Positive energy",
    desc: "Reenergize employees with massage therapy to bring more enthusiasm for work",
    image: positiveenergy,
  },
  {
    title: "Boost employee retention",
    desc: "Retain the best talent with on-time relaxations through head massages",
    image: retention,
  },

  {
    title: "Lower absenteeism",
    desc: "In-office head massages make employees look forward to coming back to work.",
    image: absenteeism,
  },
  {
    title: "Employee wellness",
    desc: "Promote good health by strengthening immunity and lowering blood pressure with therapies",
    image: ewellness,
  },

  {
    title: "Motivated workforce",
    desc: "Employees without stress build the most motivated workforce",
    image: motivatedwf,
  },
  {
    title: "Bye-bye stress and anxiety",
    desc: "Lower stress hormones with the right therapy to enjoy stress-free work life",
    image: byestress,
  },

  {
    title: "Relief from physical fatigue",
    desc: "Massage stimulates blood flow to reduce chronic neck pains and muscle stiffness",
    image: relief,
  },

  {
    title: "Build up healthy work culture",
    desc: "Happier employees love to engage and actively participate in building a healthy work environment.",
    image: healthyculture,
  },
];
function Boxes() {
  return (
    <div className="container m-auto boxes-container">
      <div className="px-4 py-3 text-4xl max-w-5xl mx-auto lg:text-6xl mb-0 font-bold text-center font-geomanist ">we help you build a hands-on approach to lifting the spirits and goodwill of your employees</div>
      <div className="flex gap-[20px] px-4 flex-wrap max-w-5xl mx-auto py-8 md:py-12 justify-around">
        {data.map((item) => (
          <div className="px-3 py-3 lg:mb-12 mb-6 relative basis-full md:basis-[calc(33%-20px)] items-center justify-center rounded overflow-hidden flex">
            <div>
              <div>
                <img className="w-auto lg:h-40 h-28 m-auto " src={item.image} />
              </div>
              <div className="flex justify-center flex-col mt-4 lg:mt-8">
                <div className="text-center font-geomanist text-xl lg:text-2xl">{item.title}</div>
                <div className="font-comfort text-center mt-2">{item.desc}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Boxes;
