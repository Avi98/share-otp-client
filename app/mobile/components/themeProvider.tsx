import React, { createContext, useContext, useEffect, useState } from "react";
import { useColorScheme } from "react-native";
import { lightTheme, darkTheme } from "../app/theme";

type Theme = "dark" | "light" | "system";

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  forcedTheme?: string | null;
}

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  colors: typeof lightTheme.colors;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({
  children,
  defaultTheme = "system",
  forcedTheme,
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const systemTheme = useColorScheme();

  const currentTheme = theme === "system" ? systemTheme : theme;
  const colors = currentTheme === "dark" ? darkTheme.colors : lightTheme.colors;

  useEffect(() => {
    if (forcedTheme) {
      setTheme(forcedTheme as Theme);
    }
  }, [forcedTheme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, colors }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
