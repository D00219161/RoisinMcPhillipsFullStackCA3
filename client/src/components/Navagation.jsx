import React, { Component } from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import image1 from 'images/movietimeresize.jpg';

class NavMenu extends Component {

  render() {
    return (
      <Navbar>
    <Navbar.Brand><img src={image1}/>Movies</Navbar.Brand>
    <Nav className="nav">
      <Nav.Link href="/">Films</Nav.Link>
      <Nav.Link href="/actors">Actors</Nav.Link>
      <Nav.Link href="/directors">Directors</Nav.Link>
    </Nav>
  </Navbar>
    );
    
  }

}

export default NavMenu;