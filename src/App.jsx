import React from "react";
import { Suspense } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";
import DevProjects from "./pages/DevProjects";
import Contact from "./pages/Contact";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./components/app.module.css";
import MotionProjects from "./pages/MotionProjects";

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <div className={styles.transitionWrapper}>
        <Suspense fallback={<p className="text-5xl font-thin">Loading...</p>}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Navigate replace to="/main" />} />
              <Route
                path="/main"
                element={
                  <motion.div
                    key="main"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <Main />
                  </motion.div>
                }
              />
              <Route
                path="/about"
                element={
                  <motion.div
                    key="about"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <About />
                  </motion.div>
                }
              />
              <Route
                path="/devProjects"
                element={
                  <motion.div
                    key="devProjects"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <DevProjects />
                  </motion.div>
                }
              />
              <Route
                path="/contact"
                element={
                  <motion.div
                    key="contact"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <Contact />
                  </motion.div>
                }
              />

              <Route
                path="/motionProjects"
                element={
                  <motion.div
                    key="/motionProjects"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <MotionProjects />
                  </motion.div>
                }
              />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </div>
    </>
  );
}

export default App;
