import {
  FaPlay,
  FaStepBackward,
  FaStepForward,
  FaVolumeUp,
} from "react-icons/fa";

function Player({ currentSong }) {
  return (
    <footer className="h-24 bg-black border-t border-[#282828] flex items-center justify-between px-6">

      {/* Left */}
      <div className="flex items-center gap-4 w-1/4">

        <img
          src={currentSong.image}
          alt={currentSong.title}
          className="w-14 h-14 rounded object-cover"
        />

        <div>
          <h3 className="text-white font-medium">
            {currentSong.title}
          </h3>

          <p className="text-gray-400 text-sm">
            {currentSong.artist}
          </p>
        </div>

      </div>

      {/* Center */}
      <div className="flex flex-col items-center gap-3">

        <div className="flex items-center gap-6 text-white">

          <FaStepBackward
            size={18}
            className="cursor-pointer hover:scale-110 transition"
          />

          <button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition">

            <FaPlay className="ml-1" size={16} />

          </button>

          <FaStepForward
            size={18}
            className="cursor-pointer hover:scale-110 transition"
          />

        </div>

        <div className="flex items-center gap-3">

          <span className="text-xs text-gray-400">
            0:00
          </span>

          <div className="w-96 h-1 bg-gray-600 rounded-full">

            <div className="w-0 h-1 bg-white rounded-full"></div>

          </div>

          <span className="text-xs text-gray-400">
            {currentSong.duration}
          </span>

        </div>

      </div>

      {/* Right */}
      <div className="w-1/4 flex items-center justify-end gap-3">

        <FaVolumeUp className="text-white" />

        <input
          type="range"
          min="0"
          max="100"
          defaultValue="70"
          className="w-28 accent-green-500"
        />

      </div>

    </footer>
  );
}

export default Player;