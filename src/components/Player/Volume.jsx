import { FaVolumeUp } from "react-icons/fa";

function Volume({ volume, setVolume }) {
  return (
    <div className="flex items-center gap-3 w-1/4 justify-end">

      <FaVolumeUp className="text-violet-400" />

      <input
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={(e) => setVolume(Number(e.target.value))}
        className="
          w-28
          accent-cyan-400
          cursor-pointer
        "
      />

    </div>
  );
}

export default Volume;