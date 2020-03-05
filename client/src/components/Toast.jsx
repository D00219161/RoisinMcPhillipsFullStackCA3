import React, { Component } from 'react';
import {Toast} from 'react-bootstrap';

class ToastNote extends Component {

    render() {
      return (
          <Toast id="toast">
    <Toast.Header>
      <img src="https://img.icons8.com/doodle/48/000000/popcorn.png" className="rounded mr-2" alt="image" />
      <medium className="mr-auto">Welcome To Movies.ie</medium>
      <img src="https://img.icons8.com/doodle/48/000000/popcorn.png" className="rounded mr-2" alt="image" />
    </Toast.Header>
    <Toast.Body>Enjoy our Film selection and check out our merch!
    </Toast.Body>
    </Toast>
        );
    }
  }
  
  export default ToastNote;
