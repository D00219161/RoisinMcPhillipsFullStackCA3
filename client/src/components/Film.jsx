import React              from 'react';
import {Link}             from '@reach/router';
import urlToCurrentDomain from '../lib/urlToCurrentDomain';
import * as Config        from '../config.json';
import {Col, Button} from 'react-bootstrap/';

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
        <Col md={12}>
      <div className='card mb-4'>
        <h2 className='card-header'>{this.state.film.Title}</h2>
        <div className='row'>
          <div className='col-12 col-md-3'>
            <div className='product-image'>
              <img src={this.state.film.Image} alt={this.state.film.Image} />
            </div>
          </div>
          <div className='col-12 col-md-9'>
            <div className='card-body'></div>
          <p>Year: {this.state.film.Year}</p>
          <p>Genre: {this.state.film.Genre}</p>
          <p>Director: {this.state.film.Director}</p>
          <p>Starring: {this.state.film.Starring}</p>
          <p><Button href='/'>Back to All films</Button></p>
        </div>
        </div>
        </div>
      </Col>
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
