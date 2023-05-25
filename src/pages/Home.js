import { Hero } from '../components/Hero';
import { navbarOptions } from '../components/NavBar';
import contactPhoto from '../assets/Contact.jpg';

import '../styles/home.css'


const Services = () => {
    return <div className='services page content'>
        <h2>Our Services</h2>
        <div className='services-list'>
           {navbarOptions[0].pages.map((page, i) => 
                <h4 key={i}>{page.page}</h4>
           )}
        </div>
    </div>
}

const Contact = () => {
    return <div className='contact-background'>
        <div className='contact content'>
            <img src={contactPhoto} alt='contact photo' />
            <div>
                <h2>Contact us for a free quote</h2>
                <div className='contact-columns'>
                    <div>
                        <button>
                            <a href="tel:317-834-7105">(317) 834-7105</a>
                        </button>
                    </div>
                    <div>
                        <h5>1400 Hansel parkway</h5>
                        <h5>Mooresville, IN 46158</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export const Home = () => {
    return <div className='home'>
            <Hero />
            <Services />
            <Contact/>
        </div>
}