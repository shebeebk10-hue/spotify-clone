import { useState } from "react";
import songs from "./data/songs";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AlbumGrid from "./components/AlbumGrid";
import RecentlyPlayed from "./components/RecentlyPlayed";
import Player from "./components/Player/Player";

function App() {
  const [currentSongIndex, setCurrentSongIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const currentSong =
    currentSongIndex !== null
      ? songs[currentSongIndex]
      : null;

  const filteredSongs = songs.filter(
    (song) =>
      song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      song.artist.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-black min-h-screen flex">

      {/* Main Content */}

      <div className="flex w-full">

        <Sidebar />

        <main
          className="
            flex-1
            bg-gradient-to-b
            from-[#0d0d12]
            via-[#111118]
            to-[#09090b]
            overflow-y-auto
            pb-8
          "
        >
          <Header
            songs={songs}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            setCurrentSongIndex={setCurrentSongIndex}
          />

          <Hero
            currentSong={currentSong || songs[0]}
            setCurrentSongIndex={setCurrentSongIndex}
          />

          <AlbumGrid
            songs={filteredSongs}
            setCurrentSongIndex={setCurrentSongIndex}
            currentSongIndex={currentSongIndex}
          />

          <RecentlyPlayed
            songs={filteredSongs}
            setCurrentSongIndex={setCurrentSongIndex}
            currentSongIndex={currentSongIndex}
          />
        </main>

      </div>

      {/* Music Player */}

      {currentSongIndex !== null && (
        <Player
          currentSong={currentSong}
          currentSongIndex={currentSongIndex}
          setCurrentSongIndex={setCurrentSongIndex}
          onClose={() => setCurrentSongIndex(null)}
        />
      )}

    </div>
  );
}

export default App;