import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button'
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className="footer-subscription-heading">
                    Join THE adventure
                </p>
                <p className='footer-subscription-text'>
                    you can unsubscribe at any time.
                </p>
                <div className="input-areas">
                    <form>
                        <input className="footer-input" type="email" name="email" placeholder="Your Email"/>
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                        
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/sign-up'>HOW IT WORKS </Link>
                        <Link to='/sign-up'>Testimonials</Link>
                        <Link to='/sign-up'>Careers</Link>
                        <Link to='/sign-up'>Incestors</Link>
                        <Link to='/sign-up'>Terms of Service</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact</h2>
                        <Link to='/sign-up'>HOW IT WORKS </Link>
                        <Link to='/sign-up'>Testimonials</Link>
                        <Link to='/sign-up'>Careers</Link>
                        <Link to='/sign-up'>Incestors</Link>
                        <Link to='/sign-up'>Terms of Service</Link>
                    </div>
                    
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Videos</h2>
                        <Link to='/sign-up'>HOW IT WORKS </Link>
                        <Link to='/sign-up'>Testimonials</Link>
                        <Link to='/sign-up'>Careers</Link>
                        <Link to='/sign-up'>Incestors</Link>
                        <Link to='/sign-up'>Terms of Service</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Social Media</h2>
                        <Link to='/sign-up'>HOW IT WORKS </Link>
                        <Link to='/sign-up'>Testimonials</Link>
                        <Link to='/sign-up'>Careers</Link>
                        <Link to='/sign-up'>Incestors</Link>
                        <Link to='/sign-up'>Terms of Service</Link>
                    </div>
                    
                </div>
                
            </div>
                <section className="social-media">
                    <div className="social-media-wrap">
                        <div className="footer-logo">
                            <Link to='/' className="social-logo">
                                TRVL <i className="fab fa-typo3"></i>
                            </Link>
                        </div>
                        <small className="website-rights"> TRVL C 2021 </small>
                        <div className="social-icons">
                            <Link className="social-icon-link facebook"
                            to="/"
                            target="_blank"
                            aria-label="facebook"
                            >
                                <i className="fab fa-facebook-f"></i>
                            </Link>
                            <Link className="social-icon-link instagram"
                            to="/"
                            target="_blank"
                            aria-label="instagram"
                            >
                                <i className="fab fa-instagram"></i>
                            </Link>
                            <Link className="social-icon-link twitter"
                            to="/"
                            target="_blank"
                            aria-label="twitter"
                            >
                                <i className="fab fa-twitter"></i>
                            </Link>
                        </div>
                    </div>
                </section>
        </div>
    );
}

export default Footer
