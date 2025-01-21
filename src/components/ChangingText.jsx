/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ChangingText = ({ words }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div id="text-changing" className="relative h-6 sm:h-7 md:h-8 w-44 sm:w-56 md:w-72  items-center justify-center inline-block">
      {words.map((word, i) => (
        <motion.div
          key={i}
          initial={{
            opacity: 0,
            rotateX: -180,
            z: -100,
          }}
          animate={{
            opacity: i === index ? 1 : 0,
            rotateX: i === index ? 0 : -180,
            z: i === index ? 50 : -100, 
          }}
          exit={{
            opacity: 0,
            rotateX: -180,
            z: -100,
          }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="main-title absolute text-2xl sm:text-3xl md:text-4xl font-bold text-green-500 whitespace-nowrap"
        >
          {word}
        </motion.div>
      ))}
    </div>
  );
};

export default ChangingText;
