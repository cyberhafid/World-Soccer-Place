import React, { Component } from 'react';
<<<<<<< HEAD
=======
import Team1 from '../components/contents/Team1/Team1';
import Team2 from '../components/contents/Team2/Team2';
import TeamVS from '../components/contents/TeamVS/TeamVS';
import VsBanner from '../components/contents/vsbanner/vsbanner';
>>>>>>> 16e4f0471c088f4c3a884855d56643c6cc64d28a
import LongBook from '../components/contents/LongBook/longBook';
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

        <VsBanner />
        <Row>
          <Col offset="2"></Col>
          <Col sm="8"><LongBook /></Col>
          <Col offset="2"></Col>
        </Row>
      </div>
    );
  }
}
