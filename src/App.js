import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Mission from "./components/Mission";
import Info from "./components/Info";

function App() {
  return (
    <div class="overflow-visible ">
      <div style={{ height: "100vh" }}>
        <Header />
      </div>
      <main>
        <section>
          <Mission />
        </section>
        <section>
          <Info />
        </section>
      </main>
    </div>
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
