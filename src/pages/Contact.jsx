import React from "react";

const Contact = () => {
  return (
    <div className="bg-[#151515] text-white flex flex-col p-10 h-screen py-44 px-20">
      <div className="mb-8">
        <h3 className="font-ivy text-3xl">Email</h3>
        <div className="border-b-[1px] border-[#efdd3b]" />
        <a
          href="mailto:ash.safrina@gmail.com"
          className="underline-hover text-xl italic hover:text-[#efdd3b] inline-block cursor-pointer transition-colors duration-250 mt-4"
        >
          ash.safrina@gmail.com
        </a>
      </div>
      <div>
        <h3 className="font-ivy text-3xl">Links</h3>
        <div className="border-b-[1px] border-[#efdd3b]" />
        <div className="flex flex-col w-20">
          <a
            href="https://github.com/ashferoz"
            target="_blank"
            className="underline-hover text-s italic hover:text-[#efdd3b] cursor-pointer transition-colors duration-250 mt-4"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/ashferoz/"
            target="_blank"
            className="underline-hover text-s italic hover:text-[#efdd3b] cursor-pointer transition-colors duration-250 mt-4"
          >
            Linkedin
          </a>
          <a
            href="https://www.instagram.com/ash.feroz/"
            target="_blank"
            className="underline-hover text-s italic hover:text-[#efdd3b] cursor-pointer transition-colors duration-250 mt-4"
          >
            Playground
          </a>
          <a
            href="https://vimeo.com/ashferoz"
            target="_blank"
            className="underline-hover text-s italic hover:text-[#efdd3b] cursor-pointer transition-colors duration-250 mt-4"
          >
            Vimeo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
