import SongCard from "./SongCard";

function RecentlyPlayed({
  songs,
  setCurrentSongIndex,
  currentSongIndex,
}) {  
  return (
    <div className="px-8 mt-12">

      <h2 className="text-white text-2xl font-bold mb-6">
        Recently Played
      </h2>

      {songs.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-white text-xl font-semibold">
            No songs found
          </h2>

          <p className="text-gray-400 mt-2">
            Try searching for another title or artist.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-6">

          {songs.slice(0, 4).map((song) => (
            <div
              key={song.id}
              onClick={() => setCurrentSongIndex(song.id - 1)}
            >
            <SongCard
              image={song.image}
              title={song.title}
              artist={song.artist}
              isPlaying={currentSongIndex === song.id - 1}
            />
            </div>
          ))}

        </div>
      )}

    </div>
  );
}

export default RecentlyPlayed;