import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { about, aboutEn, services, servicesEn } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { useSelector } from "react-redux";

const ServiceCard = ({ index, title, icon }) => (
  <div className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full bg-gradient-to-br from-cyan-400 to-red-400 p-[1px] rounded-[20px] shadow-card"
      whileHover={{
        background: "linear-gradient(to top left, #46A7B8, #ED3B43)",
        transition: { ease: "circInOut" },
      }}
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-blue rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </div>
);

const About = () => {

  const isChecked = useSelector((state) => state.isChecked);
  const servicesLanguage = isChecked? servicesEn : services; 

  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>{isChecked? aboutEn[0] : about[0] }</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        {isChecked? aboutEn[1] : about[1] }
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {servicesLanguage.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
