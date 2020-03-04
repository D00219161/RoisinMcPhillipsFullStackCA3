import React    from 'react'; 
import {Router} from "@reach/router";
import Navagation from './Navagation';
import Films   from './Films';
import Film    from './Film';
import AddFilm from './AddFilm';
import Actors   from './Actors';
import Actor    from './Actor';
import AddActor from './AddActor';
import Directors   from './Directors';
import Director    from './Director';
import AddDirector from './AddDirector';
import Items    from './Items';
import Item     from './Item';
import AddItem from './AddItem';
import Footer   from './Footer';
import Cart     from '../lib/Cart';
import '../scss/main.css';
class App extends React.Component {

  state = {
    cart : new Cart()
  }

  render() {
    return (
      <div className='App'>

<Navagation cart={this.state.cart}/>
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
        <Items   path='/items' />
        <Item    path='/item/:itemID' />
        <AddItem path='/add-item/' />
        </Router>
        <Footer />
        </div>
    );
  }

}

export default App;

