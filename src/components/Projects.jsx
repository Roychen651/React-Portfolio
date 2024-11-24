import React from "react";
import alien from "../assets/alien.png";
import coffee from "../assets/coffee.png";
import cyber from "../assets/cyber.png";
import ds from "../assets/ds.png";
import ecommerce from "../assets/ecommerce.png";
import gym from "../assets/gym.png";
import notes from "../assets/notes.png";
import restaurant from "../assets/restaurant.png";
import text from "../assets/text.png";
import weather from "../assets/weather.png";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    image: alien,
    title: "Softwalien",
    desc: "This project is designed to provide a comprehensive note-taking experience, integrated with advanced features like location saving, YouTube video embedding, and Spotify link management.",
    tech: ["React", "HTML", "CSS", "JavaScript"],
    url: "https://softwalien-he.netlify.app/",
  },
  {
    image: coffee,
    title: "Coffee Beans Shop",
    desc: "This project is a coffee beans selling website built with React. The website showcases different coffee beans products, allows users to add items to their cart, and provides an easy checkout process.",
    tech: ["React", "HTML", "CSS", "JavaScript"],
    url: "https://bestbeans.netlify.app/",
  },
  {
    image: weather,
    title: "Weather API ",
    desc: "This application provides real-time weather updates for any city around the world. Built with React and styled for a beautiful and responsive design, it fetches weather data from the OpenWeatherMap API.",
    tech: ["React", "HTML", "CSS", "JavaScript", "OpenWeatherMap API"],
    url: "https://roy-weather-api.netlify.app/",
  },
  {
    image: restaurant,
    title: "Zenith and Sons Restaurant",
    desc: "This project showcases the elegance and culinary excellence of Zenith & Sons Restaurant, a modern Asian and Japanese cuisine restaurant. Built with React and Vite, the landing page features dynamic sections and smooth animations powered by Framer Motion.",
    tech: ["React", "HTML", "CSS", "JavaScript"],
    url: "https://zenith-and-sons.netlify.app/",
  },
  {
    image: ecommerce,
    title: "E-commerce project - CS Degree : Frontend Final Project",
    desc: "This project is a fully-functional e-commerce website built with the MERN stack (MongoDB, Express.js, React.js, Node.js). The platform allows users to browse and purchase products, manage their shopping cart, register and login, and receive newsletters.",
    tech: [
      "React",
      "HTML",
      "CSS",
      "JavaScript",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
    ],
    url: "https://github.com/Roychen651/E-commerce-project",
  },
  {
    image: gym,
    title: "Roy's Gym Landing Page",
    desc: "Welcome to the official repository for Roy's Gym landing page! This project is a modern, responsive landing page designed to showcase the features, programs, and testimonials of Roy's Gym. Built with React for the frontend, CSS Modules for styling, Framer Motion for animations, and React Scroll for smooth navigation. Deployed on Netlify for a seamless live preview experience.",
    tech: ["React", "HTML", "CSS", "JavaScript"],
    url: "https://roys-gym.netlify.app",
  },
  {
    image: cyber,
    title: "Cyber Project",
    desc: "The goal of the project is to build secure and unsecure websites and to analyze the security of the websites, The site is have front and back functionality and using PGSQL database.",
    tech: ["React", "HTML", "CSS", "JavaScript"],
    url: "https://github.com/Roychen651/Cyber",
  },
  {
    image: notes,
    title:
      "Rich Note App - CS Degree : Android Applications in Kotlin Final Project",
    desc: "This project is designed to provide a comprehensive note-taking experience, integrated with advanced features like location saving, YouTube video embedding, and Spotify link management.",
    tech: ["Kotlin", "XML", "Google Location", "Anroid Studio"],
    url: "https://github.com/Roychen651/Rich-Note-App-Android-Kotlin-Project",
  },
  {
    image: text,
    title:
      "Text Analysis - Machine Learning Project - CS Degree : Machine Learning Final Project",
    desc: "This project focuses on predicting the gender of the author based on textual content. The task involves training machine learning models to classify whether a given text is written by a male or female author. The primary metric used to evaluate the model's performance is the F1-score, taking into account both precision and recall.",
    tech: ["Python", "Machine Learning", "Pandas", "Numpy", "Scikit-learn"],
    url: "https://github.com/Roychen651/Text-Anylsis-ML",
  },
  {
    image: ds,
    title:
      "Real Estate - Data Science Project - CS Degree : Data Science Final Project",
    desc: "The goal of this project is to use classification models to identify properties that are good for investment.",
    tech: ["Python", "Data Science", "Pandas", "Numpy", "Scikit-learn"],
    url: "https://github.com/Roychen651/DB-Project---Real-Eastate-Investment-Portugal",
  },
];

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex min-h-screen w-full flex-col justify-center items-center gap-16 p-4 md:px-14 md:py-24"
    >
      <ScrollReveal>
        <h1 className="text-4xl font-light text-white md:text-6xl">
          My Projects
        </h1>
      </ScrollReveal>

      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
