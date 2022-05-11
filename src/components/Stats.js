import React from "react";
import Styles from "./Boxes.module.css";
function Stats() {
  return (
    <div className="container m-auto">
      <div className="flex flex-wrap max-w-5xl mx-auto py-10 md:py-16 lg:py-21">
        <div className="w-full lg:w-2/3">
          <div className="px-3 py-3 h-full">
            <div className="bg-blue-150 h-full flex flex-wrap content-center px-3 py-8 lg:px-24 lg:py-24 relative">
              <div className="w-full text-center mb-2">
                <div className="relative inline-block mx-auto text-[5rem] font-bold text-stat-md text-white">
                  62
                  <span className="h4 stat-percentage pl-1 text-[1.5rem]" style={{ verticalAlign: "100%" }}>
                    %
                  </span>
                </div>
              </div>
              <div className={`h6 sm:h5 md:h4 w-full text-center px-4 font-extrabold text-2xl lg:text-4xl`}>of employees report neck pain and 13% report headache during working hours</div>
              <div className="w-full text-center px-4">{/* <p className={`${Styles.ptext} font-comfort`}>at the end of the day resulting in workplace stress and productivity loss.</p> */}</div>

              <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full absolute left-0 top-0 text-white pointer-events-none" viewBox="0 0 674 593.16" preserveAspectRatio="none">
                <g data-name="Layer 2">
                  <path
                    d="M0 0v593.16h674V0zm654 568.27c-1.18 3.59-2.52 7.3-5.2 9.82-4.42 4.2-11.06 4-17 3.52a2318 2318 0 00-354.81.53c-74.32 5.81-149.72 15.15-222.82-.22-8.86-1.86-18-4.29-24.81-10.63-4.53-4.25-7.62-9.93-10.24-15.71C1.1 515.78 2.28 469.6 3.85 425.46L15.52 95.69c.76-21.35 2.11-44.44 15.08-60.79 0-29.64 127.62-24.53 144.75-25.57 77.54-4.75 155.39-9.48 232.77-2.44 38.56 3.51 76.94 9.94 115.64 10.57 19.83.32 39.79-.88 59.37 2.45S622.35 31.74 635 48c21.65 27.89 16.69 68.31 16.61 104.44-.09 40 7.26 79.51 11.47 119.25 4.42 41.65 5.38 83.62 6.34 125.52 1.27 57.57 2.39 116.62-15.42 171.06z"
                    fill="currentColor"
                    fillRule="evenodd"
                    data-name="Layer 1"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/3">
          <div className="px-3 py-3">
            <div className={`py-4 bg-pink-150 px-14 relative font-comfort `}>
              <p className="text-lg font-bold">More than 1 in 5 admitted to calling in sick to avoid workplace stress with 32% even considering resigning.</p>

              <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full absolute left-0 bottom-0 text-white pointer-events-none" viewBox="0 0 331 227.75" preserveAspectRatio="none">
                <g data-name="Layer 2">
                  <path d="M0 0v227.75h331V0zm327.84 91.68l-4.41 108.06c-.19 4.75-.52 9.79-4.34 13.73-6.55 6.74-20.15 7.48-31.84 7.55-80.58.5-159.11 10.38-239.7 2.13-9.84-1-20.13-2.35-27.78-6.77C8 209.56 5.94 197.68 5 187A820.94 820.94 0 017.68 17.88c.51-4.25 1.37-9 6-11.74C17.31 4 22.3 3.56 27 3.2c85.55-6.6 171.27 7.72 257.09 3.2 8.42-.44 17.34-.81 24.83 1.89C322 13 325.42 24.68 326.7 34.85c3.23 25.49 2.19 31.25 1.14 56.83z" fill="currentColor" fillRule="evenodd" data-name="Layer 1"></path>
                </g>
              </svg>
            </div>
          </div>

          <div className="px-3 py-3">
            <div className="bg-green-150 py-12 px-10 relative">
              <div className="w-full text-center">
                <div className="relative inline-block mx-auto text-[4rem] font-bold text-stat-md text-white">
                  $300
                  <span className="h4 stat-percentage pl-1 text-[1.5rem]" style={{ verticalAlign: "100%" }}>
                    billion
                  </span>
                </div>
              </div>
              <div className="w-full text-center text-2xl lg:text-4xl leading-[1.5rem] font-bold mb-2">is lost by businesses around the world as a result of workplace stress.</div>

              <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full absolute bottom-0 left-0 text-white pointer-events-none" viewBox="0 0 333.04 329" preserveAspectRatio="none">
                <g data-name="Layer 2">
                  <path d="M0 0v329h333V0zm326.25 283.67c-.52 5.76-1.39 12.13-6.12 15.89-3.63 2.88-8.69 3.49-13.43 4q-129.9 13.4-260.24 22.57c-8.52.6-17.54 1.1-25.13-2.55-13.22-6.35-16.71-22.17-18-35.94-3.28-34.51-2.22-69.21-1.16-103.81q2.22-73.11 4.46-146.2c.2-6.43.52-13.25 4.4-18.57C17.65 9.94 31.42 8.93 43.26 8.84c81.56-.68 161.05-14 242.62-2.88 10 1.37 20.39 3.18 28.13 9.16 12 9.23 14 25.3 14.94 39.72a1482.77 1482.77 0 01-2.7 228.83z" fill="currentColor" fillRule="evenodd" data-name="Layer 1"></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
