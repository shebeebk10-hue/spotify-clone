import { useState } from "react";
import songs from "./data/songs";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Greeting from "./components/Greeting";
import AlbumGrid from "./components/AlbumGrid";
import RecentlyPlayed from "./components/RecentlyPlayed";
import Player from "./components/Player";

function App() {
  const [currentSong, setCurrentSong] = useState(songs[0]);

  return (
    <div className="bg-black h-screen flex flex-col">

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">

        <Sidebar />

        <main
          className="
            flex-1
            bg-gradient-to-b
            from-green-900
            via-[#1b1b1b]
            to-[#121212]
            overflow-y-auto
          "
        >
          <Header />

          <Greeting />

          <AlbumGrid />

          <RecentlyPlayed setCurrentSong={setCurrentSong} />

        </main>

      </div>

      {/* Bottom Player */}
      <Player currentSong={currentSong} />

    </div>
  );
}

export default App;