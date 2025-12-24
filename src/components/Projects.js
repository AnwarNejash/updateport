import React from 'react';
import ima from '../assets/images/OIF.png';

import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React frontend, Spring Boot backend, and MySQL database. Features include user authentication, payment integration, and admin dashboard.",
      image: {ima},
      technologies: ["React", "Spring Boot", "MySQL", "JWT", "Stripe API"],
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      title: "Project Management Tool",
      description: "Comprehensive project management application with real-time collaboration, task tracking, and analytics dashboard.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w-600&q=80",
      technologies: ["React", "Spring Boot", "WebSocket", "Redis", "Docker"],
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      title: "Healthcare Management System",
      description: "Secure patient management system with appointment scheduling, electronic health records, and prescription management.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      technologies: ["React", "Spring Security", "MySQL", "Jasper Reports", "REST API"],
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      title: "Banking Application",
      description: "Secure banking application with transaction processing, account management, and fraud detection system.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      technologies: ["Spring Boot", "React", "OAuth2", "MySQL", "Microservices"],
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      title: "Inventory Management",
      description: "Real-time inventory tracking system with barcode scanning, stock alerts, and reporting features.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      technologies: ["React", "Spring Boot", "MySQL", "WebSocket", "Chart.js"],
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      title: "Learning Management System",
      description: "Online education platform with course management, video streaming, and student progress tracking.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      technologies: ["React", "Spring Boot", "MongoDB", "FFmpeg", "Redis"],
      github: "https://github.com",
      live: "https://example.com"
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card fade-in-up">
              <div className="project-image">
                <img src={ima} alt={project.title} />
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a 
                    href={project.github} 
                    className="btn btn-secondary"
                    style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}
                  >
                    <FaGithub style={{ marginRight: '5px' }} />
                    Code
                  </a>
                  <a 
                    href={project.live} 
                    className="btn btn-primary"
                    style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}
                  >
                    <FaExternalLinkAlt style={{ marginRight: '5px' }} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;