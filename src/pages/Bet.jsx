import React, { Component } from 'react';
import LongBook from '../components/contents/LongBook/longBook';
import { Row, Col } from 'reactstrap';

export default class Bet extends Component {
  render() {
    return (
      <div className="container-fluid backg">
        <Row>
          <Col offset="2"></Col>
          <Col sm="8"><LongBook /></Col>
          <Col offset="2"></Col>
        </Row>
      </div>
    );
  }
}
