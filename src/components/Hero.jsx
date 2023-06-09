import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { styles } from "../styles";
import { AvatarLoader } from "./canvas";

const Hero = () => {
  const isChecked = useSelector((state) => state.isChecked);
  const textLanguages = ["Hola, soy ", "Hi, I'm "];

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#46A7B8]" />
          <div className="w-1 sm:h-80 h-40 celestial-gradient" />
        </div>
        <div style={{ zIndex: 1 }}>
          <h1 className={`${styles.heroHeadText}`}>
            {isChecked ? textLanguages[1] : textLanguages[0]}{" "}
            <span className="text-[#46A7B8]">Diego</span>
          </h1>
          {/* animate-typing */}
          <p
            className={`animate-typing overflow-hidden whitespace-nowrap ${styles.heroSubText} mt-2 text-white-100`}
          >
            FullStack Web Developer
          </p>
        </div>
      </div>
      <AvatarLoader />
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[30px] h-[60px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2 h-2 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
