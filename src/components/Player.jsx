import { useRef, useState, useEffect } from "react";
import songs from "../data/songs";
import {
  FaPlay,
  FaPause,
  FaStepBackward,
  FaStepForward,
  FaVolumeUp,
} from "react-icons/fa";

function Player({
  currentSong,
  currentSongIndex,
  setCurrentSongIndex,
}) {
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Load new song whenever currentSong changes
useEffect(() => {
  if (!audioRef.current) return;

  const audio = audioRef.current;

  audio.pause();
  audio.load();
  setCurrentTime(0);

  const updateTime = () => {
    setCurrentTime(audio.currentTime);
  };

  const loaded = () => {
    setDuration(audio.duration);

    // Auto play whenever song changes
    audio.play();
    setIsPlaying(true);
  };

  audio.addEventListener("timeupdate", updateTime);
  audio.addEventListener("loadedmetadata", loaded);
  audio.addEventListener("ended", ended);

  return () => {
    audio.removeEventListener("timeupdate", updateTime);
    audio.removeEventListener("loadedmetadata", loaded);
    audio.removeEventListener("ended", ended);
  };
}, [currentSong]);

const loaded = () => {
  setDuration(audio.duration);

  audio.play();
  setIsPlaying(true);
};

const ended = () => {
  playNext();
};

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  const playNext = () => {
  setCurrentSongIndex((prev) =>
    prev === songs.length - 1 ? 0 : prev + 1
  );
};

const playPrevious = () => {
  setCurrentSongIndex((prev) =>
    prev === 0 ? songs.length - 1 : prev - 1
  );
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

<button
  onClick={playPrevious}
  className="hover:text-violet-400 transition"
>
  <FaStepBackward />
</button>

            <button
              onClick={togglePlay}
              className="bg-white text-black rounded-full p-3 hover:scale-110 transition"
            >
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>

<button
  onClick={playNext}
  className="hover:text-violet-400 transition"
>
  <FaStepForward />
</button>

          </div>

          <div className="w-full mt-4">

            <div className="w-full mt-4">

              <div className="flex justify-between text-xs text-gray-400 mb-1">

                <span>
                  {Math.floor(currentTime / 60)}:
                  {String(Math.floor(currentTime % 60)).padStart(2, "0")}
                </span>

                <span>
                  {Math.floor(duration / 60)}:
                  {String(Math.floor(duration % 60)).padStart(2, "0")}
                </span>

              </div>

              <input
                type="range"
                min="0"
                max={duration || 0}
                value={currentTime}
                onChange={(e) => {
                  const time = Number(e.target.value);
                  audioRef.current.currentTime = time;
                  setCurrentTime(time);
                }}
                className="w-full accent-violet-500 cursor-pointer"
              />

            </div>

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
            onChange={(e) => {
              audioRef.current.volume = e.target.value / 100;
            }}
            className="accent-violet-500 cursor-pointer"
          />

        </div>

      </div>
    </>
  );
}

export default Player;