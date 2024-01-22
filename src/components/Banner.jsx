import Lottie from "lottie-react";
import animationData from '../assets/images/Animation1.json';

const Banner = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-md-6 col-xl-7 my-auto">
                    <h3>A designer who</h3>
                    <h1>Judges a book by its cover</h1>
                </div>
                <div className="col-xs-12 col-md-6 col-xl-5">
                    <Lottie animationData={animationData} className="robot-animation" />
                </div>
            </div>
        </div>
    );
}

export default Banner;
