import React from "react";
import './AboutStyle.css'

function AboutMe() {
  return (
    <div className="about-me">

<div
        className="nav"
        style={{
          backgroundImage:
            "linear-gradient(109.6deg, rgba(0,0,0,1) 11.2%, rgba(244,232,3,1) 30%, rgba(31,20,20,1) 41.3%, rgba(0,255,0,1) 55.4%, rgba(13,15,14,1) 65.7%, rgba(5,7,6,1) 69.1%, rgba(49,240,156,1) 84.4%)",
          justifyContent: "center",
        }}
      >
        <label id="brag-label">Elshises About</label>
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


      {/* Introduction Section */}
      <section className="intro-section">
        <h1>About Me</h1>
        <p>
          Hello! I'm <span className="highlight">Elshises</span>, a passionate and
          dedicated <span className="highlight">Software Engineer</span> with a knack
          for solving complex problems and crafting efficient solutions. I thrive
          on innovation, enjoy collaborating with teams, and am constantly
          seeking to expand my skills and knowledge.
        </p>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <h2>Skills</h2>
        <ul>
          <li>Full-Stack Web Development (React, Vue.js, Node.js)</li>
          <li>Programming Languages (JavaScript, Python, Java)</li>
          <li>Database Management (MySQL, MongoDB)</li>
          <li>Version Control (Git, GitHub)</li>
          <li>Machine Learning & AI Basics</li>
          <li>UI/UX Design (Canva, Adobe Photoshop)</li>
        </ul>
      </section>

      {/* Education Section */}
      <section className="education-section">
        <h2>Education</h2>
        <p>
          <strong>Bachelor's Degree in Computer Science</strong> <br />
          Mama Ngina University, 2022-2026
        </p>
      </section>

      {/* Experience Section */}
      <section className="experience-section">
        <h2>Experience</h2>
        <ul>
          <li>
            Have not worked in any Company yet <br />
            But so far I have been able to develop scalable  web applications for clients online, improved system performance,
            and collaborated with a cross-functional team to deliver key
            projects in my current institution which is Mama Ngina University
          </li>
        
        </ul>
      </section>

      {/* Hobbies and Interests Section */}
      <section className="hobbies-section">
        <h2>Hobbies & Interests</h2>
        <p>
          When I'm not coding, I enjoy exploring new technologies, reading tech
          blogs, designing graphics, and hiking. I'm also passionate about
          mentoring aspiring developers and contributing to open-source
          projects.
          I am also an active fan of football especially the English Premier League
        </p>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2>Contact Me</h2>
        <p>
          Feel free to reach out if you'd like to collaborate or discuss ideas.
        I am also available for developing softwares and web applications for any available clients{" "}
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>{" "}
          or send an email to <a href="mailto:elshisesmburu@gmail.com">elshisesmburu@gmail.com</a>.
        </p>
      </section>
    </div>
  );
}

export default AboutMe
