import { FaSpotify, FaHome, FaSearch } from "react-icons/fa";
import { MdLibraryMusic } from "react-icons/md";

function Sidebar() {
  return (
    <div className="w-64 bg-black h-screen text-white flex flex-col p-6">

      {/* Logo */}

      <div className="flex items-center gap-3 text-3xl text-green-500 font-bold mb-10">

        <FaSpotify />

        <span>Spotify</span>

      </div>

      {/* Menu */}

      <div className="space-y-6 text-lg">

        <div className="flex items-center gap-4 hover:text-green-500 cursor-pointer duration-300">

          <FaHome />

          <span>Home</span>

        </div>

        <div className="flex items-center gap-4 hover:text-green-500 cursor-pointer duration-300">

          <FaSearch />

          <span>Search</span>

        </div>

        <div className="flex items-center gap-4 hover:text-green-500 cursor-pointer duration-300">

          <MdLibraryMusic />

          <span>Your Library</span>

        </div>

      </div>

    </div>
  );
}

export default Sidebar;