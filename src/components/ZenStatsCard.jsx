import { motion } from "framer-motion";
import { useZenMode } from "../hooks/useZenMode";
import { useTheme } from "../hooks/useTheme";

const ZenStatsCard = () => {
  const {
    todayZenMinutes,
    todayZenSessions,
  } = useZenMode();
  const { currentTheme } = useTheme();

  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="absolute top-6 left-6 w-52 p-4 rounded-2xl"
      style={{
        background: currentTheme.cardBg,
        border: `1px solid ${currentTheme.border}`,
        boxShadow: currentTheme.shadow,
      }}
    >
      <div
        className="text-xs uppercase tracking-wide mb-2 opacity-60"
        style={{ color: currentTheme.text }}
      >
        Zen today
      </div>

      <div className="flex flex-col gap-1">
        <div
          className="text-sm font-semibold"
          style={{ color: currentTheme.text }}
        >
          {todayZenMinutes} min focused
        </div>

        <div
          className="text-xs"
          style={{ color: currentTheme.text, opacity: 0.6 }}
        >
          {todayZenSessions} sessions
        </div>
      </div>
    </motion.div>
  );
};

export default ZenStatsCard;
