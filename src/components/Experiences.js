import React from 'react';
import '../styles/App.css';
import { FaBriefcase, FaGraduationCap, FaAward } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      date: "2025 - Present",
      title: "Senior Full-Stack Developer & Project Lead",
      company: "Tech Solutions Inc.",
      description: "Leading development teams in building enterprise applications. Managing project timelines, budgets, and client relationships while ensuring technical excellence.",
      icon: <FaBriefcase />
    },
    {
      date: "2024 - 2025",
      title: "Full-Stack Developer",
      company: "Digital Innovations Corp",
      description: "Developed and maintained multiple web applications using React and Spring Boot. Implemented agile methodologies and improved team productivity by 40%.",
      icon: <FaBriefcase />
    },
    {
      date: "2024 - 2025",
      title: "Junior Software Engineer",
      company: "StartUp Ventures",
      description: "Collaborated on developing SaaS products. Gained expertise in full-stack development and project management principles.",
      icon: <FaBriefcase />
    },
    {
      date: "2025 - 2026",
      title: "Software Engineering Intern",
      company: "Global Tech Ltd",
      description: "Assisted in developing web applications and learning industry best practices in software development and project management.",
      icon: <FaBriefcase />
    }
  ];

  const education = [
    {
      date: "2021 - 2025",
      title: "Bachelor of Science in Software Engineering",
      institution: "University of Technology",
      description: "Specialized in software development, project management, and database systems. Graduated with honors.",
      icon: <FaGraduationCap />
    },
    {
      date: "2025",
      title: "Project Management Professional (PMP)",
      institution: "Project Management Institute",
      description: "Certified in project management methodologies, risk management, and stakeholder communication.",
      icon: <FaAward />
    },
    {
      date: "2025",
      title: "AWS Certified Solutions Architect",
      institution: "Amazon Web Services",
      description: "Expertise in designing distributed systems on AWS cloud platform.",
      icon: <FaAward />
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Experience & Education</h2>
        
        <div className="timeline">
          <h3 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--primary-color)' }}>
            Professional Experience
          </h3>
          
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-date">
                  {exp.icon}
                  {exp.date}
                </div>
                <h3 className="timeline-title">{exp.title}</h3>
                <h4 style={{ color: 'var(--accent-color)', marginBottom: '0.5rem' }}>
                  {exp.company}
                </h4>
                <p className="timeline-description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '4rem' }}>
          <h3 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--primary-color)' }}>
            Education & Certifications
          </h3>
          
          <div className="projects-grid">
            {education.map((edu, index) => (
              <div key={index} className="project-card">
                <div className="timeline-content">
                  <div className="timeline-date">
                    {edu.icon}
                    {edu.date}
                  </div>
                  <h3 className="timeline-title">{edu.title}</h3>
                  <h4 style={{ color: 'var(--accent-color)', marginBottom: '0.5rem' }}>
                    {edu.institution}
                  </h4>
                  <p className="timeline-description">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;