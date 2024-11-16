import React from "react";
import './AboutStyle.css'

function AboutMe() {
  return (
    <div className="about-me">
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
          <li>UI/UX Design (Canva, Figma)</li>
        </ul>
      </section>

      {/* Education Section */}
      <section className="education-section">
        <h2>Education</h2>
        <p>
          <strong>Bachelor's Degree in Computer Science</strong> <br />
          XYZ University, 2018-2022
        </p>
      </section>

      {/* Experience Section */}
      <section className="experience-section">
        <h2>Experience</h2>
        <ul>
          <li>
            <strong>Software Engineer at ABC Tech</strong> (2022-Present) <br />
            Developed scalable web applications, improved system performance,
            and collaborated with a cross-functional team to deliver key
            projects.
          </li>
          <li>
            <strong>Intern at DEF Solutions</strong> (2021-2022) <br />
            Worked on front-end and back-end development projects, gaining
            hands-on experience with modern frameworks and tools.
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
        </p>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2>Contact Me</h2>
        <p>
          Feel free to reach out if you'd like to collaborate, discuss ideas, or
          just say hello! You can find me on{" "}
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>{" "}
          or send an email to <a href="mailto:elshises@example.com">elshises@example.com</a>.
        </p>
      </section>
    </div>
  );
}

export default AboutMe
