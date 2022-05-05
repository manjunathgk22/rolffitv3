import React from "react";
import Styles from "./Boxes.module.css";
const data = [
  {
    title: "Relief from physical fatigue",
  },
];
function Boxes() {
  return (
    <div className="container m-auto boxes-container">
      <div className="px-3 py-3 text-4xl max-w-5xl mx-auto lg:text-6xl mb-0 font-bold">we help you build a hands-on approach to lifting the spirits and goodwill of your employees</div>
      <div className="flex gap-[20px] flex-wrap max-w-5xl mx-auto py-8 md:py-12">
        <div className="px-3 py-3 relative basis-full md:basis-[calc(33%-20px)] rounded overflow-hidden flex">
          <div className={`w-full px-8 bg-[#f9f1e4] py-6 items-center justify-center red-200 relative`}>
            {/* <div className="text-lg font-bold text-center">Relief from physical fatigue</div> */}
            <p className="font-sm font-comfort mt-12 text-center">Massage stimulates blood flow to reduce chronic neck pains and muscle stiffness</p>

            <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full absolute left-0 bottom-0 text-white pointer-events-none" viewBox="0 0 331 227.75" preserveAspectRatio="none">
              <g data-name="Layer 2">
                <path d="M0 0v227.75h331V0zm327.84 91.68l-4.41 108.06c-.19 4.75-.52 9.79-4.34 13.73-6.55 6.74-20.15 7.48-31.84 7.55-80.58.5-159.11 10.38-239.7 2.13-9.84-1-20.13-2.35-27.78-6.77C8 209.56 5.94 197.68 5 187A820.94 820.94 0 017.68 17.88c.51-4.25 1.37-9 6-11.74C17.31 4 22.3 3.56 27 3.2c85.55-6.6 171.27 7.72 257.09 3.2 8.42-.44 17.34-.81 24.83 1.89C322 13 325.42 24.68 326.7 34.85c3.23 25.49 2.19 31.25 1.14 56.83z" fill="currentColor" fillRule="evenodd" data-name="Layer 1"></path>
              </g>
            </svg>
            <div class="absolute top-0 left-0 -ml-[15px] mt-[15px] header-svg">
              <div class="py-2 px-4 relative">
                <span class="relative z-10 font-bold font-serif text-white">Relief from physical fatigue</span>
                <svg class="transition w-full h-full absolute left-0 bottom-0 pointer-events-none text-blue-200 " viewBox="0 0 133 35" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                  <path d="M2.922 3.29c-3.157 8.366 2.386 17.812-1.478 26.168-.636 1.373-1.174 2.854 2.772 4.01 3.259.954 17.176.574 26.96.519 25.084-.14 52.214-1.085 77.133-.515 3.233.074 6.556.153 9.704-.006 4.275-.216 7.727-.856 9.875-1.601 3.721-1.29 4.02-7.144 4.1-8.621.405-7.523-1.313-9.58-.908-17.103.047-.875-1.823-2.72-3.82-3.505-3.938-1.546-12.053-1.116-20.88-1.372-19.077-.553-37.254-.091-56.525.072-8.868.076-18.995-.246-27.834-.23-5.87.012-13.272-.446-17.217.726-1.43.424-1.692.952-1.882 1.457z" stroke="none" fill="currentColor" fill-rule="evenodd" stroke-opacity=".111"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="px-3 py-3 relative basis-full md:basis-[calc(33%-20px)] rounded overflow-hidden flex">
          <div className={`w-full px-8 bg-[#f9f1e4] py-6  items-center justify-center red-200 relative`}>
            {/* <div className="text-lg font-bold text-center">Bye-bye stress and anxiety</div> */}
            <p className="font-sm font-comfort mt-12 text-center">Lower stress hormones with the right therapy to enjoy stress-free work life</p>

            <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full absolute left-0 bottom-0 text-white pointer-events-none" viewBox="0 0 331 227.75" preserveAspectRatio="none">
              <g data-name="Layer 2">
                <path d="M0 0v227.75h331V0zm327.84 91.68l-4.41 108.06c-.19 4.75-.52 9.79-4.34 13.73-6.55 6.74-20.15 7.48-31.84 7.55-80.58.5-159.11 10.38-239.7 2.13-9.84-1-20.13-2.35-27.78-6.77C8 209.56 5.94 197.68 5 187A820.94 820.94 0 017.68 17.88c.51-4.25 1.37-9 6-11.74C17.31 4 22.3 3.56 27 3.2c85.55-6.6 171.27 7.72 257.09 3.2 8.42-.44 17.34-.81 24.83 1.89C322 13 325.42 24.68 326.7 34.85c3.23 25.49 2.19 31.25 1.14 56.83z" fill="currentColor" fillRule="evenodd" data-name="Layer 1"></path>
              </g>
            </svg>
            <div class="absolute top-0 left-0 -ml-[15px] mt-[15px] header-svg">
              <div class="py-2 px-4 relative">
                <span class="relative z-10 font-bold font-serif text-white">Bye-bye stress and anxiety</span>
                <svg class="transition w-full h-full absolute left-0 bottom-0 pointer-events-none text-blue-200 " viewBox="0 0 133 35" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                  <path d="M2.922 3.29c-3.157 8.366 2.386 17.812-1.478 26.168-.636 1.373-1.174 2.854 2.772 4.01 3.259.954 17.176.574 26.96.519 25.084-.14 52.214-1.085 77.133-.515 3.233.074 6.556.153 9.704-.006 4.275-.216 7.727-.856 9.875-1.601 3.721-1.29 4.02-7.144 4.1-8.621.405-7.523-1.313-9.58-.908-17.103.047-.875-1.823-2.72-3.82-3.505-3.938-1.546-12.053-1.116-20.88-1.372-19.077-.553-37.254-.091-56.525.072-8.868.076-18.995-.246-27.834-.23-5.87.012-13.272-.446-17.217.726-1.43.424-1.692.952-1.882 1.457z" stroke="none" fill="currentColor" fill-rule="evenodd" stroke-opacity=".111"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="px-3 py-3 relative basis-full md:basis-[calc(33%-20px)] rounded overflow-hidden flex">
          <div className="w-full px-8 bg-[#f9f1e4] py-6  items-center justify-center green-200  relative">
            {/* <div className="text-lg font-bold text-center">Employee wellness</div> */}
            <p className="font-sm font-comfort mt-12 text-center">Promote good health by strengthening immunity and lowering blood pressure with therapies</p>

            <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full absolute bottom-0 left-0 text-white pointer-events-none" viewBox="0 0 333.04 329" preserveAspectRatio="none">
              <g data-name="Layer 2">
                <path d="M0 0v329h333V0zm326.25 283.67c-.52 5.76-1.39 12.13-6.12 15.89-3.63 2.88-8.69 3.49-13.43 4q-129.9 13.4-260.24 22.57c-8.52.6-17.54 1.1-25.13-2.55-13.22-6.35-16.71-22.17-18-35.94-3.28-34.51-2.22-69.21-1.16-103.81q2.22-73.11 4.46-146.2c.2-6.43.52-13.25 4.4-18.57C17.65 9.94 31.42 8.93 43.26 8.84c81.56-.68 161.05-14 242.62-2.88 10 1.37 20.39 3.18 28.13 9.16 12 9.23 14 25.3 14.94 39.72a1482.77 1482.77 0 01-2.7 228.83z" fill="currentColor" fillRule="evenodd" data-name="Layer 1"></path>
              </g>
            </svg>
            <div class="absolute top-0 left-0 -ml-[15px] mt-[15px] header-svg">
              <div class="py-2 px-4 relative">
                <span class="relative z-10 font-bold font-serif text-white">Employee wellness</span>
                <svg class="transition w-full h-full absolute left-0 bottom-0 pointer-events-none text-blue-200 " viewBox="0 0 133 35" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                  <path d="M2.922 3.29c-3.157 8.366 2.386 17.812-1.478 26.168-.636 1.373-1.174 2.854 2.772 4.01 3.259.954 17.176.574 26.96.519 25.084-.14 52.214-1.085 77.133-.515 3.233.074 6.556.153 9.704-.006 4.275-.216 7.727-.856 9.875-1.601 3.721-1.29 4.02-7.144 4.1-8.621.405-7.523-1.313-9.58-.908-17.103.047-.875-1.823-2.72-3.82-3.505-3.938-1.546-12.053-1.116-20.88-1.372-19.077-.553-37.254-.091-56.525.072-8.868.076-18.995-.246-27.834-.23-5.87.012-13.272-.446-17.217.726-1.43.424-1.692.952-1.882 1.457z" stroke="none" fill="currentColor" fill-rule="evenodd" stroke-opacity=".111"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="px-3 py-3 relative basis-full md:basis-[calc(33%-20px)] rounded overflow-hidden flex">
          <div className={`w-full px-8 bg-[#f9f1e4] py-6  items-center justify-center red-200 relative`}>
            {/* <div className="text-lg font-bold text-center">Positive energy</div> */}
            <p className="font-sm font-comfort mt-12 text-center">Reenergize employees with massage therapy to bring more enthusiasm for work</p>

            <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full absolute left-0 bottom-0 text-white pointer-events-none" viewBox="0 0 331 227.75" preserveAspectRatio="none">
              <g data-name="Layer 2">
                <path d="M0 0v227.75h331V0zm327.84 91.68l-4.41 108.06c-.19 4.75-.52 9.79-4.34 13.73-6.55 6.74-20.15 7.48-31.84 7.55-80.58.5-159.11 10.38-239.7 2.13-9.84-1-20.13-2.35-27.78-6.77C8 209.56 5.94 197.68 5 187A820.94 820.94 0 017.68 17.88c.51-4.25 1.37-9 6-11.74C17.31 4 22.3 3.56 27 3.2c85.55-6.6 171.27 7.72 257.09 3.2 8.42-.44 17.34-.81 24.83 1.89C322 13 325.42 24.68 326.7 34.85c3.23 25.49 2.19 31.25 1.14 56.83z" fill="currentColor" fillRule="evenodd" data-name="Layer 1"></path>
              </g>
            </svg>
            <div class="absolute top-0 left-0 -ml-[15px] mt-[15px] header-svg">
              <div class="py-2 px-4 relative">
                <span class="relative z-10 font-bold font-serif text-white">Positive energy</span>
                <svg class="transition w-full h-full absolute left-0 bottom-0 pointer-events-none text-blue-200 " viewBox="0 0 133 35" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                  <path d="M2.922 3.29c-3.157 8.366 2.386 17.812-1.478 26.168-.636 1.373-1.174 2.854 2.772 4.01 3.259.954 17.176.574 26.96.519 25.084-.14 52.214-1.085 77.133-.515 3.233.074 6.556.153 9.704-.006 4.275-.216 7.727-.856 9.875-1.601 3.721-1.29 4.02-7.144 4.1-8.621.405-7.523-1.313-9.58-.908-17.103.047-.875-1.823-2.72-3.82-3.505-3.938-1.546-12.053-1.116-20.88-1.372-19.077-.553-37.254-.091-56.525.072-8.868.076-18.995-.246-27.834-.23-5.87.012-13.272-.446-17.217.726-1.43.424-1.692.952-1.882 1.457z" stroke="none" fill="currentColor" fill-rule="evenodd" stroke-opacity=".111"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="px-3 py-3 relative basis-full md:basis-[calc(33%-20px)] rounded overflow-hidden flex">
          <div className={`w-full px-8 bg-[#f9f1e4] py-6  items-center justify-center red-200 relative`}>
            {/* <div className="text-lg font-bold text-center">Lower absenteeism</div> */}
            <p className="font-sm font-comfort mt-12 text-center">In-office head massages make employees look forward to coming back to work.</p>

            <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full absolute left-0 bottom-0 text-white pointer-events-none" viewBox="0 0 331 227.75" preserveAspectRatio="none">
              <g data-name="Layer 2">
                <path d="M0 0v227.75h331V0zm327.84 91.68l-4.41 108.06c-.19 4.75-.52 9.79-4.34 13.73-6.55 6.74-20.15 7.48-31.84 7.55-80.58.5-159.11 10.38-239.7 2.13-9.84-1-20.13-2.35-27.78-6.77C8 209.56 5.94 197.68 5 187A820.94 820.94 0 017.68 17.88c.51-4.25 1.37-9 6-11.74C17.31 4 22.3 3.56 27 3.2c85.55-6.6 171.27 7.72 257.09 3.2 8.42-.44 17.34-.81 24.83 1.89C322 13 325.42 24.68 326.7 34.85c3.23 25.49 2.19 31.25 1.14 56.83z" fill="currentColor" fillRule="evenodd" data-name="Layer 1"></path>
              </g>
            </svg>
            <div class="absolute top-0 left-0 -ml-[15px] mt-[15px] header-svg">
              <div class="py-2 px-4 relative">
                <span class="relative z-10 font-bold font-serif text-white">Lower absenteeism</span>
                <svg class="transition w-full h-full absolute left-0 bottom-0 pointer-events-none text-blue-200 " viewBox="0 0 133 35" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                  <path d="M2.922 3.29c-3.157 8.366 2.386 17.812-1.478 26.168-.636 1.373-1.174 2.854 2.772 4.01 3.259.954 17.176.574 26.96.519 25.084-.14 52.214-1.085 77.133-.515 3.233.074 6.556.153 9.704-.006 4.275-.216 7.727-.856 9.875-1.601 3.721-1.29 4.02-7.144 4.1-8.621.405-7.523-1.313-9.58-.908-17.103.047-.875-1.823-2.72-3.82-3.505-3.938-1.546-12.053-1.116-20.88-1.372-19.077-.553-37.254-.091-56.525.072-8.868.076-18.995-.246-27.834-.23-5.87.012-13.272-.446-17.217.726-1.43.424-1.692.952-1.882 1.457z" stroke="none" fill="currentColor" fill-rule="evenodd" stroke-opacity=".111"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="px-3 py-3 relative basis-full md:basis-[calc(33%-20px)] rounded overflow-hidden flex">
          <div className="w-full px-8 bg-[#f9f1e4] py-6  items-center justify-center green-200  relative">
            {/* <div className="text-lg font-bold text-center">Motivated workforce</div> */}
            <p className="font-sm font-comfort mt-12 text-center">Employees without stress build the most motivated workforce</p>

            <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full absolute bottom-0 left-0 text-white pointer-events-none" viewBox="0 0 333.04 329" preserveAspectRatio="none">
              <g data-name="Layer 2">
                <path d="M0 0v329h333V0zm326.25 283.67c-.52 5.76-1.39 12.13-6.12 15.89-3.63 2.88-8.69 3.49-13.43 4q-129.9 13.4-260.24 22.57c-8.52.6-17.54 1.1-25.13-2.55-13.22-6.35-16.71-22.17-18-35.94-3.28-34.51-2.22-69.21-1.16-103.81q2.22-73.11 4.46-146.2c.2-6.43.52-13.25 4.4-18.57C17.65 9.94 31.42 8.93 43.26 8.84c81.56-.68 161.05-14 242.62-2.88 10 1.37 20.39 3.18 28.13 9.16 12 9.23 14 25.3 14.94 39.72a1482.77 1482.77 0 01-2.7 228.83z" fill="currentColor" fillRule="evenodd" data-name="Layer 1"></path>
              </g>
            </svg>
            <div class="absolute top-0 left-0 -ml-[15px] mt-[15px] header-svg">
              <div class="py-2 px-4 relative">
                <span class="relative z-10 font-bold font-serif text-white">Motivated workforce</span>
                <svg class="transition w-full h-full absolute left-0 bottom-0 pointer-events-none text-blue-200 " viewBox="0 0 133 35" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                  <path d="M2.922 3.29c-3.157 8.366 2.386 17.812-1.478 26.168-.636 1.373-1.174 2.854 2.772 4.01 3.259.954 17.176.574 26.96.519 25.084-.14 52.214-1.085 77.133-.515 3.233.074 6.556.153 9.704-.006 4.275-.216 7.727-.856 9.875-1.601 3.721-1.29 4.02-7.144 4.1-8.621.405-7.523-1.313-9.58-.908-17.103.047-.875-1.823-2.72-3.82-3.505-3.938-1.546-12.053-1.116-20.88-1.372-19.077-.553-37.254-.091-56.525.072-8.868.076-18.995-.246-27.834-.23-5.87.012-13.272-.446-17.217.726-1.43.424-1.692.952-1.882 1.457z" stroke="none" fill="currentColor" fill-rule="evenodd" stroke-opacity=".111"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="px-3 py-3 relative basis-full md:basis-[calc(33%-20px)] rounded overflow-hidden flex">
          <div className={`w-full px-8 bg-[#f9f1e4] py-6  items-center justify-center red-200 relative`}>
            {/* <div className="text-lg font-bold text-center">Boost employee retention</div> */}
            <p className="font-sm font-comfort mt-12 text-center">Retain the best talent with on-time relaxations through head massages</p>

            <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full absolute left-0 bottom-0 text-white pointer-events-none" viewBox="0 0 331 227.75" preserveAspectRatio="none">
              <g data-name="Layer 2">
                <path d="M0 0v227.75h331V0zm327.84 91.68l-4.41 108.06c-.19 4.75-.52 9.79-4.34 13.73-6.55 6.74-20.15 7.48-31.84 7.55-80.58.5-159.11 10.38-239.7 2.13-9.84-1-20.13-2.35-27.78-6.77C8 209.56 5.94 197.68 5 187A820.94 820.94 0 017.68 17.88c.51-4.25 1.37-9 6-11.74C17.31 4 22.3 3.56 27 3.2c85.55-6.6 171.27 7.72 257.09 3.2 8.42-.44 17.34-.81 24.83 1.89C322 13 325.42 24.68 326.7 34.85c3.23 25.49 2.19 31.25 1.14 56.83z" fill="currentColor" fillRule="evenodd" data-name="Layer 1"></path>
              </g>
            </svg>
            <div class="absolute top-0 left-0 -ml-[15px] mt-[15px] header-svg">
              <div class="py-2 px-4 relative">
                <span class="relative z-10 font-bold font-serif text-white">Boost employee retention</span>
                <svg class="transition w-full h-full absolute left-0 bottom-0 pointer-events-none text-blue-200 " viewBox="0 0 133 35" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                  <path d="M2.922 3.29c-3.157 8.366 2.386 17.812-1.478 26.168-.636 1.373-1.174 2.854 2.772 4.01 3.259.954 17.176.574 26.96.519 25.084-.14 52.214-1.085 77.133-.515 3.233.074 6.556.153 9.704-.006 4.275-.216 7.727-.856 9.875-1.601 3.721-1.29 4.02-7.144 4.1-8.621.405-7.523-1.313-9.58-.908-17.103.047-.875-1.823-2.72-3.82-3.505-3.938-1.546-12.053-1.116-20.88-1.372-19.077-.553-37.254-.091-56.525.072-8.868.076-18.995-.246-27.834-.23-5.87.012-13.272-.446-17.217.726-1.43.424-1.692.952-1.882 1.457z" stroke="none" fill="currentColor" fill-rule="evenodd" stroke-opacity=".111"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="px-3 py-3 relative basis-full md:basis-[calc(33%-20px)] rounded overflow-hidden flex">
          <div className={`w-full px-8 bg-[#f9f1e4] py-6  items-center justify-center red-200 relative`}>
            {/* <div className="text-lg font-bold text-center">Build up healthy work culture</div> */}
            <p className="font-sm font-comfort mt-12 text-center">Happier employees love to engage and actively participate in building a healthy work environment.</p>

            <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full absolute left-0 bottom-0 text-white pointer-events-none" viewBox="0 0 331 227.75" preserveAspectRatio="none">
              <g data-name="Layer 2">
                <path d="M0 0v227.75h331V0zm327.84 91.68l-4.41 108.06c-.19 4.75-.52 9.79-4.34 13.73-6.55 6.74-20.15 7.48-31.84 7.55-80.58.5-159.11 10.38-239.7 2.13-9.84-1-20.13-2.35-27.78-6.77C8 209.56 5.94 197.68 5 187A820.94 820.94 0 017.68 17.88c.51-4.25 1.37-9 6-11.74C17.31 4 22.3 3.56 27 3.2c85.55-6.6 171.27 7.72 257.09 3.2 8.42-.44 17.34-.81 24.83 1.89C322 13 325.42 24.68 326.7 34.85c3.23 25.49 2.19 31.25 1.14 56.83z" fill="currentColor" fillRule="evenodd" data-name="Layer 1"></path>
              </g>
            </svg>
            <div class="absolute top-0 left-0 -ml-[15px] mt-[15px] header-svg">
              <div class="py-2 px-4 relative">
                <span class="relative z-10 font-bold font-serif text-white">Build up healthy work culture</span>
                <svg class="transition w-full h-full absolute left-0 bottom-0 pointer-events-none text-blue-200 " viewBox="0 0 133 35" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                  <path d="M2.922 3.29c-3.157 8.366 2.386 17.812-1.478 26.168-.636 1.373-1.174 2.854 2.772 4.01 3.259.954 17.176.574 26.96.519 25.084-.14 52.214-1.085 77.133-.515 3.233.074 6.556.153 9.704-.006 4.275-.216 7.727-.856 9.875-1.601 3.721-1.29 4.02-7.144 4.1-8.621.405-7.523-1.313-9.58-.908-17.103.047-.875-1.823-2.72-3.82-3.505-3.938-1.546-12.053-1.116-20.88-1.372-19.077-.553-37.254-.091-56.525.072-8.868.076-18.995-.246-27.834-.23-5.87.012-13.272-.446-17.217.726-1.43.424-1.692.952-1.882 1.457z" stroke="none" fill="currentColor" fill-rule="evenodd" stroke-opacity=".111"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Boxes;
