/* eslint-disable react/prop-types */
import { useState } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardProject from "../components/ProjectCard";
import Certificate from "../components/Certificate";
import { Code, Award } from "lucide-react";
import { useEffect } from "react";

const ToggleButton = ({ onClick, isShowingMore }) => (
  <button
    onClick={onClick}
    className="px-3 py-1.5 text-slate-300 hover:text-white text-sm font-medium transition-all duration-300 ease-in-out flex items-center gap-2 bg-white/5 hover:bg-white/10 rounded-md border border-white/10 hover:border-white/20 backdrop-blur-sm group relative overflow-hidden"
  >
    <span className="relative z-10 flex items-center gap-2">
      {isShowingMore ? "See Less" : "See More"}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`transition-transform duration-300 ${
          isShowingMore
            ? "group-hover:-translate-y-0.5"
            : "group-hover:translate-y-0.5"
        }`}
      >
        <polyline
          points={isShowingMore ? "18 15 12 9 6 15" : "6 9 12 15 18 9"}
        ></polyline>
      </svg>
    </span>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500/50 transition-all duration-300 group-hover:w-full"></span>
  </button>
);

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: { xs: 1, sm: 3 } }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const projects = [
  {
    id: 1,
    Img: "portfolio.svg",
    Title: "My Portfolio",
    Description:
      "This is my personal portfolio website, built with ReactJS. It highlights my skills, projects, and experiences while offering a smooth, interactive experience. With a responsive design and modern animations, the site ensures seamless navigation and an engaging user interface. You can also easily get in touch with me through the contact page.",
    Features: [
      "A beautiful landing page to greet you.",
      "Works perfectly on both mobile and desktop.",
      "Using Framer Motion and AOS for engaging transitions.",
      " Designed with Material UI and styled with Tailwind CSS.",
      "Managed by React Router for easy page transitions.",
      "Allows users to send messages, which I receive directly via email.",
    ],
    TechStack: ["ReactJS", "Tailwind", "MUI", "Motion", "AOS", "Lucide"],
    Github: "https://github.com/NAEEM-UL-HASSAN/my-portfolio.git",
    Link: "https://naeem-portfolio-dev.vercel.app/",
  },
  {
    id: 2,
    Img: "weather.svg",
    Title: "Weather App",
    Description:
      "I built a weather app using Express.js and a real-time weather API, with a simple and intuitive frontend crafted in pure HTML, CSS, and JavaScript. The app lets users enter any city name to instantly get accurate weather details like temperature, humidity, and more. It was a fun and fulfilling project that combines my love for coding with creating something genuinely useful for everyday life.",
    Features: [
      "Fetches live weather data for any city worldwide.",
      "Simple input field for users to type a city name and receive weather temperature.",
      "Clean and responsive frontend ensures accessibility across various devices.",
      "Displays error messages for invalid city names.",
    ],
    TechStack: ["HTML", "CSS", "JavaScript", "ExpressJS"],
    Github: "https://github.com/NAEEM-UL-HASSAN/WeatherApp.git",
    Link: "https://my-weather-app-dev.vercel.app/",
  },
  {
    id: 3,
    Img: "TODO.svg",
    Title: "TODO App",
    Description:
      "I created a Todo Application using ReactJS, Redux Toolkit, Vanilla CSS and Bootstrap to make task management simple and efficient. The app features an intuitive interface that allows users to add, edit, and delete tasks effortlessly, with the added flexibility of switching between light and dark modes. It's designed to help users stay organized and productive with ease.",
    Features: [
      "Add, edit, and delete tasks seamlessly.",
      "Toggle between light and dark themes for a personalized user experience.",
      " Instant updates to the task list using Redux Toolkit for state management.",
      "Built with Bootstrap for a clean, user-friendly interface across devices.",
    ],
    TechStack: ["ReactJS", "CSS", "Bootstrap", "Redux"],
    Github: "https://github.com/NAEEM-UL-HASSAN/Reactjs-todo-App.git",
    Link: "https://my-todo-app-dev.vercel.app/",
  },
  {
    id: 4,
    Img: "spotify.svg",
    Title: "Spotify Clone",
    Description:
      "I have created a Spotify clone using HTML, CSS, and JavaScript to bring the experience of personalized music streaming to life. This project focuses on delivering a sleek, user-friendly interface, with features that emulate the functionality of Spotify. It's been a rewarding journey to combine my passion for music and web development into this project.",
    Features: [
      "Play music from created playlists.",
      "Clean and user-friendly design for a smooth experience.",
      "Fully responsive layout, ensuring a seamless experience on any device.",
    ],
    TechStack: ["HTML", "CSS", "JavaScript"],
    Github: "https://github.com/NAEEM-UL-HASSAN/Spotify-Clone.git",
    Link: "https://my-spotify-clone-dev.vercel.app/",
  },
  {
    id: 5,
    Img: "simple.svg",
    Title: "Simple Portfolio",
    Description:
      "I've created a portfolio website showcasing my work and skills. Built using HTML5, Tailwind CSS, and JavaScript, this website highlights my projects and provides a personal introduction to my work. I've also used JavaScript to add a typing effect for a dynamic touch. The website is fully responsive, ensuring it looks great on all devices—from desktops to smartphones.",
    Features: [
      "Adapts seamlessly to all screen sizes, from mobile phones to desktops.",
      "Highlights my skills and previous work in a clean layout.",
    ],
    TechStack: ["HTML", "Tailwind", "JavaScript"],
    Github: "https://github.com/NAEEM-UL-HASSAN/Project-1.git",
    Link: "https://my-first-simple-portfolio-dev.vercel.app/",
  },
  {
    id: 6,
    Img: "meal.svg",
    Title: "My Meal",
    Description:
      "This is my first website, created using HTML and CSS. It's fully responsive, ensuring it works well on any device, from desktops to smartphones. I focused on making the design clean, easy to use, and functional for a smooth browsing experience.",
    Features: [
      "Fully responsive design that adjusts smoothly to different screen sizes.",
      "Simple and clean layout built using HTML and CSS.",
      "Easy navigation for a user-friendly experience across all devices.",
    ],
    TechStack: ["HTML", "CSS"],
    Github: "https://github.com/NAEEM-UL-HASSAN/My-Meal.git",
    Link: "https://naeem-ul-hassan.github.io/My-Meal/",
  },
];

const certificates = [
  {
    Img: "Frontend.svg",
  },
  {
    Img: "SE.svg",
  },
  {
    Img: "SML.svg",
  },
  {
    Img: "MERN.svg",
  },
];

function Portfolio() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const isMobile = window.innerWidth < 768;
  const initialItems = isMobile ? 4 : 6;

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleShowMore = (type) => {
    if (type === "projects") {
      setShowAllProjects((prev) => !prev);
    } else {
      setShowAllCertificates((prev) => !prev);
    }
  };

  const displayedProjects = showAllProjects
    ? projects
    : projects.slice(0, initialItems);
  const displayedCertificates = showAllCertificates
    ? certificates
    : certificates.slice(0, initialItems);

  return (
    <div
      className="md:px-[10%] px-[5%] w-full sm:mt-0 mt-[3rem] bg-[#030014] overflow-hidden"
      id="Portfolio"
    >
      <div
        className="text-center pb-10"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2 className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-[#ff8c00]">
          Portfolio Showcase
        </h2>
        <p className="text-gray-200 max-w-2xl mx-auto text-sm md:text-base mt-2">
          Trace my journey through projects and certifications, each a key
          milestone in my learning path.
        </p>
      </div>

      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          variant="fullWidth"
          sx={{
            minHeight: "70px",
            "& .MuiTab-root": {
              fontSize: { xs: "0.9rem", md: "1rem" },
              fontWeight: "600",
              color: "#94a3b8",
              textTransform: "none",
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              padding: "20px 0",
              zIndex: 1,
              margin: "8px",
              borderRadius: "12px",
              "&:hover": {
                color: "#ffffff",
                backgroundColor: "rgba(139, 92, 246, 0.1)",
                transform: "translateY(-2px)",
              },
              "&.Mui-selected": {
                color: "#fff",
                background:
                  "linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))",
                boxShadow: "0 4px 15px -3px rgba(139, 92, 246, 0.2)",
              },
            },
            "& .MuiTabs-indicator": {
              height: 0,
            },
            "& .MuiTabs-flexContainer": {
              gap: "8px",
            },
          }}
        >
          <Tab
            icon={<Code className="mb-2 w-5 h-5 transition-all duration-300" />}
            label="Projects"
            {...a11yProps(0)}
          />
          <Tab
            icon={
              <Award className="mb-2 w-5 h-5 transition-all duration-300" />
            }
            label="Certificates"
            {...a11yProps(1)}
          />
        </Tabs>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={setValue}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-5">
                {displayedProjects.map((project, index) => (
                  <div
                    key={project.id || index}
                    data-aos={
                      index % 3 === 0
                        ? "fade-up-right"
                        : index % 3 === 1
                        ? "fade-up"
                        : "fade-up-left"
                    }
                    data-aos-duration={
                      index % 3 === 0
                        ? "1000"
                        : index % 3 === 1
                        ? "1200"
                        : "1000"
                    }
                  >
                    <CardProject
                      Img={project.Img}
                      Title={project.Title}
                      Description={project.Description}
                      Link={project.Link}
                      id={project.id}
                    />
                  </div>
                ))}
              </div>
            </div>
            {projects.length > initialItems && (
              <div className="mt-6 w-full flex justify-start">
                <ToggleButton
                  onClick={() => toggleShowMore("projects")}
                  isShowingMore={showAllProjects}
                />
              </div>
            )}
          </TabPanel>

          <TabPanel value={value} index={1} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5 gap-4">
                {displayedCertificates.map((certificate, index) => (
                  <div
                    key={index}
                    data-aos={
                      index % 3 === 0
                        ? "fade-up-right"
                        : index % 3 === 1
                        ? "fade-up"
                        : "fade-up-left"
                    }
                    data-aos-duration={
                      index % 3 === 0
                        ? "1000"
                        : index % 3 === 1
                        ? "1200"
                        : "1000"
                    }
                  >
                    <Certificate
                      Img={certificate.Img}
                      Title={certificate.Title}
                      Description={certificate.Description}
                      id={certificate.id}
                    />
                  </div>
                ))}
              </div>
            </div>
            {certificates.length > initialItems && (
              <div className="mt-6 w-full flex justify-start">
                <ToggleButton
                  onClick={() => toggleShowMore("certificates")}
                  isShowingMore={showAllCertificates}
                />
              </div>
            )}
          </TabPanel>
        </SwipeableViews>
      </Box>
    </div>
  );
}
export default Portfolio;
