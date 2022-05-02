import React from "react";

function Mission() {
  return (
    <div className="container-lg m-auto pb-16 pt-4 md:py-18 lg:py-25 lg:w-4/5 w-11/12 relative z-10 flex flex-wrap-reverse lg:flex-wrap">
      <div className="w-full md:w-1/2 xl:w-2/5 md:pt-4 md:pr-7 lg:pr-12 xl:pr-17">
        <h2 className="text-3xl md:text-4xl lg:text-7xl font-extrabold text-center md:text-left">our mission is simple...</h2>

        <div className="text-sm font-comfort font-light md:text-lg pb-4 mt-6 text-center md:text-left">
          <p className="larger-normal-text">to create a better life for people and pups.</p>
          <p className="larger-normal-text">
            We are puppy therapy specialists who bring a litter of gorgeous puppies to your office, create a dedicated puppy-safe environment, and then welcome staff members to come and stock up on cuddles and belly rubs.
            <br />
          </p>
        </div>

        <div className="flex justify-center md:justify-start">
          <a className="btn pink" href="https://www.pawsinwork.com/about-us" target="">
            <span>more about us</span>
          </a>
        </div>
      </div>

      <div className="w-full md:w-1/2 xl:w-3/5 relative mb-8 md:mb-0">
        <picture>
          <img
            alt="Mission statement"
            className="w-full h-full"
            src="https://pawsinwork.imgix.net/images/mission-statement.png?auto=compress%2Cformat&amp;crop=focalpoint&amp;fit=min&amp;fm=jpg&amp;fp-x=0.5&amp;fp-y=0.5&amp;q=95&amp;ratio=2000%2F1333&amp;w=2560&amp;s=38a4bd1315aeac40cc6611ee61e10fe2"
            sizes="auto"
            style={{
              objectFit: "cover",
              objectPosition: "50% 50%",
              fontFamily: "object-fit: cover, object-position: 50% 50%",
            }}
          />
        </picture>

        <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full absolute top-0 left-0 right-0 bottom-0 text-white pointer-events-none" viewBox="0 0 565.58 365.27" preserveAspectRatio="none">
          <g data-name="Layer 2">
            <path d="M0 0v365.27h565.58V0zm549.45 327.85c-17.2 32.37-51.26 34.83-80.56 34.24l-425.45-8.7c-6.09-.12-12.42-.33-17.85-4.09-12.43-8.61-14.81-31-15.57-50Q5.36 181.06 4.82 62.58c0-10.76.06-22.14 4.16-31.32 6.28-14 19.56-18.28 31.47-20.79C101.89-2.5 160.9 5.84 222.09 4.8q96-1.63 192 2.53C451.79 9 490 11.37 526.2 25.81c7.36 2.93 14.88 6.57 20.37 13.87 9.61 12.79 10.58 33.09 10.93 51.41l3.09 158c.52 27.23.58 56.69-11.14 78.76z" fill="currentColor" fillRule="evenodd" data-name="Layer 1"></path>
          </g>
        </svg>
      </div>
    </div>
  );
}

export default Mission;
