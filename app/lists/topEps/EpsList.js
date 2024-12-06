import { albums } from "../../_lib/albums";
import Album from "../../_components/Album";

function EpsList({ displayName }) {
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
            displayName={displayName}
          />
        ))}
    </div>
  );
}

export default EpsList;
