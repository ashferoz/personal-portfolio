import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed top-16 left-1/2 transform -translate-x-1/2 w-auto px-8 py-2 bg-black bg-opacity-40 text-white z-50 font-proxima font-light rounded-lg">
      <nav className="flex justify-center">
        <ul className="flex space-x-24">
          <li>
            <NavLink
              to="/main"
              className="hover:tracking-widest hover:text-[#ff5858] hover:font-medium transition-all duration-200"
            >
              main
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dev"
              className="hover:tracking-widest hover:text-[#ff5858] hover:font-medium transition-all duration-200"
            >
              dev
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/motion"
              className="hover:tracking-widest hover:text-[#ff5858] hover:font-medium transition-all duration-200"
            >
              motion
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className="hover:tracking-widest hover:text-[#ff5858] hover:font-medium transition-all duration-200"
            >
              about
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
