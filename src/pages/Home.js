import { Hero } from '../components/Hero';
import { navbarOptions } from '../components/NavBar';

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

export const Home = () => {
    return <div className='home'>
            <Hero />
            <Services />
        </div>
}