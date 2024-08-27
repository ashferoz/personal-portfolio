import React from "react";
import showreel from "../images/showreel.gif";
import styles from "../components/motionProjects.module.css";

const MotionProjects = () => {
  return (
    <div className={`bg-[#000000] text-white flex flex-col p-10 items-center`}>
      <div className={styles.content}>
        <div className="mb-8 text-center">
          <a
            href="https://vimeo.com/ashferoz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl italic hover:text-[#efdd3b] border-b-[1px] border-[#efdd3b] inline-block cursor-pointer transition-colors duration-250"
          >
            For motion design works
          </a>
        </div>
        <div className="flex justify-center">
          <img src={showreel} alt="showreel" className="max-w-full h-auto" />
        </div>
      </div>
      <div className={styles.noise}></div>
    </div>
  );
};

export default MotionProjects;
