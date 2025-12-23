import { useState } from "react";
import { useTheme } from "./hooks/useTheme";
import { useZen } from "./contexts/ZenProvider";

import VantaBackground from "./components/VantaBackground";
import Clock from "./components/Clock";
import CatCompanion from "./components/CatCompanion";
import MusicPlayer from "./components/MusicPlayer";
import ThemeToggle from "./components/ThemeToggle";

import ProgressMeter from "./components/ProgressMeter";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

import ZenOverlay from "./components/ZenOverlay";
import ZenPanel from "./components/ZenPanel";

function App() {
  const { currentTheme } = useTheme();
  const { isZen } = useZen();

  const [todos, setTodos] = useState([]);

  const addTodo = ({ todo }) => {
    setTodos(prev => [
      ...prev,
      { id: Date.now(), todo, completed: false }
    ]);
  };

  const toggleComplete = id => {
    setTodos(prev =>
      prev.map(t =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTodo = id => {
    setTodos(prev => prev.filter(t => t.id !== id));
  };

  const completedCount = todos.filter(t => t.completed).length;

  return (
    <>
      {/* 🌌 VANTA BACKGROUND (theme-based, always mounted) */}
      <VantaBackground theme={currentTheme} />

      {/* 🧘 ZEN OVERLAY (screensaver-style, fullscreen) */}
      <ZenOverlay />

      {/* 🧘 ZEN CONTROL CARD */}
      <ZenPanel />

      {/* 🔕 Hide distractions during Zen */}
      {!isZen && (
        <>
          {/* 🕒 Clock */}
          <Clock />

          {/* 🎨 Theme Toggle (Chit ↔ Chat) */}
          <ThemeToggle />

          {/* 🐱 Cat Companion */}
          <CatCompanion />

          {/* 🎵 Music */}
          <MusicPlayer />
        </>
      )}

      {/* 🧩 MAIN TODO CARD */}
      <div className="min-h-screen flex items-center justify-center px-4">
        <div
          className="w-full max-w-xl p-8 rounded-3xl backdrop-blur-xl"
          style={{
            background: currentTheme.cardBg,
            border: `1px solid ${currentTheme.border}`,
            boxShadow: currentTheme.shadow,
          }}
        >
          {/* Header */}
          <div className="mb-6">
            <h1
              className="text-3xl font-extrabold"
              style={{ color: currentTheme.text }}
            >
              Tada
            </h1>
            <p
              className="text-sm mt-1"
              style={{ color: currentTheme.text, opacity: 0.6 }}
            >
              Make progress feel good.
            </p>
          </div>

          {/* Progress */}
          <ProgressMeter totalCompleted={completedCount} />

          {/* Add Todo */}
          <TodoForm addTodo={addTodo} />

          {/* Todos (scrollable, fixed height) */}
          <div
            className="mt-6 space-y-3 overflow-y-auto pr-2"
            style={{ maxHeight: "260px" }}
          >
            {todos.length === 0 && (
              <p
                className="text-center text-sm"
                style={{ color: currentTheme.text, opacity: 0.5 }}
              >
                Add your first task to get started ✨
              </p>
            )}

            {todos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
