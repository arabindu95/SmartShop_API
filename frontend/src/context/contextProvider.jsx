import { useState } from "react";
import { MyContext } from "./createContext";

export const MyContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const [isLoggedin, SetIsLoggedin] = useState(false);
  const [search, setSearch] = useState("");

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("light", newTheme === "light");
  };
  const value = {
    theme,
    toggleTheme,
    isLoggedin,
    SetIsLoggedin,
    search,
    setSearch,
  };

  return <MyContext.Provider value={value}> {children} </MyContext.Provider>;
};
