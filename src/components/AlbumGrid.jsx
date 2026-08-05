import { FaPlay, FaFire, FaHeadphones } from "react-icons/fa";

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
                  rounded-[32px]
                  cursor-pointer
                  group
                  transition-all
                  duration-300
                  ease-out

                  ${
                    large
                      ? "col-span-8"
                      : "col-span-4"
                  }
                  ${
                    currentSongIndex === song.id - 1
                      ? "ring-1 ring-violet-400/70 shadow-lg shadow-violet-500/20"
                      : "border border-white/10 hover:border-white/30"
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
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                {/* Overlay */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-black
                    via-black/60
                    to-black/20
                  "
                />

                {/* Content */}

                {large ? (

                  <div className="relative h-full flex items-center justify-between px-8">

                    {/* Left */}

                    <div className="max-w-md">

                      <span
                        className="
                          px-4
                          py-2
                          rounded-full
                          bg-white/10
                          text-sm
                          backdrop-blur
                        "
                      >
                        Editor's Choice
                      </span>

                      <h2 className="text-5xl font-black text-white mt-6">
                        {song.title}
                      </h2>

                      <p className="text-slate-300 mt-3">
                        {song.artist}
                      </p>

                      <button
                        className="
                          mt-8
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
                          transition
                          duration-300
                          group-hover:scale-105
                        "
                      >
                        <FaPlay className="ml-1" />
                      </button>

                    </div>

                    {/* Album Cover */}

                    <img
                      src={song.image}
                      alt={song.title}
                      className="
                        w-52
                        h-52
                        object-cover
                        rounded-[28px]
                        shadow-2xl
                        transition-all
                        duration-700
                        group-hover:scale-105
                      "
                    />

                  </div>

                ) : (

                  <div className="relative h-full flex flex-col justify-end p-6">

                    <h3 className="text-2xl font-bold text-white">
                      {song.title}
                    </h3>

                    <p className="text-slate-300 mt-2">
                      {song.artist}
                    </p>

                    <button
                      className="
                        absolute
                        top-5
                        right-5
                        w-12
                        h-12
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
                        transition-all
                        duration-300
                      "
                    >
                      <FaPlay className="ml-1" />
                    </button>

                  </div>

                )}

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
                      text-cyan-300
                      text-sm
                      animate-pulse
                    "
                  >
                    ● Playing
                  </div>

                )}

              </div>

            );

          })}

        </div>

      )}

    </section>
  );
}

export default AlbumGrid;