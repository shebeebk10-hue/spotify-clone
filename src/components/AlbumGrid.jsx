import { FaPlay, FaFire, FaHeadphones, FaClock } from "react-icons/fa";

function AlbumGrid({
  songs,
  setCurrentSongIndex,
  currentSongIndex,
}) {
  return (
    <section className="px-8 mt-12">

      {/* Header */}

      <div className="flex items-end justify-between mb-8">

        <div>
          <p className="text-orange-400 uppercase tracking-[0.25em] text-sm font-semibold">
            Trending Now
          </p>

          <h2 className="text-4xl font-black text-white mt-2">
            Discover What's Hot
          </h2>

          <p className="text-slate-400 mt-2">
            Curated playlists and trending releases.
          </p>
        </div>

        <FaFire className="text-3xl text-orange-400" />

      </div>

      {songs.length === 0 ? (

        <div className="text-center py-20">

          <FaHeadphones className="mx-auto text-5xl text-slate-600 mb-5" />

          <h2 className="text-2xl font-bold text-white">
            No songs found
          </h2>

          <p className="text-slate-400 mt-3">
            Try searching another song.
          </p>

        </div>

      ) : (

        <div className="grid grid-cols-12 gap-6 auto-rows-[240px]">

          {songs.map((song, index) => {

            const large = index % 4 === 0 || index % 4 === 3;

            return (

              <div
                key={song.id}
                onClick={() => setCurrentSongIndex(song.id - 1)}
                className={`
                  relative
                  overflow-hidden
                  rounded-[30px]
                  cursor-pointer
                  group
                  transition-all
                  duration-500
                  hover:-translate-y-1

                  ${large ? "col-span-8" : "col-span-4"}

                  ${
                    currentSongIndex === song.id - 1
                      ? "ring-2 ring-violet-500 shadow-[0_0_30px_rgba(139,92,246,.35)]"
                      : "border border-white/10 hover:border-cyan-400/40"
                  }
                `}
              >

                {/* Background */}

                <img
                  src={song.image}
                  alt={song.title}
                  className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover
                    transition-all
                    duration-700
                    group-hover:scale-110
                  "
                />

                {/* Overlay */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-black/95
                    via-black/55
                    to-black/20
                  "
                />

                {/* Playing */}

                {currentSongIndex === song.id - 1 && (

                  <div
                    className="
                      absolute
                      top-5
                      left-5
                      px-4
                      py-2
                      rounded-full
                      bg-cyan-500/20
                      backdrop-blur-xl
                      text-cyan-300
                      text-sm
                      animate-pulse
                      z-20
                    "
                  >
                    ● Playing
                  </div>

                )}

                {/* Content */}

                <div className="relative h-full flex flex-col justify-end p-8">

                  <span
                    className="
                      inline-block
                      w-fit
                      px-4
                      py-2
                      rounded-full
                      bg-white/10
                      backdrop-blur-xl
                      text-xs
                      text-white
                      mb-5
                    "
                  >
                    {large ? "Editor's Choice" : "Trending"}
                  </span>

                  <h2
                    className={`
                      text-white
                      font-black
                      leading-tight

                      ${
                        large
                          ? "text-5xl"
                          : "text-3xl"
                      }
                    `}
                  >
                    {song.title}
                  </h2>

                  <p className="text-slate-300 mt-2">
                    {song.artist}
                  </p>

                  <div className="flex items-center justify-between mt-7">

                    <div className="flex items-center gap-2 text-slate-400">

                      <FaClock className="text-xs" />

                      <span className="text-sm">
                        {song.duration}
                      </span>

                    </div>

                    <button
                      className="
                        w-14
                        h-14
                        rounded-full
                        bg-gradient-to-r
                        from-violet-500
                        to-cyan-400
                        flex
                        items-center
                        justify-center
                        text-white

                        translate-y-5
                        opacity-0

                        group-hover:translate-y-0
                        group-hover:opacity-100
                        group-hover:scale-110

                        transition-all
                        duration-400
                      "
                    >
                      <FaPlay className="ml-1" />
                    </button>

                  </div>

                </div>

              </div>

            );

          })}

        </div>

      )}

    </section>
  );
}

export default AlbumGrid;