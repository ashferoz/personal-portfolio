import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed top-16 left-1/2 transform -translate-x-1/2 w-auto px-8 py-2 bg-[#000000] bg-opacity-85 text-white font-proxima font-light rounded-lg z-20">
      <nav className="flex justify-center">
        <ul className="flex space-x-24">
          <li>
            <NavLink
              to="/main"
              className={({ isActive }) =>
                isActive
                  ? "text-[#efdd3b] font-medium"
                  : "hover:tracking-widest hover:text-[#efdd3b] transition-all duration-500"
              }
            >
              main
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/devProjects"
              className={({ isActive }) =>
                isActive
                  ? "text-[#efdd3b] font-medium"
                  : "hover:tracking-widest hover:text-[#efdd3b] transition-all duration-500"
              }
            >
              dev
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/motionProjects"
              className={({ isActive }) =>
                isActive
                  ? "text-[#efdd3b] font-medium"
                  : "hover:tracking-widest hover:text-[#efdd3b] transition-all duration-500"
              }
            >
              motion
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-[#efdd3b] font-medium"
                  : "hover:tracking-widest hover:text-[#efdd3b] transition-all duration-500"
              }
            >
              about
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-[#efdd3b] font-medium"
                  : "hover:tracking-widest hover:text-[#efdd3b] transition-all duration-500"
              }
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
