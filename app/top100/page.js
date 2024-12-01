import AlbumsList from "../_components/AlbumsList";
import { email, telegram } from "../_lib/vars";

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

export default function page() {
  return (
    <div className="bg-primary_900/85 sm:h-[80vh] h-[85vh] px-6 sm:px-56 py-4 overflow-scroll no-scrollbar">
      <h3 className="sm:text-xl text-base text-primary_100 tracking-wider">
        This is my personal ranking of the best rock and metal albums of 2024.
        My selections are entirely based on my own taste and not on technical
        critique. I would love to hear your thoughts and see your own list! Feel
        free to reach out to me via <A href={email}>email</A> or through the
        link in my <A href={telegram}>Telegram channel</A> bio.
      </h3>
      <AlbumsList />
    </div>
  );
}
