import React from 'react';
import './contact.css';

const Contact = () => (
      <>
          <section id="contact" className="contact">
    <h2>Let's Connect</h2>
    <div className="contact-content">
      <div className="contact-info">
        <p>Ready to bring my critical thinking and full-stack skills to your team!</p>
        <div className="contact-items">
          <div>📧 your.email@domain.com</div>
          <div>📱 +1234567890</div>
          <div>📍 Your Location</div>
        </div>
      </div>
      
      <form className="contact-form">
        Your Name
        <input type="text" placeholder="Your Name" required /><br/>Your Email
        <input type="email" placeholder="Your Email" required /><br/>
        Your Message
        <textarea placeholder="Your Message" rows="5" required></textarea><br/>
        <button type="submit">Send Message</button>
      </form>
    </div>

  </section>

</>

);
export default Contact;
