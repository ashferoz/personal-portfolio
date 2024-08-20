import React from "react";
import styles from '../components/projects.module.css'

const Projects = () => {
  return (
    <>
      <div className={`bg-[#000000] text-white`}>
        <div className={styles.content}>
          <div>
            <ul>
              <li>Beyond The Grid</li>
            </ul>
          </div>
        </div>
        <div className={styles.noise}></div>
      </div>
    </>
  );
};

export default Projects;
