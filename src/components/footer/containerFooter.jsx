import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './containerFooter.css';
import logoPlay from '../../assets/img/logo_play.png';
import logoStore from '../../assets/img/logo_store.png';
import logo from '../../assets/img/logo.png';
const MyFooter = () => <div className="footer-container">
  <Container >
  
    <Row>

      <Col lg="3" sm="12">

        <Row> <img src={logo} alt="footlogo" height="50"></img> </Row>

        <Row>
          <p>About Us</p>
        </Row>
        <Row>
          <p>Contact Us</p>
        </Row>
      </Col>

      <Col>
    
        <p>Careers</p>
        <p>Executive jobs</p>

        <p>Email alerts and newsletters</p>
      </Col>

      <Col>
        <Row>
  
          <Col lg="3" sm="12">
            <i className="fab fa-2x fa-facebook-f" ></i>
          </Col>
          <Col lg="3" sm="12">
            <i className="fab fa-2x fa-twitter-square"></i>
          </Col>

        </Row>
      </Col>

      <Col>
     
        <Row>
          <img src={logoPlay} alt="logoplay" />
        </Row>
        <Row>
          <img src={logoStore} alt="logoplay" />
        </Row>
      </Col>

    </Row>
   
  </Container>
</div>;

export default MyFooter;
