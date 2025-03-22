import React from 'react';
import './Education.css';

const Education = () => {
  // Real education data
  const education = [
    {
      id: 1,
      degree: 'Master of Science in Electrical Engineering',
      institution: 'Southern Illinois University Edwardsville',
      location: 'Edwardsville, IL',
      duration: 'August 2016 - May 2018',
      description: 'Advanced studies in Electrical Engineering with focus on design, simulation and layout verification from RTL to GDSII.',
      achievements: [
        'Worked as Graduate Research Assistant from January 2017 to May 2018',
        'Performed DRC & LVS for block and chip level',
        'Delivered lab sessions on VLSI/CAD design to undergraduate students'
      ],
      courses: [
        'VLSI Design',
        'Digital System Design',
        'Advanced Circuit Design',
        'Semiconductor Theory',
        'Computer Architecture'
      ],
      projects: [
        {
          title: 'Graduate Research Project',
          description: 'Worked on design, simulation and layout verification from RTL to GDSII.',
        },
      ],
      image: '',
    },
    {
      id: 2,
      degree: 'Bachelor of Technology in Electrical Engineering',
      institution: 'Koneru Lakshmaiah University',
      location: 'Vijayawada, India',
      duration: 'August 2012 - April 2016',
      description: 'Established a strong foundation in electrical engineering principles, circuit design, and telecommunications systems.',
      achievements: [
        'Specialized in telecommunications and circuit design',
        'Participated in technical workshops and competitions',
        'Completed courses in programming, circuit analysis, and digital electronics'
      ],
      courses: [
        'Circuit Theory',
        'Digital Electronics',
        'Telecommunications',
        'Power Systems',
        'Microcontrollers'
      ],
      projects: [
        {
          title: 'Undergraduate Project',
          description: 'Designed and implemented a telecommunications system project focusing on signal processing.',
        },
      ],
      image: '',
    }
  ];

  return (
    <div className="education-page">
      <div className="container">
        <h1 className="section-title">Education</h1>
        
        <div className="education-intro">
          <p>
            My academic journey in Electrical Engineering has provided me with a strong foundation in RF engineering, telecommunications, and digital systems. Below is a summary of my educational background, highlighting my degrees, coursework, and notable achievements.
          </p>
        </div>
        
        <div className="education-timeline">
          {education.map((item, index) => (
            <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={item.id}>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div className="institution-logo">
                    {item.image ? (
                      <img src={item.image} alt={item.institution} />
                    ) : (
                      <div className="logo-placeholder">
                        <i className="fas fa-graduation-cap"></i>
                      </div>
                    )}
                  </div>
                  <div className="timeline-date">
                    <span>{item.duration}</span>
                  </div>
                </div>
                <div className="timeline-body">
                  <h3 className="degree">{item.degree}</h3>
                  <p className="institution">
                    {item.institution} | <span className="location">{item.location}</span>
                  </p>
                  <div className="education-description">
                    <p>{item.description}</p>
                  </div>
                  
                  <div className="education-details">
                    <div className="detail-section">
                      <h4><i className="fas fa-trophy"></i> Key Achievements</h4>
                      <ul className="achievement-list">
                        {item.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="detail-section">
                      <h4><i className="fas fa-book"></i> Related Coursework</h4>
                      <div className="course-list">
                        {item.courses.map((course, i) => (
                          <span className="course-tag" key={i}>{course}</span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="detail-section">
                      <h4><i className="fas fa-project-diagram"></i> Notable Projects</h4>
                      {item.projects.map((project, i) => (
                        <div className="project-item" key={i}>
                          <h5 className="project-title">{project.title}</h5>
                          <p className="project-description">{project.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="additional-education">
          <h2>Professional Growth</h2>
          <p>
            In addition to my formal education, I continue to expand my knowledge through professional certifications and specialized training in telecommunications, RF engineering, and cloud technologies.
          </p>
          
          <div className="additional-boxes">
            <div className="additional-box">
              <i className="fas fa-certificate"></i>
              <h3>Industry Certifications</h3>
              <p>Obtained multiple certifications including AWS Solution Architect Associate, IBWave Level 1, and Cisco CCNA R&S to enhance my professional credentials.</p>
            </div>
            <div className="additional-box">
              <i className="fas fa-broadcast-tower"></i>
              <h3>RF Specialization</h3>
              <p>Specialized training in RF design, optimization and testing for 5G networks through hands-on experience with industry tools and standards.</p>
            </div>
            <div className="additional-box">
              <i className="fas fa-laptop-code"></i>
              <h3>Technical Development</h3>
              <p>Ongoing professional development in simulation tools, programming languages, and telecommunications infrastructure management.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education; 