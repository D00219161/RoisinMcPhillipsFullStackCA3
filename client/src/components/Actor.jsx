import React              from 'react';
import {Link}             from '@reach/router';
import urlToCurrentDomain from '../lib/urlToCurrentDomain';
import * as Config        from '../config.json'

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
        <div>
          <h1>{this.state.actor.Name}</h1>
          <p>Date of Birth: {this.actor.DOB}</p>
          <p>Age: {this.actor.Age}</p>
          <p>Nationality: {this.actor.Nationality}</p>
          <p>Films: {this.state.Films}</p>
          <Link to='/'>Back to All actors</Link>
        </div>
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
