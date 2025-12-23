import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../hooks/useTheme";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false); // start paused
  const audioRef = useRef(null);
  const { currentTheme } = useTheme();

  // MUST be inside /public
  const LOFI_MUSIC_URL = "/BackgroundMusicPlaylist.mp3";

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play().catch(() => setIsPlaying(false));
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  const toggleMusic = () => {
    setIsPlaying(prev => !prev);
  };

  // Theme-aware styles
  const buttonBg =
    currentTheme.id === "chit"
      ? "rgba(255, 255, 255, 0.85)"
      : currentTheme.accent;

  const iconColor =
    currentTheme.id === "chit"
      ? "#FF8C42"
      : "#0B1020";

  const textColor =
    currentTheme.id === "chit"
      ? "rgba(255,255,255,0.85)"
      : "rgba(255,255,255,0.8)";

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* 👤 Credit line */}
      <span
        className="text-xs select-none whitespace-nowrap"
        style={{ color: textColor }}
      >
        Made by –{" "}
        <a
          href="https://www.linkedin.com/in/chaitanyap03?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold underline underline-offset-2 hover:opacity-80 transition"
        >
          Chaitanya Pareek
        </a>
      </span>

      {/* 🎵 Music Button */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleMusic}
        className="w-14 h-14 rounded-full flex items-center justify-center text-2xl"
        style={{
          background: buttonBg,
          boxShadow: currentTheme.shadow,
          color: iconColor,
        }}
        title={isPlaying ? "Pause music" : "Play music"}
      >
        <audio
          ref={audioRef}
          src={LOFI_MUSIC_URL}
          loop
          onError={() => {
            console.error("Failed to load audio file");
            setIsPlaying(false);
          }}
        />

        <motion.div
          animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
          transition={
            isPlaying
              ? { duration: 3, repeat: Infinity, ease: "linear" }
              : {}
          }
        >
          {isPlaying ? "🎵" : "🎶"}
        </motion.div>
      </motion.button>
    </div>
  );
};

export default MusicPlayer;
