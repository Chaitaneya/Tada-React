import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

const AchievementToast = ({ theme, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  if (!theme) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -50, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -50, scale: 0.8 }}
        className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 p-6 rounded-2xl shadow-2xl"
        style={{
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          border: '2px solid #FFD700',
          maxWidth: '400px'
        }}
      >
        <div className="text-center">
          <div className="text-4xl mb-2">🎉</div>
          <h3 className="text-xl font-bold mb-2" style={{ color: '#333' }}>
            Achievement Unlocked!
          </h3>
          <p className="text-lg font-semibold mb-3" style={{ color: theme.accent }}>
            {theme.name}
          </p>
          <p className="text-sm text-gray-600 mb-4">
            You've completed {theme.unlockAt} tasks!
          </p>
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-full font-semibold text-white"
            style={{ background: theme.accent }}
          >
            Awesome! ✨
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AchievementToast;