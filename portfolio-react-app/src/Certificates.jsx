import React from "react";
import jsIntImage from "./Documents/jsint.jpg";
import webDevImage from "./Documents/webdev.jpg";
import {BrowserRouter as Router , Routes, Route,Link} from 'react-router-dom'

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
        <label id="brag-label">Elshises Certs</label>
        <ul>  
        <li>  
              <Link to="/">Home</Link>  
            </li> 
            <li>  
              <Link to="/Contactme">Contact Me</Link>  
            </li>  
            <li>  
              <Link to="/Aboutme">About Me</Link>  
            </li>  
            <li>  
              <Link to="/Portfolio">Projects</Link>  
            </li>   
            <li>  
              <Link to="/Portfolio">Portfolio</Link>  
            </li>  
          </ul> 
      </div>

      {/* Certifications Section */}
      <div className="cert-major-div">
        <div className="cert-div">
          <p>Web Development</p>
          <img src={webDevImage} alt="Web Development Certificate" />
          <button><a href="/Documents/jsint.jpg" download="jsCert.jpg">Download</a></button>
        </div>
        <div className="cert-div">
          <p>JavaScript Intermediate</p>
          <img src={jsIntImage} alt="JavaScript Intermediate Certificate" />
          <button><a href="/Documents/jsint.jpg" download="jsCert.jpg">Download</a></button>
        </div>
        <div className="cert-div">
          <p>Cisco Networking</p>
          <img src={jsIntImage} alt="Cisco Networking Certificate" />
          <button><a href="/Documents/jsint.jpg" download="jsCert.jpg">Download</a></button>
        </div>
        <div className="cert-div">
          <p>Java Intermediate</p>
          <img src={webDevImage} alt="Java Intermediate Certificate" />
          <button><a href="/Documents/jsint.jpg" download="jsCert.jpg">Download</a></button>
        </div>
        <div className="cert-div">
          <p>Cyber Security</p>
          <img src={jsIntImage} alt="Cyber Security Certificate" />
          <button><a href="/Documents/webdev.jpg" download="jsCert.jpg">Download</a></button>
        </div>
        <div className="cert-div">
          <p>Canva Designs</p>
          <img src={webDevImage} alt="Canva Designs Certificate" />
          <button><a href="Documents/Jsint.jpg" download="jsCert.jpg">Download</a> </button>
        </div>
      </div>
    </div>
  );
}

export default Certificates
