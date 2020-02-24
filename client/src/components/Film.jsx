import React              from 'react';
import {Link}             from '@reach/router';
import urlToCurrentDomain from '../lib/urlToCurrentDomain';
import * as Config        from '../config.json'

class Film extends React.Component {

  // #######################################################
  // # Local state
  // #######################################################

  state = {}

  // #######################################################
  // # Render
  // #######################################################

  render() {

    if (!this.state.film && this.state.filmLoaded === true) {
      return (
        <p>Error loading films. Try again later.</p>
      );
    } else if (!this.state.film) {
      return (
        <p>Loading films...
        </p>
      );
    } else if (this.state.film.length === 0) {
      return (
        <p>Sorry, no films are available</p>
      );
    } else {
      return (
        <div>
          <h1>{this.state.film.Title}</h1>
          <p><title>Year</title>{this.state.film.Year}</p>
          <p><title>Genre</title>{this.state.film.Genre}</p>
          <p><title>Director</title>{this.state.film.Director}</p>
          <p><title>Starring</title>{this.state.film.Starring}</p>
          <Link to='/'>Back to All films</Link>
        </div>
      )
    }
  }

  componentDidMount() {
    fetch(urlToCurrentDomain(`${Config.filmsAPI}/${this.props.filmID}`))
      .then (res  => res.json())
      .then (json => {
        this.setState({film       : json});
        this.setState({filmLoaded : true});
      })
      .catch(err => {
        this.setState({filmLoaded: true});
      });
  }

}

export default Film;
