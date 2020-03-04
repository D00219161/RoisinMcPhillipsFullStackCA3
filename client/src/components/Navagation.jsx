import React, { Component } from 'react';
import { Nav, Navbar, Form, NavDropdown} from 'react-bootstrap';
import ViewCart from './ViewCart';
import Stripe   from './Stripe';

class NavMenu extends Component {

  render() {
    return (
      <Navbar>
    <Navbar.Brand><img src="https://img.icons8.com/doodle/48/000000/movie.png"/>Movies</Navbar.Brand>
    <Nav className="nav">
      <Nav.Link href="/">Films</Nav.Link>
      <Nav.Link href="/actors">Actors</Nav.Link>
      <Nav.Link href="/directors">Directors</Nav.Link>
      <Nav.Link href="/merchs">Shop Merch</Nav.Link>
       <NavDropdown title="Shop Merch" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1"></NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <ViewCart cart={this.props.cart} />
    </Form>
    <Stripe />
  </Navbar>
    );
    
  }

}

export default NavMenu;