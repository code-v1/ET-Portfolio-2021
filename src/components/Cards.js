import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import img from './images/img-9.jpg';
import img2 from './images/img-2.jpg';
import img3 from './images/Community-connect.PNG'
import { Link, NavLink, BrowserRouter, Route } from 'react-router-dom';
import { Button } from './Button';




function Cards() {
    return (
        <div className='Cards'>
            <h1>Projects</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src={img}
                        text="Explore the hidden waterfall deep inside the Amazon Jungle"
                        label="Adventure"
                        path='/services'
                        />
                        <CardItem 
                        src={img2}
                        text="Travel through the isldands of bali in a private cruise"
                        label="luxury"
                        path='/services'
                        />      
                    </ul>
                        
                    <ul className="cards__items">
                        <CardItem 
                        src={img3}
                        text="Check it out"
                        label="Adventure"
                        
                        />
                        
                        
                        
                        <CardItem 
                        src={img2}
                        text="Travel through the isldands of bali in a private cruise"
                        label="luxury"
                        path='/services'
                        /> 
                        <CardItem 
                        src={img2}
                        text="Travel through the isldands of bali in a private cruise"
                        label="luxury"
                        path='/services'
                        />        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
