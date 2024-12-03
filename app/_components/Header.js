import Nav from "../_components/Nav";

function Header() {
  return (
    <div className="w-full sm:h-[13vh] h-[10vh] flex justify-between items-center py-3 px-12 shadow-lg shadow-primary_900">
      <div></div>
      <h1
        className={`animate-fadeIn header-logo self-start sm:text-6xl text-4xl text-secondaryLighter hover:scale-y-110 hover:scale-x-125 hover:tracking-widest py-2 hover:pt-1 hover:pb-3 px-4 hover:text-secondaryLigh hover:px-8 transition-all duration-1000`}
      >
        Diazepam
      </h1>
      <Nav />
    </div>
  );
}

export default Header;
