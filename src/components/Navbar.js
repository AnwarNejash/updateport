import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaHome, FaUser, FaCode, FaProjectDiagram, FaBriefcase, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home', icon: <FaHome /> },
    { name: 'About', href: '#about', icon: <FaUser /> },
    { name: 'Skills', href: '#skills', icon: <FaCode /> },
    { name: 'Projects', href: '#projects', icon: <FaProjectDiagram /> },
    { name: 'Experience', href: '#experience', icon: <FaBriefcase /> },
    { name: 'Contact', href: '#contact', icon: <FaEnvelope /> },
  ];


  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking on a link
  const handleNavClick = () => {
    setIsOpen(false);
  };

  // Close menu when pressing Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo">
          <span style={{ fontWeight: '700', fontSize: '1.5rem' }}>Nejash Anwar</span>
        </div>
        
        {/* Desktop Navigation */}
        <ul className="nav-links desktop-nav">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                onClick={handleNavClick}
                className="nav-link"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <FaTimes size={24} color="#3182CE" />
          ) : (
            <FaBars size={24} color="#3182CE" />
          )}
        </button>

        {/* Mobile Navigation Overlay */}
        <div className={`mobile-nav-overlay ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(false)}></div>
        
        {/* Mobile Navigation Menu */}
        <div className={`mobile-nav-menu ${isOpen ? 'active' : ''}`}>
          <div className="mobile-nav-header">
            <div className="mobile-logo">Nejash</div>
            <button 
              className="mobile-close-btn" 
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <FaTimes size={24} />
            </button>
          </div>
          
          <ul className="mobile-nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  onClick={handleNavClick}
                  className="mobile-nav-link"
                >
                  <span className="mobile-nav-icon">{link.icon}</span>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="mobile-nav-footer">
            <p>Full-Stack Developer & Project Manager</p>
            <div className="mobile-social-links">
              <a href="https://github.com" aria-label="GitHub">
                <FaCode size={20} />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn">
                <FaBriefcase size={20} />
              </a>
              <a href="mailto:your.email@example.com" aria-label="Email">
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Add CSS directly for this component */}
      <style jsx="true">{`
        /* Mobile Navigation Styles */
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          z-index: 1001;
        }

        .mobile-nav-overlay {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(5px);
          z-index: 999;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .mobile-nav-overlay.active {
          display: block;
          opacity: 1;
        }

        .mobile-nav-menu {
          position: fixed;
          top: 0;
          right: -100%;
          width: 300px;
          height: 100vh;
          background: #FFFFFF;
          box-shadow: -5px 0 25px rgba(0, 0, 0, 0.1);
          z-index: 1000;
          transition: right 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .mobile-nav-menu.active {
          right: 0;
        }

        .mobile-nav-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem;
          border-bottom: 1px solid #E2E8F0;
        }

        .mobile-logo {
          font-size: 1.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .mobile-close-btn {
          background: none;
          border: none;
          cursor: pointer;
          color: #4A5568;
          padding: 0.25rem;
        }

        .mobile-nav-links {
          list-style: none;
          padding: 1.5rem;
          flex: 1;
          overflow-y: auto;
        }

        .mobile-nav-links li {
          margin-bottom: 0.5rem;
        }

        .mobile-nav-link {
          display: flex;
          align-items: center;
          padding: 1rem 1.5rem;
          text-decoration: none;
          color: #2D3748;
          font-weight: 500;
          border-radius: 10px;
          transition: all 0.3s ease;
        }

        .mobile-nav-link:hover {
          background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%);
          color: #667eea;
          transform: translateX(5px);
        }

        .mobile-nav-icon {
          margin-right: 1rem;
          font-size: 1.2rem;
          color: #667eea;
        }

        .mobile-nav-footer {
          padding: 1.5rem;
          border-top: 1px solid #E2E8F0;
          background: #F7FAFC;
        }

        .mobile-nav-footer p {
          color: #718096;
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }

        .mobile-social-links {
          display: flex;
          gap: 1rem;
        }

        .mobile-social-links a {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #4A5568;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        .mobile-social-links a:hover {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          transform: translateY(-2px);
        }

        /* Responsive Styles */
        @media (max-width: 768px) {
          .desktop-nav {
            display: none;
          }

          .mobile-menu-btn {
            display: block;
          }

          .nav-container {
            padding: 0 1rem;
          }

          .navbar.scrolled {
            background: rgba(255, 255, 255, 0.98);
            box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
          }
        }

        /* Tablet Styles */
        @media (max-width: 1024px) {
          .nav-links {
            gap: 1rem;
          }

          .nav-links a {
            font-size: 0.9rem;
          }
        }

        /* Animation for mobile menu items */
        .mobile-nav-link {
          animation: slideIn 0.3s ease forwards;
          opacity: 0;
          transform: translateX(20px);
        }

        .mobile-nav-links li:nth-child(1) .mobile-nav-link {
          animation-delay: 0.1s;
        }
        .mobile-nav-links li:nth-child(2) .mobile-nav-link {
          animation-delay: 0.15s;
        }
        .mobile-nav-links li:nth-child(3) .mobile-nav-link {
          animation-delay: 0.2s;
        }
        .mobile-nav-links li:nth-child(4) .mobile-nav-link {
          animation-delay: 0.25s;
        }
        .mobile-nav-links li:nth-child(5) .mobile-nav-link {
          animation-delay: 0.3s;
        }
        .mobile-nav-links li:nth-child(6) .mobile-nav-link {
          animation-delay: 0.35s;
        }

        @keyframes slideIn {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Active link styles */
        .mobile-nav-link.active {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .mobile-nav-link.active .mobile-nav-icon {
          color: white;
        }

        /* Desktop nav active state */
        .nav-links a.active {
          color: #667eea;
        }

        .nav-links a.active::after {
          width: 100%;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;