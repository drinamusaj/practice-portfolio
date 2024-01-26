import { useState, useEffect } from "react";
import logo from '../assets/images/logo.png'
import linkedin from '../assets/images/linkedin.png'
import behance from '../assets/images/behance.png'
import mail from '../assets/images/mail.png'


const Navbar = () =>{
    const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

    return(
        <nav class="navbar navbar-expand-lg navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand d-flex" href="#">
        <img src={logo} alt="logo" width={130}/>
    </a>
    <button class="navbar-toggler toggler-style" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link "  href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link "  href="#">Skills</a>
        </li>
        <li class="nav-item">
          <a class="nav-link "  href="#">Projects</a>
        </li>
      </ul>
      <div className="social-icon">
        <a href="#"><img src={linkedin} alt="linkedin" /></a>
        <a href="#"><img src={behance} alt="behance" /></a>
        <a href="#"><img src={mail} alt="mail" /></a>
      </div>
     
    </div>
  </div>
</nav>
    )
}

export default Navbar;