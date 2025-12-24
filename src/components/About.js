import React from 'react';
import { FaCode, FaProjectDiagram, FaUsers, FaLightbulb } from 'react-icons/fa';
import '../styles/App.css';
import image from '../assets/images/nejash2-47.jpg';
const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-image">
            <img 
              src={image} 
              alt="About Me" 
            />
          </div>
          
          <div className="about-text">
            <p>
              I'm a passionate Full-Stack Developer with expertise in both frontend 
              and backend technologies. My primary tech stack includes React.js for 
              frontend development and Java Spring Boot with MySQL for backend solutions.
            </p>
            
            <p>
              As a Project Manager, I specialize in Agile methodologies, risk management, 
              and team leadership. I excel at transforming complex problems into 
              efficient, scalable solutions while ensuring projects are delivered 
              on time and within budget.
            </p>
            
            <p>
              My approach combines technical excellence with strategic thinking, 
              allowing me to bridge the gap between development teams and 
              stakeholders effectively.
            </p>
            
            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-number">5+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
              
              <div className="stat-item">
                <div className="stat-number">3+</div>
                <div className="stat-label">Years Experience</div>
              </div>
            </div>
          </div>
        </div>

        {/* Management Principles Section */}
        <div className="management-principles">
          <h3 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--primary-color)' }}>
            <FaLightbulb style={{ marginRight: '10px' }} />
            Management & Problem-Solving Approach
          </h3>
          
          <div className="principle-grid">
            <div className="principle-card">
              <div className="principle-icon">
                <FaProjectDiagram />
              </div>
              <h4 className="principle-title">Agile Leadership</h4>
              <p className="principle-description">
                Implementing Scrum and Kanban methodologies to ensure adaptive planning, 
                evolutionary development, and continuous improvement.
              </p>
            </div>
            
            <div className="principle-card">
              <div className="principle-icon">
                <FaUsers />
              </div>
              <h4 className="principle-title">Team Collaboration</h4>
              <p className="principle-description">
                Fostering transparent communication and collaborative environments 
                to maximize team productivity and innovation.
              </p>
            </div>
            
            <div className="principle-card">
              <div className="principle-icon">
                <FaCode />
              </div>
              <h4 className="principle-title">Technical Excellence</h4>
              <p className="principle-description">
                Maintaining high coding standards, implementing best practices, 
                and ensuring scalable architecture for long-term success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;