import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Import burger icon and close icon
import styles from "../components/navbar.module.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.burgerIcon} onClick={toggleMenu}>
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </div>
        <ul className={`${styles.menu} ${isMenuOpen ? styles.open : ""}`}>
          <li>
            <NavLink
              to="/main"
              className={({ isActive }) => (isActive ? `${styles.active}` : "")}
              onClick={toggleMenu}
            >
              main
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/devProjects"
              className={({ isActive }) => (isActive ? `${styles.active}` : "")}
              onClick={toggleMenu}
            >
              dev
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/motionProjects"
              className={({ isActive }) => (isActive ? `${styles.active}` : "")}
              onClick={toggleMenu}
            >
              motion
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? `${styles.active}` : "")}
              onClick={toggleMenu}
            >
              about
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? `${styles.active}` : "")}
              onClick={toggleMenu}
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
