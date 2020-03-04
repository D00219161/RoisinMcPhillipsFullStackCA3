import React, { Component } from 'react';
import { Nav, Navbar, Form, NavDropdown} from 'react-bootstrap';

class NavMenu extends Component {

  render() {
    return (
      <Navbar>
    <Navbar.Brand><img src="https://img.icons8.com/doodle/48/000000/movie.png"/>Movies</Navbar.Brand>
    <Nav className="nav">
      <Nav.Link href="/">Films</Nav.Link>
      <Nav.Link href="/actors">Actors</Nav.Link>
      <Nav.Link href="/directors">Directors</Nav.Link>
       <NavDropdown title="Shop Merch" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">Clothing</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Cooking</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar>
    );
    
  }

}

export default NavMenu;