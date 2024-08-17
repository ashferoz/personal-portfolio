import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed top-16 left-1/2 transform -translate-x-1/2 w-auto px-8 py-2 bg-[#000000] bg-opacity-85 text-white z-50 font-proxima font-light rounded-lg z-20">
      <nav className="flex justify-center">
        <ul className="flex space-x-24">
          <li>
            <NavLink
              to="/main"
              className="hover:tracking-widest hover:text-[#efdd3b] hover:font-medium transition-all duration-200"
            >
              main
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/projects"
              className="hover:tracking-widest hover:text-[#efdd3b] hover:font-medium transition-all duration-200"
            >
              projects
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className="hover:tracking-widest hover:text-[#efdd3b] hover:font-medium transition-all duration-200"
            >
              about
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className="hover:tracking-widest hover:text-[#efdd3b] hover:font-medium transition-all duration-200"
            >
              contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
