import { createContext, useEffect, useState } from "react";

type ThemeType = "dark" | "light";

interface ThemeContextType {
  theme: ThemeType;
  toggle: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggle: () => {},
});

const Theme = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>("light");

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme && (localTheme === "dark" || localTheme === "light")) {
      document.documentElement.dataset.theme = localTheme;
      setTheme(localTheme as ThemeType);
    } else {
      document.documentElement.dataset.theme = "light";
      localStorage.setItem("theme", "light");
    }
  }, []);

  const toggle = () => {
    const currentTheme = theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = currentTheme;
    localStorage.setItem("theme", currentTheme);
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, Theme };
