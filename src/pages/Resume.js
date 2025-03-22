import React from 'react';
import './Resume.css';

const Resume = () => {
  const workExperience = [
    {
      id: 1,
      position: "RF Engineer 2",
      company: "DISH Wireless L.L.C.",
      location: "Nashville, TN",
      period: "April 2022 – Present",
      description: "Working on RF design and optimization for the first standalone 5G broadband network in the US.",
      responsibilities: [
        "Perform RF design activities related to building the first standalone 5G broadband network in the US",
        "Optimize the end-to-end RF design, propagation modeling and prediction, for deployment of Macro Cell deployment",
        "Determine equipment and power configurations",
        "Work with eNB/RAN and UE teams on RF solutions including modifications to RF link budgets on a per site level basis to meet operations requirements",
        "Perform site candidate evaluation and selection as well as site walks",
        "Work with RF Management to establish design criteria, link budget and traffic analysis as needed for network design and update existing performance parameters for ongoing improvements as required",
        "Manage projects / processes, working independently with limited or no supervision",
        "Coach and review the work of lower-level professionals, Will be expected to be mostly self-managed but may require assistance from management or peers",
        "Coordinate cell site call testing and optimization drive activities and troubleshoot cell site issues as they impede signing off on all tests passing in the market",
        "Working knowledge of at least two of the common industry propagation/planning tools (like Planet or Atoll) and experience with model calibrations",
        "Working knowledge of drive test data post-processing, map generation, frequency planning and interference matrix analysis and site database maintenance, using Windcatcher/Actix/Accuver"
      ]
    },
    {
      id: 2,
      position: "RF Engineer 2",
      company: "TeleWorld Solutions Inc.",
      location: "Irvine, CA",
      period: "August 2021 – April 2022",
      description: "Provided RF engineering support for multi-technology wireless network deployment across customer markets.",
      responsibilities: [
        "Provide support to multi-functional team of R&D, Program Management, Core Networking, RF Engineering, Transport and Technical/Training Support to fulfill multi-technology wireless network deployment across customer markets",
        "Responsible for creating migration summaries and for creating no harm reports for different sites after the migration is completed, frequency planning, interference analysis and optimization",
        "Complete optimization techniques for optimal site/cluster performance (antenna selection, tilts, neighbor-list, etc)",
        "Proficient in neighbor list, parameters, tools and audit process",
        "Knowledge of commands, run scripts, macros, RF tools, Map-info",
        "Optimize site/cluster performance and resolve trouble tickets through reports, tools, scanner and drive test analysis",
        "Drive test data post-processing, map generation, frequency planning and interference matrix analysis, site database maintenance, etc",
        "Work with the Implementation and Operations Teams on the cell site's antenna and RF equipment configuration and database parameters",
        "Present ideas, technical and non-technical, in a logical, compelling manner in a written format and verbally"
      ]
    },
    {
      id: 3,
      position: "RF Engineer 1",
      company: "MobileNet Services, Inc",
      location: "Irvine, CA",
      period: "September 2019 – May 2021",
      description: "Led technical field trials on 5G for FR1 and FR2 for tier 1 and tier 2 carriers and device OEMs.",
      responsibilities: [
        "Logging, Analyzing, documentation and filing data collected and bugs reports during data performance, radio performance and device aggression test using QXDM, slick edit and APEX",
        "Member of NR team responsible for commercialization in different markets for DISH and CHARTER",
        "Testing included DATA throughput, radio performance, Device aggression, cell selection/reselection, Inter, IRAT handovers and NR Features",
        "Raising change request (CR's) against concerned teams such as software, firmware, RRC, RLC & RF and following with them till CR is in built state",
        "Working with various internal team for critical issues to meet deadline for project",
        "Running custom test cases modified in the Spirent's Development library whenever needed",
        "Testing Data Throughput, Call Reliability/Retainability and Device Aggression",
        "Good knowledge in QAM, BLER and MIMO",
        "Reporting Modem crashes to the concerned teams and follows up with them and verifying fixes",
        "Python scripting for updating changes as per testing requirement",
        "Knowledge of LTE and NR call flow process",
        "Perform Mobile Application Testing, IOT, Key performance and Sanity testing on mobile Handsets",
        "Daily flashing for META and MPSS of the devices for different MTPs being used",
        "Expertise in testing Data throughput using DATUM for the MTP in NR SA",
        "Performed test cases both on field and stationary modes on NR SA",
        "Test verification of different NR handsets including features",
        "Coordinating with the Software team to analyze the critical Issues",
        "Working in the lab to verify the functionality of different modem devices and make sure they are working as required",
        "Lead technical field trails on 5G for FR1 and FR2 for tier 1 and tier 2 carriers and also Device OEMs, worked with various technology certified vendors",
        "Lead field trial and root cause analysis using testing and analysis tools like QXDM, QCAT and APEX with the goal of enabling new functionality or identifying the root cause of the issue in network or Device",
        "Performed analysis on LTE, NR network search process, start-up registration process, call process, handover process, IMS process, IRAT process and quickly locate related issues",
        "Familiar with the basic communication principles, understand the SA and NSA network architecture, have a certain understanding of the NAS / RRC protocol, understand the L1 / MAC / RLC layer related protocols",
        "Hands-on experience in collecting Logs for Drive tests using Qualcomm tools like QXDM, System logs and adb logs",
        "Strong experience in debugging UE failures observed during Conformance Testing and Field Testing",
        "LTE Site Shakedowns - Azimuth Verification, swap sector analysis, Handover analysis and Throughput observation (UL/DL), Mobility, Accessibility Test, Stationary Test for DAS sites",
        "Skilled in using field testing tools like QXDM, APEX, QCAT, QPST, SeeHawk Touch, Collect, TEMS, ACTIX, Street Atlas & MapInfo",
        "Worked with android OEMs like Google, Samsung, LG, Motorola",
        "Performed data throughput, Hand Over interchange bands for mobility field testing"
      ]
    },
    {
      id: 4,
      position: "Graduate Research Assistant",
      company: "Southern Illinois University",
      location: "Edwardsville, IL",
      period: "January 2017 - May 2018",
      description: "Worked on VLSI design, simulation and layout verification as a research assistant.",
      responsibilities: [
        "Worked on design, simulation and layout verification from RTL to GDSII",
        "DRC & LVS for block and chip level",
        "Delivered lab sessions on VLSI/CAD design sessions to undergraduate students"
      ]
    }
  ];

  const skills = [
    {
      category: "RF Engineering",
      items: [
        "5G Network Testing (FR1 & FR2)",
        "RF Design & Optimization",
        "Site Evaluation & Deployment",
        "Link Budget Analysis",
        "Propagation Modeling",
        "Network Architecture (SA & NSA)"
      ]
    },
    {
      category: "Software & Tools",
      items: [
        "QXDM, QCAT, APEX, QMI test pro",
        "TEMS, ACTIX, MapInfo",
        "Planet, Atoll",
        "Windcatcher, Accuver",
        "MATLAB, Simulink",
        "Python, Verilog, VHDL"
      ]
    },
    {
      category: "Technical Expertise",
      items: [
        "5G/LTE Protocol Analysis",
        "Drive Test & Post-processing",
        "Frequency Planning",
        "Interference Analysis",
        "RF Equipment Configuration",
        "Debugging & Troubleshooting"
      ]
    }
  ];

  const education = [
    {
      degree: "Master of Science in Electrical Engineering",
      institution: "Southern Illinois University Edwardsville",
      location: "Edwardsville, IL",
      period: "August 2016 - May 2018"
    },
    {
      degree: "Bachelor of Technology in Electrical Engineering",
      institution: "Koneru Lakshmaiah University",
      location: "Vijayawada, India",
      period: "August 2012 - April 2016"
    }
  ];

  const certifications = [
    "AWS Solution Architect Associate",
    "IBWave Level 1 Certified",
    "Level 1 Corning Certified",
    "TEKO DAS Installation and Commissioning – JMA Wireless",
    "Level 1 SOLID ENGINEER – SOLiD",
    "Cisco Certified Network Associate Routing and Switching (CCNA R&S)"
  ];

  return (
    <div className="resume-page">
      <div className="container">
        <h1 className="section-title">Professional Resume</h1>
        
        <div className="resume-intro">
          <p>
            Telecom professional with extensive experience in RF engineering, 5G network deployment, and wireless communications. 
            Specialized in extended feature testing for FR2 and SME for testing with different Telecom Service providers in North America.
          </p>
        </div>
        
        <div className="resume-grid">
          <div className="resume-main">
            <section className="experience-section">
              <h2 className="resume-section-title">
                <i className="fas fa-briefcase"></i> Work Experience
              </h2>
              
              {workExperience.map(job => (
                <div className="experience-item" key={job.id}>
                  <div className="timeline-marker"></div>
                  <div className="experience-content">
                    <div className="experience-header">
                      <h3 className="position">{job.position}</h3>
                      <div className="company-info">
                        <span className="company">{job.company}</span>
                        <span className="location">| {job.location}</span>
                      </div>
                      <div className="period">{job.period}</div>
                    </div>
                    <p className="experience-description">{job.description}</p>
                    <div className="responsibilities">
                      <h4>Key Responsibilities:</h4>
                      <ul>
                        {job.responsibilities.map((responsibility, index) => (
                          <li key={index}>{responsibility}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </section>
          </div>
          
          <div className="resume-sidebar">
            <section className="contact-section">
              <h2 className="resume-section-title">
                <i className="fas fa-id-card"></i> Contact
              </h2>
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
            </section>
            
            <section className="skills-section">
              <h2 className="resume-section-title">
                <i className="fas fa-tools"></i> Skills
              </h2>
              {skills.map((skillGroup, index) => (
                <div className="skill-group" key={index}>
                  <h3 className="skill-category">{skillGroup.category}</h3>
                  <ul className="skill-list">
                    {skillGroup.items.map((skill, i) => (
                      <li key={i}>{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
            
            <section className="education-section">
              <h2 className="resume-section-title">
                <i className="fas fa-graduation-cap"></i> Education
              </h2>
              {education.map((edu, index) => (
                <div className="education-item" key={index}>
                  <h3 className="degree">{edu.degree}</h3>
                  <div className="institution">
                    {edu.institution}
                    <span className="location"> | {edu.location}</span>
                  </div>
                  <div className="period">{edu.period}</div>
                </div>
              ))}
            </section>
            
            <section className="certifications-section">
              <h2 className="resume-section-title">
                <i className="fas fa-certificate"></i> Certifications
              </h2>
              <ul className="certification-list">
                {certifications.map((cert, index) => (
                  <li key={index}>{cert}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>
        
        <div className="resume-actions">
          <a href="#" className="btn download-btn">
            <i className="fas fa-download"></i> Download PDF
          </a>
          <a href="#" className="btn print-btn">
            <i className="fas fa-print"></i> Print Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume; 