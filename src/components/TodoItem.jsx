import { motion } from "framer-motion";
import { useTheme } from "../hooks/useTheme";

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  const { currentTheme } = useTheme();

  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="flex items-center justify-between px-4 py-3 rounded-2xl"
      style={{
        background: currentTheme.cardBg,
        border: `1px solid ${currentTheme.border}`,
        boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
      }}
    >
      {/* Left side */}
      <div className="flex items-center gap-3">
        {/* Checkbox */}
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
          className="w-4 h-4 cursor-pointer"
          style={{ accentColor: currentTheme.accent }}
        />

        {/* Text */}
        <span
          className="text-sm transition"
          style={{
            color: todo.completed
              ? currentTheme.mutedText
              : currentTheme.text,
            textDecoration: todo.completed ? "line-through" : "none",
            opacity: todo.completed ? 0.75 : 1,
          }}
        >
          {todo.todo}
        </span>
      </div>

      {/* Delete */}
      <button
        onClick={() => deleteTodo(todo.id)}
        className="text-sm font-semibold transition hover:scale-110"
        style={{
          color: currentTheme.mutedText,
        }}
        aria-label="Delete task"
      >
        ✕
      </button>
    </motion.div>
  );
};

export default TodoItem;
