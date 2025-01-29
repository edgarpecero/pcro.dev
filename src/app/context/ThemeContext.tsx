"use client";

import React, { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { Brand, Theme } from "../resources/enums";

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
  setBrandColor: Dispatch<SetStateAction<Brand>>;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState(Theme.Dark);
  const [brandColor, setBrandColor] = useState(Brand.Moss);

  const toggleTheme = () => {
    setTheme(theme === Theme.Dark ? Theme.Light : Theme.Dark);
  };

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    root.setAttribute("data-brand", brandColor);
  }, [theme, brandColor]);

  return (
    <ThemeContext.Provider value={{
      theme,
      toggleTheme,
      setBrandColor,
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};