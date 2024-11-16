import React, { useState } from "react";
import './ContactStyle.css'

function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add logic to send form data (e.g., to an API or email)
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" }); // Reset the form
  };

  return (
    <div className="contact-me-container">
      <h1>Contact Me</h1>
      
      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
            required
          />
        </div>

        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>

      {/* Contact Details */}
      <div className="contact-details">
        <h2>Or Reach Me Here:</h2>
        <p><strong>Email:</strong> your-email@example.com</p>
        <p><strong>Phone:</strong> +123 456 7890</p>
        
        {/* Social Media Links */}
        <div className="social-links">
          <h3>Follow Me:</h3>
          <ul>
            <li>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
