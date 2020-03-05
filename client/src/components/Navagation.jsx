import React, { Component } from 'react';
import { Nav, Navbar, Form} from 'react-bootstrap';
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
      <Nav.Link href="#">Shop Merch</Nav.Link>
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