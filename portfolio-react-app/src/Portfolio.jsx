import React from "react";
import jsImage from "./Images/js.png";
import pythonImage from "./Images/python.png";
import javaImage from "./Images/java2.png";
import sqlImage from "./Images/sql.png";
import mlImage from "./Images/ml.png";
import flutterImage from "./Images/flutter.png";
import {BrowserRouter as Router , Routes, Route,Link} from 'react-router-dom'
import './styles.css'

function Portfolio() {
  return (
    <div>
      <div
        className="nav"
        style={{
          backgroundImage:
            "linear-gradient(109.6deg, rgba(0,0,0,1) 11.2%, rgba(244,232,3,1) 30%, rgba(31,20,20,1) 41.3%, rgba(0,255,0,1) 55.4%, rgba(13,15,14,1) 65.7%, rgba(5,7,6,1) 69.1%, rgba(49,240,156,1) 84.4%)",
          justifyContent: "center",
        }}
      >
        <label id="brag-label">Elshises</label>
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
              <Link to="/Certificates">Certificates</Link>  
            </li>  
          </ul> 

      </div>

      <div className="projects">
        <div className="item-div">
          <p>JavaScript</p>
          <img src={jsImage} alt="JavaScript" />
          <div className="lower-p">
            These are the complete <br />
            JavaScript projects that I have been
            <br />
            able to complete. Click to check on them.
          </div>
        </div>

        <div className="item-div">
          <p>Python</p>
          <img src={pythonImage} alt="Python" />
          <div className="lower-p">
            These are the complete <br />
            Python projects that I have been
            <br />
            able to complete. Click to check on them.
          </div>
        </div>

        <div className="item-div">
          <p>Java</p>
          <img src={javaImage} alt="Java" />
          <div className="lower-p">
            These are the complete <br />
            Java projects that I have been
            <br />
            able to complete. Click to check on them.
          </div>
        </div>

        <div className="item-div">
          <p>MySql</p>
          <img src={sqlImage} alt="MySQL" />
          <div className="lower-p">
            These are the complete <br />
            MySQL projects that I have been
            <br />
            able to complete. Click to check on them.
          </div>
        </div>

        <div className="item-div">
          <p>Machine Learning</p>
          <img src={mlImage} alt="Machine Learning" style={{ height: "200px" }} />
          <div className="lower-p">
            These are the complete <br />
            Machine Learning projects that I have been
            <br />
            able to complete. Click to check on them.
          </div>
        </div>

        <div className="item-div">
          <p>Mobile Applications</p>
          <img
            src={flutterImage}
            alt="Mobile Applications"
            style={{ height: "200px" }}
          />
          <div className="lower-p">
            These are the complete <br />
            Mobile Application projects that I have been
            <br />
            able to complete. Click to check on them.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio
