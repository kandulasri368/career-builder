import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import profileImage from '../assets/profile-image.jpg';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-greeting">Hello, I'm <span className="hero-name">Sri Sai Chaithanya Kandula</span></h1>
              <h2 className="hero-title">RF Engineer</h2>
              <p className="hero-description">
                A telecom professional specializing in RF engineering, 5G networks, and wireless communications. 
                Experienced in extended feature testing for FR2 and SME for testing with different Telecom Service providers in North America.
              </p>
              <div className="hero-cta">
                <Link to="/portfolio" className="btn primary-btn">View My Work</Link>
                <Link to="/resume" className="btn secondary-btn">Resume</Link>
              </div>
              <div className="hero-social">
                <a href="https://www.linkedin.com/in/sri-sai-chaithanya-kandula/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://github.com/kandulasri368" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <i className="fab fa-github"></i>
                </a>
                <a href="mailto:kchaitu2@gmail.com" aria-label="Email">
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>
            <div className="hero-image">
              <div className="profile-image-container">
                <img src={profileImage} alt="Sri Sai Chaithanya Kandula" className="profile-image" />
              </div>
            </div>
          </div>
        </div>
        <div className="hero-shape"></div>
      </section>

      {/* About Section */}
      <section className="about-section" id="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I am a dedicated RF Engineer with a passion for creating innovative solutions in the telecommunications industry. 
                With years of experience in RF design, optimization, and testing, I have developed a strong foundation in 5G technology, 
                network deployment, and performance analysis.
              </p>
              <p>
                My expertise includes RF site design, network optimization, and troubleshooting complex wireless systems. 
                I have successfully led technical field trials on 5G for FR1 and FR2 for tier 1 and tier 2 carriers and device OEMs, 
                ensuring optimal performance and reliability.
              </p>
            </div>
            <div className="key-highlights">
              <div className="highlight-card">
                <div className="highlight-icon">
                  <i className="fas fa-signal"></i>
                </div>
                <h3>RF Design</h3>
                <p>Specialized in RF design and optimization for 5G networks, focusing on coverage, capacity, and performance metrics.</p>
              </div>
              <div className="highlight-card">
                <div className="highlight-icon">
                  <i className="fas fa-broadcast-tower"></i>
                </div>
                <h3>5G Testing</h3>
                <p>Extensive experience in testing and validating 5G networks across various bands including mmWave and Sub-6 GHz frequencies.</p>
              </div>
              <div className="highlight-card">
                <div className="highlight-icon">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h3>Network Optimization</h3>
                <p>Expert in analyzing and optimizing network performance through strategic antenna placement and parameter configuration.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section" id="skills">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-container">
            <div className="skills-category">
              <h3 className="category-title">Core Skills</h3>
              <div className="skills-grid">
                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">RF Design & Optimization</span>
                    <span className="skill-percentage">95%</span>
                  </div>
                  <div className="skill-progress">
                    <div className="progress-bar" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">Network Performance Analysis</span>
                    <span className="skill-percentage">90%</span>
                  </div>
                  <div className="skill-progress">
                    <div className="progress-bar" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">5G Implementation</span>
                    <span className="skill-percentage">92%</span>
                  </div>
                  <div className="skill-progress">
                    <div className="progress-bar" style={{ width: '92%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">RF Site Design</span>
                    <span className="skill-percentage">88%</span>
                  </div>
                  <div className="skill-progress">
                    <div className="progress-bar" style={{ width: '88%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="skills-category">
              <h3 className="category-title">Tools & Software</h3>
              <div className="skills-tags">
                <span className="skill-tag">QXDM</span>
                <span className="skill-tag">QCAT</span>
                <span className="skill-tag">APEX</span>
                <span className="skill-tag">TEMS</span>
                <span className="skill-tag">ACTIX</span>
                <span className="skill-tag">MapInfo</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">MATLAB</span>
                <span className="skill-tag">AWS</span>
                <span className="skill-tag">Network Simulators</span>
                <span className="skill-tag">RF Planning Tools</span>
                <span className="skill-tag">Spectrum Analyzers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="projects-section" id="projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                {/* PLACEHOLDER: Replace with actual project image */}
                <div className="image-placeholder">
                  <i className="fas fa-broadcast-tower"></i>
                  <span className="placeholder-text">5G Network Image</span>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">5G Network Deployment</h3>
                <p className="project-description">
                  Led the RF design and optimization for building the first standalone 5G broadband network in the US at DISH Wireless.
                </p>
                <div className="project-tags">
                  <span className="project-tag">5G</span>
                  <span className="project-tag">Network Planning</span>
                  <span className="project-tag">RF Design</span>
                </div>
                <Link to="/portfolio" className="project-link">View Details <i className="fas fa-arrow-right"></i></Link>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                {/* PLACEHOLDER: Replace with actual project image */}
                <div className="image-placeholder">
                  <i className="fas fa-mobile-alt"></i>
                  <span className="placeholder-text">Field Trial Image</span>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Field Trial Lead</h3>
                <p className="project-description">
                  Led technical field trials on 5G for FR1 and FR2 for tier 1 and tier 2 carriers and device OEMs, ensuring optimal performance.
                </p>
                <div className="project-tags">
                  <span className="project-tag">Field Testing</span>
                  <span className="project-tag">FR1 & FR2</span>
                  <span className="project-tag">Performance Analysis</span>
                </div>
                <Link to="/portfolio" className="project-link">View Details <i className="fas fa-arrow-right"></i></Link>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                {/* PLACEHOLDER: Replace with actual project image */}
                <div className="image-placeholder">
                  <i className="fas fa-chart-line"></i>
                  <span className="placeholder-text">Optimization Image</span>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Network Optimization</h3>
                <p className="project-description">
                  Performed optimization techniques for optimal site/cluster performance including antenna selection, tilts, and neighbor-list configuration.
                </p>
                <div className="project-tags">
                  <span className="project-tag">Optimization</span>
                  <span className="project-tag">Antenna Design</span>
                  <span className="project-tag">Network Performance</span>
                </div>
                <Link to="/portfolio" className="project-link">View Details <i className="fas fa-arrow-right"></i></Link>
              </div>
            </div>
          </div>
          <div className="projects-footer">
            <Link to="/portfolio" className="btn primary-btn">View All Projects</Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-details">
                  <h3>Email</h3>
                  <p><a href="mailto:kchaitu2@gmail.com">kchaitu2@gmail.com</a></p>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="contact-details">
                  <h3>Phone</h3>
                  <p><a href="tel:+13096848544">+1 (309) 684-8544</a></p>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="contact-details">
                  <h3>Location</h3>
                  <p>Nashville, TN</p>
                </div>
              </div>
            </div>
            <div className="contact-message">
              <p>
                I'm always open to discussing new projects, innovative ideas, or opportunities to be part of your vision.
                Feel free to reach out to me via email or phone.
              </p>
              <a href="mailto:kchaitu2@gmail.com" className="btn primary-btn">Send Message</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 