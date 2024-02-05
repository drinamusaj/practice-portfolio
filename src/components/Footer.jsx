import linkedin from '../assets/images/linkedin.png'
import behance from '../assets/images/behance.png'
import mail from '../assets/images/mail.png'

const Footer = () =>{
    return(
        <div id='contact' className="container text-center">
            <h1 className='footer-title'>Get in Touch</h1>
            <p>And let's work together </p>
            <div className="social-icon-footer">
                <a href="#"><img src={linkedin} alt="linkedin" /></a>
                <a href="#"><img src={behance} alt="behance" /></a>
                <a href="#"><img src={mail} alt="mail" /></a>
            </div>
        </div>
    )
}
export default Footer;