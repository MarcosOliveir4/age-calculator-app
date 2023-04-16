import React from 'react';
import { GlobalStyle } from './styles/global';
import { ThemeProvider } from 'styled-components';
import { useTheme } from './hooks/useTheme';

import { Route, Routes } from 'react-router-dom';
import { About, Home } from './pages';
import { NavBar, NavBarInterface } from './components';

function App() {
  const { theme, toggleTheme } = useTheme();
  const navbarprops: NavBarInterface[] = [
    { label: 'home', link: '/' },
    { label: 'About', link: '/about' },
  ];

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <NavBar settings={navbarprops} themeSettings={{ theme, toggleTheme }} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
