import React              from 'react';
import AddToCartButton from './AddToCartButton'; 
import {Link}             from '@reach/router';
import urlToCurrentDomain from '../lib/urlToCurrentDomain';
import * as Config        from '../config.json';

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
<div>
  <h1>{this.state.item.Name}</h1>
  <div className='product-image'>
  <img src={this.state.item.Image} alt={this.state.item.Image} />
          <p>Description: {this.state.item.Description}</p>
          <p>Price: {this.state.item.Price}</p>
          <AddToCartButton item={this.props.item} cart={this.props.cart} />
          <Link to='/items'>Back to All items</Link>
         </div>
  </div>
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

