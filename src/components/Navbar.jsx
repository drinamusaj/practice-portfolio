import React from "react";
import {HashLink as Link} from 'react-router-hash-link';
import logo from '../assets/images/logo.png'
import linkedin from '../assets/images/linkedin.png'
import behance from '../assets/images/behance.png'
import mail from '../assets/images/mail.png'



const Navbar = () =>{
 
    return(
        <nav class="navbar navbar-expand-lg navbar-dark">
  <div class="container-fluid">

    <a class="navbar-brand d-flex" href="#">
        <img src={logo} alt="logo" width={130}/>
    </a>

    <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li>
        <Link to='#home' className="link">
            Home
          </Link>
        </li>
        <li>
          <Link to='#about' className="link">
            About
          </Link>
        </li>
        <li>
        <Link to='#projects' className="link">
            Projects
          </Link>
        </li>
        <li>
        <Link to='#contact' className="link">
            Contact
          </Link>
        </li>
      </ul>
      <div className="social-icon">
        <a href="https://www.linkedin.com/in/enes-bakiu/"><img src={linkedin} alt="linkedin" /></a>
        <a href="https://www.behance.net/enesbakiu/moodboards"><img src={behance} alt="behance" /></a>
        <a href="#"><img src={mail} alt="mail" /></a>
      </div>
     
    </div>
  </div>
</nav>
    )
}

export default Navbar;