import { albums } from "../../_lib/albums";
import Album from "../../_components/Album";

function AlbumsList({ displayName }) {
  return (
    <div className="mt-8 px-0">
      {albums
        .slice()
        .reverse()
        .map((album) => (
          <Album
            key={album.rank}
            artist={album.artist}
            album={album.album}
            rank={album.rank}
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

export default AlbumsList;
