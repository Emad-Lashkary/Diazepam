import LinkToFeedback from "../../_components/LinkToFeedback";
import ListOnSpotify from "../../_components/ListOnSpotify";
import ScrollToTopButton from "../../_components/ScrollToTopButton";
import RapList from "./RapList";

export const metadata = {
  title: "Top Rap | Diazepam",
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
        A special shoutout to Radmehr for putting together and ranking this
        incredible list of the top 20 rap albums of 2024. Make sure to check out
        his channel for more amazing content and insights into the world of
        music. Visit{" "}
        <A href="https://t.me/EverythingBurnsDownAroundMe">
          Radmehr&apos;s Channel
        </A>
        .
      </h3>
      <RapList displayName="rapAlbum" />
      <ScrollToTopButton />
      <ListOnSpotify href="https://open.spotify.com/playlist/0BgoEKfqMNU21BXKnSFgPJ?si=cSw7RRXgSlSXxwIolTaTYg" />
      <LinkToFeedback />
    </div>
  );
}
