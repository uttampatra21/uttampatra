import React from "react";
// import { motoin } from "fframer-motion";
import { styles } from "../style";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX}absolute inset-0 top-[120px] mx-auto flex-row items-start flex gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div className="">
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm <span className="text-[#915eff]">Uttam </span>
          </h1>
          <p className={`${styles.sectionSubText} mt-2 text-white-100`}>
            I develop cutting edge user <br className="sm:block sm:hidden" />{" "}
            innterfaces and web applications with ReactJS
          </p>
        </div>
      </div>
      <div className="w-full h-full absolute bottom-0">
        <ComputersCanvas />
      </div>
    </section>
  );
};

export default Hero;
