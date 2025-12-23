import { motion } from "framer-motion";
import { useZen } from "../contexts/ZenProvider";

const formatTime = seconds => {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
};

const ZenOverlay = () => {
  const { isZen, remaining, exitZen } = useZen();

  if (!isZen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-40 flex items-center justify-center backdrop-blur-xl"
      style={{
        background: "rgba(2, 6, 23, 0.65)", // semi-transparent, Vanta visible
      }}
    >
      {/* Center Timer */}
      <div className="text-center">
        <div className="text-7xl font-extrabold text-white tracking-tight">
          {formatTime(remaining)}
        </div>
        <div className="text-sm mt-3 text-white/60">
          Stay focused
        </div>

        {/* Exit Zen */}
        <button
          onClick={exitZen}
          className="mt-8 px-6 py-3 rounded-xl text-sm font-semibold bg-white/10 text-white hover:bg-white/20 transition"
        >
          Exit Zen
        </button>
      </div>
    </motion.div>
  );
};

export default ZenOverlay;
