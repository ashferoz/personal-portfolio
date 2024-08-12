import React, { Suspense } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Main from "./pages/Main";
import About from "./pages/About";
import styles from './components/app.module.css';

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          classNames={{
            enter: styles.fadeEnter,
            enterActive: styles.fadeEnterActive,
            exit: styles.fadeExit,
            exitActive: styles.fadeExitActive,
          }}
          timeout={1000}
        >
          <div className={styles.transitionWrapper}>
            <Suspense fallback={<p className="text-5xl font-thin">Loading...</p>}>
              <Routes location={location}>
                <Route path="/" element={<Navigate replace to="/main" />} />
                <Route path="/main" element={<Main />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </Suspense>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}

export default App;
