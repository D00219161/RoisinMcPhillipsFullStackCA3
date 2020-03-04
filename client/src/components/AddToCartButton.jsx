import React from 'react';

class AddToCartButton extends React.Component {

  // This is a hack: here we register the current component
  // with the cart class, so that when an item is added or
  // removed, the current component will be updated. Proper
  // global state could be used to do this is a safer way
  componentDidMount() {
    this.props.cart.registerAttachedComponent(this);
  }

  // Render
  render() {

    if (this.props.cart.contains(this.props.merch)) {
      return (
        <a href='#!' className='btn btn-danger' onClick={this.handleClick.bind(this)}>Remove from Cart</a>
      );
    }

    else {
      return (
        <a href='#!' className='btn btn-primary' onClick={this.handleClick.bind(this)}>Add to Cart</a>
      );
    }
  }

  // Executed when the add or remove form of the current component
  // is clicked. Adds or removes this buttons item to the cart (toggle)
  handleClick () {
    if (this.props.cart.contains(this.props.merch)) {
      this.props.cart.removeFromCart(this.props.merch);
    } else {
      this.props.cart.addToCart(this.props.merch)
    }
  }

}

export default AddToCartButton;