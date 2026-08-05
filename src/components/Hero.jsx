function Hero({ currentSong, setCurrentSongIndex }) {
  return (
    <section className="px-8 mt-6">

      <div
        className="
          relative
          overflow-hidden
          rounded-[34px]
          min-h-[340px]
          border
          border-white/10
          bg-[#101015]
          flex
          items-center
          justify-between
          px-12
        "
      >

        {/* Background */}

        <img
          src={currentSong.image}
          alt={currentSong.title}
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            opacity-15
            blur-xl
            scale-125
          "
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#09090B] via-[#09090be6] to-[#09090b99]" />

        {/* Glow */}

        <div className="absolute -left-24 -top-24 w-72 h-72 bg-violet-500/20 rounded-full blur-[120px]" />

        <div className="absolute right-0 bottom-0 w-72 h-72 bg-cyan-400/15 rounded-full blur-[120px]" />

        {/* LEFT */}

        <div className="relative z-10 max-w-xl">

          <span
            className="
              px-4
              py-2
              rounded-full
              text-sm
              bg-white/10
              border
              border-white/10
              text-cyan-300
            "
          >
            FEATURED TODAY
          </span>

          <h1 className="text-6xl font-black text-white mt-6 leading-none">
            {currentSong.title}
          </h1>

          <p className="mt-5 text-slate-300 leading-8 text-lg">
            Beautiful soundscapes, cinematic beats and
            curated playlists crafted for every mood.
          </p>

          <div className="flex gap-4 mt-8">

            <button
              onClick={() => setCurrentSongIndex(currentSong.id - 1)}
              className="
                px-8
                h-14
                rounded-2xl
                bg-gradient-to-r
                from-violet-500
                to-cyan-400
                text-white
                font-semibold
                hover:scale-105
                transition
              "
            >
              ▶ Play Now
            </button>

            <button
              className="
                px-8
                h-14
                rounded-2xl
                border
                border-white/10
                bg-white/5
                hover:bg-white/10
                text-white
                transition
              "
            >
              ♡ Favorite
            </button>

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative z-10">

          <div
            className="
              absolute
              inset-0
              rounded-[34px]
              bg-gradient-to-br
              from-violet-500/30
              to-cyan-400/30
              blur-3xl
              scale-110
            "
          />

          <img
            src={currentSong.image}
            alt={currentSong.title}
            className="
              relative
              w-[260px]
              rounded-[28px]
              shadow-[0_30px_80px_rgba(0,0,0,.45)]
              transition-all
              duration-700
              hover:rotate-2
              hover:scale-105
            "
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;