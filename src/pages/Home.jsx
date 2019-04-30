import React, { Component } from 'react';
import ProgressBar from '../components/header/progressbar/progress';
import Carousel1 from '../components/header/carousel/carousel';
import MyTable from '../components/contents/tables/tables_container';
import Book from '../components/contents/bookmaker/bookmaker';
import { Row, Col } from 'reactstrap';
import MenuLeague from '../components/contents/menu/menu_league';
import MenuTeam from '../components/contents/menu/menu_team';
import MenuCountry from '../components/contents/menu/menu_country';
import LongBook from '../components/contents/LongBook/longBook';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Carousel1 />
        <div className="container-fluid backg">
          <ProgressBar />
          <Row>
            <Col lg="3">
              <Row>
                <Col lg="12" xs="4"><MenuLeague /></Col>
                <Col lg="12" xs="4"><MenuTeam /></Col>
                <Col lg="12" xs="4"><MenuCountry /></Col>
              </Row>
            </Col>
            <Col lg="6">
              <MyTable />
            </Col>
            <Col lg="3">
              <Book />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
