import Lottie from "lottie-react";
import animationData from '../assets/images/Animation2.json';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import vodafone from '../assets/images/vodafone.png';
import tumo from '../assets/images/tumo.png';
import shokohaus from '../assets/images/shokohaus.png';
import miss from '../assets/images/miss.png';
import orange from '../assets/images/orange.png';
import hc from '../assets/images/hc.png';
import funfood from '../assets/images/funfood.png';
import b52 from '../assets/images/b52.png';


const Banner = () => {
    const settings = {
        dots: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 500,
        arrows: false}

    return (
        <>
        <div id='home' className="container mb-5">
            <div className="row">
                <div className="col-xs-12 col-md-6 col-xl-7 my-auto">
                    <h3>A designer who</h3>
                    <h1>Judges a book by its cover</h1>
                </div>
                <div className="col-xs-12 col-md-6 col-xl-5">
                    <Lottie animationData={animationData} className="animation-figure" />
                </div>
            </div>
            <div className='scroll-container d-flex justify-content-center'>
                <div className='scroll' onClick={() => window.scrollTo({ top: 700, behavior: "smooth" })}>
                    
                </div>
            </div>
        </div>
          <div id='clients'className="container">
          <h4 className="clients-header">Clients</h4>
          <Slider {...settings}>
            <div>
             <img src={vodafone} alt="vodafone" width={150} className="mt-4 img-fluid"/>
            </div>
            <div>
            <img src={tumo} alt="tumo" width={150} className="mt-3 img-fluid"/>
            </div>
            <div>
            <img src={shokohaus} alt="shokohaus" width={110} className="img-fluid"/>
            </div>
            <div>
            <img src={miss} alt="miss" width={130} className="mt-4 img-fluid"/>
            </div>
            <div>
            <img src={orange} alt="orange" width={100} className="img-fluid"/>
            </div>
            <div>
            <img src={hc} alt="hc" width={70} className="img-fluid"/>
            </div>
            <div>
            <img src={funfood} alt="funfood" width={100} className="img-fluid"/>
            </div>
            <div>
            <img src={b52} alt="b52" width={110} className="img-fluid"/>
            </div>
          </Slider>
        </div>
        </>
    );
}

export default Banner;
