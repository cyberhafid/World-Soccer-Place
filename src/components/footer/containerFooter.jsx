import React, { Component } from 'react';
import { Container, Row, Col,} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './containerFooter.scss';
import ModalMyFooter from './Modal';

export default class MyFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div className="footer-container">
        <Container className="text-size-footer">
          <Row>
            <Col xs="4" lg="1">
              <NavLink to="/Contact"><i className="margin-icon far fa-3x fa-address-book"><p>Contact US</p></i></NavLink>
            </Col>
            <Col xs={{ size: 0, offset: 0 }} lg={{ size: 0, offset: 1 }}></Col>
            <Col xs="4" lg="1">
              <ModalMyFooter />
            </Col>
            <Col xs={{ size: 0, offset: 0 }} lg={{ size: 0, offset: 1 }}></Col>
            <Col xs="4" lg="1">
              <a href="https://www.apple.com/fr/itunes/download/"><i className="margin-icon fab fa-3x fa-apple"><p>Available on Itunes</p></i></a>
            </Col>
            <Col xs={{ size: 0, offset: 0 }} lg={{ size: 0, offset: 1 }}></Col>
            <Col xs="4" lg="1">
              <a href="https://play.google.com/store?hl=fr"><i className="margin-icon fab fa-3x fa-google-play"><p>Available on Google Play</p></i></a>
            </Col>
            <Col xs={{ size: 0, offset: 0 }} lg={{ size: 0, offset: 1 }}></Col>
            <Col xs="4" lg="1">
              <a href="https://facebook.com/"><i className="margin-icon fab fa-3x fa-facebook-square"><p>Facebook</p></i></a>
            </Col>
            <Col xs={{ size: 0, offset: 0 }} lg={{ size: 0, offset: 1 }}></Col>
            <Col xs="4" lg="1">
              <a href="https://twitter.com/?lang=fr"><i className="margin-icon fab fa-3x fa-twitter"><p>Twitter</p></i></a>
            </Col>
          </Row>
          <Row>
            <Col xs="4" lg="1">
              <i className="far fa-3x fa-newspaper"><p>newsletters</p></i>
            </Col>
            <Col xs={{ size: 0, offset: 0 }} lg={{ size: 0, offset: 1 }}></Col>
            <Col xs="4" lg="1">
              <i className="fas fa-3x fa-futbol"><p>Actu-Foot</p></i>
            </Col>
            <Col xs={{ size: 0, offset: 0 }} lg={{ size: 0, offset: 1 }}></Col>
            <Col xs="4" lg="1">
              <i className="fab fa-3x fa-cc-paypal"><p>Pay With PayPal</p></i>
            </Col>
            <Col xs={{ size: 0, offset: 0 }} lg={{ size: 0, offset: 1 }}></Col>
            <Col xs="4" lg="1">
              <i className="far fa-3x fa-credit-card"><p>Pay With CB</p></i>
            </Col>
            <Col xs={{ size: 0, offset: 0 }} lg={{ size: 0, offset: 1 }}></Col>
            <Col xs="4" lg="1">
              <i className="fab fa-3x fa-react"><p>Using React</p></i>
            </Col>
            <Col xs={{ size: 0, offset: 0 }} lg={{ size: 0, offset: 1 }}></Col>
            <Col xs="4" lg="1">
              <i className="fas fa-3x fa-trophy"><p>Best site 2019</p></i>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
