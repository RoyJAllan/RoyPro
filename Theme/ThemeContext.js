import * as React from 'react';
import { MD3LightTheme, MD3DarkTheme} from 'react-native-paper';

const CustomLightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#2c2727ff', 
    background: '#99cafcff', 
    surface: '#ffffff',
    text: '#000000',
    buttoncolor: '#ffffff',
    
  },
};

const CustomDarkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: '#5e5a5aff', 
    background: '#1a1a1a', 
    surface: '#2d2d2d',
    text: '#ffffff',
    buttoncolor: '#ffffff',
   
  },
};

export const ThemeContext = React.createContext({
  isDark: false,
  toggleTheme: () => {},
  theme: CustomLightTheme,
});

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = React.useState(false);

  const toggleTheme = () => setIsDark((prev) => !prev);

  const theme = isDark ? CustomDarkTheme : CustomLightTheme;

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}