import React, { Component } from 'react';
//import { Carousel} from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'

class Slider extends Component {

  render() {
    return (
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="images/loveactually.png"
      alt="Love Actually"
    />
    <Carousel.Caption>
      <h3>Love Actually</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src=""
      alt=""
    />

    <Carousel.Caption>
      <h3></h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src=""
      alt=""
    />

    <Carousel.Caption>
      <h3></h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
    
  }
  
}

export default Slider;