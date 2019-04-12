import React, { Component } from 'react';
import Team1 from '../components/contents/Team1/Team1';
import Team2 from '../components/contents/Team2/Team2';
import TeamVS from '../components/contents/TeamVS/TeamVS';
import { Row, Col } from 'reactstrap';

export default class Bet extends Component {
  render() {
    return (
      <div className="container-fluid backg">
        <p>VS</p>
        <Row>
          <Col offset="2"></Col>
          <Col sm="3"><Team1 /></Col>
          <Col sm="2"><TeamVS /></Col>
          <Col sm="3"><Team2 /></Col>
          <Col offset="2"></Col>
        </Row>

      </div>
    );
  }
}
