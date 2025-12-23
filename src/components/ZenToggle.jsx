import { useZen } from "../contexts/ZenProvider";

const ZenToggle = () => {
  const { isZen, enterZen, exitZen } = useZen();

  return (
    <button
      onClick={() => (isZen ? exitZen() : enterZen(25))}
      className="px-4 py-2 rounded-xl text-sm font-semibold transition"
      style={{
        background: isZen ? "#111827" : "#F59E0B",
        color: "#fff"
      }}
    >
      {isZen ? "Exit Zen" : "Zen"}
    </button>
  );
};

export default ZenToggle;
