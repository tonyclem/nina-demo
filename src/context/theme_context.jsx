import { createContext, useState, useEffect } from "react";

export const themes = {
  dark: "",
  light: "light-theme",
};

export const ThemeContext = createContext({
  theme: themes.dark,
  changeTheme: () => {},
});

export const ThemeContextWrapper = ({ children }) => {
  const [theme, setTheme] = useState(themes.dark);

  function changeTheme(theme) {
    setTheme(theme);
  }

  useEffect(() => {
    if (theme === themes.light) {
      document.body.classList.add("light-theme");
    } else if (theme === themes.dark) {
      document.body.classList.remove("light-theme");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
