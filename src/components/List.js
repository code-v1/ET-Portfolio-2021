import React from 'react';

import CardItem1 from './CardItem1'
import CardItem2 from './CardItem2'
import './Cards.css'
import img from './images/Community-connect.PNG';
import img2 from './images/img-2.jpg';


function Cards() {
    return (
        <div className='Cards'>
            <h1>Projects</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem1 
                        src={img}
                        text="Community Connection; web app built using the django framework "
                        label="Adventure"
                        path='/services'
                        />
                        <CardItem2 
                        src={img2}
                        text="Travel through the isldands of bali in a private cruise"
                        label="luxury"
                        path='/services'
                        />      
                    </ul>
                        
                    {/* <ul className="cards__items">
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
                    </ul> */}
                </div>
            </div>
        </div>
    )
}

export default Cards