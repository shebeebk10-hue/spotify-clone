import { FaPlay } from "react-icons/fa";

function SongCard({ image, title, artist }) {
  return (
    <div className="group bg-[#181818] hover:bg-[#282828] p-4 rounded-lg transition-all duration-300 cursor-pointer">

      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-44 object-cover rounded-md"
        />

        <button
        className="
absolute
bottom-3
right-3
w-12
h-12
rounded-full
bg-[#1DB954]
flex
items-center
justify-center
text-black
shadow-[0_8px_20px_rgba(0,0,0,0.45)]
opacity-0
translate-y-4
group-hover:translate-y-0
group-hover:opacity-100
hover:scale-110
transition-all
duration-300
"
        >
            <FaPlay className="ml-1 text-lg" />
            </button>
            </div>
            <h3 className="text-white font-semibold mt-4">
                {title}
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                    {artist}
                    </p>
                    </div>
                    );
                }
                export default SongCard;