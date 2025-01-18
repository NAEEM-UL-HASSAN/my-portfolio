/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { Sparkle } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="text-center lg:mb-8 mb-2 px-[5%]">
      <div className="inline-block relative group">
        <h2
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text  bg-[#ff8c00]"
          data-aos="zoom-in-up"
          data-aos-duration="600"
        >
          Tech Stack
        </h2>
      </div>
      <p
        className="mt-2 text-gray-200 max-w-2xl mx-auto text-base sm:text-lg flex items-center justify-center gap-2"
        data-aos="zoom-in-up"
        data-aos-duration="800"
      >
        <Sparkle className="w-5 h-5 text-[#ff8c00]" />
        Transforming Ideas into Code
        <Sparkle className="w-5 h-5 text-[#ff8c00]" />
      </p>
    </div>
  );
};

const TechStackIcon = ({ TechStackIcon, Language, Knowledge }) => {
  return (
    <div className="group p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-3 hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl">
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-50 blur transition duration-300"></div>
        <img
          src={TechStackIcon}
          alt={`${Language} icon`}
          className="relative h-16 w-16 md:h-20 md:w-20 transform transition-transform duration-300"
        />
      </div>
      <span className="text-gray-200 font-semibold text-sm md:text-base tracking-wide group-hover:text-white transition-colors duration-300">
        {Language}
      </span>
      {/* Progress bar */}
      <div className="w-full">
        <div
          className="bg-gray-200 rounded-full h-2"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <motion.div
            className="bg-green-600 h-2 rounded-full"
            initial={{ width: "0%" }} // Start at 0%
            animate={{ width: `${Knowledge}%` }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              delay: 2,
            }}
            whileInView={{ width: `${Knowledge}%` }}
            viewport={{ once: false }}
          />
        </div>
      </div>
    </div>
  );
};
function TechStack() {
  // Optimized AOS initialization
  useEffect(() => {
    const initAOS = () => {
      AOS.init({
        once: false,
      });
    };

    initAOS();
  }, []);

  const techStacks = [
    { icon: "html.svg", language: "HTML", Knowledge: 90 },
    { icon: "css.svg", language: "CSS", Knowledge: 75 },
    { icon: "javascript.svg", language: "JavaScript", Knowledge: 82 },
    { icon: "bootstrap.svg", language: "Bootstrap", Knowledge: 70 },
    { icon: "tailwind.svg", language: "TailwindCSS", Knowledge: 77 },
    { icon: "reactjs.svg", language: "React JS", Knowledge: 86 },
    { icon: "nextjs.svg", language: "Next JS", Knowledge: 88 },
    { icon: "nodejs.svg", language: "Node JS", Knowledge: 85 },
    { icon: "expressjs.svg", language: "Express JS", Knowledge: 80 },
    { icon: "mongodb.svg", language: "MongoDB", Knowledge: 86 },
  ];
  return (
    <div
      className="h-auto pb-[5%] text-white overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] lg:mt-32 mt-20 sm-mt-0"
      id="Tech"
    >
      <Header />
      <div className="container mx-auto flex justify-center items-center overflow-hidden pb-[5%]">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-8 gap-5">
          {techStacks.map((stack, index) => (
            <div
              key={index}
              data-aos={
                index % 2 === 0
                  ? "fade-up-right"
                  : index % 2 === 1
                  ? "fade-up"
                  : "fade-up-left"
              }
              data-aos-duration={
                index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"
              }
            >
              <TechStackIcon
                TechStackIcon={stack.icon}
                Language={stack.language}
                Knowledge={stack.Knowledge}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TechStack;
