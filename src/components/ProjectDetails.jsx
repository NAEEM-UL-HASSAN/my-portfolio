/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { ArrowLeft, ExternalLink, Github, Code2, Layers } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const TECH_ICONS = {
  ReactJS: Code2,
  ExpressJS: Code2,
  Python: Code2,
  JavaScript: Code2,
  Tailwind: Code2,
  HTML: Code2,
  CSS: Code2,
  Bootstrap: Code2,
  default: Layers,
};

const TechBadge = ({ tech }) => {
  const Icon = TECH_ICONS[tech] || TECH_ICONS["default"];

  return (
    <div
      className="group relative px-4 py-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl border border-green-500/20 hover:border-green-500/50 transition-all duration-300"
      data-aos="zoom-in"
      data-aos-delay="100"
    >
      <div className="relative flex items-center gap-2">
        <Icon className="w-5 h-5 text-gray-200 group-hover:text-gray-300 transition-colors" />
        <span className="text-sm font-medium text-gray-200 group-hover:text-gray-300 transition-colors">
          {tech}
        </span>
      </div>
    </div>
  );
};

const FeatureItem = ({ feature }) => (
  <li
    className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-all duration-300 border border-gray-700 hover:border-gray-600"
    data-aos="fade-up"
    data-aos-delay="150"
  >
    <div className="relative mt-1">
      <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-full blur group-hover:opacity-100 opacity-0 transition-opacity duration-300" />
      <div className="relative w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:scale-125 transition-transform duration-300" />
    </div>
    <span className="text-sm text-gray-200 group-hover:text-white transition-colors">
      {feature}
    </span>
  </li>
);

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);

  useEffect(() => {
    AOS.init({ once: true, offset: 10 });
    window.scrollTo(0, 0);
    const storedProjects = JSON.parse(localStorage.getItem("projects")) || [];
    const selectedProject = storedProjects.find((p) => String(p.id) === id);

    if (selectedProject) {
      const enhancedProject = {
        ...selectedProject,
        Features: selectedProject.Features || [],
        TechStack: selectedProject.TechStack || [],
        Github: selectedProject.Github || "https://github.com/NAEEM-UL-HASSAN",
      };
      setProject(enhancedProject);
    }
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center space-y-6">
          <div className="w-16 h-16 border-4 border-green-500/30 border-t-green-500 rounded-full animate-spin" />
          <h2 className="text-2xl font-bold text-white">Loading Project...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#030014] px-4 md:px-6 py-10 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center space-x-4 mb-8">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center space-x-2 px-3 pe-4 py-2 bg-gray-800 rounded-lg text-gray-300 hover:bg-gray-700 transition-all duration-300"
            data-aos="fade-right"
            data-aos-delay="50"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6" data-aos="fade-up" data-aos-delay="200">
            <h1 className="text-3xl font-bold text-white bg-gradient-to-r from-green-300 to-cyan-300 bg-clip-text text-transparent">
              {project.Title}
            </h1>

            <p className="text-lg text-gray-200 text-justify leading-relaxed">
              {project.Description}
            </p>

            <div>
              <h3 className="text-xl font-semibold text-white">Key Features</h3>
              <ul className="space-y-3 mt-3">
                {project.Features.length > 0 ? (
                  project.Features.map((feature, index) => (
                    <FeatureItem key={index} feature={feature} />
                  ))
                ) : (
                  <p className="text-sm text-gray-200">No features added.</p>
                )}
              </ul>
            </div>
          </div>

          <div
            className="bg-gray-900 p-6 rounded-xl h-64"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <h3 className="text-xl font-semibold text-white mb-4">
              Technology Used
            </h3>
            <div className="flex flex-wrap gap-3 overflow-hidden">
              {project.TechStack.length > 0 ? (
                project.TechStack.map((tech, index) => (
                  <TechBadge key={index} tech={tech} />
                ))
              ) : (
                <p className="text-sm text-gray-400">No technologies added.</p>
              )}
            </div>
          </div>
        </div>

        <div
          className="flex space-x-4 mt-10"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <a
            href={project.Link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1 px-3 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-600 transition-all duration-300"
          >
            <ExternalLink className="w-4 h-4" />
            <span className="text-sm">Live Demo</span>
          </a>
          <a
            href={project.Github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1 px-3 py-3 bg-gray-800 text-gray-200 rounded-lg hover:bg-gray-700 transition-all duration-300"
          >
            <Github className="w-4 h-4" />
            <span className="text-sm">GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
