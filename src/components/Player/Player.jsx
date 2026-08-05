import { useRef, useState, useEffect } from "react";
import songs from "../../data/songs";
import SongInfo from "./SongInfo";

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

  // ----------------------------------
  // Previous Song
  // ----------------------------------

  const playPrevious = () => {
    setCurrentSongIndex((prev) =>
      prev === 0 ? songs.length - 1 : prev - 1
    );
  };

  // ----------------------------------
  // Next Song
  // ----------------------------------

  const playNext = () => {
    setCurrentSongIndex((prev) =>
      prev === songs.length - 1 ? 0 : prev + 1
    );
  };

  // ----------------------------------
  // Play / Pause
  // ----------------------------------

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  // ----------------------------------
  // Load Song
  // ----------------------------------

  useEffect(() => {
    if (!audioRef.current) return;

    const audio = audioRef.current;

    audio.pause();
    audio.load();

    setCurrentTime(0);
    setDuration(0);

    const updateTime = () => {
      setCurrentTime(audio.currentTime);
    };

    const loadedMetadata = () => {
      setDuration(audio.duration);
    };

    const ended = () => {
      playNext();
    };

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", loadedMetadata);
    audio.addEventListener("ended", ended);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", loadedMetadata);
      audio.removeEventListener("ended", ended);
    };
  }, [currentSong]);

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
        <SongInfo currentSong={currentSong} />

        {/* Center */}
        <div className="flex flex-col justify-center items-center w-2/4">

          <div className="flex items-center gap-8">

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
                transition
              "
            >
              <FaStepBackward className="mx-auto text-white" />
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
                shadow-lg
                hover:scale-110
                transition
              "
            >
              {isPlaying ? (
                <FaPause className="mx-auto" />
              ) : (
                <FaPlay className="mx-auto ml-1" />
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
                transition
              "
            >
              <FaStepForward className="mx-auto text-white" />
            </button>

          </div>

          <div className="w-full mt-4">

            <div className="flex justify-between text-xs text-slate-400 mb-2">

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
              "
            />

          </div>

        </div>

        {/* Right */}

        <div className="flex items-center gap-3 w-1/4 justify-end">

          <FaVolumeUp className="text-violet-400" />

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