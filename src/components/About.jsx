import photoshop from '../assets/images/photoshop.png';
import illustrator from '../assets/images/illustrator.png';
import after from '../assets/images/after-effects.png';
import figma from '../assets/images/figma.png';
import xd from '../assets/images/xd.png';

const About = () => {
    return (
        <div className="container text-center">
           
            <h6 className="about-text mx-auto ">
                <span style={{ fontSize: 28, fontWeight: 800 }}>Hi,</span> my name is Enes Bakiu. I’m an experienced graphic designer specializing in 
                <br />
                visually eye-catching designs that communicate a brand's message with impact.
                <br />
                Proficient in Adobe Photoshop, Illustrator and Figma. Passionate about helping clients 
                <br />
                achieve their vision through design. Let's connect and bring your ideas to life.
            </h6> 
            <div className="d-flex skills-icons">
                <img src={photoshop} alt='photoshop' width={32} />
                <img src={illustrator} alt='illustrator' width={32} />
                <img src={after} alt='after' width={32} />
                <img src={xd} alt='xd' width={32} />
                <img src={figma} alt='figma' width={30} />
            </div>
            <button className="connect-button mt-3 mb-5">Let's connect</button>
        </div>
    );
}

export default About;
