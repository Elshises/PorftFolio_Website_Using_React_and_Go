import './styles.css'
import profileImage from "./Images/prof-girl.png";
import {BrowserRouter as Router , Routes, Route,Link} from 'react-router-dom'
import Portfolio from './Portfolio';
import Certificates from './Certificates';
import AboutMe from './Aboutme';
import ContactMe from './Contactme';

function Home(){


    return(




        <div>  
        <div className="nav">  
          <ul>  
            <li>  
              <Link to="/Contactme">Contact Me</Link>  
            </li>  
            <li>  
              <Link to="/Aboutme">About Me</Link>  
            </li>  
            <li>  
              <Link to="/Projects">Projects</Link>  
            </li>  
            <li>  
              <Link to="/Portfolio">Portfolio</Link>  
            </li>  
            <li>  
              <Link to="/Certificates">Certificates</Link>  
            </li>  
          </ul>  
        </div>  

        
  
        <nav className="navigation">  
          <p className="intro">  
           
            Hi, I am  
            <span style={{ color: "#10dbca" }}> Elshises</span>, a  
            <span style={{ color: "aqua" }}> Software Engineer</span> with a passion for solving problems and building efficient, user-friendly solutions. I specialize in [mention specific skills or languages, like full-stack development, Python, JavaScript, etc.] and have experience working on [mention types of projects, like web applications, mobile apps, etc.]. I enjoy collaborating with teams to create innovative software that drives value, and I’m always eager to learn and adapt to new technologies.  
          </p>  
          <img  
            className="port-image"  
            src={profileImage}  
            alt="Image not found"  
          />  
        </nav>  
  
        <div className="projects">  
          <div className="item2Div-div"></div>  
        </div>  
  
        <script src="index.js"></script>  



      </div>


      

 

    );

} 

export default Home