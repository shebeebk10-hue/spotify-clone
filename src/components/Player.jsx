import { useRef, useState, useEffect } from "react";
import {
  FaPlay,
  FaPause,
  FaStepBackward,
  FaStepForward,
  FaVolumeUp,
} from "react-icons/fa";

function Player({ currentSong }) {
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);

  // Load new song whenever currentSong changes
  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.pause();
    audioRef.current.load();

    if (isPlaying) {
      audioRef.current.play();
    }
  }, [currentSong]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio ref={audioRef}>
        <source src={currentSong.audio} type="audio/mpeg" />
      </audio>

      <div className="h-24 bg-black border-t border-gray-800 flex items-center justify-between px-6">

        {/* Left */}
        <div className="flex items-center gap-4 w-1/4">

          <img
            src={currentSong.image}
            alt={currentSong.title}
            className="w-14 h-14 rounded"
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
        <div className="flex flex-col items-center w-2/4">

          <div className="flex items-center gap-6 text-white">

            <button>
              <FaStepBackward />
            </button>

            <button
              onClick={togglePlay}
              className="bg-white text-black rounded-full p-3 hover:scale-110 transition"
            >
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>

            <button>
              <FaStepForward />
            </button>

          </div>

          <div className="w-full mt-4">

            <input
              type="range"
              min="0"
              max="100"
              defaultValue="0"
              className="w-full"
            />

          </div>

        </div>

        {/* Right */}
        <div className="flex items-center gap-3 w-1/4 justify-end">

          <FaVolumeUp className="text-white" />

          <input
            type="range"
            min="0"
            max="100"
            defaultValue="100"
          />

        </div>

      </div>
    </>
  );
}

export default Player;