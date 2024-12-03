// import { Purevil } from "next/font/google";
// const font = Purevil({
//   subsets: ["latin"],
//   weight: ["400"],
//   display: "swap",
// });

function Header() {
  return (
    <div className=" w-full sm:h-[15vh] h-[10vh] flex justify-center items-center py-4 px-12 shadow-lg shadow-primary_900">
      <h1
        className={`header-logo self-start sm:text-6xl text-4xl text-secondaryLighter hover:scale-y-110 hover:scale-x-125 hover:tracking-widest py-2 hover:pt-1 hover:pb-3 px-4 hover:text-secondaryLigh hover:px-8 transition-all duration-1000`}
      >
        Diazepam
      </h1>
    </div>
  );
}

export default Header;
