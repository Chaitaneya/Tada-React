import { motion } from "framer-motion";
import { useZenMode } from "../hooks/useZenMode";
import { useTheme } from "../hooks/useTheme";

const formatTime = (seconds) => {
  const m = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const s = (seconds % 60)
    .toString()
    .padStart(2, "0");
  return `${m}:${s}`;
};

const ZenTimer = () => {
  const {
    remainingTime,
    isPaused,
    pauseZen,
    resumeZen,
  } = useZenMode();
  const { currentTheme } = useTheme();

  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="absolute bottom-24 flex flex-col items-center gap-4"
    >
      {/* Time */}
      <div
        className="text-6xl font-light tracking-tight"
        style={{ color: currentTheme.text }}
      >
        {formatTime(remainingTime)}
      </div>

      <div
        className="text-xs uppercase tracking-wide opacity-60"
        style={{ color: currentTheme.text }}
      >
        remaining
      </div>

      {/* Controls */}
      <button
        onClick={isPaused ? resumeZen : pauseZen}
        className="mt-4 px-6 py-2 rounded-full text-sm font-semibold"
        style={{
          background: currentTheme.accent,
          color: "#fff",
          boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
        }}
      >
        {isPaused ? "Resume" : "Pause"}
      </button>
    </motion.div>
  );
};

export default ZenTimer;
