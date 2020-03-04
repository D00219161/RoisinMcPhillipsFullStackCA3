import React              from 'react';
import {Link}             from '@reach/router';
import urlToCurrentDomain from '../lib/urlToCurrentDomain';
import * as Config        from '../config.json';
import {Col} from 'react-bootstrap/';

class Merch extends React.Component {

  // #######################################################
  // # Local state
  // #######################################################

  state = {}

  // #######################################################
  // # Render
  // #######################################################

  render() {

    if (!this.state.merch && this.state.merchLoaded === true) {
      return (
        <p>Error loading merch. Try again later.</p>
      );
    } else if (!this.state.merch) {
      return (
        <p>Loading merch...
        </p>
      );
    } else if (this.state.merch.length === 0) {
      return (
        <p>Sorry, no merch is available</p>
      );
    } else {
      return (
        <Col md={12}>
      <div className='card mb-4'>
        <h2 className='card-header'>{this.state.merch.Name}</h2>
        <div className='row'>
          <div className='col-12 col-md-3'>
            <div className='product-image'>
              <img src={this.state.merch.Image} alt={this.state.merch.Image} />
            </div>
          </div>
          <div className='col-12 col-md-9'>
            <div className='card-body'></div>
          <p>Description: {this.state.merch.Description}</p>
          <p>Price: {this.state.merch.Price}</p>
          <Link to='/merch'>Back to merch</Link>
        </div>
        </div>
        </div>
      </Col>
      )
    }
  }

  componentDidMount() {
    fetch(urlToCurrentDomain(`${Config.merchsAPI}/${this.props.merchID}`))
      .then (res  => res.json())
      .then (json => {
        this.setState({merch       : json});
        this.setState({merchLoaded : true});
      })
      .catch(err => {
        this.setState({merchLoaded: true});
      });
  }

}

export default Merch;
