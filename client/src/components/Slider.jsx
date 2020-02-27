import React, { Component } from 'react';
import { Carousel, Button, ButtonToolbar} from 'react-bootstrap';

class Slider extends Component {

  render() {
    return (
      <Carousel>
  <Carousel.Item>
    <img
      className="w-100"
      src=""
      alt-text="Red Dead Redemption 2"
    />
    <Carousel.Caption>
      <h3></h3>
      <ButtonToolbar>
  <Button href="" 
  target="_blank">See More</Button>
  </ButtonToolbar>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="w-100"
      src=""
      alt-text="Red Dead Redemption 2"
    />
    <Carousel.Caption>
      <h3></h3>
      <ButtonToolbar>
  <Button href="" 
  target="_blank">See More</Button>
  </ButtonToolbar>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="w-100"
      src=""
      alt-text="Red Dead Redemption 2"
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