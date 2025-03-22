import React, { useState } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Network Monitoring Dashboard Suite",
      image: "/images/portfolio/dashboard.jpg",
      icon: "fa-chart-line",
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
      image: "/images/portfolio/automation.jpg",
      icon: "fa-envelope-open-text",
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
      image: "/images/portfolio/coverage.jpg",
      icon: "fa-map-marked-alt",
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
      image: "/images/portfolio/troubleshooting.jpg",
      icon: "fa-tools",
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
      image: "/images/portfolio/workflow.jpg",
      icon: "fa-robot",
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
      image: "/images/portfolio/customer.jpg",
      icon: "fa-user-check",
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

  return (
    <div className="portfolio-page">
      <div className="container">
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
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <div className="image-placeholder">
                    <i className={`fas ${project.icon}`}></i>
                  </div>
                )}
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