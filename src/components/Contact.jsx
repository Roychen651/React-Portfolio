import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="flex min-h-[70vh] min-w-full items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center gap-3 space-y-6 p-14">
        <h1 className="text-center text-5xl md:text-7xl">
          <span className="font-semibold bg-gradient-to-b from-indigo-500 to-green-600 bg-clip-text text-transparent">
            Get in Touch
          </span>
        </h1>

        <p className="text-center text-lg font-semibold text-gray-500">
          <a
            href="mailto:roychen651@gmail.com"
            className="text-nowrap rounded-lg border border-indigo-600 bg-black px-5 py-3 text-lg font-bold text-white shadow-lg shadow-indigo-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-indigo-600"
          >
            Contact Me
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
