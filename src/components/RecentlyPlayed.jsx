import songs from "../data/songs";
import SongCard from "./SongCard";

function RecentlyPlayed({ setCurrentSong }) {
  return (
    <div className="px-8 mt-12">

      <h2 className="text-white text-2xl font-bold mb-6">
        Recently Played
      </h2>

      <div className="grid grid-cols-4 gap-6">

        {songs.slice(0, 4).map((song) => (
          <div
            key={song.id}
            onClick={() => setCurrentSong(song)}
          >
            <SongCard
              image={song.image}
              title={song.title}
              artist={song.artist}
            />
          </div>
        ))}

      </div>

    </div>
  );
}

export default RecentlyPlayed;