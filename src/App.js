import React, { Component } from 'react';
import './App.css';
import MyNavbar from './components/header/navbar/navbar';
import ProgressBar from "./components/header/progressbar/progress"
import Carousel1 from "./components/header/carousel/carousel"
import MyTable from './components/contents/tables/tables_container';
import MyFooter from './components/footer/containerFooter';
import Book from './components/contents/bookmaker/bookmaker';
import LongBook from './components/contents/LongBook/longBook';

import { Row, Col } from "reactstrap"
import Matchencours from "./components/contents/menu/menubar"
import Matchresults from "./components/contents/menu/menubar2"
import Matchupcomming from "./components/contents/menu/menubar3"

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyNavbar />
        <Carousel1 />
        <div className="container-fluid backg">
          <ProgressBar />
          <Row>
            <Col sm="2">
            
            </Col>
            <Col sm="8">
            <LongBook />
          </Col>
            <Col sm="2">
            </Col>
          </Row>
          <MyFooter />
        </div>
      </div>
    );
  }
}

export default App;
