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
    title: "Summer Vibes",
    artist: "Open Music",
    image: likedSongs,
    audio: song1,
    duration: "3:41",
  },

  {
    id: 2,
    title: "Chill Lounge",
    artist: "Open Music",
    image: dailyMix,
    audio: song2,
    duration: "4:08",
  },

  {
    id: 3,
    title: "Future Bass",
    artist: "Open Music",
    image: topHits,
    audio: song3,
    duration: "3:15",
  },

  {
    id: 4,
    title: "Lo-Fi Study",
    artist: "Open Music",
    image: discoverWeekly,
    audio: song4,
    duration: "2:58",
  },

  {
    id: 5,
    title: "Happy Upbeat",
    artist: "Open Music",
    image: chillMix,
    audio: song5,
    duration: "3:52",
  },

  {
    id: 6,
    title: "Cinematic Journey",
    artist: "Open Music",
    image: rockClassics,
    audio: song6,
    duration: "5:04",
  },
];

export default songs;