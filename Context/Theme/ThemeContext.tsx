import React,{createContext} from 'react';
import { useColorScheme } from 'react-native';
import { darkTheme, lightTheme } from './colors';

export const ThemeContext = createContext({});

function ThemeProvider({children}){
    const isDarkMode = useColorScheme() === 'dark';
    const colors = isDarkMode ? darkTheme : lightTheme;
    return(
        <ThemeContext.Provider value={{colors}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider