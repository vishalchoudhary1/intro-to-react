import { createContext, useContext } from "react";

// to show we can use variable and function without useState hook
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

// provider which was in different 08miniContext
export const ThemeProvider = ThemeContext.Provider

// custom hook
export default function useTheme(){
    return useContext(ThemeContext)
}