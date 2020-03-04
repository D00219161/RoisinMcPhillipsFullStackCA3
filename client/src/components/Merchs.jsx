import React              from 'react';
import urlToCurrentDomain from '../lib/urlToCurrentDomain';
import {Link}             from '@reach/router';
import * as Config        from '../config.json';

class Merchs extends React.Component {

  // #######################################################
  // # Local state
  // #######################################################

  state = {}

  // #######################################################
  // # Render
  // #######################################################

  render() {

    if (!this.state.merchs && this.state.merchsLoaded === true) {
      return (
        <p>Error loading merch. Try again later.</p>
      );
    } else if (!this.state.merchs) {
      return (
        <p>Loading merch...</p>
      );
    } else if (this.state.merchs.length === 0) {
      return (
        <p>Sorry, no merch is available</p>
      );
    } else {
      return (
        <div className='product-list pt-3 pl-3 pr-3'>
          <h1>All merch in the database</h1>
          <ul>
            {this.state.merchs.map(merch => (
                <li key={`merch_${merch._id}`}><Link to={`/merch/${merch._id}`}>{merch.Name}</Link></li>
            ))}
          </ul>
          <p><Link to='/add-merch'>Add new Merch</Link></p>
        </div>
      )
    }
  }

  componentDidMount() {
    fetch(urlToCurrentDomain(Config.merchsAPI))
      .then (res  => res.json())
      .then (json => {
        this.setState({merchs       : json});
        this.setState({merchsLoaded : true});
      })
      .catch(err => {
        this.setState({merchsLoaded: true});
      });
  }

}

export default Merchs;

