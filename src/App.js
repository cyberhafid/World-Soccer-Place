import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import MyNavbar from './components/navbar/navbar';
import Progressbarre from "./components/header/progressbarre/progressbarre"
import Carousel1 from "./components/header/carousel/carousel"
import Menuv from "./components/menu/menubar"
import Tableaut from "./components/menu/tableau"

import { library } from './assets/fonts/@fortawesome/fontawesome-svg-core';
import { faEnvelope, faTruck, faKey, faBomb } from './assets/fonts/@fortawesome/free-solid-svg-icons';

library.add(faEnvelope, faTruck, faBomb, faKey);




class App extends Component {
  render() {
    return (
      <div className="App">




        <div className="container">
          <div Container>

            <Row>
              <Col> <MyNavbar /></Col>
            </Row>


            <Row>
              <Col>  <Carousel1 /></Col>
            </Row>

            <Row>
              <Col><Progressbarre /></Col>
            </Row>



            <Row>
              <Col sm="3">   <Menuv /></Col>
              <Col sm="6"> <Tableaut /></Col>
              <Col sm="6">3 of 3</Col>
            </Row>









          </div>
        </div>
      </div>
    );
  }
}

export default App;
