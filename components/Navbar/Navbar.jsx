"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "./Navbar.module.css";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href={"/"}>
          <img src="./icons/logo2.png" alt="" height={"42px"} />
        </Link>
      </div>
      <div className={styles.logoMobile}>
        <Link href={"/"}>
          <img src="./icons/logo2.png" alt="" height={"30px"} />
        </Link>
      </div>

      <div className={`${styles.navLinks} ${menuOpen ? styles.active : ""}`}>
        <div className={styles.subsidiaries} ref={dropdownRef}>
          <div className={styles.dropdownToggle} onClick={toggleDropdown}>
            Subsidiaries
            <IoIosArrowDown
              className={`${styles.arrow} ${dropdownOpen ? styles.open : ""}`}
            />
          </div>
          {dropdownOpen && (
            <div className={styles.dropdownMenu}>
              <Link href="https://collegele.com/">CollegeLe</Link>
              <Link href="https://mediend.com/">MediEND</Link>
              <Link href="#">KundkundTC</Link>
              <Link href="https://kundkundit.com">KundkundIT</Link>
            </div>
          )}
        </div>
        <Link href={"/newsroom"}>Newsroom</Link>
        <Link href={"/careers"}>Careers</Link>
        <Link href={"/aboutus"}>About Us</Link>
        <Link href={"/getintouch"}>Contact Us</Link>
      </div>
      <div className={styles.icons}>
        <div className={styles.contact}>Contact</div>
        <div className={styles.menuToggle} onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
