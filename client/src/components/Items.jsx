import React              from 'react';
import urlToCurrentDomain from '../lib/urlToCurrentDomain';
import {Link}             from '@reach/router';
import * as Config        from '../config.json';
import {Button}            from 'react-bootstrap';

class Items extends React.Component {

  // #######################################################
  // # Local state
  // #######################################################

  state = {}

  // #######################################################
  // # Render
  // #######################################################

  render() {

    if (!this.state.items && this.state.itemsLoaded === true) {
      return (
        <p>Error loading items. Try again later.</p>
      );
    } else if (!this.state.items) {
      return (
        <p>Loading items...</p>
      );
    } else if (this.state.items.length === 0) {
      return (
        <p>Sorry, no items are available</p>
      );
    } else {
      return (
        <div className='product-list pt-3 pl-3 pr-3'>
          <h1>All Items in the database</h1>
          <ul>
            {this.state.items.map(item => (
                <li key={`item_${item._id}`}><Link to={`/item/${item._id}`}>{item.Name}</Link></li>
            ))}
          </ul>
          <p><Button href='/items'>Back to all items</Button></p>
        </div>
      )
    }
  }

  componentDidMount() {
    fetch(urlToCurrentDomain(Config.itemsAPI))
      .then (res  => res.json())
      .then (json => {
        this.setState({items       : json});
        this.setState({itemsLoaded : true});
      })
      .catch(err => {
        this.setState({itemsLoaded: true});
      });
  }

}

export default Items;

