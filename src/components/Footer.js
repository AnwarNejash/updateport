import React from 'react';

import { FaGithub, FaLinkedin, FaTwitter, FaHeart, FaFacebook, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">Nejash Anwar</div>
          
          <div className="social-links">
            <a href="https://github.com/AnwarNejash/portfoliomyporject" className="social-link">
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com" className="social-link">
              <FaLinkedin size={20} />
            </a>
            <a href="https://twitter.com" className="social-link">
              <FaTwitter size={20} />
            </a>
            <a href="https://facebook.com" className="social-link">
              <FaFacebook size={20} />
            </a>
            <a href="https://tiktoke.com" className="social-link">
              <FaTiktok size={20} />
           
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>
            © {currentYear} [Your Name]. All rights reserved. 
            <br />
            Built with <FaHeart style={{ color: '#E53E3E', margin: '0 5px' }} /> 
            using React.js
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;