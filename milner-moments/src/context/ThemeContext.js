import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const savedTheme = localStorage.getItem('theme');
  const [darkMode, setDarkMode] = useState(savedTheme === 'dark');

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};