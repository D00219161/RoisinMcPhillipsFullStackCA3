import React, { Component } from 'react';
import { Carousel, Button, ButtonToolbar} from 'react-bootstrap';
import {image1} from './images/loveactually.png';

class Slider extends Component {

  render() {
    return (
      <Carousel>
  <Carousel.Item>
    <img id="slider-image"
      className="w-100"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR_upFYoEesl-8MLChia4WqTzDlGLzBMQkl5E_LuZiF1OjJpbCM"
      alt-text="love actually"
    />
    <Carousel.Caption>
      <h3>Love Actually</h3>
      <ButtonToolbar>
  <Button href="" 
  target="_blank">See More</Button>
  </ButtonToolbar>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src=""
      alt-text=""
    />

    <Carousel.Caption>
      <h3></h3>
      <ButtonToolbar>
  <Button href="" target="_blank">See More</Button>
  </ButtonToolbar>
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
      <ButtonToolbar>
  <Button href="" 
  target="_blank">See More</Button>
  </ButtonToolbar>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
    
  }
  
}

export default Slider;