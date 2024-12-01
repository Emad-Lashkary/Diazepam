function Footer() {
  return (
    <div className="absolute bottom-0 left-0 w-full h-[5vh] py-2 bg-primary_950/60">
      <span className="sm:text-sm text-xs sm:tracking-widest px-4 text-primary_100/40">
        © 2025 Developed by{" "}
        <a
          className="underline underline-offset-2 text-secondaryLight/50 hover:text-secondaryLight/65"
          href="https://www.linkedin.com/in/emad-lashkary/"
        >
          Emad Lashkary
        </a>
        . All rights reserved.
      </span>
    </div>
  );
}

export default Footer;
