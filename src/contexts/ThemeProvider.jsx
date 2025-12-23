import { createContext, useContext, useState } from "react";
import { themes } from "../theme/themes";

export const ThemeContext = createContext(null);

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }
  return ctx;
};

export const ThemeProvider = ({ children }) => {
  // Default theme → Chit
  const [currentTheme, setCurrentTheme] = useState(themes.chit);

  const switchTheme = (themeId) => {
    const nextTheme = themes[themeId];
    if (!nextTheme) return;
    setCurrentTheme(nextTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        switchTheme,
        themes,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
