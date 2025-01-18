/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import ChangingText from "../components/ChangingText";

const ProfileImage = () => {
  return (
    <div className="flex h-full justify-center items-center sm:p-12 pt-20 sm:pt-24 sm:pb-0 p-0 py-2 pb-2">
      <div
        className="relative group"
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="600"
      >
        <div className="absolute -inset-6 opacity-[25%] z-0 hidden sm:block">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-indigo-500 to-purple-600 rounded-full blur-2xl animate-spin-slower" />
          <div className="absolute inset-0 bg-gradient-to-l from-fuchsia-500 via-rose-500 to-pink-600 rounded-full blur-2xl animate-pulse-slow opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-600 via-cyan-500 to-teal-400 rounded-full blur-2xl animate-float opacity-50" />
        </div>

        <div className="relative">
          <div
            id="my-pic"
            className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-[0_0_40px_rgba(120,119,198,0.3)] transform transition-all duration-700 group-hover:scale-105"
          >
            <div className="absolute inset-0 border-4 border-white/20 rounded-full z-20 transition-all duration-700 group-hover:border-white/40 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-10 transition-opacity duration-700 group-hover:opacity-0 hidden sm:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 via-transparent to-blue-500/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 hidden sm:block" />
            <img
              src="my-pic.jpg"
              alt="Profile"
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
              loading="lazy"
            />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 z-20 hidden sm:block">
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-white/10 to-transparent transform translate-y-full group-hover:-translate-y-full transition-transform duration-1000 delay-100" />
              <div className="absolute inset-0 rounded-full border-8 border-white/10 scale-0 group-hover:scale-100 transition-transform duration-700 animate-pulse-slow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MainTitle = () => {
  const titles = [
    "PROGRAMMER",
    "PROBLEM SOLVER",
    "REACT DEVELOPER",
    "MERN DEVELOPER",
  ];

  return (
    <div
      className="text-center lg:text-left sm:mt-8 md:mt-12 lg:mt-20"
      data-aos="fade-up"
      data-aos-delay="600"
    >
      <h1 className="main-title text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight">
        <span className="bg-white bg-clip-text text-transparent">
          HI, I AM NAEEM!
        </span>
      </h1>
      <h1 className="main-title text-2xl sm:text-3xl md:text-4xl mt-1 lg:text-4xl font-bold tracking-tight lg:text-nowrap">
        <span className="bg-white bg-clip-text text-transparent">
          CREATIVE <ChangingText words={titles} />
        </span>
      </h1>
    </div>
  );
};

const Button = ({ href, text, icon: Icon }) => {
  const handleClick = (e) => {
    if (text === "Resume") {
      // Open PDF in a new tab
      window.open("Resume.pdf", "_blank");
    } else {
      // Prevent default anchor behavior (if href was passed)
      e.preventDefault();

      // Get the target section by ID
      const targetSection = document.querySelector(href);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  return (
    <button
      onClick={handleClick}
      id="my-button"
      className="group relative w-[110px] sm:w-[160px]"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#21365b] to-[#184455] rounded-xl opacity-50 blur-md group-hover:opacity-90 transition-all duration-700"></div>
      <div className="relative h-11 bg-[#030014] backdrop-blur-xl rounded-lg border border-white/10 leading-none overflow-hidden">
        <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-[#21365b]/30 to-[#184455]/30"></div>
        <span className="absolute inset-0 flex items-center justify-center gap-2 text-sm group-hover:gap-3 transition-all duration-300">
          <span className="bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent font-medium z-10">
            {text}
          </span>
          <Icon
            className={
              "w-4 h-4 text-gray-200 group-hover:rotate-45 transform transition-all duration-300 z-10"
            }
          />
        </span>
      </div>
    </button>
  );
};

// const Button = ({ href, text, icon: Icon }) => {
//   const handleClick = (e) => {
//     // Prevent default behavior
//     e.preventDefault();

//     // Open PDF in a new tab
//     window.open(href, "_blank");
//   };

//   return (
//     <button
//       onClick={handleClick}
//       id="my-button"
//       className="group relative w-[110px] sm:w-[160px]"
//     >
//       <div className="absolute -inset-0.5 bg-gradient-to-r from-[#21365b] to-[#184455] rounded-xl opacity-50 blur-md group-hover:opacity-90 transition-all duration-700"></div>
//       <div className="relative h-11 bg-[#030014] backdrop-blur-xl rounded-lg border border-white/10 leading-none overflow-hidden">
//         <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-[#21365b]/30 to-[#184455]/30"></div>
//         <span className="absolute inset-0 flex items-center justify-center gap-2 text-sm group-hover:gap-3 transition-all duration-300">
//           <span className="bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent font-medium z-10">
//             {text}
//           </span>
//           <Icon
//             className={`w-4 h-4 text-gray-200 ${
//               text === "Resume"
//                 ? "group-hover:translate-x-1"
//                 : "group-hover:rotate-45"
//             } transform transition-all duration-300 z-10`}
//           />
//         </span>
//       </div>
//     </button>
//   );
// };
const SocialLink = ({ icon: Icon, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <button className="group relative py-1 px-3">
        <div className="absolute inset-0 bg-gradient-to-r from-[#23395f] to-[#1b4c60] rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
        <div className="relative rounded-xl bg-black/50 backdrop-blur-xl p-2 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300">
          <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
        </div>
      </button>
    </a>
  );
};

function Home() {
  const SOCIAL_LINKS = [
    { icon: Github, link: "https://github.com/NAEEM-UL-HASSAN" },
    { icon: Linkedin, link: "https://www.linkedin.com/in/naeem-hashmi/" },
    { icon: Mail },
  ];

  useEffect(() => {
    AOS.init({ once: true, offset: 10 });
  }, []);

  return (
    <div
      className="container mx-auto px-6 lg:px-12 min-h-screen lg:overflow-hidden max-w-screen-xl"
      id="Home"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center h-auto lg:h-screen">
        <div
          className="space-y-3 text-center lg:text-left order-2 lg:order-1"
          data-aos="fade-right"
          data-aos-delay="400"
        >
          <MainTitle />
          <p
            className="text-base text-gray-200 max-w-xl leading-relaxed font-light mx-auto lg:mx-0"
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            I&apos;m a dedicated MERN Stack Developer passionate about creating
            robust and user-friendly web applications. With hands-on experience
            in JavaScript frameworks, API integration, and responsive design, I
            bring innovative solutions to life. I thrive in dynamic environments
            where I can leverage my expertise in modern web development
            technologies to deliver impactful digital experiences.
          </p>
          <div
            className="flex justify-center lg:justify-start gap-3"
            data-aos="fade-up"
            data-aos-delay="1400"
          >
            <Button href="#Portfolio" text="Projects" icon={ExternalLink} />
            <Button href="Resume.pdf" text="Resume" icon={ExternalLink} />
          </div>
          <div
            className="flex justify-center lg:justify-start gap-4"
            data-aos="fade-up"
            data-aos-delay="1600"
          >
            {SOCIAL_LINKS.map((social, index) => (
              <SocialLink key={index} {...social} />
            ))}
          </div>
        </div>

        {/* Profile Image on the right side */}
        <div className="order-1 lg:order-2">
          <ProfileImage />
        </div>
      </div>
    </div>
  );
}

export default Home;
