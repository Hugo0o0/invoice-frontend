import useTheme from "@/utils/hooks/useTheme";
import { Moon, Sun } from "../UI/Icons";
import { Slide } from "../UI";

const ThemeSwitcher = () => {
  const { theme, toggle } = useTheme();
  const icon = theme === "light" ? <Moon /> : <Sun />;

  return (
    <button className="flex items-center justify-center" onClick={toggle}>
      {icon}
    </button>
  );
};

export default ThemeSwitcher;
