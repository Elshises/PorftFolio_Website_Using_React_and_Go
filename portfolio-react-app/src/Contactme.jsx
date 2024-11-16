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

<div
        className="nav"
        style={{
          backgroundImage:
            "linear-gradient(109.6deg, rgba(0,0,0,1) 11.2%, rgba(244,232,3,1) 30%, rgba(31,20,20,1) 41.3%, rgba(0,255,0,1) 55.4%, rgba(13,15,14,1) 65.7%, rgba(5,7,6,1) 69.1%, rgba(49,240,156,1) 84.4%)",
          justifyContent: "center",
        }}
      >
        <label id="brag-label">Elshises Contacts</label>
        <ul>
          <li>
            <a href="Home.html">Home</a>
          </li>
          <li>
            <a href="Contactme.html">Contact Me</a>
          </li>
          <li>
            <a href="Aboutme.html">About Me</a>
          </li>
          <li>
            <a href="Projects.html">Projects</a>
          </li>
          <li>
            <a href="Portfolio.html">Portfolio</a>
          </li>
        </ul>
      </div>



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
