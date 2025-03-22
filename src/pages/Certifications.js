import React from 'react';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: 'AWS Solution Architect Associate',
      issuer: 'Amazon Web Services',
      date: '2023',
      description: 'Validates technical expertise in designing and deploying scalable systems on AWS.',
      skills: ['Cloud Architecture', 'AWS Services', 'Solution Design', 'Best Practices'],
      image: '',
      color: '#FF9900'
    },
    {
      id: 2,
      title: 'IBWave Level 1 Certified',
      issuer: 'iBwave Solutions',
      date: '2022',
      description: 'Certification in indoor wireless network design and planning using iBwave Design software.',
      skills: ['Indoor Wireless Design', 'RF Planning', 'Network Architecture', 'Signal Propagation'],
      image: '',
      color: '#00A9E0'
    },
    {
      id: 3,
      title: 'Level 1 Corning Certified',
      issuer: 'Corning',
      date: '2022',
      description: 'Certification in fiber optic installation, troubleshooting, and maintenance.',
      skills: ['Fiber Optics', 'Cabling', 'Installation', 'Testing'],
      image: '',
      color: '#1B75BC'
    },
    {
      id: 4,
      title: 'TEKO DAS Installation and Commissioning',
      issuer: 'JMA Wireless',
      date: '2021',
      description: 'Specialized training in distributed antenna systems installation and commissioning.',
      skills: ['DAS', 'RF Installation', 'Commissioning', 'Troubleshooting'],
      image: '',
      color: '#EE3124'
    },
    {
      id: 5,
      title: 'Level 1 SOLID ENGINEER',
      issuer: 'SOLiD',
      date: '2021',
      description: 'Certification in SOLiD DAS engineering, installation and maintenance.',
      skills: ['DAS Design', 'RF Engineering', 'System Configuration', 'Testing'],
      image: '',
      color: '#004A87'
    },
    {
      id: 6,
      title: 'Cisco Certified Network Associate (CCNA)',
      issuer: 'Cisco',
      date: '2020',
      description: 'Routing and Switching certification (CCNA R&S) that validates the ability to install, configure, and operate network infrastructure.',
      skills: ['Network Fundamentals', 'Routing Protocols', 'Network Security', 'Troubleshooting'],
      image: '',
      color: '#1BA0D7'
    }
  ];

  return (
    <div className="certifications-page">
      <div className="container">
        <h1 className="section-title">Certifications</h1>
        
        <div className="certifications-intro">
          <p>
            I am committed to continuous professional development and have obtained several industry-recognized certifications that validate my expertise in telecommunications, networking, and cloud technologies.
          </p>
        </div>
        
        <div className="certifications-grid">
          {certifications.map(cert => (
            <div className="certification-card" key={cert.id}>
              <div className="certification-header" style={{backgroundColor: cert.color}}>
                {cert.image ? (
                  <img src={cert.image} alt={cert.title} className="cert-logo" />
                ) : (
                  <div className="cert-icon">
                    <i className="fas fa-certificate"></i>
                  </div>
                )}
              </div>
              <div className="certification-body">
                <h3 className="cert-title">{cert.title}</h3>
                <div className="cert-issuer">
                  <span>{cert.issuer}</span>
                  <span className="cert-date">{cert.date}</span>
                </div>
                <p className="cert-description">{cert.description}</p>
                <div className="cert-skills">
                  {cert.skills.map((skill, index) => (
                    <span className="skill-tag" key={index}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="certifications-additional">
          <h2>Professional Development</h2>
          <p>
            In addition to formal certifications, I regularly participate in workshops, training programs, and industry conferences to stay updated with the latest advancements in telecommunications and RF engineering.
          </p>
          
          <div className="development-areas">
            <div className="development-area">
              <div className="area-icon">
                <i className="fas fa-broadcast-tower"></i>
              </div>
              <h3>5G Technology</h3>
              <p>Advanced training in 5G network planning, deployment, and optimization techniques.</p>
            </div>
            <div className="development-area">
              <div className="area-icon">
                <i className="fas fa-code"></i>
              </div>
              <h3>Programming</h3>
              <p>Continuous development in Python, MATLAB, and other technical tools for RF analysis and automation.</p>
            </div>
            <div className="development-area">
              <div className="area-icon">
                <i className="fas fa-cloud"></i>
              </div>
              <h3>Cloud Technologies</h3>
              <p>Ongoing education in cloud services and their applications in modern telecommunications infrastructure.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications; 