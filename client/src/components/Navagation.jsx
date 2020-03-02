import React, { Component } from 'react';
import { Nav, Navbar} from 'react-bootstrap';

class NavMenu extends Component {

  render() {
    return (
      <Navbar>
    <Navbar.Brand>Films</Navbar.Brand>
    <Nav className="nav">
    <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/actors">Videos</Nav.Link>
      <Nav.Link href="/directors">Contact</Nav.Link>
    </Nav>
  </Navbar>
    );
    
  }

}

export default NavMenu;