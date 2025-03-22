import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Hello, I'm <span className="highlight">Sri Sai Chaithanya Kandula</span></h1>
            <h2 className="hero-subtitle">RF Engineer</h2>
            <p className="hero-description">
              A telecom professional with expertise in RF engineering, 5G networks, and wireless communications. Experienced in extended feature testing for FR2 and SME for testing with different Telecom Service providers in North America.
            </p>
            <div className="hero-buttons">
              <Link to="/portfolio" className="btn">View My Work</Link>
              <Link to="/resume" className="btn btn-outlined">Resume</Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-placeholder">
              <i className="fas fa-user-circle"></i>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <p>
              I am a dedicated RF Engineer with a passion for creating innovative solutions in the telecommunications industry. With years of experience in RF design, optimization, and testing, I have developed a strong foundation in 5G technology, network deployment, and performance analysis.
            </p>
            <p>
              My goal is to leverage my skills in RF engineering and telecommunications to contribute to cutting-edge wireless network projects. I believe in continuous learning and staying up-to-date with the latest industry trends and technologies in the rapidly evolving field of 5G communications.
            </p>
          </div>
        </div>
      </section>

      <section className="skills-section">
        <div className="container">
          <h2 className="section-title">Skills</h2>
          <div className="skills-container">
            <div className="skill-category">
              <h3 className="category-title">Technical Skills</h3>
              <div className="skills-list">
                <div className="skill-item">
                  <div className="skill-name">RF Design & Optimization</div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-name">5G Network Testing</div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-name">Site Evaluation & Deployment</div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="skill-category">
              <h3 className="category-title">Tools & Software</h3>
              <div className="skills-list">
                <div className="skill-item">
                  <div className="skill-name">QXDM, QCAT, APEX</div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-name">TEMS, ACTIX, MapInfo</div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-name">Python, MATLAB</div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-work-section">
        <div className="container">
          <h2 className="section-title">Featured Work</h2>
          <div className="featured-work-grid">
            <div className="work-card">
              <div className="work-image"></div>
              <h3 className="work-title">5G Network Deployment</h3>
              <p className="work-description">RF design and optimization for building the first standalone 5G broadband network in the US at DISH Wireless.</p>
              <Link to="/portfolio" className="work-link">View Details</Link>
            </div>
            <div className="work-card">
              <div className="work-image"></div>
              <h3 className="work-title">Field Trial Lead</h3>
              <p className="work-description">Led technical field trials on 5G for FR1 and FR2 for tier 1 and tier 2 carriers and device OEMs.</p>
              <Link to="/portfolio" className="work-link">View Details</Link>
            </div>
            <div className="work-card">
              <div className="work-image"></div>
              <h3 className="work-title">Network Optimization</h3>
              <p className="work-description">Performed optimization techniques for optimal site/cluster performance including antenna selection, tilts, and neighbor-list configuration.</p>
              <Link to="/portfolio" className="work-link">View Details</Link>
            </div>
          </div>
          <div className="view-all">
            <Link to="/portfolio" className="btn">View All Projects</Link>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <p>Feel free to reach out to me for collaboration, opportunities, or just to say hello!</p>
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
            <div className="social-links">
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/kandulasri368" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 