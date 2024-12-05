import { rapAlbums as albums } from "../_lib/albums";
import Album from "../_components/Album";

function RapList() {
  return (
    <div className="mt-8 px-2">
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
          />
        ))}
    </div>
  );
}

export default RapList;
