import { FaChevronLeft, FaChevronRight, FaBell } from "react-icons/fa";

function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-5">

      {/* Left */}
      <div className="flex gap-3">
        <button className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white hover:bg-[#2a2a2a]">
          <FaChevronLeft />
        </button>

        <button className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white hover:bg-[#2a2a2a]">
          <FaChevronRight />
        </button>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">

        <button className="bg-white text-black px-5 py-2 rounded-full font-semibold hover:scale-105 transition">
          Explore Premium
        </button>

        <button className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white">
          <FaBell />
        </button>

        <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center font-bold">
          S
        </div>

      </div>

    </header>
  );
}

export default Header;