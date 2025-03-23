import React from 'react';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "AWS Solution Architect Associate",
      issuer: "Amazon Web Services",
      date: "June 2022",
      description: "Validates expertise in designing and deploying scalable systems on AWS.",
      skills: ["Cloud Architecture", "AWS Services", "Infrastructure Design"],
      logo: "aws"
    },
    {
      id: 2,
      title: "IBWave Level 1 Certified",
      issuer: "iBwave Solutions",
      date: "February 2022",
      description: "Professional certification in RF design for in-building wireless systems.",
      skills: ["In-Building RF Design", "Signal Propagation", "DAS Planning"],
      logo: "ibwave"
    },
    {
      id: 3,
      title: "Level 1 Corning Certified",
      issuer: "Corning",
      date: "November 2021",
      description: "Specialized training in fiber optic system design and implementation.",
      skills: ["Fiber Optic Systems", "Network Infrastructure", "System Installation"],
      logo: "corning"
    },
    {
      id: 4,
      title: "TEKO DAS Installation and Commissioning",
      issuer: "JMA Wireless",
      date: "September 2021",
      description: "Certification for distributed antenna system installation and commissioning.",
      skills: ["DAS Installation", "RF Commissioning", "System Testing"],
      logo: "jma"
    },
    {
      id: 5,
      title: "Level 1 SOLID ENGINEER",
      issuer: "SOLiD",
      date: "August 2021",
      description: "Professional certification for SOLiD DAS engineering and implementation.",
      skills: ["DAS Engineering", "RF Planning", "System Integration"],
      logo: "solid"
    },
    {
      id: 6,
      title: "Cisco Certified Network Associate (CCNA)",
      issuer: "Cisco",
      date: "May 2020",
      description: "Fundamental networking certification covering routing, switching, and network implementation.",
      skills: ["Network Configuration", "Routing Protocols", "Network Security"],
      logo: "cisco"
    }
  ];

  return (
    <div className="certifications-page">
      <div className="container">
        <div className="certifications-intro">
          <h1 className="section-title">Professional Certifications</h1>
          <p>
            I continuously enhance my skills through professional certifications that validate my expertise
            in RF engineering, telecommunications, and related technologies. These certifications represent
            my commitment to maintaining industry-relevant knowledge and skills.
          </p>
        </div>
        
        <div className="certifications-grid">
          {certifications.map(cert => (
            <div className="certification-card" key={cert.id}>
              <div className="certification-logo">
                <div className={`logo-placeholder ${cert.logo}-logo`}>
                  <i className={`fas ${
                    cert.logo === 'aws' ? 'fa-cloud' :
                    cert.logo === 'ibwave' ? 'fa-broadcast-tower' :
                    cert.logo === 'corning' ? 'fa-network-wired' :
                    cert.logo === 'jma' ? 'fa-broadcast-tower' :
                    cert.logo === 'solid' ? 'fa-signal' :
                    cert.logo === 'cisco' ? 'fa-server' : 'fa-certificate'
                  }`}></i>
                </div>
              </div>
              
              <div className="certification-content">
                <h2 className="certification-title">{cert.title}</h2>
                
                <div className="certification-meta">
                  <div className="issuer">
                    <i className="fas fa-building"></i>
                    <span>{cert.issuer}</span>
                  </div>
                  <div className="issue-date">
                    <i className="fas fa-calendar-alt"></i>
                    <span>{cert.date}</span>
                  </div>
                </div>
                
                <p className="certification-description">{cert.description}</p>
                
                <div className="certification-skills">
                  <h3>Key Skills</h3>
                  <div className="skills-tags">
                    {cert.skills.map((skill, index) => (
                      <span className="skill-tag" key={index}>{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="professional-memberships">
          <h2 className="section-subtitle">Professional Memberships</h2>
          <div className="memberships-grid">
            <div className="membership-item">
              <div className="membership-icon">
                <i className="fas fa-users"></i>
              </div>
              <div className="membership-details">
                <h3>IEEE Communications Society</h3>
                <p>Member since 2018</p>
              </div>
            </div>
            
            <div className="membership-item">
              <div className="membership-icon">
                <i className="fas fa-satellite-dish"></i>
              </div>
              <div className="membership-details">
                <h3>5G Americas</h3>
                <p>Associate Member since 2021</p>
              </div>
            </div>
            
            <div className="membership-item">
              <div className="membership-icon">
                <i className="fas fa-network-wired"></i>
              </div>
              <div className="membership-details">
                <h3>Telecommunications Industry Association</h3>
                <p>Professional Network Member</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="continuing-development">
          <h2 className="section-subtitle">Ongoing Professional Development</h2>
          <p>
            I am currently pursuing additional certifications to further enhance my expertise in 5G technologies,
            RF optimization, and cloud infrastructure for telecommunications. Continuous learning is essential
            in the rapidly evolving field of wireless communications.
          </p>
          
          <div className="upcoming-certifications">
            <div className="upcoming-cert">
              <div className="upcoming-icon">
                <i className="fas fa-satellite"></i>
              </div>
              <div className="upcoming-details">
                <h3>5G Technology Architecture and Deployment</h3>
                <p>Expected completion: Q3 2023</p>
              </div>
            </div>
            
            <div className="upcoming-cert">
              <div className="upcoming-icon">
                <i className="fas fa-cloud"></i>
              </div>
              <div className="upcoming-details">
                <h3>AWS Advanced Networking Specialty</h3>
                <p>In progress</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications; 