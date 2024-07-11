import { useState, createContext, useEffect, ReactNode } from "react";
import React from "react";

const themes = {
  dark: {
    backgroundColor: "black",
    color: "white",
  },
  light: {
    backgroundColor: "white",
    color: "black",
  },
};

interface Props {
  children?: ReactNode;
}

const initialState = {
  dark: false,
  theme: themes.light,
  toggle: () => {},
};
const ThemeContext = createContext(initialState);

function ThemeProvider({ children }: Props) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem("dark") === "true";
    setDark(isDark);
  }, [dark]);

  const toggle = () => {
    const isDark = !dark;
    localStorage.setItem("dark", JSON.stringify(isDark));
    setDark(isDark);
  };

  const theme = dark ? themes.dark : themes.light;

  console.log(theme);

  return (
    <ThemeContext.Provider value={{ theme, dark, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider, ThemeContext };
