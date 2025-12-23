import { useTheme } from "../hooks/useTheme";

export default function ThemeSelector() {
  const { currentTheme, switchTheme } = useTheme();

  const isChat = currentTheme.id === "chat";

  return (
    <div className="flex items-center gap-3">
      <span
        className={`text-sm font-medium transition ${
          !isChat ? "opacity-100" : "opacity-40"
        }`}
      >
        Chit
      </span>

      <button
        onClick={() => switchTheme(isChat ? "chit" : "chat")}
        className={`
          relative w-14 h-8 rounded-full transition
          ${isChat ? "bg-cyan-400" : "bg-orange-400"}
        `}
      >
        <span
          className={`
            absolute top-1 left-1 w-6 h-6 rounded-full bg-white
            transition-transform
            ${isChat ? "translate-x-6" : "translate-x-0"}
          `}
        />
      </button>

      <span
        className={`text-sm font-medium transition ${
          isChat ? "opacity-100" : "opacity-40"
        }`}
      >
        Chat
      </span>
    </div>
  );
}
