import React       from 'react';
import Product     from './Product';
import * as Config from '../config.json'

class ItemList extends React.Component {

  // #######################################################
  // # Local state
  // #######################################################

  state = {
    // Note: this is our array of products that will be
    // rendered. It starts life as a null object, this will
    // be updated when the component mounts --  see
    // componentDidMount event handler method
    items          : null,
    itemsRequested : false
  }

  // #######################################################
  // # Render
  // #######################################################

  render() {

    // Indicates there request to /products has been made, but
    // there was some form of error
    if (this.state.items === null && this.state.itemsLoaded === true) {
      return (
        <p className='text-center alert alert-warning mr-4 ml-4'>Error loading items. Try again later.</p>
      );
    }

    // While the products array is null (meaning no attempt has
    // yest been made to attempt to load the products from
    // the php script)
    else if (this.state.items === null) {
      return (
        <p className='text-center'>Loading items...</p>
      );
    }

    // If the products array is set, but is empty.
    else if (this.state.items.length === 0) {
      return (
        <p className='text-center'>Sorry, no items are available</p>
      );
    }

    // Or, if there are items in the item list
    else {
      return (
        // For each item in the items array, we create
        // a item component (passing each item as a prop)
        <div className='product-list pt-3 pl-3 pr-3'>
          {this.state.items.map(item => (
            <Item item={item} cart={this.props.cart} key={`item-${item.id}`} />
          ))}
        </div>
      )
    }
  }

  // Invoked when the component is created in the DOM (like an onLoad)
  componentDidMount() {
    // Fetch from PHP script and update the products state value
    // React will automatically 'react' to this change and re-render
    // the ProductList component.
    fetch(Config.api.getItems) //api
      .then (res  => res.json())
      .then (json => {
        this.setState({items: json});
        this.setState({itemsLoaded: true});
      })
      .catch(err => {
        this.setState({itemsLoaded: true});
      })
  }

}

export default ItemList;