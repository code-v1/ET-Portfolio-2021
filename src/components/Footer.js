import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button'
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                
                
                <div className="input-areas">
                    <form>
                        
                        <Button buttonStyle='btn--outline'><a href="https://us1.list-manage.com/contact-form?u=6b4ea06472d2b1a199b42bbd3&form_id=7e979584c4c408d0f7ad77f25bb56362">Connect</a></Button>
                        
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    
                    
                </div>
                
                
            </div>
                <section className="social-media">
                    <div className="social-media-wrap">
                        <div className="footer-logo">
                            <Link to='/' className="social-logo">
                                ET <i className="fab fa-typo3"></i>
                            </Link>
                        </div>
                        <small className="website-rights"> Eric Tovar © 2021 </small>
                        <div className="social-icons">
                            <Link className="social-icon-link linkedin"
                            to="/"
                            target="_blank"
                            aria-label="linkedin"
                            >
                                <i className="fab fa-linkedin"></i>
                            </Link>
                            <Link className="social-icon-link github"
                            to="/"
                            target="_blank"
                            aria-label="github"
                            >
                                <i className="fab fa-github"></i>
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
