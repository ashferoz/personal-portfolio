import React, { useEffect, useRef } from "react";
import Styles from "./components/background.module.css";

function App() {
  const appRef = useRef(null);
  const toRef = useRef(null);

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
    <div className="app" id="app" ref={appRef}>
      <div className="header">
        <h1>welcome</h1>
      </div>
    </div>
  );
}

export default App;
