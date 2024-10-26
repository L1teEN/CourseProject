import React from 'react';
import './Footer.css';

function Footer() {

    const thisYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-copyright">
                    <p>&copy; {thisYear} - Modus All Right Reserved</p>
                </div>

                <div className="footer-social-media">
                    <div className="footer-social-media-item">
                        <a href="/">
                            <img src="https://i.imgur.com/ymFknq7.png" alt="facebook"/>
                        </a>
                    </div>
                    <div className="footer-social-media-item">
                        <a href="/">
                            <img src="https://i.imgur.com/oaOSLGZ.png" alt="twitter"/>
                        </a>
                    </div>
                    <div className="footer-social-media-item">
                        <a href="/">
                            <img src="https://i.imgur.com/nO8jeGl.png" alt="dribble"/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;