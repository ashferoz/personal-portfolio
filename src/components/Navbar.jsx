import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed top-32 left-0 w-full text-white z-50 font-proxima font-light">
      <nav>
        <ul className="flex justify-center space-x-60 p-4">
          <li>
            <NavLink
              to=""
              className="hover:tracking-widest hover:text-[#828282] transition-all duration-200"
            >
              Main
            </NavLink>
          </li>

          <li>
            <NavLink
              to=""
              className="hover:tracking-widest hover:text-[#828282] transition-all duration-200"
            >
              Projects
            </NavLink>
          </li>

          <li>
            <NavLink
              to=""
              className="hover:tracking-widest hover:text-[#828282] transition-all duration-200"
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
