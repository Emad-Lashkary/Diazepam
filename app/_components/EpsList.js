import { albums } from "../_lib/albums";
import Album from "./Album";

function EpsList() {
  const eps = albums.filter((album) => album.type === "ep");

  return (
    <div className="mt-8 px-2">
      {eps
        .slice()
        .reverse()
        .map((album) => (
          <Album
            key={album.epRank}
            artist={album.artist}
            album={album.album}
            rank={album.epRank}
            myRate={album.myRate}
            criticsRate={album.criticsRate}
            dateRelease={album.dateRelease}
            cover={album.cover}
            spotifyLink={album.spotifyLink}
            genres={album.genres}
          />
        ))}
    </div>
  );
}

export default EpsList;
