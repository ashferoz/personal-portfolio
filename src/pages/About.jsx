import React from "react";
import profileImage from "../images/profile.jpg";
import styles from "../components/about.module.css";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={`bg-[#000000] text-white`}>
        <div className={styles.content}>
          <h1 className="text-8xl font-ivy italic font-light mb-16 text-center">
            I'm Ash.
          </h1>
          <div className="flex pb-20">
            <img src={profileImage} alt="Profile" className={styles.img} />
            <div>
              <h2 className="text-4xl mb-10 font-thin leading-snug">
                A{" "}
                <span className="bg-[#efdd3b] text-black px-1">
                  Motion Designer
                </span>{" "}
                and
                <br />
                <span className="bg-[#efdd3b] text-black px-1">
                  Software Engineer
                </span>{" "}
                based in Singapore.
              </h2>
              <p className="text-xl font-thin">
                Over the past 6 years, I've worn many hats in various areas of
                digital design, including front-end development, motion
                graphics, video editing, and videography. I've worked with
                agencies/clients such as: <span className="font-medium">Hogarth</span>,{" "}
                <span className="font-medium">Big3Media</span>,{" "}
                <span className="font-medium">Protocol</span>,{" "}
                <span className="font-medium">UnderwriteMe</span>,{" "}
                <span className="font-medium">Physio & Sole Clinic</span>.
              </p>
              <br />
              
              <p className="text-xl font-thin">
                Growing up surrounded by arts in different mediums such as
                music, games, and television, I've developed a keen eye for
                blending beauty with purpose. I believe that art is not just a
                visual spectacle, but a powerful means of communication that
                creates human connections.
              </p>
            </div>
          </div>
          <div className="pb-8 flex flex-col text-center">
            <h4 className="text-5xl font-medium font-ivy italic mb-10 text-[#efdd3b]">
              Driven by Impact,
              <br />
              Powered by Creativity
            </h4>
            <p className="mb-5 text-xl font-thin">
              My focus is on making a positive impact, collaborating with those
              who <br />
              share a vision of fostering change while achieving business goals.
            </p>
          </div>
          <div className="text-center mb-10">
            <h5
              onClick={() => navigate("/contact")}
              className="text-xl italic hover:text-[#efdd3b] border-b-[1px] border-[#efdd3b] inline-block cursor-pointer transition-colors duration-250"
            >
              If this resonates with you, let's connect!
            </h5>
          </div>
        </div>
      </div>
      <div className={styles.noise}></div>
    </>
  );
};

export default About;
