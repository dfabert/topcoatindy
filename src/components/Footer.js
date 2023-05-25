import TCWordsLogo from '../assets/TC-Words-with-Brush-1_transparent.png'

import '../styles/footer.css';

export const Footer = () => {
    
    return <div className="footer content">
        <img src={TCWordsLogo} alt='Top Coat Words Logo' />
        <div>Copyright© 2023 - Top Coat Painting</div>
    </div>
}