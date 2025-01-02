"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Album = React.memo(
  ({
    artist,
    album,
    rank,
    myRate,
    criticsRate,
    dateRelease,
    cover,
    spotifyLink,
    genres,
  }) => {
    const [isVisible, setIsVisible] = useState(false);
    const albumRef = useRef(null);

    useEffect(() => {
      const currentRef = albumRef.current;

      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting);
        },
        { threshold: 0.1 }
      );

      if (currentRef) {
        observer.observe(currentRef);
      }

      return () => {
        if (currentRef) {
          observer.unobserve(currentRef);
        }
      };
    }, []);

    const getBackgroundColor = (rank) => {
      switch (rank) {
        case "1":
          return "from-yellow-500/70 via-yellow-400/70 to-yellow-500/70"; // Gold
        case "2":
          return "from-gray-400/60 via-gray-300/60 to-gray-400/60"; // Silver
        case "3":
          return "from-yellow-700/70 via-yellow-600/70 to-yellow-700/70"; // Bronze
        default:
          return "from-primary_900/80 via-primary_700/80 to-primary_900/80"; // Default background color
      }
    };

    return (
      <div
        ref={albumRef}
        className={`${
          isVisible ? "animate-slideLeft" : "opacity-0"
        } ${getBackgroundColor(
          rank
        )} relative flex bg-gradient-to-r rounded-lg shadow-lg mb-8 transform transition duration-500 hover:scale-105`}
      >
        <div className="relative w-28 h-28 md:w-44 md:h-44 flex-shrink-0">
          <Image
            src={cover}
            alt={`${album} cover`}
            layout="fill"
            objectFit="cover"
            className="rounded-l-lg transform transition duration-500 md:hover:scale-[1.15] scale-110"
          />
        </div>
        <div className="md:p-4 pl-2 py-2 flex flex-col justify-center gap-[3px] w-full">
          <h2 className="text-sm sm:text-xl font-bold text-primary_100">
            {rank}. {album}
          </h2>
          <h3 className="text-sm sm:text-lg text-primary_200">{artist}</h3>
          <p className="text-[8px] sm:text-xs tracking-widest text-primary_300">
            Released on: {new Date(dateRelease).toLocaleDateString()}
          </p>
          <p className="text-[9px] sm:text-sm text-primary_300">
            My Rating: {myRate} | Critics Rating: {criticsRate} | Genres:{" "}
            {genres.join(", ")}
          </p>
          <a
            href={spotifyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-2 left-1/2 transform -translate-x-1/2 translate-y-7 bg-[#1DB954]/90 text-primary_100 py-1 px-4 rounded-full hover:bg-[#1ED760] transition duration-300 w-auto text-center"
          >
            Listen on Spotify
          </a>
        </div>
      </div>
    );
  }
);

Album.displayName = "Album";

export default Album;
