export default class Cart {

  products              = [];
  attachedComponents = [];

  // Given a product object (from PHP api), returns true or
  // false to indicate if the product is in the cart
  contains(item) {
    return this.cartIndexOf(item) !== -1;
  }

  // Returns the index of a single item in the cart, or
  // -1 i the item is not in the cart
  cartIndexOf(item) {
    return this.products.findIndex(each => each.id === item.id);
  }

  // Add a single item to the cart
  addToCart(item) {
    if (!this.contains(item)) {
      this.products.push(item);
      this.updateComponents();
    }
  }

  // Remove a single item from the cart
  removeFromCart(item) {
    const cartIndex = this.cartIndexOf(item);
    if (cartIndex !== -1) {
      this.products.splice(cartIndex, 1);
      this.updateComponents();
    }
  }

  // Return all products (array) in the cart
  getItems() {
    return this.products;
  }

  // Return a count of all of the products in the cart
  getItemsCount() {
    return this.products.length;
  }

  // Returns the total price of all products in the cart
  getTotalPrice() {
    return this.products.reduce((acc, each) => {
      return acc += parseFloat(each.price);
    }, 0);
  }

  // Hack: register a react component so that it can
  // be updated when an item is added or removed from the
  // cart
  registerAttachedComponent(component) {
    if (!!component.forceUpdate) {
      this.attachedComponents.push(component);
    }
  }

  // Called whenever an item is added or removed, and
  // calls the 'forceUpdate' method of all components
  // that have been  registered. Also part of the hack
  updateComponents() {
    this.attachedComponents.forEach(component => {
      if (!!component) {
        component.forceUpdate();
      }
    })
  }

}