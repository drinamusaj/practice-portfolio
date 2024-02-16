import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "slick-carousel/slick/slick-theme.css";import { X } from 'lucide-react';
import branding from '../assets/images/branding.png'
import social from '../assets/images/social.png'
import uiux from '../assets/images/uiiux.png'


const Modal = ({ setShowModal }) => {
   
  return (
    <div className="modal-content">
      <div>
        <button onClick={() => setShowModal(false)}><X size={30} /></button>
        <div className='slider-container'>
        <Carousel>
      <div>
         <img src={branding} />
         <p className="legend">Legend 1</p>
       </div>
       <div>
         <img src={social} />
         <p className="legend">Legend 2</p>
       </div>
      <div>
      <img src={uiux} />
      <p className="legend">Legend 3</p>
     </div>
   </Carousel>
        </div>
      </div>
    </div>
  )
}

export default Modal;
