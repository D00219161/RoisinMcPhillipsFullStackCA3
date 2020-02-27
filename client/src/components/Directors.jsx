import React              from 'react';
import urlToCurrentDomain from '../lib/urlToCurrentDomain';
import {Link}             from '@reach/router';
import * as Config        from '../config.json';

class Directors extends React.Component {
  // #######################################################
  // # Local state
  // #######################################################

  state = {}

  // #######################################################
  // # Render
  // #######################################################

  render() {

    if (!this.state.directors && this.state.directorsLoaded === true) {
      return (
        <p>Error loading directors. Try again later.</p>
      );
    } else if (!this.state.directors) {
      return (
        <p>Loading directors...</p>
      );
    } else if (this.state.directors.length === 0) {
      return (
        <p>Sorry, no directors are available</p>
      );
    } else {
      return (
        <div>
          <h1>All Directors in the database</h1>
          <ul>
            {this.state.directors.map(director => (
                <li key={`director_${director._id}`}><Link to={`/director/${director._id}`}>{director.Name}</Link></li>
            ))}
          </ul>
          <p><Link to='/add-director'>Add a new Director</Link></p>
        </div>
      )
    }
  }

  componentDidMount() {
    fetch(urlToCurrentDomain(Config.directorsAPI))
      .then (res  => res.json())
      .then (json => {
        this.setState({directors       : json});
        this.setState({directorsLoaded : true});
      })
      .catch(err => {
        this.setState({directorsLoaded: true});
      });
  }

}

export default Directors;

