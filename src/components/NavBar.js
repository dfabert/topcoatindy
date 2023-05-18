import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import { useState } from 'react';

const navbarOptions = [
    {   
        title:   {page:  "Services", path: '/services'},
        pages: [
            {page:  "Residential", path: '/residential'},
            {page:  "Commercial", path: '/commercial'}, 
            {page:  "Industrial", path: '/industrial'},
            {page: "Pressure Washing", path: '/pressurewashing'},
            {page: "Staining", path: '/staining'}
        ]
    },
    {
        title: {page:  "About Us", path: '/aboutus'},
        pages: [
            {page: "Safety", path: '/safety'},
            {page: "Location", path: '/location'},
            {page: "Team", path: 'team'},
            {page: "Contact Us", path: '/contact'}
        ]
    }
]

export function NavBar() {
    const [activeDropdown, setActiveDropdown] = useState(null);

    console.log(activeDropdown)

    const location = useLocation().pathname;

    const CreateTextLink = ({text, path}) => {
        return <Link to={path}>
                <div style={{color: 'white', textDecoration: location === path ? 'underline' : 'none'}}>
                    {text}
                </div>
            </Link>
    }

    return <nav>
        <div className="content">
            <CreateTextLink text="Top Coat Painting" path='/' />
            <div className="middle-link-wrapper" onMouseLeave={() => setActiveDropdown(null)}>
                {navbarOptions.map((section, i) => 
                    <div key={i} className='navDropdownTitle' onMouseEnter={() => setActiveDropdown(section.title.page)}>
                        <CreateTextLink text={section.title.page} path={section.title.path} />
                        <div className='navDropdown' style={{display: activeDropdown === section.title.page ? 'block' : 'none'}}>
                            {section.pages.map((page, i) => 
                                <div key={i} className='navDropdownLink'> 
                                    <CreateTextLink text={page.page} path={page.path} />
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
            <CreateTextLink text="Contact" path='/contact' />
        </div>
    </nav>

}