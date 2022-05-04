import React from "react";
import { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import Styles from "./Accordion.module.css";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

/**
 * This is an example of animating shared layouts in Framer Motion 2.
 *
 * The open state of each panel is contained locally to that component. Wrapping
 * them all in the same AnimateSharedLayout component allows them all to animate
 * in response to state changes that affect each other's layout.
 *
 * Try removing AnimateSharedLayout to see how that affects the animation.
 */

export default function Accordion() {
  return (
    <AnimateSharedLayout>
      <div className="container m-auto">
        <div className="flex flex-wrap max-w-5xl mx-auto py-10 md:py-16 lg:py-21 justify-center">
          <div class="h5 sm:h4 md:h3 text-6xl font-bold mb-8 text-center">FAQs</div>
          <motion.ul className={`${Styles.ul}`} layout initial={{ borderRadius: 25 }}>
            {items.map((item) => (
              <Item data={item} key={item} />
            ))}
          </motion.ul>
        </div>
      </div>
    </AnimateSharedLayout>
  );
}

function Item({ data }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.li className={`${Styles.li}`} layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
      {/* <motion.div className="avatar" layout /> */}
      <div className="flex justify-between items-center">
        <span>title</span>
        {isOpen ? <AiOutlineUp /> : <AiOutlineDown />}
      </div>
      <AnimatePresence>{isOpen && <Content />}</AnimatePresence>
    </motion.li>
  );
}

function Content() {
  return (
    <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      sdjnaskjnd askdjn askjdnaksnd laksjnd kasjnd kasjnd
    </motion.div>
  );
}

const items = [{}];
