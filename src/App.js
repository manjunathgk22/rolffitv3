/* eslint-disable jsx-a11y/alt-text */
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Mission from "./components/Mission";
import Info from "./components/Info";
import Boxes from "./components/Boxes";
import HowItWorks from "./components/HowItWorks";
import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { FadeInWhenVisible } from "./Animate/FadeInWhenVisible";
import Accordion from "./components/Accordion";
import Icons from "./components/Icons";
import Checklist from "./components/Checklist/Checklist";
import Contact from "./components/Contact";
import anime from "./assets/images/logo_animation_black.gif";
import WhyWe from "./components/WhyWe";
import WhyWeSlider from "./components/WhyWeSlider";
import Stats from "./components/Stats";
import { BsFillTelephoneFill } from "react-icons/bs";
import colors from "tailwindcss/colors";
// const Header = lazy(() => "./components/Header");
// const Mission = lazy(() => import("./components/Mission"));
// const Info = lazy(() => import("./components/Info"));
// const Boxes = lazy(() => import("./components/Boxes"));
// const HowItWorks = lazy(() => import("./components/HowItWorks"));
// const WhyWe = lazy(() => import("./components/WhyWe"));

function App() {
  const [showanime, setshowanime] = useState(true);
  const contact = useRef(null);
  const contactlg = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      setshowanime(false);
    }, 3000);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const gotocontact = () => {
    document.getElementById("contact")?.scrollIntoView({ block: "end", behavior: "smooth" });
  };
  const handleScroll = (event) => {
    let scrollTop = window.pageYOffset;
    if (scrollTop > 7150) {
      // contact.current.style.height = "0px";
      contact.current.style.opacity = 0;
    } else {
      // contact.current.style.height = "auto";
      contact.current.style.opacity = 1;
    }
    if (scrollTop > 4742) {
      // contactlg.current.style.height = "0px";
      contactlg.current.style.opacity = 0;
    } else {
      // contactlg.current.style.height = "auto";
      contactlg.current.style.opacity = 1;
    }
    console.log(scrollTop);
  };
  return showanime ? (
    <div className="flex justify-center items-center h-screen w-screen">
      <img className="lg:h-[400px] w-auto" src={anime} />
    </div>
  ) : (
    <>
      <FadeInWhenVisible>
        <div className="overflow-visible " id="home">
          <div style={{ height: "100vh" }}>
            <Header />
          </div>
          <main>
            <section id="mission">
              <FadeInWhenVisible>
                <Mission />
              </FadeInWhenVisible>
            </section>

            <section id="info">
              <FadeInWhenVisible>
                <Info />
              </FadeInWhenVisible>
            </section>
            <section id="howitworks">
              <FadeInWhenVisible>
                <HowItWorks />
              </FadeInWhenVisible>
            </section>
            <section id="whywedoit" style={{ background: "white" }}>
              <FadeInWhenVisible>
                <WhyWe />
              </FadeInWhenVisible>
            </section>
            <section>
              <Stats />
            </section>

            <section style={{ background: "white" }} id="benefits">
              <FadeInWhenVisible>
                <Boxes />
                {/* <WhyWeSlider /> */}
              </FadeInWhenVisible>
            </section>
            {/* <section>
            <FadeInWhenVisible>
              <Boxes />
            </FadeInWhenVisible>
          </section> */}

            <section id="faq">
              <FadeInWhenVisible>
                <Accordion />
              </FadeInWhenVisible>
            </section>
            <section id="contact">
              <FadeInWhenVisible>
                <Contact />
              </FadeInWhenVisible>
            </section>
          </main>
        </div>
      </FadeInWhenVisible>
      <div onClick={gotocontact} ref={contact} className="lg:hidden contact-banner fixed bottom-0 left-0 w-screen p-3 bg-black flex z-40 justify-center items-center">
        <BsFillTelephoneFill size={"1rem"} color={colors.white} /> <span className="text-white ml-4 text-lg">Get in touch</span>
      </div>
      <div ref={contactlg} onClick={gotocontact} className="z-40 contact-float cursor-pointer invisible flex justify-center items-center lg:visible fixed bg-black p-4 bottom-4 right-4 rounded-full">
        <BsFillTelephoneFill size={"1.25rem"} color={colors.white} /> <span className="text-white ml-4 text-lg">Get in touch</span>
      </div>
    </>
  );
}

export default App;
//  <motion.div
//   style={{ height: 300, width: 300, background: "red" }}
//   initial="hidden"
//   whileInView="visible"
//   viewport={{ once: true }}
//   transition={{ duration: 0.3 }}
//   variants={{
//     visible: { opacity: 1, scale: 1 },
//     hidden: { opacity: 0, scale: 0 },
//   }}
// />
