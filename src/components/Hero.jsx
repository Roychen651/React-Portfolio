import React from "react";
import image from "../assets/Roy.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      id="home"
      className="flex min-h-screen w-full items-center justify-center px-4 md:px-16"
    >
      <div className="flex flex-col items-center justify-center gap-10 text-white text-center">
        {/* Animated Image */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={image}
            alt="Roy Chen"
            className="w-[250px] md:w-[300px] rounded-full shadow-xl shadow-indigo-900
            cursor-pointer transition-all duration-300 hover:scale-105 hover:-translate-y-5
            hover:shadow-2xl hover:shadow-indigo-600"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center justify-center gap-3"
        >
          <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-4xl md:text-6xl font-light">
            Roy Chen
          </h1>
          <h3 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-xl md:text-2xl">
            Web Developer
          </h3>
          <p className="text-sm md:text-base text-gray-400 max-w-[600px]">
            A web developer with BS.c in Computer Science, passionate about
            creating web applications. Specializes in both front-end and
            back-end development.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
