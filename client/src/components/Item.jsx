import React              from 'react';
import {Link}             from '@reach/router';
import urlToCurrentDomain from '../lib/urlToCurrentDomain';
import * as Config        from '../config.json';
import {Col} from 'react-bootstrap/';
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
        <Col md={12}>
      <div className='card mb-4'>
        <h2 className='card-header'>{this.state.item.Name}</h2>
        <div className='row'>
          <div className='col-12 col-md-3'>
            <div className='product-image'>
              <img src={this.state.item.Image} alt={this.state.item.Image} />
            </div>
          </div>
          <div className='col-12 col-md-9'>
          <div className='card-body'></div>
          <p>Price: {this.state.item.Price} </p>
          <Link to='/items'>Back to All items</Link>
        </div>
        </div>
        </div>
      </Col>
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
