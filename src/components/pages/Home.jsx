// components/Hero/Hero.js
import React from 'react';
import './Home.css';
import nejash from '../../assets/images/nejash.jpg';
import Footer from './Footer';

const Home = () => {
  return (
    <>
      <section id="home" className="home">
      <div className="hero-content">
       
 <img src={nejash} alt=""  className=" image"/>
        <h1 className=" myname"> I am Nejash Anwar  </h1>
        <h2>Full-Stack Developer based in Ethiopia</h2>
        
        <p>Specializing in Spring Boot Backend & React Frontend</p>
        <p className="hero-subtitle"><p>Critical Thinker</p>
        <p>  • Project Manager</p>
           <p>• Problem Solver</p>
           </p>
       <a href=" aboutme.html"> <button className="cta-button">View My Work</button></a>
        <button className="cta-button">My Resume</button>
      </div>
     
    </section>
  <Footer/></>

  );
};

export default Home;