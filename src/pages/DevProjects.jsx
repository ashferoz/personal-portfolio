import React from "react";
import styles from "../components/devProjects.module.css";
import makiMadness from "../images/maki_madness.png";
import planAhead from "../images/plan_ahead.png";
import thumper from "../images/thumper.png";
import echo from "../images/echo.png";
import kindly from "../images/kindly.png";
import Tags from "../components/Tags";

const DevProjects = () => {
  return (
    <>
      <div className="bg-[#151515] text-white font-proxima flex flex-col justify-center items-center h-auto pt-40 px-10">
        <div className={styles.projectContainer}>
          <div className="h-full w-full">
            <div className={styles.imageContainer}>
              <img src={kindly} alt="kindly" />
            </div>
          </div>
          <div className="p-2 text-3xl font-medium">
            <div className="mx-2">
              <h2>Kindly</h2>
              <p className="text-sm">
                An app to connect with volunteers and lend a hand in your
                community.
              </p>
            </div>
            <a
              href="https://github.com/ashferoz/Kindly_Backend"
              target="_blank"
              className="bg-[#efdd3b] text-[#000000] text-base m-1 px-2 rounded-3xl cursor-pointer hover:bg-[#fff281]"
            >
              Repo Backend
            </a>
            <a
              href="https://github.com/ashferoz/Kindly_Frontend"
              target="_blank"
              className="bg-[#efdd3b] text-[#000000] text-base m-1 px-2 rounded-3xl cursor-pointer hover:bg-[#fff281]"
            >
              Repo Frontend
            </a>
            <div className="flex flex-wrap mt-3">
              <Tags>HTML</Tags>
              <Tags>CSS</Tags>
              <Tags>JavaScript</Tags>
              <Tags>Typescript</Tags>
              <Tags>PostgreSQL</Tags>
              <Tags>Express.js</Tags>
              <Tags>React</Tags>
              <Tags>Node.js</Tags>
              <Tags>Tanstack</Tags>
              <Tags>Bcrypt</Tags>
              <Tags>JWT</Tags>
              <Tags>Tailwind</Tags>
              <Tags>Postman</Tags>
            </div>
          </div>
        </div>

        <div className={styles.projectContainer}>
          <div className="h-full w-full">
            <div className={styles.imageContainer}>
              <img src={echo} alt="echo" />
            </div>
          </div>
          <div className="p-2 text-3xl font-medium">
            <div className="mx-2">
              <h2>Echo</h2>
              <p className="text-sm">A group chat app.</p>
            </div>
            <a
              href="https://github.com/ashferoz/Echo"
              target="_blank"
              className="bg-[#efdd3b] text-[#000000] text-base m-1 px-2 rounded-3xl cursor-pointer hover:bg-[#fff281]"
            >
              Repo
            </a>
            <div className="flex flex-wrap mt-3">
              <Tags>HTML</Tags>
              <Tags>CSS</Tags>
              <Tags>JavaScript</Tags>
              <Tags>MongoDB</Tags>
              <Tags>Express.js</Tags>
              <Tags>React</Tags>
              <Tags>Node.js</Tags>
              <Tags>Postman</Tags>
            </div>
          </div>
        </div>

        <div className={styles.projectContainer}>
          <div className="h-full w-full">
            <div className={styles.imageContainer}>
              <img src={thumper} alt="thumper" />
            </div>
          </div>
          <div className="p-2 text-3xl font-medium">
            <div className="mx-2">
              <h2>Thumper</h2>
              <p className="text-sm">
                An app to keep track of events you are interested in and review
                events you have been to.
              </p>
            </div>
            <a
              href="https://github.com/ashferoz/Thumper_App?tab=readme-ov-file"
              target="_blank"
              className="bg-[#efdd3b] text-[#000000] text-base m-1 px-2 rounded-3xl cursor-pointer hover:bg-[#fff281]"
            >
              Repo
            </a>
            <div className="flex flex-wrap mt-3">
              <Tags>HTML</Tags>
              <Tags>CSS</Tags>
              <Tags>JavaScript</Tags>
              <Tags>React</Tags>
              <Tags>Bootstrap</Tags>
              <Tags>TicketMaster API</Tags>
              <Tags>Airtable</Tags>
              <Tags>Postman</Tags>
            </div>
          </div>
        </div>

        <div className={styles.projectContainer}>
          <div className="h-full w-full">
            <div className={styles.imageContainer}>
              <img src={planAhead} alt="planAhead" />
            </div>
          </div>
          <div className="p-2 text-3xl font-medium">
            <div className="mx-2">
              <h2>Plan Ahead</h2>
              <p className="text-sm">An app for managing appointments.</p>
            </div>
            <a
              href="https://github.com/ashferoz/PlanAhead"
              target="_blank"
              className="bg-[#efdd3b] text-[#000000] text-base m-1 px-2 rounded-3xl cursor-pointer hover:bg-[#fff281]"
            >
              Repo
            </a>
            <div className="flex flex-wrap mt-3">
              <Tags>HTML</Tags>
              <Tags>CSS</Tags>
              <Tags>JavaScript</Tags>
              <Tags>MongoDB</Tags>
              <Tags>Express.js</Tags>
              <Tags>React</Tags>
              <Tags>Node.js</Tags>
              <Tags>Postman</Tags>
            </div>
          </div>
        </div>

        <div className={styles.projectContainer}>
          <div className="h-full w-full">
            <div className={styles.imageContainer}>
              <img src={makiMadness} alt="makiMadness" />
            </div>
          </div>
          <div className="p-2 text-3xl font-medium">
            <div className="mx-2">
              <h2>Maki Madness</h2>
              <p className="text-sm">A dexterity, speed and stamina game.</p>
            </div>
            <a
              href="https://github.com/ashferoz/Maki_Madness"
              target="_blank"
              className="bg-[#efdd3b] text-[#000000] text-base m-1 px-2 rounded-3xl cursor-pointer hover:bg-[#fff281]"
            >
              Repo
            </a>
            <a
              href="https://ashferoz.github.io/Maki_Madness/"
              target="_blank"
              className="bg-[#efdd3b] text-[#000000] text-base m-1 px-2 rounded-3xl cursor-pointer hover:bg-[#fff281]"
            >
              Deployed
            </a>
            <div className="flex flex-wrap mt-3">
              <Tags>HTML</Tags>
              <Tags>CSS</Tags>
              <Tags>JavaScript</Tags>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DevProjects;
