import { useTheme } from "../hooks/useTheme";

const ThemeToggle = () => {
  const { currentTheme, switchTheme } = useTheme();
  const isChat = currentTheme.id === "chat";

  const labelColor = "rgba(255, 248, 235, 0.9)"; // ✅ creamish white

  return (
    <div className="fixed top-6 right-6 z-30 flex items-center gap-3">
      {/* Chit */}
      <span
        className="text-xs font-semibold select-none"
        style={{
          color: labelColor,
          opacity: isChat ? 0.45 : 1,
        }}
      >
        Chit
      </span>

      {/* Toggle */}
      <button
        onClick={() => switchTheme(isChat ? "chit" : "chat")}
        className="relative w-12 h-7 rounded-full transition-colors"
        style={{
          background: isChat
            ? "rgba(110,231,255,0.9)" // chat cyan
            : "rgba(255,140,66,0.9)", // chit orange
        }}
      >
        <span
          className="absolute top-1 left-1 w-5 h-5 rounded-full bg-white transition-transform"
          style={{
            transform: isChat ? "translateX(20px)" : "translateX(0)",
          }}
        />
      </button>

      {/* Chat */}
      <span
        className="text-xs font-semibold select-none"
        style={{
          color: labelColor,
          opacity: isChat ? 1 : 0.45,
        }}
      >
        Chat
      </span>
    </div>
  );
};

export default ThemeToggle;
