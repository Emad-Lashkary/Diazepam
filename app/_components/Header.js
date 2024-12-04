import { Suspense } from "react";
import Nav from "../_components/Nav";
import SpinnerMini from "./SpinnerMini";

function Header() {
  return (
    <div className="w-full sm:h-[13vh] h-[10vh] flex justify-between bg-primary_900/60 items-center py-3 sm:px-12 px-3 shadow-lg shadow-primary_900">
      <div className="hidden sm:block"></div>
      <h1
        className={`animate-slideDown header-logo self-start sm:text-5xl text-4xl text-secondaryLighter hover:scale-y-110 hover:scale-x-125 sm:hover:scale-x-150 hover:tracking-widest py-3 px-4 hover:text-secondaryLigh hover:px-8 transition-all duration-1000`}
      >
        Diazepam
      </h1>
      <Nav />
    </div>
  );
}

export default Header;
