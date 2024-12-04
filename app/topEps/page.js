import EpsList from "../_components/EpsList";
import { email, telegram } from "../_lib/vars";
import ScrollToTopButton from "../_components/ScrollToTopButton";

export const metadata = {
  title: "Top EPs | Diazepam",
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
        This is my personal ranking of the best rock and metal EPs of 2024. My
        selections are entirely based on my own taste and not on technical
        critique. I would love to hear your thoughts and see your own list! Feel
        free to reach out to me via <A href={email}>email</A> or through the
        link in my <A href={telegram}>Telegram channel</A> bio.
      </h3>
      <EpsList />
      <ScrollToTopButton />
      <div className="flex gap-2 justify-center items-center px-10 py-10">
        <span className="tracking-widest text-lg border-b-2 border-[#1DB954] p-2 hover:px-4 transition-all">
          Listen all in one playlist :
        </span>
        <a
          href="https://open.spotify.com/playlist/0BgoEKfqMNU21BXKnSFgPJ?si=cSw7RRXgSlSXxwIolTaTYg"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#1DB954] text-primary_100 py-3 px-6 rounded-full hover:bg-[#1DB954]/60 transition duration-300"
        >
          Spotify
        </a>
      </div>
    </div>
  );
}
