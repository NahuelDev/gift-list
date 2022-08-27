import { Theme } from "@mui/material";

import { lightTheme, darkTheme } from "../themes";
import { getLocalStorage, setLocalStorage } from "./localStorage";

export const isLightTheme = (theme: Theme): boolean => {
    return (theme === lightTheme);
};

export const getInitialTheme = () : Theme => {
    const theme = getLocalStorage("theme");
    if (theme === "dark") return darkTheme;
    else if (theme === "light") return lightTheme;
    return window.matchMedia("(prefers-color-scheme:dark)").matches
        ? darkTheme
        : lightTheme;
};

export const saveThemeOnLocalStorage = (theme: Theme) => {
    const value = isLightTheme(theme) ? "light" : "dark";
    setLocalStorage("theme", value);    
};