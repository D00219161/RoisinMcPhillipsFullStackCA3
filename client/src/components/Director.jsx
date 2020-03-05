import React              from 'react';
import {Link}             from '@reach/router';
import urlToCurrentDomain from '../lib/urlToCurrentDomain';
import * as Config        from '../config.json';
import {Container, Row, Col, Button} from 'react-bootstrap'

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
        <Container className ="directors">
<div>
  <Row>
  <Col xs><h1>{this.state.director.Name}</h1>
  <div className='product-image'>
  <img src={this.state.director.Image} alt={this.state.director.Image} />
          <p>DOB: {this.state.director.DOB}</p>
          <p>Age: {this.state.director.Age}</p>
          <p>Nationality: {this.state.director.Nationality}</p>
          <p>Genre: {this.state.director.Genres}</p>
          <p>Films: {this.state.director.Films}</p>
          <Button href='/directors'>Back to All directors</Button>
         </div>
        </Col>
        </Row>
  </div>
</Container>
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
