import {
  FaHome,
  FaCompass,
  FaHeart,
} from "react-icons/fa";

import { MdLibraryMusic } from "react-icons/md";

function Sidebar() {
  return (
    <aside className="w-72 p-6">

      <div
        className="
          h-full
          rounded-3xl
          bg-white/5
          backdrop-blur-2xl
          border
          border-white/10
          flex
          flex-col
          p-7
        "
      >

        {/* Logo */}

        <div className="mb-14">

          <div className="flex items-center gap-4">

            {/* Equalizer Logo */}

            <div className="flex items-end gap-1">

              <div className="w-1.5 h-5 rounded-full bg-violet-500"></div>

              <div className="w-1.5 h-9 rounded-full bg-cyan-400"></div>

              <div className="w-1.5 h-7 rounded-full bg-violet-500"></div>

              <div className="w-1.5 h-11 rounded-full bg-cyan-400"></div>

            </div>

            <div>

              <h1 className="text-2xl font-bold tracking-widest">
                PULSE
              </h1>

              <p className="text-sm text-slate-400">
                Feel Every Beat
              </p>

            </div>

          </div>

        </div>

        {/* Navigation */}

        <nav className="space-y-2">

          <button className="w-full flex items-center gap-4 rounded-2xl bg-white/10 px-5 py-4 transition hover:bg-white/15">

            <FaHome className="text-violet-400 text-lg" />

            <span>Home</span>

          </button>

          <button className="w-full flex items-center gap-4 rounded-2xl px-5 py-4 transition hover:bg-white/10">

            <FaCompass className="text-cyan-400 text-lg" />

            <span className="text-slate-300">
              Discover
            </span>

          </button>

          <button className="w-full flex items-center gap-4 rounded-2xl px-5 py-4 transition hover:bg-white/10">

            <MdLibraryMusic className="text-violet-400 text-xl" />

            <span className="text-slate-300">
              Library
            </span>

          </button>

          <button className="w-full flex items-center gap-4 rounded-2xl px-5 py-4 transition hover:bg-white/10">

            <FaHeart className="text-cyan-400 text-lg" />

            <span className="text-slate-300">
              Favorites
            </span>

          </button>

        </nav>

        {/* Premium Card */}

        <div className="mt-auto">

          <div className="rounded-3xl bg-gradient-to-br from-violet-500/20 to-cyan-400/20 border border-white/10 p-5">

            <h3 className="font-semibold text-white">
              Pulse Premium
            </h3>

            <p className="text-sm text-slate-300 mt-2">
              Experience music in a whole new way.
            </p>

          </div>

        </div>

      </div>

    </aside>
  );
}

export default Sidebar;