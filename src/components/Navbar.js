import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import './Navbar.css';

const Navbar = () => {
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

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="highlight">Portfolio</span>
        </Link>
        
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`hamburger ${isOpen ? 'active' : ''}`}></div>
        </div>
        
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/resume" className={location.pathname === '/resume' ? 'nav-link active' : 'nav-link'}>
              Resume
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/portfolio" className={location.pathname === '/portfolio' ? 'nav-link active' : 'nav-link'}>
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/certifications" className={location.pathname === '/certifications' ? 'nav-link active' : 'nav-link'}>
              Certifications
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/education" className={location.pathname === '/education' ? 'nav-link active' : 'nav-link'}>
              Education
            </Link>
          </li>
          <li className="nav-item theme-toggle-container">
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 