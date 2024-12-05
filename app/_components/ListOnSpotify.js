function ListOnSpotify({ href }) {
  return (
    <div className="flex sm:flex-row flex-col sm:gap-2 gap-6 justify-center items-center px-10 py-10">
      <span className="sm:tracking-widest tracking-wide text-lg border-b-2 border-[#1DB954] p-2 hover:px-4 transition-all">
        Listen all in one playlist :
      </span>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#1DB954] text-primary_100 py-3 px-6 rounded-full hover:bg-[#1DB954]/60 transition duration-300"
      >
        Spotify
      </a>
    </div>
  );
}

export default ListOnSpotify;
