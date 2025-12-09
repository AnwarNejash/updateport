import react from "react";
import './Project.css'
import Footer from "./Footer";
const Project = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Backend System",
      description: "Complete REST API with Spring Boot featuring user authentication, product management, and order processing",
      backend: ["Java", "Spring Boot", "Spring Security", "JWT", "MySQL"],
      frontend: ["React", "JavaScript", "CSS3"],
      features: ["User Authentication", "Product CRUD", "Order Management", "Payment Integration"],
      github: "#",
      live: "#"
    },
    {
      id: 2,
      title: "Task Management Application",
      description: "Full-stack application for project task tracking with real-time updates",
      backend: ["Spring Boot", "REST APIs", "Hibernate"],
      frontend: ["React.js", "Context API", "Material-UI"],
      features: ["CRUD Operations", "User Roles", "Real-time Updates", "Dashboard Analytics"],
      github: "#",
      live: "#"
    }
  ];

  return (
   <>
        <section id="projects" className="projects">
      <h2>Full-Stack Projects</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            
            <div className="tech-stack">
              <strong>Backend:</strong> {project.backend.join(", ")}
            </div>
            <div className="tech-stack">
              <strong>Frontend:</strong> {project.frontend.join(", ")}
            </div>
            
            <div className="project-features">
              <strong>Key Features:</strong>
              <ul>
                {project.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
            
            <div className="project-links">
              <a href={project.github}>GitHub</a>
              <a href={project.live}>Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
      <Footer/>
</>
   
  );
};
export default Project;