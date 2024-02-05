import { useState } from 'react';
import {send} from 'emailjs-com'
import linkedin from '../assets/images/linkedin.png'
import behance from '../assets/images/behance.png'
import mail from '../assets/images/mail.png'

const Footer = () =>{
    const [toSend, setToSend] = useState({
        first_name:'',
        last_name:'',
        message:'',
        reply_to:'',
    });

    const onSubmit = (e) =>{
        e.preventDefault();
        send(
            'service_mbld8ds',
            'template_ao3eshd',
            toSend,
            'BWQrHqXYFcqXBaojW'
        )
        .then((response) => {
            console.log('Success!', response.status, response.text);
        })
        .catch((err) => {
            console.log('Failed..', err);
        })
    }

    const handleChange = (e) => {
        setToSend({...toSend, [e.target.name]: e.target.value});
    };

    return(
        <div id='contact' className="container text-center">
            <h1 className='footer-title'>Get in Touch</h1>
            <p>And let's work together </p>

            <div className='mt-4'>
                <form onSubmit={onSubmit}>
                    <input 
                        type='text'
                        name='first_name'
                        placeholder='First Name'
                        value={toSend.first_name}
                        onChange={handleChange}
                    />
                    <input
                        type='text'
                        name='last_name'
                        placeholder='Last Name'
                        value={toSend.last_name}
                        onChange={handleChange}
                    />
                    <br/>
                    <input className='email-box'
                        type='text'
                        name='reply_to'
                        placeholder='Your Email'
                        value={toSend.reply_to}
                        onChange={handleChange}
                    />
                    <br/>
                        <input className='message-box'
                        type='text'
                        name='message'
                        placeholder='Message'
                        value={toSend.message}
                        onChange={handleChange}
                    />
                    
                    <br />
                    <button className='connect-button' type='submit'>Submit</button>
                    
                </form>                
            </div>


            <div className="social-icon-footer">
                <a href="https://www.linkedin.com/in/enes-bakiu/"><img src={linkedin} alt="linkedin" /></a>
                <a href="https://www.behance.net/enesbakiu/moodboards"><img src={behance} alt="behance" /></a>
                <a href="#"><img src={mail} alt="mail" /></a>
            </div>
        </div>
    )
}
export default Footer;