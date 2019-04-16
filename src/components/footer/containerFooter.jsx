import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './containerFooter.scss';

const MyFooter = () => <div className="footer-container">
  <Container className="text-size-footer">
    <Row>
      <Col xs="4" lg="1">
        <i class="margin-icon far fa-3x fa-address-book"><p>Contact US</p></i>
      </Col>
      <Col xs={{ size: 0, offset: 0 }} lg={{ size: 0, offset: 1 }}></Col>
      <Col xs="4" lg="1">
        <i class="margin-icon fas fa-3x fa-balance-scale"><p>Legal Mentions</p></i>
      </Col>
      <Col xs={{ size: 0, offset: 0 }} lg={{ size: 0, offset: 1 }}></Col>
      <Col xs="4" lg="1">
        <i class="margin-icon fab fa-3x fa-apple"><p>Available on Itunes</p></i>
      </Col>
      <Col xs={{ size: 0, offset: 0 }} lg={{ size: 0, offset: 1 }}></Col>
      <Col xs="4" lg="1">
        <i class="margin-icon fab fa-3x fa-google-play"><p>Available on Google Play</p></i>
      </Col>
      <Col xs={{ size: 0, offset: 0 }} lg={{ size: 0, offset: 1 }}></Col>
      <Col xs="4" lg="1">
        <i class="margin-icon fab fa-3x fa-facebook-square"><p>Facebook</p></i>
      </Col>
      <Col xs={{ size: 0, offset: 0 }} lg={{ size: 0, offset: 1 }}></Col>
      <Col xs="4" lg="1">
        <i class="margin-icon fab fa-3x fa-twitter"><p>Twitter</p></i>
      </Col>
    </Row>
    <Row>
      <Col xs="4" lg="1">
        <i class="far fa-3x fa-newspaper"><p>newsletters</p></i>
      </Col>
      <Col xs={{ size: 0, offset: 0 }} lg={{ size: 0, offset: 1 }}></Col>
      <Col xs="4" lg="1">
        <i class="fas fa-3x fa-futbol"><p>Actu-Foot</p></i>
      </Col>
      <Col xs={{ size: 0, offset: 0 }} lg={{ size: 0, offset: 1 }}></Col>
      <Col xs="4" lg="1">
        <i class="fab fa-3x fa-cc-paypal"><p>Pay With PayPal</p></i>
      </Col>
      <Col xs={{ size: 0, offset: 0 }} lg={{ size: 0, offset: 1 }}></Col>
      <Col xs="4" lg="1">
        <i class="far fa-3x fa-credit-card"><p>Pay With CB</p></i>
      </Col>
      <Col xs={{ size: 0, offset: 0 }} lg={{ size: 0, offset: 1 }}></Col>
      <Col xs="4" lg="1">
        <i class="fab fa-3x fa-react"><p>Using React</p></i>
      </Col>
      <Col xs={{ size: 0, offset: 0 }} lg={{ size: 0, offset: 1 }}></Col>
      <Col xs="4" lg="1">
        <i class="fas fa-3x fa-trophy"><p>Best site 2019</p></i>
      </Col>
    </Row>
  </Container>
</div>;

export default MyFooter;