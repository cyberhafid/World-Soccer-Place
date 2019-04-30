import React, { Component } from 'react';
import VsBanner from '../components/contents/vsbanner/vsbanner';
import LongBook from '../components/contents/LongBook/longBook';
import { Row, Col } from 'reactstrap';
import './bet.css';
import Axios from 'axios';
import Team1 from '../components/contents/Team1/Team1';
import Team2 from '../components/contents/Team2/Team2';
import TeamVS from '../components/contents/TeamVS/TeamVS';

export default class Bet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matchId: 0,
      localTeamId: null,
      visitorTeamId: null,
      loading: false,
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    Axios.get(`http://api.football-api.com/2.0/matches/${id}?Authorization=${process.env.REACT_APP_API_KEY}`)
      .then((response) => {
        console.log(response);
        this.setState({ matchId: id, localTeamId: response.data.localteam_id, visitorTeamId: response.data.visitorteam_id, loading: false });
      })
      .catch(err => console.log(err));
  }
  render() {
    if (this.state.loading) {
      return <p>Loading ...</p>;
    }
    return (
      <div className="container-fluid backg">
        <VsBanner />
        <Row>
          <Col offset="2" className="diffPad"></Col>
          <Col sm="3" md="4"><Team1 teamId={this.state.localTeamId} /></Col>
          <Col sm="2" md="2"><TeamVS /></Col>
          <Col sm="3" md="4"><Team2 teamId={this.state.visitorTeamId} /></Col>
          <Col offset="2"></Col>
        </Row>
        <Row>
          <Col offset="2"></Col>
          <Col sm="8"><LongBook matchId={this.state.matchId} /></Col>
          <Col offset="2"></Col>
        </Row>
      </div>
    );
  }
}
