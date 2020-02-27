import React              from 'react';
import {Link}             from '@reach/router';
import urlToCurrentDomain from '../lib/urlToCurrentDomain';
import * as Config        from '../config.json'

class Director extends React.Component {

  // #######################################################
  // # Local state
  // #######################################################

  state = {}

  // #######################################################
  // # Render
  // #######################################################

  render() {

    if (!this.state.director && this.state.directorLoaded === true) {
      return (
        <p>Error loading directors. Try again later.</p>
      );
    } else if (!this.state.director) {
      return (
        <p>Loading directors...
        </p>
      );
    } else if (this.state.director.length === 0) {
      return (
        <p>Sorry, no directors are available</p>
      );
    } else {
      return (
        <div>
          <h1>{this.state.director.Name}</h1>
          <p>Date of birth: {this.director.DOB}</p>
          <p>Age: {this.director.Age}</p>
          <p>Nationality: {this.director.Nationality}</p>
          <p>Genre: {this.state.director.Genres}</p>
          <p>Films: {this.state.director.Films}</p>
          <Link to='/'>Back to All directors</Link>
        </div>
      )
    }
  }

  componentDidMount() {
    fetch(urlToCurrentDomain(`${Config.directorsAPI}/${this.props.directorID}`))
      .then (res  => res.json())
      .then (json => {
        this.setState({director       : json});
        this.setState({directorLoaded : true});
      })
      .catch(err => {
        this.setState({directorLoaded: true});
      });
  }

}

export default Director;
