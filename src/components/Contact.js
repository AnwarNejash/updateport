import React, { useState } from 'react';

import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Initialize EmailJS with your public key
      emailjs.init('npgga0uWqqDf9lR6J'); // Replace with your EmailJS public key

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message
      };

      await emailjs.send(
        'service_1kia68s', // Replace with your EmailJS service ID
        ' templateParams', // Replace with your EmailJS template ID
       
      );

      setSubmitMessage('Message sent successfully! I will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
    } catch (error) {
      setSubmitMessage('Failed to send message. Please try again or email me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div className="contact-details">
                <h4>Email</h4>
                <p>your.email@example.com</p>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>
                  Response time: Within 24 hours
                </p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <FaPhone />
              </div>
              <div className="contact-details">
                <h4>Phone</h4>
                <p>+125  90738-7504</p>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>
                  Available: Mon-Fri, 9AM-6PM EST
                </p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="contact-details">
                <h4>Location</h4>
                <p>Ethiopia, oromia</p>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>
                  Open to remote work & relocation
                </p>
              </div>
            </div>

            <div style={{ 
              background: 'var(--gradient-primary)', 
              padding: '2rem', 
              borderRadius: '10px',
              color: 'white',
              marginTop: '1rem'
            }}>
              <h4 style={{ marginBottom: '1rem' }}>Let's Work Together!</h4>
              <p>
                I'm currently available for full-time positions, contract work, 
                and freelance projects. Whether you need a full-stack developer, 
                project manager, or both - let's discuss how I can help your team succeed.
              </p>
            </div>
          </div>
          
          <div className="contact-form">
            <h3 style={{ marginBottom: '2rem', color: 'var(--primary-color)' }}>
              Send me a message
            </h3>
            
            {submitMessage && (
              <div style={{
                padding: '1rem',
                background: submitMessage.includes('successfully') ? '#38A16920' : '#E53E3E20',
                color: submitMessage.includes('successfully') ? '#38A169' : '#E53E3E',
                borderRadius: '8px',
                marginBottom: '1.5rem',
                border: `1px solid ${submitMessage.includes('successfully') ? '#38A169' : '#E53E3E'}`
              }}>
                {submitMessage}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What is this regarding?"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>
              
              <button 
                type="submit" 
                className="form-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    <FaPaperPlane style={{ marginRight: '8px' }} />
                    Send Message
                  </>
                )}
              </button>
              
              <p style={{ 
                fontSize: '0.9rem', 
                color: 'var(--text-light)', 
                marginTop: '1rem',
                textAlign: 'center'
              }}>
                I typically respond within 24 hours
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;