import Link from "next/link";
import { FaCompactDisc, FaHeadphonesAlt, FaStar } from "react-icons/fa";
import { GiGuitar, GiMicrophone, GiPodiumWinner } from "react-icons/gi";
import { telegram } from "../_lib/vars";

export const metadata = {
  title: "Lists | Diazepam",
};

function ListLink({ href, icon: Icon, title, description }) {
  return (
    <Link href={href} passHref>
      <div className="px-6 py-3 mb-6 bg-primary_800/70 m-[0_auto] w-[80%] md:w-full rounded-lg shadow-md hover:shadow-xl hover:bg-primary_700 transition-all cursor-pointer transform hover:scale-105">
        <div className="flex items-center mb-3">
          <Icon className="text-secondaryLighter text-4xl mr-4" />
          <h2 className="text-2xl font-bold text-secondaryLighter tracking-wide hover:text-secondaryLight">
            {title}
          </h2>
        </div>
        <p className="text-primary_200">{description}</p>
      </div>
    </Link>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen bg-primary_900/90 text-primary_100 flex flex-col items-center py-14 px-4 sm:px-20 animate-fadeIn">
      <h1 className="text-5xl font-extrabold mb-10 animate-fadeIn">
        My 2024 Music Lists
      </h1>
      <p className="text-lg text-primary_300 mb-12 max-w-3xl text-center">
        Discover carefully selected collections of the best music across various
        genres on this site. Here, you&apos;ll find detailed lists featuring
        some of the most remarkable albums and EPs released recently. Each
        collection is thoughtfully put together to highlight standout releases
        and offer a wide range of musical experiences.
      </p>
      <div className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 sm:gap-8 animate-slideLeft">
        <ListLink
          href="/top100"
          icon={GiPodiumWinner}
          title="Top 100 Albums"
          description="A comprehensive list of my favorite 100 albums of 2024, spanning various genres and styles."
        />
        <ListLink
          href="/topEps"
          icon={FaCompactDisc}
          title="Top EPs"
          description="An exclusive list of the best EPs released in 2024, showcasing emerging talents and unique sounds."
        />
        <ListLink
          href="/topPop"
          icon={FaHeadphonesAlt}
          title="Top Pop Albums"
          description="The top pop albums that defined the year 2024, with catchy tunes and memorable performances."
        />
        <ListLink
          href="/topRap"
          icon={GiMicrophone}
          title="Top Rap Albums"
          description="Highlighting the most impactful rap albums of 2024, featuring powerful lyrics and groundbreaking beats."
        />
      </div>
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Join the Community!</h2>
        <p className="text-primary_300 mb-8 max-w-lg mx-auto">
          Share your own music lists and discover those of others. Be a part of
          our growing community of music enthusiasts.
        </p>
        <a
          href={telegram}
          className="bg-secondaryBase text-primary_100 py-3 px-8 rounded-full hover:bg-secondaryLight transition duration-300"
        >
          Join Now
        </a>
      </div>
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Suggest a List!</h2>
        <p className="text-primary_300 mb-8 max-w-lg mx-auto">
          Have an idea for a new music list? Let us know and we&apos;ll consider
          adding it to the site. Your suggestions help us grow and improve!
        </p>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=emad.lashkar@gmail.com"
          className="bg-secondaryBase text-primary_100 py-3 px-8 rounded-full hover:bg-secondaryLight transition duration-300"
        >
          Suggest Now
        </a>
      </div>
    </div>
  );
}
