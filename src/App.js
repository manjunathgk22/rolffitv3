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
          <section>
            <Suspense fallback={() => <div></div>}>
              <FadeInWhenVisible>
                <Mission />
              </FadeInWhenVisible>
            </Suspense>
          </section>
          <section>
            <Suspense fallback={() => <div></div>}>
              <FadeInWhenVisible>
                <Info />
              </FadeInWhenVisible>
            </Suspense>
          </section>
          <section>
            <Suspense fallback={() => <div></div>}>
              <FadeInWhenVisible>
                <HowItWorks />
              </FadeInWhenVisible>
            </Suspense>
          </section>
          <section>
            <Suspense fallback={() => <div></div>}>
              <FadeInWhenVisible>
                <WhyWe />
              </FadeInWhenVisible>
            </Suspense>
          </section>
          <section>
            <Suspense fallback={() => <div></div>}>
              <FadeInWhenVisible>
                <Boxes />
              </FadeInWhenVisible>
            </Suspense>
          </section>

          {/* <section>
            <Suspense fallback={() => <div></div>}>
              <FadeInWhenVisible>
                <Accordion />
              </FadeInWhenVisible>
            </Suspense>
          </section> */}
          <section>
            <Suspense fallback={() => <div></div>}>
              <FadeInWhenVisible>
                <Contact />
              </FadeInWhenVisible>
            </Suspense>
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
