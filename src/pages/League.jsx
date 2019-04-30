import React, { Component } from 'react';
import MyTable from '../components/contents/tables/tables_container';
import Book from '../components/contents/bookmaker/bookmaker';
import { Row, Col } from 'reactstrap';
import MenuLeague from '../components/contents/menu/menu_league';
import MenuTeam from '../components/contents/menu/menu_team';
import MenuCountry from '../components/contents/menu/menu_country';
import ClassmentTrie from '../components/contents/tables/classement';

export default class League extends Component {
  render() {
    return (
      <div className="container-fluid backg">
        <Row>
          <Col sm='3'>
            <MenuLeague />
            <MenuTeam />
            <MenuCountry />
          </Col>
          <Col sm='6'>
            <MyTable />
          </Col>
          <Col sm='3'>
            <Book />
            <ClassmentTrie />
          </Col>
        </Row>
      </div>
    );
  }
}