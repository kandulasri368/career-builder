import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location]);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <span>Sri Sai Chaithanya Kandula</span>
        </Link>

        <div className="navbar-right">
          <button 
            className={`theme-toggle ${darkMode ? 'dark' : 'light'}`} 
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
          >
            <i className={darkMode ? 'fas fa-sun' : 'fas fa-moon'}></i>
          </button>

          <button 
            className={`mobile-menu-btn ${isOpen ? 'open' : ''}`} 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>

          <nav className={`navbar-menu ${isOpen ? 'active' : ''}`}>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/resume" className={location.pathname === '/resume' ? 'active' : ''}>
                  Resume
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/portfolio" className={location.pathname === '/portfolio' ? 'active' : ''}>
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/education" className={location.pathname === '/education' ? 'active' : ''}>
                  Education
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/certifications" className={location.pathname === '/certifications' ? 'active' : ''}>
                  Certifications
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar; 