import React from 'react';
import './Education.css';

const Education = () => {
  const educationHistory = [
    {
      id: 1,
      degree: "Master of Science in Electrical Engineering",
      institution: "Southern Illinois University Edwardsville",
      location: "Edwardsville, IL",
      period: "August 2016 - May 2018",
      description: "Focused on telecommunications and electronics with research in VLSI design. Coursework included Advanced Communication Systems, Digital Signal Processing, and Wireless Networks.",
      achievements: [
        "Graduate Research Assistant in VLSI design and verification",
        "Project: Implementation of RTL to GDSII flow for digital circuits",
        "Delivered lab sessions on VLSI/CAD design to undergraduate students"
      ]
    },
    {
      id: 2,
      degree: "Bachelor of Technology in Electrical Engineering",
      institution: "Koneru Lakshmaiah University",
      location: "Vijayawada, India",
      period: "August 2012 - April 2016",
      description: "Graduated with honors in Electrical Engineering with emphasis on telecommunications and electronics systems.",
      achievements: [
        "Senior design project: RF signal optimization techniques for wireless networks",
        "Technical lead for university telecom project team",
        "Academic scholarship recipient for excellent academic performance"
      ]
    }
  ];

  const courses = [
    "5G Network Architecture and Protocols",
    "RF Design and Optimization",
    "Digital Signal Processing",
    "Advanced Communication Systems",
    "Wireless Networks",
    "VLSI Design",
    "Antenna Theory and Design",
    "Microwave Theory and Techniques",
    "Network Security",
    "Embedded Systems"
  ];

  return (
    <div className="education-page">
      <div className="container">
        <div className="education-intro">
          <h1 className="section-title">Education</h1>
          <p>
            My academic background in Electrical Engineering has provided me with a strong foundation in
            telecommunications, RF design, and wireless networks, which I continually build upon through
            professional certifications and ongoing learning.
          </p>
        </div>

        <div className="education-timeline">
          {educationHistory.map(edu => (
            <div className="timeline-item" key={edu.id}>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="education-header">
                  <h2 className="degree">{edu.degree}</h2>
                  <div className="institution-info">
                    <span className="institution">{edu.institution}</span>
                    <span className="location">• {edu.location}</span>
                  </div>
                  <div className="period">
                    <i className="far fa-calendar-alt"></i> {edu.period}
                  </div>
                </div>
                
                <p className="education-description">{edu.description}</p>
                
                <div className="achievements">
                  <h3>Key Achievements:</h3>
                  <ul>
                    {edu.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="education-extras">
          <div className="relevant-courses">
            <h2 className="section-subtitle">Relevant Coursework</h2>
            <div className="courses-list">
              {courses.map((course, index) => (
                <div className="course-item" key={index}>
                  <i className="fas fa-book"></i>
                  <span>{course}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="continuing-education">
            <h2 className="section-subtitle">Continuing Education</h2>
            <p>
              I am committed to lifelong learning and regularly participate in professional development
              opportunities, including workshops, seminars, and online courses related to RF engineering,
              5G technologies, and telecommunications.
            </p>
            <div className="learning-platforms">
              <div className="platform">
                <i className="fas fa-laptop-code"></i>
                <span>Professional Workshops</span>
              </div>
              <div className="platform">
                <i className="fas fa-chalkboard-teacher"></i>
                <span>Industry Conferences</span>
              </div>
              <div className="platform">
                <i className="fas fa-desktop"></i>
                <span>Online Specialized Courses</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education; 