import React, { Component } from 'react';
import ProgressBar from '../components/header/progressbar/progress';
import Carousel1 from '../components/header/carousel/carousel';
import MyTable from '../components/contents/tables/tables_container';
import Book from '../components/contents/bookmaker/bookmaker';
import { Row, Col } from 'reactstrap';
import MenuLeague from '../components/contents/menu/menu_league';
import MenuTeam from '../components/contents/menu/menu_team';
import MenuCountry from '../components/contents/menu/menu_country';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Carousel1 />
        <div className="container-fluid backg">
          <ProgressBar />
          <Row>
            <Col sm="3">
              <MenuLeague />
              <MenuTeam />
              <MenuCountry />
            </Col>
            <Col sm="6">
              <MyTable />
            </Col>
            <Col sm="3">
              <Book />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}