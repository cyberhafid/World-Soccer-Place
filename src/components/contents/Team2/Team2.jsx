import React from 'react';
import axios from 'axios';
import { Table } from 'reactstrap';
import './Team2.scss';

export default class Example extends React.Component {

  state = {
    competitions: [],
    isLoading: true,
    errors: null
  };

  getcompetitions() {

    axios
      .get(`http://api.football-api.com/2.0/team/${this.props.teamId}?Authorization=${process.env.REACT_APP_API_KEY}`)

      .then(response => {
        const competitions = response.data.squad;
        const teamVisitor = response.data.venue_city;
        this.setState({
          competitions,
          teamVisitor,
          isLoading: false
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

      <React.Fragment>

        <div className="nameTeam2">
          <Table className="team2" borderless>
            <thead>

              <tr>
                <th></th>
                <th className="titleTeam2">{this.state.teamVisitor}</th>
              </tr>
            </thead>
            <tbody className="nameTeam2">

              {!isLoading ? (

                competitions.filter((competition, idx) => competition.comp_id = '1221' && idx < '11').map((competition, idx) => {

                  const { id, name, age, position } = competition;
                  return (

                    <tr key={idx}>

                      <th scope="row" key={id}></th>
                      <td>{name}</td>

                      <td>{age}</td>

                      <td>{position}</td>
                    </tr>

                  );
                })
              ) : (<tr><td>Loading...</td></tr>)}

            </tbody>
          </Table>
        </div>
      </React.Fragment>
    );
  }
}