import { useEffect, useRef, useState } from "react";

/*
  Zen Mode Logic Hook
  -------------------
  - Controls focus sessions
  - Countdown timer
  - Persistence (localStorage)
  - Daily stats
*/

const STORAGE_KEY = "tada-zen-state";
const STATS_KEY = "tada-zen-stats";

const getTodayKey = () => {
  const d = new Date();
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
};

export const useZenMode = () => {
  const intervalRef = useRef(null);

  const [isZenActive, setIsZenActive] = useState(false);
  const [targetDuration, setTargetDuration] = useState(0); // seconds
  const [remainingTime, setRemainingTime] = useState(0); // seconds
  const [isPaused, setIsPaused] = useState(false);

  const [stats, setStats] = useState(() => {
    try {
      const saved = localStorage.getItem(STATS_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  /* ------------------ Persistence ------------------ */

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        isZenActive,
        targetDuration,
        remainingTime,
        isPaused,
      })
    );
  }, [isZenActive, targetDuration, remainingTime, isPaused]);

  useEffect(() => {
    localStorage.setItem(STATS_KEY, JSON.stringify(stats));
  }, [stats]);

  /* ------------------ Timer Engine ------------------ */

  useEffect(() => {
    if (!isZenActive || isPaused) return;

    intervalRef.current = setInterval(() => {
      setRemainingTime(prev => {
        if (prev <= 1) {
          endZenSession(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [isZenActive, isPaused]);

  /* ------------------ Actions ------------------ */

  const startZenSession = (minutes) => {
    const seconds = minutes * 60;

    setTargetDuration(seconds);
    setRemainingTime(seconds);
    setIsPaused(false);
    setIsZenActive(true);
  };

  const pauseZen = () => {
    setIsPaused(true);
    clearInterval(intervalRef.current);
  };

  const resumeZen = () => {
    setIsPaused(false);
  };

  const stopZenSession = () => {
    clearInterval(intervalRef.current);
    setIsZenActive(false);
    setIsPaused(false);
    setRemainingTime(0);
    setTargetDuration(0);
  };

  const endZenSession = (completed = false) => {
    clearInterval(intervalRef.current);

    if (completed) {
      const today = getTodayKey();
      const minutesCompleted = Math.floor(targetDuration / 60);

      setStats(prev => {
        const todayStats = prev[today] || {
          totalMinutes: 0,
          sessions: 0,
        };

        return {
          ...prev,
          [today]: {
            totalMinutes: todayStats.totalMinutes + minutesCompleted,
            sessions: todayStats.sessions + 1,
          },
        };
      });
    }

    setIsZenActive(false);
    setIsPaused(false);
    setRemainingTime(0);
    setTargetDuration(0);
  };

  /* ------------------ Derived Stats ------------------ */

  const todayKey = getTodayKey();
  const todayStats = stats[todayKey] || {
    totalMinutes: 0,
    sessions: 0,
  };

  /* ------------------ API ------------------ */

  return {
    // state
    isZenActive,
    isPaused,
    targetDuration,
    remainingTime,

    // actions
    startZenSession,
    pauseZen,
    resumeZen,
    stopZenSession,

    // stats
    todayZenMinutes: todayStats.totalMinutes,
    todayZenSessions: todayStats.sessions,
  };
};
