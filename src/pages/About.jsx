import React from "react";
import profileImage from "../images/profile.jpg";
import styles from "../components/about.module.css";

const About = () => {
  return (
    <>
      <div className={`bg-black text-white`}>
        <div className={styles.content}>
          <h1 className="text-8xl font-extrabold mb-16 text-center">
            I'm Ash.
          </h1>
          <div className="flex pb-20">
            <img src={profileImage} alt="Profile" className={styles.img} />
            <div>
              <h2 className="text-4xl mb-10">
                A <span className="italic text-[#ecff58]">Motion Designer</span>{" "}
                and
                <br />
                <span className="italic text-[#79ff6d]">
                  Software Engineer
                </span>{" "}
                based in Singapore.
              </h2>
              <h3 className="text-xl font-thin">
                Over the past 6 years, I've worn many hats in various areas of
                digital design, including front-end development, motion
                graphics, video editing, and videography.
              </h3>
              <br />
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
          <div className="pb-10 flex flex-col text-center">
            <h4 className="text-6xl font-extrabold mb-10">
              People first, business second.
            </h4>
            <p className="px-24 mb-5 text-xl font-thin">
              I believe in making a positive impact on the world no matter how
              big or small. For me, it's about collaborating with those who use
              creativity to foster meaningful connections and drive change.
            </p>
            <h5 className="text-xl italic">If this resonates with you, let's connect!</h5>
          </div>
        </div>
      </div>

      <div className={styles.background}></div>

      <svg style={{ display: "none" }}>
        <defs>
          <filter id="grain">
            <feTurbulence type="turbulence" baseFrequency="9" />
          </filter>
        </defs>
      </svg>
    </>
  );
};

export default About;
