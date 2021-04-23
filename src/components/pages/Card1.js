import React from 'react';
import ReactDOM from 'react-dom';
import '../pages/Card1.css'
import logo1 from '../images/Broadcom_Logo.svg.png'


class Card1 extends React.Component {
    render() {
      return(
          <div className="card">
            
            <div className="card-body">
              <h2>{this.props.title}</h2>
              <img src={logo1} alt="Broadcom logo"/>
              <h5>{this.props.author}</h5>
            </div>
            
          </div>
          
          
          
          
      )
    }
  }
  
 
  


  export default Card1;
  