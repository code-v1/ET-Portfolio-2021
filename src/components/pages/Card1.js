import React from 'react';
import ReactDOM from 'react-dom';
import '../pages/Card1.css'


class Card1 extends React.Component {
    render() {
      return(
          <div className="card">
            <img src={this.props.img} />
            <div className="card-body">
              <h2>{this.props.title}</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
              <h5>{this.props.author}</h5>
            </div>
          </div>
      )
    }
  }
  
  class App extends React.Component {
    render() {
      return (
        <>
        
         <div className='cards'>
           <Card1
            img='https://picsum.photos/id/54/400/300'
            title='What I learned from my visit to The Upside Down'
            author='Nancy Wheeler' />
        </div>  
        </>
      )
    }
  }
  


  export default Card1;
  