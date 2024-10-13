import React from "react";
import profileImage from "../images/profile.jpg";
import styles from "../components/about.module.css";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-[#151515] text-white">
        <div className="py-36 px-20 max-md:px-5">
          <h1 className="text-8xl font-ivy italic font-light mb-16 text-center max-md:text-4xl max-md:mb-5">
            I'm Ash.
          </h1>
          <div className={styles.container}>
            <img src={profileImage} alt="Profile" className={styles.img} />
            <div className={styles.textContent}>
              <h2 className="text-4xl mb-10 font-thin leading-snug max-md:text-2xl">
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
              <p className="text-xl font-thin max-md:text-base">
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
              
              <p className="text-xl font-thin max-md:text-base">
                Growing up surrounded by arts in different mediums such as
                music, games, and television, I've developed a keen eye for
                blending beauty with purpose. I believe that art is not just a
                visual spectacle, but a powerful means of communication that
                creates human connections.
              </p>
            </div>
          </div>
          <div className="pb-8 flex flex-col text-center">
            <h4 className="text-5xl font-medium font-ivy italic mb-10 text-[#efdd3b] max-md:text-3xl">
              Driven by Impact,
              <br />
              Powered by Creativity
            </h4>
            <p className="mb-5 text-xl font-thin max-md:text-base">
              My focus is on making a positive impact, collaborating with those
              who <br />
              share a vision of fostering change while achieving business goals.
            </p>
          </div>
          <div className="text-center mb-10">
            <h5
              onClick={() => navigate("/contact")}
              className="text-xl italic hover:text-[#efdd3b] border-b-[1px] border-[#efdd3b] inline-block cursor-pointer transition-colors duration-250 max-md:text-base"
            >
              If this resonates with you, let's connect!
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
