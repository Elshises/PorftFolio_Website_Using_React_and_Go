import React  from 'react';
import {BrowserRouter as Router , Routes,Route, Link} from "react-router-dom"
import Home from './Home.jsx'
import Portfolio from './Portfolio.jsx'
import Certificates from './Certificates.jsx';
import AboutMe from './Aboutme.jsx';
import ContactMe from './Contactme.jsx';

function App() {
  


return(
<Router>

  {/* <nav>
    <ul>
      <li>
        <Link to="/"></Link>
      </li>
      <li>
      <Link to="/Portfolio" ></Link>
      </li>
      <li>
      <Link to="/Certificates" ></Link>
      </li>
      <li>
      <Link to="/Aboutme" ></Link>
      </li>
    </ul>
  </nav> */}






<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/Portfolio" element={<Portfolio/>}/>
<Route path="/Certificates" element={<Certificates/>}/>
<Route path="/Aboutme" element={<AboutMe/>}/>
<Route path="/Contactme" element={<ContactMe/>}/>
</Routes>



</Router>
  
);

  
}

export default App
