import { useState, useEffect, useCallback } from 'react';
import { useTheme } from './useTheme';
import { unlockableThemes } from '../theme/themes';

export const useAchievements = (totalCompleted) => {
  const { unlockTheme } = useTheme();
  const [newlyUnlocked, setNewlyUnlocked] = useState(null);

  useEffect(() => {
    const checkAchievements = () => {
      for (const themeId in unlockableThemes) {
        const theme = unlockableThemes[themeId];
        if (totalCompleted >= theme.unlockAt) {
          const isNew = unlockTheme(themeId);
          if (isNew) {
            setNewlyUnlocked(theme);
          }
        }
      }
    };

    checkAchievements();
  }, [totalCompleted, unlockTheme]);

  const resetNewUnlock = useCallback(() => {
    setNewlyUnlocked(null);
  }, []);

  return { newlyUnlocked, resetNewUnlock };
};
