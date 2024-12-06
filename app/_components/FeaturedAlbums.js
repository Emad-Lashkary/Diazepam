import Link from "next/link";
import { albums, popAlbums, rapAlbums } from "../_lib/albums";
import Image from "next/image";

function FeaturedAlbums() {
  const rap = rapAlbums.at(0);
  const metal = albums.at(0);
  const pop = popAlbums.at(0);

  console.log(metal);
  return (
    <div className="mt-28 text-center mx-4">
      <h2 className="text-4xl font-bold mb-6">Best Of Each Genre</h2>
      <p className="text-primary_300 mb-8 max-w-lg mx-auto">
        Discover some of the standout albums that have defined each genre scene.
        From legendary releases to modern masterpieces, explore the music that
        has made a lasting impact.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="scale-95 flex flex-col items-center bg-primary_800/90 p-6 rounded-lg shadow-md hover:shadow-xl transition-all transform hover:scale-100">
          <div className="relative sm:w-64 sm:h-64 w-60 h-60 md:w-48 md:h-48 mb-4 md:mb-0">
            <Image
              src={rap.cover}
              alt={`${rap.album} cover`}
              fill
              quality={80}
              className="rounded-lg hover:scale-105 transition-all"
            />
          </div>
          <h3 className="text-2xl font-semibold text-primary_100 mb-3">
            {rap.album}
          </h3>
          <p className="text-primary_300 mb-4">{rap.artist}</p>
          <p className="text-primary_200/90 mb-6 text-xs">
            &quot;SCRAPYA&quot; by Quadeca stands out as a groundbreaking album,
            melding raw emotion with innovative beats. This 2024 release pushes
            the boundaries of rap, showcasing Quadeca&apos;s growth and artistic
            versatility.
          </p>
          <Link
            href="/lists/topRap"
            className="text-secondaryLighter hover:text-secondaryLight transition duration-300"
          >
            Complete Rap list
          </Link>
        </div>

        <div className="flex flex-col items-center bg-primary_900 p-6 rounded-lg shadow-md hover:shadow-xl transition-all transform hover:scale-105">
          <div className="relative sm:w-64 sm:h-64 w-60 h-60 md:w-48 md:h-48 mb-4 md:mb-0">
            <Image
              src={metal.cover}
              alt={`${metal.album} cover`}
              fill
              quality={80}
              className="rounded-lg hover:scale-105 transition-all"
            />
          </div>
          <h3 className="text-2xl font-semibold text-primary_100 mb-3">
            {metal.album}
          </h3>
          <p className="text-primary_300 mb-4">{metal.artist}</p>
          <p className="text-primary_200/90 mb-6 text-xs">
            &quot;Die Urkatastrophe&quot; by Kanonenfieber is a masterpiece that
            brilliantly captures the raw and haunting realities of war. This
            album, with its evocative storytelling and powerful compositions,
            stands as a significant work in the metal genre. It not only
            showcases Kanonenfieber&apos;s extraordinary talent but also pushes
            the boundaries of musical expression, making it an unforgettable
            listening experience.
          </p>
          <Link
            href="/lists/top100"
            className="text-secondaryLighter hover:text-secondaryLight transition duration-300"
          >
            Complete Metal list
          </Link>
        </div>
        <div className="scale-95 flex flex-col items-center bg-primary_800/90 p-6 rounded-lg shadow-md hover:shadow-xl transition-all transform hover:scale-100">
          <div className="relative sm:w-64 sm:h-64 w-60 h-60 md:w-48 md:h-48 mb-4">
            <Image
              src={pop.cover}
              alt={`${pop.album} cover`}
              fill
              quality={80}
              className="rounded-lg hover:scale-105 transition-all"
            />
          </div>
          <h3 className="text-2xl font-semibold text-primary_100 mb-3">
            {pop.album}
          </h3>
          <p className="text-primary_300 mb-4">{pop.artist}</p>
          <p className="text-primary_200/90 mb-6 text-xs">
            &quot;BRAT&quot; by Charli XCX is a pop album that stands out for
            its bold, eclectic sound and raw, personal lyrics. Released in June
            2024, it captures the essence of youthful rebellion and
            Charli&apos;s evolution as an artist, solidifying her place as a pop
            icon with its sheer perfection in the genre.
          </p>
          <Link
            href="/lists/topPop"
            className="text-secondaryLighter hover:text-secondaryLight transition duration-300"
          >
            Complete pop list
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FeaturedAlbums;
