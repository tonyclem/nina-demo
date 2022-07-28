import { createContext, useState, useEffect } from "react";

export const themes = {
  dark: "",
  light: "white-content",
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
      document.body.classList.add("white-content");
    } else if (theme === themes.dark) {
      document.body.classList.remove("white-content");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
