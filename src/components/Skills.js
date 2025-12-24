import React from 'react';

import { 
  FaReact, FaJava, FaDatabase, FaCode, 
  FaProjectDiagram, FaTools, FaChartLine 
} from 'react-icons/fa';
import { SiSpringboot, SiMysql, SiJavascript, SiHtml5, SiCss3 } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FaReact />,
      skills: [
        "React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Redux",
        "Material-UI", "Bootstrap", "Responsive Design", "Webpack",
        "Jest & Testing Library"
      ]
    },
    {
      title: "Backend Development",
      icon: <FaJava />,
      skills: [
        "Java", "Spring Boot", "Spring Security", "Spring Data JPA",
        "REST APIs", "Microservices", "Hibernate", "Maven", "Gradle"
      ]
    },
    {
      title: "Database & DevOps",
      icon: <FaDatabase />,
      skills: [
        "MySQL", "PostgreSQL", "MongoDB", "Redis",
        "Docker", "AWS", "CI/CD", "Git", "Linux"
      ]
    },
    {
      title: "Project Management",
      icon: <FaProjectDiagram />,
      skills: [
        "Agile/Scrum", "JIRA", "Confluence", "Risk Management",
        "Budget Planning", "Team Leadership", "Stakeholder Management",
        "Project Planning", "Quality Assurance"
      ]
    },
    {
      title: "Problem Solving",
      icon: <FaChartLine />,
      skills: [
        "Critical Thinking", "Analytical Skills", "System Design",
        "Algorithm Optimization", "Debugging", "Performance Tuning",
        "Root Cause Analysis", "Decision Making"
      ]
    },
    {
      title: "Tools & Methodologies",
      icon: <FaTools />,
      skills: [
        "GitHub/GitLab", "Postman", "Swagger", "Figma",
        "UML Diagrams", "ER Modeling", "Design Patterns",
        "SOLID Principles", "Clean Architecture"
      ]
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        
        <div className="skills-container">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category fade-in-up">
              <h3 className="category-title">
                {category.icon}
                {category.title}
              </h3>
              
              <div className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Visualization */}
        <div style={{ marginTop: '4rem' }}>
          <h3 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--primary-color)' }}>
            Primary Tech Stack
          </h3>
          
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            flexWrap: 'wrap',
            gap: '2rem'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                background: 'var(--gradient-primary)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                color: 'white',
                fontSize: '2.5rem'
              }}>
                <FaReact />
              </div>
              <span>React.js</span>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                background: 'var(--gradient-primary)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                color: 'white',
                fontSize: '2.5rem'
              }}>
                <FaJava />
              </div>
              <span>Java</span>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                background: 'var(--gradient-primary)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                color: 'white',
                fontSize: '2.5rem'
              }}>
                <SiSpringboot />
              </div>
              <span>Spring Boot</span>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                background: 'var(--gradient-primary)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                color: 'white',
                fontSize: '2.5rem'
              }}>
                <SiMysql />
              </div>
              <span>MySQL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;