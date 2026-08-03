import songs from "../data/songs";

function Hero({ currentSong, setCurrentSong }) {
  const featuredSong = songs[0];

  return (
    <section className="px-10 mt-2 mb-10">

      <div
        className="
          relative
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
          p-10
          flex
          justify-between
          items-center
        "
      >

        {/* Background Glow */}

        <div
          className="
            absolute
            -top-32
            -left-32
            w-96
            h-96
            bg-violet-500/20
            rounded-full
            blur-[120px]
          "
        ></div>

        <div
          className="
            absolute
            bottom-0
            right-0
            w-80
            h-80
            bg-cyan-400/20
            rounded-full
            blur-[120px]
          "
        ></div>

        {/* Left */}

        <div className="relative z-10 max-w-lg">

          <p className="text-cyan-400 font-medium">
            ✨ Featured Today
          </p>

          <h2 className="text-5xl font-bold mt-4">
            {featuredSong.title}
          </h2>

          <p className="text-slate-400 mt-4 leading-7">
            Discover fresh music, immersive sounds and
            beautifully crafted playlists made just for you.
          </p>

          <button
            onClick={() => setCurrentSong(featuredSong)}
            className="
              mt-8
              px-8
              py-4
              rounded-full
              bg-gradient-to-r
              from-violet-500
              to-cyan-400
              font-semibold
              hover:scale-105
              transition
            "
          >
            ▶ Play Now
          </button>

        </div>

        {/* Right */}

        <div className="relative z-10">

          <img
            src={featuredSong.image}
            alt={featuredSong.title}
            className="
              w-72
              rounded-3xl
              shadow-2xl
            "
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;