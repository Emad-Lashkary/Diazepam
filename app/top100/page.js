import AlbumsList from "../_components/AlbumsList";
import { email, telegram } from "../_lib/vars";
import ScrollToTopButton from "../_components/ScrollToTopButton";

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
      className="bg-primary_900/70 sm:h-[80vh] h-[85vh] px-6 sm:px-56 py-4 overflow-scroll no-scrollbar flex flex-col items-center relative"
    >
      <h3 className="sm:text-xl text-base text-primary_100 tracking-wider">
        This is my personal ranking of the best rock and metal albums of 2024.
        My selections are entirely based on my own taste and not on technical
        critique. I would love to hear your thoughts and see your own list! Feel
        free to reach out to me via <A href={email}>email</A> or through the
        link in my <A href={telegram}>Telegram channel</A> bio.
      </h3>
      <p className="mt-4 sm:text-md text-primary_100 tracking-wider w-[90%]">
        Although the last two albums (BMTH and LP) didn&apos;t make it to my top
        100 albums of 2024, I&apos;ve included them to ensure this list features
        some of the year&apos;s most popular releases. My rankings and ratings
        are made without considering the albums&apos; lyrics or any
        controversies surrounding them.
      </p>
      <AlbumsList />
      <ScrollToTopButton />
    </div>
  );
}
