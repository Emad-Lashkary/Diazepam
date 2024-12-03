"use client";

import { FaArrowUp } from "react-icons/fa";

function ScrollToTopButton() {
  function handleScrollToTop() {
    const scrollContainer = document.getElementById("scrollContainer");
    scrollContainer.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      className="fixed z-10 bottom-10 right-10 bg-secondaryBase text-secondaryLighter p-4 border-2 border-secondaryLight rounded-full shadow-lg hover:bg-secondaryDark hover:border-secondaryDark transition duration-500 focus:outline-none"
      onClick={handleScrollToTop}
    >
      <FaArrowUp />
    </button>
  );
}

export default ScrollToTopButton;
