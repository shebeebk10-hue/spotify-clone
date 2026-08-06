import { useRef, useState, useEffect } from "react";
import songs from "../../data/songs";

import SongInfo from "./SongInfo";
import Controls from "./Controls";
import Timeline from "./Timeline";
import Volume from "./Volume";

import { FaTimes } from "react-icons/fa";

function Player({
  currentSong,
  currentSongIndex,
  setCurrentSongIndex,
  onClose,
}) {
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(100);

  // Previous Song

  const playPrevious = () => {
    setCurrentSongIndex((prev) =>
      prev === 0 ? songs.length - 1 : prev - 1
    );
  };

  // Next Song

  const playNext = () => {
    setCurrentSongIndex((prev) =>
      prev === songs.length - 1 ? 0 : prev + 1
    );
  };

  // Play / Pause

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  // Load Song

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

      if (isPlaying) {
        audio.play();
      }
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

  // React to Play / Pause

  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // Volume

  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.volume = volume / 100;
  }, [volume]);

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

          shadow-[0_0_40px_rgba(139,92,246,.25)]

          flex
          items-center
          justify-between

          px-8
          py-6

          z-50

        "
      >
        {/* Close Button */}

        <button
          onClick={() => {
            audioRef.current.pause();
            setIsPlaying(false);
            onClose();
          }}
          className="
            absolute
            top-4
            right-4
            w-10
            h-10
            rounded-full
            bg-black/40
            backdrop-blur-xl
            border
            border-white/10
            flex
            items-center
            justify-center
            text-slate-300
            hover:bg-red-500
            hover:text-white
            hover:rotate-90
            transition-all
            duration-300
          "
        >
          <FaTimes />
        </button>

        {/* Left */}

        <SongInfo currentSong={currentSong} />

        {/* Center */}

        <div className="flex-1 px-10">
          <Controls
            isPlaying={isPlaying}
            togglePlay={togglePlay}
            playNext={playNext}
            playPrevious={playPrevious}
          />

          <Timeline
            audioRef={audioRef}
            currentTime={currentTime}
            duration={duration}
            setCurrentTime={setCurrentTime}
          />
        </div>

        {/* Right */}

        <Volume
          volume={volume}
          setVolume={setVolume}
        />
      </div>
    </>
  );
}

export default Player;