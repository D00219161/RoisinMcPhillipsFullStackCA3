import React              from 'react';
import {navigate, Link}   from '@reach/router';
import urlToCurrentDomain from '../lib/urlToCurrentDomain';
import * as Config        from '../config.json'

class AddItem extends React.Component {

  // #######################################################
  // # Local state
  // #######################################################

  state = {
    Name      : '',
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
          <p>Sorry, there was an error creating the item. The error was: {this.state.reportedError || 'Unknown'}</p>
          <button onClick={this.resetForRetry.bind(this)}>Try again</button>&nbsp;|&nbsp;
          <Link to='/items'>Back to All Items</Link>
        </div>
      );
    } else if (this.state.processingAdd) {
      return (
        <div>Adding item...</div>
      );
    } else {
      return (
        <div>
          <h1>Add an item</h1>
          <form onSubmit={this.handleSubmit.bind(this)}>

            <div>
              <label>Item Name:
              <input type='text' value={this.state.Name} onChange={this.handleNameUpdate.bind(this)}></input>
              </label>
              </div>

              <div>
              <label>Item Image:
              <input type='text' value={this.state.Image} onChange={this.handleImageUpdate.bind(this)}></input>
              </label>
              </div>

              <div>
              <label>Item Description:
              <input type='text' value={this.state.Description} onChange={this.handleDescriptionUpdate.bind(this)}></input>
              </label>
              </div>
              
              <div>
              <label>Item Price:
              <input type='text' value={this.state.Price} onChange={this.handlePriceUpdate.bind(this)}></input>
              </label>
              </div>

            <div>
              <input type='submit' value='Add Item' />
            </div>

          </form>
          <Link to='/items'>Back to All items</Link>
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
    fetch(urlToCurrentDomain(`${Config.filmsAPI}`), {
      method : 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        authoredBy: this.state.authoredBy,
        Name      : this.state.Name,
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
      .then (json => navigate(`/film/${json._id}`))
      .catch(err => {
        this.setState({reportedError: err.message || 'Unknown'});
      })

  }

  resetForRetry() {
    this.setState({reportedError: null});
  }

  componentDidMount() {
    // this.getComments(this.props.itemID);
  }

}

export default AddItem;
