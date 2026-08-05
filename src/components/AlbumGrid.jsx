function AlbumGrid({
  songs,
  setCurrentSongIndex,
  currentSongIndex,
}) {
  const layouts = [
    "col-span-7 row-span-2",
    "col-span-5 row-span-1",
    "col-span-4 row-span-1",
    "col-span-8 row-span-1",
    "col-span-6 row-span-1",
    "col-span-6 row-span-1",
  ];

  return (
    <div className="px-8 mt-8 grid grid-cols-12 auto-rows-[170px] gap-5">

      {songs.length === 0 ? (
        <div className="col-span-12 text-center py-20">
          <h2 className="text-white text-2xl font-semibold">
            No songs found
          </h2>

          <p className="text-slate-400 mt-3">
            Try searching for another title or artist.
          </p>
        </div>
      ) : (
        songs.map((song, index) => {
          const layout = layouts[index % layouts.length];

          return (
            <div
              key={song.id}
              onClick={() => setCurrentSongIndex(song.id - 1)}
              className={`
                ${layout}
                group
                relative
                overflow-hidden
                rounded-3xl
                cursor-pointer
                transition-all
                duration-500
                hover:-translate-y-2
                hover:scale-[1.02]

                ${
                  currentSongIndex === song.id - 1
                    ? "border border-violet-500 bg-violet-500/10 shadow-[0_0_40px_rgba(139,92,246,0.4)]"
                    : "border border-white/10 bg-white/5 hover:border-cyan-400/40"
                }
              `}
            >
              {/* Background Image */}
              <img
                src={song.image}
                alt={song.title}
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-110
                "
              />

              {/* Gradient Overlay */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black
                  via-black/40
                  to-transparent
                "
              />

              {/* Glow Overlay */}
              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-500
                  bg-gradient-to-br
                  from-violet-500/10
                  to-cyan-400/10
                "
              />

              {/* Song Details */}
              <div className="absolute bottom-0 left-0 p-6">

                <h2 className="text-white text-2xl font-bold drop-shadow-lg">
                  {song.title}
                </h2>

                <p className="text-slate-300 mt-2">
                  {song.artist}
                </p>

              </div>

              {/* Playing Indicator */}
              {currentSongIndex === song.id - 1 && (
                <div
                  className="
                    absolute
                    top-5
                    right-5
                    w-4
                    h-4
                    rounded-full
                    bg-cyan-400
                    shadow-[0_0_20px_rgba(34,211,238,0.8)]
                    animate-pulse
                  "
                />
              )}
            </div>
          );
        })
      )}

    </div>
  );
}

export default AlbumGrid;