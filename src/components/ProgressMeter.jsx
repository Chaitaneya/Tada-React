import { motion } from "framer-motion";
import { useTheme } from "../hooks/useTheme";

const ProgressMeter = ({ totalCompleted }) => {
  const { currentTheme } = useTheme();

  // Simple capped progress
  const progress = Math.min(totalCompleted * 5, 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full mb-6 p-5 rounded-2xl"
      style={{
        background: currentTheme.cardBg,
        border: `1px solid ${currentTheme.border}`,
        boxShadow: currentTheme.shadow,
      }}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <span
          className="text-sm font-semibold"
          style={{ color: currentTheme.text }}
        >
          Progress
        </span>

        <span
          className="text-xs"
          style={{ color: currentTheme.text, opacity: 0.6 }}
        >
          {totalCompleted} tasks completed
        </span>
      </div>

      {/* Track */}
      <div
        className="w-full h-2 rounded-full overflow-hidden"
        style={{
          background:
            currentTheme.id === "chit"
              ? "rgba(255,140,66,0.28)"     // creamish orange
              : "rgba(255,255,255,0.16)",  // soft night track
        }}
      >
        {/* Fill */}
        <motion.div
          className="h-full rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{
            background:
              currentTheme.id === "chat"
                ? currentTheme.accent
                : "linear-gradient(90deg,#FF8C42,#FFB36B)",
            boxShadow:
              currentTheme.id === "chat"
                ? "0 0 12px rgba(110,231,255,0.45)"
                : "0 0 10px rgba(255,140,66,0.45)",
          }}
        />
      </div>
    </motion.div>
  );
};

export default ProgressMeter;
