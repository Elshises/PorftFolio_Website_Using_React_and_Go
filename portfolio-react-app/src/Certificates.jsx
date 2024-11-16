import React from "react";
import jsIntImage from "./Documents/jsint.jpg";
import webDevImage from "./Documents/webdev.jpg";

function Certificates() {
  return (
    <div>
      {/* Navigation Section */}
      <div
        className="nav"
        style={{
          backgroundImage:
            "linear-gradient(109.6deg, rgba(0,0,0,1) 11.2%, rgba(244,232,3,1) 30%, rgba(31,20,20,1) 41.3%, rgba(0,255,0,1) 55.4%, rgba(13,15,14,1) 65.7%, rgba(5,7,6,1) 69.1%, rgba(49,240,156,1) 84.4%)",
          justifyContent: "center",
        }}
      >
        <label id="brag-label">Elshises Certifications</label>
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

      {/* Certifications Section */}
      <div className="cert-major-div">
        <div className="cert-div">
          <p>Web Development</p>
          <img src={webDevImage} alt="Web Development Certificate" />
          <button>Download</button>
        </div>
        <div className="cert-div">
          <p>JavaScript Intermediate</p>
          <img src={jsIntImage} alt="JavaScript Intermediate Certificate" />
          <button>Download</button>
        </div>
        <div className="cert-div">
          <p>Cisco Networking</p>
          <img src={jsIntImage} alt="Cisco Networking Certificate" />
          <button>Download</button>
        </div>
        <div className="cert-div">
          <p>Java Intermediate</p>
          <img src={webDevImage} alt="Java Intermediate Certificate" />
          <button>Download</button>
        </div>
        <div className="cert-div">
          <p>Cyber Security</p>
          <img src={jsIntImage} alt="Cyber Security Certificate" />
          <button>Download</button>
        </div>
        <div className="cert-div">
          <p>Canva Designs</p>
          <img src={webDevImage} alt="Canva Designs Certificate" />
          <button>Download</button>
        </div>
      </div>
    </div>
  );
}

export default Certificates
