import React from 'react';
import './menu.css';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Axios from 'axios';

export default class MenuCountry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      regions: []
    };
  }

  componentDidMount() {
    Axios.get(`http://api.football-api.com/2.0/competitions?Authorization=${process.env.REACT_APP_API_KEY}`)
      .then(res => {
        console.log(res.data);
        const regions = res.data;
        this.setState({ regions });
      });
  }
  render() {
    return (
      <div className="list-group" >
        <ListGroup>
          <ListGroupItem className="bg-list"><h2 className="title-tab">Country</h2></ListGroupItem>
          {
            this.state.regions.filter((elem, pos, arr) => {
              return arr.map(el => el.region).indexOf(elem.region) === pos;
            }).map((region, idx) => {
              return (
                <ListGroupItem key={idx}><span className="titre-menu"><NavLink to={`/league/${region.id}`}>{region.region}</NavLink></span></ListGroupItem>
              );
            })
          }
        </ListGroup>
      </div>
    );
  }
}