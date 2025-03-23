import React, { useState } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  // Work experience data
  const workExperience = [
    {
      id: 1,
      position: "RF Engineer 2",
      company: "DISH Wireless L.L.C.",
      location: "Nashville, TN",
      period: "April 2022 - Present",
      highlights: [
        "Working on RF design and optimization for the first standalone 5G broadband network in the US",
        "Optimizing end-to-end RF design and propagation modeling for Macro Cell deployment",
        "Performing site candidate evaluation and selection, and coordinating cell site testing"
      ],
      icon: "fa-broadcast-tower"
    },
    {
      id: 2,
      position: "RF Engineer 2",
      company: "TeleWorld Solutions Inc.",
      location: "Irvine, CA",
      period: "August 2021 - April 2022",
      highlights: [
        "Provided RF engineering support for multi-technology wireless network deployment",
        "Created migration summaries and no harm reports after migration completion",
        "Optimized site/cluster performance through antenna selection, tilts, and neighbor-list configuration"
      ],
      icon: "fa-signal"
    },
    {
      id: 3,
      position: "RF Engineer 1",
      company: "MobileNet Services, Inc.",
      location: "Irvine, CA",
      period: "September 2018 - May 2021",
      highlights: [
        "Led technical field trials on 5G for FR1 and FR2 for tier 1 and tier 2 carriers and device OEMs",
        "Analyzed and documented data collected during performance testing using QXDM, click and APEX",
        "Performed testing for DATA throughput, radio performance, and device aggression"
      ],
      icon: "fa-mobile-alt"
    }
  ];

  const projects = [
    {
      id: 1,
      title: "Network Monitoring Dashboard Suite",
      icon: "fa-chart-line",
      pattern: "grid",
      placeholderType: "chart",
      category: ["dashboards", "monitoring"],
      description: "Designed and implemented a comprehensive dashboard suite in Looker Studio to monitor over 1,000 cell sites, tracking site availability, ticket status, and network performance metrics.",
      technologies: ["Looker Studio", "SQL", "API Integration", "BigQuery", "Data Visualization"],
      outcomes: [
        "Reduced ticket closure time by 35%",
        "Improved site availability tracking by 40%",
        "Enabled real-time monitoring of critical metrics"
      ]
    },
    {
      id: 2,
      title: "Automated Email Notification System",
      icon: "fa-envelope-open-text",
      pattern: "dots",
      placeholderType: "process",
      category: ["automation", "monitoring"],
      description: "Developed an automated system that generates daily reports on network drops and setup failures, delivering critical information to stakeholders via scheduled email notifications.",
      technologies: ["Python", "Email API", "Scripting", "Task Scheduling", "Data Processing"],
      outcomes: [
        "Saved 10+ hours per week in manual reporting",
        "Increased stakeholder awareness of network issues",
        "Enabled faster response to critical failures"
      ]
    },
    {
      id: 3,
      title: "Coverage Analysis & Site Design",
      icon: "fa-map-marked-alt",
      pattern: "wave",
      placeholderType: "map",
      category: ["rf-design", "analysis"],
      description: "Utilized QGIS and Planet for spatial analysis and site design, optimizing coverage for new cell sites and improving existing network infrastructure.",
      technologies: ["QGIS", "Planet", "Signal Propagation", "Geospatial Analysis", "RF Planning"],
      outcomes: [
        "Optimized coverage for 50+ new site implementations",
        "Improved signal quality in previously underserved areas",
        "Reduced interference between neighboring sites"
      ]
    },
    {
      id: 4,
      title: "High-Volume Network Troubleshooting",
      icon: "fa-tools",
      pattern: "circuit",
      placeholderType: "diagram",
      category: ["optimization", "monitoring"],
      description: "Led troubleshooting efforts for a network handling over 100,000 calls daily, addressing issues such as data throttling, dropped calls, and roaming connectivity.",
      technologies: ["Network Analysis Tools", "Call Trace Analysis", "Protocol Analysis", "RF Optimization"],
      outcomes: [
        "Reduced dropped call rate by 28%",
        "Improved data retainability metrics by 22%",
        "Enhanced overall customer experience"
      ]
    },
    {
      id: 5,
      title: "Task Automation Suite",
      icon: "fa-robot",
      pattern: "grid",
      placeholderType: "stats",
      category: ["automation", "optimization"],
      description: "Implemented a suite of automation tools to streamline routine tasks, including ticket processing, report generation, and data aggregation across multiple platforms.",
      technologies: ["Python", "Shell Scripting", "REST APIs", "Database Integration", "Process Automation"],
      outcomes: [
        "Automated 75% of repetitive daily tasks",
        "Reduced human error in data processing",
        "Freed up team resources for high-value activities"
      ]
    },
    {
      id: 6,
      title: "Customer Experience Monitoring System",
      icon: "fa-user-check",
      pattern: "wave",
      placeholderType: "chart",
      category: ["dashboards", "monitoring"],
      description: "Created a dedicated monitoring system to track customer experience metrics related to service issues such as data throttling, roaming performance, and call quality.",
      technologies: ["Data Visualization", "Real-time Monitoring", "Customer Analytics", "API Integration"],
      outcomes: [
        "Provided visibility into 8 key customer experience metrics",
        "Enabled proactive issue resolution before customer complaints",
        "Supported data-driven decision making for service improvements"
      ]
    }
  ];

  const filters = [
    { value: 'all', label: 'All Projects' },
    { value: 'dashboards', label: 'Dashboards' },
    { value: 'automation', label: 'Automation' },
    { value: 'rf-design', label: 'RF Design' },
    { value: 'optimization', label: 'Network Optimization' },
    { value: 'monitoring', label: 'Monitoring Systems' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category.includes(activeFilter));

  const renderPlaceholder = (project) => {
    return (
      <div className={`image-placeholder bg-${project.id % 5 + 1}`}>
        <div className={`placeholder-pattern ${project.pattern}`}></div>
        <i className={`fas ${project.icon} placeholder-icon`}></i>
        <div className="placeholder-text">{project.title}</div>
        
        {project.placeholderType === 'chart' && (
          <div className="data-visualization">
            <div className="data-bar"></div>
            <div className="data-bar"></div>
            <div className="data-bar"></div>
            <div className="data-bar"></div>
            <div className="data-bar"></div>
          </div>
        )}
        
        {project.placeholderType === 'stats' && (
          <div className="circle-stats">
            <div className="circle-stat"></div>
            <div className="circle-stat"></div>
            <div className="circle-stat"></div>
          </div>
        )}
        
        {project.placeholderType === 'diagram' && (
          <div className="diagram-container">
            {Array.from({ length: 5 }).map((_, i) => (
              <div 
                key={i}
                className="diagram-line" 
                style={{
                  width: `${30 + i * 10}px`,
                  top: `${10 + i * 15}px`,
                  transform: `rotate(${-20 + i * 10}deg)`
                }}>
                <div 
                  className="diagram-dot" 
                  style={{ left: `${30 + i * 10}px`, top: '0px' }}
                ></div>
              </div>
            ))}
          </div>
        )}
        
        {project.placeholderType === 'map' && (
          <div className="diagram-container" style={{ width: '150px', height: '100px' }}>
            <div className="diagram-line" style={{ width: '120px', top: '50px', transform: 'rotate(0deg)' }}>
              <div className="diagram-dot" style={{ left: '40px', top: '0px' }}></div>
              <div className="diagram-dot" style={{ left: '80px', top: '0px' }}></div>
            </div>
            <div className="diagram-line" style={{ width: '100px', top: '30px', transform: 'rotate(-15deg)' }}>
              <div className="diagram-dot" style={{ left: '30px', top: '0px' }}></div>
              <div className="diagram-dot" style={{ left: '70px', top: '0px' }}></div>
            </div>
            <div className="diagram-line" style={{ width: '80px', top: '70px', transform: 'rotate(20deg)' }}>
              <div className="diagram-dot" style={{ left: '20px', top: '0px' }}></div>
              <div className="diagram-dot" style={{ left: '60px', top: '0px' }}></div>
            </div>
          </div>
        )}
        
        {project.placeholderType === 'process' && (
          <div className="diagram-container" style={{ width: '180px', height: '60px' }}>
            <div className="diagram-line" style={{ width: '40px', top: '30px', transform: 'rotate(0deg)' }}>
              <div className="diagram-dot" style={{ left: '0px', top: '0px' }}></div>
              <div className="diagram-dot" style={{ left: '40px', top: '0px' }}></div>
            </div>
            <div className="diagram-line" style={{ width: '40px', top: '30px', left: '40px', transform: 'rotate(0deg)' }}>
              <div className="diagram-dot" style={{ left: '40px', top: '0px' }}></div>
            </div>
            <div className="diagram-line" style={{ width: '40px', top: '30px', left: '80px', transform: 'rotate(0deg)' }}>
              <div className="diagram-dot" style={{ left: '40px', top: '0px' }}></div>
            </div>
            <div className="diagram-line" style={{ width: '40px', top: '30px', left: '120px', transform: 'rotate(0deg)' }}>
              <div className="diagram-dot" style={{ left: '40px', top: '0px' }}></div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="portfolio-page">
      <div className="container">
        {/* Work Experience Section */}
        <div className="experience-section">
          <h1>Professional Experience</h1>
          <p className="experience-intro">
            My career trajectory in RF engineering has equipped me with extensive expertise in 5G networks, 
            wireless communications, and telecom infrastructure development. Here's a snapshot of my professional journey:
          </p>
          
          <div className="experience-timeline">
            {workExperience.map(job => (
              <div className="experience-card" key={job.id}>
                <div className="experience-icon">
                  <i className={`fas ${job.icon}`}></i>
                </div>
                <div className="experience-content">
                  <div className="experience-header">
                    <h3>{job.position}</h3>
                    <span className="experience-period">{job.period}</span>
                  </div>
                  <div className="experience-company">
                    <i className="fas fa-building"></i> {job.company} • <i className="fas fa-map-marker-alt"></i> {job.location}
                  </div>
                  <ul className="experience-highlights">
                    {job.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="portfolio-intro">
          <h1>Technical Portfolio</h1>
          <p>
            Showcasing my technical achievements in telecommunications and RF engineering, including 
            monitoring solutions, automation tools, and network optimization projects that have improved 
            operational efficiency and network performance.
          </p>
        </div>

        <div className="portfolio-filters">
          {filters.map(filter => (
            <button
              key={filter.value}
              className={`filter-btn ${activeFilter === filter.value ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map(project => (
            <div className="portfolio-card" key={project.id}>
              <div className="portfolio-image">
                {renderPlaceholder(project)}
              </div>
              <div className="portfolio-content">
                <h3 className="portfolio-title">{project.title}</h3>
                <p className="portfolio-description">{project.description}</p>
                
                <div className="portfolio-details">
                  <div className="technologies">
                    <h4>Technologies Used</h4>
                    <div className="tech-tags">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="outcomes">
                    <h4>Key Outcomes</h4>
                    <ul className="outcomes-list">
                      {project.outcomes.map((outcome, index) => (
                        <li key={index}>{outcome}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="portfolio-metrics">
          <h2>Impact Metrics</h2>
          <div className="metrics-grid">
            <div className="metric-card">
              <div className="metric-icon">
                <i className="fas fa-tachometer-alt"></i>
              </div>
              <div className="metric-value">1000+</div>
              <div className="metric-label">Sites Monitored Daily</div>
            </div>
            
            <div className="metric-card">
              <div className="metric-icon">
                <i className="fas fa-clock"></i>
              </div>
              <div className="metric-value">80%</div>
              <div className="metric-label">Reduction in Ticket Resolution Time</div>
            </div>
            
            <div className="metric-card">
              <div className="metric-icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div className="metric-value">100K+</div>
              <div className="metric-label">Daily Calls Monitored</div>
            </div>
            
            <div className="metric-card">
              <div className="metric-icon">
                <i className="fas fa-tasks"></i>
              </div>
              <div className="metric-value">75%</div>
              <div className="metric-label">Task Automation Achieved</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio; 