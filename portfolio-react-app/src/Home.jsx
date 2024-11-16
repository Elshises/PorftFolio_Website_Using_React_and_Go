import './styles.css'
import profileImage from "./Images/prof-girl.png";
function Home(){


    return(

        <div>  
        <div className="nav">  
          <ul>  
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
            <li>  
              <a href="certs.html">Certificates</a>  
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