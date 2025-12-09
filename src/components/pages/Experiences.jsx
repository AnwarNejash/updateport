import React from 'react';
import Footer from './Footer';
import './Expriences.css';
const Experiences = () => (

          <section className="experience">
    <h2>Career Objectives</h2>
    
    <div className="timeline">
      <div className="timeline-item">
        <h3> Currently   Software Engineering Student</h3>
       
        <p>Developing expertise in full-stack Java development with Spring Boot and React.js</p>
      </div>
      
      <div className="timeline-item">
        <h3>Internship Goals</h3>
        <span className="date">Seeking Opportunity</span>
        <ul>
          <li>Apply Spring Boot expertise in enterprise environment</li>
          <li>Contribute to scalable backend architecture</li>
          <li>Enhance React.js frontend development skills</li>
          <li>Learn industry best practices and team collaboration</li>
        </ul>
      </div>
    </div>
      <Footer/>
  </section>



);
export default Experiences;