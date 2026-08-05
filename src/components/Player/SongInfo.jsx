function SongInfo({ currentSong }) {
  return (
    <div className="flex items-center gap-4 w-1/4">

      <img
        src={currentSong.image}
        alt={currentSong.title}
        className="
          w-16
          h-16
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
  );
}

export default SongInfo;