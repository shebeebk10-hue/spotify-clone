import { useState } from "react";
import songs from "./data/songs";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AlbumGrid from "./components/AlbumGrid";
import RecentlyPlayed from "./components/RecentlyPlayed";
import Player from "./components/Player";

function App() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  
  const [searchTerm, setSearchTerm] = useState("");

  const currentSong = songs[currentSongIndex];

  const filteredSongs = songs.filter((song) =>
  song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
  song.artist.toLowerCase().includes(searchTerm.toLowerCase())
);

  return (
    <div className="bg-black h-screen flex flex-col">

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">

        <Sidebar />

        <main
          className="
            flex-1
            bg-gradient-to-b
            from-[#0d0d12]
            via-[#111118]
            to-[#09090b]
            overflow-y-auto
            pb-40
          "
        >
          <Header
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
          <Hero
            currentSong={currentSong}
            setCurrentSongIndex={setCurrentSongIndex}
          />

          <AlbumGrid
            songs={filteredSongs}
            setCurrentSongIndex={setCurrentSongIndex}
          />

          <RecentlyPlayed
            songs={filteredSongs}
            setCurrentSongIndex={setCurrentSongIndex}
          />

        </main>

      </div>

      {/* Bottom Player */}
      <Player
        currentSong={currentSong}
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
      />

    </div>
  );
}

export default App;