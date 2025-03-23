import React, { useRef } from 'react';
import './Resume.css';
import resumePDF from '../assets/resume.pdf';

const Resume = () => {
  const resumeRef = useRef(null);

  const handleDownload = () => {
    // Create an anchor element
    const anchor = document.createElement('a');
    anchor.href = resumePDF;
    anchor.download = 'Sri_Sai_Chaithanya_Kandula_Resume.pdf'; // Specify the filename
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  return (
    <div className="resume-page">
      <div className="container" ref={resumeRef}>
        <header className="resume-header">
          <h1 className="resume-title">My Resume</h1>
          <p className="resume-summary">
            Experienced RF Engineer with a proven track record in 5G network deployment, optimization, 
            and troubleshooting. Strong expertise in wireless network testing, monitoring solutions, and site 
            design.
          </p>
        </header>

        <div className="resume-content">
          <div className="resume-main">
            <section className="resume-section">
              <div className="section-header">
                <i className="fas fa-briefcase"></i>
                <h2>Professional Experience</h2>
              </div>
              
              <div className="experience-item">
                <div className="experience-header">
                  <div className="experience-title">
                    <h3>RF Engineer 2</h3>
                    <p className="company">DISH Wireless L.L.C. • Nashville, TN</p>
                  </div>
                  <div className="experience-date">
                    <span>April 2022 - Present</span>
                  </div>
                </div>
                <p className="experience-description">
                  Working on RF design and optimization for the first standalone 5G broadband network in the US.
                </p>
                <div className="responsibilities">
                  <h4>Key Responsibilities:</h4>
                  <ul>
                    <li>Perform RF design activities related to building the first standalone 5G broadband network in the US</li>
                    <li>Optimize the end-to-end RF design, propagation modeling and prediction, for deployment of Macro Cell deployment</li>
                    <li>Determine equipment and power configurations</li>
                    <li>Work with eNodeB/gNB and UE teams on RF solutions including modifications to RF link budgets on a per site level basis to meet operations requirements</li>
                    <li>Perform site candidate evaluation and selection as well as site walks</li>
                    <li>Work with RF Management to establish design criteria, link budget and traffic analysis as needed for network design and update existing performance parameters for ongoing improvements as required</li>
                    <li>Manage projects / processes, working independently with limited or no supervision</li>
                    <li>Coach and review the work of lower-level professionals, Will be expected to be mostly self-managed but can provide assistance from management or peers</li>
                    <li>Coordinate cell site call testing and optimization drive activities and troubleshoot cell site issues during off-air tests passing off on all tests passing in the market</li>
                    <li>Working knowledge of at least two of the common industry propagation/planning tools (like Planet or Atoll) and experience with model calibration</li>
                    <li>Working knowledge of drive test data post-processing, map generation, frequency planning and network database maintenance</li>
                  </ul>
                </div>
              </div>

              <div className="experience-item">
                <div className="experience-header">
                  <div className="experience-title">
                    <h3>RF Engineer 2</h3>
                    <p className="company">TeleWorld Solutions Inc. • Irvine, CA</p>
                  </div>
                  <div className="experience-date">
                    <span>August 2021 - April 2022</span>
                  </div>
                </div>
                <p className="experience-description">
                  Provided RF engineering support for multi-technology wireless network deployment across customer markets.
                </p>
                <div className="responsibilities">
                  <h4>Key Responsibilities:</h4>
                  <ul>
                    <li>Provide support to multi-functional team of RAN, Program Management, Core Engineering, RF Engineering, and Technical/Wireline Support to fulfill project based requirements</li>
                    <li>Responsible for creating migration summaries and for creating no harm reports for different sites after the migration is completed, frequency planning, interference analysis and optimization</li>
                    <li>Complete optimization techniques for optimal site/cluster performance (antenna selection, tilts, neighbor-list, etc)</li>
                    <li>Proficient in neighbor-list parameters, tools and audit process</li>
                    <li>Knowledge of commands, run scripts, macros, RF tools, Map-info</li>
                    <li>Optimize site/cluster performance and resolve trouble tickets through reports, tools, scanner and drive test analysis</li>
                    <li>Drive test data post-processing, map generation, frequency planning and database maintenance, etc</li>
                    <li>Work with the Implementation and Operations Teams on the cell site's antenna and RF equipment configurations</li>
                    <li>Present logic, technical and non-technical, in a logical, compelling manner in a presentation format and verbally</li>
                  </ul>
                </div>
              </div>

              <div className="experience-item">
                <div className="experience-header">
                  <div className="experience-title">
                    <h3>RF Engineer 1</h3>
                    <p className="company">MobileNet Services, Inc. • Irvine, CA</p>
                  </div>
                  <div className="experience-date">
                    <span>September 2018 - May 2021</span>
                  </div>
                </div>
                <p className="experience-description">
                  Led technical field trials on 5G for FR1 and FR2 for tier 1 and tier 2 carriers and device OEMs.
                </p>
                <div className="responsibilities">
                  <h4>Key Responsibilities:</h4>
                  <ul>
                    <li>Logging, Analyzing, documenting and filing data collected and bugs reports during data performance, radio performance and device aggression test using QXDM, click and APEX</li>
                    <li>Member of Iot team responsible for commercialization in different markets for CAT M and CATMNB</li>
                    <li>Testing included DATA throughput, radio performance, Device aggression, cell selection/reselection, timer, RLF handovers and system features</li>
                    <li>Making change request (CR's) against concerned teams such as software, firmware, RRC, NAS and other stake</li>
                    <li>Working with various internal team for critical issues to meet deadline for testing</li>
                    <li>Running custom test cases included in the Spirent's Development library wherever needed</li>
                    <li>Testing Data Throughput, Call Reliability/Retainability and Device Aggression</li>
                    <li>Good knowledge in QXDM, RLF and MIMO</li>
                    <li>Reporting Modem crashes to the concerned teams and follows up with them and verifying fixes</li>
                    <li>Python scripting for updating changes as per testing requirement</li>
                    <li>Knowledge of LTE and NR call flow process</li>
                    <li>Perform Mobile Application Testing, IOT, Key performance and Sanity testing on mobile Hardware</li>
                    <li>Daily flashing for META and MPS of the devices for different MTPs being used</li>
                    <li>Expertise in testing Data throughput using DATAKE for the MTP in VR SA</li>
                    <li>Performed test cases both on field and stationary modes on NR SA</li>
                    <li>Test verification of different NR handsets including features</li>
                    <li>Collaborating with the Software team to analyze the critical issues</li>
                    <li>Working in the lab to verify the functionality of different modem devices and analyze the power consumption</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          <div className="resume-sidebar">
            <section className="contact-section">
              <div className="section-header">
                <i className="fas fa-address-card"></i>
                <h2>Contact Info</h2>
              </div>
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
                <div className="contact-item">
                  <i className="fab fa-linkedin"></i>
                  <a href="https://www.linkedin.com/in/sri-sai-chaithanya-kandula/" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/sri-sai-chaithanya-kandula
                  </a>
                </div>
              </div>
            </section>

            <section className="skills-section">
              <div className="section-header">
                <i className="fas fa-cogs"></i>
                <h2>Skills & Expertise</h2>
              </div>
              <div className="skills-list">
                <div className="skill-category">
                  <h3>RF Engineering</h3>
                </div>
                <div className="skill-category">
                  <h3>5G Network Testing (FR1 & FR2)</h3>
                </div>
                <div className="skill-category">
                  <h3>RF Design & Optimization</h3>
                </div>
                <div className="skill-category">
                  <h3>Site Evaluation & Deployment</h3>
                </div>
                <div className="skill-category">
                  <h3>Link Budget Analysis</h3>
                </div>
                <div className="skill-category">
                  <h3>Propagation Modeling</h3>
                </div>
                <div className="skill-category">
                  <h3>Network Architecture (SA & NSA)</h3>
                </div>
              </div>

              <div className="section-header software-header">
                <i className="fas fa-laptop-code"></i>
                <h2>Software & Tools</h2>
              </div>
              <div className="skills-list">
                <div className="skill-category">
                  <h3>QXDM, QCAT, APEX, DM Text pro</h3>
                </div>
                <div className="skill-category">
                  <h3>TEMS, ACTIX, MapInfo</h3>
                </div>
                <div className="skill-category">
                  <h3>Planet, Atoll</h3>
                </div>
                <div className="skill-category">
                  <h3>Windcatcher, Accuver</h3>
                </div>
                <div className="skill-category">
                  <h3>MATLAB, Simulink</h3>
                </div>
                <div className="skill-category">
                  <h3>Python, Verilog, VHDL</h3>
                </div>
              </div>

              <div className="section-header technical-header">
                <i className="fas fa-tools"></i>
                <h2>Technical Expertise</h2>
              </div>
              <div className="skills-list">
                <div className="skill-category">
                  <h3>SS/LTE Protocol Analysis</h3>
                </div>
                <div className="skill-category">
                  <h3>Drive Test & Post-processing</h3>
                </div>
                <div className="skill-category">
                  <h3>Frequency Planning</h3>
                </div>
                <div className="skill-category">
                  <h3>Interference Analysis</h3>
                </div>
                <div className="skill-category">
                  <h3>RF Equipment Configuration</h3>
                </div>
                <div className="skill-category">
                  <h3>Debugging & Troubleshooting</h3>
                </div>
              </div>
            </section>

            <section className="education-section">
              <div className="section-header">
                <i className="fas fa-graduation-cap"></i>
                <h2>Education</h2>
              </div>
              <div className="education-item">
                <h3>Master of Science in Electrical Engineering</h3>
                <div className="institution">
                  <p>Southern Illinois University Edwardsville,</p>
                  <p>Edwardsville, IL</p>
                </div>
                <p className="education-date">August 2016 - May 2018</p>
              </div>
              <div className="education-item">
                <h3>Bachelor of Technology in Electrical Engineering</h3>
                <div className="institution">
                  <p>Koneru Lakshmaiah University, Vijayawada,</p>
                  <p>India</p>
                </div>
                <p className="education-date">August 2012 - April 2016</p>
              </div>
            </section>

            <section className="certifications-section">
              <div className="section-header">
                <i className="fas fa-certificate"></i>
                <h2>Certifications</h2>
              </div>
              <ul className="certifications-list">
                <li>AWS Solution Architect Associate</li>
                <li>IBWave Level 1 Certified</li>
                <li>Level 1 Corning Certified</li>
                <li>TEKO DAS Installation and Commissioning – JMA Wireless</li>
                <li>Level 1 SOLID ENGINEER – SOLID</li>
                <li>Cisco Certified Network Associate Router and Switching (CCNA R&S)</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
      
      <div className="resume-actions">
        <button onClick={handleDownload} className="download-btn">
          <i className="fas fa-download"></i> Download Resume
        </button>
      </div>
    </div>
  );
};

export default Resume; 