import AlbumsList from "../_components/AlbumsList";
import { email, telegram } from "../_lib/vars";
import ScrollToTopButton from "../_components/ScrollToTopButton";
import { Suspense } from "react";
import Spinner from "../_components/Spinner";

export const metadata = {
  title: "Top 100 | Diazepam",
};

function A({ children, href }) {
  return (
    <a
      className="underline underline-offset-2 text-secondaryLight hover:text-secondaryLight/80 transition-all"
      href={href}
    >
      {children}
    </a>
  );
}

export default function Page() {
  return (
    <div
      id="scrollContainer"
      className="bg-primary_900/70 sm:h-[82vh] h-[85vh] px-6 sm:px-56 py-4 overflow-scroll no-scrollbar flex flex-col items-center relative"
    >
      <h3 className="animate-fadeIn sm:text-xl text-base text-primary_100 tracking-wider">
        This is my personal ranking of the best rock and metal albums of 2024.
        My selections are entirely based on my own taste and not on technical
        critique. I would love to hear your thoughts and see your own list! Feel
        free to reach out to me via <A href={email}>email</A> or through the
        link in my <A href={telegram}>Telegram channel</A> bio.
      </h3>
      <p
        style={{ "--fade-duration": "1.5s" }}
        className="animate-fadeIn mt-4 sm:text-md text-primary_100 tracking-wider w-[90%]"
      >
        Although the last two albums (BMTH and LP) didn&apos;t make it to my top
        100 albums of 2024, I&apos;ve included them to ensure this list features
        some of the year&apos;s most popular releases. My rankings and ratings
        are made without considering the albums&apos; lyrics or any
        controversies surrounding them.
      </p>
      <Suspense fallback={<Spinner />}>
        <AlbumsList />
      </Suspense>
      <div className="flex flex-col  bg-primary_900/70 rounded-lg">
        <p
          style={{ "--fade-duration": "1.5s" }}
          className="animate-fadeIn mt-4 sm:text-base text-sm text-primary_100 tracking-wider px-6 py-4 "
        >
          These are my top metal albums of 2024. Albums released in December
          2024 will be included in the 2025 list. Some rankings might be
          unpopular, for instance, Knocked Loose at 70th or Poppy sharing a spot
          with Opeth, but as I mentioned, this is my personal ranking and not a
          critical assessment. I hope you enjoy exploring these albums as much
          as I did!
        </p>
        <div className="flex gap-2 justify-center items-center px-10 py-10">
          <span className="tracking-widest text-lg border-b-2 border-[#1DB954] p-2 hover:px-4 transition-all">
            Listen all in one playlist :
          </span>
          <a
            href="https://open.spotify.com/playlist/3jlxokPhhEpuwjGWyoQkpC?si=bbb90d80284046cc"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1DB954] text-primary_100 py-3 px-6 rounded-full hover:bg-[#1DB954]/60 transition duration-300"
          >
            Spotify
          </a>
        </div>
      </div>
      <ScrollToTopButton />
    </div>
  );
}
