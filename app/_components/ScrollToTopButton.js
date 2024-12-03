"use client";
function ScrollToTopButton() {
  return (
    <button
      className="fixed bottom-5 right-5 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition duration-300 focus:outline-none"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      ↑
    </button>
  );
}

export default ScrollToTopButton;
