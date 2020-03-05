import React, { Component } from 'react';
import { Card, CardDeck, Button} from 'react-bootstrap';

class Grid extends Component {

    render() {
      return (

<CardDeck>
  <Card>
    <Card.Body>
      <Card.Title>A Fall From Grace</Card.Title>
      <Card.Text>
      When a woman is indicted for murdering her husband, her lawyer thinks there may be a conspiracy at play. See trailer below.
      </Card.Text>
      <iframe width="375" height="330" src="https://www.youtube.com/embed/YPhE_xU189w"></iframe>
    </Card.Body>
    <Card.Footer>
    <Button href='https://www.netflix.com/title/81127902' target="_blank">Watch Movie Now</Button>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Body>
      <Card.Title>Onward</Card.Title>
      <Card.Text>
      Two teenage elf brothers, Ian and Barley Lightfoot, go on an journey to discover if there is still a 
      little magic left out there in order to spend one last day with their father, who died when they were too young to remember him.
      </Card.Text>
      <iframe width="375" height="330" src="https://www.youtube.com/embed/gn5QmllRCn4"></iframe>
    </Card.Body>
    <Card.Footer>
    <Button href='https://www.odeoncinemas.ie/films/onward/18854/' target="_blank">Book Tickets Now</Button>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Body>
      <Card.Title>Spider-Man: Homecoming</Card.Title>
      <Card.Text>
      Spider-Man: Homecoming is a 2017 American superhero film based on the Marvel Comics character Spider-Man, 
      co-produced by Columbia Pictures and Marvel Studios, and distributed by Sony Pictures Releasing. 
      It is the second Spider-Man film reboot and the sixteenth film in the Marvel Cinematic Universe (MCU).
      </Card.Text>
      <iframe width="375" height="330" src="https://www.youtube.com/embed/sRFcnEyEevU"></iframe>
    </Card.Body>
    <Card.Footer>
    <Button href='https://www.youtube.com/watch?v=z_Psx9ydNak' target="_blank">Watch Tom Holland's Interview</Button>
    </Card.Footer>
  </Card>
</CardDeck>

);
    
}

}

export default Grid;