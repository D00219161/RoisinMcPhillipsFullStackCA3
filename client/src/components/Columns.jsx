import React, { Component } from 'react';
import { Container, Row, Col} from 'react-bootstrap';

class Grid extends Component {

    render() {
      return (

<Container>
  <Row>
    <Col xs>First, but unordered</Col>
    <Col xs={{ order: 12 }}>Second, but last</Col>
    <Col xs={{ order: 1 }}>Third, but second</Col>
  </Row>
</Container>

);
    
}

}

export default Grid;