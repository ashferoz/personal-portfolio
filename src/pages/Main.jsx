import React, { useEffect, useRef } from "react";
import styles from "../components/background.module.css";

const Main = () => {
  const appRef = useRef(null);

  useEffect(() => {
    const setInitialGradient = () => {
      if (appRef.current) {
        appRef.current.style.setProperty("--mouse-x", "50%");
        appRef.current.style.setProperty("--mouse-y", "50%");
      }
    };

    const moveGradient = (event) => {
      const winWidth = window.innerWidth;
      const winHeight = window.innerHeight;

      const mouseX = Math.round((event.pageX / winWidth) * 100);
      const mouseY = Math.round((event.pageY / winHeight) * 100);

      if (appRef.current) {
        appRef.current.style.setProperty("--mouse-x", mouseX.toString() + "%");
        appRef.current.style.setProperty("--mouse-y", mouseY.toString() + "%");
      }
    };

    setInitialGradient();

    document.addEventListener("mousemove", moveGradient);

    return function cleanup() {
      document.removeEventListener("mousemove", moveGradient);
    };
  }, []);

  return (
    <div className={styles.app} id="app" ref={appRef}>
      <div className="font-proxima flex justify-center items-center h-screen p-10 text-white">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-ivy font-light italic p-2">Hey, I'm Ash Feroz.</h1>
          <h2 className="font-light tracking-wide">
            A Motion Designer & Software Engineer.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Main;
