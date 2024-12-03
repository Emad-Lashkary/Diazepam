"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

function Album({
  artist,
  album,
  rank,
  myRate,
  criticsRate,
  dateRelease,
  cover,
  spotifyLink,
  genres,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const albumRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    if (albumRef.current) {
      observer.observe(albumRef.current);
    }

    return () => {
      if (albumRef.current) {
        observer.unobserve(albumRef.current);
      }
    };
  }, []);

  const getBackgroundColor = (rank) => {
    switch (rank) {
      case "1":
        return "bg-yellow-500/80"; // Gold
      case "2":
      case "3":
        return "bg-gray-400/80"; // Silver
      case "4":
      case "5":
        return "bg-yellow-700/80"; // Bronze
      default:
        return "bg-primary_800/80"; // Default background color
    }
  };

  return (
    <div
      ref={albumRef}
      className={`${
        isVisible ? "animate-fadeIn" : "opacity-0"
      } ${getBackgroundColor(
        rank
      )} rounded-lg shadow-lg p-6 mb-6 transform transition duration-500 sm:hover:scale-[1.01]`}
    >
      <div className="flex flex-col md:flex-row items-center">
        <div className="relative sm:w-64 sm:h-64 w-52 h-52 md:w-48 md:h-48 mb-4 md:mb-0">
          <Image
            src={cover}
            alt={`${album} cover`}
            fill
            className="rounded-lg hover:scale-105 transition-all"
          />
        </div>
        <div className="flex-1 ml-0 md:ml-6 flex flex-col items-start w-full">
          <h2 className="sm:text-2xl text-lg sm:font-bold text-primary_100">
            {rank}- {album}
          </h2>
          <h3 className="sm:text-xl text-base text-primary_200">{artist}</h3>
          <p className="sm:text-sm text-xs text-primary_300 mt-2">
            Released on: {new Date(dateRelease).toLocaleDateString()}
          </p>
          <p className="sm:text-sm text-xs text-primary_300 mt-2">
            Rank: {rank} | My Rating: {myRate} | Critics Rating: {criticsRate}
          </p>
          <p className="sm:text-sm text-xs text-primary_300 mt-2">
            Genres: {genres.join(", ")}
          </p>
          <a
            href={spotifyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#1DB954] text-primary_100 mt-4 py-2 px-4 rounded-full hover:scale-105 transition duration-300"
          >
            Listen on Spotify
          </a>
        </div>
      </div>
    </div>
  );
}

export default Album;
