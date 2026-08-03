import { FaBell, FaSearch } from "react-icons/fa";

function Header({ searchTerm, setSearchTerm }) {
  
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