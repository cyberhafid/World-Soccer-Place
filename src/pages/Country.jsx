import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import MenuLeague from '../components/contents/menu/menu_league';
import MenuTeam from '../components/contents/menu/menu_team';
import MenuCountry from '../components/contents/menu/menu_country';
import MyTable from '../components/contents/tables/tables_container';
import Book from '../components/contents/bookmaker/bookmaker';

export default class Country extends Component {
  render() {
    return (
      <div className="">
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
    );
  }
}