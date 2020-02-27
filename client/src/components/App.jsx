import React    from 'react'; 
import {Router} from "@reach/router";
import Films   from './Films';
import Film    from './Film';
import AddFilm from './AddFilm';
import Actors   from './Actors';
import Actor    from './Actor';
import AddActor from './AddActor';
import Directors   from './Directors';
import Director    from './Director';
import AddDirector from './AddDirector';
import Footer   from './Footer'

class App extends React.Component {

  render() {
    return (
      <div className='App'>

      <Router>
        <Films   path='/' />
        <Film    path='/film/:filmID' />
        <AddFilm path='/add-film/' />
        <Actors   path='/actors' />
        <Actor    path='/actor/:actorID' />
        <AddActor path='/add-actor/' />
        <Directors   path='/directors' />
        <Director    path='/director/:directorID' />
        <AddDirector path='/add-director/' />
        </Router>
        <Footer />
        </div>
    );
  }

}

export default App;

