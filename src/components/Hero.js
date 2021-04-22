import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Hero.css';

function Hero() {
    return (
        <div className='hero-container'>
            <video src="/videos/video-3.mp4" autoPlay loop muted/>
            <h1>Eric Tovar</h1>
            <p>Software Developer</p> 
            <div className="hero-btns">
                <Button className='btns' 
                buttonStyle='btn--outline'
                buttonSize='btn--large'>
                    GET STARTED
                    </Button>
                    <Button 
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                    >
                    WATCH Trailer <i className='far fa-play-circle' />
                </Button>
                </div>           
        </div>
    )
}

export default Hero
