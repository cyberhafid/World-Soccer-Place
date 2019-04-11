import React, { Component } from 'react';
import './App.css';
import MyNavbar from './components/header/navbar/navbar';
import ProgressBar from "./components/header/progressbar/progress"
import Carousel1 from "./components/header/carousel/carousel"
import MyTable from './components/contents/tables/tables_container';
import MyFooter from './components/footer/containerFooter';
import Book from './components/contents/bookmaker/bookmaker';
import LongBook from './components/contents/LongBook/longBook';
import Team1 from './components/contents/Team1/Team1';
import Team2 from './components/contents/Team2/Team2';
import TeamVS from './components/contents/TeamVS/TeamVS';

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
          <p>VS</p>
          <Row>
            <Col offset="2"></Col>
            <Col sm="3"><Team1 /></Col>
            <Col sm="2"><TeamVS /></Col>
            <Col sm="3"><Team2 /></Col>
            <Col offset="2"></Col>

          </Row>
          <Row>
            <Col offset="2"></Col>
            <Col sm="8"><LongBook /></Col>
            <Col offset="2"></Col>
          </Row>

          <MyFooter />
        </div>
      </div>
    );
  }
}

export default App;
