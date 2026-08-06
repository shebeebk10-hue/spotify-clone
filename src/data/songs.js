import likedSongs from "../assets/images/liked-songs.jpg";
import dailyMix from "../assets/images/daily-mix.jpg";
import topHits from "../assets/images/top-hits.jpg";
import discoverWeekly from "../assets/images/discover-weekly.jpg";
import chillMix from "../assets/images/chill-mix.jpg";
import rockClassics from "../assets/images/rock-classics.jpg";

import song1 from "../assets/music/song1.mp3";
import song2 from "../assets/music/song2.mp3";
import song3 from "../assets/music/song3.mp3";
import song4 from "../assets/music/song4.mp3";
import song5 from "../assets/music/song5.mp3";
import song6 from "../assets/music/song6.mp3";

const songs = [
  {
    id: 1,
    title: "Neon Dreams",
    artist: "Pulse Originals",
    image: likedSongs,
    audio: song1,
    duration: "3:41",
    genre: "Synthwave",
    plays: "2.8M",
  },

  {
    id: 2,
    title: "Midnight Echo",
    artist: "Luna Waves",
    image: dailyMix,
    audio: song2,
    duration: "4:08",
    genre: "Chill",
    plays: "1.9M",
  },

  {
    id: 3,
    title: "Future Horizon",
    artist: "Nova Pulse",
    image: topHits,
    audio: song3,
    duration: "3:15",
    genre: "Future Bass",
    plays: "3.6M",
  },

  {
    id: 4,
    title: "Silent Pages",
    artist: "Lo-Fi Society",
    image: discoverWeekly,
    audio: song4,
    duration: "2:58",
    genre: "Lo-Fi",
    plays: "1.2M",
  },

  {
    id: 5,
    title: "Golden Skies",
    artist: "Skyline",
    image: chillMix,
    audio: song5,
    duration: "3:52",
    genre: "Pop",
    plays: "5.1M",
  },

  {
    id: 6,
    title: "Eternal Motion",
    artist: "Aurora",
    image: rockClassics,
    audio: song6,
    duration: "5:04",
    genre: "Cinematic",
    plays: "980K",
  },
];

export default songs;