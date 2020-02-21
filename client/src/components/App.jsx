import React    from 'react';
import {Router} from "@reach/router";
import Films   from './Films';
import Film    from './Film';
import AddFilm from './AddFilm';

class App extends React.Component {

  render() {
    return (
      <Router>
        <Films   path='/' />
        <Film    path='/film/:filmID' />
        <AddFilm path='/add-film/' />
      </Router>
    );
  }

}

export default App;
