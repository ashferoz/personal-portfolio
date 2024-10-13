import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../components/navbar.module.css"

const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
      
        <ul className={styles.menu}>
          <li>
            <NavLink
              to="/main"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              main
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/devProjects"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              dev
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/motionProjects"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              motion
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              about
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? styles.active : "")}
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
