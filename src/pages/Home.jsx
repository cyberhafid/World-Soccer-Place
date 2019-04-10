import React, { Component } from 'react'
import MyNavbar from '../components/header/navbar/navbar';
import ProgressBar from "../components/header/progressbar/progress"
import Carousel1 from "../components/header/carousel/carousel"
import MyTable from '../components/contents/tables/tables_container';
import MyFooter from '../components/footer/containerFooter';
import Book from '../components/contents/bookmaker/bookmaker'
import { Row, Col } from "reactstrap"
import Matchencours from "../components/contents/menu/menubar"
import Matchresults from "../components/contents/menu/menubar2"
import Matchupcomming from "../components/contents/menu/menubar3"

export default class Home extends Component {
  render() {
    return (
      <div>
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
            </Col>
          </Row>
          <MyFooter />
        </div>
      </div>
    )
  }
}
