import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { aoty, telegram } from "./_lib/vars";
import FeaturedAlbums from "./_components/FeaturedAlbums";

export const metadata = {
  title: "Diazepam",
};

export default function Home() {
  return (
    <div className="w-full h-[100%] flex flex-col items-center pb-10 sm:px-12 bg-gradient-to-b from-primary_900/50 via-primary_900/70 to-primary_950/90 overflow-scroll no-scrollbar">
      <h2 className="sm:text-4xl text-2xl pt-8 text-primary_100 sm:tracking-widest tracking-wide text-center font-extrabold animate-fadeIn">
        Welcome to Diazepam <br /> A Hub for the Metal Music
      </h2>
      <p className="text-lg text-primary_300 mt-4 max-w-3xl text-center animate-slideLeft">
        Dive deep into the world of metal music with our curated collections of
        the finest albums and EPs. Stay tuned for more features and enhancements
        coming soon!
      </p>
      <div className="p-10 mt-16 sm:mt-12 sm:grid sm:grid-cols-[3fr_2fr] w-full h-full animate-fadeIn">
        <div className="flex flex-col justify-center mb-14 sm:mb-0 sm:pr-10">
          <p className="sm:w-[80%] text-center sm:text-left font-thin tracking-wide text-base text-primary_200">
            New top lists will be added to this website by the end of December
            2024. Plus, expect more features and enhancements to come. Explore
            our existing lists and get ready for an exceptional musical journey!
          </p>
          <Link
            href="/about"
            className="mt-8 sm:mt-12 px-6 py-4 bg-secondaryBase text-primary_100 text-lg font-bold rounded-md hover:bg-secondaryLight transition duration-300 text-center"
          >
            More About Diazepam
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <a
            href={telegram}
            className="flex flex-row gap-3 items-center bg-primary_700/70 text-primary_100 sm:text-lg text-sm font-medium px-6 py-4 rounded-md hover:bg-primary_700 transition-all"
          >
            <FaArrowRight />
            Telegram Channel
          </a>
          <Link
            href="/lists/top100"
            className="flex flex-row gap-3 items-center bg-secondaryDarker/80 text-secondaryLighter sm:text-lg text-sm font-medium px-6 py-4 rounded-md hover:bg-secondaryDarker transition-all"
          >
            <FaArrowRight />
            My 2024 Top 100 Albums
          </Link>
          <Link
            href="/lists/topEps"
            className="flex flex-row gap-3 items-center bg-primary_700/70 text-primary_100 sm:text-lg text-sm font-medium px-6 py-4 rounded-md hover:bg-primary_700 transition-all"
          >
            <FaArrowRight />
            My 2024 Top EPs
          </Link>
          <Link
            href="/lists/topRap"
            className="flex flex-row gap-3 items-center bg-primary_700/70 text-primary_100 sm:text-lg text-sm font-medium px-6 py-4 rounded-md hover:bg-primary_700 transition-all"
          >
            <FaArrowRight />
            2024 Top Rap Albums
          </Link>
          <a
            href={aoty}
            className="flex flex-row gap-3 items-center bg-primary_700/70 text-primary_100 sm:text-lg text-sm font-medium px-6 py-4 rounded-md hover:bg-primary_700 transition-all"
          >
            <FaArrowRight />
            My AOTY Page
          </a>
        </div>
      </div>
      <FeaturedAlbums />
      <div className="mt-16 text-center">
        <h2 className="text-4xl font-bold mb-6">Upcoming Features</h2>
        <p className="text-primary_300 mb-8 max-w-lg mx-auto">
          I&apos;m constantly working to improve this site. Here&apos;s a sneak
          peek at some of the features we&apos;re planning to roll out soon.
        </p>
        <ul className="list-disc list-inside sm:text-left sm:max-w-2xl max-w-xs text-center mx-auto text-primary_200">
          <li className="mb-4">
            Interactive playlists that you can customize and share.
          </li>
          <li className="mb-4">
            In-depth album reviews and ratings by our team of experts.
          </li>
          <li className="mb-4">
            Exclusive interviews with top artists and bands.
          </li>
          <li className="mb-4">
            Enhanced search functionality to help you find your favorite music
            faster.
          </li>
          <li className="mb-4">
            Monthly newsletters with the latest news, trends, and releases in
            the metal world.
          </li>
        </ul>
      </div>
      <div className="mt-16 text-center">
        <h2 className="text-4xl font-bold mb-6">Join the Community</h2>
        <p className="text-primary_300 mb-8 max-w-lg mx-auto">
          Be part of our growing community of metal music enthusiasts. Share
          your thoughts, join discussions, and stay updated with the latest
          news.
        </p>
        <Link
          href="https://t.me/emdpills"
          className="bg-secondaryBase text-primary_100 py-3 px-8 rounded-full hover:bg-secondaryLight transition duration-300"
        >
          Join Now
        </Link>
      </div>
    </div>
  );
}
