import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import MyNavbar from './components/navbar/navbar';
import Progressbarre from "./components/header/progressbarre/progressbarre"
import Carousel1 from "./components/header/carousel/carousel"
import Menuv from "./components/menu/menubar"
import Tableaut from "./components/menu/tableau"


class App extends Component {
  render() {
    return (
      <div className="App">
        <MyNavbar />
        <Carousel1 />
        <div className="container-fluid backg">
        <br></br>
          <Progressbarre />
            <Row>
              <Col sm="3">   <Menuv /></Col>
              <Col sm="6"> <Tableaut /></Col>
              <Col sm="6">3 of 3</Col>
            </Row>
          </div>
        </div>
    );
  }
}

export default App;
