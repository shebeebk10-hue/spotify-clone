function AlbumGrid({
  songs,
  setCurrentSongIndex,
  currentSongIndex,
}) {
    return (
    <div className="px-8 mt-6 grid grid-cols-3 gap-4">

      {songs.length === 0 ? (
        <div className="col-span-3 text-center py-12">
          <h2 className="text-white text-xl font-semibold">
            No songs found
          </h2>

          <p className="text-gray-400 mt-2">
            Try searching for another title or artist.
          </p>
        </div>
      ) : (
        songs.map((song, index) => (
          <div
            key={song.id}
            onClick={() => setCurrentSongIndex(song.id - 1)}
            className={`
              group
              h-20
              rounded-md
              overflow-hidden
              flex
              items-center
              cursor-pointer
              transition-all
              duration-300

              ${
                currentSongIndex === song.id - 1
                  ? "bg-violet-500/20 border border-violet-500 shadow-[0_0_20px_rgba(139,92,246,0.35)]"
                  : "bg-[#2a2a2a]/80 hover:bg-[#3a3a3a]"
              }
            `}
          >
            <img
              src={song.image}
              alt={song.title}
              className="
                w-20
                h-20
                object-cover
                flex-shrink-0
              "
            />

            <div className="px-4 overflow-hidden">
              <h3 className="text-white font-semibold truncate">
                {song.title}
              </h3>

              <p className="text-gray-400 text-sm truncate">
                {song.artist}
              </p>
            </div>
          </div>
        ))
      )}

    </div>
  );
}

export default AlbumGrid;