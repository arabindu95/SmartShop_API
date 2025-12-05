import { useState } from "react";
import { MyContext } from "./createContext";

export const MyContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("light", newTheme === "light");
  };
  const value = { theme, toggleTheme };

  return <MyContext.Provider value={value}> {children} </MyContext.Provider>;
};
