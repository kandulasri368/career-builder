import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Sri Sai Chaithanya Kandula</h3>
            <p>RF Engineer specializing in telecommunications and network optimization.</p>
            
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>kchaitu2@gmail.com</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <span>+1 (309) 684-8544</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Nashville, TN</span>
              </div>
            </div>
          </div>
          
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/resume">Resume</a></li>
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="/education">Education</a></li>
              <li><a href="/certifications">Certifications</a></li>
            </ul>
          </div>
          
          <div className="footer-social">
            <h3>Connect With Me</h3>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/sri-sai-chaithanya-kandula/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/kandulasri368" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Sri Sai Chaithanya Kandula. All rights reserved.</p>
          <p className="credits">
            <span>RF Engineer Portfolio</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 