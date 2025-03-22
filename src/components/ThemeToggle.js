import React, { useEffect, useState } from 'react';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  
  // Initialize theme from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkTheme(true);
      document.body.classList.add('dark-theme');
    }
  }, []);
  
  // Toggle theme function
  const toggleTheme = () => {
    if (isDarkTheme) {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    }
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className="theme-toggle" onClick={toggleTheme}>
      <div className={`toggle-track ${isDarkTheme ? 'dark' : 'light'}`}>
        <div className="toggle-indicator">
          <span className="toggle-icon">
            {isDarkTheme ? (
              <i className="fas fa-moon"></i>
            ) : (
              <i className="fas fa-sun"></i>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ThemeToggle; 