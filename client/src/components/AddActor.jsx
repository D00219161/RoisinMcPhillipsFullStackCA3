import React              from 'react';
import {navigate, Link}   from '@reach/router';
import urlToCurrentDomain from '../lib/urlToCurrentDomain';
import * as Config        from '../config.json'

class AddActor extends React.Component {

  // #######################################################
  // # Local state
  // #######################################################

  state = {
    Name     : '',
    DOB      : '',
    Age     : '',
    Nationality   : '',
    Films  : ''
  }

  // #######################################################
  // # Render
  // #######################################################

  render() {

    if (this.state.reportedError) {
      return (
        <div>
          <h1>Error</h1>
          <p>Sorry, there was an error creating the actor. The error was: {this.state.reportedError || 'Unknown'}</p>
          <button onClick={this.resetForRetry.bind(this)}>Try again</button>&nbsp;|&nbsp;
          <Link to='/'>Back to All Actors</Link>
        </div>
      );
    } else if (this.state.processingAdd) {
      return (
        <div>Adding actor...</div>
      );
    } else {
      return (
        <div>
          <h1>Add an Actor</h1>
          <form onSubmit={this.handleSubmit.bind(this)}>

            <div>
              <label>Actor Name:
              <input type='text' value={this.state.Name} onChange={this.handleNameUpdate.bind(this)}></input>
              </label>
              </div>

              <div>
              <label>Actor DOB:
              <input type='text' value={this.state.DOB} onChange={this.handleDOBUpdate.bind(this)}></input>
              </label>
              </div>

              <div>
              <label>Actor Age:
              <input type='text' value={this.state.Age} onChange={this.handleAgeUpdate.bind(this)}></input>
              </label>
              </div>

              <div>
              <label>Actor Nationality:
              <input type='text' value={this.state.Nationality} onChange={this.handleNationalityUpdate.bind(this)}></input>
              </label>
              </div>

              <div>
              <label>Actor Films:
              <input type='text' value={this.state.Films} onChange={this.handleFilmsUpdate.bind(this)}></input>
              </label>
            </div>

            <div>
              <input type='submit' value='Add Actor' />
            </div>

          </form>
          <Link to='/actors'>Back to All actors</Link>
        </div>
      );
    }
  }

  handleNameUpdate(e) {
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

  handleFilmsUpdate(e) {
    this.setState({Films: e.target.value || null});
  }

  handleSubmit(e) {

    // Prevent the default form submit action
    e.preventDefault();

    // Perform a POST call for the new data
    fetch(urlToCurrentDomain(`${Config.actorsAPI}`), {
      method : 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        authoredBy   : this.state.authoredBy,
        Name         : this.state.Name,
        DOB          : this.state.DOB,
        Age          : this.state.Age,
        Nationality  : this.state.Nationality,
        Films        : this.state.Films
      })}
    )
      .then (res  => {
        if (res.status >= 400) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then (json => navigate(`/actor/${json._id}`))
      .catch(err => {
        this.setState({reportedError: err.message || 'Unknown'});
      })

  }

  resetForRetry() {
    this.setState({reportedError: null});
  }

  componentDidMount() {
    // this.getComments(this.props.actorID);
  }

}

export default AddActor;
