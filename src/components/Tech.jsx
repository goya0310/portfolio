import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { useState } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div
      className={`flex flex-row flex-wrap justify-center gap-${
        isMobile ? 5 : 10
      }`}
    >
      {technologies.map((technology, index) => (
        <div
          className={isMobile ? "w-20 h-20" : "w-28 h-28"}
          key={technology.name}
        >
          {isMobile ? (
            <motion.div
              variants={fadeIn("right", "spring", index * 0.5, 0.75)}
              className="w-fit-content "
            >
              <div className="bg-white w-full md:m-16 md:w-1/2 lg:w-1/3 p-4 rounded shadow-inner">
                <img src={technology.icon} alt="icono" />
              </div>
            </motion.div>
          ) : (
            <BallCanvas icon={technology.icon} />
          )}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
