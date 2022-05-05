/* eslint-disable jsx-a11y/alt-text */
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Mission from "./components/Mission";
import Info from "./components/Info";
import Boxes from "./components/Boxes";
import HowItWorks from "./components/HowItWorks";
import { lazy, Suspense, useEffect, useState } from "react";
import { FadeInWhenVisible } from "./Animate/FadeInWhenVisible";
import Accordion from "./components/Accordion";
import Icons from "./components/Icons";
import Checklist from "./components/Checklist/Checklist";
import Contact from "./components/Contact";
import anime from "./assets/images/logo_animation_black.gif";
import WhyWe from "./components/WhyWe";
import WhyWeSlider from "./components/WhyWeSlider";
import Stats from "./components/Stats";
// const Header = lazy(() => "./components/Header");
// const Mission = lazy(() => import("./components/Mission"));
// const Info = lazy(() => import("./components/Info"));
// const Boxes = lazy(() => import("./components/Boxes"));
// const HowItWorks = lazy(() => import("./components/HowItWorks"));
// const WhyWe = lazy(() => import("./components/WhyWe"));

function App() {
  const [showanime, setshowanime] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setshowanime(false);
    }, 3000);
  }, []);
  return showanime ? (
    <div className="flex justify-center items-center h-screen w-screen">
      <img className="lg:h-[400px] w-auto" src={anime} />
    </div>
  ) : (
    <FadeInWhenVisible>
      <div className="overflow-visible ">
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

          <section style={{ background: "white" }}>
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

          {/* <section>
              <FadeInWhenVisible>
                <Accordion />
              </FadeInWhenVisible>
          </section> */}
          <section id="contact">
            <FadeInWhenVisible>
              <Contact />
            </FadeInWhenVisible>
          </section>
        </main>
      </div>
    </FadeInWhenVisible>
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
