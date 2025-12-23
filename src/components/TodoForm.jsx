import { useState } from "react";
import { useTheme } from "../hooks/useTheme";

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState("");
  const { currentTheme } = useTheme();

  const handleSubmit = e => {
    e.preventDefault();
    if (!todo.trim()) return;
    addTodo({ todo });
    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <input
        type="text"
        value={todo}
        onChange={e => setTodo(e.target.value)}
        placeholder="Add a task…"
        className="flex-1 px-4 py-3 rounded-xl outline-none text-sm"
        style={{
          background: currentTheme.cardBg,
          color: currentTheme.text,
          border: `1px solid ${currentTheme.border}`,
        }}
      />

      <button
  type="submit"
  className="px-6 py-3 rounded-xl text-sm font-semibold transition-all active:scale-95"
  style={{
    background:
      currentTheme.id === "chat"
        ? currentTheme.accent
        : `linear-gradient(135deg, ${currentTheme.accent}, #ff7a18)`,

    color: currentTheme.id === "chat" ? "#0B1020" : "#fff",
    boxShadow:
      currentTheme.id === "chat"
        ? "0 0 0 1px rgba(255,255,255,0.15), 0 8px 24px rgba(110,231,255,0.35)"
        : "0 6px 20px rgba(0,0,0,0.25)",
  }}
>
  Add
</button>

    </form>
  );
};

export default TodoForm;
