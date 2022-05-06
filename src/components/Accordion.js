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
              <Item item={item} key={item} />
            ))}
          </motion.ul>
        </div>
      </div>
    </AnimateSharedLayout>
  );
}

function Item({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.li className={`${Styles.li} border-b last:border-0 border-grey-alto mb-2 ${isOpen ? "bg-gray-100" : ""}`} onClick={toggleOpen} initial={{ borderRadius: 10 }}>
      {/* <motion.div className="avatar" layout /> */}
      <div className="flex justify-between items-center">
        <span className="text-xl">{item.title}</span>
        {isOpen ? <AiOutlineUp /> : <AiOutlineDown />}
      </div>
      <div>{isOpen && <Content item={item} />}</div>
    </motion.li>
  );
}

function Content({ item }) {
  return (
    <motion.div className="font-comfort mt-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {item.desc}
    </motion.div>
  );
}

const items = [
  {
    title: "Can I get a free trial for my office?",
    desc: "Yes, We provide 3 day free trial for our partners at their office premises",
  },
  {
    title: "Do I get privacy during the massage?",
    desc: "Our massage setup provides the required privacy to the employees. You do not need any removal of clothes to get the service. ",
  },
  {
    title: "What are the requirements to get a massage?",
    desc: "As an employee, you can approach the employer to get in touch with us for in-office massages. As an employer, you can connect with our team to get a free trial or book a service for your office.",
  },
  {
    title: "How can I set up your massages in my office?",
    desc: "The employer can approach us directly for booking the massage services for their office.",
  },
  {
    title: "Are the therapists certified and licensed?",
    desc: "Yes, all our therapists are certified and licensed.",
  },
  {
    title: "Are the oils used in massage authentic?",
    desc: `No, we won't be using oils, every product used during the massage gets thorough our quality checks to ensure that only genuine products are used.`,
  },
  {
    title: "Does the massage work on headaches?",
    desc: "Yes, our therapeutic scalp therapy can reduce headaches.",
  },
  {
    title: "Can I choose the gender of the therapist?",
    desc: "You can avail the therapist of your choice present at your office.",
  },
  {
    title: "Do my employees need to tip the therapist?",
    desc: "Our therapists are paid service charges by us. You or your employees do not need to tip them for their services.",
  },
  {
    title: "Can a friend who is not an employee of the company avail the massage?",
    desc: "No, our services are strictly restricted to the employees of our client.",
  },
];
