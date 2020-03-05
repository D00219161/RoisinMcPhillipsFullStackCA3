import React              from 'react';
import {Link}             from '@reach/router';
import urlToCurrentDomain from '../lib/urlToCurrentDomain';
import * as Config        from '../config.json';
import {Media, Row, Button}   from 'react-bootstrap';
//import AddToCartButton from './AddToCartButton'; <AddToCartButton item={this.state.item} cart={this.props.cart} />

class Item extends React.Component {

  // #######################################################
  // # Local state
  // #######################################################

  state = {}

  // #######################################################
  // # Render
  // #######################################################

  render() {

    if (!this.state.item && this.state.itemLoaded === true) {
      return (
        <p>Error loading items. Try again later.</p>
      );
    } else if (!this.state.item) {
      return (
        <p>Loading items...
        </p>
      );
    } else if (this.state.item.length === 0) {
      return (
        <p>Sorry, no items are available</p>
      );
    } else {
      return (
          <Row>
         <Media><img src={this.state.item.Image} alt={this.state.item.Image} width={300}height={300}/>
        <Media.Body id="body">
        <h2>{this.state.item.Name}</h2>
          <p>Price: {this.state.item.Price} </p>
          <Button href='/items'>Back to All items</Button>
       </Media.Body>
       </Media>
        </Row>
      )
    }
  }

  componentDidMount() {
    fetch(urlToCurrentDomain(`${Config.itemsAPI}/${this.props.itemID}`))
      .then (res  => res.json())
      .then (json => {
        this.setState({item       : json});
        this.setState({itemLoaded : true});
      })
      .catch(err => {
        this.setState({itemLoaded: true});
      });
  }

}

export default Item;
