import { FaHeadphones, FaHeart, FaMusic, FaStar } from "react-icons/fa";

export const metadata = {
  title: "About | Diazepam",
};

export default function About() {
  return (
    <div className="min-h-screen bg-primary_900/90 text-primary_100 flex flex-col items-center py-14 px-4 sm:px-20 animate-fadeIn">
      <h1
        className="text-5xl font-extrabold mb-10 animate-fadeIn"
        style={{ "--fade-duration": "0.4s" }}
      >
        About Diazepam
      </h1>
      <p
        className="text-lg text-primary_300 mb-12 max-w-3xl text-center animate-fadeIn"
        style={{ "--fade-duration": "1s" }}
      >
        Welcome to Diazepam, a space dedicated to the world of metal music.
        Here, you will find meticulously curated lists of top albums, EPs, and
        more. My goal is to provide a comprehensive and engaging resource for
        metal enthusiasts. I aim to cover a wide spectrum of metal subgenres,
        ensuring there's something for every fan. Whether you're into classic
        metal, modern metalcore, or the most obscure subgenres, you'll find
        something that resonates with your taste. Additionally, I share
        insights, reviews, and updates to keep you informed and entertained.
      </p>
      <div className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
        <div
          className="flex flex-col items-center bg-primary_800/70 p-6 rounded-lg shadow-md hover:shadow-xl transition-all transform hover:scale-105 animate-fadeIn"
          style={{ "--fade-duration": "1.5s" }}
        >
          <FaMusic className="text-4xl text-secondaryLighter mb-4" />
          <h2 className="text-2xl font-bold text-primary_100 mb-3">
            Passion for Music
          </h2>
          <p className="text-primary_300 text-center">
            Metal music has been a significant part of my life. This site is a
            way to share my love for the genre and connect with fellow
            enthusiasts.
          </p>
        </div>
        <div
          className="flex flex-col items-center bg-primary_800/70 p-6 rounded-lg shadow-md hover:shadow-xl transition-all transform hover:scale-105 animate-fadeIn"
          style={{ "--fade-duration": "1.5s" }}
        >
          <FaHeart className="text-4xl text-secondaryLighter mb-4 hover:text-red-600 transition-all" />
          <h2 className="text-2xl font-bold text-primary_100 mb-3">
            Curated Collections
          </h2>
          <p className="text-primary_300 text-center">
            Each list is thoughtfully curated to include the best of metal
            music. From the latest releases to timeless classics, you'll find a
            wide variety of top picks.
          </p>
        </div>
        <div
          className="flex flex-col items-center bg-primary_800/70 p-6 rounded-lg shadow-md hover:shadow-xl transition-all transform hover:scale-105 animate-fadeIn"
          style={{ "--fade-duration": "2s" }}
        >
          <FaStar className="text-4xl text-secondaryLighter mb-4 hover:text-yellow-500 transition-all" />
          <h2 className="text-2xl font-bold text-primary_100 mb-3">
            Top Picks
          </h2>
          <p className="text-primary_300 text-center">
            Discover top albums and EPs, explore new music, and enjoy detailed
            descriptions and reviews. My aim is to create a rich and rewarding
            music exploration experience.
          </p>
        </div>
        <div
          className="flex flex-col items-center bg-primary_800/70 p-6 rounded-lg shadow-md hover:shadow-xl transition-all transform hover:scale-105 animate-fadeIn"
          style={{ "--fade-duration": "2s" }}
        >
          <FaHeadphones className="text-4xl text-secondaryLighter mb-4" />
          <h2 className="text-2xl font-bold text-primary_100 mb-3">
            Exclusive Insights
          </h2>
          <p className="text-primary_300 text-center">
            Gain access to exclusive insights into the metal music scene. From
            interviews with artists to behind-the-scenes looks, I'm dedicated to
            bringing you closer to the music you love.
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col items-center animate-fadeIn">
        <div className="mt-16 text-center">
          <h2
            className="text-3xl font-bold mb-6 animate-fadeIn"
            style={{ "--fade-duration": "2.2s" }}
          >
            Future Plans
          </h2>
          <p
            className="text-primary_300 mb-8 max-w-lg mx-auto animate-fadeIn"
            style={{ "--fade-duration": "2.4s" }}
          >
            I am always working on expanding and improving Diazepam. Stay tuned
            for future updates, new lists, and exciting features that will
            enhance your experience on the site.
          </p>
        </div>
        <a
          href="/lists"
          className="bg-secondaryBase text-primary_100 py-3 px-8 rounded-full hover:bg-secondaryLight transition duration-300 animate-fadeIn"
          style={{ "--fade-duration": "2.6s" }}
        >
          Explore Music Lists
        </a>
      </div>
    </div>
  );
}
