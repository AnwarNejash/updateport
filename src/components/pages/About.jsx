import React from 'react';
import './About.css';
import nejash from '../../assets/images/nejash.jpg';
import Footer from './Footer';
const About = () => (
   <>
         <section id="about" className="about">
    <h2>About Me</h2>
     <img src={nejash} alt=""  className=" image"/>
    <div className="about-content">
      
      <div className="about-text">
        <p className="texts">
          
          I am a passionate Software Engineering student with strong critical thinking 
          abilities and expertise in full-stack development. My approach combines 
          technical excellence with strategic project management.
        </p>
        
        <h3>My Development Philosophy:</h3>
        <ul>
          <li> Backend-first mindset with robust Java/Spring Boot architecture</li>
          <li> Clean, efficient frontend with React.js</li>
          <li> Database optimization and management</li>
          <li> Critical analysis of every technical decision</li>
          <li>End-to-end project ownership</li>
        </ul>
      </div>
    </div>
  </section>
    <Footer/>
</>
 
);
export default About;