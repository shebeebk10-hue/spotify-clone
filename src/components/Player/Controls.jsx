import {
  FaPlay,
  FaPause,
  FaStepBackward,
  FaStepForward,
} from "react-icons/fa";

function Controls({
  isPlaying,
  togglePlay,
  playPrevious,
  playNext,
}) {
  return (
    <div className="flex items-center justify-center gap-8">

      <button
        onClick={playPrevious}
        className="
          w-11
          h-11
          rounded-full
          bg-white/5
          border
          border-white/10
          hover:bg-white/10
          transition-all
          duration-300
          flex
          items-center
          justify-center
        "
      >
        <FaStepBackward className="text-white" />
      </button>

      <button
        onClick={togglePlay}
        className="
          w-16
          h-16
          rounded-full
          bg-gradient-to-r
          from-violet-500
          to-cyan-400
          text-white
          shadow-[0_0_30px_rgba(139,92,246,0.45)]
          hover:scale-110
          transition-all
          duration-300
          flex
          items-center
          justify-center
        "
      >
        {isPlaying ? (
          <FaPause className="text-lg" />
        ) : (
          <FaPlay className="ml-1 text-lg" />
        )}
      </button>

      <button
        onClick={playNext}
        className="
          w-11
          h-11
          rounded-full
          bg-white/5
          border
          border-white/10
          hover:bg-white/10
          transition-all
          duration-300
          flex
          items-center
          justify-center
        "
      >
        <FaStepForward className="text-white" />
      </button>

    </div>
  );
}

export default Controls;