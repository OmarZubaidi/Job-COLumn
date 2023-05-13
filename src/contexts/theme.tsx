import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';
import { defaultFunction, defaultTheme } from '.';

interface ContextProps {
  darkMode: boolean;
  toggleTheme: Dispatch<SetStateAction<boolean>>;
}

const Context = createContext<ContextProps>({
  darkMode: defaultTheme,
  toggleTheme: defaultFunction,
});

interface Props {
  children: ReactNode;
}

export function ThemeProvider({ children }: Props) {
  const [darkMode, toggleDarkMode] = useState(true);

  // Because BlueprintJS' dark mode toggle sucks
  const body = document.body;
  body.className = `background ${darkMode ? 'bp4-dark dark' : 'bp4-body light'}`;

  function toggleTheme() {
    toggleDarkMode((mode) => !mode);
  }

  return <Context.Provider value={{ darkMode, toggleTheme }}>{children}</Context.Provider>;
}

export function useThemeContext() {
  return useContext(Context);
}
