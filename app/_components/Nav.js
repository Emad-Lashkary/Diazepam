"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaHome, FaListUl, FaEnvelope } from "react-icons/fa";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="bg-secondaryBase text-white px-4 py-2 rounded-md shadow-md hover:bg-secondaryDark transition duration-300"
        onClick={toggleNav}
      >
        Menu
      </button>
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-primary_900 w-48 rounded-md shadow-lg z-50">
          <ul className="flex flex-col">
            <li className="p-4 flex items-center hover:bg-primary_800 transition duration-300">
              <FaHome className="mr-2" />
              <Link href="/">Home</Link>
            </li>
            <li className="p-4 flex items-center hover:bg-primary_800 transition duration-300">
              <FaListUl className="mr-2" />
              <Link href="/route2">Lists</Link>
            </li>
            <li className="p-4 flex items-center hover:bg-primary_800 transition duration-300">
              <FaEnvelope className="mr-2" />
              <Link href="/route3">Contact Me</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Nav;
