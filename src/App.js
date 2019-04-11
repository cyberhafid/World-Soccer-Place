import React, { Component } from 'react';
import './App.css';

import ProgressBar from "./components/header/progressbar/progress"

import MyTable from './components/contents/tables/tables_container';
import MyFooter from './components/footer/containerFooter';
import Book from './components/contents/bookmaker/bookmaker'
import { Row, Col } from "reactstrap"
import Matchencours from "./components/contents/menu/menubar"
import Matchresults from "./components/contents/menu/menubar2"
import Matchupcomming from "./components/contents/menu/menubar3"

import ClassmentTrie from './components/contents/tables/classement2';


class App extends Component {
  render() {
    return (
      <div className="App">
      
        <div className="container-fluid backg">
          <ProgressBar />
          <Row>
            <Col sm="3">
              <Matchencours />
              <Matchresults />
              <Matchupcomming />
            </Col>
            <Col sm="6">
              <MyTable />
          </Col>
            <Col sm="3">
              <Book />
              <ClassmentTrie/>
           
            </Col>
          </Row>
          <MyFooter />
        </div>
      </div>
    );
  }
}

export default App;
