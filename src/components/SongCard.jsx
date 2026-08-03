import { FaPlay } from "react-icons/fa";

function SongCard({ image, title, artist }) {
  return (
    <div
      className="
        group
        rounded-3xl
        overflow-hidden
        bg-white/5
        backdrop-blur-xl
        border
        border-white/10
        hover:border-violet-500/40
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]
      "
    >
      {/* Cover */}
      <div className="relative overflow-hidden">

        <img
          src={image}
          alt={title}
          className="
            w-full
            aspect-square
            object-cover
            transition-transform
            duration-700
            group-hover:scale-110
          "
        />

        {/* Dark Overlay */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/50
            to-transparent
            opacity-0
            group-hover:opacity-100
            transition
            duration-500
          "
        />

        {/* Play Button */}

        <button
          className="
            absolute
            bottom-5
            right-5

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

            shadow-xl

            opacity-0
            translate-y-5

            group-hover:opacity-100
            group-hover:translate-y-0

            transition-all
            duration-500
          "
        >
          <FaPlay className="ml-1 text-lg" />
        </button>

      </div>

      {/* Text */}

      <div className="p-5">

        <h3
          className="
            text-white
            font-semibold
            text-lg
            truncate
          "
        >
          {title}
        </h3>

        <p
          className="
            text-slate-400
            text-sm
            mt-2
            truncate
          "
        >
          {artist}
        </p>

      </div>

    </div>
  );
}

export default SongCard;