import EpsList from "./EpsList";
import { email, telegram } from "../../_lib/vars";
import ScrollToTopButton from "../../_components/ScrollToTopButton";
import ListOnSpotify from "../../_components/ListOnSpotify";
import LinkToFeedback from "../../_components/LinkToFeedback";

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
      className="bg-primary_900/70 h-full px-6 sm:px-56 py-4 overflow-scroll no-scrollbar flex flex-col items-center relative"
    >
      <h3 className="animate-fadeIn sm:text-xl text-base text-primary_100 tracking-wider">
        This is my personal ranking of the best rock and metal EPs of 2024. My
        selections are entirely based on my own taste and not on technical
        critique. I would love to hear your thoughts and see your own list! Feel
        free to reach out to me via <A href={email}>email</A> or through the
        link in my <A href={telegram}>Telegram channel</A> bio.
      </h3>
      <EpsList displayName="ep" />
      <ScrollToTopButton />
      <ListOnSpotify href="https://open.spotify.com/playlist/0BgoEKfqMNU21BXKnSFgPJ?si=cSw7RRXgSlSXxwIolTaTYg" />
      <LinkToFeedback />
    </div>
  );
}
