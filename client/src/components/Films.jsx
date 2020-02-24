import React              from 'react';
import urlToCurrentDomain from '../lib/urlToCurrentDomain';
import {Link}             from '@reach/router';
import * as Config        from '../config.json';

class Films extends React.Component {

  // #######################################################
  // # Local state
  // #######################################################

  state = {}

  // #######################################################
  // # Render
  // #######################################################

  render() {

    if (!this.state.films && this.state.filmsLoaded === true) {
      return (
        <p>Error loading films. Try again later.</p>
      );
    } else if (!this.state.films) {
      return (
        <p>Loading films...</p>
      );
    } else if (this.state.films.length === 0) {
      return (
        <p>Sorry, no films are available</p>
      );
    } else {
      return (
        <div>
          <h1>All Films in the database</h1>
          <ul>
            {this.state.films.map(film => (
                <li key={`film_${film._id}`}><Link to={`/film/${film._id}`}>{film.Title}</Link></li>
            ))}
          </ul>
          <p><Link to='/add-film'>Add a new Film</Link></p>
        </div>
      )
    }
  }

  componentDidMount() {
    fetch(urlToCurrentDomain(Config.filmsAPI))
      .then (res  => res.json())
      .then (json => {
        this.setState({films       : json});
        this.setState({filmsLoaded : true});
      })
      .catch(err => {
        this.setState({filmsLoaded: true});
      });
  }

}

export default Films;

