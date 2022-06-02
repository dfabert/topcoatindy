import { Link } from 'react-router-dom';
import TCPLogo from '../assets/TC-Black-Background_transparent.png';

export function Hero() {
    return <div className='hero'>
        <div style={{width: '25%', textAlign: 'center'}}>
            <Link to='/painting'>
                <img src={TCPLogo} style={{width: '100%'}}/>
                <h3>Top Coat Painting</h3>
            </Link>
        </div>
        <div style={{width: '25%', textAlign: 'center'}}>
            <Link to='/solutions'>
                <img src={TCPLogo} style={{width: '100%'}}/>
                <h3>Top Coat Solutions</h3>
            </Link>
        </div>
    </div>
}