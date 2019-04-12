import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import League from './pages/League';
import Bet from './pages/Bet';
import Contact from './pages/Contact';
import MyNavbar from './components/header/navbar/navbar';
import MyFooter from './components/footer/containerFooter';
<<<<<<< HEAD
import Book from './components/contents/bookmaker/bookmaker'
import { Row, Col } from "reactstrap"
import Matchencours from "./components/contents/menu/menubar"
import Matchresults from "./components/contents/menu/menubar2"
import Matchupcomming from "./components/contents/menu/menubar3"
import ClassmentLigue from './components/contents/tables/classement';

=======
>>>>>>> 1490cdb1dff8d7fb9206d43aeb6152e89b00b780

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div className="App">
        <MyNavbar />
        <Carousel1 />
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
              <ClassmentLigue />
           
            </Col>
          </Row>
=======
      <BrowserRouter>
        <div className="App">
          <MyNavbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/league" component={League} />
            <Route path="/bet" component={Bet} />
            <Route path="/contact" component={Contact} />
          </Switch>
>>>>>>> 1490cdb1dff8d7fb9206d43aeb6152e89b00b780
          <MyFooter />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

