import React from 'react';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import '../styles/App.css'
import image from '../assets/images/nejash1.jpg';
import imaglod from '../assets/images/haramaya-logo.png';
const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <h1 className="fade-in-up">Hi, I'm Nejash Anwar</h1>
          <div className="subtitle fade-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="highlight">Software Engineering </span> & 
            <span className="highlight"> Management student at  <img 
              src={imaglod} className='bg-white' alt="Profile" 
            /></span>
          </div>
          <div className="subtitle fade-in-up" style={{ animationDelay: '0.2s' }}>
          <span className="highlight">Full-Stack Developer</span> & 
            <span className="highlight"> Project Manager</span>
          </div>
          <p className="fade-in-up" style={{ animationDelay: '0.4s' }}>
            I build robust web applications using React, Spring Boot, and MySQL. 
            Combining technical expertise with project management skills to deliver 
            exceptional digital solutions.
          </p>
          
          <div className="cta-buttons fade-in-up" style={{ animationDelay: '0.6s' }}>
            <a href="#contact" className="btn btn-primary">
              Get In Touch
            </a>
            <a 
              href="/resume.pdf" 
              className="btn btn-secondary"
              download
            >
              <FaDownload style={{ marginRight: '8px' }} />
              Download CV
            </a>
          </div>

          <div className="social-links" style={{ marginTop: '2rem' }}>
            <a href="https://github.com" className="social-link">
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com" className="social-link">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
        
        <div className="hero-image">
          <div className="avatar-container fade-in-up" style={{ animationDelay: '0.8s' }}>
            {/* Replace with your image */}
            <img 
              src={image} alt="Profile" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;