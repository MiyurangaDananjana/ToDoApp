import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const FooterPage = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-section">
                    <h4>About Us</h4>
                    <p>Welcome to Eagles Lodges - Kandy, your ideal retreat in the heart of Kandy. Experience unmatched hospitality and comfort.</p>
                </div>
                <div className="footer-section">
                    <h4>Contact Us</h4>
                    <p>Email: info@hotelname.com</p>
                    <p>Phone: +94 71 123 4567</p>
                </div>
                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <div className="social-icons">
                        <a href="#" className="social-icon"><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a href="#" className="social-icon"><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a href="#" className="social-icon"><FontAwesomeIcon icon={faInstagram} /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Eagles Lodges - Kandy. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default FooterPage;
