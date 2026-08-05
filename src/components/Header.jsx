import { useMemo, useRef, useEffect } from "react";
import { FaBell, FaSearch } from "react-icons/fa";

function Header({
  songs,
  searchTerm,
  setSearchTerm,
  setCurrentSongIndex,
}) {
  const searchRef = useRef(null);

  const filteredSongs = useMemo(() => {
    if (!searchTerm.trim()) return [];

    return songs
      .filter(
        (song) =>
          song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          song.artist.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .slice(0, 5);
  }, [songs, searchTerm]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        searchRef.current &&
        !searchRef.current.contains(e.target)
      ) {
        setSearchTerm("");
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, [setSearchTerm]);

  return (
    <header className="flex items-center justify-between px-10 pt-8 pb-6">

      {/* Left */}

      <div>

        <h1 className="text-2xl font-semibold text-white">
          Welcome Back
        </h1>

        <p className="text-slate-400 mt-1">
          Continue your music journey.
        </p>

      </div>

      {/* Right */}

      <div className="flex items-center gap-4">

        {/* Search */}

        <div
          ref={searchRef}
          className="relative"
        >

          <div
            className="
              flex
              items-center
              gap-3
              w-80
              px-5
              py-3
              rounded-2xl
              bg-white/5
              border
              border-white/10
              backdrop-blur-xl
            "
          >

            <FaSearch className="text-violet-400" />

            <input
              type="text"
              placeholder="Search music..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="
                bg-transparent
                outline-none
                text-white
                placeholder:text-slate-500
                w-full
              "
            />

          </div>

          {searchTerm && (

            <div
              className="
                absolute
                top-full
                mt-3
                w-full
                rounded-2xl
                overflow-hidden
                bg-[#14141d]/95
                backdrop-blur-2xl
                border
                border-white/10
                shadow-2xl
                z-50
              "
            >

              {filteredSongs.length > 0 ? (

                filteredSongs.map((song) => (

                  <button
                    key={song.id}
                    onClick={() => {
                      setCurrentSongIndex(song.id - 1);
                      setSearchTerm("");
                    }}
                    className="
                      w-full
                      flex
                      items-center
                      gap-4
                      px-4
                      py-3
                      hover:bg-white/10
                      transition
                    "
                  >

                    <img
                      src={song.image}
                      alt={song.title}
                      className="w-12 h-12 rounded-xl object-cover"
                    />

                    <div className="text-left">

                      <h3 className="text-white font-medium">
                        {song.title}
                      </h3>

                      <p className="text-slate-400 text-sm">
                        {song.artist}
                      </p>

                    </div>

                  </button>

                ))

              ) : (

                <div className="py-8 text-center text-slate-400">

                  No songs found

                </div>

              )}

            </div>

          )}

        </div>

        {/* Notification */}

        <button
          className="
            w-12
            h-12
            rounded-2xl
            bg-white/5
            border
            border-white/10
            backdrop-blur-xl
            flex
            items-center
            justify-center
            hover:bg-white/10
            transition
          "
        >
          <FaBell className="text-violet-400" />
        </button>

        {/* Profile */}

        <div
          className="
            w-12
            h-12
            rounded-2xl
            bg-gradient-to-br
            from-violet-500
            to-cyan-400
            flex
            items-center
            justify-center
            font-bold
            text-white
            shadow-lg
          "
        >
          S
        </div>

      </div>

    </header>
  );
}

export default Header;