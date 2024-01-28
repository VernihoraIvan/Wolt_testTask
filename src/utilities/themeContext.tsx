import React, { createContext, useState } from "react";

export interface ProviderProps {
  children: React.ReactNode;
}
export interface ThemeProvider {
  lightTheme: boolean;
  toggleTheme: () => void;
}
const defaultValue: ThemeProvider = {
  lightTheme: true,
  toggleTheme: () => {},
};

export const ThemeContext = createContext(defaultValue);

export const ThemeProvider = ({ children }: ProviderProps) => {
  const [lightTheme, setLightTheme] = useState(true);

  const toggleTheme = () => {
    setLightTheme(!lightTheme);
  };
  return (
    <ThemeContext.Provider value={{ lightTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
