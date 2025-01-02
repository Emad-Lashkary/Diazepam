"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  FaHome,
  FaListUl,
  FaEnvelope,
  FaInfoCircle,
  FaCommentDots,
} from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { CiMenuKebab } from "react-icons/ci";

function NavItem({ href, icon: Icon, label, onClick }) {
  return (
    <li className="px-4 flex items-center transition-all rounded-l-md duration-300 ease-in-out hover:bg-primary_800 hover:translate-x-1">
      <Icon className="mr-2 text-secondaryLighter" />
      <Link
        href={href}
        onClick={onClick}
        className="py-4 w-full text-primary_100 hover:text-secondaryLighter"
      >
        {label}
      </Link>
    </li>
  );
}

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
        <div className="absolute top-full right-0 mt-2 w-48 rounded-l-lg shadow-lg z-50 bg-gradient-to-r from-primary_700 to-primary_900 transition-all duration-300 animate-slideLeft">
          <ul className="flex flex-col px-1">
            <NavItem href="/" icon={FaHome} label="Home" onClick={closeNav} />
            <NavItem
              href="/lists"
              icon={FaListUl}
              label="Lists"
              onClick={closeNav}
            />
            <NavItem
              href="/contact"
              icon={FaEnvelope}
              label="Contact Me"
              onClick={closeNav}
            />
            <NavItem
              href="/about"
              icon={FaInfoCircle}
              label="About"
              onClick={closeNav}
            />
            <NavItem
              href="/feedback"
              icon={FaCommentDots}
              label="Feedback"
              onClick={closeNav}
            />
          </ul>
        </div>
      )}
    </div>
  );
}

export default Nav;
