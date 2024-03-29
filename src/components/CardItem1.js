import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'

function CardItem1(props) {
    return (
        <>
        <li className="cards__item">
            <div className="cards__item__link" to={props.path}>
               <figure className="cards__item__pic-wrap" data-category={props.label}>
                   <img src={props.src} alt='Travel'
                   className='cards__item__img'/>
               </figure>
               <div className="cards__item__info">
               <a href="https://community-connection.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live Demo</a>
                   <h5 className="cards__item__text">{props.text}</h5>
               </div>
            </div>
        </li>
        </>
    )
}

export default CardItem1
