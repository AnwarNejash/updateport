import React from 'react';
import "./Skill.css"
import Footer from './Footer';
const Skills = () => {
  const technicalSkills = [
    { category: "Backend", skills: ["Java", "Spring Boot", "Spring Security", "REST APIs", "Microservices"] },
    { category: "Frontend", skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Responsive Design"] },
    { category: "Database", skills: ["SQL", "MySQL", "PostgreSQL", "JPA/Hibernate", "Database Design"] },
    { category: "Tools", skills: ["Git", "Maven", "Postman", "IntelliJ IDEA", "VS Code"] }
  ];

  const softSkills = [
    "Project Management", "Critical Thinking", "Problem Solving", 
    "Team Leadership", "Communication", "Adaptability", "Time Management"
  ];

  return (
    <>
    <section id="skills" className="skills">
      <h2>Technical Capabilities</h2>
      
      {/* Technical Skills */}
      <div className="skills-grid">
        {technicalSkills.map((category, index) => (
          <div key={index} className="skill-category">
            <h3>{category.category}</h3>
            <div className="skill-items">
              {category.skills.map((skill, idx) => (
                <span key={idx} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Soft Skills */}
      <div className="soft-skills">
        <h3>Professional Strengths</h3>
        <div className="soft-skills-grid">
          {softSkills.map((skill, index) => (
            <div key={index} className="soft-skill-item">
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
      <Footer/>
</>
  );
};
export default Skills;