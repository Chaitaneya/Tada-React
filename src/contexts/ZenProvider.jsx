import { createContext, useContext, useEffect, useRef, useState } from "react";

const ZenContext = createContext(null);

export const useZen = () => useContext(ZenContext);

export const ZenProvider = ({ children }) => {
  const [isZen, setIsZen] = useState(false);
  const [duration, setDuration] = useState(25 * 60); // seconds
  const [remaining, setRemaining] = useState(0);

  const [sessions, setSessions] = useState(0);
  const [totalTime, setTotalTime] = useState(0); // seconds

  const timerRef = useRef(null);

  const enterZen = (minutes) => {
    if (isZen) return;

    const seconds = minutes * 60;
    setDuration(seconds);
    setRemaining(seconds);
    setIsZen(true);
  };

  const exitZen = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;

    setIsZen(false);
    setRemaining(0);
  };

  // countdown logic
  useEffect(() => {
    if (!isZen) return;

    timerRef.current = setInterval(() => {
      setRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          timerRef.current = null;

          setIsZen(false);
          setSessions((s) => s + 1);
          setTotalTime((t) => t + duration);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [isZen, duration]);

  return (
    <ZenContext.Provider
      value={{
        isZen,
        remaining,
        sessions,
        totalTime,
        enterZen,
        exitZen,
      }}
    >
      {children}
    </ZenContext.Provider>
  );
};
