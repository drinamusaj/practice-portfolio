import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "slick-carousel/slick/slick-theme.css";import { X } from 'lucide-react';
import foto1 from '../assets/images/foto1.jpg'
import foto2 from '../assets/images/foto2.jpg'
import foto3 from '../assets/images/foto3.jpg'
import foto4 from '../assets/images/foto4.jpg'


const Modal = ({ setShowModal }) => {
   
  return (
    <div className="modal-content">
      <div>
        <button onClick={() => setShowModal(false)} className='close-button'><X size={30} /></button>
        <div className='slider-container'>
        <Carousel>
      <div>
         <img src={foto1} />
         <p className="legend">Dada</p>
       </div>
       <div>
         <img src={foto2} />
         <p className="legend">Jphone Shop</p>
       </div>
      <div>
      <img src={foto3} />
      <p className="legend">Knights in Oblivion</p>
     </div>
     <div>
      <img src={foto4} />
      <p className="legend">Knights in Oblivion</p>
     </div>
   </Carousel>
        </div>
      </div>
    </div>
  )
}

export default Modal;
