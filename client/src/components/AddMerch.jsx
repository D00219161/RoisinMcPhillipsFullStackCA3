import React              from 'react';
import {navigate, Link}   from '@reach/router';
import urlToCurrentDomain from '../lib/urlToCurrentDomain';
import * as Config        from '../config.json'

class AddFilm extends React.Component {

  // #######################################################
  // # Local state
  // #######################################################

  state = {
    Name     : '',
    Image     : '',
    Description      : '',
    Price     : ''
  }

  // #######################################################
  // # Render
  // #######################################################

  render() {

    if (this.state.reportedError) {
      return (
        <div>
          <h1>Error</h1>
          <p>Sorry, there was an error creating the merch. The error was: {this.state.reportedError || 'Unknown'}</p>
          <button onClick={this.resetForRetry.bind(this)}>Try again</button>&nbsp;|&nbsp;
          <Link to='/merchs'>Back to Merch</Link>
        </div>
      );
    } else if (this.state.processingAdd) {
      return (
        <div>Adding merch...</div>
      );
    } else {
      return (
        <div>
          <h1>Add a merch</h1>
          <form onSubmit={this.handleSubmit.bind(this)}>

            <div>
              <label>Merch Name:
              <input type='text' value={this.state.Name} onChange={this.handleNameUpdate.bind(this)}></input>
              </label>
              </div>

              <div>
              <label>Merch Image:
              <input type='text' value={this.state.Image} onChange={this.handleImageUpdate.bind(this)}></input>
              </label>
              </div>

              <div>
              <label>Merch Description:
              <input type='text' value={this.state.Description} onChange={this.handleDescriptionUpdate.bind(this)}></input>
              </label>
              </div>
              
              <div>
              <label>Merch Price:
              <input type='text' value={this.state.Price} onChange={this.handlePriceUpdate.bind(this)}></input>
              </label>
              </div>

            <div>
              <input type='submit' value='Add Merch' />
            </div>

          </form>
          <Link to='/merchs'>Back to All merch</Link>
        </div>
      );
    }
  }

  handleNameUpdate(e) {
    this.setState({Name: e.target.value || null});
  }

  handleImageUpdate(e) {
    this.setState({Image: e.target.value || null});
  }

  handleDescriptionUpdate(e) {
    this.setState({Description: e.target.value || null});
  }

  handlePriceUpdate(e) {
    this.setState({Price: e.target.value || null});
  }

  handleSubmit(e) {

    // Prevent the default form submit action
    e.preventDefault();

    // Perform a POST call for the new data
    fetch(urlToCurrentDomain(`${Config.merchsAPI}`), {
      method : 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        authoredBy: this.state.authoredBy,
        Name     : this.state.Name,
        Image     : this.state.Image,
        Description      : this.state.Description,
        Price     : this.state.Price
      })}
    )
      .then (res  => {
        if (res.status >= 400) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then (json => navigate(`/merch/${json._id}`))
      .catch(err => {
        this.setState({reportedError: err.message || 'Unknown'});
      })

  }

  resetForRetry() {
    this.setState({reportedError: null});
  }

  componentDidMount() {
    // this.getComments(this.props.merchID);
  }

}

export default AddMerch;
