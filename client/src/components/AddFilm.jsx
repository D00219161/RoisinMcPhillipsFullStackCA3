import React              from 'react';
import {navigate, Link}   from '@reach/router';
import urlToCurrentDomain from '../lib/urlToCurrentDomain';
import * as Config        from '../config.json'

class AddFilm extends React.Component {

  // #######################################################
  // # Local state
  // #######################################################

  state = {
    Title     : '',
    Year      : '',
    Genre     : '',
    Direcor   : '',
    Starring  : ''
  }

  // #######################################################
  // # Render
  // #######################################################

  render() {

    if (this.state.reportedError) {
      return (
        <div>
          <h1>Error</h1>
          <p>Sorry, there was an error creating the film. The error was: {this.state.reportedError || 'Unknown'}</p>
          <button onClick={this.resetForRetry.bind(this)}>Try again</button>&nbsp;|&nbsp;
          <Link to='/'>Back to All Films</Link>
        </div>
      );
    } else if (this.state.processingAdd) {
      return (
        <div>Adding film...</div>
      );
    } else {
      return (
        <div>
          <h1>Add a film</h1>
          <form onSubmit={this.handleSubmit.bind(this)}>

            <div>
              <label>Film Title:
              <textarea value={this.state.Title} onChange={this.handleTitleUpdate.bind(this)}></textarea>
              
              Film Year:
              <textarea value={this.state.Year} onChange={this.handleYearUpdate.bind(this)}></textarea>
              
              Film Genre:
              <textarea value={this.state.Genre} onChange={this.handleGenreUpdate.bind(this)}></textarea>
              
              Film Director:
              <textarea value={this.state.Director} onChange={this.handleDirectorUpdate.bind(this)}></textarea>

              Film Starring:
              <textarea value={this.state.Starring} onChange={this.handleStarringUpdate.bind(this)}></textarea>
            
              </label>
            </div>

            {/* <div>
              <label>film Content:
                <textarea value={this.state.content} onChange={this.handleContentUpdate.bind(this)}></textarea>
              </label>
            </div> */}

            <div>
              <input type='submit' value='Add Film' />
            </div>

          </form>
          <Link to='/'>Back to All films</Link>
        </div>
      );
    }
  }

  handleTitleUpdate(e) {
    this.setState({Title: e.target.value || null});
  }

  handleYearUpdate(e) {
    this.setState({Year: e.target.value || null});
  }

  handleGenreUpdate(e) {
    this.setState({Genre: e.target.value || null});
  }

  handleDirectorUpdate(e) {
    this.setState({Director: e.target.value || null});
  }

  handleStarringUpdate(e) {
    this.setState({Starring: e.target.value || null});
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
        Title     : this.state.Title,
        Year      : this.state.Year,
        Genre     : this.state.Genre,
        Director  : this.state.Director,
        Starring  : this.state.Starring
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
    // this.getComments(this.props.filmID);
  }

}

export default AddFilm;