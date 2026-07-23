import songs from "../data/songs";

function AlbumGrid() {
  return (
    <div className="px-8 grid grid-cols-3 gap-4">
      {songs.map((song) => (
        <div
          key={song.id}
          className="
          group
          bg-[#2a2a2a]/80
          hover:bg-[#3a3a3a]
          rounded-lg
          overflow-hidden
          flex
          items-center
          cursor-pointer
          transition-all
          duration-300
          hover:scale-[1.02]
          "
        >
          <img
            src={song.image}
            alt={song.title}
            className="w-24 h-24 object-cover"
          />

          <div className="px-4">
            <h3 className="text-white font-semibold">
              {song.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AlbumGrid;