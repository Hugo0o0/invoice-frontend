import { ThemeContext } from "@/components/context/ThemeContext";
import { useContext } from "react";

const useTheme = () => {
  const { toggle, theme } = useContext(ThemeContext);
  return { toggle, theme };
};

export default useTheme;
