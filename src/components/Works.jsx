import branding from '../assets/images/branding.png'
import social from '../assets/images/social.png'
import uiux from '../assets/images/uiiux.png'

const Works = () =>{
    return(
        <div className="container mt-5">
            <h4>Selected Works</h4>
            <div className="row work-container">
                <div className="col">
                    <img src={branding} alt='branding' width={450} className='img-fluid rounded img-brand'/>
                </div>
                <div className="col">
                    <h5 className='branding-title'>Branding</h5>
                    <p>I've designed a brand identity that blends the city's cultural heritage with
                        the restaurant's unique culinary experience. From a vibrant logo
                        inspired by the Dadaist movement to enticing menus that capture the restaurant's
                        inviting atmosphere, this project showcases my ability to create a compelling
                        brand presence for an exceptional dining establishment in Tirana.
                    </p>
                    <button className='more-button'>View More</button>
                </div>
            </div>
            <div className="row work-container">
                <div className="col">
                    <h5 className='social-title'>Social Media</h5>
                    <p style={{width: 470}}>These visuals blend sleek modernity with cutting-edge tech to
                        engage and inspire customers. They represent my ability to create
                        captivating content that boosts brand awareness and connects with tech enthusiasts.
                    </p>
                    <button className='more-button'>View More</button>
                </div>
                <div className="col">
                    <img src={social} alt='social' width={450} className='img-fluid rounded'/>
                </div>
            </div>
            <div className="row work-container">
                <div className="col">
                    <img src={uiux} alt='uiux' width={450} className='img-fluid rounded'/>
                </div>
                <div className="col">
                    <h5 className='uiux-title'>Ui&Ux</h5>
                    <p>In my portfolio, you'll discover my gaming UI/UX menu concept.
                        This project highlights my dedication to creating immersive and user-friendly
                        interfaces for gamers. From sleek navigation to engaging visuals,
                        I've designed every element with player enjoyment in mind, emphasizing
                        my commitment to enhancing the gaming experience.
                    </p>
                    <button className='more-button'>View More</button>
                </div>
            </div>
        </div>
    )
}

export default Works;