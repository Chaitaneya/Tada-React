import { useEffect, useState } from "react";
import { useTheme } from "../hooks/useTheme";

const Clock = () => {
  const { currentTheme } = useTheme();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");

  // ✅ FIX: theme-aware seconds color
  const secondsColor =
    currentTheme.id === "chit"
      ? "rgba(255, 255, 255, 0.7)" // cream-white for orange bg
      : currentTheme.accent;      // chat stays cyan

  return (
    <div
      className="fixed top-6 left-6 select-none"
      style={{ zIndex: 30 }}
    >
      <div className="flex items-end gap-2 leading-none">
        {/* Hours + Minutes */}
        <span
          className="text-5xl font-extrabold tracking-tight"
          style={{ color: currentTheme.text }}
        >
          {hours}:{minutes}
        </span>

        {/* Seconds */}
        <span
          className="text-xl font-semibold mb-1"
          style={{
            color: secondsColor,
            opacity: 0.9,
          }}
        >
          {seconds}
        </span>
      </div>

      {/* Label */}
      <div
        className="text-xs mt-1 uppercase tracking-wide"
        style={{ color: currentTheme.text, opacity: 0.6 }}
      >
        Your time
      </div>
    </div>
  );
};

export default Clock;
