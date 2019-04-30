import React, { Component } from 'react';
import VsBanner from '../components/contents/vsbanner/vsbanner';
import LongBook from '../components/contents/LongBook/longBook';
import { Row, Col } from 'reactstrap';
import Axios from 'axios';

export default class Bet extends Component {
  constructor(props){
    super(props);
    this.state = {
      localTeamId: null,
      visitorTeamId: null,
      loading: true
    };
  }

  componentDidMount(){
    const id = this.props.match.params.id;
    Axios.get(`http://api.football-api.com/2.0/matches/${id}?Authorization=565ec012251f932ea4000001fa542ae9d994470e73fdb314a8a56d76`)  
      .then((response) => {
        console.log(response);
        this.setState({localTeamId: response.data.localteam_id, visitorTeamId: response.data.visitorteam_id, loading: false});
      })
      .catch(err => console.log(err));
  }
  render() {
    if(this.state.loading){
      return <p>Loading ...</p>;
    }
    return (
      <div className="container-fluid backg">
        <p>VS</p>
        <Row>
    
        </Row>

        <VsBanner />
        <Row>
          <Col offset="2"></Col>
          <Col sm="8"><LongBook /></Col>
          <Col offset="2"></Col>
        </Row>
      </div>
    );
  }
}
