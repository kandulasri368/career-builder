import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Contact</h3>
            <p><i className="fas fa-envelope"></i> example@email.com</p>
            <p><i className="fas fa-phone"></i> (123) 456-7890</p>
            <p><i className="fas fa-map-marker-alt"></i> City, State, Country</p>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Connect</h3>
            <div className="social-icons">
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/kandulasri368" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} My Professional Portfolio. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 