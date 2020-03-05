import React              from 'react';
import urlToCurrentDomain from '../lib/urlToCurrentDomain';
import {Link}             from '@reach/router';
import * as Config        from '../config.json';
import  {Button}          from 'react-bootstrap';

class Actors extends React.Component {

  // #######################################################
  // # Local state
  // #######################################################

  state = {}

  // #######################################################
  // # Render
  // #######################################################

  render() {

    if (!this.state.actors && this.state.actorsLoaded === true) {
      return (
        <p>Error loading actors. Try again later.</p>
      );
    } else if (!this.state.actors) {
      return (
        <p>Loading actors...</p>
      );
    } else if (this.state.actors.length === 0) {
      return (
        <p>Sorry, no actors are available</p>
      );
    } else {
      return (
        <div>
          <h1>All Actors in the database</h1>
          <ul>
            {this.state.actors.map(actor => (
                <li key={`actor_${actor._id}`}><Link to={`/actor/${actor._id}`}>{actor.Name}</Link></li>
            ))}
          </ul>
          <p><Button href='/add-actor'>Add a new Actor</Button></p>
        </div>
      )
    }
  }

  componentDidMount() {
    fetch(urlToCurrentDomain(Config.actorsAPI))
      .then (res  => res.json())
      .then (json => {
        this.setState({actors       : json});
        this.setState({actorsLoaded : true});
      })
      .catch(err => {
        this.setState({actorsLoaded: true});
      });
  }

}

export default Actors;

