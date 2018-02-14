import React, { Component } from 'react';
import './App.css';

//Creating a carousel of images
//First create an array from the list of images from links provided, then test in render by adding valImages[0] into an imagae tag.

const valImages = ['https://media.giphy.com/media/xUOwFZcbwsf8ejorTi/giphy.gif',
  'https://media.giphy.com/media/l4pT7MBMlkR9XF7qg/giphy.gif',
  'https://media.giphy.com/media/xThta7NHsQifl4vyRW/giphy.gif',
  'https://media.giphy.com/media/l4pSYMRnbiuUfpxAs/giphy.gif' ]

// Think about how to make the array dynamic. I order to change a value, use react state.
class App extends Component {
  constructor() {
    super()
    this.state = {
      imgIndex: 0 , //this index refers to one of the objects in the array.
      spanNum: 1 , // anything that needs to change in the viewer should have a state assignation.
    }
    this.imgPrev = this.imgPrev.bind(this);
    this.imgNext = this.imgNext.bind(this);
  }


  imgPrev = () => {
  
    this.setState({ //what do you want to update inside the state? in this case the index and the value of the span element.
      imgIndex: this.state.imgIndex - 1, //subtract one to go backwards
      spanNum: this.state.spanNum - 1
    })
  }

  imgNext = () => {
    this.setState({
      imgIndex: this.state.imgIndex + 1, //add one to go forwards.
      spanNum: this.state.spanNum + 1
    })
  }

  render() {
    return(
      <div className = "App" >
        <h1 >Valentines Carousel</h1>
        <div>
          <button onClick={this.imgPrev} 
              disabled={this.state.imgIndex === 0}> Previous </button> 
          <span> {this.state.spanNum}  of {valImages.length} </span> 
          <button onClick={this.imgNext} 
              disabled={this.state.imgIndex === valImages.length -1}> Next </button>
        </div>
        <div>
          <img src={valImages[this.state.imgIndex]} alt="">{this.state.img}</img>
        </div>
      </div >
    );
  }
}

export default App;
