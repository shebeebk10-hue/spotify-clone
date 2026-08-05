function Timeline({
  audioRef,
  currentTime,
  duration,
  setCurrentTime,
}) {
  return (
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
  );
}

export default Timeline;