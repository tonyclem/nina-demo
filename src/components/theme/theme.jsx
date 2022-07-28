import React from "react";
import { BsCloudSunFill, BsFillCloudMoonFill } from "react-icons/bs";
import { ThemeContext, themes } from "../../context/theme_context";

const ThemeComponents = () => {
  const [darkMode, setDarkMode] = React.useState(true);

  return (
    <ThemeContext.Consumer>
      {({ changeTheme }) => (
        <button
          color="link"
          onClick={() => {
            setDarkMode(!darkMode);
            changeTheme(darkMode ? themes.light : themes.dark);
          }}
        >
          <i className={darkMode}></i>
          <span className="d-lg-none d-md-block">
            {darkMode ? <BsCloudSunFill /> : <BsFillCloudMoonFill />}
          </span>
        </button>
      )}
    </ThemeContext.Consumer>
  );
};

export default ThemeComponents;
