import React from "react";

const ProjectCard = ({ project }) => {
  // Handle image click to navigate to URL
  const handleImageClick = () => {
    window.open(project.url, "_blank");
  };

  return (
    <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24 w-80 md:w-full mx-auto">
      {/* Image with onClick handler */}
      <div
        onClick={handleImageClick}
        className="cursor-pointer w-full md:w-[300px] transition-all duration-300 hover:scale-105 flex justify-center"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full rounded-2xl"
        />
      </div>

      {/* Text content with full width */}
      <div className="flex flex-col gap-5 w-full items-center md:items-start">
        <div className="flex flex-col gap-3 text-center md:text-left">
          <div className="text-xl font-semibold">{project.title}</div>
          <p className="text-gray-400">{project.desc}</p>
        </div>
        <div className="flex flex-wrap gap-5 justify-center md:justify-start">
          {project.tech.map((tech, index) => (
            <span key={index} className="rounded-lg bg-black p-3">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
