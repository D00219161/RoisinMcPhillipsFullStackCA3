import React              from 'react';
import {navigate, Link}   from '@reach/router';
import urlToCurrentDomain from '../lib/urlToCurrentDomain';
import * as Config        from '../config.json'

class AddDirector extends React.Component {

  // #######################################################
  // # Local state
  // #######################################################

  state = {
    Name     : '',
    Image    : '',
    DOB      : '',
    Age      : '',
    Nationality : '',
    Genres     : '',
    Films     : ''
 
  }

  // #######################################################
  // # Render
  // #######################################################

  render() {

    if (this.state.reportedError) {
      return (
        <div>
          <h1>Error</h1>
          <p>Sorry, there was an error creating the director. The error was: {this.state.reportedError || 'Unknown'}</p>
          <button onClick={this.resetForRetry.bind(this)}>Try again</button>&nbsp;|&nbsp;
          <Link to='/'>Back to All Directors</Link>
        </div>
      );
    } else if (this.state.processingAdd) {
      return (
        <div>Adding director...</div>
      );
    } else {
      return (
        <div>
          <h1>Add a director</h1>
          <form onSubmit={this.handleSubmit.bind(this)}>

            <div>
              <label>Director Name:
              <input type='text' value={this.state.Name} onChange={this.handleNameUpdate.bind(this)}></input>
              </label>
              </div>

              <div>
              <label>Director Image:
              <input type='text' value={this.state.Image} onChange={this.handleImageUpdate.bind(this)}></input>
              </label>
              </div>

              <div>
              <label>Director Date Of Birth:
              <input type='text' value={this.state.DOB} onChange={this.handleDOBUpdate.bind(this)}></input>
              </label>
              </div>
              
              <div>
              <label>Director Age:
              <input type='text' value={this.state.Age} onChange={this.handleAgeUpdate.bind(this)}></input>
              </label>
              </div>

              <div>
              <label>Director Nationality:
              <input type='text' value={this.state.Nationality} onChange={this.handleNationalityUpdate.bind(this)}></input>
              </label>
              </div>

              <div>
              <label>Director Genres:
              <input type='text' value={this.state.Genres} onChange={this.handleGenresUpdate.bind(this)}></input>
              </label>
            </div>

            <div>
              <label>Director Films:
              <input type='text' value={this.state.Films} onChange={this.handleFilmsUpdate.bind(this)}></input>
              </label>
            </div>

            <div>
              <input type='submit' value='Add Drector' />
            </div>

          </form>
          <Link to='/directors'>Back to All directors</Link>
        </div>
      );
    }
  }

  handleNameUpdate(e) {
    this.setState({Name: e.target.value || null});
  }

  handleImageUpdate(e) {
    this.setState({Name: e.target.value || null});
  }

  handleDOBUpdate(e) {
    this.setState({DOB: e.target.value || null});
  }

  handleAgeUpdate(e) {
    this.setState({Age: e.target.value || null});
  }

  handleNationalityUpdate(e) {
    this.setState({Nationality: e.target.value || null});
  }

  handleGenresUpdate(e) {
    this.setState({Genres: e.target.value || null});
  }

  handleFilmsUpdate(e) {
    this.setState({Films: e.target.value || null});
  }

  handleSubmit(e) {

    // Prevent the default form submit action
    e.preventDefault();

    // Perform a POST call for the new data
    fetch(urlToCurrentDomain(`${Config.directorsAPI}`), {
      method : 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        authoredBy: this.state.authoredBy,
        Name     : this.state.Name,
        Image    : this.state.Image,
        DOB      : this.state.DOB,
        Age      : this.state.Age,
        Nationality  : this.state.Nationality,
        Genres   : this.state.Genres,
        Films    : this.state.Films
      })}
    )
      .then (res  => {
        if (res.status >= 400) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then (json => navigate(`/director/${json._id}`))
      .catch(err => {
        this.setState({reportedError: err.message || 'Unknown'});
      })

  }

  resetForRetry() {
    this.setState({reportedError: null});
  }

  componentDidMount() {
    // this.getComments(this.props.filmID);
  }

}

export default AddDirector;
