import { FaPlay, FaMusic } from "react-icons/fa";

function RecentlyPlayed({
  songs,
  setCurrentSongIndex,
  currentSongIndex,
}) {
  return (
    <section className="px-8 mt-16 mb-10">

      {/* Section Header */}

      <div className="flex items-center justify-between mb-8">

        <div>

          <p className="text-cyan-400 text-sm tracking-[0.25em] uppercase">
            Your Collection
          </p>

          <h2 className="text-4xl font-bold text-white mt-2">
            Recently Played
          </h2>

        </div>

        <FaMusic className="text-violet-400 text-3xl" />

      </div>

      {songs.length === 0 ? (
        <div className="text-center py-20">

          <h2 className="text-white text-2xl font-semibold">
            No songs found
          </h2>

          <p className="text-slate-400 mt-3">
            Try searching for another title.
          </p>

        </div>
      ) : (
        <div className="space-y-5">

          {songs.slice(0, 4).map((song) => (

            <div
              key={song.id}
              onClick={() => setCurrentSongIndex(song.id - 1)}
              className={`
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                cursor-pointer
                transition-all
                duration-500
                hover:-translate-y-1
                hover:scale-[1.01]

                ${
                  currentSongIndex === song.id - 1
                    ? "border-violet-500 bg-violet-500/10 shadow-[0_0_35px_rgba(139,92,246,.35)]"
                    : "border-white/10 bg-white/5 hover:border-cyan-400/40"
                }
              `}
            >

              {/* Glow */}

              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition
                  duration-500
                  bg-gradient-to-r
                  from-violet-500/10
                  to-cyan-400/10
                "
              />

              <div className="relative flex items-center p-5">

                {/* Cover */}

                <img
                  src={song.image}
                  alt={song.title}
                  className="
                    w-24
                    h-24
                    rounded-2xl
                    object-cover
                    shadow-xl
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />

                {/* Text */}

                <div className="ml-6 flex-1">

                  <h3 className="text-white text-xl font-bold">
                    {song.title}
                  </h3>

                  <p className="text-slate-400 mt-2">
                    {song.artist}
                  </p>

                </div>

                {/* Playing Status */}

                {currentSongIndex === song.id - 1 ? (

                  <div className="flex items-center gap-3">

                    <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />

                    <span className="text-cyan-400 font-medium">
                      Playing
                    </span>

                  </div>

                ) : (

                  <button
                    className="
                      w-14
                      h-14
                      rounded-2xl
                      bg-gradient-to-r
                      from-violet-500
                      to-cyan-400
                      flex
                      items-center
                      justify-center
                      text-white
                      opacity-0
                      group-hover:opacity-100
                      transition-all
                      duration-500
                      group-hover:scale-110
                    "
                  >
                    <FaPlay />
                  </button>

                )}

              </div>

            </div>

          ))}

        </div>
      )}

    </section>
  );
}

export default RecentlyPlayed;