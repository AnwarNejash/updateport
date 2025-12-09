import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025   Your Name. All rights reserved.</p>

        <div className="social-links">
          <p><a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            GitHub
          </a></p>
        <p>  <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a></p>
          <p><a href="mailto:your.email@domain.com">
            Email
          </a></p>
         <p>  <a href="mailto:your.email@domain.com">
           Facebook
          </a></p>
          <p> <a href="mailto:your.email@domain.com">
          Tiktok
          </a></p>
          <p> <a href="mailto:your.email@domain.com">
           Telegram
          </a></p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;