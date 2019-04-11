import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './containerFooter.css';
import logoPlay from '../../assets/img/logo_play.png';
import logoStore from '../../assets/img/logo_store.png';

const MyFooter = () => <div className="footer-container">
  <Container >
    <Row>
      <Col lg="12" sm="12">
        <h3>About Us</h3>
      </Col>
    </Row>
    <Row>
      <Col lg="3" sm="12">
        <p>Contact Us</p>
      </Col>
      <Col lg="3" sm="12">
        <img src={logoStore} alt="logostore" />
      </Col>
      <Col lg="3" sm="12">
        <img src={logoPlay} alt="logoplay" />
      </Col>
      <Col lg="3" sm="12">
        <p>Article archive</p>
      </Col>
    </Row>
    <Row>
      <Col lg="3" sm="12">
        <p>Legal mentions</p>
      </Col>
      <Col lg="3" sm="12">
        <i className="fab fa-twitter"></i>
      </Col>
      <Col lg="3" sm="12">
        <i className="fab fa-facebook"></i>
      </Col>
      <Col lg="3" sm="12">
        <p>Executive jobs</p>
      </Col>
    </Row>
    <Row>
      <Col lg="3" sm="12">
        <p>Email alerts and newsletters</p>
      </Col>
      <Col lg="6" sm="12">
      </Col>
      <Col lg="3" sm="12">
        <p>Careers</p>
      </Col>
    </Row>
  </Container>
</div>;

export default MyFooter;