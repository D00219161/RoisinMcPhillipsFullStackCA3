import React, { Component } from 'react';
import { Carousel, Button, ButtonToolbar, Badge} from 'react-bootstrap';

class Slider extends Component {

  render() {
    return (
      <Carousel>
  <Carousel.Item>
    <img
      className="w-100"
      src="https://static.rogerebert.com/uploads/review/primary_image/reviews/dark-waters-movie-review-2019/hero_dark-waters-movie-review-2019.jpg" width="800px" height="550px"
      alt-text="dark waters"
    />
    <Carousel.Caption>
    <Badge id="badge"><h3>Dark Waters</h3></Badge>
      <ButtonToolbar>
  <Button href="/films" target="_blank">See More Films</Button>
  </ButtonToolbar>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.cocktailsandcocktalk.com/wp-content/uploads/2018/11/kj-feat.jpg"  width="800px" height="550px"
      alt-text="kj apa"
    />

    <Carousel.Caption>
    <Badge id="badge"><h3>Keneti James Fitzgerald Apa</h3></Badge>
      <ButtonToolbar>
  <Button href="/actors" target="_blank">See More Actors</Button>
  </ButtonToolbar>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.etonline.com/sites/default/files/styles/max_970x546/public/images/2019-03/gettyimages-1134403896.jpg?itok=j-td2oLl&h=65d2ff79" width="800px" height="550px"
      alt="justin baldoni"
    />

    <Carousel.Caption>
    <Badge id="badge"><h3>Justin Baldoni</h3></Badge>
      <ButtonToolbar>
  <Button href="/directors" target="_blank">See More Directors</Button>
  </ButtonToolbar>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
    
  }
  
}

export default Slider;