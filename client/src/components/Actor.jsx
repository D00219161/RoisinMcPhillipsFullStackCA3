import React              from 'react';
import {Link}             from '@reach/router';
import urlToCurrentDomain from '../lib/urlToCurrentDomain';
import * as Config        from '../config.json';
import {Col, Button} from 'react-bootstrap/';

class Actor extends React.Component {

  // #######################################################
  // # Local state
  // #######################################################

  state = {}

  // #######################################################
  // # Render
  // #######################################################

  render() {

    if (!this.state.actor && this.state.actorLoaded === true) {
      return (
        <p>Error loading actors. Try again later.</p>
      );
    } else if (!this.state.actor) {
      return (
        <p>Loading actors...
        </p>
      );
    } else if (this.state.actor.length === 0) {
      return (
        <p>Sorry, no actors are available</p>
      );
    } else {
      return (
        <Col md={12}>
      <div className='card mb-4'>
        <h2 className='card-header'>{this.state.actor.Name}</h2>
        <div className='row'>
          <div className='col-12 col-md-3'>
            <div className='product-image-actors'>
              <img src={this.state.actor.Image} alt={this.state.actor.Name} />
            </div>
          </div>
          <div className='col-12 col-md-9'>
            <div className='card-body'></div>
          <p>Date Of Birth: {this.state.actor.DOB}</p>
          <p>Age: {this.state.actor.Age}</p>
          <p>Nationality: {this.state.actor.Nationality}</p>
          <p>Films: {this.state.actor.Films}</p>
          <Button href='/actors'>Back to All actors</Button>
          </div> 
        </div>
        </div>
      </Col>
      )
    }
  }

  componentDidMount() {
    fetch(urlToCurrentDomain(`${Config.actorsAPI}/${this.props.actorID}`))
      .then (res  => res.json())
      .then (json => {
        this.setState({actor       : json});
        this.setState({actorLoaded : true});
      })
      .catch(err => {
        this.setState({actorLoaded: true});
      });
  }

}

export default Actor;
