import { useState } from "react";
import { useZen } from "../contexts/ZenProvider";
import { useTheme } from "../hooks/useTheme";

const ZenPanel = () => {
  const { isZen, enterZen, sessions, totalTime } = useZen();
  const { currentTheme } = useTheme();

  const [selectedMinutes, setSelectedMinutes] = useState(25);

  const totalMinutesUsed = Math.floor(totalTime / 60);

  return (
    <div
      className="
        fixed right-8 top-1/2 -translate-y-1/2 z-20
        w-[400px] min-h-[540px]
        p-8 rounded-[32px]
        flex flex-col
      "
      style={{
        background: currentTheme.cardBg,
        border: `1px solid ${currentTheme.border}`,
        boxShadow: currentTheme.shadow,
        opacity: isZen ? 0.6 : 1,
        pointerEvents: isZen ? "none" : "auto",
        transition: "opacity 300ms ease",
      }}
    >
      {/* HEADER */}
      <div className="mb-6">
        <h2
          className="text-2xl font-extrabold"
          style={{ color: currentTheme.text }}
        >
          Zen Mode
        </h2>
        <p
          className="text-sm mt-1"
          style={{ color: currentTheme.text, opacity: 0.6 }}
        >
          Deep focus sessions
        </p>
      </div>

      {/* STATS */}
      <div className="mb-8 space-y-3">
        <div
          className="flex justify-between text-sm"
          style={{ color: currentTheme.text }}
        >
          <span>Sessions</span>
          <strong>{sessions}</strong>
        </div>

        <div
          className="flex justify-between text-sm"
          style={{ color: currentTheme.text }}
        >
          <span>Total focus time</span>
          <strong>{totalMinutesUsed} min</strong>
        </div>
      </div>

      {/* TIME SELECT */}
      <div className="mb-10">
        <div
          className="text-xs uppercase tracking-wider mb-3"
          style={{ color: currentTheme.text, opacity: 0.5 }}
        >
          Session length
        </div>

        <div className="flex gap-3">
          {[15, 25, 45].map((m) => {
            const active = selectedMinutes === m;

            return (
              <button
                key={m}
                onClick={() => setSelectedMinutes(m)}
                className="flex-1 py-3 rounded-xl text-sm font-semibold transition-all"
                style={{
                  background: active
                    ? currentTheme.accent
                    : "rgba(0,0,0,0.06)",
                  color: active ? "#fff" : currentTheme.text,
                }}
              >
                {m} min
              </button>
            );
          })}
        </div>
      </div>

      {/* ENTER ZEN */}
      <div className="mt-auto">
        <button
          onClick={() => enterZen(selectedMinutes)}
          className="
            w-full py-4 rounded-2xl
            text-sm font-bold tracking-wide
            transition-transform active:scale-[0.98]
          "
          style={{
            background: currentTheme.accent,
            color: "#fff",
          }}
        >
          Enter Zen
        </button>
      </div>
    </div>
  );
};

export default ZenPanel;
