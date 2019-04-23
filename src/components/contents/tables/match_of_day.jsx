import React from 'react';
import axios from 'axios';
import { Table } from 'reactstrap';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './table.css';

const Child = ({ match }) => (
  <div>
    {match.params.id}
  </div>
);

export default class MatchOfDay extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      competitions: [],
      isLoading: true,
      errors: null,

    };
  }
  
  getcompetitions() {

    axios
      .get('http://api.football-api.com/2.0/matches?from_date=10.04.2019&to_date=15.04.2019&Authorization=565ec012251f932ea4000001fa542ae9d994470e73fdb314a8a56d76')
      .then(response => {
        const competitions = response.data;
        this.setState({
          competitions,
          isLoading: false,
         
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.getcompetitions();
  }

  render() {
    const { isLoading, competitions } = this.state;
    return (
      <Router>
        <React.Fragment>

          <div className="table table-striped table-condensed table-hover" >
            <Table id="table-1">

              <tbody>

                {!isLoading ? (

                  competitions.filter((competition, idx) => competition.comp_id = '1221' && idx < '10').map((competition, idx) => {

                    const { id, formatted_date, localteam_name, visitorteam_name, localteam_score, visitorteam_score } = competition;
                    return (

                      <tr key={idx}>
                        <Link to={'/bet/' + id}>  <td className="direct toMarge-2">{formatted_date} •</td> </Link>
                        <td >{localteam_name}</td>
                        <td>{localteam_score}</td>
                        <td >{Child}</td>
                        <td >{visitorteam_score}</td>
                        <td >{visitorteam_name}</td>
                      </tr>

                    );
                  })
                ) : (<tr><td>Loading...</td></tr>)}
                <Route path={'/league/:id'} component={Child} />
              </tbody>
            </Table>

          </div>
        </React.Fragment>  </Router>
    );
  }
}

