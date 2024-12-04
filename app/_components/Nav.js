"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FaHome, FaListUl, FaEnvelope } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { CiMenuKebab } from "react-icons/ci";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        closeNav();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={navRef}>
      <button
        className="text-secondaryLighter hover:text-secondaryLight rounded-md shadow-md transition duration-300"
        onClick={toggleNav}
      >
        <div className="sm:hidden block">
          <CiMenuKebab size={40} />
        </div>
        <div className="hidden sm:block">
          <TiThMenu size={30} />
        </div>
      </button>
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-primary_900 w-48 rounded-md shadow-lg z-50 animate-slideLeft">
          <ul className="flex flex-col">
            <li className="p-4 flex items-center hover:bg-primary_800 transition duration-300">
              <FaHome className="mr-2" />
              <Link href="/" onClick={closeNav}>
                Home
              </Link>
            </li>
            <li className="p-4 flex items-center hover:bg-primary_800 transition duration-300">
              <FaListUl className="mr-2" />
              <Link href="/lists" onClick={closeNav}>
                Lists
              </Link>
            </li>
            <li className="p-4 flex items-center hover:bg-primary_800 transition duration-300">
              <FaEnvelope className="mr-2" />
              <Link href="/route3" onClick={closeNav}>
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Nav;
