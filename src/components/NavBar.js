import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import TopCoatPaintingLogo from '../assets/TC-Words-with-Brush-1_transparent.png';

export function NavBar() {

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
            <CreateTextLink text="Top Coat" path='/' />
            <div className="middle-link-wrapper">
                <CreateTextLink text="Top Coat Painting" path='/painting' />
                <CreateTextLink text="Top Coat Solutions" path='/solutions' />
            </div>
            <CreateTextLink text="Contact" path='/contact' />
        </div>
    </nav>

}