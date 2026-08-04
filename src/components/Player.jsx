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

      <div
        className="
          fixed
          bottom-5
          left-1/2
          -translate-x-1/2
          w-[92%]
          max-w-7xl
          min-h-36
          rounded-3xl
          bg-white/5
          backdrop-blur-2xl
          border
          border-white/10
          shadow-[0_0_40px_rgba(139,92,246,0.25)]
          flex
          items-center
          justify-between
          px-8
          z-50
        "
      >
        {/* Left */}
        <div className="flex items-center gap-4 w-1/4">

          <img
            src={currentSong.image}
            alt={currentSong.title}
            className="
              w-16
              h-16v
              rounded-2xl
              object-cover
              shadow-lg
            "
          />

          <div>
            <h3 className="text-white text-lg font-semibold">
              {currentSong.title}
            </h3>

            <p className="text-slate-400 text-sm">
              {currentSong.artist}
            </p>
          </div>

        </div>

        {/* Center */}
        <div className="flex flex-col justify-center items-center w-2/4 h-full">

          <div className="flex items-center justify-center gap-8 text-slate-300">

            <button
              onClick={playPrevious}
              className="
                w-11
                h-11
                rounded-full
                bg-white/5
                hover:bg-white/10
                border
                border-white/10
                flex
                items-center
                justify-center
                transition-all
                duration-300
                hover:scale-110
              "
            >
              <FaStepBackward />
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
                shadow-[0_0_30px_rgba(139,92,246,0.5)]
                flex
                items-center
                justify-center
                hover:scale-110
                transition-all
                duration-300
              "
            >
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>

            <button
              onClick={playNext}
              className="
                w-11
                h-11
                rounded-full
                bg-white/5
                hover:bg-white/10
                border
                border-white/10
                flex
                items-center
                justify-center
                transition-all
                duration-300
                hover:scale-110
              "
            >
              <FaStepForward />
            </button>

          </div>

          <div className="w-full mt-3">

            <div className="w-full">

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
                className="
                  w-full
                  h-1.5
                  accent-violet-500
                  cursor-pointer
                "              />

            </div>

          </div>

        </div>

        {/* Right */}
        <div className="flex items-center gap-3 w-1/4 justify-end">

          <FaVolumeUp className="text-violet-400 text-lg" />

          <input
            type="range"
            min="0"
            max="100"
            defaultValue="100"
            onChange={(e) => {
              audioRef.current.volume = e.target.value / 100;
            }}
            className="
              w-28
              accent-cyan-400
              cursor-pointer
            "
          />

        </div>

      </div>
    </>
  );
}

export default Player;