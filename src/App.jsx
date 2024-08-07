import React, { useEffect, useRef } from "react";
import styles from "./components/background.module.css";
import Navbar from "./components/Navbar";

function App() {
  const appRef = useRef(null);

  useEffect(() => {
    const moveGradient = (event) => {
      const winWidth = window.innerWidth;
      const winHeight = window.innerHeight;

      const mouseX = Math.round((event.pageX / winWidth) * 100);
      const mouseY = Math.round((event.pageY / winHeight) * 100);

      if (appRef) {
        appRef.current.style.setProperty("--mouse-x", mouseX.toString() + "%");
        appRef.current.style.setProperty("--mouse-y", mouseY.toString() + "%");
      }
    };
    document.addEventListener("mousemove", moveGradient);

    return function cleanup() {
      document.removeEventListener("mousemove", moveGradient);
    };
  }, [appRef]);
  return (
    <div className={styles.app} id="app" ref={appRef}>
      <Navbar />
      <div className="font-proxima font-thin flex justify-center items-center h-screen p-10 text-white">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl p-2">Ash Feroz</h1>
          <h2>Motion Designer & Software Engineer</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
