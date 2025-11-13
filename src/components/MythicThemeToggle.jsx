import React, { useState, useEffect } from 'react';

const MythicThemeToggle = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.body.style.background = theme === 'dark' ? '#1e1e1e' : '#f4f4f4';
    document.body.style.color = theme === 'dark' ? '#b2f5ea' : '#222';
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <button onClick={toggleTheme} style={{
      position: 'fixed',
      top: '1rem',
      right: '1rem',
      background: theme === 'dark' ? '#00ffe0' : '#222',
      color: theme === 'dark' ? '#0f0f0f' : '#f4f4f4',
      border: 'none',
      padding: '0.5rem 1rem',
      borderRadius: '4px',
      cursor: 'pointer',
      zIndex: 1001
    }}>
      {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
  );
};

export default MythicThemeToggle;