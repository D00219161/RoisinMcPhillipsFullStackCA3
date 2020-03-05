import React, { Component } from 'react';
import { Nav, Navbar, Form} from 'react-bootstrap';
import ViewCart from './ViewCart';
import StripeCheckout   from './Stripe';
import Toast    from './Toast';

class NavMenu extends Component {

  render() {
    return (
      <Navbar>
    <Navbar.Brand><img src="https://img.icons8.com/doodle/48/000000/movie.png"/>Movies</Navbar.Brand>
    <Nav className="nav">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/films">Films</Nav.Link>
      <Nav.Link href="/actors">Actors</Nav.Link>
      <Nav.Link href="/directors">Directors</Nav.Link>
      <Nav.Link href="/items">Shop Merch</Nav.Link>
    </Nav>
    <Form inline>
    <ViewCart cart={this.props.cart} />
    </Form>
    <StripeCheckout/>
    <Toast />
  </Navbar>
    );
    
  }

}

export default NavMenu;