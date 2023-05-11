// import { useThemeContext } from '../../contexts/theme';
import { CustomButton } from "./CustomButton";

interface Props {
  text?: string;
}

export function ToggleDarkMode({ text }: Props) {
  // const [darkMode, toggleTheme] = useThemeContext();
  const darkMode = true;
  const toggleTheme = () => darkMode;

  return (
    <CustomButton
      ariaLabel={`Toggle ${darkMode ? "Light" : "Dark"} Mode`}
      icon={darkMode ? "flash" : "moon"}
      onClick={toggleTheme}
      text={text || ""}
      variant="secondary"
    />
  );
}
