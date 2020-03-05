import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';


class Stripe extends Component {
    onToken = (token, description, image, name, label, billingAddress) => {
    };
    render() {
        return (
            <StripeCheckout
            name="Movies.ie"
            image="https://img.icons8.com/nolan/96/movie.png"
            billingAddress
            locale="centre"
            stripeKey="pk_test_MjRMMPAX5d1iXIBTakGuopAc00U0CgLedr"
            label="Pay with 💳" 
            token={this.onToken}
            />
        )
  }
}

export default Stripe;