function Hero({ currentSong, setCurrentSongIndex }) {
  return (
    <section className="px-8 mt-6 mb-12">

      <div
        className="
          relative
          overflow-hidden
          rounded-[36px]
          border
          border-white/10
          bg-white/5
          backdrop-blur-2xl
          min-h-[430px]
          flex
          items-center
          justify-between
          px-12
          py-12
        "
      >
        {/* Background Image */}
        <img
          src={currentSong.image}
          alt={currentSong.title}
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            opacity-20
            blur-sm
            scale-110
          "
        />

        {/* Dark Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#09090B]
            via-[#09090bdd]
            to-[#09090B99]
          "
        />

        {/* Glow */}
        <div
          className="
            absolute
            -left-32
            -top-32
            w-96
            h-96
            rounded-full
            bg-violet-500/20
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            right-0
            bottom-0
            w-80
            h-80
            rounded-full
            bg-cyan-400/20
            blur-[140px]
          "
        />

        {/* Left Side */}
        <div className="relative z-10 max-w-xl">

          <span
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              bg-white/10
              border
              border-white/10
              text-cyan-300
              text-sm
              backdrop-blur-xl
            "
          >
            FEATURED TODAY
          </span>

          <h1
            className="
              mt-6
              text-6xl
              font-black
              tracking-tight
              text-white
            "
          >
            {currentSong.title}
          </h1>

          <p
            className="
              mt-5
              text-lg
              leading-8
              text-slate-300
            "
          >
            Immerse yourself in beautiful soundscapes,
            cinematic beats and carefully curated music
            designed for every mood.
          </p>

          <div className="flex gap-4 mt-10">

            <button
              onClick={() => setCurrentSongIndex(currentSong.id - 1)}
              className="
                px-8
                py-4
                rounded-2xl
                bg-gradient-to-r
                from-violet-500
                to-cyan-400
                font-semibold
                text-white
                hover:scale-105
                transition-all
                duration-300
                shadow-[0_15px_40px_rgba(139,92,246,0.35)]
              "
            >
              ▶ Play Now
            </button>

            <button
              className="
                px-8
                py-4
                rounded-2xl
                bg-white/5
                border
                border-white/10
                backdrop-blur-xl
                text-white
                hover:bg-white/10
                transition-all
                duration-300
              "
            >
              ♡ Favorite
            </button>

          </div>

        </div>

        {/* Right Side */}
        <div className="relative z-10">

          {/* Glow Behind Cover */}
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
              w-[320px]
              rounded-[34px]
              shadow-[0_30px_70px_rgba(0,0,0,0.45)]
              transition-all
              duration-700
              hover:scale-105
              hover:rotate-2
            "
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;