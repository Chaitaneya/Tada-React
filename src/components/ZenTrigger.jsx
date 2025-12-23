import { motion } from "framer-motion";
import { useZenMode } from "../hooks/useZenMode";
import { useTheme } from "../hooks/useTheme";

const DURATIONS = [25, 45, 60];

const ZenTrigger = () => {
  const { startZenSession, isZenActive } = useZenMode();
  const { currentTheme } = useTheme();

  if (isZenActive) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex gap-3"
    >
      {DURATIONS.map(minutes => (
        <button
          key={minutes}
          onClick={() => startZenSession(minutes)}
          className="px-5 py-2 rounded-full text-sm font-semibold backdrop-blur-md transition hover:scale-105"
          style={{
            background: currentTheme.cardBg,
            color: currentTheme.text,
            border: `1px solid ${currentTheme.border}`,
            boxShadow: currentTheme.shadow,
          }}
        >
          {minutes}m Zen
        </button>
      ))}
    </motion.div>
  );
};

export default ZenTrigger;
