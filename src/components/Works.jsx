import { useState } from 'react'
import branding from '../assets/images/branding.png'
import social from '../assets/images/social.png'
import uiux from '../assets/images/uiiux.png'

const Works = ({ setShowModal }) => {
  return (
    <div id='projects' className="container mt-5">
      <h4>Selected Works</h4>

      <div className="row work-container">
        <div className="col-md-6">
          <img src={branding} alt='branding' className='img-fluid rounded img-brand' />
        </div>
        <div className="col-md-6">
          <h5 className='branding-title'>Branding</h5>
          <p>I've designed a brand identity that blends the city's cultural heritage with
            the restaurant's unique culinary experience. From a vibrant logo
            inspired by the Dadaist movement to enticing menus that capture the restaurant's
            inviting atmosphere, this project showcases my ability to create a compelling
            brand presence for an exceptional dining establishment in Tirana.
          </p>
          <button onClick={() => setShowModal(true)} className='more-button'>View More</button>
                
                </div>
            </div>

            <div className="row work-container">
                <div className="col-md-6 order-md-2">
                    <img src={social} alt='social' className='img-fluid rounded' />
                </div>
                <div className="col-md-6">
                    <h5 className='social-title'>Social Media</h5>
                    <p style={{ width: '100%' }}>These visuals blend sleek modernity with cutting-edge tech to
                        engage and inspire customers. They represent my ability to create
                        captivating content that boosts brand awareness and connects with tech enthusiasts.
                    </p>
                    <button onClick={() => setShowModal(true)} className='more-button'>View More</button>
                </div>
            </div>

            <div className="row work-container">
                <div className="col-md-6">
                    <img src={uiux} alt='uiux' className='img-fluid rounded' />
                </div>
                <div className="col-md-6">
                    <h5 className='uiux-title'>Ui & Ux</h5>
                    <p>In my portfolio, you'll discover my gaming UI/UX menu concept.
                        This project highlights my dedication to creating immersive and user-friendly
                        interfaces for gamers. From sleek navigation to engaging visuals,
                        I've designed every element with player enjoyment in mind, emphasizing
                        my commitment to enhancing the gaming experience.
                    </p>
                    <button onClick={() => setShowModal(true)} className='more-button'>View More</button>
                </div>
            </div>
        </div>
    )
}

export default Works;
