import { FaPlay, FaMusic, FaArrowRight } from "react-icons/fa";

function RecentlyPlayed({
  songs,
  setCurrentSongIndex,
  currentSongIndex,
}) {
  return (
    <section className="px-10 mt-20 mb-40">

      {/* Header */}

      <div className="flex items-end justify-between mb-10">

        <div>

          <span className="text-cyan-400 uppercase tracking-[0.25em] text-sm">
            Continue Listening
          </span>

          <h2 className="text-5xl font-bold text-white mt-3">
            Pick up where you left off
          </h2>

          <p className="text-slate-400 mt-3 text-lg">
            Your recently played favorites.
          </p>

        </div>

        <button
          className="
            flex
            items-center
            gap-2
            text-violet-400
            hover:text-cyan-400
            transition
          "
        >
          View All

          <FaArrowRight />
        </button>

      </div>

      {songs.length === 0 ? (

        <div className="text-center py-24">

          <FaMusic className="text-6xl text-slate-600 mx-auto mb-5" />

          <h2 className="text-2xl font-bold text-white">
            Nothing found
          </h2>

          <p className="text-slate-500 mt-3">
            Try searching for another song.
          </p>

        </div>

      ) : (

        <div className="space-y-6">

          {songs.slice(0, 4).map((song) => (

            <div
              key={song.id}
              onClick={() => setCurrentSongIndex(song.id - 1)}
              className={`
                relative
                group
                overflow-hidden
                rounded-[30px]
                border
                cursor-pointer
                transition-all
                duration-500

                ${
                  currentSongIndex === song.id - 1
                    ? "border-violet-500 bg-violet-500/10 shadow-[0_0_35px_rgba(139,92,246,.35)]"
                    : "border-white/10 bg-white/5 hover:bg-white/10 hover:border-cyan-400/40 hover:-translate-y-1"
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
                  via-transparent
                  to-cyan-400/10
                "
              />

              <div className="relative flex items-center px-8 py-6">

                {/* Cover */}

                <img
                  src={song.image}
                  alt={song.title}
                  className="
                    w-28
                    h-28
                    rounded-3xl
                    object-cover
                    shadow-2xl
                  "
                />

                {/* Song Details */}

                <div className="ml-8 flex-1">

                  <h3 className="text-2xl font-bold text-white">
                    {song.title}
                  </h3>

                  <p className="text-slate-400 mt-2">
                    {song.artist}
                  </p>

                  <div className="flex gap-3 mt-5">

                    <span className="px-3 py-1 rounded-full bg-white/5 text-xs text-slate-300">
                      Chill
                    </span>

                    <span className="px-3 py-1 rounded-full bg-white/5 text-xs text-slate-300">
                      2026
                    </span>

                  </div>

                </div>

                {/* Right Side */}

                {currentSongIndex === song.id - 1 ? (

                  <div className="flex items-center gap-3">

                    <div className="flex gap-1">

                      <div className="w-1 h-5 bg-cyan-400 rounded animate-pulse"></div>
                      <div className="w-1 h-8 bg-cyan-400 rounded animate-pulse delay-75"></div>
                      <div className="w-1 h-4 bg-cyan-400 rounded animate-pulse delay-150"></div>

                    </div>

                    <span className="text-cyan-400 font-semibold">
                      Playing
                    </span>

                  </div>

                ) : (

                  <button
                    className="
                      w-16
                      h-16
                      rounded-full
                      bg-gradient-to-r
                      from-violet-500
                      to-cyan-400
                      flex
                      items-center
                      justify-center
                      text-white
                      opacity-0
                      group-hover:opacity-100
                      group-hover:scale-110
                      transition-all
                      duration-500
                      shadow-[0_0_25px_rgba(139,92,246,.45)]
                    "
                  >
                    <FaPlay className="ml-1" />
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